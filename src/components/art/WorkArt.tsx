import type { WorkArtKey } from '../../data/site';
import { ArtCanvas, DotField, FloorShadow } from './ArtCanvas';
import {
  AcrylicPanel,
  Asterisk,
  BusinessCard,
  Bottle,
  Cap,
  GiftBox,
  Notebook,
  PaperSheet,
  Part,
  Sticker,
  Tee,
  artColors,
} from './ArtParts';

const labels: Record<WorkArtKey, string> = {
  giftSet: 'Sample gift set illustration with a gift box, branded bottle and card',
  packaging: 'Sample packaging illustration with three printed boxes',
  awards: 'Sample acrylic awards illustration on a light backdrop',
  posters: 'Sample poster series illustration with printed sheets',
  onboarding: 'Sample onboarding kit illustration with notebook, bottle and card',
  signage: 'Sample acrylic reception signage illustration',
  bottle: 'Sample branded bottle illustration in three colourways',
  capsule: 'Sample merchandise capsule illustration with t-shirt and cap',
};

const backgrounds: Record<WorkArtKey, string> = {
  giftSet: '#FBF3C4',
  packaging: '#E9F0F8',
  awards: '#E3ECF6',
  posters: '#F5D90A',
  onboarding: '#F7F7F3',
  signage: '#191919',
  bottle: '#E9F0F8',
  capsule: '#EAEAEA',
};

