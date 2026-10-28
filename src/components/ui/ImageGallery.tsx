import './ImageGallery.css';

export interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  label: string;
  /**
   * `portrait` for diary covers, `wide` for the desk nameplate photographs and
   * `masonry` for mixed-orientation photographs that must keep their full frame.
   */
  variant?: 'portrait' | 'wide' | 'masonry';
  numbered?: boolean;
}

/**
 * Responsive, keyboard-friendly image grid. All gallery images are below the
 * fold, so they are lazy-loaded; the marquee handles its own eager loading.
 */
export function ImageGallery({ images, label, variant = 'portrait', numbered = false }: ImageGalleryProps) {
  return (
    <ul className={`gallery gallery--${variant}`} aria-label={label}>
      {images.map((image, index) => (
        <li className="gallery__item" key={image.src}>
          <img
            className="gallery__image"
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          {numbered && (
            <span className="gallery__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
