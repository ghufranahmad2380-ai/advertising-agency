import { services } from '../data/site';
import { ServiceArt } from './art/ServiceArt';
import { ArrowIcon } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import './Services.css';

export function Services() {
  return (
    <section className="services section" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="services__head">
          <div>
            <p className="eyebrow">02 / Capabilities</p>
            <h2
              className="section-title services__title"
              id="services-title"
              aria-label="What we can create."
            >
              What we
              <br />
              can create.
            </h2>
          </div>
          <p className="section-head__aside">
            Six ways to put a brand into someone’s hands — from a single printed piece to a complete promotional kit.
            Final scope to be confirmed with the studio.
          </p>
        </Reveal>

        <div className="services__grid">
          {services.map((service, index) => (
            <Reveal className="services__cell" key={service.id} delay={(index % 3) * 70}>
              <article className="service-card">
                <div className="service-card__media">
                  <ServiceArt kind={service.art} />
                  <span className="service-card__index" aria-hidden="true">
                    {service.index}
                  </span>
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__copy">{service.description}</p>
                  <a
                    className="link-arrow service-card__link"
                    href="#contact"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
