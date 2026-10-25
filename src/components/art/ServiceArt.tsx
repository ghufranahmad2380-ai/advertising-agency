import type { ServiceArtKey } from '../../data/site';
import { ArtCanvas, DotField, FloorShadow } from './ArtCanvas';
import {
  AcrylicPanel,
  Asterisk,
  BusinessCard,
  Cap,
  GiftBox,
  Mug,
  Notebook,
  PaperSheet,
  Part,
  RollUpBanner,
  Sticker,
  SwatchStrip,
  Tee,
  artColors,
} from './ArtParts';

const labels: Record<ServiceArtKey, string> = {
  gifts: 'Sample illustration of a branded gift box, printed mug and packaging sticker',
  printing: 'Sample illustration of fanned printed sheets and a colour swatch strip',
  acrylic: 'Sample illustration of cut acrylic award panels with metal standoffs',
  merch: 'Sample illustration of a branded t-shirt and cap',
  branding: 'Sample illustration of business cards, a notebook and colour swatches',
  displays: 'Sample illustration of a roll-up banner and an acrylic display panel',
};

const backgrounds: Record<ServiceArtKey, string> = {
  gifts: '#FBF3C4',
  printing: '#E9F0F8',
  acrylic: '#191919',
  merch: '#F7F7F3',
  branding: '#EAEAEA',
  displays: '#2864A6',
};

export function ServiceArt({ kind }: { kind: ServiceArtKey }) {
  return (
    <ArtCanvas bg={backgrounds[kind]} label={labels[kind]}>
      {kind === 'gifts' && (
        <>
          <circle cx={492} cy={132} r={84} fill={artColors.blue} />
          <DotField x={44} y={72} cols={4} rows={4} gap={24} color={artColors.ink} opacity={0.22} />
          <FloorShadow cx={300} cy={480} rx={230} ry={26} opacity={0.14} />
          <Part x={128} y={238} rotate={-3} scale={1.14}>
            <GiftBox
              face={artColors.ink}
              top={artColors.inkSoft}
              side={artColors.inkDeep}
              accent={artColors.yellow}
              width={182}
              height={132}
            />
          </Part>
          <Part x={352} y={300} rotate={4} scale={1.02}>
            <Mug body={artColors.white} accent={artColors.blue} ink={artColors.white} />
          </Part>
          <Part x={382} y={162} rotate={10}>
            <Sticker size={78} body={artColors.yellow} ink={artColors.ink} />
          </Part>
        </>
      )}
      {kind === 'printing' && (
        <>
          <DotField x={474} y={72} cols={4} rows={4} gap={24} color={artColors.blue} opacity={0.32} />
          <circle cx={104} cy={458} r={76} fill={artColors.yellow} />
          <Part x={96} y={132} rotate={-9}>
            <PaperSheet width={208} height={288} variant="bars" accent={artColors.yellow} />
          </Part>
          <Part x={218} y={116} rotate={2}>
            <PaperSheet width={200} height={280} variant="circle" accent={artColors.blue} />
          </Part>
          <Part x={330} y={158} rotate={10}>
            <PaperSheet width={186} height={262} variant="grid" accent={artColors.yellow} />
          </Part>
          <Part x={242} y={462} rotate={-2}>
            <SwatchStrip width={192} />
          </Part>
        </>
      )}
      {kind === 'acrylic' && (
        <>
          <circle cx={470} cy={128} r={92} fill={artColors.yellow} />
          <circle cx={120} cy={492} r={96} fill="none" stroke={artColors.blue} strokeWidth={1.5} opacity={0.7} />
          <DotField x={400} y={430} cols={6} rows={4} gap={22} color={artColors.white} opacity={0.24} />
          <Part x={354} y={236} rotate={8}>
            <AcrylicPanel
              width={132}
              height={196}
              tint="rgba(255,255,255,0.12)"
              edge="rgba(255,255,255,0.5)"
              ink="rgba(255,255,255,0.85)"
              accent={artColors.yellow}
              variant="bars"
            />
          </Part>
          <Part x={150} y={150} rotate={-4}>
            <AcrylicPanel
              width={206}
              height={292}
              tint="rgba(233,240,248,0.2)"
              edge="rgba(255,255,255,0.72)"
              ink={artColors.white}
              accent={artColors.yellow}
              variant="award"
            />
          </Part>
          <line x1={0} y1={540} x2={600} y2={540} stroke={artColors.white} strokeWidth={1} opacity={0.18} />
        </>
      )}
      {kind === 'merch' && (
        <>
          <circle cx={104} cy={124} r={72} fill={artColors.yellow} />
          <circle cx={520} cy={470} r={108} fill="none" stroke={artColors.blue} strokeWidth={1.5} opacity={0.3} />
          <DotField x={470} y={76} cols={4} rows={4} gap={24} color={artColors.blue} opacity={0.3} />
          <FloorShadow cx={280} cy={470} rx={210} ry={24} opacity={0.12} />
          <Part x={128} y={182} rotate={-3}>
            <Tee body={artColors.blue} accent={artColors.yellow} ink={artColors.white} />
          </Part>
          <Part x={338} y={318} rotate={5} scale={0.94}>
            <Cap body={artColors.yellow} ink={artColors.ink} accent={artColors.ink} />
          </Part>
          <g transform="translate(462 168)">
            <Asterisk size={34} color={artColors.ink} />
          </g>
        </>
      )}
      {kind === 'branding' && (
        <>
          <circle cx={492} cy={456} r={92} fill={artColors.yellow} />
          <DotField x={48} y={72} cols={4} rows={4} gap={24} color={artColors.ink} opacity={0.22} />
          <Part x={118} y={150} rotate={-8}>
            <BusinessCard width={252} height={152} tone="ink" accent={artColors.yellow} />
          </Part>
          <Part x={228} y={214} rotate={4}>
            <BusinessCard width={252} height={152} tone="yellow" accent={artColors.ink} />
          </Part>
          <Part x={96} y={358} rotate={-4} scale={0.86}>
            <Notebook width={132} height={184} cover={artColors.blue} accent={artColors.yellow} />
          </Part>
          <Part x={368} y={392} rotate={6}>
            <SwatchStrip width={172} />
          </Part>
        </>
      )}
      {kind === 'displays' && (
        <>
          <circle cx={96} cy={132} r={86} fill={artColors.yellow} />
          <DotField x={440} y={72} cols={4} rows={4} gap={24} color={artColors.white} opacity={0.34} />
          <FloorShadow cx={300} cy={486} rx={210} ry={24} opacity={0.22} />
          <Part x={206} y={106} rotate={-1} scale={0.94}>
            <RollUpBanner width={168} height={352} solid={artColors.ink} accent={artColors.yellow} />
          </Part>
          <Part x={386} y={276} rotate={5}>
            <AcrylicPanel
              width={124}
              height={168}
              tint="rgba(255,255,255,0.24)"
              edge="rgba(255,255,255,0.75)"
              ink={artColors.white}
              accent={artColors.yellow}
              variant="mark"
            />
          </Part>
          <Part x={402} y={150} rotate={-8}>
            <Sticker size={70} body={artColors.yellow} ink={artColors.ink} />
          </Part>
        </>
      )}
    </ArtCanvas>
  );
}
