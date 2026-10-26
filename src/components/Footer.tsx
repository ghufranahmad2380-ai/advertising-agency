import {
  cataloguePaths,
  contact,
  navigationTargets,
  sectionIds,
  whatsappUrl,
} from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowIcon, AsteriskMark, ExternalLinkIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from './ui/Icons';
import './Footer.css';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const whatsappHref = whatsappUrl(t.common.whatsappMessage);

  const navLabels: Record<(typeof sectionIds)[number], string> = {
    top: t.nav.home,
    about: t.nav.about,
    products: t.nav.products,
    services: t.nav.services,
    contact: t.nav.contact,
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="#top" aria-label={`${t.brand.name} — ${t.nav.home}`}>
              <span className="footer__mark" aria-hidden="true">
                <AsteriskMark />
              </span>
              <span>{t.brand.name}</span>
            </a>
            <p className="footer__tagline">{t.footer.tagline}</p>
            <p className="footer__desc">{t.footer.description}</p>
          </div>

          <nav className="footer__col" aria-label={t.nav.footerLabel}>
            <h2 className="footer__heading">{t.footer.navigate}</h2>
            <ul className="footer__list">
              {navigationTargets.map((item) => (
                <li key={item.href}>
                  <a className="footer__link" href={item.href}>
                    {navLabels[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__heading">{t.footer.catalogues}</h2>
            <ul className="footer__list">
              <li>
                <a
                  className="footer__link footer__link--pdf"
                  href={cataloguePaths.products}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.productCatalogue}
                  <ExternalLinkIcon className="footer__link-icon" />
                </a>
              </li>
              <li>
                <a
                  className="footer__link footer__link--pdf"
                  href={cataloguePaths.diaries}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.diaryCatalogue}
                  <ExternalLinkIcon className="footer__link-icon" />
                </a>
              </li>
              <li>
                <a
                  className="footer__link footer__link--pdf"
                  href={cataloguePaths.nameplates}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.nameplateCatalogue}
                  <ExternalLinkIcon className="footer__link-icon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h2 className="footer__heading">{t.footer.contact}</h2>
            <ul className="footer__contacts">
              <li>
                <PhoneIcon className="footer__contact-icon" />
                <a href={contact.phoneHref} dir="ltr">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <WhatsAppIcon className="footer__contact-icon" />
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  {t.contact.methods.whatsapp.label}
                </a>
              </li>
              <li>
                <MailIcon className="footer__contact-icon" />
                <a href={contact.emailHref} dir="ltr">
                  {contact.email}
                </a>
              </li>
              <li>
                <MapPinIcon className="footer__contact-icon" />
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {t.brand.location}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {t.brand.fullName}. {t.footer.rights}
          </p>
          <p className="footer__bottom-note">{t.footer.builtNote}</p>
          <a className="footer__top-link" href="#top">
            {t.common.backToTop}
            <ArrowIcon className="footer__top-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
