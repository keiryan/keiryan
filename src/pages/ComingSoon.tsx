import type { CSSProperties } from "react";

const ComingSoon = () => {
  const headline = "COMING SOON";

  return (
    <main className="relative flex min-h-svh overflow-hidden bg-[#faf8f1] text-foreground">
      <div className="grain opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />

      <section className="container-wide relative z-10 grid min-h-svh items-center gap-10 py-10 md:grid-cols-[minmax(0,1fr)_360px] md:py-16">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            work in progress
          </p>
          <h1
            className="coming-soon-title mt-8 flex flex-wrap justify-center gap-x-[0.14em] gap-y-2 text-[clamp(3.5rem,13vw,11rem)] font-black uppercase leading-[0.82] text-[#f04a24]"
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
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            A personal site is being assembled somewhere between ops, writing, photos, and whatever I am building next.
          </p>
        </div>

        <aside className="mx-auto w-full max-w-sm border border-border bg-card/85 p-6 shadow-[0_20px_60px_-35px_hsl(0_0%_0%/0.4)] backdrop-blur md:mx-0">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            note from the desk
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight">
            The site is getting tuned.
          </h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I am putting the pieces into place before opening the doors. Writing, photos, work, and a few
            other corners are on the way.
          </p>
          <p className="mt-8 font-display text-2xl font-semibold">- Keiryan</p>
        </aside>
      </section>
    </main>
  );
};

export default ComingSoon;
