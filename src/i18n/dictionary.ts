/**
 * Bilingual copy for the Gift Occasions website.
 *
 * English is the source shape; the Arabic dictionary is typed against it so the
 * two languages can never drift apart. Every visible string, label, placeholder
 * and validation message lives here — components only render text from `t`.
 */

export type Language = 'en' | 'ar';

const en = {
  meta: {
    title: 'Gift Occasions | Advertising, Printing & Promotional Gifts in Dammam',
    description:
      'Gift Occasions | مناسبات الهدايا — advertising, printing and promotional gifts in Dammam, Saudi Arabia. Explore our product catalogue, diary designs and custom desk nameplate stands.',
  },

  common: {
    skipToContent: 'Skip to content',
    backToTop: 'Back to top',
    opensInNewTab: 'opens in a new tab',
    catalogueLinkNote: 'PDF catalogue · Opens in a new tab',
    requiredFields: 'Fields marked * are required.',
    whatsappMessage:
      'Hello Gift Occasions, I would like to ask about your products and services.',
  },

  brand: {
    name: 'Gift Occasions',
    nativeName: 'مناسبات الهدايا',
    discipline: 'Advertising · Printing · Gifts',
    fullName: 'Gift Occasions | مناسبات الهدايا',
    location: 'Dammam, Saudi Arabia',
  },

  nav: {
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    services: 'Services',
    contact: 'Contact',
    primaryLabel: 'Primary navigation',
    mobileLabel: 'Site menu',
    footerLabel: 'Footer navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuHeading: 'Navigation',
    whatsappCta: 'WhatsApp Inquiry',
    languageLabel: 'Language',
    languageEnglish: 'EN',
    languageArabic: 'العربية',
    switchToEnglish: 'Switch to English',
    switchToArabic: 'Switch to Arabic',
  },

  hero: {
    eyebrow: 'Dammam, Saudi Arabia',
    title: 'Gift Occasions',
    intro:
      'At Gift Occasions, we turn ideas into distinctive gifts and prints that express your brand identity and leave a lasting impression.',
    primaryCta: 'Explore Products',
    secondaryCta: 'Chat on WhatsApp',
    visualTag: 'From our product collection',
    visualCaption: 'Advertising · Printing · Promotional Gifts',
    note: 'Tailored solutions for companies, events and marketing campaigns.',
    imageAlt:
      'A corporate gift set with a notebook, pen, flask, keyring, gift bag and presentation box',
  },

  about: {
    eyebrow: '01 / About Us',
    title: 'About Us',
    paragraphs: [
      'At Gift Occasions, we turn ideas into distinctive gifts and prints that express your brand identity and leave a lasting impression.',
      'We are a company specialising in advertising, printing and promotional gifts, based in Dammam, Saudi Arabia. We offer tailored solutions for companies and organisations, suited to events, occasions and marketing campaigns.',
      'Our services include DTF, UV and screen printing, alongside laser customisation, giving every product a character that reflects your brand identity.',
      'We believe excellence lies in the details. That is why we take the time to understand your needs and combine creativity with precise execution — so every gift becomes a message of appreciation, and every print an opportunity to strengthen your presence.',
    ],
    signature: 'Gifts that speak for you… and details that make the difference.',
    facts: [
      { label: 'Location', value: 'Dammam, Saudi Arabia' },
      { label: 'Printing', value: 'DTF · UV · Screen printing' },
      { label: 'Customisation', value: 'Laser customisation' },
      { label: 'Solutions', value: 'Companies · Events · Campaigns' },
    ],
    imageAlt: 'A navy gift box set with a notebook, pen, flask and keyring beside a gift bag',
    imageCaption: 'Corporate gift set / from our catalogue',
  },

  products: {
    eyebrow: '02 / Products',
    title: 'Selected Products',
    intro:
      'A selection of the products we offer — drinkware, bags, notebooks, gift sets and more. The complete range is available in our product catalogue.',
    marqueeLabel: 'Product photographs',
    marqueeHint:
      'Product photographs move continuously. Use the controls to pause, resume or reverse them.',
    pause: 'Pause motion',
    resume: 'Resume motion',
    reverse: 'Reverse direction',
    catalogue: {
      eyebrow: 'Product catalogue',
      title: 'Explore Our Full Catalogue',
      text: 'Open the full product catalogue as a PDF, or download it to browse later.',
      view: 'View Our Full Catalogue',
      download: 'Download catalogue (PDF)',
    },
  },

  diary: {
    eyebrow: '03 / Diaries',
    title: 'Our Diary Designs',
    intro: 'Diary designs from our collection, shown as supplied in the diary catalogue.',
    galleryLabel: 'Diary design gallery',
    imageAlt: 'Diary Design {n}',
    visualAlt: 'A collection of diaries with leather-look covers in assorted colours',
    view: 'View Our Diary Designs',
    download: 'Download diary catalogue (PDF)',
  },

  nameplates: {
    eyebrow: '04 / Nameplates',
    title: 'Custom Nameplate Stands',
    intro: 'Discover our desk nameplate stand designs.',
    galleryLabel: 'Desk nameplate stand gallery',
    imageAlt: 'Desk nameplate stand {n}',
    view: 'View Our Desk Name Stand Designs',
    download: 'Download nameplate catalogue (PDF)',
  },

  services: {
    eyebrow: '05 / Services',
    title: 'Our Services',
    placeholderTitle: 'Service details coming soon',
    placeholderText:
      'We are preparing the full details of our services. In the meantime, contact us directly with any question.',
    cta: 'Contact Us',
  },

  contact: {
    eyebrow: '06 / Contact',
    title: 'Contact Us',
    lead: 'Send your inquiry on WhatsApp, or reach us directly by phone or email.',
    methods: {
      whatsapp: {
        label: 'WhatsApp',
        action: 'Chat on WhatsApp',
        hint: 'Opens WhatsApp with a prepared inquiry message.',
      },
      phone: {
        label: 'Phone',
        action: 'Call us',
        hint: 'Tap to call from your phone.',
      },
      location: {
        label: 'Location',
        action: 'Open location in Maps',
        hint: 'Opens our Google Maps location in a new tab.',
      },
      email: {
        label: 'Email',
        action: 'Send an email',
        hint: 'Opens your email app.',
      },
    },
    form: {
      title: 'Inquiry Form',
      badge: 'WhatsApp',
      name: { label: 'Full Name', placeholder: 'Your full name' },
      phone: { label: 'Phone Number', placeholder: '+966 5X XXX XXXX' },
      email: { label: 'Email Address', placeholder: 'name@example.com' },
      interest: {
        label: 'Service or Product of Interest',
        placeholder: 'Select an option',
        options: [
          'General inquiry',
          'Promotional gifts',
          'Printing & customisation',
          'Diaries',
          'Desk nameplate stands',
          'Other',
        ],
      },
      message: { label: 'Message', placeholder: 'Tell us what you are looking for' },
      submit: 'Send Inquiry on WhatsApp',
      note: 'Submitting opens WhatsApp with a prepared message. Nothing is stored on this website.',
      opened: 'WhatsApp should open in a new tab. If it did not, use this link:',
      errors: {
        name: 'Please enter your name.',
        phone: 'Please enter your phone number.',
        phoneInvalid: 'Please enter a valid phone number.',
        email: 'Please enter a valid email address.',
        interest: 'Please choose a service or product.',
        message: 'Please write your message (at least 10 characters).',
      },
      whatsappMessage: {
        heading: 'New inquiry from the Gift Occasions website',
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        interest: 'Interested in',
        message: 'Message',
      },
    },
  },

  footer: {
    tagline: 'Gift Occasions | مناسبات الهدايا',
    description:
      'Advertising, printing and promotional gifts in Dammam, Saudi Arabia. Tailored solutions for companies, events and marketing campaigns.',
    navigate: 'Navigate',
    catalogues: 'Catalogues',
    contact: 'Contact',
    productCatalogue: 'Product catalogue',
    diaryCatalogue: 'Diary designs',
    nameplateCatalogue: 'Nameplate stands',
    rights: 'All rights reserved.',
    builtNote: 'Advertising · Printing · Promotional Gifts',
  },
};

