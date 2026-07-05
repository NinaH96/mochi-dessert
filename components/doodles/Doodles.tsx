import { SVGProps } from "react";

/**
 * A small library of hand-drawn style doodles rendered as inline SVG.
 * Every path uses rounded, slightly imperfect strokes to feel sketched
 * rather than vector-perfect, matching the brand's "handmade" direction.
 * Colors are passed via `currentColor` so each usage can tint them
 * with the palette (strawberry, matcha, cocoa, blush).
 */

type DoodleProps = SVGProps<SVGSVGElement>;

export function DoodleStrawberry(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M32 20c6-8 16-9 18-2-1 6-6 8-10 8"
        stroke="#B7D3B0"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 20c-6-8-16-9-18-2 1 6 6 8 10 8"
        stroke="#B7D3B0"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M14 26c0-4 8-6 18-6s18 2 18 6c0 14-9 30-18 30S14 40 14 26Z"
        fill="#E96B76"
        stroke="#2D2D2D"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="30" r="1.4" fill="#FFF9F4" />
      <circle cx="30" cy="26" r="1.4" fill="#FFF9F4" />
      <circle cx="38" cy="30" r="1.4" fill="#FFF9F4" />
      <circle cx="26" cy="38" r="1.4" fill="#FFF9F4" />
      <circle cx="35" cy="40" r="1.4" fill="#FFF9F4" />
      <circle cx="30" cy="48" r="1.4" fill="#FFF9F4" />
    </svg>
  );
}

export function DoodleCherry(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M34 8c2 8 4 14 8 18"
        stroke="#6E4A3D"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M34 8c-4 6-8 11-9 17"
        stroke="#6E4A3D"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle
        cx="20"
        cy="42"
        r="11"
        fill="#E96B76"
        stroke="#2D2D2D"
        strokeWidth="2.2"
      />
      <circle
        cx="42"
        cy="38"
        r="11"
        fill="#E96B76"
        stroke="#2D2D2D"
        strokeWidth="2.2"
      />
      <circle cx="17" cy="38" r="1.6" fill="#FFF9F4" />
      <circle cx="39" cy="34" r="1.6" fill="#FFF9F4" />
    </svg>
  );
}

export function DoodleBow(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M32 32C24 20 8 20 6 28c-2 8 10 12 26 4Z"
        fill="#F8D8DF"
        stroke="#2D2D2D"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M32 32c8-12 24-12 26-4 2 8-10 12-26 4Z"
        fill="#F8D8DF"
        stroke="#2D2D2D"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle
        cx="32"
        cy="32"
        r="5"
        fill="#E96B76"
        stroke="#2D2D2D"
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function DoodleCandle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M32 6c3 4 3 6 0 9-3-3-3-5 0-9Z"
        fill="#E96B76"
        stroke="#2D2D2D"
        strokeWidth="1.8"
      />
      <rect
        x="24"
        y="16"
        width="16"
        height="34"
        rx="6"
        fill="#F8D8DF"
        stroke="#2D2D2D"
        strokeWidth="2.2"
      />
      <path
        d="M24 26c5 2 11 2 16 0M24 36c5 2 11 2 16 0"
        stroke="#E96B76"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleStar(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M32 8c2 9 4 13 8 16-4 3-6 7-8 16-2-9-4-13-8-16 4-3 6-7 8-16Z"
        fill="#B7D3B0"
        stroke="#2D2D2D"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="48" cy="14" r="2.5" fill="#F8D8DF" />
      <circle cx="14" cy="40" r="2" fill="#F8D8DF" />
    </svg>
  );
}

export function DoodleSmiley(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <circle
        cx="32"
        cy="32"
        r="22"
        fill="#FFF9F4"
        stroke="#2D2D2D"
        strokeWidth="2.2"
      />
      <circle cx="24" cy="28" r="2.2" fill="#2D2D2D" />
      <circle cx="40" cy="28" r="2.2" fill="#2D2D2D" />
      <path
        d="M22 38c3 5 8 7 10 7s7-2 10-7"
        stroke="#E96B76"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="18" cy="34" r="2.6" fill="#F8D8DF" />
      <circle cx="46" cy="34" r="2.6" fill="#F8D8DF" />
    </svg>
  );
}

export function DoodleRibbon(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M8 16h48M12 16c0 8 4 12 4 20s-4 12-4 20M52 16c0 8-4 12-4 20s4 12 4 20"
        stroke="#B7D3B0"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M20 16c2 4 2 8 0 12M44 16c-2 4-2 8 0 12"
        stroke="#E96B76"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleFlower(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="20"
          rx="6"
          ry="10"
          fill="#F8D8DF"
          stroke="#2D2D2D"
          strokeWidth="1.6"
          transform={`rotate(${deg} 32 32)`}
        />
      ))}
      <circle
        cx="32"
        cy="32"
        r="5"
        fill="#E96B76"
        stroke="#2D2D2D"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function DoodleSwirl(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M32 52c-12 0-18-8-18-16 0-6 5-10 10-10 4 0 7 3 7 7 0 3-2 5-5 5"
        stroke="#6E4A3D"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M14 30c2-10 10-18 22-18 9 0 16 6 16 14"
        stroke="#F8D8DF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
