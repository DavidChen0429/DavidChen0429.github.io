# AGENTS.md

Personal portfolio site: Next.js 15 App Router, React 19, TypeScript, SCSS. Static-exported to
GitHub Pages from `main`. Fork of `mldangelo/personal-site`, customized for Zekai Chen.

## Commands

- Node 20+ required (`.nvmrc`). Use npm; `yarn.lock` is gitignored.
- `npm run dev` — dev server with Turbopack. If Turbopack breaks, fall back to `npm run dev:webpack`.
- `npm run build` — static export to `out/`. `npm run start` does NOT work with `output: 'export'`.
- Verify before finishing, in CI order: `npm run type-check` -> `npm run lint` -> `npm run format:check` -> `npm test`.
- Single test: `npm test -- src/components/__tests__/ContactIcons.test.tsx` (or `npm test -- -t "name"`).
- `npm run format` rewrites files and sorts imports; it fixes both format and lint violations.

## Layout

- `app/` — App Router pages/layouts. `app/components/PageWrapper.tsx` wraps each page and renders the
  sidebar; it is a client component (`'use client'`).
- `src/components/<Feature>/` — feature components; tests live in `src/components/__tests__/`.
- `src/data/` — all editable site content (resume, projects, stats; `routes.ts` defines nav). To change
  content, edit these files, not the components.
- `src/static/css/` — SCSS partials, imported globally from `app/layout.tsx` via `main.scss`. sass
  `includePaths` is `./src/static/css`, so partials import by name. Still legacy `@import`; deprecation
  warnings are silenced in `next.config.ts`.

## Conventions / gotchas

- Import order is enforced by Prettier's `@trivago/prettier-plugin-sort-imports` (react, next/@next,
  third-party, `@/`, relative; blank line between groups). Lint fails on Prettier violations.
- LF line endings are enforced (`.gitattributes`, Prettier `endOfLine: lf`); on Windows, save LF.
- `@/` maps to `src/` (tsconfig + Jest).
- `.env.local` exists locally but is NOT gitignored (`.gitignore` only lists `.env`) — never commit it.
  GA4 requires `NEXT_PUBLIC_GA_TRACKING_ID`; without it `GoogleAnalytics` renders nothing.
- Generated/ignored, do not edit: `out/`, `.next/`, `next-env.d.ts`, `tsconfig.tsbuildinfo`.
- Bundle analyzer only runs on webpack builds (`TURBOPACK != 1`); `npm run analyze` forces webpack.
- Jest uses `next/jest` + SWC (jsdom). `jest.setup.ts` mocks `next/image`, `next/navigation`, and
  `ResizeObserver`; SCSS imports map to `identity-obj-proxy`.

## Deployment

- Push to `main` triggers `.github/workflows/github-pages.yml` (build -> `out/` -> Pages). CI
  (`.github/workflows/node.js.yml`) runs type-check, lint, format:check, tests with coverage, and builds
  on Node 20/22 across OSes.
- Base URL is hardcoded in several places when changing domains: `metadataBase` in `app/layout.tsx`
  and `app/sitemap.ts`. `public/CNAME` was removed; add it back only if using a custom domain.
