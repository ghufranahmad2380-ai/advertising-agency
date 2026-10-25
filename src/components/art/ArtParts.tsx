import type { CSSProperties, ReactNode } from 'react';

/**
 * Original illustration primitives for the prototype.
 *
 * These are deliberately built from a small set of flat, screen-printed shapes
 * so every visual on the site feels like part of one art direction. They use no
 * external image files, so nothing can break when the project is moved.
 * When real photography arrives, swap these scenes for <img> components.
 */

export const artColors = {
  ink: '#191919',
  inkSoft: '#2A2A28',
  inkDeep: '#111111',
  yellow: '#F5D90A',
  yellowDeep: '#D9BE00',
  blue: '#2864A6',
  blueDeep: '#1D4E85',
  paper: '#F7F7F3',
  white: '#FFFFFF',
  line: '#DCDCD3',
  steel: '#C9D3DC',
} as const;

export const artShadow: CSSProperties = {
  filter: 'drop-shadow(0 18px 20px rgba(25, 25, 25, 0.16))',
};

export const artShadowDeep: CSSProperties = {
  filter: 'drop-shadow(0 26px 30px rgba(10, 10, 10, 0.34))',
};

export function Part({
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  children,
}: {
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
  children: ReactNode;
}) {
  return <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>{children}</g>;
}

const starPoints = Array.from({ length: 16 }, (_, i) => {
  const radius = i % 2 === 0 ? 1 : 0.29;
  const angle = (Math.PI / 8) * i - Math.PI / 2;
  return `${(Math.cos(angle) * radius).toFixed(3)},${(Math.sin(angle) * radius).toFixed(3)}`;
}).join(' ');

/** Placeholder brand mark — intentionally generic, not a client logo. */
export function Asterisk({ size = 40, color = artColors.ink }: { size?: number; color?: string }) {
  return <polygon points={starPoints} fill={color} transform={`scale(${size / 2})`} />;
}

