import {
  type MouseEvent,
  type PointerEvent,
  type WheelEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { LocateFixed, Music2, Pause, Play, Share2, X } from "lucide-react";
import { AppleMusicIcon, SpotifyIcon, YouTubeIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { onRepeat, type Track } from "@/lib/data";
import { cn } from "@/lib/utils";

// An infinite, pannable field of album tiles with an Apple Watch–style fisheye:
// every tile is scaled by how close it sits to the center of the viewport, so
// panning swells and shrinks the songs as they pass through the middle. The
// hovered tile always blooms to the largest. Distinct from PhotoCanvas, which
// is a fixed-size board with manual zoom.

const BOARD_WIDTH = 5200;
const BOARD_HEIGHT = 5200;
const GRID_GAP = 22;
const TILE_SIZE = 156;
const MIN_GRID_COLUMNS = 4;
const MAX_GRID_COLUMNS = 8;
const MOMENTUM_FRICTION = 0.86;
const MIN_MOMENTUM_VELOCITY = 0.16;

// Fisheye: scale falls from MAX (at the center) to MIN over FOCUS_RADIUS px of
// screen distance; the hovered tile is pinned above the center max so it always
// reads as the biggest.
const FOCUS_RADIUS = 460;
const TILE_SCALE_MIN = 0.52;
const TILE_SCALE_MAX = 1;
const TILE_SCALE_HOVER = 1.22;

// Tile "physics": as the board pans, each tile trails the motion a touch and
// swings a hair, then springs back to rest.
const LEAN_LIMIT = 26;
const LEAN_EASE = 0.22;
const LEAN_SETTLE = 0.05;
const LEAN_LAG = 0.85;
const LEAN_LAG_MAX = 28;
const LEAN_SWING = 0.22;
const LEAN_SWING_MAX = 3;

type ViewState = {
  x: number;
  y: number;
};

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
  lastTime: number;
  moved: boolean;
  trackId?: string;
};

type Velocity = {
  x: number;
  y: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(t: number) {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
}

function getCenteredView(width: number, height: number): ViewState {
  return {
    x: (width - BOARD_WIDTH) / 2,
    y: (height - BOARD_HEIGHT) / 2 + 80,
  };
}

function getBalancedColumnCount(count: number) {
  if (count <= 0) return MIN_GRID_COLUMNS;

  return clamp(Math.ceil(Math.sqrt(count * 1.3)), MIN_GRID_COLUMNS, MAX_GRID_COLUMNS);
}

function serviceLinks(track: Track) {
  const q = encodeURIComponent(`${track.title} ${track.artist}`);
  return [
    { name: "Apple Music", href: track.link, Icon: AppleMusicIcon },
    { name: "Spotify", href: track.spotify ?? `https://open.spotify.com/search/${q}`, Icon: SpotifyIcon },
    { name: "YouTube", href: track.youtube ?? `https://music.youtube.com/search?q=${q}`, Icon: YouTubeIcon },
  ];
}

// Animated equalizer bars shown on the tile that's currently playing.
function NowPlayingBars() {
  return (
    <span className="flex h-3.5 items-end gap-[2px]" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="eq-bar w-[2px] rounded-full bg-current"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}

function MusicCanvasTile({
  track,
  isPlaying,
  onActivate,
}: {
  track: Track;
  isPlaying: boolean;
  onActivate: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const services = serviceLinks(track);

  return (
    <div
      onMouseLeave={() => setMenuOpen(false)}
      className="group/tile relative h-full w-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
    >
      <img
        src={track.cover}
        alt={`${track.album} album art`}
        loading="lazy"
        draggable={false}
        className={cn("h-full w-full object-cover", isPlaying ? "brightness-[0.62]" : "brightness-[0.97]")}
      />

      {/* play / pause — the whole tile is the button */}
      <button
        type="button"
        data-track-id={track.preview}
        onClick={onActivate}
        aria-label={`${isPlaying ? "Pause" : "Play 30 second preview of"} ${track.title} by ${track.artist}`}
        className="absolute inset-0 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
      >
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md transition-all duration-200",
            isPlaying ? "opacity-100" : "opacity-0 group-hover/tile:opacity-100",
          )}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" fill="currentColor" />
          ) : (
            <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />
          )}
        </span>
      </button>

      {/* title / artist scrim */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-2.5 pt-8">
        <div className="flex items-end justify-between gap-1.5">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold leading-tight text-white">{track.title}</p>
            <p className="truncate text-[10px] leading-tight text-white/70">{track.artist}</p>
          </div>
          {isPlaying ? (
            <span className="mb-0.5 shrink-0 text-primary">
              <NowPlayingBars />
            </span>
          ) : null}
        </div>
      </div>

      {/* service chooser — exempt from panning so links stay tappable */}
      <div
        data-canvas-control
        className="absolute right-1.5 top-1.5 flex items-center gap-1 opacity-0 transition-opacity duration-200 group-hover/tile:opacity-100 focus-within:opacity-100"
      >
        <div
          className={cn(
            "flex items-center gap-1 overflow-hidden transition-[max-width,opacity] duration-300",
            menuOpen ? "max-w-[6rem] opacity-100" : "max-w-0 opacity-0",
          )}
        >
          {services.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${track.title} in ${s.name}`}
              title={s.name}
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
            >
              <s.Icon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Hide listening options" : "Open in a music service"}
          aria-expanded={menuOpen}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
        >
          {menuOpen ? <X className="h-3 w-3" /> : <Share2 className="h-3 w-3" />}
        </button>
      </div>
    </div>
  );
}

export function MusicCanvas() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const momentumRef = useRef<number | null>(null);
  const velocityRef = useRef<Velocity>({ x: 0, y: 0 });
  const suppressNextClickRef = useRef(false);
  const leanTargetRef = useRef<Velocity>({ x: 0, y: 0 });
  const leanValueRef = useRef<Velocity>({ x: 0, y: 0 });
  const leanRafRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);
  const [view, setView] = useState<ViewState>(() => getCenteredView(window.innerWidth, window.innerHeight));
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  const [lean, setLean] = useState<Velocity>({ x: 0, y: 0 });
  const [playing, setPlaying] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [panning, setPanning] = useState(false);

  const tiles = useMemo(() => {
    if (onRepeat.length === 0) return [];

    const columnCount = getBalancedColumnCount(onRepeat.length);
    const columnHeights: number[] = Array.from({ length: columnCount }, (_, column) => (column % 2 === 0 ? 0 : TILE_SIZE * 0.4));
    const gridWidth = columnCount * TILE_SIZE + (columnCount - 1) * GRID_GAP;
    const startX = (BOARD_WIDTH - gridWidth) / 2;

    const positioned = onRepeat.map((track) => {
      const column = columnHeights.indexOf(Math.min(...columnHeights));
      const tile = {
        track,
        x: startX + column * (TILE_SIZE + GRID_GAP),
        y: columnHeights[column],
      };
      columnHeights[column] += TILE_SIZE + GRID_GAP;

      return tile;
    });

    const gridHeight = Math.max(...columnHeights) - GRID_GAP;
    const startY = (BOARD_HEIGHT - gridHeight) / 2;

    return positioned.map((tile) => ({ ...tile, y: tile.y + startY }));
  }, []);

  const trackByPreview = useMemo(() => new Map(onRepeat.map((track) => [track.preview, track])), []);

  const toggle = useCallback((track: Track) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.src.endsWith(track.preview) && !audio.paused) {
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
  }, []);

  const resetView = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    stopMomentum();
    setSize({ w: viewport.clientWidth, h: viewport.clientHeight });
    setView(getCenteredView(viewport.clientWidth, viewport.clientHeight));
  }, []);

  useEffect(() => {
    resetView();
    window.addEventListener("resize", resetView);

    return () => window.removeEventListener("resize", resetView);
  }, [resetView]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = query.matches;

    const handleChange = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;
      if (event.matches) setLeanTarget(0, 0);
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio?.pause();
      stopMomentum();
      stopLean();
    };
  }, []);

  function stopMomentum() {
    if (momentumRef.current) {
      window.cancelAnimationFrame(momentumRef.current);
      momentumRef.current = null;
    }
    velocityRef.current = { x: 0, y: 0 };
  }

  function stopLean() {
    if (leanRafRef.current) {
      window.cancelAnimationFrame(leanRafRef.current);
      leanRafRef.current = null;
    }
  }

  function setLeanTarget(x: number, y: number) {
    if (reducedMotionRef.current) {
      leanTargetRef.current = { x: 0, y: 0 };
    } else {
      leanTargetRef.current = {
        x: clamp(x, -LEAN_LIMIT, LEAN_LIMIT),
        y: clamp(y, -LEAN_LIMIT, LEAN_LIMIT),
      };
    }

    if (leanRafRef.current != null) return;

    const tick = () => {
      const target = leanTargetRef.current;
      const current = leanValueRef.current;
      const nextX = current.x + (target.x - current.x) * LEAN_EASE;
      const nextY = current.y + (target.y - current.y) * LEAN_EASE;
      const atRest =
        Math.abs(target.x) < LEAN_SETTLE &&
        Math.abs(target.y) < LEAN_SETTLE &&
        Math.abs(nextX) < LEAN_SETTLE &&
        Math.abs(nextY) < LEAN_SETTLE;

      if (atRest) {
        leanValueRef.current = { x: 0, y: 0 };
        setLean({ x: 0, y: 0 });
        leanRafRef.current = null;
        return;
      }

      leanValueRef.current = { x: nextX, y: nextY };
      setLean({ x: nextX, y: nextY });
      leanRafRef.current = window.requestAnimationFrame(tick);
    };

    leanRafRef.current = window.requestAnimationFrame(tick);
  }

  function startMomentum() {
    if (momentumRef.current) window.cancelAnimationFrame(momentumRef.current);

    const tick = () => {
      const velocity = velocityRef.current;

      if (Math.abs(velocity.x) < MIN_MOMENTUM_VELOCITY && Math.abs(velocity.y) < MIN_MOMENTUM_VELOCITY) {
        stopMomentum();
        setPanning(false);
        setLeanTarget(0, 0);
        return;
      }

      setView((current) => ({
        x: current.x + velocity.x,
        y: current.y + velocity.y,
      }));

      setLeanTarget(velocity.x, velocity.y);

      velocityRef.current = {
        x: velocity.x * MOMENTUM_FRICTION,
        y: velocity.y * MOMENTUM_FRICTION,
      };
      momentumRef.current = window.requestAnimationFrame(tick);
    };

    momentumRef.current = window.requestAnimationFrame(tick);
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();

    stopMomentum();
    setPanning(true);
    const velocity = {
      x: -event.deltaX,
      y: -event.deltaY,
    };

    setView((current) => ({
      x: current.x + velocity.x,
      y: current.y + velocity.y,
    }));
    velocityRef.current = {
      x: clamp(velocity.x * 0.65, -28, 28),
      y: clamp(velocity.y * 0.65, -28, 28),
    };
    setLeanTarget(velocityRef.current.x, velocityRef.current.y);
    startMomentum();
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    const control = target.closest("[data-canvas-control]");
    const trackButton = target.closest<HTMLButtonElement>("[data-track-id]");

    if (control) return;

    stopMomentum();
    setPanning(true);
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: event.timeStamp,
      moved: false,
      trackId: trackButton?.dataset.trackId,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.lastX;
    const deltaY = event.clientY - drag.lastY;
    const deltaTime = Math.max(16, event.timeStamp - drag.lastTime);
    const moved = drag.moved || Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > 6;

    dragRef.current = {
      ...drag,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: event.timeStamp,
      moved,
    };
    velocityRef.current = {
      x: clamp((deltaX / deltaTime) * 9, -26, 26),
      y: clamp((deltaY / deltaTime) * 9, -26, 26),
    };
    setLeanTarget(velocityRef.current.x, velocityRef.current.y);
    setView((current) => ({ x: current.x + deltaX, y: current.y + deltaY }));
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;

    if (drag?.pointerId === event.pointerId) {
      // If this drag panned, swallow the click it would otherwise fire on the tile.
      suppressNextClickRef.current = Boolean(drag.moved && drag.trackId);
      // A clean tap plays here: pointer capture means the tile's own click event
      // won't fire, so we toggle directly (mirrors PhotoCanvas's select-on-up).
      if (!drag.moved && drag.trackId) {
        const track = trackByPreview.get(drag.trackId);
        if (track) toggle(track);
      }
      dragRef.current = null;
      event.currentTarget.releasePointerCapture(event.pointerId);
      if (drag.moved) {
        startMomentum();
      } else {
        setPanning(false);
        setLeanTarget(0, 0);
      }
    }
  }

  function handleTrackClick(event: MouseEvent<HTMLButtonElement>, track: Track) {
    if (suppressNextClickRef.current) {
      suppressNextClickRef.current = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    toggle(track);
  }

  const centerX = size.w / 2;
  const centerY = size.h / 2;

  return (
    <div className="relative h-[100dvh] overflow-hidden bg-background text-foreground">
      <audio ref={audioRef} onEnded={() => setPlaying(null)} preload="none" />

      <div
        ref={viewportRef}
        className="absolute inset-0 cursor-grab touch-none overflow-hidden active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
      >
        <div
          className="music-board absolute left-0 top-0"
          style={{
            width: BOARD_WIDTH,
            height: BOARD_HEIGHT,
            transform: `translate3d(${view.x}px, ${view.y}px, 0)`,
            transformOrigin: "0 0",
          }}
        >
          {/* Spotlight: while one tile is hovered, the others ease down a touch.
              The transition lives on the tile so it fades instead of snapping. */}
          <style>{`
            .music-board:has([data-track-tile]:hover) [data-track-tile]:not(:hover) .music-card {
              filter: brightness(0.82) saturate(0.95);
            }
            @media (hover: none) {
              .music-board:has([data-track-tile]:hover) [data-track-tile]:not(:hover) .music-card {
                filter: none;
              }
            }
          `}</style>
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.055)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.055)_1px,transparent_1px)] bg-[size:92px_92px]" />
          {tiles.map(({ track, x, y }, index) => {
            // Fisheye: scale by screen distance from the viewport center.
            const tileCenterX = view.x + x + TILE_SIZE / 2;
            const tileCenterY = view.y + y + TILE_SIZE / 2;
            const dist = Math.hypot(tileCenterX - centerX, tileCenterY - centerY);
            const proximity = TILE_SCALE_MIN + (TILE_SCALE_MAX - TILE_SCALE_MIN) * smoothstep(1 - dist / FOCUS_RADIUS);
            const isHovered = hoveredId === track.preview;
            const scale = isHovered ? TILE_SCALE_HOVER : proximity;

            const lagX = clamp(-lean.x * LEAN_LAG * scale, -LEAN_LAG_MAX, LEAN_LAG_MAX);
            const lagY = clamp(-lean.y * LEAN_LAG * scale, -LEAN_LAG_MAX, LEAN_LAG_MAX);
            const swing = clamp(lean.x * LEAN_SWING * scale, -LEAN_SWING_MAX, LEAN_SWING_MAX);

            return (
              <div
                key={track.preview}
                data-track-tile
                className="absolute"
                style={{
                  left: x,
                  top: y,
                  width: TILE_SIZE,
                  height: TILE_SIZE,
                  zIndex: isHovered ? 1000 : index + 1,
                }}
                onMouseEnter={() => setHoveredId(track.preview)}
                onMouseLeave={() => setHoveredId((current) => (current === track.preview ? null : current))}
              >
                <div
                  className="music-card h-full w-full"
                  style={{
                    transform: `translate3d(${lagX}px, ${lagY}px, 0) scale(${scale}) rotate(${swing}deg)`,
                    transformOrigin: "center center",
                    transition: panning
                      ? "filter 250ms ease"
                      : "transform 260ms cubic-bezier(0.22, 1, 0.36, 1), filter 250ms ease",
                    willChange: "transform",
                  }}
                >
                  <MusicCanvasTile
                    track={track}
                    isPlaying={playing === track.preview}
                    onActivate={(event) => handleTrackClick(event, track)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.34)]" />

      <div className="pointer-events-none absolute left-4 top-4 z-10 flex max-w-[calc(100%-5rem)] flex-wrap items-center gap-2 sm:left-6 sm:top-6">
        <div data-canvas-control className="pointer-events-auto flex items-center gap-2 rounded-lg border border-border bg-card/85 px-3 py-2 shadow-sm backdrop-blur">
          <Music2 className="h-4 w-4" aria-hidden="true" />
          <span className="font-mono text-xs uppercase text-muted-foreground">On repeat</span>
        </div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          data-canvas-control
          className="pointer-events-auto border border-border bg-card/85 text-muted-foreground shadow-sm backdrop-blur hover:bg-card hover:text-foreground"
          onClick={resetView}
        >
          <LocateFixed className="h-4 w-4" />
          Recenter
        </Button>
      </div>
    </div>
  );
}
