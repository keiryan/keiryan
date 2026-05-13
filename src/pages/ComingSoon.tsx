import type { CSSProperties } from "react";

const ComingSoon = () => {
  const headline = "COMING SOON";

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
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;