export function Barcode({
  width = 70,
  height = 22,
  color = artColors.ink,
}: {
  width?: number;
  height?: number;
  color?: string;
}) {
  const bars = [0.08, 0.16, 0.05, 0.22, 0.1, 0.16, 0.05, 0.2, 0.12, 0.06];
  let cursor = 0;
  return (
    <g>
      {bars.map((w, i) => {
        const barWidth = width * w * 0.42;
        const bar = <rect key={i} x={cursor} y={0} width={barWidth} height={height} fill={color} />;
        cursor += barWidth + width * 0.035;
        return bar;
      })}
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* Packaging                                                                   */
/* -------------------------------------------------------------------------- */

export function GiftBox({
  face = artColors.ink,
  top = artColors.inkSoft,
  side = artColors.inkDeep,
  accent = artColors.yellow,
  width = 190,
  height = 140,
  ribbon = true,
}: {
  face?: string;
  top?: string;
  side?: string;
  accent?: string;
  width?: number;
  height?: number;
  ribbon?: boolean;
}) {
  const depth = 32;
  const lid = 42;
  const ribbonWidth = 34;
  return (
    <g style={artShadow}>
      <polygon points={`0,${lid} ${depth},10 ${width + depth},10 ${width},${lid}`} fill={top} />
      <rect x={0} y={lid} width={width} height={height} fill={face} />
      <polygon
        points={`${width},${lid} ${width + depth},10 ${width + depth},${10 + height} ${width},${lid + height}`}
        fill={side}
      />
      {ribbon && (
        <>
          <rect x={width / 2 - ribbonWidth / 2} y={lid} width={ribbonWidth} height={height} fill={accent} />
          <polygon
            points={`${width / 2 - ribbonWidth / 2},${lid} ${width / 2 - ribbonWidth / 2 + depth},10 ${
              width / 2 + ribbonWidth / 2 + depth
            },10 ${width / 2 + ribbonWidth / 2},${lid}`}
            fill={accent}
          />
          <ellipse
            cx={width / 2 - 22}
            cy={22}
            rx={26}
            ry={12}
            fill={accent}
            transform={`rotate(-24 ${width / 2 - 22} 22)`}
          />
          <ellipse
            cx={width / 2 + 22}
            cy={22}
            rx={26}
            ry={12}
            fill={accent}
            transform={`rotate(24 ${width / 2 + 22} 22)`}
          />
          <circle cx={width / 2} cy={24} r={10} fill={artColors.yellowDeep} />
        </>
      )}
    </g>
  );
}

export function Tote({
  body = artColors.paper,
  accent = artColors.yellow,
  ink = artColors.ink,
  width = 180,
  height = 190,
}: {
  body?: string;
  accent?: string;
  ink?: string;
  width?: number;
  height?: number;
}) {
  const top = 58;
  return (
    <g style={artShadow}>
      <path
        d={`M${width * 0.26} ${top} C${width * 0.26} 2 ${width * 0.74} 2 ${width * 0.74} ${top}`}
        fill="none"
        stroke={ink}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <path d={`M14 ${top} H${width - 14} L${width + 6} ${top + height} H${8} Z`} fill={body} stroke="rgba(25,25,25,0.14)" strokeWidth={1.5} />
      <path
        d={`M${width - 14} ${top} L${width + 6} ${top + height} H${width - 18} L${width - 38} ${top} Z`}
        fill="rgba(25,25,25,0.05)"
      />
      <rect x={width * 0.28} y={top + 38} width={width * 0.44} height={width * 0.44} fill={accent} />
      <g transform={`translate(${width / 2} ${top + 38 + width * 0.22})`}>
        <Asterisk size={width * 0.2} color={ink} />
      </g>
    </g>
  );
}

export function PaperSheet({
  width = 200,
  height = 280,
  paper = artColors.white,
  ink = artColors.ink,
  accent = artColors.yellow,
  variant = 'circle',
}: {
  width?: number;
  height?: number;
  paper?: string;
  ink?: string;
  accent?: string;
  variant?: 'circle' | 'bars' | 'grid' | 'type';
}) {
  const pad = width * 0.14;
  return (
    <g style={artShadow}>
      <rect width={width} height={height} fill={paper} />
      {variant === 'circle' && (
        <>
          <circle cx={width / 2} cy={height * 0.4} r={width * 0.27} fill={accent} />
          <rect x={pad} y={height * 0.72} width={width * 0.5} height={10} fill={ink} />
          <rect x={pad} y={height * 0.79} width={width * 0.32} height={10} fill={ink} opacity={0.4} />
        </>
      )}
      {variant === 'bars' && (
        <>
          <rect x={pad} y={pad} width={width * 0.62} height={16} fill={ink} />
          <rect x={pad} y={pad + 28} width={width * 0.4} height={16} fill={accent} />
          <rect x={pad} y={height * 0.44} width={width - pad * 2} height={7} fill={ink} opacity={0.28} />
          <rect x={pad} y={height * 0.52} width={width - pad * 2} height={7} fill={ink} opacity={0.28} />
          <rect x={pad} y={height * 0.6} width={width * 0.55} height={7} fill={ink} opacity={0.28} />
          <g transform={`translate(${pad} ${height - pad - 30})`}>
            <Barcode width={width * 0.45} height={20} color={ink} />
          </g>
        </>
      )}
      {variant === 'grid' && (
        <>
          <rect x={pad} y={pad} width={width / 2 - pad - 4} height={height * 0.3} fill={accent} />
          <rect x={width / 2 + 4} y={pad} width={width / 2 - pad - 4} height={height * 0.3} fill={ink} />
          <rect
            x={pad}
            y={pad + height * 0.3 + 12}
            width={width - pad * 2}
            height={height * 0.24}
            fill={artColors.blue}
          />
          <rect x={pad} y={height * 0.72} width={width * 0.42} height={8} fill={ink} />
          <rect x={pad} y={height * 0.79} width={width * 0.6} height={8} fill={ink} opacity={0.3} />
        </>
      )}
      {variant === 'type' && (
        <>
          <rect x={pad} y={pad} width={width - pad * 2} height={width - pad * 2} fill={ink} />
          <g transform={`translate(${width / 2} ${pad + (width - pad * 2) / 2})`}>
            <Asterisk size={width * 0.32} color={accent} />
          </g>
          <rect x={pad} y={height * 0.7} width={width * 0.66} height={12} fill={ink} />
          <rect x={pad} y={height * 0.78} width={width * 0.4} height={12} fill={accent} />
        </>
      )}
    </g>
  );
}


export function AcrylicPanel({
  width = 180,
  height = 250,
  tint = 'rgba(255,255,255,0.42)',
  edge = 'rgba(255,255,255,0.85)',
  ink = artColors.ink,
  accent = artColors.blue,
  variant = 'mark',
}: {
  width?: number;
  height?: number;
  tint?: string;
  edge?: string;
  ink?: string;
  accent?: string;
  variant?: 'mark' | 'bars' | 'award';
}) {
  const standoffs = [
    [16, 16],
    [width - 16, 16],
    [16, height - 16],
    [width - 16, height - 16],
  ];

  return (
    <g style={artShadow}>
      <rect width={width} height={height} fill={tint} stroke={edge} strokeWidth={3} />
      <rect x={6} y={6} width={width - 12} height={height - 12} fill="none" stroke="rgba(255,255,255,0.5)" />
      {variant === 'mark' && (
        <g transform={`translate(${width / 2} ${height / 2 - 18})`}>
          <Asterisk size={width * 0.42} color={ink} />
        </g>
      )}
      {variant === 'bars' && (
        <>
          <rect x={width * 0.18} y={height * 0.22} width={width * 0.64} height={12} fill={accent} />
          <rect x={width * 0.18} y={height * 0.31} width={width * 0.44} height={7} fill={ink} opacity={0.55} />
          <rect x={width * 0.18} y={height * 0.38} width={width * 0.54} height={7} fill={ink} opacity={0.35} />
          <rect x={width * 0.18} y={height * 0.62} width={width * 0.3} height={30} fill={ink} />
        </>
      )}
      {variant === 'award' && (
        <>
          <g transform={`translate(${width / 2} ${height * 0.36})`}>
            <Asterisk size={width * 0.34} color={ink} />
          </g>
          <rect x={width * 0.22} y={height * 0.58} width={width * 0.56} height={8} fill={ink} opacity={0.5} />
          <rect x={width * 0.3} y={height * 0.65} width={width * 0.4} height={6} fill={ink} opacity={0.25} />
        </>
      )}
      {standoffs.map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r={7} fill="rgba(255,255,255,0.75)" stroke="rgba(25,25,25,0.22)" />
          <circle cx={cx} cy={cy} r={2.6} fill="rgba(25,25,25,0.45)" />
        </g>
      ))}
    </g>
  );
}

