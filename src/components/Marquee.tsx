import { capabilities } from '../data/site';
import { AsteriskMark } from './ui/Icons';
import './Marquee.css';

/**
 * Capability strip. These are design labels, not verified service claims.
 * The track is duplicated for a seamless loop and pauses on hover.
 */
export function Marquee() {
  return (
    <div className="capabilities" role="region" aria-label="Capabilities">
      <div className="capabilities__track">
        {[0, 1].map((copy) => (
          <ul className="capabilities__group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {capabilities.map((capability) => (
              <li className="capabilities__item" key={capability}>
                <span>{capability}</span>
                <AsteriskMark className="capabilities__star" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
