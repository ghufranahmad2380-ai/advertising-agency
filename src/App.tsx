import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProductShowcase } from './components/ProductShowcase';
import { DiaryDesigns } from './components/DiaryDesigns';
import { NameplateStands } from './components/NameplateStands';
import { Services } from './components/Services';
import { PaymentMethods } from './components/PaymentMethods';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function Site() {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main">
        {t.common.skipToContent}
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <ProductShowcase />
        <DiaryDesigns />
        <NameplateStands />
        <Services />
        <PaymentMethods />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
