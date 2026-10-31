# Gift Occasions | مناسبات الهدايا

Bilingual English / Arabic website for **Gift Occasions**, an advertising,
printing and promotional-gifts company in Dammam, Saudi Arabia.

The site presents the company's About content, a continuously scrolling strip of
selected product photographs, the complete product catalogue, all diary designs,
all desk nameplate stand designs, the six bilingual services, verified contact
details and a WhatsApp inquiry form.

**Status:** implemented and verified locally, pushed to GitHub; not deployed to a
hosting provider.

## Stack

- Vite 8 + React 19 + TypeScript 7
- Plain modern CSS (custom properties, grid, logical properties, CSS keyframes)
- No runtime dependencies beyond React
- No backend, database, e-commerce or admin code

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
npm run typecheck
```

Node 20+ is recommended (developed on Node 24).

## Structure

```
index.html                     metadata, fonts, pre-paint language bootstrap
public/
  catalogue/product-photos.pdf     original product catalogue (8.0 MB)
  catalogue/diary-designs.pdf      original diary catalogue (12.6 MB)
  catalogue/nameplate-stand.pdf    compiled from supplied photos (see note below)
  images/products/                 10 selected product photographs
  images/diary-designs/            30 unique diary designs
  images/nameplate-stands/         26 unique nameplate photographs
  images/site/                     hero, About and diary-section imagery
scripts/                       Python asset + catalogue pipeline
src/
  App.tsx                      page composition
  i18n/dictionary.ts           every English and Arabic string
  i18n/LanguageContext.tsx     language state, <html lang/dir>, persistence
  data/site.ts                 contacts, catalogue paths, image data, services
  hooks/useActiveSection.ts    nav highlighting
  styles/global.css             tokens, reset, typography, buttons, motion
  components/
    Header, Hero, About, ProductShowcase, ProductMarquee,
    DiaryDesigns, NameplateStands, Services, Contact, Footer
    ui/                        icons, reveal, language switch, gallery,
                               catalogue actions