export type Dictionary = typeof en;

const ar: Dictionary = {
  meta: {
    title: 'مناسبات الهدايا | دعاية وإعلان وطباعة وهدايا ترويجية في الدمام',
    description:
      'مناسبات الهدايا | Gift Occasions — شركة دعاية وإعلان وطباعة وهدايا ترويجية في الدمام، المملكة العربية السعودية. تصفّح كتالوج المنتجات وتصاميم الدفاتر وحوامل أسماء المكاتب.',
  },

  common: {
    skipToContent: 'انتقل إلى المحتوى',
    backToTop: 'العودة إلى الأعلى',
    opensInNewTab: 'يفتح في علامة تبويب جديدة',
    catalogueLinkNote: 'كتالوج PDF · يفتح في علامة تبويب جديدة',
    requiredFields: 'الحقول المعلّمة بـ * مطلوبة.',
    whatsappMessage: 'مرحبًا مناسبات الهدايا، أرغب في الاستفسار عن منتجاتكم وخدماتكم.',
  },

  brand: {
    name: 'مناسبات الهدايا',
    nativeName: 'Gift Occasions',
    discipline: 'دعاية · طباعة · هدايا',
    fullName: 'Gift Occasions | مناسبات الهدايا',
    location: 'الدمام، المملكة العربية السعودية',
  },

  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    products: 'المنتجات',
    services: 'خدماتنا',
    contact: 'تواصل معنا',
    primaryLabel: 'التنقل الرئيسي',
    mobileLabel: 'قائمة الموقع',
    footerLabel: 'التنقل في التذييل',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    menuHeading: 'التنقل',
    whatsappCta: 'استفسار عبر واتساب',
    languageLabel: 'اللغة',
    languageEnglish: 'EN',
    languageArabic: 'العربية',
    switchToEnglish: 'التبديل إلى الإنجليزية',
    switchToArabic: 'التبديل إلى العربية',
  },

  hero: {
    eyebrow: 'الدمام، المملكة العربية السعودية',
    title: 'مناسبات الهدايا',
    intro:
      'في Gift Occasions | مناسبات الهدايا، نحوّل الأفكار إلى هدايا مبتكرة ومطبوعات مميزة تعبّر عن هوية علامتك التجارية وتترك أثرًا يدوم.',
    primaryCta: 'استكشف المنتجات',
    secondaryCta: 'تواصل عبر واتساب',
    visualTag: 'من مجموعة منتجاتنا',
    visualCaption: 'دعاية · طباعة · هدايا ترويجية',
    note: 'حلول مخصّصة للشركات والفعاليات والحملات التسويقية.',
    imageAlt: 'طقم هدايا مؤسسي يضم دفترًا وقلمًا وزجاجة وحلقة مفاتيح وحقيبة هدايا وعلبة تقديم',
  },

  about: {
    eyebrow: '01 / من نحن',
    title: 'من نحن',
    paragraphs: [
      'في Gift Occasions | مناسبات الهدايا، نحوّل الأفكار إلى هدايا مبتكرة ومطبوعات مميزة تعبّر عن هوية علامتك التجارية وتترك أثرًا يدوم.',
      'نحن شركة متخصصة في الدعاية والإعلان والطباعة والهدايا الترويجية، مقرّنا مدينة الدمام في المملكة العربية السعودية. نقدّم حلولًا مخصّصة للشركات والمؤسسات، تناسب الفعاليات والمناسبات والحملات التسويقية.',
      'تشمل خدماتنا الطباعة بتقنيات DTF وUV والسلك سكرين، إلى جانب أعمال التخصيص بالليزر، لنمنح كل منتج طابعًا يعكس هوية علامتك التجارية.',
      'نؤمن بأن التميّز يكمن في التفاصيل؛ لذلك نحرص على فهم احتياجاتك والجمع بين الإبداع ودقة التنفيذ، لتصبح كل هدية رسالة تقدير، وكل مطبوعة فرصة لتعزيز حضورك.',
    ],
    signature: 'هدايا تعبّر عنك… وتفاصيل تصنع الفرق.',
    facts: [
      { label: 'الموقع', value: 'الدمام، المملكة العربية السعودية' },
      { label: 'الطباعة', value: 'DTF · UV · سلك سكرين' },
      { label: 'التخصيص', value: 'أعمال الليزر' },
      { label: 'الحلول', value: 'شركات · فعاليات · حملات تسويقية' },
    ],
    imageAlt: 'طقم هدايا أزرق يضم دفترًا وقلمًا وزجاجة وحلقة مفاتيح بجانب حقيبة هدايا',
    imageCaption: 'طقم هدايا مؤسسي / من كتالوجنا',
  },

  products: {
    eyebrow: '02 / المنتجات',
    title: 'منتجات مختارة',
    intro:
      'مجموعة مختارة من منتجاتنا تشمل الأكواب والزجاجات والحقائب والدفاتر وأطقم الهدايا. تجدون التشكيلة الكاملة في كتالوج المنتجات.',
    marqueeLabel: 'صور المنتجات',
    marqueeHint:
      'تتحرك صور المنتجات باستمرار. استخدم أدوات التحكم للإيقاف أو المتابعة أو عكس الاتجاه.',
    pause: 'إيقاف الحركة',
    resume: 'متابعة الحركة',
    reverse: 'عكس الاتجاه',
    catalogue: {
      eyebrow: 'كتالوج المنتجات',
      title: 'استكشف الكتالوج الكامل',
      text: 'افتح كتالوج المنتجات الكامل بصيغة PDF، أو نزّله لتصفّحه لاحقًا.',
      view: 'عرض الكتالوج الكامل',
      download: 'تحميل الكتالوج (PDF)',
    },
  },

  diary: {
    eyebrow: '03 / الدفاتر',
    title: 'تصاميم الدفاتر',
    intro: 'تصاميم دفاتر من مجموعتنا، معروضة كما وردت في كتالوج الدفاتر.',
    galleryLabel: 'معرض تصاميم الدفاتر',
    imageAlt: 'تصميم دفتر {n}',
    visualAlt: 'مجموعة دفاتر بأغلفة تشبه الجلد بألوان متعددة',
    view: 'عرض تصاميم الدفاتر',
    download: 'تحميل كتالوج الدفاتر (PDF)',
  },

  nameplates: {
    eyebrow: '04 / حوامل الأسماء',
    title: 'حوامل أسماء المكاتب المخصصة',
    intro: 'اكتشف تصاميم حوامل أسماء المكاتب لدينا.',
    galleryLabel: 'معرض حوامل أسماء المكاتب',
    imageAlt: 'حامل اسم مكتب {n}',
    view: 'عرض تصاميم حوامل أسماء المكاتب',
    download: 'تحميل كتالوج حوامل الأسماء (PDF)',
  },

  services: {
    eyebrow: '05 / خدماتنا',
    title: 'خدماتنا',
    placeholderTitle: 'تفاصيل الخدمات قريبًا',
    placeholderText:
      'نعمل على إعداد تفاصيل خدماتنا. في هذه الأثناء، تواصل معنا مباشرة لأي استفسار.',
    cta: 'تواصل معنا',
  },

  contact: {
    eyebrow: '06 / تواصل معنا',
    title: 'تواصل معنا',
    lead: 'أرسل استفسارك عبر واتساب، أو تواصل معنا مباشرة عبر الهاتف أو البريد الإلكتروني.',
    methods: {
      whatsapp: {
        label: 'واتساب',
        action: 'محادثة عبر واتساب',
        hint: 'يفتح واتساب مع رسالة استفسار جاهزة.',
      },
      phone: {
        label: 'الهاتف',
        action: 'اتصل بنا',
        hint: 'اضغط للاتصال من هاتفك.',
      },
      location: {
        label: 'الموقع',
        action: 'فتح الموقع على الخريطة',
        hint: 'يفتح موقعنا على خرائط Google في علامة تبويب جديدة.',
      },
      email: {
        label: 'البريد الإلكتروني',
        action: 'أرسل بريدًا إلكترونيًا',
        hint: 'يفتح تطبيق البريد الإلكتروني.',
      },
    },
    form: {
      title: 'نموذج الاستفسار',
      badge: 'واتساب',
      name: { label: 'الاسم الكامل', placeholder: 'أدخل اسمك الكامل' },
      phone: { label: 'رقم الهاتف', placeholder: '+966 5X XXX XXXX' },
      email: { label: 'البريد الإلكتروني', placeholder: 'name@example.com' },
      interest: {
        label: 'الخدمة أو المنتج المطلوب',
        placeholder: 'اختر الخيار المناسب',
        options: [
          'استفسار عام',
          'هدايا ترويجية',
          'طباعة وتخصيص',
          'دفاتر',
          'حوامل أسماء المكاتب',
          'أخرى',
        ],
      },
      message: { label: 'الرسالة', placeholder: 'اكتب تفاصيل استفسارك' },
      submit: 'إرسال الاستفسار عبر واتساب',
      note: 'سيؤدي الإرسال إلى فتح واتساب برسالة جاهزة. لا تُخزَّن بياناتك على هذا الموقع.',
      opened: 'يفتح واتساب في علامة تبويب جديدة. إذا لم يُفتح، استخدم هذا الرابط:',
      errors: {
        name: 'يرجى إدخال اسمك.',
        phone: 'يرجى إدخال رقم الهاتف.',
        phoneInvalid: 'يرجى إدخال رقم هاتف صحيح.',
        email: 'يرجى إدخال بريد إلكتروني صحيح.',
        interest: 'يرجى اختيار الخدمة أو المنتج.',
        message: 'يرجى كتابة رسالتك (10 أحرف على الأقل).',
      },
      whatsappMessage: {
        heading: 'استفسار جديد من موقع Gift Occasions | مناسبات الهدايا',
        name: 'الاسم',
        phone: 'رقم الهاتف',
        email: 'البريد الإلكتروني',
        interest: 'الخدمة أو المنتج',
        message: 'الرسالة',
      },
    },
  },

  footer: {
    tagline: 'Gift Occasions | مناسبات الهدايا',
    description:
      'دعاية وإعلان وطباعة وهدايا ترويجية في الدمام، المملكة العربية السعودية. حلول مخصّصة للشركات والفعاليات والحملات التسويقية.',
    navigate: 'التنقل',
    catalogues: 'الكتالوجات',
    contact: 'تواصل',
    productCatalogue: 'كتالوج المنتجات',
    diaryCatalogue: 'تصاميم الدفاتر',
    nameplateCatalogue: 'حوامل أسماء المكاتب',
    rights: 'جميع الحقوق محفوظة.',
    builtNote: 'دعاية · طباعة · هدايا ترويجية',
  },
};

export const dictionary: Record<Language, Dictionary> = { en, ar };

export const languages: { code: Language; label: string; htmlLang: string }[] = [
  { code: 'en', label: 'EN', htmlLang: 'en' },
  { code: 'ar', label: 'العربية', htmlLang: 'ar' },
];




