export function ArrowIcon({ className = 'btn__icon' }: { className?: string }) {
  return (
    <svg
      className={`${className} icon-arrow`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
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

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M7.6 3.8 10 8.1 8.2 9.9a13.2 13.2 0 0 0 5.9 5.9l1.8-1.8 4.3 2.4-.5 2.6c-.1.7-.8 1.2-1.5 1.1C10.9 19.4 4.6 13.1 3.9 5.8c-.1-.7.4-1.4 1.1-1.5l2.6-.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="5.5" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="m3.6 6.6 8.4 6 8.4-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M12 21s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M8 1.8v8.4M4.4 6.8 8 10.4l3.6-3.6M2.2 13.6h11.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M6.2 3.2h6.6v6.6M12.8 3.2 3.4 12.6M2.2 6.1v7.7h7.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function PauseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M5 3.2v9.6M11 3.2v9.6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M4.6 2.9 12.8 8l-8.2 5.1V2.9Z" fill="currentColor" />
    </svg>
  );
}

export function ReverseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M2.2 5.6h9.2l-2.1-2.1M13.8 10.4H4.6l2.1 2.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
