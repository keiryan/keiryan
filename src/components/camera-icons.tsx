// Hand-drawn icons for the two cameras these photos get shot on, drawn from
// product photos: an iPhone 17 Pro Max from the back (full-width camera
// plateau, triangular three-lens cluster, flash) and a Sony FX30 from the
// front (boxy cinema body, big E-mount ring, grip seam, top dials, REC dot).
// Slightly finer stroke than lucide so the detail stays legible at 14px.
import { type SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IPhoneProIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      {/* body, back view */}
      <rect x="6" y="2" width="12" height="20" rx="3" />
      {/* camera plateau */}
      <rect x="7.9" y="4.1" width="8.2" height="5.9" rx="2" />
      {/* lens cluster: two stacked left, one offset center-right */}
      <circle cx="10.2" cy="5.95" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.2" cy="8.15" r="1" fill="currentColor" stroke="none" />
      <circle cx="13.3" cy="7.05" r="1" fill="currentColor" stroke="none" />
      {/* flash */}
      <circle cx="14.95" cy="5.45" r="0.45" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SonyFX30Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      {/* boxy body, front view */}
      <rect x="2.5" y="5.75" width="19" height="13.5" rx="2.2" />
      {/* top dial and button */}
      <path d="M5.4 5.75V4.6a1 1 0 0 1 1-1h1.7a1 1 0 0 1 1 1v1.15" />
      <path d="M14.5 5.75v-.9a.9.9 0 0 1 .9-.9h1.2a.9.9 0 0 1 .9.9v.9" />
      {/* E-mount ring and sensor */}
      <circle cx="14.7" cy="12.5" r="4.5" />
      <circle cx="14.7" cy="12.5" r="2.1" strokeWidth="1.5" />
      {/* grip seam */}
      <path d="M5.6 8.6v7.8" />
      {/* REC button */}
      <circle cx="19.6" cy="17.2" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}
