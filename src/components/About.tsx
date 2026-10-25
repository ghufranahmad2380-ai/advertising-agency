import { aboutPillars } from '../data/site';
import { AboutArt } from './art/AboutArt';
import { ArrowIcon, AsteriskMark } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import './About.css';

export function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container about__inner">
        <Reveal className="about__visual">
          <div className="about__frame">
            <AboutArt />
          </div>
          <div className="about__stamp" aria-hidden="true">
            <AsteriskMark className="about__stamp-mark" />
            <span>
              Concept
              <br />
              studio
            </span>
          </div>
          <p className="about__caption">Sample workspace still life / 02</p>
        </Reveal>

        <div className="about__body">
          <Reveal delay={80}>
            <p className="eyebrow">01 / About the concept</p>
            <h2
              className="section-title about__title"
              id="about-title"
              aria-label="Good ideas deserve great execution."
            >
              Good ideas
              <br />
              deserve great
              <br />
              <span className="accent-mark">execution.</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="about__copy">
              <p>
                This concept brings customized products, creative printing and promotional thinking into one studio — a
                single place to develop an idea, produce it properly and put it in the hands of the people who matter.
              </p>
              <p>
                The aim is simple: make a brand feel considered at every touchpoint, from a printed card to a reception
                desk, without losing the personality that made it worth noticing in the first place.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <ul className="about__pillars">
              {aboutPillars.map((pillar) => (
                <li className="pillar" key={pillar.index}>
                  <span className="pillar__index">{pillar.index}</span>
                  <span className="pillar__title">{pillar.title}</span>
                  <span className="pillar__copy">{pillar.copy}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <a className="btn btn--dark about__cta" href="#services">
              Discover More
              <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
