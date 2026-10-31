import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Restrained entrance animation. Marks itself visible once and then stops
 * observing. Reduced-motion users see content immediately (see global.css).
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      /*
       * `threshold` must stay at 0. A ratio threshold is unreachable for targets
       * taller than 1/threshold screens: the printed-and-branded product gallery
       * is ~29,000 px tall on a phone, so at most ~3% of it can ever be inside the
       * viewport. With the old `threshold: 0.06` the observer never reported an
       * intersection, `is-visible` was never added, and the whole gallery stayed at
       * `opacity: 0` — the product photographs were invisible while the heading
       * above them (a short block) rendered normally. The -6% bottom margin keeps
       * the entrance animation feeling the same for regular-sized blocks.
       */
      { rootMargin: '0px 0px -6% 0px', threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
