// Imports an Apple Music playlist into the `onRepeat` list. Reads the exact
// tracks from the playlist's public web page (title, artist, album, artwork,
// direct Apple Music link, store ID), then looks up a 30-second preview for
// each by its store ID via the iTunes lookup API. No auth, no backend.
//
// Usage:
//   node scripts/fetch-music.mjs "<apple-music-playlist-url>"
//
// Downloads each cover into public/music/ and prints the `onRepeat` array to
// paste into src/lib/data.ts. Mark large bento tiles by adding their store IDs
// to FEATURED_IDS below (or edit `featured: true` in data.ts afterward).

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_MUSIC = resolve(__dirname, "../public/music");

const PLAYLIST_URL =
  process.argv[2] ??
  "https://music.apple.com/us/playlist/heavy-rotation/pl.pm-58a310e0f946cdbc902ca9c7821d17aa";

// Store IDs (the trailing `?i=` value of a song's Apple Music URL) to render as
// large 2x2 bento tiles. Everything else is a normal square.
const FEATURED_IDS = new Set([
  "1591302533", // up to me — LANY
  "712862708", // Walking On a Dream — Empire Of The Sun
  "1613597974", // I Blame The World — Sasha Alex Sloan
]);

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15";

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function walkTracks(node, out) {
  if (Array.isArray(node)) {
    for (const v of node) walkTracks(v, out);
  } else if (node && typeof node === "object") {
    if (node.trackNumber !== undefined && node.title && node.contentDescriptor?.identifiers?.storeAdamID) {
      out.push(node);
    }
    for (const v of Object.values(node)) walkTracks(v, out);
  }
}

async function previewFor(id) {
  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
    const { results } = await res.json();
    return results?.[0]?.previewUrl ?? "";
  } catch {
    return "";
  }
}

const html = await (await fetch(PLAYLIST_URL, { headers: { "User-Agent": UA } })).text();
const blobMatch = html.match(/id="serialized-server-data">(.*?)<\/script>/s);
if (!blobMatch) throw new Error("Could not find playlist data on the page.");
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const data = JSON.parse(decode(blobMatch[1]));

const rawTracks = [];
walkTracks(data, rawTracks);

const seen = new Set();
const tracks = [];
for (const t of rawTracks) {
  const id = t.contentDescriptor.identifiers.storeAdamID;
  if (seen.has(id)) continue;
  seen.add(id);

  const title = t.title;
  const artist = t.subtitleLinks?.[0]?.title ?? t.artistName ?? "";
  const album = t.tertiaryLinks?.[0]?.title ?? "";
  const link = (t.contentDescriptor.url ?? "").split("&")[0];
  const artTemplate = t.artwork?.dictionary?.url;

  const slug = slugify(`${artist}-${title}`);
  if (artTemplate) {
    const artUrl = artTemplate.replace("{w}", "600").replace("{h}", "600").replace("{f}", "jpg");
    const buf = Buffer.from(await (await fetch(artUrl)).arrayBuffer());
    await mkdir(PUBLIC_MUSIC, { recursive: true });
    await writeFile(resolve(PUBLIC_MUSIC, `${slug}.jpg`), buf);
  }

  const preview = await previewFor(id);
  tracks.push({
    title,
    artist,
    album,
    cover: `/music/${slug}.jpg`,
    preview,
    link,
    featured: FEATURED_IDS.has(id),
  });
  console.error(`${preview ? "✓" : "·"} ${artist} — ${title}${preview ? "" : "  (no preview)"}`);
}

const ts = tracks
  .map((t) => {
    const lines = [
      `    title: ${JSON.stringify(t.title)},`,
      `    artist: ${JSON.stringify(t.artist)},`,
      `    album: ${JSON.stringify(t.album)},`,
      `    cover: ${JSON.stringify(t.cover)},`,
      `    preview: ${JSON.stringify(t.preview)},`,
      `    link: ${JSON.stringify(t.link)},`,
      t.featured ? `    featured: true,` : null,
    ].filter(Boolean);
    return `  {\n${lines.join("\n")}\n  },`;
  })
  .join("\n");

console.log("\n// Paste into src/lib/data.ts as the onRepeat array:\n");
console.log(`export const onRepeat: Track[] = [\n${ts}\n];`);
