import { cataloguePaths, nameplateStands } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { CatalogueActions } from './ui/CatalogueActions';
import { ImageGallery } from './ui/ImageGallery';
import { Reveal } from './ui/Reveal';
import './NameplateStands.css';

export function NameplateStands() {
  const { t } = useLanguage();

  const images = nameplateStands.map((src, index) => ({
    src,
    alt: t.nameplates.imageAlt.replace('{n}', String(index + 1).padStart(2, '0')),
  }));

  return (
    <section className="nameplates section section--paper" id="nameplates" aria-labelledby="nameplates-title">
      <div className="container">
        <Reveal className="nameplates__head">
          <div>
            <p className="eyebrow">{t.nameplates.eyebrow}</p>
            <h2 className="section-title nameplates__title" id="nameplates-title">
              {t.nameplates.title}
            </h2>
          </div>
          <p className="section-head__aside nameplates__intro">{t.nameplates.intro}</p>
        </Reveal>

        <Reveal delay={60}>
          <ImageGallery images={images} label={t.nameplates.galleryLabel} variant="wide" />
        </Reveal>

        <Reveal delay={80}>
          <CatalogueActions
            pdfPath={cataloguePaths.nameplates}
            viewLabel={t.nameplates.view}
            downloadLabel={t.nameplates.download}
          />
        </Reveal>
      </div>
    </section>
  );
}
