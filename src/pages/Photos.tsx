import { useState } from "react";
import { Layout } from "@/components/layout";
import { Markdown } from "@/components/markdown";
import { Reveal } from "@/components/reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { photos, type Photo } from "@/lib/data";

const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <Layout title="Photos">
      <section className="container-wide py-20">
        <h1 className="font-display text-5xl font-bold">Photos</h1>
        <p className="mt-4 max-w-prose text-lg text-muted-foreground">
          A slow-growing collection of moments worth keeping.
        </p>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.05}>
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg border border-border bg-card/60 text-left shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Open ${photo.title ?? photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={photo.featured ? "eager" : "lazy"}
                  className="block h-auto w-full object-cover transition-[filter] duration-300 group-hover:brightness-[0.82] group-focus-visible:brightness-[0.82]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <p className="font-display text-lg font-semibold leading-tight text-white">
                    {photo.title ?? photo.caption ?? photo.series}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                    {photo.series}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Dialog open={Boolean(selectedPhoto)} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-h-[92vh] w-[calc(100vw-2rem)] max-w-6xl overflow-hidden p-0">
          {selectedPhoto ? (
            <div className="grid max-h-[92vh] overflow-hidden lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.7fr)]">
              <div className="relative flex min-h-0 items-center justify-center overflow-hidden bg-black">
                <img
                  src={selectedPhoto.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl saturate-150"
                />
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="relative max-h-[58vh] w-full object-contain lg:max-h-[92vh]"
                />
              </div>
              <div className="min-h-0 overflow-y-auto p-6 md:p-8">
                <div className="mb-5 inline-flex rounded-full border border-border bg-muted px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {selectedPhoto.series}
                </div>
                <DialogTitle className="font-display text-3xl font-semibold leading-tight">
                  {selectedPhoto.title ?? selectedPhoto.series}
                </DialogTitle>
                <DialogDescription className={selectedPhoto.caption ? "mt-3 text-base leading-relaxed" : "sr-only"}>
                  {selectedPhoto.caption ?? selectedPhoto.alt}
                </DialogDescription>
                {selectedPhoto.story ? (
                  <div className="mt-8 max-h-[46vh] overflow-y-auto pr-2">
                    <Markdown source={selectedPhoto.story} />
                  </div>
                ) : (
                  <p className="mt-8 font-mono text-xs text-muted-foreground">
                    // story coming soon
                  </p>
                )}
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Photos;
