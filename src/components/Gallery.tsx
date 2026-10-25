import { useMemo, useRef, useState } from 'react';
import { workCategories, workItems, type WorkCategory } from '../data/site';
import { WorkArt } from './art/WorkArt';
import { ArrowIcon, AsteriskMark } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import './Gallery.css';

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('All');
  const gridRef = useRef<HTMLDivElement | null>(null);

  const visibleItems = useMemo(
    () => (activeCategory === 'All' ? workItems : workItems.filter((item) => item.category === activeCategory)),
    [activeCategory],
  );

  const countFor = (category: WorkCategory) =>
    category === 'All' ? workItems.length : workItems.filter((item) => item.category === category).length;

  const showAll = () => {
    setActiveCategory('All');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gridRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section className="gallery section" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal className="gallery__head">
          <div>
            <p className="eyebrow">03 / Sample studies</p>
            <h2
              className="section-title gallery__title"
              id="gallery-title"
              aria-label="Ideas brought to life."
            >
              Ideas brought
              <br />
              to life.
            </h2>
          </div>
          <p className="section-head__aside">
            A demonstration gallery of sample compositions. Each piece shows the kind of work the studio concept is
            built around — not a completed client project.
          </p>
        </Reveal>

        <div className="gallery__toolbar">
          <div className="gallery__filters" role="group" aria-label="Filter sample studies by category">
            {workCategories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  className={`filter${isActive ? ' is-active' : ''}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                  <span className="filter__count">{String(countFor(category)).padStart(2, '0')}</span>
                </button>
              );
            })}
          </div>
          <p className="gallery__status" role="status" aria-live="polite">
            {visibleItems.length} {visibleItems.length === 1 ? 'study' : 'studies'} shown
          </p>
        </div>

        <div className="gallery__grid" ref={gridRef}>
          {visibleItems.map((item, index) => (
            <Reveal
              className={`gallery__cell gallery__cell--${item.ratio}`}
              key={`${activeCategory}-${item.id}`}
              delay={(index % 3) * 60}
            >
              <article className="work">
                <div className="work__media">
                  <WorkArt kind={item.art} />
                  <span className="work__chip">Sample</span>
                  <div className="work__overlay" aria-hidden="true">
                    <span>Concept study</span>
                    <AsteriskMark />
                  </div>
                </div>
                <div className="work__meta">
                  <div>
                    <h3 className="work__title">{item.title}</h3>
                    <p className="work__category">
                      {item.category} · {item.discipline}
                    </p>
                  </div>
                  <span className="work__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="gallery__foot">
          <p className="gallery__note">
            Demonstration content. All gallery visuals are original sample compositions and will be replaced with real
            project photography before launch.
          </p>
          <button type="button" className="btn btn--ghost" onClick={showAll}>
            Explore All Projects
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
