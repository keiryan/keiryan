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
import { Image as ImageIcon, LocateFixed, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Photo } from "@/lib/data";
import { cn } from "@/lib/utils";

const BOARD_WIDTH = 4200;
const BOARD_HEIGHT = 3000;
const MIN_SCALE = 0.45;
const MAX_SCALE = 1.8;
const SCALE_STEP = 0.16;
const GRID_COLUMNS = 5;
const GRID_GAP = 10;
const TILE_WIDTH = 330;
const MOMENTUM_FRICTION = 0.86;
const MIN_MOMENTUM_VELOCITY = 0.16;

// Tile "physics": as the board pans, each tile trails the motion a touch and
// swings a hair, then springs back to rest. Heavier (larger) tiles lag more.
const LEAN_LIMIT = 26; // caps how much pan velocity feeds the lean
const LEAN_EASE = 0.22; // how quickly a tile catches up to / settles from the target lean
const LEAN_SETTLE = 0.05; // below this the lean is treated as at rest
const LEAN_LAG = 0.85; // pixels of trailing drift per unit of leaned velocity
const LEAN_LAG_MAX = 28; // hard cap on trailing drift (px)
const LEAN_SWING = 0.22; // degrees of swing per unit of horizontal leaned velocity
const LEAN_SWING_MAX = 3; // hard cap on swing (deg)

type ViewState = {
  x: number;
  y: number;
  scale: number;
};

type PhotoCanvasProps = {
  photos: Photo[];
  onSelectPhoto: (photo: Photo) => void;
};

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
  lastTime: number;
  moved: boolean;
  photoSrc?: string;
};

type Velocity = {
  x: number;
  y: number;
};

const photoHeights = [420, 260, 360, 310, 470, 290, 390, 340, 250, 440];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getCenteredView(width: number, height: number): ViewState {
  return {
    x: (width - BOARD_WIDTH) / 2,
    y: (height - BOARD_HEIGHT) / 2 + 120,
    scale: 1,
  };
}

