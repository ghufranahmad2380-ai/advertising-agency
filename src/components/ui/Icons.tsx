export function ArrowIcon({ className = 'btn__icon' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M1.5 8h12M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

const starPoints = Array.from({ length: 16 }, (_, i) => {
  const radius = i % 2 === 0 ? 20 : 5.8;
  const angle = (Math.PI / 8) * i - Math.PI / 2;
  return `${(20 + Math.cos(angle) * radius).toFixed(2)},${(20 + Math.sin(angle) * radius).toFixed(2)}`;
}).join(' ');

export function AsteriskMark({ className, color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <polygon fill={color} points={starPoints} />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M20.5 11.6a8.5 8.5 0 0 1-12.7 7.4L3.5 20.5l1.5-4.2A8.5 8.5 0 1 1 20.5 11.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.9 8.2c.3-.1.6 0 .8.3l.9 1.6c.1.3.1.5-.1.7l-.6.6c.6 1.2 1.5 2 2.7 2.6l.6-.6c.2-.2.5-.3.7-.1l1.6.9c.3.2.4.5.3.8-.3.9-1.2 1.5-2.1 1.4-2.9-.4-5.2-2.7-5.6-5.6-.1-.9.4-1.8 1.3-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}
