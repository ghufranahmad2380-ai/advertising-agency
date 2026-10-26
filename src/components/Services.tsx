import { services } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowIcon, AsteriskMark } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import './Services.css';

/**
 * The client will supply the final service copy. `services` in data/site.ts is
 * intentionally empty for now; when entries are added this section renders them
 * as cards without any layout changes. Until then it shows a neutral notice.
 */
export function Services() {
  const { t, language } = useLanguage();

  return (
    <section className="services section section--white" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="services__head">
          <div>
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 className="section-title services__title" id="services-title">
              {t.services.title}
            </h2>
          </div>
        </Reveal>

        {services.length > 0 ? (
          <div className="services__grid">
            {services.map((service) => (
              <article className="service-card" key={service.id}>
                <h3 className="service-card__title">{service.title[language]}</h3>
                <p className="service-card__copy">{service.description[language]}</p>
              </article>
            ))}
          </div>
        ) : (
          <Reveal delay={60}>
            <div className="services__placeholder">
              <AsteriskMark className="services__placeholder-mark" />
              <div className="services__placeholder-copy">
                <h3 className="services__placeholder-title">{t.services.placeholderTitle}</h3>
                <p className="services__placeholder-text">{t.services.placeholderText}</p>
              </div>
              <a className="btn btn--ghost services__placeholder-cta" href="#contact">
                {t.services.cta}
                <ArrowIcon />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
