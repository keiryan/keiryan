// A looping isometric animation of one Lego brick clicking onto another.
// Plain SVG + CSS keyframes: no 3D library, theme-safe, GIF-like loop.

const ISO_X = Math.cos(Math.PI / 6);

const iso = (x: number, y: number, z: number): [number, number] => [
  (x - y) * ISO_X,
  (x + y) / 2 - z,
];

const pts = (...points: [number, number][]) => points.map((p) => p.join(",")).join(" ");

type BrickColors = { top: string; left: string; right: string; stud: string };

const BRICK = { a: 88, b: 44, h: 25, studR: 8, studRy: 4, studH: 6 };

function Brick({ colors }: { colors: BrickColors }) {
  const { a, b, h, studR, studRy, studH } = BRICK;
  const studs: [number, number][] = [];
  for (const sy of [11, 33]) for (const sx of [11, 33, 55, 77]) studs.push([sx, sy]);
  studs.sort((p, q) => p[0] + p[1] - (q[0] + q[1]));

  return (
    <g>
      <polygon points={pts(iso(0, 0, h), iso(a, 0, h), iso(a, b, h), iso(0, b, h))} fill={colors.top} />
      <polygon points={pts(iso(a, 0, h), iso(a, b, h), iso(a, b, 0), iso(a, 0, 0))} fill={colors.right} />
      <polygon points={pts(iso(a, b, h), iso(0, b, h), iso(0, b, 0), iso(a, b, 0))} fill={colors.left} />
      {studs.map(([sx, sy]) => {
        const [cx, cy] = iso(sx, sy, h);
        return (
          <g key={`${sx}-${sy}`}>
            <ellipse cx={cx} cy={cy} rx={studR} ry={studRy} fill={colors.left} />
            <rect x={cx - studR} y={cy - studH} width={studR * 2} height={studH} fill={colors.left} />
            <ellipse cx={cx} cy={cy - studH} rx={studR} ry={studRy} fill={colors.stud} />
          </g>
        );
      })}
    </g>
  );
}

const blue: BrickColors = { top: "#4a76e8", left: "#3a5fc4", right: "#2e4da6", stud: "#638cf0" };
const red: BrickColors = { top: "#d8453e", left: "#b23029", right: "#962620", stud: "#e25e55" };

// The red brick lands on the blue one, offset by two studs.
const [offsetX, offsetY] = iso(44, 0, BRICK.h);

export function LegoLoop() {
  return (
    <div className="flex justify-center" role="img" aria-label="Animation of a red Lego brick clicking onto a blue one, over and over.">
      <style>{`
        @keyframes lego-drop {
          0%, 14% { transform: translateY(-56px); animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45); }
          26%, 82% { transform: translateY(0); }
          94%, 100% { transform: translateY(-56px); }
        }
        .lego-drop {
          animation: lego-drop 4.6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .lego-drop { animation: none; }
        }
      `}</style>
      <svg viewBox="-52 -100 172 188" width="280" height="306" aria-hidden="true">
        <ellipse cx={38} cy={72} rx={86} ry={13} fill="currentColor" opacity={0.08} />
        <Brick colors={blue} />
        <g transform={`translate(${offsetX} ${offsetY})`}>
          <g className="lego-drop">
            <Brick colors={red} />
          </g>
        </g>
      </svg>
    </div>
  );
}
