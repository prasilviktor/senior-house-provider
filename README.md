# Senior House — Provider Section

Investor-facing section explaining the value of Senior House for nursing homes, senior living facilities, and home care providers.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Google Fonts: Lora + DM Sans (loaded via layout)

## Components

| File | Description |
|------|-------------|
| `components/sections/ProviderSection.tsx` | English version — all 6 content blocks |
| `components/sections/ProviderSectionCS.tsx` | Czech version — full translation |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Switching language

In `app/page.tsx`, swap between `<ProviderSection />` (EN) and `<ProviderSectionCS />` (CS).

## Content blocks

1. **Current reality** — coordination chaos overview + operational stats
2. **Pre-qualified intake** — before/after comparison + care profile mockup
3. **Smart matching** — 4 compatibility scenarios with match bars
4. **Waiting list dashboard** — live pipeline table with urgency + document status
5. **Admin burden** — before/after workflow + 4 impact metrics
6. **Long-term vision** — 6-node ecosystem + 3-phase roadmap + quote
