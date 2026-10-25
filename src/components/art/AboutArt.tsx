import { ArtCanvas, DotField } from './ArtCanvas';
import {
  Asterisk,
  BusinessCard,
  Folder,
  PaperSheet,
  Part,
  artColors,
} from './ArtParts';

/**
 * Studio desk flat-lay used in the About section: layout proof, colour swatches,
 * folder and business cards. Sample artwork — not client photography.
 */
export function AboutArt() {
  return (
    <ArtCanvas
      label="Sample studio desk flat-lay with a layout proof, colour swatches, folder, business cards and sticker"
      bg="#E9F0F8"
    >
      <circle cx={110} cy={96} r={82} fill={artColors.yellow} />
      <DotField x={400} y={470} cols={6} rows={4} gap={24} radius={1.6} color={artColors.blue} opacity={0.35} />
      <RegistrationRules />

      <Part x={96} y={104} rotate={-4}>
        <PaperSheet width={300} height={372} variant="grid" accent={artColors.yellow} />
      </Part>

      <Part x={56} y={380} rotate={-9} scale={0.92}>
        <Folder width={176} height={208} body={artColors.yellow} />
      </Part>

      <Part x={352} y={128} rotate={9}>
        <SwatchCard />
      </Part>

      <Part x={340} y={286} rotate={7}>
        <BusinessCard width={182} height={106} tone="ink" accent={artColors.yellow} />
      </Part>

      <Part x={368} y={404} rotate={-5}>
        <BusinessCard width={182} height={106} tone="paper" accent={artColors.blue} />
      </Part>

      <Part x={44} y={266} rotate={-3}>
        <PaperSheet width={74} height={96} variant="bars" accent={artColors.yellow} paper={artColors.white} />
      </Part>

      <g transform="translate(158 526)">
        <Asterisk size={22} color={artColors.ink} />
      </g>
      <g transform="translate(330 96)">
        <Asterisk size={18} color={artColors.blue} />
      </g>
    </ArtCanvas>
  );
}

function RegistrationRules() {
  return (
    <g stroke={artColors.blue} strokeWidth={1} opacity={0.22}>
      <line x1={0} y1={520} x2={600} y2={520} />
      <line x1={0} y1={540} x2={600} y2={540} />
    </g>
  );
}

function SwatchCard() {
  return (
    <g style={{ filter: 'drop-shadow(0 16px 18px rgba(25,25,25,0.16))' }}>
      <rect width={168} height={214} fill={artColors.white} />
      <rect x={16} y={16} width={136} height={74} fill={artColors.yellow} />
      <rect x={16} y={98} width={136} height={34} fill={artColors.ink} />
      <rect x={16} y={140} width={136} height={22} fill={artColors.blue} />
      <circle cx={64} cy={190} r={16} fill={artColors.yellow} />
      <circle cx={104} cy={190} r={16} fill={artColors.blue} />
      <circle cx={144} cy={190} r={16} fill={artColors.ink} />
    </g>
  );
}
