import { Layout } from "@/components/layout";
import { Reveal } from "@/components/reveal";
import { Camera } from "lucide-react";

const Photos = () => {
  // Varied heights to create masonry-like rhythm
  const heights = [320, 240, 380, 280, 340, 220, 360, 260, 300];

  return (
    <Layout>
      <section className="container-wide py-20">
        <h1 className="font-display text-5xl font-bold">Photos</h1>
        <p className="mt-4 max-w-prose text-lg text-muted-foreground">
          A slow-growing collection — moments worth keeping.
        </p>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {heights.map((h, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <div
                className="mb-4 flex break-inside-avoid items-center justify-center rounded-lg border border-border bg-card/60 transition-transform hover:scale-[1.02]"
                style={{ height: h }}
              >
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Camera className="h-6 w-6" />
                  <span className="font-mono text-xs">// photo {String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-muted-foreground">
          // Add photos to /public/photos/ and update /lib/data.ts
        </p>
      </section>
    </Layout>
  );
};

export default Photos;
