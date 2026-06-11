import { type ReactNode, useState } from "react";
import { Instagram, MapPin } from "lucide-react";
import { Layout } from "@/components/layout";
import { IPhoneProIcon, SonyFX30Icon } from "@/components/camera-icons";
import { Markdown } from "@/components/markdown";
import { Reveal } from "@/components/reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cameraLabels, photos, type Photo } from "@/lib/data";

function CameraIcon({ photo, className }: { photo: Photo; className?: string }) {
  return photo.camera === "iPhone" ? (
    <IPhoneProIcon className={className} aria-hidden="true" />
  ) : (
    <SonyFX30Icon className={className} aria-hidden="true" />
  );
}

// Icon-first pill: shows just the icon until hovered, then widens to reveal its label.
function MetaChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span
      title={label}
      className="group/chip pointer-events-auto inline-flex items-center rounded-full border border-white/15 bg-black/60 p-1.5 text-white backdrop-blur-md"
    >
      {icon}
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] opacity-0 transition-[max-width,margin,opacity] duration-300 group-hover/chip:ml-1.5 group-hover/chip:mr-1 group-hover/chip:max-w-[12rem] group-hover/chip:opacity-100">
        {label}
      </span>
    </span>
  );
}

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
                    {photo.title ?? photo.location}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <MetaChip icon={<CameraIcon photo={photo} className="h-3.5 w-3.5" />} label={cameraLabels[photo.camera]} />
                    <MetaChip icon={<MapPin className="h-3.5 w-3.5" aria-hidden="true" />} label={photo.location} />
                  </div>
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
              <div className="flex min-h-0 flex-col overflow-y-auto p-6 md:p-8">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    <CameraIcon photo={selectedPhoto} className="h-3.5 w-3.5" />
                    {cameraLabels[selectedPhoto.camera]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {selectedPhoto.location}
                  </span>
                </div>
                <DialogTitle className="font-display text-3xl font-semibold leading-tight">
                  {selectedPhoto.title ?? selectedPhoto.location}
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
                {selectedPhoto.instagram ? (
                  <div className="mt-6 flex justify-end">
                    <a
                      href={selectedPhoto.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View this photo on Instagram"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Photos;