export function Mug({
  body = artColors.white,
  accent = artColors.blue,
  ink = artColors.ink,
}: {
  body?: string;
  accent?: string;
  ink?: string;
}) {
  return (
    <g style={artShadow}>
      <path d="M118 40 C158 40 158 108 118 108" fill="none" stroke={body} strokeWidth={15} strokeLinecap="round" />
      <path d="M18 30 H120 V116 C120 132 108 142 92 142 H46 C30 142 18 132 18 116 Z" fill={body} />
      <ellipse cx={69} cy={32} rx={51} ry={10} fill="rgba(25,25,25,0.12)" />
      <rect x={38} y={62} width={62} height={30} fill={accent} />
      <g transform="translate(69 77)">
        <Asterisk size={19} color={ink} />
      </g>
    </g>
  );
}

export function Bottle({
  body = artColors.ink,
  label = artColors.yellow,
  ink = artColors.ink,
}: {
  body?: string;
  label?: string;
  ink?: string;
}) {
  return (
    <g style={artShadow}>
      <rect x={32} y={0} width={30} height={24} rx={3} fill={artColors.inkSoft} />
      <rect x={35} y={22} width={24} height={16} fill={body} />
      <path d="M26 38 H74 L78 96 V238 C78 250 70 256 60 256 H40 C30 256 22 250 22 238 V96 Z" fill={body} />
      <rect x={22} y={128} width={56} height={72} fill={label} />
      <g transform="translate(50 150)">
        <Asterisk size={22} color={ink} />
      </g>
      <rect x={34} y={178} width={32} height={5} fill={ink} opacity={0.55} />
      <rect x={22} y={70} width={56} height={7} fill={artColors.white} opacity={0.12} />
    </g>
  );
}