```

## Bilingual system

- All interface copy lives in `src/i18n/dictionary.ts`. The Arabic object is
  typed against the English one, so a missing key is a TypeScript error.
- `LanguageProvider` sets `document.documentElement.lang` and `dir`, updates the
  document title/description and persists the choice in `localStorage`
  (`gift-occasions:language`). English is the default when nothing is stored.
- `index.html` contains a small pre-paint script that applies the saved language
  before React mounts, avoiding a flash of the wrong direction.
- Typography: Archivo + DM Sans for English, Cairo for Arabic, loaded from Google
  Fonts with system fallbacks. Arabic headings use relaxed line-height and no
  letter-spacing or uppercasing.
- Layout uses logical properties (`margin-inline`, `inset-inline`, `border-inline`)
  and RTL-specific rules for the marquee, arrow icons and skip link.
- The language switch is in the header (`EN | العربية`) and in the mobile menu.

## Content and data

| What | Where |
| --- | --- |
| Contact details, WhatsApp number, Maps URL, catalogue paths | `src/data/site.ts` |
| Product image list and bilingual alt text | `src/data/site.ts` |
| Diary / nameplate image paths | `src/data/site.ts` |
| Services entries (currently empty) | `src/data/site.ts` |
| All interface copy, labels, errors, WhatsApp message labels | `src/i18n/dictionary.ts` |
| Palette, spacing, type scale | `src/styles/global.css` |
| Section layout | `src/components/*.css` |

### Services section

The six services from the company's business card are defined in
`src/data/site.ts` and rendered as bilingual cards with a distinct line icon and
a service-specific WhatsApp inquiry link:

1. Acrylic Sculptures & Fabrication — تنفيذ المنحوتات والأعمال الأكريليكية
2. Promotional Gifts — الهدايا الترويجية
3. DTF Printing — طباعة DTF
4. UV Printing — طباعة UV
5. Laser Services — خدمات الليزر
6. Silk-Screen Printing — الطباعة بالشاشة الحريرية (السلك سكرين)

Each card uses `whatsappUrl()` with a message that names the selected service,
built from `services.whatsappMessage` in the dictionary. Descriptions stay
deliberately general — no machine models, material grades, turnaround times or
guarantees are claimed.

To edit the list, update the `services` array (title, description, `icon` key).
If the array is ever emptied, the section falls back to a neutral notice.


## Images and catalogues

The source PDFs and the `nameplate stand/` folder stay in the project root and
are **not** published. Web-ready derivatives live under `public/images/`.

- **Products:** ten crops selected from the 117-page product catalogue, used in
  the continuous marquee. The full PDF is linked for viewing and download.
- **Diaries:** every unique diary design extracted from the 10-page diary
  catalogue (30 images). The repeated blank background page and the catalogue
  cover collage are excluded from the gallery; the collage is used as the
  section visual.
- **Nameplates:** all 26 unique photographs from the supplied folder (two
  duplicate files removed).

`scripts/build-images.py` and `scripts/build-catalogues.py` regenerate these
assets; see [scripts/README.md](scripts/README.md).

> **Nameplate PDF:** no nameplate PDF was supplied with the project — only the 26
> photographs. `public/catalogue/nameplate-stand.pdf` was compiled from those
> photographs so the catalogue button opens a real document. Replace it with the
> client's original PDF when available; the build script will then leave it
> untouched.

## Contact and WhatsApp behaviour

- Phone, WhatsApp, email and Google Maps links use the verified details:
  `+966 56 465 6508` and `+966 56 707 9049`, `es.gift@yahoo.com`, and the supplied
  Maps short link. Both numbers are listed under **Phone** (tap to call) and under
  **WhatsApp** in the contact section, and in the footer and mobile menu.
- The inquiry form validates name, phone, email, interest and message, then builds
  a readable message and opens `https://wa.me/966564656508?text=…` in a new tab.
  A fallback link is shown in the confirmation notice.
- Nothing is sent to a server, stored or emailed. No submission backend exists.

## Accessibility and performance

- Semantic landmarks, one `h1`, labelled sections, `aria-current` navigation.
- Meaningful bilingual alt text; duplicate marquee images are hidden from
  assistive technology.
- Keyboard: skip link, visible focus rings, trapped focus and Escape handling in
  the mobile menu.
- `prefers-reduced-motion`: the marquee becomes a static, horizontally scrollable
  strip; reveals and hover transforms are disabled.
- Scroll reveals observe a zero intersection ratio (`threshold: 0`), so a block that
  is taller than the viewport (the printed-and-branded gallery is about 29,000 px
  on a phone) still becomes visible. A percentage threshold such as `0.06` can
  never be reached by such a block, which left every product photograph in that
  gallery at `opacity: 0` on phones and small laptops.
- Images are sized by aspect-ratio containers (no layout shift). The hero image is
  eager/high priority; all gallery images are lazy-loaded. Marquee images load
  eagerly so the strip is never blank.
- No horizontal page scrolling at any tested width (320–1440 px).
- Services: six cards verified in both languages with six distinct icons,
  service-specific WhatsApp URLs and a 3 / 2 / 1 column responsive grid; no
  overflow or clipped buttons from 320 to 1440 px.

## Verification performed

- `npm run build` — TypeScript + Vite production build passes.
- Headless Chrome checks (1440 / 1200 / 1100 / 961 / 960 / 834 / 600 / 430 / 390 /
  380 / 360 / 340 / 320 px, both languages): no horizontal overflow, no clipped
  buttons or headings, no header collisions.
- All three PDFs return `200`, `application/pdf`, valid `%PDF` headers and real
  byte sizes; view links open in a new tab and download links are present.
- Marquee measured at seven points across a full loop in LTR and RTL, normal and
  reversed: the duplicated track always covers the viewport (no gaps, no jump).
- Language switch tested by click and reload; `lang`/`dir`, title, navigation,
  form labels, validation messages and Cairo font all switch; preference persists.
- Form tested empty (five errors, focus on first field) and filled (WhatsApp URL
  contains every field, correctly encoded; confirmation shown).
- Mobile menu: opens with focus inside, locks body scroll, closes on Escape.
- Reduced-motion emulation: marquee animation `none`, controls hidden, clone
  hidden, viewport scrollable.
- Fresh browser context defaults to English.

## Known limitations / before launch

1. **Nameplate catalogue** is a compiled PDF because no original was provided.
2. Fonts are loaded from Google Fonts; self-host if privacy/performance requires.
3. No analytics, cookie banner or privacy policy is included — add if required.
4. The form has no backend by design; WhatsApp is the delivery channel.
5. Real-device and screen-reader passes are still recommended before launch.

Deployed: no. The source is pushed to GitHub; no hosting deployment has been
configured.

