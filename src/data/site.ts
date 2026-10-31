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
 * Seventy-two photographs supplied in `new photos/`, `new photos 2/` and
 * `new photos 3/`, showing print, branding and promotional work: printed apparel,
 * safety vests, national-day flags and banners, tote bags, awards and trophies,
 * desk sets, notebooks, keychains, tech gifts, corporate gift boxes and print
 * displays. They are displayed directly under the product marquee, before the
 * product catalogue panel.
 */
export const printedApparelImages: LocalizedImage[] = [
  {
    src: '/images/printed-apparel/armed-forces-nursing-award.jpg',
    alt: {
      en: 'Hexagonal clear acrylic award with a blue border on a wooden base, engraved for the Nursing Administration of the Armed Forces Hospital in Dammam',
      ar: 'درع أكريليك سداسي شفاف بإطار أزرق على قاعدة خشبية، منقوش لإدارة التمريض في مستشفى قوى الأمن بالدمام',
    },
  },
  {
    src: '/images/printed-apparel/mewa-black-travel-mug.jpg',
    alt: {
      en: 'Matte black insulated travel mug with a wooden grip band, printed with the Ministry of Environment, Water and Agriculture logo in white',
      ar: 'كوب سفر أسود مطفي معزول بحزام خشبي، مطبوع عليه شعار وزارة البيئة والمياه والزراعة باللون الأبيض',
    },
  },
  {
    src: '/images/printed-apparel/wooden-desk-organiser-set.jpg',
    alt: {
      en: 'Dark wood desk organiser with a letter tray, pen grooves, a small clock and a note tray on a black leather mat',
      ar: 'منظّم مكتبي من الخشب الداكن بصينية للمراسلات وتجاويف للأقلام وساعة صغيرة وصينية للملاحظات على قاعدة من الجلد الأسود',
    },
  },
  {
    src: '/images/printed-apparel/mewa-white-travel-mug.jpg',
    alt: {
      en: 'White insulated travel mug with a wooden grip band, printed with the Ministry of Environment, Water and Agriculture logo in green',
      ar: 'كوب سفر أبيض معزول بحزام خشبي، مطبوع عليه شعار وزارة البيئة والمياه والزراعة باللون الأخضر',
    },
  },
  {
    src: '/images/printed-apparel/farabi-manufacturing-award.jpg',
    alt: {
      en: 'Curved wooden plaque with gold Manufacturing Excellence Award 2025 lettering, the year cut into its side and a Farabi Petrochemicals plate',
      ar: 'درع خشبي منحنٍ بنقوش ذهبية بعنوان Manufacturing Excellence Award 2025 والعام 2025 على جانبه ولوحة شعار شركة فارابي للبتروكيماويات',
    },
  },
  {
    src: '/images/printed-apparel/crystal-star-trophy.jpg',
    alt: {
      en: 'Clear crystal trophy with a curved sail shape and a gold star resting at its base',
      ar: 'درع كريستالي شفاف بتصميم شراع منحنٍ ونجمة ذهبية عند قاعدته',
    },
  },
  {
    src: '/images/printed-apparel/aramco-wooden-pen-gift-box.jpg',
    alt: {
      en: 'Kraft gift box holding a blank metal keyring and a wooden ballpoint pen printed with the aramco logo',
      ar: 'علبة هدايا كرتونية تضم ميدالية مفاتيح معدنية فارغة وقلمًا خشبيًا مطبوعًا عليه شعار أرامكو',
    },
  },
  {
    src: '/images/printed-apparel/crystal-flame-trophy.jpg',
    alt: {
      en: 'Clear crystal award shaped like a flame above a faceted crystal base',
      ar: 'درع كريستالي شفاف على شكل لهب فوق قاعدة كريستالية متعددة الأوجه',
    },
  },
  {
    src: '/images/printed-apparel/aramco-notebook-pen-gift-box.jpg',
    alt: {
      en: 'Black presentation box with a grey fabric notebook, a pen, a keyring and a metal USB drive, all printed with the aramco logo',
      ar: 'علبة تقديم سوداء بدفتر قماشي رمادي وقلم وميدالية مفاتيح وذاكرة USB معدنية، جميعها مطبوعة بشعار أرامكو',
    },
  },
  {
    src: '/images/printed-apparel/aramco-travel-gift-box.jpg',
    alt: {
      en: 'Black gift box containing an aramco notebook wallet, a pen, a power bank and a smart band',
      ar: 'علبة هدايا سوداء تحتوي محفظة دفتر أرامكو وقلمًا وبطارية متنقلة وسوارًا ذكيًا',
    },
  },
  {
    src: '/images/printed-apparel/viva-mexico-cutout.jpg',
    alt: {
      en: 'Printed VIVA MEXICO cut-out with a sombrero, maracas and glossy multicolour lettering',
      ar: 'مجسّم مطبوع بعبارة VIVA MEXICO مع قبعة سومبريرو وماراكاس وحروف لامعة متعددة الألوان',
    },
  },
  {
    src: '/images/printed-apparel/aramco-black-keychain.jpg',
    alt: {
      en: 'Black fabric strap keychain with a gunmetal clasp printed with the aramco logo',
      ar: 'ميدالية مفاتيح بشريط قماشي أسود ومشبك معدني داكن مطبوع عليه شعار أرامكو',
    },
  },
  {
    src: '/images/printed-apparel/aramco-cork-tumbler.jpg',
    alt: {
      en: 'Cork-covered travel tumbler with a black lid, printed with the aramco logo',
      ar: 'كوب سفر مغلّف بالفلين بغطاء أسود ومطبوع عليه شعار أرامكو',
    },
  },
  {
    src: '/images/printed-apparel/aramco-white-tumbler.jpg',
    alt: {
      en: 'White insulated tumbler with a black lid and a steel collar, printed with the aramco logo',
      ar: 'كوب معزول أبيض بغطاء أسود وطوق من الستيل ومطبوع عليه شعار أرامكو',
    },
  },
  {
    src: '/images/printed-apparel/aramco-navy-tumbler.jpg',
    alt: {
      en: 'Navy blue insulated tumbler with a copper-toned band, printed with the aramco logo',
      ar: 'كوب معزول أزرق كحلي بحزام بلون النحاس ومطبوع عليه شعار أرامكو',
    },
  },
  {
    src: '/images/printed-apparel/aramco-navy-keychain.jpg',
    alt: {
      en: 'Navy fabric keychain with metal swivel rings and a clasp printed with the aramco logo',
      ar: 'ميدالية مفاتيح بشريط كحلي وحلقات معدنية دوّارة ومشبك مطبوع عليه شعار أرامكو',
    },
  },
  {
    src: '/images/printed-apparel/aramco-white-water-bottle.jpg',
    alt: {
      en: 'White stainless steel water bottle with a cork stopper, printed with the aramco logo',
      ar: 'زجاجة مياه بيضاء من الستيل بسدادة من الفلين ومطبوع عليها شعار أرامكو',
    },
  },
  {
    src: '/images/printed-apparel/aramco-executive-gift-box.jpg',
    alt: {
      en: 'Black executive gift box with an aramco notebook, pen, earbuds, power bank and thermos flask',
      ar: 'علبة هدايا تنفيذية سوداء تضم دفتر أرامكو وقلمًا وسماعات وبطارية متنقلة وترمسًا',
    },
  },
  {
    src: '/images/printed-apparel/red-badge-reel.jpg',
    alt: {
      en: 'Red retractable badge reel with a metal belt clip and a clear strap',
      ar: 'حاملة بطاقات حمراء قابلة للسحب بمشبك معدني للحزام وشريط شفاف',
    },
  },
  {
    src: '/images/printed-apparel/red-national-day-gift-box.jpg',
    alt: {
      en: 'White National Day gift box with two printed scarves, a clock and compass set, a red flask and a red notebook',
      ar: 'علبة هدايا بيضاء لليوم الوطني تحتوي وشاحين مطبوعين وطقم ساعة وبوصلة وترمسًا أحمر ودفترًا أحمر',
    },
  },
  {
    src: '/images/printed-apparel/green-national-day-gift-box.jpg',
    alt: {
      en: 'Black Saudi National Day 95 gift box with a printed green scarf, a notebook, a flask, a clock and a commemorative card',
      ar: 'علبة هدايا سوداء لليوم الوطني السعودي 95 تحتوي وشاحًا أخضر مطبوعًا ودفترًا وترمسًا وساعة وبطاقة تذكارية',
    },
  },
  {
    src: '/images/printed-apparel/wallet-and-clock-gift-box.jpg',
    alt: {
      en: 'White gift box with a digital alarm clock, a leather wallet, a keyring, a metal USB drive and a National Day card',
      ar: 'علبة هدايا بيضاء تضم ساعة منبّه رقمية ومحفظة جلدية وميدالية مفاتيح وذاكرة USB معدنية وبطاقة لليوم الوطني',
    },
  },
  {
    src: '/images/printed-apparel/crystal-mantel-clock.jpg',
    alt: {
      en: 'Crystal mantel clock with black columns, faceted crystal capitals and a gold skeleton dial',
      ar: 'ساعة طاولة كريستالية بأعمدة سوداء وتيجان كريستالية متعددة الأوجه وميناء ذهبي مكشوف',
    },
  },
  {
    src: '/images/printed-apparel/grey-notebook-thermos-gift-set.jpg',
    alt: {
      en: 'Grey gift box with a carry handle holding a fabric notebook, a pen, a power bank, a metal USB drive and a steel thermos',
      ar: 'علبة هدايا رمادية بمقبض حمل تضم دفترًا قماشيًا وقلمًا وبطارية متنقلة وذاكرة USB معدنية وترمسًا من الستيل',
    },
  },
  {
    src: '/images/printed-apparel/aramco-jute-tote-bag.jpg',
    alt: {
      en: 'Black jute tote bag with navy handles and the aramco logo printed on the front',
      ar: 'حقيبة تسوق سوداء من الجوت بمقابض كحلية وشعار أرامكو مطبوع على الواجهة',
    },
  },
  {
    src: '/images/printed-apparel/gold-saudi-map-gift-box.jpg',
    alt: {
      en: 'Black and gold presentation case holding a gold Saudi Arabia map plaque, a dallah coffee pot, a palm tree and a small cup on a gold plinth',
      ar: 'صندوق تقديم أسود وذهبي يضم مجسّم خريطة السعودية بالذهب ودلة قهوة ونخلة وفنجانًا صغيرًا على قاعدة ذهبية',
    },
  },
  {
    src: '/images/printed-apparel/green-leather-notebook-set.jpg',
    alt: {
      en: 'Green leather-look notebook with a gold clasp and a matching pen in a black foam gift box',
      ar: 'دفتر أخضر بمظهر جلدي بإغلاق ذهبي وقلم مطابق داخل علبة هدايا بإسفنج أسود',
    },
  },
  {
    src: '/images/printed-apparel/glass-desk-clock-pen-stand.jpg',
    alt: {
      en: 'Desk clock on a mahogany base with a glass panel, a thermometer, a hygrometer and a matching pen',
      ar: 'ساعة مكتبية على قاعدة من خشب الماهوجني بلوح زجاجي ومقياس حرارة ومقياس رطوبة وقلم مطابق',
    },
  },
  {
    src: '/images/printed-apparel/black-tech-gift-box.jpg',
    alt: {
      en: 'Slim black gift box with a stylus pen, two keyrings, a leather key fob and a magnetic wireless power bank',
      ar: 'علبة هدايا سوداء نحيفة تضم قلمًا رقميًا وميداليتي مفاتيح وحلقة مفاتيح جلدية وبطارية متنقلة لاسلكية مغناطيسية',
    },
  },
  {
    src: '/images/printed-apparel/gold-circle-crystal-award.jpg',
    alt: {
      en: 'Round clear crystal blank mounted in a gold crescent stand with a small gold sphere',
      ar: 'درع كريستالي شفاف دائري فارغ مثبّت على حامل ذهبي هلالي مع كرة ذهبية صغيرة',
    },
  },
  {
    src: '/images/printed-apparel/gold-wings-trophy.jpg',
    alt: {
      en: 'Gold wire trophy shaped like feathered wings above a black stone base',
      ar: 'كأس من أسلاك ذهبية على شكل أجنحة مروّشة فوق قاعدة من الحجر الأسود',
    },
  },
  {
    src: '/images/printed-apparel/wooden-presentation-box.jpg',
    alt: {
      en: 'Open mahogany presentation box with a blank gold engraved plate inside',
      ar: 'صندوق تقديم مفتوح من خشب الماهوجني يحتوي لوحة ذهبية فارغة قابلة للنقش',
    },
  },
  {
    src: '/images/printed-apparel/gold-star-swirl-trophy.jpg',
    alt: {
      en: 'Gold sculpted trophy with flowing ribbons and a star on a black base',
      ar: 'كأس ذهبي منحوت بشرائط انسيابية ونجمة فوق قاعدة سوداء',
    },
  },
  {
    src: '/images/printed-apparel/black-mountain-award.jpg',
    alt: {
      en: 'Black award with a jagged mountain-peak top on a white base',
      ar: 'درع أسود بقمة جبلية متعرّجة فوق قاعدة بيضاء',
    },
  },
  {
    src: '/images/printed-apparel/blue-crystal-column-trophy.jpg',
    alt: {
      en: 'Clear crystal trophy made of ascending columns on a cobalt blue cylindrical base',
      ar: 'درع كريستالي شفاف من أعمدة متصاعدة على قاعدة أسطوانية زرقاء',
    },
  },
  {
    src: '/images/printed-apparel/clear-crystal-arch-award.jpg',
    alt: {
      en: 'Clear crystal award in a rounded arch shape, left blank for engraving',
      ar: 'درع كريستالي شفاف بشكل قوس مستدير، تُرك فارغًا للنقش',
    },
  },
  {
    src: '/images/printed-apparel/crystal-sail-award.jpg',
    alt: {
      en: 'Clear crystal award with a curved sail edge on a black crystal base',
      ar: 'درع كريستالي شفاف بحافة منحنية كالشراع فوق قاعدة كريستالية سوداء',
    },
  },
  {
    src: '/images/printed-apparel/gold-leaf-trophy.jpg',
    alt: {
      en: 'Gold wire trophy shaped like a spiralling leaf above a crystal bowl and a black base',
      ar: 'كأس من أسلاك ذهبية على شكل ورقة حلزونية فوق وعاء كريستالي وقاعدة سوداء',
    },
  },
  {
    src: '/images/printed-apparel/acrylic-mountain-block-award.jpg',
    alt: {
      en: 'Clear acrylic block award with a black mountain landscape cast inside it',
      ar: 'درع من الأكريليك الشفاف يحتوي داخله مشهد جبال باللون الأسود',
    },
  },
  {
    src: '/images/printed-apparel/rectangular-crystal-award.jpg',
    alt: {
      en: 'Rectangular clear crystal block on a black base, left blank for engraving',
      ar: 'درع كريستالي شفاف مستطيل الشكل على قاعدة سوداء، تُرك فارغًا للنقش',
    },
  },
  {
    src: '/images/printed-apparel/volta-safety-vest.jpg',
    alt: {
      en: 'Neon yellow high-visibility vest with black lower panels, reflective tape, pockets and a Volta logo',
      ar: 'سترة سلامة صفراء فسفورية عالية الوضوح بأجزاء سفلية سوداء وأشرطة عاكسة وجيوب وشعار Volta',
    },
  },
  {
    src: '/images/printed-apparel/gold-horse-gift-box.jpg',
    alt: {
      en: 'Gold-plated horse sculpture on a gold plinth inside a burgundy velvet presentation box',
      ar: 'مجسّم حصان مطلي بالذهب على قاعدة ذهبية داخل صندوق تقديم من المخمل العنابي',
    },
  },
  {
    src: '/images/printed-apparel/tall-crystal-column-award.jpg',
    alt: {
      en: 'Tall clear crystal column award on a black base, left blank for engraving',
      ar: 'درع كريستالي شفاف طويل على قاعدة سوداء، تُرك فارغًا للنقش',
    },
  },
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

/**
 * Payment methods accepted in store.
 *
 * The five logo files are the networks' own artwork, saved as SVG in
 * public/images/payments/ so they stay sharp at every screen density.
 * mada is displayed on its own, beside the bilingual "accepted here" line.
 */
export const madaLogo = {
  name: 'mada',
  src: '/images/payments/mada.svg',
  width: 796,
  height: 266,
} as const;

export interface PaymentLogo {
  id: 'visa' | 'mastercard' | 'tabby' | 'tamara';
  name: string;
  src: string;
  width: number;
  height: number;
  /** Some networks publish their wordmark on a tinted plate; keep it. */
  tile?: 'mint' | 'gradient';
}

export const paymentLogos: PaymentLogo[] = [
  {
    id: 'visa',
    name: 'VISA',
    src: '/images/payments/visa.svg',
    width: 1000,
    height: 324,
  },
  {
    id: 'mastercard',
    name: 'Mastercard',
    src: '/images/payments/mastercard.svg',
    width: 999,
    height: 776,
  },
  {
    id: 'tabby',
    name: 'Tabby',
    src: '/images/payments/tabby.svg',
    width: 335,
    height: 91,
    tile: 'mint',
  },
  {
    id: 'tamara',
    name: 'Tamara',
    src: '/images/payments/tamara.svg',
    width: 97,
    height: 19,
    tile: 'gradient',
  },
];

