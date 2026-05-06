type PolaroidPlaceholderProps = {
  tilt?: number;
  label?: string;
  src?: string;
  alt?: string;
};

export function PolaroidPlaceholder({
  tilt = -2,
  label = "Keiryan Wilson",
  src = "/keiryan-about.jpeg",
  alt = "Keiryan Wilson",
}: PolaroidPlaceholderProps) {
  return (
    <div
      className="relative inline-block bg-card p-3 pb-10 shadow-[0_10px_30px_-10px_hsl(0_0%_0%/0.25)] ring-1 ring-border"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="flex aspect-video w-72 items-center justify-center overflow-hidden bg-muted sm:w-80">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
      <p className="absolute bottom-3 left-0 right-0 text-center font-mono text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
