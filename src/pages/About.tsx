import { Layout } from "@/components/layout";
import { PolaroidPlaceholder } from "@/components/polaroid";
import { siteConfig } from "@/lib/data";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout title="About">
      <article className="container-prose py-20">
        <div className="mb-12 flex justify-center">
          <PolaroidPlaceholder tilt={-1.5} label="hi, it's me" />
        </div>

        <h1 className="mb-10 font-display text-4xl font-bold md:text-5xl">About</h1>

        <div className="prose-article">
          <p>
            I'm Keiryan Wilson, a builder, technical operator, and occasional writer based in {siteConfig.location}.
          </p>
          <p>
            The short version: I started in Apple retail, taught myself front-end development,
            spent a couple of years shipping React for clients, then pivoted into AI operations
            when that world started moving fast. The long version involves Legos, Minecraft, and a
            five-pound laptop I wasn't supposed to have.{" "}
            <Link to="/writing/why-i-built-this">I wrote that one down</Link>.
          </p>
          <p>
            This website is my home base on the internet. Not a LinkedIn profile, not a resume
            PDF, not a carefully filtered social presence. Just me.
          </p>

          <h2>What I'm working on</h2>
          <p>
            Wrapping a contract leading AI operations at G2i, where I built the human data pipeline
            and identity stack from zero. Between engagements, I'm sharpening the things I want to
            do more of: writing, teaching, and the deep technical work I love most.
          </p>

          <h2>How I got here</h2>
          <p>
            Apple taught me how to talk to people: how to explain technical things without making
            anyone feel small, and how to stay calm when someone's day is going badly. Front-end
            work taught me how to ship: Fortune 500 clients, accessibility audits, designs that had
            to survive contact with real browsers. AI operations is where both halves finally got
            used at once. Onboarding 600 experts in a week is a people problem and a systems
            problem at the same time, and it turns out I like standing exactly on that seam.
          </p>

          <h2>Outside of work</h2>
          <p>
            Mostly Fortnite, 3,500 hours of it, plus a long Overwatch habit. The PC I play on has
            been "done" four times and will never be done. I take photos: travel from Peru and
            Colombia, and macro shots of whatever's living in the yard, including{" "}
            <Link to="/photos">a wolf spider I got uncomfortably close to</Link>. There's always
            music on, and the rotation runs on suggestions from strangers.
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
            Email is best: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Or come{" "}
            <Link to="/contact">say hello</Link>.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default About;
