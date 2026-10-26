import { useState } from 'react';
import { productImages } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { PauseIcon, PlayIcon, ReverseIcon } from './ui/Icons';
import './ProductMarquee.css';

/**
 * Continuous, infinite product strip.
 *
 * The sequence is rendered twice inside one flex track and the track is animated
 * from 0 to -50% of its own width. Because both copies are identical (trailing
 * gaps included), the loop restarts exactly where it began — no jump, no blank
 * gap, no per-image timer. Pause/reverse only toggle CSS classes.
 */
export function ProductMarquee() {
  const { t, language } = useLanguage();
  const [paused, setPaused] = useState(false);
  const [reversed, setReversed] = useState(false);

  const className = [
    'marquee',
    paused ? 'is-paused' : '',
    reversed ? 'is-reversed' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <div className="marquee__viewport" role="region" aria-label={t.products.marqueeLabel}>
        <ul className="marquee__track">
          {[0, 1].map((copy) => (
            <li className="marquee__group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {productImages.map((image) => (
                <figure className="marquee__item" key={`${copy}-${image.src}`}>
                  <img
                    className="marquee__image"
                    src={image.src}
                    alt={copy === 0 ? image.alt[language] : ''}
                    loading="eager"
                    decoding="async"
                    draggable={false}
                  />
                </figure>
              ))}
            </li>
          ))}
        </ul>
      </div>

      <div className="container marquee__controls">
        <p className="marquee__hint">{t.products.marqueeHint}</p>
        <div className="marquee__buttons">
          <button
            type="button"
            className="marquee__button"
            aria-pressed={paused}
            aria-label={paused ? t.products.resume : t.products.pause}
            title={paused ? t.products.resume : t.products.pause}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? <PlayIcon className="marquee__icon" /> : <PauseIcon className="marquee__icon" />}
          </button>
          <button
            type="button"
            className={`marquee__button${reversed ? ' is-active' : ''}`}
            aria-pressed={reversed}
            aria-label={t.products.reverse}
            title={t.products.reverse}
            onClick={() => setReversed((value) => !value)}
          >
            <ReverseIcon className="marquee__icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
