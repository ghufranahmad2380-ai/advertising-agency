/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT — DESIGN PHASE ONLY
 * ---------------------------------------------------------------------------
 * Every value below is a placeholder. Replace the bracketed values with the
 * client's real details only when the final content is supplied.
 *
 * Visuals are original SVG illustrations created for this prototype, not
 * photographs of completed client projects.
 * ---------------------------------------------------------------------------
 */

export const brand = {
  name: '[AGENCY NAME]',
  nameNote: 'Temporary wordmark — client logo to follow',
  discipline: 'Advertising · Print · Gifts',
  description:
    'A concept studio bringing customized products, creative printing and promotional ideas together in one place.',
  phone: '[PHONE NUMBER]',
  email: '[EMAIL ADDRESS]',
  location: '[CITY, COUNTRY]',
  social: '[SOCIAL MEDIA LINK]',
  whatsappNote: 'WhatsApp destination to be configured before launch.',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const capabilities = [
  'Printing',
  'Custom Gifts',
  'Acrylic Work',
  'Brand Promotion',
  'Creative Solutions',
] as const;

export type ServiceArtKey = 'gifts' | 'printing' | 'acrylic' | 'merch' | 'branding' | 'displays';

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  art: ServiceArtKey;
}

export const services: Service[] = [
  {
    id: 'promotional-gifts',
    index: '01',
    title: 'Promotional Gifts',
    description:
      'Considered gift selections, branded and packed to feel like a genuine part of your identity — not an afterthought.',
    art: 'gifts',
  },
  {
    id: 'creative-printing',
    index: '02',
    title: 'Creative Printing',
    description:
      'Posters, packaging, stationery and print collateral developed with an eye for paper, finish and detail.',
    art: 'printing',
  },
  {
    id: 'acrylic-products',
    index: '03',
    title: 'Acrylic Products',
    description:
      'Cut, polished acrylic for awards, signage and display pieces — clean edges, precise type, considered mounting.',
    art: 'acrylic',
  },
  {
    id: 'custom-merchandise',
    index: '04',
    title: 'Custom Merchandise',
    description:
      'Apparel, totes and everyday objects customized around a brand system that people actually want to keep.',
    art: 'merch',
  },
  {
    id: 'corporate-branding',
    index: '05',
    title: 'Corporate Branding',
    description:
      'Identity applied across business cards, folders, desks and packaging so every touchpoint feels related.',
    art: 'branding',
  },
  {
    id: 'advertising-displays',
    index: '06',
    title: 'Advertising Displays',
    description:
      'Standees, banners and counter displays built for retail floors, events and launch moments.',
    art: 'displays',
  },
];

export const workCategories = [
  'All',
  'Promotional Products',
  'Printing & Packaging',
  'Acrylic Creations',
  'Corporate Gifts',
] as const;

export type WorkCategory = (typeof workCategories)[number];
export type WorkArtKey =
  | 'giftSet'
  | 'packaging'
  | 'awards'
  | 'posters'
  | 'onboarding'
  | 'signage'
  | 'bottle'
  | 'capsule';

export interface WorkItem {
  id: string;
  title: string;
  category: Exclude<WorkCategory, 'All'>;
  discipline: string;
  art: WorkArtKey;
  ratio: 'portrait' | 'landscape' | 'square';
}

/**
 * Demonstration portfolio entries. These are sample compositions only and must
 * not be presented as completed client work.
 */
export const workItems: WorkItem[] = [
  {
    id: 'signature-gift-set',
    title: 'Signature Gift Set',
    category: 'Promotional Products',
    discipline: 'Gift concept',
    art: 'giftSet',
    ratio: 'portrait',
  },
  {
    id: 'retail-packaging',
    title: 'Retail Packaging Study',
    category: 'Printing & Packaging',
    discipline: 'Box study',
    art: 'packaging',
    ratio: 'landscape',
  },
  {
    id: 'acrylic-awards',
    title: 'Acrylic Awards Study',
    category: 'Acrylic Creations',
    discipline: 'Award objects',
    art: 'awards',
    ratio: 'portrait',
  },
  {
    id: 'poster-series',
    title: 'Poster Series Study',
    category: 'Printing & Packaging',
    discipline: 'Poster series',
    art: 'posters',
    ratio: 'landscape',
  },
  {
    id: 'onboarding-kit',
    title: 'Onboarding Kit Study',
    category: 'Corporate Gifts',
    discipline: 'New-starter kit',
    art: 'onboarding',
    ratio: 'square',
  },
  {
    id: 'reception-signage',
    title: 'Reception Signage Study',
    category: 'Acrylic Creations',
    discipline: 'Reception sign',
    art: 'signage',
    ratio: 'landscape',
  },
  {
    id: 'branded-bottle',
    title: 'Branded Bottle Study',
    category: 'Promotional Products',
    discipline: 'Drinkware',
    art: 'bottle',
    ratio: 'portrait',
  },
  {
    id: 'merch-capsule',
    title: 'Merch Capsule Study',
    category: 'Corporate Gifts',
    discipline: 'Apparel',
    art: 'capsule',
    ratio: 'square',
  },
];

export const aboutPillars = [
  { index: 'A', title: 'Products', copy: 'Pieces people keep, use and remember.' },
  { index: 'B', title: 'Print', copy: 'Paper, packaging and collateral with real craft.' },
  { index: 'C', title: 'Promotion', copy: 'Ideas that put your brand in the right hands.' },
];

export const serviceOptions = [
  'Promotional Gifts',
  'Creative Printing',
  'Acrylic Products',
  'Custom Merchandise',
  'Corporate Branding',
  'Advertising Displays',
  'Not sure yet',
] as const;

export const socialLabels = ['IG', 'LI', 'BE', 'FB'] as const;

