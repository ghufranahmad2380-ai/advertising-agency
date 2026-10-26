import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './ui/Reveal';
import './About.css';

export function About() {
  const { t } = useLanguage();

  return (
    <section className="about section section--white" id="about" aria-labelledby="about-title">
      <div className="container about__inner">
        <div className="about__body">
          <Reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="section-title about__title" id="about-title">
              {t.about.title}
            </h2>
          </Reveal>

          <Reveal delay={70}>
            <div className="about__copy">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="about__signature">{t.about.signature}</p>
          </Reveal>

          <Reveal delay={170}>
            <dl className="about__facts">
              {t.about.facts.map((fact) => (
                <div className="about__fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="about__visual" delay={110}>
          <figure className="about__figure">
            <div className="about__media">
              <img
                className="about__image"
                src="/images/site/gift-box-detail.jpg"
                alt={t.about.imageAlt}
                width={829}
                height={620}
                loading="lazy"
                decoding="async"
              />
              <span className="about__tag">{t.brand.location}</span>
            </div>
            <figcaption className="about__caption">{t.about.imageCaption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
