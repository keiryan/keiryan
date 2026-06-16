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
  const [view, setView] = useState<ViewState>(() => getCenteredView(window.innerWidth, window.innerHeight));
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
    return () => stopMomentum();
  }, []);

  function stopMomentum() {
    if (momentumRef.current) {
      window.cancelAnimationFrame(momentumRef.current);
      momentumRef.current = null;
    }
    velocityRef.current = { x: 0, y: 0 };
  }

  function startMomentum() {
    if (momentumRef.current) window.cancelAnimationFrame(momentumRef.current);

    const tick = () => {
      const velocity = velocityRef.current;

      if (Math.abs(velocity.x) < MIN_MOMENTUM_VELOCITY && Math.abs(velocity.y) < MIN_MOMENTUM_VELOCITY) {
        stopMomentum();
        return;
      }

      setView((current) => ({
        ...current,
        x: current.x + velocity.x,
        y: current.y + velocity.y,
      }));

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
      if (drag.moved) startMomentum();
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
          className="absolute left-0 top-0"
          style={{
            width: BOARD_WIDTH,
            height: BOARD_HEIGHT,
            transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`,
            transformOrigin: "0 0",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.055)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.055)_1px,transparent_1px)] bg-[size:92px_92px]" />
          {tiles.map(({ photo, x, y, width, height }, index) => (
            <button
              key={photo.src}
              type="button"
              data-photo-src={photo.src}
              aria-label={`Open ${photo.title ?? photo.alt}`}
              className={cn(
                "group absolute overflow-hidden rounded-md border border-border/80 bg-card text-left shadow-[0_12px_28px_rgba(0,0,0,0.24)] outline-none transition-[box-shadow,transform]",
                "hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,0,0,0.32)] focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
              )}
              style={{
                left: x,
                top: y,
                width,
                zIndex: index + 1,
              }}
              onClick={(event) => handlePhotoClick(event, photo)}
            >
              <div className="relative overflow-hidden bg-muted" style={{ height }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={photo.featured ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
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
          ))}
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
