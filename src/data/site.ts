/**
 * Verified business details and content references.
 *
 * Everything in this file comes from the client's brief or from the source
 * catalogues/PDFs in the project. No opening hours, reviews, statistics or
 * product specifications are invented here.
 */

export interface PhoneNumber {
  /** Number as it should be read out on screen. */
  display: string;
  /** `tel:` link target. */
  tel: string;
  /** Digits only, for `wa.me` links. */
  whatsapp: string;
}

/**
 * The two numbers supplied by the client. Both are offered for calls and on
 * WhatsApp, so every phone and WhatsApp link is generated from this list.
 */
export const phones: PhoneNumber[] = [
  { display: '+966 56 465 6508', tel: 'tel:+966564656508', whatsapp: '966564656508' },
  { display: '+966 56 707 9049', tel: 'tel:+966567079049', whatsapp: '966567079049' },
];

export const contact = {
  phoneDisplay: phones[0].display,
  phoneHref: phones[0].tel,
  whatsappNumber: phones[0].whatsapp,
  email: 'es.gift@yahoo.com',
  emailHref: 'mailto:es.gift@yahoo.com',
  mapsUrl: 'https://maps.app.goo.gl/DPiHqX73na2Ngkr8A?g_st=iw',
} as const;

/**
 * Builds a wa.me link; the message is URL-encoded exactly once. Defaults to the
 * first number and accepts either WhatsApp number explicitly.
 */
