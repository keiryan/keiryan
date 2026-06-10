import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, Check, ExternalLink, Headphones, Loader2, Music2, Send, Youtube } from "lucide-react";

import { Layout } from "@/components/layout";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/data";

const platforms = [
  { id: "Apple Music", label: "Apple Music", icon: Music2 },
  { id: "YouTube", label: "YouTube", icon: Youtube },
  { id: "Spotify", label: "Spotify", icon: Headphones },
  { id: "Other", label: "Other", icon: ExternalLink },
] as const;

type Platform = (typeof platforms)[number]["id"];
type SubmissionState = "idle" | "sending" | "sent" | "error";

const musicSuggestionEndpoint =
  import.meta.env.VITE_MUSIC_SUGGESTION_ENDPOINT ?? `https://formsubmit.co/ajax/${siteConfig.email}`;

const Hobbies = () => {
  const [platform, setPlatform] = useState<Platform>("Apple Music");
  const [name, setName] = useState("");
  const [track, setTrack] = useState("");
  const [link, setLink] = useState("");
  const [note, setNote] = useState("");
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  const searchQuery = encodeURIComponent(track.trim());
  const appleMusicSearchUrl = searchQuery ? `https://music.apple.com/us/search?term=${searchQuery}` : "";
  const youtubeSearchUrl = searchQuery ? `https://www.youtube.com/results?search_query=${searchQuery}` : "";
  const isSending = submissionState === "sending";
  const isSent = submissionState === "sent";
  const canSubmit = (track.trim() || link.trim()) && !isSending;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    setSubmissionState("sending");

    try {
      const response = await fetch(musicSuggestionEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: `Music suggestion: ${track.trim() || "new song"}`,
          _template: "table",
          suggested_by: name.trim() || "Anonymous",
          song: track.trim() || "Not provided",
          platform,
          link: link.trim() || "Not provided",
          note: note.trim() || "No note",
          source: "keiryan.com hobbies page",
        }),
      });

      if (!response.ok) {
        throw new Error("Music suggestion submission failed");
      }

      setSubmissionState("sent");
      setName("");
      setTrack("");
      setLink("");
      setNote("");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <Layout title="Hobbies">
      <section className="container-prose py-20">
        <h1 className="font-display text-5xl font-bold">Hobbies</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The things I do when nobody's paying me to do anything.
        </p>

        {/* Gaming */}
        <Reveal>
          <section className="mt-20">
            <h2 className="font-display text-3xl font-semibold">PC Gaming</h2>
            <p className="prose-article">
              FPS games are my home base. Ashamed to say I have 3,500 hours in Fortnite and about
              1k in Overwatch.
            </p>

            <div className="mt-6 rounded-lg border border-border bg-card p-5 font-mono text-sm">
              <p className="text-muted-foreground">// the rig</p>
              <ul className="mt-2 space-y-1">
                <li>CPU: Intel i7-8700 · GPU: RTX 2080</li>
                <li>RAM: 32GB · Storage: 1TB</li>
                <li>Currently playing: Fortnite, Overwatch</li>
                <li>Status: "done" (fourth time)</li>
              </ul>
            </div>
          </section>
        </Reveal>

        {/* Hardware */}
        <Reveal>
          <section className="mt-24 border-l-2 border-primary pl-6">
            <h2 className="font-display text-3xl font-semibold">Hardware & Building</h2>
            <p className="prose-article">
              The rig above is a 2018-class machine, and I re-litigate replacing it about once a
              year. So far the honest answer keeps coming back: it still hits the frames I need in
              the games I actually play.{" "}
              <Link to="/writing/hardware-obsession" className="text-primary underline-offset-4 hover:underline">
                I wrote about why I keep losing that argument with myself
              </Link>
              .
            </p>
          </section>
        </Reveal>

        {/* Photography */}
        <Reveal>
          <section className="mt-24">
            <h2 className="font-display text-3xl font-semibold">Photography</h2>
            <p className="prose-article">
              Mostly travel shots from Peru, Colombia, and whatever city I'm walking through, plus
              macro shots of whatever's living in the yard. The hardest shoot I've done was{" "}
              <Link to="/photos" className="text-primary underline-offset-4 hover:underline">
                a momma wolf spider
              </Link>{" "}
              that required focus-merging to keep her whole body sharp at point-blank range. Shot
              on an iPhone, like almost everything I make.
            </p>
          </section>
        </Reveal>

        {/* Writing */}
        <Reveal>
          <section className="mt-24 border-l-2 border-primary pl-6">
            <h2 className="font-display text-3xl font-semibold">Writing & Reading</h2>
            <p className="prose-article">
              I started writing because thinking out loud in my head wasn't catching the lazy parts
              of my own ideas. Writing does. Right now I'm reading more long-form and less
              everything-else, with mixed but improving results.
            </p>
          </section>
        </Reveal>

        {/* Music */}
        <Reveal>
          <section className="mt-24">
            <h2 className="font-display text-3xl font-semibold">Music</h2>
            <p className="prose-article">
              Always something playing. Genre is a mood: a focus playlist for ops days, something
              loud for builds, something patient for evenings. The best additions lately have come
              from other people, which is what the form below is for.
            </p>

            <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card/55">
              <div className="border-b border-border bg-background/45 px-5 py-4">
                <p className="font-display text-2xl font-semibold">Suggest a song</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Apple Music links preferred. YouTube works beautifully too.
                </p>
              </div>

              <form
                className="space-y-5 p-5"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-2">
                  <Label htmlFor="song">Song or artist</Label>
                  <Input
                    id="song"
                    value={track}
                    onChange={(event) => {
                      setTrack(event.target.value);
                      setSubmissionState("idle");
                    }}
                    placeholder="Mk.gee - Are You Looking Up"
                    disabled={isSending}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="name">Name <span className="text-muted-foreground">(optional)</span></Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setSubmissionState("idle");
                    }}
                    placeholder="Only if you want credit"
                    disabled={isSending}
                  />
                </div>

                <div className="grid gap-3">
                  <Label>Where should I listen?</Label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {platforms.map((item) => {
                      const Icon = item.icon;
                      const isSelected = platform === item.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setPlatform(item.id);
                            setSubmissionState("idle");
                          }}
                          disabled={isSending}
                          className={`flex h-20 flex-col items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium transition-all ${
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground shadow-sm"
                              : "border-border bg-background/65 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          }`}
                          aria-pressed={isSelected}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="link">Song link</Label>
                  <Input
                    id="link"
                    value={link}
                    onChange={(event) => {
                      setLink(event.target.value);
                      setSubmissionState("idle");
                    }}
                    placeholder="https://music.apple.com/..."
                    type="url"
                    disabled={isSending}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="note">Why this one?</Label>
                  <Textarea
                    id="note"
                    value={note}
                    onChange={(event) => {
                      setNote(event.target.value);
                      setSubmissionState("idle");
                    }}
                    placeholder="For late-night building, rainy walks, or pure chaos."
                    rows={3}
                    disabled={isSending}
                  />
                </div>

                {isSent ? (
                  <div
                    className="music-success flex items-center gap-3 rounded-lg border border-primary/25 bg-primary/10 p-4 text-primary"
                    role="status"
                    aria-live="polite"
                  >
                    <span className="music-success-check flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-medium text-foreground">Sent. I’ll give it a listen.</span>
                      <span className="text-sm text-muted-foreground">Thanks for feeding the rotation.</span>
                    </span>
                  </div>
                ) : null}

                {submissionState === "error" ? (
                  <div
                    className="flex items-center gap-3 rounded-lg border border-destructive/25 bg-destructive/10 p-4 text-destructive"
                    role="alert"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <p className="text-sm">
                      Couldn&apos;t send that one. Try again in a second, or paste the link into an email.
                    </p>
                  </div>
                ) : null}

                <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={appleMusicSearchUrl || "#song"}
                        target={appleMusicSearchUrl ? "_blank" : undefined}
                        rel={appleMusicSearchUrl ? "noreferrer" : undefined}
                        aria-disabled={!appleMusicSearchUrl}
                        className={!appleMusicSearchUrl ? "pointer-events-none opacity-50" : undefined}
                      >
                        <Music2 />
                        Apple
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={youtubeSearchUrl || "#song"}
                        target={youtubeSearchUrl ? "_blank" : undefined}
                        rel={youtubeSearchUrl ? "noreferrer" : undefined}
                        aria-disabled={!youtubeSearchUrl}
                        className={!youtubeSearchUrl ? "pointer-events-none opacity-50" : undefined}
                      >
                        <Youtube />
                        YouTube
                      </a>
                    </Button>
                  </div>

                  <Button type="submit" disabled={!canSubmit}>
                    {isSending ? <Loader2 className="animate-spin" /> : <Send />}
                    {isSending ? "Sending..." : "Send suggestion"}
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Hobbies;
