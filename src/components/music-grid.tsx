import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { onRepeat, type Track } from "@/lib/data";

// Animated equalizer bars shown on the tile that's currently playing.
function NowPlayingBars() {
  return (
    <span className="flex h-4 items-end gap-[2px]" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="eq-bar w-[3px] rounded-full bg-current"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}

function TrackTile({
  track,
  isPlaying,
  onToggle,
}: {
  track: Track;
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group/tile relative h-full w-full overflow-hidden rounded-xl border border-border bg-card">
      <img
        src={track.cover}
        alt={`${track.album} album art`}
        loading="lazy"
        className={`h-full w-full object-cover transition-[filter] duration-300 ${
          isPlaying ? "brightness-[0.65]" : "brightness-90 group-hover/tile:brightness-[0.7]"
        }`}
      />

      {/* play / pause — the whole tile is the button */}
      <button
        type="button"
        onClick={onToggle}
        aria-label={`${isPlaying ? "Pause" : "Play 30 second preview of"} ${track.title} by ${track.artist}`}
        className="absolute inset-0 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
      >
        <span
          className={`flex items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md transition-all duration-200 ${
            track.featured ? "h-14 w-14" : "h-10 w-10"
          } ${isPlaying ? "opacity-100" : "opacity-0 group-hover/tile:opacity-100"}`}
        >
          {isPlaying ? (
            <Pause className={track.featured ? "h-6 w-6" : "h-4 w-4"} fill="currentColor" />
          ) : (
            <Play className={`${track.featured ? "h-6 w-6" : "h-4 w-4"} translate-x-[1px]`} fill="currentColor" />
          )}
        </span>
      </button>

      {/* title / artist scrim */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3 pt-10">
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0">
            <p className={`truncate font-semibold leading-tight text-white ${track.featured ? "text-base" : "text-sm"}`}>
              {track.title}
            </p>
            <p className="truncate text-xs text-white/70">{track.artist}</p>
          </div>
          {isPlaying ? (
            <span className="mb-0.5 shrink-0 text-primary">
              <NowPlayingBars />
            </span>
          ) : null}
        </div>
      </div>

      {/* open in Apple Music */}
      <a
        href={track.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${track.title} in Apple Music`}
        className="absolute right-2 top-2 rounded-full bg-black/55 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur-md transition-opacity duration-200 hover:bg-black/75 group-hover/tile:opacity-100 focus-visible:opacity-100"
      >
        Open ↗
      </a>
    </div>
  );
}

export function MusicGrid() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio?.pause();
    };
  }, []);

  const toggle = (track: Track) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing === track.preview) {
      audio.pause();
      setPlaying(null);
      return;
    }

    audio.src = track.preview;
    audio.currentTime = 0;
    void audio.play().then(
      () => setPlaying(track.preview),
      () => setPlaying(null),
    );
  };

  return (
    <div>
      <audio ref={audioRef} onEnded={() => setPlaying(null)} preload="none" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 [grid-auto-flow:dense]">
        {onRepeat.map((track) => (
          <div key={track.preview} className={track.featured ? "col-span-2 row-span-2" : "aspect-square"}>
            <TrackTile track={track} isPlaying={playing === track.preview} onToggle={() => toggle(track)} />
          </div>
        ))}
      </div>
    </div>
  );
}
