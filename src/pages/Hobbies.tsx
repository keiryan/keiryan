import { Layout } from "@/components/layout";
import { Reveal } from "@/components/reveal";

const Hobbies = () => {
  return (
    <Layout>
      <section className="container-prose py-20">
        <h1 className="font-display text-5xl font-bold">Hobbies</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The things I do when nobody's paying me to do anything.
        </p>

        {/* Gaming */}
        <Reveal>
          <section className="mt-20">
            <div className="text-6xl">🎮</div>
            <h2 className="mt-4 font-display text-3xl font-semibold">PC Gaming</h2>
            <p className="prose-article">
              FPS games are my home base. Ashamed to say I have 3500 hours in Fortnite and about 1k in Overwatch.
            </p>

            <div className="mt-6 rounded-lg border border-border bg-card p-5 font-mono text-sm">
              <p className="text-muted-foreground">// stat block</p>
              <ul className="mt-2 space-y-1">
                <li>Currently playing: rotation of FPS + a long sim project</li>
                <li>Main rig: custom build, in-progress as always</li>
                <li>Target: 240fps and a fan curve I don't have to think about</li>
              </ul>
            </div>
          </section>
        </Reveal>

        {/* Hardware */}
        <Reveal>
          <section className="mt-24 border-l-2 border-primary pl-6">
            <h2 className="font-display text-3xl font-semibold">🛠️ Hardware & Building</h2>
            <p className="prose-article">
              I'm on something like my fourth "final" build. Every iteration teaches me a little
              more about decision-making under constraint. Hardware is just a hobby with an unusually
              honest feedback loop.
            </p>
          </section>
        </Reveal>

        {/* Writing */}
        <Reveal>
          <section className="mt-24">
            <h2 className="font-display text-3xl font-semibold">✍️ Writing & Reading</h2>
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
            <div className="text-6xl">🎧</div>
            <h2 className="mt-4 font-display text-3xl font-semibold">Music</h2>
            <p className="prose-article">
              Always something playing. Genre is a mood — a focus playlist for ops days, something
              loud for builds, something patient for evenings. A rotation, never a routine.
            </p>
          </section>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Hobbies;