export function WorkArt({ kind }: { kind: WorkArtKey }) {
  return (
    <ArtCanvas bg={backgrounds[kind]} label={labels[kind]}>
      {kind === 'giftSet' && (
        <>
          <circle cx={486} cy={124} r={78} fill={artColors.blue} />
          <DotField x={60} y={70} cols={4} rows={4} gap={24} color={artColors.ink} opacity={0.2} />
          <FloorShadow cx={300} cy={500} rx={220} ry={24} opacity={0.13} />
          <Part x={112} y={286} rotate={-3} scale={1.28}>
            <GiftBox
              face={artColors.yellow}
              top="#FBE96A"
              side={artColors.yellowDeep}
              accent={artColors.ink}
              width={176}
              height={124}
            />
          </Part>
          <Part x={392} y={176} rotate={3}>
            <Bottle body={artColors.ink} label={artColors.yellow} ink={artColors.ink} />
          </Part>
          <Part x={248} y={412} rotate={9} scale={0.88}>
            <BusinessCard width={168} height={100} tone="ink" accent={artColors.yellow} />
          </Part>
          <Part x={92} y={122} rotate={-10}>
            <Sticker size={86} body={artColors.yellow} ink={artColors.ink} />
          </Part>
        </>
      )}
      {kind === 'packaging' && (
        <>
          <DotField x={468} y={88} cols={4} rows={4} gap={24} color={artColors.blue} opacity={0.3} />
          <circle cx={90} cy={120} r={72} fill={artColors.yellow} />
          <FloorShadow cx={300} cy={478} rx={250} ry={26} opacity={0.12} />
          <Part x={104} y={246} rotate={-2} scale={1.06}>
            <GiftBox
              face={artColors.blue}
              top="#3878BC"
              side={artColors.blueDeep}
              accent={artColors.yellow}
              width={156}
              height={118}
              ribbon={false}
            />
          </Part>
          <Part x={258} y={220} rotate={2} scale={0.92}>
            <GiftBox
              face={artColors.ink}
              top={artColors.inkSoft}
              side={artColors.inkDeep}
              accent={artColors.yellow}
              width={150}
              height={112}
              ribbon={false}
            />
          </Part>
          <Part x={390} y={300} rotate={-6} scale={0.98}>
            <GiftBox
              face={artColors.yellow}
              top="#FBE96A"
              side={artColors.yellowDeep}
              accent={artColors.ink}
              width={144}
              height={108}
              ribbon
            />
          </Part>
          <AsteriskTag x={82} y={408} />
        </>
      )}
      {kind === 'awards' && (
        <>
          <circle cx={300} cy={150} r={110} fill="none" stroke={artColors.blue} strokeWidth={1.5} opacity={0.28} />
          <circle cx={470} cy={466} r={64} fill={artColors.yellow} />
          <DotField x={446} y={84} cols={4} rows={4} gap={24} color={artColors.ink} opacity={0.18} />
          <FloorShadow cx={258} cy={496} rx={170} ry={18} opacity={0.12} />
          <Part x={122} y={168} rotate={-3}>
            <AcrylicPanel
              width={168}
              height={248}
              tint="rgba(255,255,255,0.78)"
              edge={artColors.white}
              ink={artColors.ink}
              accent={artColors.blue}
              variant="award"
            />
          </Part>
          <Part x={316} y={230} rotate={5} scale={0.94}>
            <AcrylicPanel
              width={152}
              height={220}
              tint="rgba(255,255,255,0.62)"
              edge={artColors.white}
              ink={artColors.blue}
              accent={artColors.yellow}
              variant="bars"
            />
          </Part>
          <rect x={96} y={430} width={220} height={12} fill={artColors.ink} opacity={0.9} />
          <rect x={306} y={452} width={186} height={10} fill={artColors.ink} opacity={0.7} />
        </>
      )}
      {kind === 'posters' && (
        <>
          <circle cx={96} cy={498} r={84} fill={artColors.blue} />
          <DotField x={468} y={72} cols={4} rows={4} gap={22} color={artColors.ink} opacity={0.25} />
          <Part x={104} y={128} rotate={-7}>
            <PaperSheet width={236} height={326} variant="type" accent={artColors.yellow} />
          </Part>
          <Part x={244} y={150} rotate={4}>
            <PaperSheet width={214} height={300} variant="circle" accent={artColors.blue} />
          </Part>
          <Part x={382} y={242} rotate={11}>
            <PaperSheet width={176} height={242} variant="bars" accent={artColors.yellow} />
          </Part>
          <AsteriskTag x={80} y={406} color={artColors.ink} size={30} />
        </>
      )}
      {kind === 'onboarding' && (
        <>
          <circle cx={104} cy={120} r={78} fill={artColors.blue} />
          <DotField x={446} y={420} cols={4} rows={4} gap={24} color={artColors.blue} opacity={0.28} />
          <FloorShadow cx={290} cy={500} rx={200} ry={20} opacity={0.1} />
          <Part x={176} y={176} rotate={-6}>
            <Notebook width={150} height={214} cover={artColors.blue} accent={artColors.yellow} />
          </Part>
          <Part x={330} y={196} rotate={2} scale={0.84}>
            <Bottle body={artColors.ink} label={artColors.yellow} ink={artColors.ink} />
          </Part>
          <Part x={228} y={412} rotate={5} scale={0.94}>
            <BusinessCard width={178} height={106} tone="yellow" accent={artColors.ink} />
          </Part>
          <Part x={402} y={140} rotate={-9}>
            <Sticker size={74} body={artColors.yellow} ink={artColors.ink} />
          </Part>
        </>
      )}
      {kind === 'signage' && (
        <>
          <circle cx={486} cy={420} r={78} fill={artColors.yellow} />
          <DotField x={76} y={84} cols={4} rows={4} gap={24} color={artColors.white} opacity={0.24} />
          <Part x={140} y={176} rotate={-1}>
            <AcrylicPanel
              width={318}
              height={188}
              tint="rgba(255,255,255,0.1)"
              edge="rgba(255,255,255,0.55)"
              ink={artColors.white}
              accent={artColors.yellow}
              variant="bars"
            />
          </Part>
          <line x1={0} y1={452} x2={600} y2={452} stroke={artColors.white} strokeWidth={1} opacity={0.22} />
          <rect x={140} y={404} width={318} height={8} fill={artColors.white} opacity={0.16} />
          <AsteriskTag x={478} y={176} color={artColors.white} size={28} />
        </>
      )}
      {kind === 'bottle' && (
        <>
          <circle cx={300} cy={128} r={96} fill={artColors.yellow} />
          <DotField x={64} y={430} cols={6} rows={4} gap={22} color={artColors.blue} opacity={0.28} />
          <FloorShadow cx={290} cy={500} rx={210} ry={22} opacity={0.12} />
          <Part x={112} y={226} rotate={-4} scale={0.92}>
            <Bottle body={artColors.ink} label={artColors.yellow} ink={artColors.ink} />
          </Part>
          <Part x={244} y={198} rotate={1} scale={0.84}>
            <Bottle body={artColors.blue} label={artColors.white} ink={artColors.blue} />
          </Part>
          <Part x={366} y={238} rotate={4} scale={0.96}>
            <Bottle body={artColors.yellow} label={artColors.ink} ink={artColors.yellow} />
          </Part>
        </>
      )}
      {kind === 'capsule' && (
        <>
          <circle cx={478} cy={126} r={82} fill={artColors.blue} />
          <DotField x={58} y={82} cols={4} rows={4} gap={24} color={artColors.ink} opacity={0.2} />
          <FloorShadow cx={290} cy={484} rx={210} ry={22} opacity={0.12} />
          <Part x={136} y={200} rotate={-4} scale={1.04}>
            <Tee body={artColors.yellow} accent={artColors.ink} ink={artColors.ink} />
          </Part>
          <Part x={360} y={306} rotate={6} scale={0.92}>
            <Cap body={artColors.blue} ink={artColors.ink} accent={artColors.yellow} />
          </Part>
          <Part x={296} y={138} rotate={8}>
            <Sticker size={76} body={artColors.yellow} ink={artColors.ink} />
          </Part>
        </>
      )}
    </ArtCanvas>
  );
}

function AsteriskTag({ x, y, color = artColors.ink, size = 26 }: { x: number; y: number; color?: string; size?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <Asterisk size={size} color={color} />
    </g>
  );
}