export function whatsappUrl(message: string, number: string = contact.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
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
 * Twenty-nine photographs supplied in `new photos/` and `new photos 2/`, showing
 * print, branding and promotional work: printed apparel, safety vests, national-day
 * flags and banners, tote bags, awards, notebooks, keychains, tech gifts and print
 * displays. They are displayed directly under the product marquee, before the
 * product catalogue panel.
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
  {
    src: '/images/printed-apparel/bmf-safety-vests.jpg',
    alt: {
      en: 'White and navy safety vests printed with the BMF company logo and reflective strips, shown from the front and back',
      ar: 'سترات سلامة بيضاء وكحلية مطبوع عليها شعار شركة BMF وشرائط عاكسة، تظهر من الأمام والخلف',
    },
  },
  {
    src: '/images/printed-apparel/green-one-safety-vest-design.jpg',
    alt: {
      en: 'Print design for a white safety vest carrying the Green One Company logo on the chest and back',
      ar: 'تصميم طباعة لسترة سلامة بيضاء تحمل شعار شركة جرين وان على الصدر والظهر',
    },
  },
  {
    src: '/images/printed-apparel/orange-polo-shirt.jpg',
    alt: {
      en: 'Orange polo shirt printed with Arabic text on the chest and across the back above the number 2',
      ar: 'قميص بولو برتقالي مطبوع عليه نص عربي على الصدر وعلى الظهر فوق الرقم 2',
    },
  },
  {
    src: '/images/printed-apparel/black-polo-shirt.jpg',
    alt: {
      en: 'Black polo shirt printed with a white and red Arabic calligraphy logo on the chest and back',
      ar: 'قميص بولو أسود مطبوع عليه شعار بخط عربي أبيض وأحمر على الصدر والظهر',
    },
  },
  {
    src: '/images/printed-apparel/saudi-graduation-sash.jpg',
    alt: {
      en: 'Black graduation sash with gold printing, showing the Saudi emblem, the Khobar skyline and the words Kingdom of Saudi Arabia',
      ar: 'وشاح تخرج أسود بطباعة ذهبية يظهر الشعار السعودي وأفق مدينة الخبر وعبارة المملكة العربية السعودية',
    },
  },
  {
    src: '/images/printed-apparel/qadsiah-armband.jpg',
    alt: {
      en: 'Red armband with a black elastic strap, printed with the Qadsiah club crest in yellow',
      ar: 'شريط ذراع أحمر بحزام مطاطي أسود مطبوع عليه شعار نادي القادسية باللون الأصفر',
    },
  },
  {
    src: '/images/printed-apparel/national-day-95-banners.jpg',
    alt: {
      en: 'Six vertical Saudi National Day 95 banners in different colours, printed with Arabic slogans and traditional patterns',
      ar: 'ستة أعلام رأسية لليوم الوطني السعودي 95 بألوان مختلفة، مطبوع عليها شعارات عربية وزخارف تقليدية',
    },
  },
  {
    src: '/images/printed-apparel/national-day-hand-flags.jpg',
    alt: {
      en: 'A stack of green Saudi National Day hand flags on white poles with gold tips',
      ar: 'مجموعة أعلام يد خضراء لليوم الوطني السعودي على أعمدة بيضاء برؤوس ذهبية',
    },
  },
  {
    src: '/images/printed-apparel/national-day-falcon-banner.jpg',
    alt: {
      en: 'Vertical Saudi National Day banner showing a falcon on its handler’s arm above traditional patterned panels',
      ar: 'بانر رأسي لليوم الوطني السعودي يظهر صقرًا على يد مدربه فوق ألواح ذات زخارف تقليدية',
    },
  },
  {
    src: '/images/printed-apparel/national-day-pin-badges.jpg',
    alt: {
      en: 'Six gold-framed pin badges with Saudi motifs — a dallah, a mabkhara, a palm tree, a rosette, a sword and a mountain — shown worn on thobes and abayas and flat',
      ar: 'ستة دبابيس بإطار ذهبي تحمل رموزًا سعودية — دلة ومبخرة ونخلة وزخرفة وسيف وجبل — تُعرض على الثياب والعبايات ومسطحة',
    },
  },
  {
    src: '/images/printed-apparel/printed-tote-bag.jpg',
    alt: {
      en: 'White printed tote bag carrying a gold calligraphy logo and Arabic text',
      ar: 'حقيبة تسوق بيضاء مطبوعة بشعار خطّي ذهبي ونص عربي',
    },
  },
  {
    src: '/images/printed-apparel/green-travel-agency-tote-bag.jpg',
    alt: {
      en: 'Green printed tote bag with yellow Arabic calligraphy, a travel agency name and contact numbers',
      ar: 'حقيبة تسوق خضراء مطبوعة بخط عربي أصفر واسم وكالة سفر وأرقام تواصل',
    },
  },
  {
    src: '/images/printed-apparel/crystal-awards.jpg',
    alt: {
      en: 'Three clear acrylic awards on wooden bases, each printed with a different company logo',
      ar: 'ثلاث جوائز أكريليك شفافة على قواعد خشبية، مطبوع على كل منها شعار شركة مختلف',
    },
  },
  {
    src: '/images/printed-apparel/engraved-wooden-gift-box.jpg',
    alt: {
      en: 'Wooden gift box engraved in gold with the Saudi and Pakistani skylines and the years 2018 and 2026',
      ar: 'صندوق هدايا خشبي منقوش بالذهبي بأفق السعودية وباكستان والعامَين 2018 و2026',
    },
  },
  {
    src: '/images/printed-apparel/wireless-charger.jpg',
    alt: {
      en: 'Round black wireless charger printed with a white star logo',
      ar: 'شاحن لاسلكي أسود دائري مطبوع عليه شعار نجمة بيضاء',
    },
  },
  {
    src: '/images/printed-apparel/usb-flash-drive.jpg',
    alt: {
      en: 'Grey USB flash drive with USB-A and USB-C connectors',
      ar: 'ذاكرة USB رمادية بمنفذَي USB-A وUSB-C',
    },
  },
  {
    src: '/images/printed-apparel/metal-keychain.jpg',
    alt: {
      en: 'Silver metal keychain with a blank white insert, ready for printing',
      ar: 'ميدالية مفاتيح معدنية فضية بحشوة بيضاء فارغة جاهزة للطباعة',
    },
  },
  {
    src: '/images/printed-apparel/enamel-keychain.jpg',
    alt: {
      en: 'Silver keychain with a purple enamel border and an Arabic inscription on a white insert',
      ar: 'ميدالية مفاتيح فضية بإطار من المينا البنفسجي ونقش عربي على حشوة بيضاء',
    },
  },
  {
    src: '/images/printed-apparel/alpha-notebook-pen.jpg',
    alt: {
      en: 'Black notebook and black pen printed with the Alpha Learning & Training logo',
      ar: 'دفتر أسود وقلم أسود مطبوع عليهما شعار Alpha Learning & Training',
    },
  },
  {
    src: '/images/printed-apparel/national-water-notebooks.jpg',
    alt: {
      en: 'Blue and black notebooks printed with the National Water Company and Alkhorayef Water & Power Technologies logos',
      ar: 'دفتران أزرق وأسود مطبوع عليهما شعارا شركة المياه الوطنية وشركة الخريف لتقنية المياه والطاقة',
    },
  },
  {
    src: '/images/printed-apparel/padel-tournament-backdrop.jpg',
    alt: {
      en: 'Large printed backdrop for the URD3D Padel Tournament at Padel Scope, Khobar–Dammam',
      ar: 'خلفية مطبوعة كبيرة لبطولة URD3D للبادل في بادل سكوب بالخبر – الدمام',
    },
  },
  {
    src: '/images/printed-apparel/exhibition-counter-design.jpg',
    alt: {
      en: 'Design mockup of a printed exhibition counter and backdrop, marked with its measurements',
      ar: 'تصميم تجريبي لمنصة عرض وخلفية مطبوعة مع بيان الأبعاد',
    },
  },
  {
    src: '/images/printed-apparel/breast-cancer-awareness-card.jpg',
    alt: {
      en: 'Pink breast cancer awareness card design with a ribbon, an October 2026 calendar and Arabic text',
      ar: 'تصميم بطاقة توعوية وردية عن سرطان الثدي بشريط وتقويم أكتوبر 2026 ونص عربي',
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

