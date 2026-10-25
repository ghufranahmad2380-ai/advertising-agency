import { ArrowIcon, AsteriskMark } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import './Callout.css';

export function Callout() {
  return (
    <section className="callout" aria-labelledby="callout-title">
      <div className="container callout__inner">
        <Reveal className="callout__copy">
          <p className="eyebrow eyebrow--light">04 / Start something</p>
          <h2
            className="callout__title display"
            id="callout-title"
            aria-label="Your next big idea starts here."
          >
            Your next
            <br />
            big idea
            <br />
            <span className="callout__accent">starts here.</span>
          </h2>
          <p className="callout__text">
            From the first concept to the finished product, let’s create something worth remembering.
          </p>
          <a className="btn btn--primary" href="#contact">
            Start a Conversation
            <ArrowIcon />
          </a>
        </Reveal>

        <div className="callout__visual" aria-hidden="true">
          <span className="callout__ring" />
          <div className="callout__disc">
            <AsteriskMark className="callout__mark" />
            <svg className="callout__arrow" viewBox="0 0 120 120" fill="none">
              <path d="M22 98 98 22M44 22h54v54" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
            </svg>
            <span className="callout__disc-label">Concept to delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
