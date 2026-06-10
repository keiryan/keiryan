import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { Layout } from "@/components/layout";
import { Reveal } from "@/components/reveal";
import { skills, workHistory } from "@/lib/data";

const Work = () => {
  return (
    <Layout title="Work">
      <section className="container-wide py-20">
        <h1 className="font-display text-5xl font-bold">Work</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I've led AI operations at two AI-training companies and shipped front-end for Fortune
          500 clients before that. I'm best at the zero-to-one phase: new team, no systems,
          figure it out — then build the infrastructure so nobody has to figure it out twice.
        </p>

        <div className="mt-8">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Download className="h-4 w-4" /> Download résumé (PDF)
          </a>
        </div>

        {/* Experience timeline */}
        <h2 className="section-label mt-20 mb-8">Experience</h2>
        <div className="relative">
          <div className="absolute left-3 top-2 h-full w-px bg-border md:left-4" />
          <ol className="space-y-10">
            {workHistory.map((role, idx) => (
              <Reveal key={idx} delay={idx * 0.03}>
                <li className="relative pl-10 md:pl-14">
                  <span className="absolute left-2 top-2 h-3 w-3 rounded-full border-2 border-background bg-primary md:left-3" />
                  <div className="rounded-lg border border-border bg-card/50 p-6 transition-colors hover:bg-card">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-2xl font-semibold">
                        {role.company}
                        <span className="ml-2 font-sans text-base font-medium text-muted-foreground">
                          — {role.title}
                          {role.type ? ` (${role.type})` : ""}
                        </span>
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground">
                        {role.start} — {role.end} · {role.location}
                      </p>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed">
                      {role.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-primary" />
                          <span className="text-muted-foreground">{b.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Skills */}
        <h2 className="section-label mt-20 mb-8">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((g) => (
            <div key={g.group} className="rounded-lg border border-border bg-card/40 p-6">
              <p className="font-display text-lg font-semibold">{g.group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 rounded-lg border border-border bg-card/40 p-10 text-center">
          <h3 className="font-display text-2xl font-semibold">Sound useful?</h3>
          <p className="mt-2 text-muted-foreground">
            I'm open to select opportunities. The fastest way to find out if yours is one of them
            is to ask.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
