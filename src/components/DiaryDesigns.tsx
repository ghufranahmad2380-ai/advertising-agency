import { cataloguePaths, diaryDesigns } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { CatalogueActions } from './ui/CatalogueActions';
import { ImageGallery } from './ui/ImageGallery';
import { Reveal } from './ui/Reveal';
import './DiaryDesigns.css';

export function DiaryDesigns() {
  const { t } = useLanguage();

  const images = diaryDesigns.map((src, index) => ({
    src,
    alt: t.diary.imageAlt.replace('{n}', String(index + 1).padStart(2, '0')),
  }));

  return (
    <section className="diary section section--white" id="diary" aria-labelledby="diary-title">
      <div className="container">
        <div className="diary__head">
          <Reveal className="diary__head-copy">
            <p className="eyebrow">{t.diary.eyebrow}</p>
            <h2 className="section-title diary__title" id="diary-title">
              {t.diary.title}
            </h2>
            <p className="section-head__aside diary__intro">{t.diary.intro}</p>
          </Reveal>

          <Reveal className="diary__visual" delay={90}>
            <img
              className="diary__visual-image"
              src="/images/site/diary-collection.jpg"
              alt={t.diary.visualAlt}
              width={749}
              height={1000}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>

        <Reveal delay={60}>
          <ImageGallery images={images} label={t.diary.galleryLabel} variant="portrait" numbered />
        </Reveal>

        <Reveal delay={80}>
          <CatalogueActions
            pdfPath={cataloguePaths.diaries}
            viewLabel={t.diary.view}
            downloadLabel={t.diary.download}
          />
        </Reveal>
      </div>
    </section>
  );
}
