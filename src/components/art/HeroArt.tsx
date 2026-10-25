import { ArtCanvas, DotField, FloorShadow } from './ArtCanvas';
import {
  AcrylicPanel,
  Asterisk,
  BusinessCard,
  GiftBox,
  PaperSheet,
  Part,
  Sticker,
  Tote,
  artColors,
} from './ArtParts';

/**
 * Hero still life: printed poster, canvas tote, acrylic panel, gift box and
 * business cards. A concept composition â€” not a photograph of client work.
 */
export function HeroArt() {
  return (
    <ArtCanvas label="Sample composition of printed posters, a branded tote bag, acrylic panel, gift box and business cards" bg="#E8EFF7">
      {/* Backdrop shapes */}
      <circle cx={470} cy={116} r={128} fill={artColors.yellow} />
      <circle cx={74} cy={520} r={104} fill="none" stroke={artColors.blue} strokeWidth={1.5} opacity={0.38} />
      <circle cx={470} cy={116} r={160} fill="none" stroke={artColors.blue} strokeWidth={1} opacity={0.18} />
      <DotField x={44} y={60} cols={5} rows={4} gap={24} radius={1.6} color={artColors.blue} opacity={0.35} />
      <FloorShadow cx={300} cy={528} rx={240} ry={30} opacity={0.1} />

      {/* Printed poster */}
      <Part x={84} y={132} rotate={-7}>
        <PaperSheet width={210} height={288} variant="type" accent={artColors.yellow} />
      </Part>

      {/* Acrylic panel */}
      <Part x={396} y={118} rotate={5}>
        <AcrylicPanel
          width={148}
          height={208}
          tint="rgba(255,255,255,0.5)"
          edge="rgba(255,255,255,0.9)"
          variant="bars"
          accent={artColors.blue}
        />
      </Part>

      {/* Tote bag */}
      <Part x={176} y={262} rotate={-2} scale={0.98}>
        <Tote width={188} height={186} body={artColors.paper} accent={artColors.yellow} />
      </Part>

      {/* Gift box */}
      <Part x={336} y={368} rotate={4} scale={0.84}>
        <GiftBox
          face={artColors.blue}
          top="#3575B8"
          side={artColors.blueDeep}
          accent={artColors.yellow}
          width={168}
          height={126}
        />
      </Part>

      {/* Fanned business cards */}
      <Part x={92} y={414} rotate={-12} scale={0.92}>
        <BusinessCard width={168} height={100} tone="ink" accent={artColors.yellow} />
      </Part>
      <Part x={112} y={428} rotate={-4} scale={0.92}>
        <BusinessCard width={168} height={100} tone="yellow" accent={artColors.ink} />
      </Part>

      {/* Round sticker accent */}
      <Part x={326} y={100} rotate={8}>
        <Sticker size={76} body={artColors.ink} ink={artColors.yellow} />
      </Part>

      <g transform="translate(392 386)">
        <Asterisk size={16} color={artColors.blue} />
      </g>
    </ArtCanvas>
  );
}

