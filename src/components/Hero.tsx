import { whatsappUrl } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowIcon, AsteriskMark, WhatsAppIcon } from './ui/Icons';
import './Hero.css';

export function Hero() {
  const { t, language } = useLanguage();
  const secondaryLang = language === 'en' ? 'ar' : 'en';

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__kicker">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <span className="hero__edition">{t.brand.discipline}</span>
          </div>

          <h1 className="hero__title display" id="hero-title">
            {t.hero.title}
          </h1>

          <p className="hero__native" lang={secondaryLang} dir={secondaryLang === 'ar' ? 'rtl' : 'ltr'}>
            {t.brand.nativeName}
          </p>

          <p className="hero__text">{t.hero.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#products">
              {t.hero.primaryCta}
              <ArrowIcon />
            </a>
            <a
              className="btn btn--ghost"
              href={whatsappUrl(t.common.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="btn__icon" />
              {t.hero.secondaryCta}
            </a>
          </div>

          <p className="hero__note">
            <span className="hero__note-dot" aria-hidden="true" />
            {t.hero.note}
          </p>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <img
              className="hero__image"
              src="/images/site/corporate-gift-set.jpg"
              alt={t.hero.imageAlt}
              width={829}
              height={1100}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <span className="hero__tag">{t.hero.visualTag}</span>
            <span className="hero__frame-caption">{t.hero.visualCaption}</span>
          </div>

          <div className="hero__card">
            <AsteriskMark className="hero__card-mark" />
            <span className="hero__card-label">{t.brand.location}</span>
            <span className="hero__card-note">{t.brand.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
