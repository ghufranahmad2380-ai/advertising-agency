import { Fragment } from 'react';
import { languages } from '../../i18n/dictionary';
import { useLanguage } from '../../i18n/LanguageContext';
import './LanguageSwitcher.css';

/**
 * EN | العربية switch. Each button carries its own lang attribute so the Arabic
 * label is shaped with the Arabic font even while the page is in English.
 */
export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label={t.nav.languageLabel}>
      {languages.map((option, index) => {
        const isActive = language === option.code;
        return (
          <Fragment key={option.code}>
            {index > 0 && <span className="lang-switch__divider" aria-hidden="true" />}
            <button
              type="button"
              className={`lang-switch__option${isActive ? ' is-active' : ''}`}
              lang={option.htmlLang}
              aria-pressed={isActive}
              aria-label={option.code === 'en' ? t.nav.switchToEnglish : t.nav.switchToArabic}
              onClick={() => setLanguage(option.code)}
            >
              {option.label}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
