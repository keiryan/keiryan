// Fetches album art, a 30-second preview, and an Apple Music link for each
// track in the "on repeat" list, using the free iTunes Search API (no auth).
//
// Usage:
//   node scripts/fetch-music.mjs
//
// Edit the QUERIES list below (one "Song — Artist" per line). The script
// downloads each cover into public/music/ and prints the `onRepeat` array to
// paste into src/lib/data.ts. Re-run any time the rotation changes.

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_MUSIC = resolve(__dirname, "../public/music");

// One entry per track. Mark the ones you want as large bento tiles with `*`.
const QUERIES = [
  "Are You Looking Up — Mk.gee *",
  "Redbone Awaken My Love — Childish Gambino",
  "Bad Habit — Steve Lacy *",
  "Snooze SOS — SZA",
  "Sunflower Spider-Man — Post Malone Swae Lee",
  "Flashing Lights Graduation — Kanye West",
];

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

async function fetchTrack(raw) {
  const featured = raw.trim().endsWith("*");
  const query = raw.replace(/\*\s*$/, "").trim();
  const term = encodeURIComponent(query.replace(/—|–|-/g, " "));
  const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=song&limit=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`iTunes lookup failed for "${query}" (${res.status})`);
  const { results } = await res.json();
  if (!results.length) throw new Error(`No match for "${query}"`);
  const r = results[0];

  const slug = slugify(`${r.artistName}-${r.trackName}`);
  const artUrl = r.artworkUrl100.replace("100x100bb", "600x600bb");
  const coverRes = await fetch(artUrl);
  const buf = Buffer.from(await coverRes.arrayBuffer());
  await mkdir(PUBLIC_MUSIC, { recursive: true });
  await writeFile(resolve(PUBLIC_MUSIC, `${slug}.jpg`), buf);

  return {
    title: r.trackName,
    artist: r.artistName,
    album: r.collectionName,
    cover: `/music/${slug}.jpg`,
    preview: r.previewUrl,
    link: r.trackViewUrl.split("?")[0],
    featured,
  };
}

const tracks = [];
for (const q of QUERIES) {
  try {
    const t = await fetchTrack(q);
    tracks.push(t);
    console.error(`✓ ${t.artist} — ${t.title}`);
  } catch (err) {
    console.error(`✗ ${err.message}`);
  }
}

const ts = tracks
  .map(
    (t) =>
      `  {\n` +
      `    title: ${JSON.stringify(t.title)},\n` +
      `    artist: ${JSON.stringify(t.artist)},\n` +
      `    album: ${JSON.stringify(t.album)},\n` +
      `    cover: ${JSON.stringify(t.cover)},\n` +
      `    preview: ${JSON.stringify(t.preview)},\n` +
      `    link: ${JSON.stringify(t.link)},\n` +
      (t.featured ? `    featured: true,\n` : ``) +
      `  },`,
  )
  .join("\n");

console.log("\n// Paste into src/lib/data.ts as the onRepeat array:\n");
console.log(`export const onRepeat: Track[] = [\n${ts}\n];`);
