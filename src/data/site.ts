/**
 * Verified business details and content references.
 *
 * Everything in this file comes from the client's brief or from the source
 * catalogues/PDFs in the project. No opening hours, reviews, statistics or
 * product specifications are invented here.
 */

export const contact = {
  phoneDisplay: '+966 56 465 6508',
  phoneHref: 'tel:+966564656508',
  whatsappNumber: '966564656508',
  email: 'es.gift@yahoo.com',
  emailHref: 'mailto:es.gift@yahoo.com',
  mapsUrl: 'https://maps.app.goo.gl/DPiHqX73na2Ngkr8A?g_st=iw',
} as const;

/** Builds a wa.me link; the message is URL-encoded exactly once. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const cataloguePaths = {
  products: '/catalogue/product-photos.pdf',
  diaries: '/catalogue/diary-designs.pdf',
  nameplates: '/catalogue/nameplate-stand.pdf',
} as const;

export const sectionIds = ['top', 'about', 'products', 'services', 'contact'] as const;

export interface NavTarget {
  id: (typeof sectionIds)[number];
  href: string;
}

/** Navigation order is shared by the header, the mobile menu and the footer. */
export const navigationTargets: NavTarget[] = sectionIds.map((id) => ({
  id,
  href: `#${id}`,
}));

export interface LocalizedImage {
  src: string;
  alt: { en: string; ar: string };
}

/**
 * Ten photographs selected from the 117-page product catalogue.
 * Each file is a processed crop of the original catalogue page, saved as an
 * optimised JPEG in public/images/products/.
 */
export const productImages: LocalizedImage[] = [
  {
    src: '/images/products/branded-caps.jpg',
    alt: {
      en: 'A model wearing a branded cap beside a range of coloured caps',
      ar: 'شخص يرتدي كابًا مخصصًا بجانب مجموعة من الكابات الملونة',
    },
  },
  {
    src: '/images/products/coffee-tumblers.jpg',
    alt: {
      en: 'White, black and blue coffee tumblers on a wooden table',
      ar: 'أكواب قهوة بيضاء وسوداء وزرقاء على طاولة خشبية',
    },
  },
  {
    src: '/images/products/steel-mugs.jpg',
    alt: {
      en: 'Blue, black and white steel mugs with clear lids',
      ar: 'أكواب ستيل زرقاء وسوداء وبيضاء بأغطية شفافة',
    },
  },
  {
    src: '/images/products/travel-mugs.jpg',
    alt: {
      en: 'Colourful travel mugs displayed on wooden shelves',
      ar: 'أكواب سفر ملونة معروضة على أرفف خشبية',
    },
  },
  {
    src: '/images/products/glass-mugs.jpg',
    alt: {
      en: 'White mugs and colour-changing glass mugs on display shelves',
      ar: 'أكواب بيضاء وأكواب زجاجية متغيرة اللون معروضة على أرفف',
    },
  },
  {
    src: '/images/products/sports-bottles.jpg',
    alt: {
      en: 'Sports water bottles in six colours',
      ar: 'زجاجات مياه رياضية بستة ألوان',
    },
  },
  {
    src: '/images/products/notebook-pen-sets.jpg',
    alt: {
      en: 'Notebook and pen sets with a grey cover and stacked colour options',
      ar: 'أطقم دفتر وقلم بغلاف رمادي وخيارات ألوان متعددة',
    },
  },
  {
    src: '/images/products/tote-bags.jpg',
    alt: {
      en: 'Printed non-woven tote bags in assorted colours',
      ar: 'أكياس تسوق مطبوعة بألوان متعددة',
    },
  },
  {
    src: '/images/products/cotton-tote-bags.jpg',
    alt: {
      en: 'White and black cotton tote bags',
      ar: 'حقائب قطنية بيضاء وسوداء',
    },
  },
  {
    src: '/images/products/lanyards.jpg',
    alt: {
      en: 'Branded lanyards in assorted colours',
      ar: 'شرائط تعليق مخصصة بألوان متعددة',
    },
  },
];

/** 30 unique diary designs extracted from the 10-page diary catalogue. */
export const diaryDesignCount = 30;
export const diaryDesigns: string[] = Array.from({ length: diaryDesignCount }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return `/images/diary-designs/diary-design-${number}.jpg`;
});

/** 26 unique desk nameplate photographs supplied in the project. */
export const nameplateStandCount = 26;
export const nameplateStands: string[] = Array.from({ length: nameplateStandCount }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return `/images/nameplate-stands/nameplate-stand-${number}.jpg`;
});

/**
 * Services content is supplied separately by the client.
 *
 * Add entries here — the Services section renders them automatically once the
 * array is populated and falls back to a neutral placeholder while it is empty.
 * Example:
 *   {
 *     id: 'printing',
 *     title: { en: 'Printing', ar: 'الطباعة' },
 *     description: { en: '…', ar: '…' },
 *   }
 */
export interface ServiceEntry {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

export const services: ServiceEntry[] = [];