export function Tee({
  body = artColors.blue,
  ink = artColors.white,
  accent = artColors.yellow,
}: {
  body?: string;
  ink?: string;
  accent?: string;
}) {
  return (
    <g style={artShadow}>
      <path
        d="M58 14 L88 2 Q110 22 132 2 L162 14 L210 62 L176 96 L160 80 L160 196 L60 196 L60 80 L44 96 L10 62 Z"
        fill={body}
      />
      <path d="M88 2 Q110 22 132 2 L136 12 Q110 34 84 12 Z" fill="rgba(0,0,0,0.18)" />
      <g transform="translate(110 104)">
        <Asterisk size={38} color={accent} />
      </g>
      <rect x={90} y={132} width={40} height={5} fill={ink} opacity={0.7} />
      <path d="M60 80 L60 196 L74 196 L74 84 Z" fill="rgba(0,0,0,0.12)" />
    </g>
  );
}

export function Cap({
  body = artColors.yellow,
  ink = artColors.ink,
  accent = artColors.ink,
}: {
  body?: string;
  ink?: string;
  accent?: string;
}) {
  return (
    <g style={artShadow}>
      <path d="M18 92 C18 38 58 12 96 12 C134 12 170 38 170 92 Z" fill={body} />
      <path d="M18 92 C18 78 40 68 94 68 C148 68 172 78 172 92 L172 100 H18 Z" fill="rgba(0,0,0,0.12)" />
      <path d="M96 92 C132 92 176 96 194 112 C170 124 120 124 88 106 Z" fill={ink} />
      <circle cx={96} cy={14} r={7} fill={accent} />
      <g transform="translate(96 52)">
        <Asterisk size={26} color={ink} />
      </g>
    </g>
  );
}

export function BusinessCard({
  width = 180,
  height = 108,
  tone = 'ink',
  accent = artColors.yellow,
}: {
  width?: number;
  height?: number;
  tone?: 'ink' | 'yellow' | 'blue' | 'paper';
  accent?: string;
}) {
  const fills: Record<string, string> = {
    ink: artColors.ink,
    yellow: artColors.yellow,
    blue: artColors.blue,
    paper: artColors.white,
  };
  const foreground = tone === 'yellow' || tone === 'paper' ? artColors.ink : artColors.white;
  return (
    <g style={artShadow}>
      <rect width={width} height={height} fill={fills[tone]} />
      <g transform={`translate(${width * 0.16} ${height * 0.3})`}>
        <Asterisk size={22} color={accent} />
      </g>
      <rect x={width * 0.16} y={height * 0.64} width={width * 0.34} height={5} fill={foreground} opacity={0.85} />
      <rect x={width * 0.16} y={height * 0.75} width={width * 0.52} height={3} fill={foreground} opacity={0.45} />
      <rect x={width * 0.16} y={height * 0.84} width={width * 0.24} height={3} fill={foreground} opacity={0.3} />
    </g>
  );
}

