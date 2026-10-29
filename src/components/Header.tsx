import { useEffect, useRef, useState } from 'react';
import { contact, navigationTargets, phones, sectionIds, whatsappUrl } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { PhoneIcon, WhatsAppIcon } from './ui/Icons';
import { LanguageSwitcher } from './ui/LanguageSwitcher';
import './Header.css';

export function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const navLabels: Record<(typeof sectionIds)[number], string> = {
    top: t.nav.home,
    about: t.nav.about,
    products: t.nav.products,
    services: t.nav.services,
    contact: t.nav.contact,
  };

  const whatsappHref = whatsappUrl(t.common.whatsappMessage);

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="container site-header__inner">
          <a className="brand" href="#top" aria-label={`${t.brand.name} — ${t.nav.home}`}>
            <img
              className="brand__logo"
              src="/images/site/gift-occasions-logo.png"
              alt=""
              width={720}
              height={379}
              decoding="async"
            />
            <span className="brand__text">
              <span className="brand__name">{t.brand.name}</span>
              <span className="brand__discipline">{t.brand.discipline}</span>
            </span>
          </a>

          <nav className="primary-nav" aria-label={t.nav.primaryLabel}>
            <ul>
              {navigationTargets.map((item) => {
                const isActive = item.href === `#${activeSection}`;
                return (
                  <li key={item.href}>
                    <a
                      className={`primary-nav__link${isActive ? ' is-active' : ''}`}
                      href={item.href}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {navLabels[item.id]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="site-header__actions">
            <LanguageSwitcher />
            <a
              className="btn btn--primary site-header__cta"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.nav.whatsappCta}
            >
              <WhatsAppIcon className="btn__icon" />
              <span className="site-header__cta-label">{t.nav.whatsappCta}</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
        aria-label={t.nav.mobileLabel}
        aria-hidden={menuOpen ? undefined : true}
      >
        <div className="mobile-nav__inner">
          <div className="mobile-nav__top">
            <p className="mobile-nav__label">{t.nav.menuHeading}</p>
            <LanguageSwitcher className="mobile-nav__lang" />
          </div>

          <nav aria-label={t.nav.mobileLabel}>
            <ul className="mobile-nav__list">
              {navigationTargets.map((item, index) => (
                <li key={item.href}>
                  <a className="mobile-nav__link" href={item.href} onClick={closeMenu}>
                    <span className="mobile-nav__index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {navLabels[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav__foot">
            <a
              className="btn btn--primary btn--block"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <WhatsAppIcon className="btn__icon" />
              {t.nav.whatsappCta}
            </a>
            {phones.map((phone) => (
              <a
                key={phone.tel}
                className="mobile-nav__contact"
                href={phone.tel}
                onClick={closeMenu}
              >
                <PhoneIcon className="mobile-nav__icon" />
                <span dir="ltr">{phone.display}</span>
              </a>
            ))}
            <a className="mobile-nav__contact" href={contact.emailHref} onClick={closeMenu}>
              <span className="mobile-nav__icon" aria-hidden="true">
                @
              </span>
              <span dir="ltr">{contact.email}</span>
            </a>
            <p className="mobile-nav__note">{t.brand.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}
