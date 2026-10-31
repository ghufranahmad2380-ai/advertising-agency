import { madaLogo, paymentLogos } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './ui/Reveal';
import './PaymentMethods.css';

/**
 * Accepted payment methods — its own section, sitting between Services and
 * Contact. A standard section head (eyebrow, title, intro) sits above one
 * quiet white strip: the mada logo with the bilingual "accepted here" line,
 * then the card and instalment networks.
 *
 * Every logo is the official brand file from public/images/payments/ — nothing
 * is redrawn in text or type.
 */
export function PaymentMethods() {
  const { t } = useLanguage();

  return (
    <section
      className="payments section section--paper"
      id="payments"
      aria-labelledby="payments-title"
    >
      <div className="container">
        <Reveal className="payments__head">
          <div className="payments__head-copy">
            <p className="eyebrow">{t.payments.eyebrow}</p>
            <h2 className="section-title payments__title" id="payments-title">
              {t.payments.title}
            </h2>
          </div>
          <p className="section-head__aside payments__intro">{t.payments.intro}</p>
        </Reveal>

        <Reveal className="payments__panel" delay={80}>
          <div className="payments__brand">
            <img
              className="payments__logo payments__logo--mada"
              src={madaLogo.src}
              alt={madaLogo.name}
              width={madaLogo.width}
              height={madaLogo.height}
              loading="lazy"
              decoding="async"
            />
          </div>

          <span className="payments__divider" aria-hidden="true" />

          <div className="payments__accepted">
            <span className="payments__accepted-ar" lang="ar" dir="rtl">
              {t.payments.acceptedArabic}
            </span>
            <span className="payments__accepted-en">{t.payments.acceptedEnglish}</span>
          </div>

          <span className="payments__divider" aria-hidden="true" />

          <ul className="payments__logos" aria-label={t.payments.logosLabel}>
            {paymentLogos.map((method) => (
              <li className="payments__slot" key={method.id}>
                {method.tile ? (
                  <span className={`payments__tile payments__tile--${method.tile}`}>
                    <img
                      className={`payments__logo payments__logo--${method.id}`}
                      src={method.src}
                      alt={method.name}
                      width={method.width}
                      height={method.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                ) : (
                  <img
                    className={`payments__logo payments__logo--${method.id}`}
                    src={method.src}
                    alt={method.name}
                    width={method.width}
                    height={method.height}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
