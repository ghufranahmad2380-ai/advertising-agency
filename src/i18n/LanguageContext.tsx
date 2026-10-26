import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { dictionary, type Dictionary, type Language } from './dictionary';

const STORAGE_KEY = 'gift-occasions:language';

function readStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'ar' ? 'ar' : 'en';
  } catch {
    return 'en';
  }
}

interface LanguageContextValue {
  language: Language;
  direction: 'ltr' | 'rtl';
  t: Dictionary;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Owns the active language, keeps <html lang/dir> in sync, persists the choice
 * and updates the document title/description so both languages are reflected in
 * the browser tab and in search results.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readStoredLanguage);

  useEffect(() => {
    const root = document.documentElement;
    const copy = dictionary[language];

    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = copy.meta.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = copy.meta.description;

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* Storage can be blocked; the site still switches language for this visit. */
    }
  }, [language]);

  const changeLanguage = useCallback((next: Language) => {
    setLanguage(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === 'en' ? 'ar' : 'en'));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction: language === 'ar' ? 'rtl' : 'ltr',
      t: dictionary[language],
      setLanguage: changeLanguage,
      toggleLanguage,
    }),
    [language, changeLanguage, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside <LanguageProvider>');
  }
  return context;
}
