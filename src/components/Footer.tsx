import { brand, navigation, services, socialLabels } from '../data/site';
import { ArrowIcon, AsteriskMark } from './ui/Icons';
import './Footer.css';

const socialNames: Record<(typeof socialLabels)[number], string> = {
  IG: 'Instagram',
  LI: 'LinkedIn',
  BE: 'Behance',
  FB: 'Facebook',
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="#top" aria-label={`${brand.name} — back to top`}>
              <span className="footer__mark" aria-hidden="true">
                <AsteriskMark />
              </span>
              <span>{brand.name}</span>
            </a>
            <p className="footer__desc">
              {brand.description} This page is a design prototype — content, imagery and contact details are
              placeholders.
            </p>
            <ul className="footer__social" aria-label="Social links (placeholders)">
              {socialLabels.map((label) => (
                <li className="social-chip" key={label} title="Placeholder — link to be added">
                  <span aria-hidden="true">{label}</span>
                  <span className="sr-only">{socialNames[label]} — link to be added</span>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__col" aria-label="Footer navigation">
            <h2 className="footer__heading">Navigate</h2>
            <ul className="footer__list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a className="footer__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__heading">Services</h2>
            <ul className="footer__list">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <a className="footer__link" href="#services">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h2 className="footer__heading">Contact</h2>
            <ul className="footer__list footer__list--plain">
              <li>{brand.phone}</li>
              <li>{brand.email}</li>
              <li>{brand.location}</li>
              <li className="footer__quiet">{brand.social}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="footer__bottom-mid">Design prototype — not for publication.</p>
          <a className="footer__top-link" href="#top">
            Back to top
            <ArrowIcon className="footer__top-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