export function Notebook({
  width = 150,
  height = 210,
  cover = artColors.blue,
  accent = artColors.yellow,
}: {
  width?: number;
  height?: number;
  cover?: string;
  accent?: string;
}) {
  return (
    <g style={artShadow}>
      <rect width={width} height={height} fill={cover} />
      <rect x={0} y={0} width={9} height={height} fill="rgba(0,0,0,0.22)" />
      <rect x={width * 0.62} y={0} width={8} height={height} fill={accent} />
      <g transform={`translate(${width * 0.26} ${height * 0.34})`}>
        <Asterisk size={34} color={accent} />
      </g>
      <rect x={width * 0.26} y={height * 0.56} width={width * 0.4} height={5} fill={artColors.white} opacity={0.9} />
      <rect x={width * 0.26} y={height * 0.65} width={width * 0.28} height={4} fill={artColors.white} opacity={0.4} />
    </g>
  );
}

export function RollUpBanner({
  width = 160,
  height = 330,
  solid = artColors.ink,
  accent = artColors.yellow,
}: {
  width?: number;
  height?: number;
  solid?: string;
  accent?: string;
}) {
  return (
    <g style={artShadow}>
      <rect x={width / 2 - 4} y={10} width={8} height={height - 20} fill="rgba(25,25,25,0.16)" />
      <rect width={width} height={height - 18} fill={solid} />
      <rect x={0} y={0} width={width} height={10} fill={artColors.steel} />
      <rect x={width * 0.16} y={height * 0.14} width={width * 0.42} height={9} fill={accent} />
      <rect x={width * 0.16} y={height * 0.2} width={width * 0.68} height={9} fill={artColors.white} opacity={0.9} />
      <rect x={width * 0.16} y={height * 0.26} width={width * 0.5} height={9} fill={artColors.white} opacity={0.9} />
      <g transform={`translate(${width / 2} ${height * 0.52})`}>
        <Asterisk size={width * 0.42} color={accent} />
      </g>
      <rect x={width * 0.16} y={height * 0.76} width={width * 0.3} height={5} fill={artColors.white} opacity={0.5} />
      <rect x={width * 0.16} y={height * 0.81} width={width * 0.44} height={5} fill={artColors.white} opacity={0.3} />
      <rect x={width * 0.1} y={height - 18} width={width * 0.8} height={18} rx={4} fill={artColors.inkSoft} />
    </g>
  );
}

export function SwatchStrip({
  width = 190,
  colors = [artColors.yellow, artColors.ink, artColors.blue, artColors.paper],
}: {
  width?: number;
  colors?: readonly string[];
}) {
  const cell = width / colors.length;
  return (
    <g style={artShadow}>
      <rect width={width} height={cell} fill={artColors.white} />
      {colors.map((color, i) => (
        <rect key={i} x={i * cell} y={0} width={cell} height={cell} fill={color} stroke="rgba(25,25,25,0.08)" />
      ))}
    </g>
  );
}

export function Sticker({
  size = 86,
  body = artColors.yellow,
  ink = artColors.ink,
}: {
  size?: number;
  body?: string;
  ink?: string;
}) {
  return (
    <g style={artShadow}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={body} />
      <circle cx={size / 2} cy={size / 2} r={size / 2 - 6} fill="none" stroke={ink} strokeOpacity={0.18} />
      <g transform={`translate(${size / 2} ${size / 2})`}>
        <Asterisk size={size * 0.36} color={ink} />
      </g>
    </g>
  );
}

export function Folder({
  width = 170,
  height = 220,
  body = artColors.yellow,
  ink = artColors.ink,
}: {
  width?: number;
  height?: number;
  body?: string;
  ink?: string;
}) {
  return (
    <g style={artShadow}>
      <path d={`M0 26 L58 26 L70 8 L${width} 8 L${width} ${height} L0 ${height} Z`} fill={body} />
      <rect x={16} y={44} width={width * 0.3} height={5} fill={ink} opacity={0.7} />
      <rect x={16} y={56} width={width * 0.48} height={4} fill={ink} opacity={0.35} />
      <g transform={`translate(${width * 0.72} ${height * 0.74})`}>
        <Asterisk size={30} color={ink} />
      </g>
    </g>
  );
}



