import { useLanguage } from '../../i18n/LanguageContext';
import { DownloadIcon, ExternalLinkIcon } from './Icons';
import './CatalogueActions.css';

interface CatalogueActionsProps {
  pdfPath: string;
  viewLabel: string;
  downloadLabel: string;
  /** `dark` is used on the charcoal catalogue panel. */
  variant?: 'light' | 'dark';
}

/**
 * "View" opens the original PDF in a new browser tab; "Download" saves the same
 * file. Both are plain links, so they work without JavaScript and can be opened
 * in a new tab or saved by the browser's PDF viewer.
 */
export function CatalogueActions({ pdfPath, viewLabel, downloadLabel, variant = 'light' }: CatalogueActionsProps) {
  const { t } = useLanguage();

  return (
    <div className={`catalogue-actions${variant === 'dark' ? ' catalogue-actions--dark' : ''}`}>
      <div className="catalogue-actions__buttons">
        <a className="btn btn--primary" href={pdfPath} target="_blank" rel="noopener noreferrer">
          {viewLabel}
          <ExternalLinkIcon className="btn__icon" />
          <span className="sr-only"> ({t.common.opensInNewTab})</span>
        </a>
        <a className={`btn ${variant === 'dark' ? 'btn--light' : 'btn--ghost'}`} href={pdfPath} download>
          <DownloadIcon className="btn__icon" />
          {downloadLabel}
        </a>
      </div>
      <p className="catalogue-actions__note">{t.common.catalogueLinkNote}</p>
    </div>
  );
}
