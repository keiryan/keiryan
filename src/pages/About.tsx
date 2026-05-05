import { Layout } from "@/components/layout";
import { PolaroidPlaceholder } from "@/components/polaroid";
import { siteConfig } from "@/lib/data";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <article className="container-prose py-20">
        <div className="mb-12 flex justify-center">
          <PolaroidPlaceholder tilt={-1.5} />
        </div>

        <h1 className="mb-10 font-display text-4xl font-bold md:text-5xl">About</h1>

        <div className="prose-article">
          <p>
            I'm Keiryan Wilson — a technical operator, builder, and occasional writer based in {siteConfig.location}.
          </p>
          <p>
            I've spent the last several years at the intersection of AI operations, systems
            engineering, and front-end development. I've onboarded hundreds of contributors in
            days, secured multi-million dollar partnerships, and architected identity infrastructure
            from scratch. I've also written more internal docs, Slack messages, and ops playbooks
            than I care to count.
          </p>
          <p>
            This website is my attempt to have a home on the internet that's actually mine — not a
            LinkedIn profile, not a resume PDF, not a carefully filtered social presence. Just me.
          </p>

          <h2>What I'm working on</h2>
          <p>
            Wrapping a contract leading AI operations at G2i, where I built the human data pipeline
            and identity stack from zero. Between engagements, I'm sharpening the things I want to
            do more of — writing, teaching, and the deep technical work I love most.
          </p>

          <h2>How I got here</h2>
          <p>
            Started in customer-facing roles at Apple — which sounds unrelated, but taught me more
            about communication, empathy, and handling ambiguity than anything else. Moved into
            front-end engineering, led projects for Fortune 500 clients, then pivoted hard into AI
            operations when that world started moving fast. Now I build the systems and
            infrastructure that let AI teams do their best work.
          </p>

          <h2>Outside of work</h2>
          <p>
            PC gaming and the never-ending hardware tuning that comes with it. Building things —
            in code and out. Music, always. Reading more and scrolling less, with mixed success.
          </p>

          <h2>Tech I reach for</h2>
          <ul>
            <li>React, Next.js, TypeScript, Tailwind</li>
            <li>Okta, Linear, Slack, Google Workspace</li>
            <li>Cursor, GitHub, Docker</li>
            <li>A notebook and a black pen</li>
          </ul>

          <h2>Connect</h2>
          <p>
            Email is best — <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Or come{" "}
            <Link to="/contact">say hello</Link>.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default About;
