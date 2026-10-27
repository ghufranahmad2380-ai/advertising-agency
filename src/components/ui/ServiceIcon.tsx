import type { ReactNode } from 'react';
import type { ServiceIconKey } from '../../data/site';

const icons: Record<ServiceIconKey, ReactNode> = {
  acrylic: (
    <g stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M7 32h26" strokeLinecap="round" />
      <path d="M10 28V16l8-4 8 4v12" fill="currentColor" fillOpacity="0.07" />
      <path d="M15 28V11l7-3.5 7 3.5v17" fill="currentColor" fillOpacity="0.14" />
      <path d="M10 16l8-4 8 4M15 11l7-3.5 7 3.5" />
      <path d="M32 7v5M29.5 9.5h5" stroke="var(--yellow)" strokeWidth="2.2" strokeLinecap="round" />
    </g>
  ),
  gifts: (
    <g stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M8 17h24v15H8z" fill="currentColor" fillOpacity="0.06" />
      <path d="M6 12h28v5H6z" fill="currentColor" fillOpacity="0.12" />
      <path d="M20 12v20" stroke="var(--yellow)" strokeWidth="3" />
      <path d="M20 12c-2.6-5.5-9.4-4.4-8-.8S17 14 20 12ZM20 12c2.6-5.5 9.4-4.4 8-.8S23 14 20 12Z" />
    </g>
  ),
  dtf: (
    <g stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M10 15h21v10H10z" fill="currentColor" fillOpacity="0.08" />
      <path d="M15 15V9h11v6" />
      <path d="M14 25v7h13v-7" strokeDasharray="2.5 2.5" />
      <path d="M17 28h7" stroke="var(--yellow)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="14" cy="20" r="1.7" fill="currentColor" stroke="none" />
      <path d="M27 19h1.6M27 22h1.6" strokeLinecap="round" />
    </g>
  ),
  uv: (
    <g stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M8 8h24v6H8z" fill="currentColor" fillOpacity="0.08" />
      <path d="M13 14v4M20 14v6M27 14v4" stroke="var(--yellow)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7 33h26" strokeLinecap="round" />
      <path d="M13 33v-3M20 33v-5M27 33v-3" strokeLinecap="round" />
      <path d="M31 5l2-2M34 9h3" strokeLinecap="round" />
    </g>
  ),
  laser: (
    <g stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M7 6v26M7 9h11" />
      <path d="M18 6h6v6h-6z" fill="currentColor" fillOpacity="0.12" />
      <path d="M21 12v10" stroke="var(--yellow)" strokeWidth="2.2" strokeDasharray="3 2" />
      <path d="M9 32h24" strokeLinecap="round" />
      <path d="M21 26l1.6 1.6L21 29.2l-1.6-1.6z" fill="currentColor" stroke="none" />
      <path d="M31 12v6M28 15h6" stroke="var(--yellow)" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  ),
  silkScreen: (
    <g stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M6 8h28v15H6z" fill="currentColor" fillOpacity="0.06" />
      <path d="M11 12h18v7H11z" />
      <path d="M9 22h22" strokeLinecap="round" />
      <path d="M15 26h12v5H15z" fill="var(--yellow)" fillOpacity="0.8" stroke="none" />
      <path d="M8 34h24" strokeLinecap="round" />
      <path d="M13 5l7 3 7-3" />
    </g>
  ),
};

/**
 * Decorative line illustrations for the six service cards. Each service gets a
 * distinct drawing so the cards never repeat the same visual.
 */
export function ServiceIcon({ kind, className }: { kind: ServiceIconKey; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false">
      {icons[kind]}
    </svg>
  );
}
