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

/**
 * Eight photographs supplied in `new photos/`, showing printed and branded
 * apparel: polo shirts, T-shirts, a sports jersey, a safety vest, a Saudi flag
 * print design and a National Day scarf. They are displayed directly under the
 * product marquee, before the product catalogue panel.
 */
export const printedApparelImages: LocalizedImage[] = [
  {
    src: '/images/printed-apparel/restaurant-polo-shirts.jpg',
    alt: {
      en: 'Light blue polo shirts printed with the Al Nibras Restaurant logo on the chest and back',
      ar: 'قميصان بولو أزرقان فاتحان مطبوع عليهما شعار مطعم النبراس على الصدر والظهر',
    },
  },
  {
    src: '/images/printed-apparel/security-polo-shirts.jpg',
    alt: {
      en: 'Black polo shirts printed with the UD Integrated Security logo on the chest and back',
      ar: 'قميصان بولو أسودان مطبوع عليهما شعار UD Integrated Security على الصدر والظهر',
    },
  },
  {
    src: '/images/printed-apparel/football-jersey.jpg',
    alt: {
      en: 'Back of a red sports jersey printed with the name Sudanista and the number 10',
      ar: 'ظهر قميص رياضي أحمر مطبوع عليه اسم Sudanista والرقم 10',
    },
  },
  {
    src: '/images/printed-apparel/graduation-tshirt.jpg',
    alt: {
      en: 'White T-shirt printed with a graduation illustration and the text 2027 Senior',
      ar: 'تي شيرت أبيض مطبوع عليه رسم تخرج وعبارة 2027 Senior',
    },
  },
  {
    src: '/images/printed-apparel/club-tshirt.jpg',
    alt: {
      en: 'White T-shirt printed with the Almuheet Club emblem',
      ar: 'تي شيرت أبيض مطبوع عليه شعار نادي المحيط',
    },
  },
  {
    src: '/images/printed-apparel/safety-vest-design.jpg',
    alt: {
      en: 'Front and back design of a high-visibility safety vest branded for Faas Drilling',
      ar: 'تصميم أمامي وخلفي لسترة سلامة عالية الوضوح تحمل شعار شركة فأس الحفر للمقاولات',
    },
  },
  {
    src: '/images/printed-apparel/saudi-flag-size-guide.jpg',
    alt: {
      en: 'Saudi flag print design marked with overall dimensions of 240 by 120 centimetres',
      ar: 'تصميم طباعة علم السعودية مع تحديد الأبعاد الكلية 240 × 120 سم',
    },
  },
  {
    src: '/images/printed-apparel/national-day-scarf.jpg',
    alt: {
      en: 'Green Saudi National Day 96 scarf design with the WST logo and the national emblem',
      ar: 'تصميم وشاح أخضر لليوم الوطني السعودي 96 يحمل شعار WST والشعار الوطني',
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
 * The six services listed on the company's business card.
 *
 * Descriptions are deliberately general: no machine models, material grades,
 * turnaround times, guarantees or technical specifications are claimed.
 */
export type ServiceIconKey = 'acrylic' | 'gifts' | 'dtf' | 'uv' | 'laser' | 'silkScreen';

export interface ServiceEntry {
  id: string;
  icon: ServiceIconKey;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

export const services: ServiceEntry[] = [
  {
    id: 'acrylic-sculptures',
    icon: 'acrylic',
    title: {
      en: 'Acrylic Sculptures & Fabrication',
      ar: 'تنفيذ المنحوتات والأعمال الأكريليكية',
    },
    description: {
      en: 'Custom acrylic pieces produced to order for gifts and display, with attention to detail and finish.',
      ar: 'أعمال أكريليك مخصّصة تُنفّذ حسب الطلب للهدايا والعناصر العرضية، مع الاهتمام بالتفاصيل والتشطيب.',
    },
  },
  {
    id: 'promotional-gifts',
    icon: 'gifts',
    title: {
      en: 'Promotional Gifts',
      ar: 'الهدايا الترويجية',
    },
    description: {
      en: 'Promotional gift items selected and customised to carry your brand identity.',
      ar: 'هدايا ترويجية يتم اختيارها وتخصيصها لتعكس هوية علامتك التجارية.',
    },
  },
  {
    id: 'dtf-printing',
    icon: 'dtf',
    title: {
      en: 'DTF Printing',
      ar: 'طباعة DTF',
    },
    description: {
      en: 'Direct-to-film printing for applying designs to suitable products.',
      ar: 'طباعة DTF لتطبيق التصاميم على منتجات مناسبة.',
    },
  },
  {
    id: 'uv-printing',
    icon: 'uv',
    title: {
      en: 'UV Printing',
      ar: 'طباعة UV',
    },
    description: {
      en: 'UV printing for applying designs directly to product surfaces.',
      ar: 'طباعة UV لتطبيق التصاميم مباشرة على أسطح المنتجات.',
    },
  },
  {
    id: 'laser-services',
    icon: 'laser',
    title: {
      en: 'Laser Services',
      ar: 'خدمات الليزر',
    },
    description: {
      en: 'Laser services for adding precise, personalised detail to selected products.',
      ar: 'خدمات الليزر لإضافة تفاصيل دقيقة ومخصّصة إلى منتجات مختارة.',
    },
  },
  {
    id: 'silk-screen-printing',
    icon: 'silkScreen',
    title: {
      en: 'Silk-Screen Printing',
      ar: 'الطباعة بالشاشة الحريرية (السلك سكرين)',
    },
    description: {
      en: 'Silk-screen printing for reproducing designs across selected products.',
      ar: 'الطباعة بالشاشة الحريرية لإنتاج التصاميم على منتجات مختارة.',
    },
  },
];

