import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Reveal } from "@/components/reveal";
import { PolaroidPlaceholder } from "@/components/polaroid";
import { hobbies, posts, siteConfig } from "@/lib/data";
import { formatDate, readingTime } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const recent = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="accent-blob" />
        <div className="grain" />
        <div className="container-wide relative z-10 pt-20 pb-28 md:pt-32 md:pb-40">
          <p className="section-label mb-6">📍 {siteConfig.location} · Currently open to select opportunities</p>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Hey, I'm Keiryan.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I build the infrastructure that makes AI teams move fast. I also write about technology,
            share what I'm learning, and document the parts of life worth remembering.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/writing" className="link-underline text-foreground">→ Read my writing</Link>
            <Link to="/work" className="link-underline text-foreground">→ See my work</Link>
            <Link to="/contact" className="link-underline text-foreground">→ Get in touch</Link>
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
        <div className="grid gap-4">
          {recent.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to={`/writing/${p.slug}`}
                className="group block rounded-lg border border-border bg-card/40 p-6 transition-all hover:-translate-y-0.5 hover:border-l-2 hover:border-l-primary hover:bg-card hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                  <time>{formatDate(p.date)}</time>
                  <span>·</span>
                  <span>{readingTime(p.content)} min read</span>
                  <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] uppercase tracking-wider">
                    {p.category}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
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
              front-end engineering — and somewhere along the way, I started wanting a place to just{" "}
              <em>say things</em>. This is that place.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-primary link-underline">
              More about me <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex justify-center md:justify-end">
              <PolaroidPlaceholder tilt={-2} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hobbies */}
      <section className="container-wide py-20">
        <Reveal>
          <h2 className="section-label mb-8">Currently into</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.05}>
              <div className="rounded-lg border border-border bg-card/40 p-6 transition-all hover:-translate-y-0.5 hover:bg-card">
                <div className="text-3xl">{h.emoji}</div>
                <h3 className="mt-3 font-display text-xl font-semibold">{h.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
