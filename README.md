# Hamsa Mortgages

Marketing site for **Hamsa Mortgage Brokers** — a Dubai (DIFC) mortgage brokerage arranging finance across 15+ UAE banks for residents, non-residents and global investors.

Static site by design: no backend, database or analytics yet. All lead capture flows out through WhatsApp deep links, ready to be swapped for a real API later.

## Stack

- Next.js 16 (App Router, Turbopack) · fully static prerender
- React 19, TypeScript (strict)
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- Three.js — interactive dotted globe in the hero (`components/three/`)
- Fonts: Fraunces (display) + Manrope (body) via `next/font`
- Images: Unsplash via `next/image` (remote pattern configured)
- Motion: scroll reveals (`components/reveal.tsx`), count-up stats, bank marquee — all respect `prefers-reduced-motion`

## Develop

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve production build
npm run lint
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero + quick EMI check, bank strip, borrower segments, calculators, value props, rates snapshot, process, Dubai stats, FAQ, lead form |
| `/calculators` | Installment & total-cash-outlay, borrowing capacity (50% DBR), buyout/refinance — with full Dubai fee schedule |
| `/services` | Residential, non-resident, commercial & building, rent-income-only, buyout/equity release |
| `/why-dubai` | Q1 2026 market stats, visa matcher (2-year vs Golden Visa), fundamentals, escrow protection |
| `/how-it-works` | 9-step journey, seller-mortgage/Oqood notes, document checklist |
| `/rates` | Rate landscape, eligibility criteria, LTV table, settlement rules, fee transparency, eligibility screener, FAQ |
| `/about` | Story, advisory team, contact + callback form |

## Where things live

- `lib/site.ts` — phone, WhatsApp number, email, address, socials (**placeholders — replace before launch**)
- `lib/mortgage.ts` — EMI/affordability math, Central Bank LTV rules, Dubai fee constants
- `lib/data.ts` — all page content: banks, rates, fees, criteria, steps, FAQs, team
- `components/logo.tsx` — official swan icon (inline SVG path)
- `components/three/` — Three.js dotted globe (lazy-loaded, WebGL-fallback safe)
- `components/tools/` — calculators, eligibility screener, visa matcher, lead form

## Before launch checklist

- [ ] Replace placeholder phone/WhatsApp/email in `lib/site.ts`
- [ ] Replace team placeholders with real advisor names/bios/photos
- [ ] Confirm rate figures against current bank sheets
- [ ] Point `site.url` at the real domain
- [ ] Add analytics + a real lead endpoint (backend phase)
