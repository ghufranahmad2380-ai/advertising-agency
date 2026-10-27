import { services, whatsappUrl } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowIcon, AsteriskMark, WhatsAppIcon } from './ui/Icons';
import { ServiceIcon } from './ui/ServiceIcon';
import { Reveal } from './ui/Reveal';
import './Services.css';

/**
 * The six services come from `services` in data/site.ts and are rendered as
 * bilingual cards. Each card links to WhatsApp with a service-specific message;
 * the visitor still confirms and sends the message inside WhatsApp.
 */
export function Services() {
  const { t, language } = useLanguage();

  return (
    <section className="services section section--white" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="services__head">
          <div className="services__head-copy">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 className="section-title services__title" id="services-title">
              {t.services.title}
            </h2>
          </div>
          <p className="section-head__aside services__intro">{t.services.intro}</p>
        </Reveal>

        {services.length > 0 ? (
          <div className="services__grid">
            {services.map((service, index) => {
              const serviceName = service.title[language];
              const inquiryMessage = t.services.whatsappMessage.replace('{service}', serviceName);

              return (
                <Reveal className="services__cell" key={service.id} delay={(index % 3) * 60}>
                  <article className="service-card">
                    <div className="service-card__top">
                      <span className="service-card__icon-wrap" aria-hidden="true">
                        <ServiceIcon kind={service.icon} className="service-card__icon" />
                      </span>
                      <span className="service-card__index" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="service-card__title">{serviceName}</h3>
                    <p className="service-card__copy">{service.description[language]}</p>

                    <a
                      className="service-card__cta"
                      href={whatsappUrl(inquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.services.inquire} — ${serviceName}`}
                    >
                      <span className="service-card__cta-label">
                        <WhatsAppIcon className="service-card__wa" />
                        {t.services.inquire}
                      </span>
                      <ArrowIcon className="service-card__arrow" />
                    </a>
                  </article>
                </Reveal>
              );
            })}
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
