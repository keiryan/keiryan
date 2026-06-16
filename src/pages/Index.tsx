import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Reveal } from "@/components/reveal";
import { PolaroidPlaceholder } from "@/components/polaroid";
import { currently, publishedPosts, siteConfig } from "@/lib/data";
import { formatDate, readingTime } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { MusicGrid } from "@/components/music-grid";

const Index = () => {
  const recent = [...publishedPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="grain" />
        <div className="container-wide relative z-10 grid items-center gap-14 pt-16 pb-20 md:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] md:pt-24 md:pb-28">
          <div>
            <p className="section-label mb-6">📍 {siteConfig.location} · Doing ops and training bots</p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Hey, I'm Keiryan.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I build the unglamorous side of AI companies: onboarding, identity, tooling, the
              machinery that decides whether everyone else gets to move fast. Before that I wrote
              front-end code, and before that I sold iPhones. This is where I write it all down.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link to="/writing" className="link-underline text-foreground">→ Read my writing</Link>
              <Link to="/work" className="link-underline text-foreground">→ See my work</Link>
              <Link to="/contact" className="link-underline text-foreground">→ Get in touch</Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:mx-0 md:justify-self-end">
            <div className="absolute -left-4 top-6 hidden w-28 rotate-[-6deg] border border-border bg-card px-4 py-3 shadow-sm md:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">currently</p>
              <p className="mt-1 font-display text-lg leading-tight">writing things down</p>
            </div>
            <PolaroidPlaceholder tilt={2} label="home office, Leland" />
            <div className="mt-6 grid gap-2 font-mono text-xs text-muted-foreground">
              <span className="border-l border-primary/60 pl-3">Scaled an AI ops org from 0 to 200 people</span>
              <span className="border-l border-primary/60 pl-3">3,500 hours in Fortnite, zero regrets</span>
              <span className="border-l border-primary/60 pl-3">Four "final" PC builds and counting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Written */}
      <section className="container-wide py-20">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="section-label">Recently written</h2>
            <Link to="/writing" className="link-underline text-sm">→ All writing</Link>
          </div>
        </Reveal>
        <div className="divide-y divide-border border-y border-border">
          {recent.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to={`/writing/${p.slug}`} className="group block py-7">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                  <time>{formatDate(p.date)}</time>
                  <span>·</span>
                  <span>{readingTime(p.content)} min read</span>
                  <span>·</span>
                  <span className="uppercase tracking-wider">{p.category}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-2xl text-muted-foreground">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="container-wide py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="section-label mb-4">A bit about me</h2>
            <p className="text-lg leading-relaxed">
              Outside of work, I'm into PC gaming, building things, and chasing whatever's got my
              attention that week. I've spent years at the crossroads of technical operations and
              front-end engineering, and somewhere along the way I started wanting a place to just{" "}
              <em>say things</em>. This is that place.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-primary link-underline">
              More about me <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex justify-center md:justify-end">
              <PolaroidPlaceholder
                tilt={-2}
                src="/about/keiryan-cusco.jpg"
                alt="Keiryan wearing a woven hat in a stone alley."
                label="somewhere in Cusco"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Currently */}
      <section className="container-wide py-20">
        <Reveal>
          <h2 className="section-label mb-8">Currently</h2>
        </Reveal>
        <dl className="divide-y divide-border border-y border-border">
          {currently.map((item, i) => {
            const isHash = item.to.startsWith("#");
            const className =
              "group grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-6";
            const inner = (
              <>
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="text-lg leading-relaxed transition-colors group-hover:text-primary">
                  {item.text}
                </dd>
              </>
            );
            return (
              <Reveal key={item.label} delay={i * 0.04}>
                {isHash ? (
                  <a href={item.to} className={className}>
                    {inner}
                  </a>
                ) : (
                  <Link to={item.to} className={className}>
                    {inner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </dl>
      </section>

      {/* On repeat */}
      <section id="on-repeat" className="container-wide scroll-mt-24 pb-24">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="section-label">On repeat</h2>
            <p className="font-mono text-xs text-muted-foreground">tap to hear 30 seconds</p>
          </div>
        </Reveal>
        <Reveal>
          <MusicGrid />
        </Reveal>
      </section>
    </Layout>
  );
};

export default Index;