export function PhotoCanvas({ photos, onSelectPhoto }: PhotoCanvasProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const momentumRef = useRef<number | null>(null);
  const velocityRef = useRef<Velocity>({ x: 0, y: 0 });
  const suppressNextClickRef = useRef(false);
  const leanTargetRef = useRef<Velocity>({ x: 0, y: 0 });
  const leanValueRef = useRef<Velocity>({ x: 0, y: 0 });
  const leanRafRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);
  const [view, setView] = useState<ViewState>(() => getCenteredView(window.innerWidth, window.innerHeight));
  const [lean, setLean] = useState<Velocity>({ x: 0, y: 0 });
  const photosBySrc = useMemo(() => new Map(photos.map((photo) => [photo.src, photo])), [photos]);

  const tiles = useMemo(
    () => {
      const columnHeights = Array.from({ length: GRID_COLUMNS }, (_, column) => column % 2 === 0 ? 0 : 72);
      const gridWidth = GRID_COLUMNS * TILE_WIDTH + (GRID_COLUMNS - 1) * GRID_GAP;
      const startX = (BOARD_WIDTH - gridWidth) / 2;
      const startY = 420;

      return photos.map((photo, index) => {
        const column = columnHeights.indexOf(Math.min(...columnHeights));
        const height = photoHeights[index % photoHeights.length];
        const tile = {
          photo,
          x: startX + column * (TILE_WIDTH + GRID_GAP),
          y: startY + columnHeights[column],
          width: TILE_WIDTH,
          height,
        };
        columnHeights[column] += height + GRID_GAP;

        return tile;
      });
    },
    [photos],
  );

  const resetView = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    stopMomentum();
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
    return () => {
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

  // Point the tiles' lean at the current pan velocity; the loop eases them there
  // and back to rest, so flinging the board makes the photos trail and swing.
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
        setLeanTarget(0, 0);
        return;
      }

      setView((current) => ({
        ...current,
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

  const zoomAtPoint = useCallback((clientX: number, clientY: number, nextScale: number) => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const bounds = viewport.getBoundingClientRect();
    const pointX = clientX - bounds.left;
    const pointY = clientY - bounds.top;

    setView((current) => {
      const clampedScale = clamp(nextScale, MIN_SCALE, MAX_SCALE);
      const boardX = (pointX - current.x) / current.scale;
      const boardY = (pointY - current.y) / current.scale;

      return {
        x: pointX - boardX * clampedScale,
        y: pointY - boardY * clampedScale,
        scale: clampedScale,
      };
    });
  }, []);

  const zoomFromCenter = useCallback(
    (direction: 1 | -1) => {
      const viewport = viewportRef.current;

      if (!viewport) return;

      zoomAtPoint(
        viewport.clientWidth / 2,
        viewport.clientHeight / 2,
        view.scale + direction * SCALE_STEP,
      );
    },
    [view.scale, zoomAtPoint],
  );

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();

    if (event.ctrlKey || event.metaKey) {
      const zoomDelta = event.deltaY > 0 ? -SCALE_STEP : SCALE_STEP;
      zoomAtPoint(event.clientX, event.clientY, view.scale + zoomDelta);
      return;
    }

    stopMomentum();
    const velocity = {
      x: -event.deltaX,
      y: -event.deltaY,
    };

    setView((current) => ({
      ...current,
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
    const photoButton = target.closest<HTMLButtonElement>("[data-photo-src]");

    if (control) return;

    stopMomentum();
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: event.timeStamp,
      moved: false,
      photoSrc: photoButton?.dataset.photoSrc,
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
    setView((current) => ({ ...current, x: current.x + deltaX, y: current.y + deltaY }));
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;

    if (drag?.pointerId === event.pointerId) {
      suppressNextClickRef.current = Boolean(drag.moved && drag.photoSrc);
      if (!drag.moved && drag.photoSrc) {
        const photo = photosBySrc.get(drag.photoSrc);
        if (photo) onSelectPhoto(photo);
      }
      dragRef.current = null;
      event.currentTarget.releasePointerCapture(event.pointerId);
      if (drag.moved) {
        startMomentum();
      } else {
        setLeanTarget(0, 0);
      }
    }
  }

  function handlePhotoClick(event: MouseEvent<HTMLButtonElement>, photo: Photo) {
    if (suppressNextClickRef.current) {
      suppressNextClickRef.current = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onSelectPhoto(photo);
  }

  return (
    <div className="relative h-[100dvh] overflow-hidden bg-background text-foreground">
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
          className="photo-board absolute left-0 top-0"
          style={{
            width: BOARD_WIDTH,
            height: BOARD_HEIGHT,
            transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`,
            transformOrigin: "0 0",
          }}
        >
          {/* Spotlight: while one photo is hovered, only the *others* dim a touch so
              focus lands on it. Darken with brightness (not opacity) so the tiles stay
              opaque and the grid never shows through. Footprints never move. */}
          <style>{`
            .photo-board:has(button[data-photo-src]:hover) button[data-photo-src]:not(:hover) {
              filter: brightness(0.78) saturate(0.95);
            }
            @media (hover: none) {
              .photo-board:has(button[data-photo-src]:hover) button[data-photo-src]:not(:hover) {
                filter: none;
              }
            }
          `}</style>
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.055)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.055)_1px,transparent_1px)] bg-[size:92px_92px]" />
          {tiles.map(({ photo, x, y, width, height }, index) => {
            // Larger tiles read as heavier, so they trail and swing a little more.
            const depth = 0.7 + ((height - 250) / 220) * 0.7;
            const lagX = clamp(-lean.x * LEAN_LAG * depth, -LEAN_LAG_MAX, LEAN_LAG_MAX);
            const lagY = clamp(-lean.y * LEAN_LAG * depth, -LEAN_LAG_MAX, LEAN_LAG_MAX);
            const swing = clamp(lean.x * LEAN_SWING * depth, -LEAN_SWING_MAX, LEAN_SWING_MAX);

            return (
              <div
                key={photo.src}
                className="absolute"
                style={{
                  left: x,
                  top: y,
                  width,
                  zIndex: index + 1,
                  transform: `translate3d(${lagX}px, ${lagY}px, 0) rotate(${swing}deg)`,
                  willChange: "transform",
                }}
              >
                <button
                  type="button"
                  data-photo-src={photo.src}
                  aria-label={`Open ${photo.title ?? photo.alt}`}
                  className={cn(
                    "group block w-full overflow-hidden rounded-md border border-border/80 bg-card text-left shadow-[0_12px_28px_rgba(0,0,0,0.24)] outline-none transition-[box-shadow,opacity,filter,border-color] duration-300",
                    "hover:border-foreground/25 hover:shadow-[0_20px_46px_rgba(0,0,0,0.45)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
                  )}
                  onClick={(event) => handlePhotoClick(event, photo)}
                >
                  <div className="relative overflow-hidden bg-muted" style={{ height }}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading={photo.featured ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-focus-visible:scale-[1.05]"
                      draggable={false}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <p className="font-display text-base font-semibold leading-tight text-white">
                        {photo.title ?? photo.location}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase text-white/75">
                        {photo.location}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.34)]" />

      <div className="pointer-events-none absolute left-4 top-4 z-10 flex max-w-[calc(100%-5rem)] flex-wrap items-center gap-2 sm:left-6 sm:top-6">
        <div data-canvas-control className="pointer-events-auto flex items-center gap-2 rounded-lg border border-border bg-card/85 px-3 py-2 shadow-sm backdrop-blur">
          <ImageIcon className="h-4 w-4" aria-hidden="true" />
          <span className="font-mono text-xs uppercase text-muted-foreground">
            Photo board
          </span>
        </div>
        <div data-canvas-control className="pointer-events-auto flex items-center gap-1 rounded-lg border border-border bg-card/85 p-1 shadow-sm backdrop-blur">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => zoomFromCenter(-1)}
            aria-label="Zoom out"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="min-w-12 text-center font-mono text-xs text-muted-foreground">
            {Math.round(view.scale * 100)}%
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => zoomFromCenter(1)}
            aria-label="Zoom in"
          >
            <Plus className="h-4 w-4" />
          </Button>
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
          Reset view
        </Button>
      </div>
    </div>
  );
}
