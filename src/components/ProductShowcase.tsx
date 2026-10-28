import { cataloguePaths, printedApparelImages } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { AsteriskMark } from './ui/Icons';
import { CatalogueActions } from './ui/CatalogueActions';
import { ImageGallery } from './ui/ImageGallery';
import { ProductMarquee } from './ProductMarquee';
import { Reveal } from './ui/Reveal';
import './ProductShowcase.css';

export function ProductShowcase() {
  const { t, language } = useLanguage();

  const printedApparel = printedApparelImages.map((image) => ({
    src: image.src,
    alt: image.alt[language],
  }));

  return (
    <section className="products section section--paper" id="products" aria-labelledby="products-title">
      <div className="container products__head">
        <Reveal>
          <p className="eyebrow">{t.products.eyebrow}</p>
          <h2 className="section-title products__title" id="products-title">
            {t.products.title}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="section-head__aside products__intro">{t.products.intro}</p>
        </Reveal>
      </div>

      <ProductMarquee />

      <div className="container products__printed">
        <Reveal>
          <div className="products__printed-head">
            <h3 className="products__printed-title">{t.products.printed.title}</h3>
            <p className="section-head__aside products__printed-intro">{t.products.printed.intro}</p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <ImageGallery
            images={printedApparel}
            label={t.products.printed.galleryLabel}
            variant="masonry"
          />
        </Reveal>
      </div>

      <div className="container">
        <Reveal>
          <div className="catalogue-panel on-dark">
            <div className="catalogue-panel__body">
              <p className="eyebrow eyebrow--light">{t.products.catalogue.eyebrow}</p>
              <h3 className="catalogue-panel__title">{t.products.catalogue.title}</h3>
              <p className="catalogue-panel__text">{t.products.catalogue.text}</p>
            </div>

            <CatalogueActions
              variant="dark"
              pdfPath={cataloguePaths.products}
              viewLabel={t.products.catalogue.view}
              downloadLabel={t.products.catalogue.download}
            />

            <AsteriskMark className="catalogue-panel__mark" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
