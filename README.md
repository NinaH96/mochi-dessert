# Mochi Dessert — Website

A premium, handmade-feeling marketing site for Mochi Dessert, a home-based
custom cake studio in West Lafayette, Indiana. Built with Next.js (App
Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Add your photos

The design references real photography in `public/images/`. Drop in your own
images with these exact filenames (or update the paths in the components):

- `hero-cake.jpg` — hero banner, one gorgeous finished cake, portrait orientation
- `founder.jpg` — the About section, founder baking/decorating
- `cake-birthday.jpg`, `cake-graduation.jpg`, `cake-pet.jpg`, `cake-seasonal.jpg` — Featured Cakes cards
- `gallery-1.jpg` through `gallery-9.jpg` — masonry gallery

Until real photos are added, the `<img>` tags will show broken images —
this is intentional so it's obvious where content is needed.

## Structure

```
app/
  layout.tsx        — fonts (Fredoka + Plus Jakarta Sans), global metadata
  page.tsx           — assembles all homepage sections
  globals.css        — base styles, hand-drawn underline, tape/card utilities
components/
  Navbar.tsx
  Hero.tsx           — signature "cake box opening" reveal animation
  FeaturedCakes.tsx
  About.tsx
  Gallery.tsx        — CSS-columns masonry layout
  HowItWorks.tsx
  Reviews.tsx        — handwritten-card style testimonials
  FAQ.tsx            — accordion
  Contact.tsx
  Footer.tsx
  doodles/Doodles.tsx    — hand-drawn SVG icon set (strawberry, cherry, bow,
                            candle, star, smiley, ribbon, flower, swirl)
  ui/FloatingDoodle.tsx  — ambient bob/tilt wrapper for doodles
lib/
  data.ts            — all editable copy: cakes, gallery captions, steps,
                        reviews, FAQ
```

## Editing content

Almost everything you'll want to change lives in `lib/data.ts` — cake
categories, gallery captions, process steps, reviews, and FAQ. Section-level
headlines and the founder story live directly in each component file under
`components/`.

## Design tokens

Colors, fonts, radii, and shadows are defined once in `tailwind.config.ts`
so the whole site stays consistent:

- `cream` #FFF9F4 · `blush` #F8D8DF · `strawberry` #E96B76 · `matcha`
  #B7D3B0 · `cocoa` #6E4A3D · `ink` #2D2D2D
- Display font: Fredoka (rounded, warm, used for headings)
- Body font: Plus Jakarta Sans (clean, highly legible)

## Accessibility & motion

- All decorative doodles are `aria-hidden`.
- `prefers-reduced-motion` is respected globally (see `globals.css`).
- Interactive elements (nav, accordion, buttons) have visible focus states
  via Tailwind's default focus rings — extend these if you customize further.
