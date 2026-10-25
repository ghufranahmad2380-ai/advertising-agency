import type { ReactNode } from 'react';
import './art.css';

export function ArtCanvas({
  label,
  bg,
  children,
}: {
  label: string;
  bg: string;
  children: ReactNode;
}) {
  return (
    <svg
      className="art-canvas"
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
      focusable="false"
    >
      <rect width="600" height="600" fill={bg} />
      {children}
    </svg>
  );
}

/** Decorative dot field used as a print-registration texture. */
export function DotField({
  x = 0,
  y = 0,
  cols = 6,
  rows = 4,
  gap = 26,
  radius = 1.7,
  color = '#191919',
  opacity = 0.25,
}: {
  x?: number;
  y?: number;
  cols?: number;
  rows?: number;
  gap?: number;
  radius?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <g fill={color} opacity={opacity}>
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((__, col) => (
          <circle key={`${row}-${col}`} cx={x + col * gap} cy={y + row * gap} r={radius} />
        )),
      )}
    </g>
  );
}

export function FloorShadow({
  cx = 300,
  cy = 520,
  rx = 230,
  ry = 26,
  opacity = 0.12,
}: {
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
  opacity?: number;
}) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#191919" opacity={opacity} style={{ filter: 'blur(10px)' }} />;
}
