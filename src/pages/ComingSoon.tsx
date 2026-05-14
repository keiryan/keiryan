import type { CSSProperties } from "react";
import { FormEvent, useEffect, useState } from "react";

type ComingSoonProps = {
  onUnlock: () => void;
};

const adminPhrase = import.meta.env.VITE_ADMIN_OVERRIDE_PHRASE ?? "keiryan-preview";

const ComingSoon = ({ onUnlock }: ComingSoonProps) => {
  const headline = "COMING SOON";
  const [gateOpen, setGateOpen] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") === adminPhrase) {
      onUnlock();
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [onUnlock]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (phrase.trim() === adminPhrase) {
      onUnlock();
      return;
    }

    setError("That door stayed closed.");
    setPhrase("");
  };

  return (
    <main className="coming-soon-page relative flex min-h-svh overflow-hidden text-foreground">
      <div className="grain opacity-50" />

      <section className="container-wide relative z-10 flex min-h-svh items-center justify-center py-12">
        <div className="coming-soon-paper mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#755c43]/75">
            work in progress
          </p>
          <h1
            className="coming-soon-title mt-8 flex flex-wrap justify-center gap-x-[0.14em] gap-y-2 text-[clamp(3.75rem,14vw,12rem)] font-black uppercase leading-[0.82] text-[#f04a24]"
            aria-label={headline}
          >
            {headline.split("").map((letter, index) =>
              letter === " " ? (
                <span key={`${letter}-${index}`} aria-hidden="true" className="w-[0.24em]" />
              ) : (
                <span
                  key={`${letter}-${index}`}
                  aria-hidden="true"
                  className="coming-soon-letter"
                  style={{ "--letter-index": index } as CSSProperties}
                >
                  {letter}
                </span>
              ),
            )}
          </h1>
          <p className="mt-10 rotate-[-2deg] font-display text-3xl font-semibold text-[#3f3328] md:text-4xl">
            - Keiryan
          </p>
          <p className="mt-5 max-w-md font-mono text-[11px] uppercase tracking-[0.2em] text-[#755c43]/70">
            building the place before opening the doors
          </p>
          <button
            type="button"
            aria-label="Open preview gate"
            className="mt-8 h-9 w-9 rounded-full border border-[#755c43]/20 bg-[#fff8ed]/20 text-[#755c43]/35 transition-all hover:border-[#755c43]/45 hover:bg-[#fff8ed]/45 hover:text-[#3f3328] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f04a24]"
            onClick={() => setGateOpen((open) => !open)}
          >
            *
          </button>

          {gateOpen && (
            <form
              onSubmit={handleSubmit}
              className="mt-5 flex w-full max-w-xs flex-col items-stretch gap-3 rounded border border-[#755c43]/20 bg-[#fff8ed]/30 p-3 shadow-sm backdrop-blur"
            >
              <label className="sr-only" htmlFor="preview-phrase">
                Preview passphrase
              </label>
              <input
                id="preview-phrase"
                type="password"
                value={phrase}
                onChange={(event) => {
                  setPhrase(event.target.value);
                  setError("");
                }}
                autoFocus
                placeholder="preview phrase"
                className="h-10 rounded border border-[#755c43]/20 bg-[#fff8ed]/75 px-3 text-center font-mono text-xs uppercase tracking-[0.16em] text-[#3f3328] outline-none transition focus:border-[#f04a24]"
              />
              <button
                type="submit"
                className="h-10 rounded bg-[#3f3328] px-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#fff8ed] transition hover:bg-[#f04a24]"
              >
                enter
              </button>
              {error && (
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7f2b1a]">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;
