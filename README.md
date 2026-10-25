# [AGENCY NAME] — Advertising, Print & Promotional Gifts

A design-phase website prototype for a fictional advertising, printing and promotional-gifts studio. Built to be reviewed as a visual concept — it contains **no real client information** and **no working contact submission**.

## Stack

- Vite 8 + React 19 + TypeScript 7
- Plain modern CSS (custom properties, grid, no UI framework)
- No runtime dependencies beyond React

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
npm run typecheck
```

Node 20+ is recommended (developed on Node 24).

## Where to edit content

| What | File |
| --- | --- |
| Brand placeholders, navigation, services, gallery, pillars, form options, social labels | `src/data/site.ts` |
| Palette, type scale, spacing, buttons, global focus/reduced-motion rules | `src/styles/global.css` |
| Section layout and responsive rules | `src/components/*.css` (next to each component) |
| Original sample illustrations (SVG primitives + scenes) | `src/components/art/` |
| Page metadata (temporary) | `index.html` |

All copy, imagery and contact details are placeholders. The gallery is labelled **Sample** and the site states that visuals are not completed client work — keep this honesty until real project photography and client details are supplied.

## What is fictional

- Agency name, phone, email, address, social links, WhatsApp destination
- Services descriptions and About copy
- All gallery items and illustrations
- The "concept / sample study" numbering

No company history, staff counts, awards, certifications, customer numbers or years of experience are claimed anywhere.

## Before this can go live

1. **Business details** — replace every bracketed placeholder in `src/data/site.ts`; add the real logo and favicon.
2. **Imagery** — replace the SVG scenes in `src/components/art/` with the client's photography (keep the same aspect containers, add meaningful `alt` text). Original illustrations are used only so nothing can break during review.
3. **Contact form** — `src/components/Contact.tsx` has no backend. Connect a form service or API, add spam protection and a privacy notice, then replace the prototype success message. There is a `TODO` comment marking the handler.
4. **WhatsApp** — remove the placeholder behaviour and link to the real number (or remove the button).
5. **Social links** — replace the placeholder chips with real profile URLs and accessible labels.
6. **SEO** — update the page title, description and Open Graph data; add a real OG image; remove `<meta name="robots" content="noindex, nofollow">`.
7. **Fonts** — currently loaded from Google Fonts (`Archivo`, `DM Sans`, `Space Mono`). Self-host for privacy/performance if required; fallback stacks are defined.
8. **Legal** — add privacy/cookie policy and any consent tooling required in the client's market.
9. **Accessibility and content review** — run a real-device pass, test with a screen reader, and confirm colour contrast on final imagery.

## Structure

```
src/
  App.tsx                 page composition
  main.tsx
  data/site.ts            all editable placeholder content
  hooks/useActiveSection.ts
  styles/global.css       tokens, reset, typography, buttons, motion
  components/
    Header / Hero / Marquee / About / Services / Gallery / Callout / Contact / Footer
    ui/                   icons, scroll reveal
    art/                  ArtCanvas, primitives, Hero, About, Services, Work scenes
```

## Design notes

- Palette: yellow `#F5D90A`, white, off-white `#F7F7F3`, charcoal `#191919`, deep blue `#2864A6`, gray `#EAEAEA`.
- Editorial layout with oversized Archivo headlines, mono labels and hairline rules.
- Yellow is reserved for primary actions and key accents.
- Scroll reveals, marquee, hover states and the mobile menu respect `prefers-reduced-motion`; keyboard focus is visible throughout.
- No analytics, tracking, database, auth, e-commerce or dashboard code is included.

Not deployed, not pushed, no real submissions are possible.
