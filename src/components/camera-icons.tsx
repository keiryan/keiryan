// Hand-drawn lucide-style icons for the two cameras these photos get shot on:
// an iPhone 17 Pro Max (camera plateau up top) and a Sony FX30 (boxy cinema body).
import { type SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IPhoneProIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <rect x="9.5" y="5" width="5" height="2.6" rx="1.3" />
      <path d="M11 19h2" />
    </svg>
  );
}

export function SonyFX30Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="8" width="13" height="10" rx="2" />
      <circle cx="18.5" cy="13" r="3.5" />
      <circle cx="18.5" cy="13" r="1.2" />
      <path d="M5 8V6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5V8" />
      <circle cx="5.5" cy="12.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
