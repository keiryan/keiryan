// Simple monochrome glyphs for the music services a track can open in.
// Geometric (not official brand paths) so they sit together cohesively and
// tint with currentColor at small sizes.
import { type SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Rounded app tile with a beamed two-note figure.
export function AppleMusicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M11 15.5V8.2l5-1.1V13" />
      <circle cx="9.4" cy="15.5" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="13.3" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Circle with three upward-bowing arcs.
export function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M7.3 9.4c3.1-.9 6.4-.6 9.1 1" />
      <path d="M7.8 12.3c2.6-.7 5.3-.4 7.5 1" />
      <path d="M8.4 15c2-.5 4.1-.3 5.8.8" />
    </svg>
  );
}

// Rounded screen with a play triangle.
export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.4l4.2 2.6-4.2 2.6z" fill="currentColor" />
    </svg>
  );
}
