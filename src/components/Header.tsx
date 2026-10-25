import { useEffect, useRef, useState } from 'react';
import { brand, navigation } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { ArrowIcon, AsteriskMark } from './ui/Icons';
import './Header.css';

const SECTION_IDS = ['top', 'about', 'services', 'gallery', 'contact'] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusables: HTMLElement[] = [
        ...(toggleRef.current ? [toggleRef.current] : []),
        ...Array.from(panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')),
      ];

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const current = document.activeElement as HTMLElement | null;

      if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      }
    };

    const desktop = window.matchMedia('(min-width: 961px)');
    const onViewportChange = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    }, 80);

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onViewportChange);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onViewportChange);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="container site-header__inner">
          <a className="brand" href="#top" aria-label={`${brand.name} — back to top`}>
            <span className="brand__mark" aria-hidden="true">
              <AsteriskMark />
            </span>
            <span className="brand__text">
              <span className="brand__name">{brand.name}</span>
              <span className="brand__discipline">{brand.discipline}</span>
            </span>
          </a>

          <nav className="primary-nav" aria-label="Primary">
            <ul>
              {navigation.map((item) => {
                const isActive = item.href === `#${activeSection}`;
                return (
                  <li key={item.href}>
                    <a
                      className={`primary-nav__link${isActive ? ' is-active' : ''}`}
                      href={item.href}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="site-header__actions">
            <a className="btn btn--primary site-header__cta" href="#contact">
              Let’s Talk
              <ArrowIcon />
            </a>
            <button
              ref={toggleRef}
              type="button"
              className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="menu-toggle__bar" />
              <span className="menu-toggle__bar" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        ref={panelRef}
        className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="mobile-nav__inner">
          <p className="mobile-nav__label">Navigation / 01</p>
          <nav aria-label="Mobile">
            <ul className="mobile-nav__list">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a className="mobile-nav__link" href={item.href} onClick={() => setMenuOpen(false)}>
                    <span className="mobile-nav__index" aria-hidden="true">
                      0{index + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav__foot">
            <a className="btn btn--primary btn--block" href="#contact" onClick={() => setMenuOpen(false)}>
              Let’s Talk
              <ArrowIcon />
            </a>
            <p className="mobile-nav__note">
              {brand.phone} · {brand.email}
            </p>
            <p className="mobile-nav__note mobile-nav__note--quiet">
              Design prototype — placeholder contact details
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
