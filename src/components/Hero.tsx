import { HeroArt } from './art/HeroArt';
import { ArrowIcon, AsteriskMark } from './ui/Icons';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__kicker">
            <span className="eyebrow">Advertising · Print · Promotional Gifts</span>
            <span className="hero__edition">Concept / 01</span>
          </div>

          <h1
            className="hero__title display"
            id="hero-title"
            aria-label="Make your brand impossible to ignore."
          >
            <span className="hero__line">Make your</span>
            <span className="hero__line">
              brand <AsteriskMark className="hero__star" />
            </span>
            <span className="hero__line">impossible</span>
            <span className="hero__line">
              to <span className="accent-mark">ignore.</span>
            </span>
          </h1>

          <p className="hero__text">
            Creative printing, customized gifts, and advertising solutions designed to make your brand stand out.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#services">
              Explore Our Services
              <ArrowIcon />
            </a>
            <a className="btn btn--ghost" href="#gallery">
              View Our Work
              <ArrowIcon />
            </a>
          </div>

          <p className="hero__note">
            <span className="hero__note-dot" aria-hidden="true" />
            Design prototype — all visuals are sample artwork, not client work.
          </p>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <HeroArt />
            <span className="hero__tag">Sample composition / 01</span>
            <span className="hero__frame-caption">Print · Merch · Acrylic</span>
          </div>

          <div className="hero__swatch" aria-hidden="true">
            <div className="hero__swatch-head">
              <span>Kit / 01</span>
              <AsteriskMark className="hero__swatch-mark" />
            </div>
            <div className="hero__swatch-chips">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p className="hero__swatch-label">Palette &amp; product study</p>
          </div>
        </div>
      </div>
    </section>
  );
}
