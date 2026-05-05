export function PolaroidPlaceholder({ tilt = -2, label = "// photo goes here" }: { tilt?: number; label?: string }) {
  return (
    <div
      className="relative inline-block bg-card p-3 pb-10 shadow-[0_10px_30px_-10px_hsl(0_0%_0%/0.25)] ring-1 ring-border"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="flex aspect-[4/5] w-64 items-center justify-center bg-muted">
        <span className="font-display text-6xl text-muted-foreground/60">KW</span>
      </div>
      <p className="absolute bottom-3 left-0 right-0 text-center font-mono text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
