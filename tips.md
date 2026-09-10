# Where to Edit Things

A quick map of this site for future reference. Content is data-driven: most edits
happen in `src/data/`, not in components.

## How the site works

- Next.js 15 (App Router), statically exported to plain HTML and hosted on GitHub Pages.
- `app/` — one folder per URL; `app/<name>/page.tsx` maps to `/<name>`.
- `src/data/` — the actual content (text, lists). Edit here most of the time.
- `src/components/` — reusable UI (sidebar, contact icons, resume sections).
- `src/static/css/` — SCSS styles.
- Push to `main` triggers GitHub Actions, which builds `out/` and publishes it.
  Edits appear only after commit + push (plus a short deploy/cache wait).

## Where to edit each page

| Page | Content lives in | Shell / title |
|------|------------------|---------------|
| Home `/` | `app/page.tsx` | `app/page.tsx` |
| Sidebar (photo, name, About blurb — every page) | `src/components/Template/SideBar.tsx` | — |
| Nav menu | `src/data/routes.ts` | — |
| About `/about` | `src/data/about.ts` (Markdown) | `app/about/page.tsx`, `app/about/layout.tsx` |
| Resume `/resume` | `src/data/resume/`: `work.ts`, `degrees.ts`, `awards.ts`, `courses.ts`, `skills.ts` | `app/resume/page.tsx` (section order) |
| Projects `/projects` | `src/data/projects.ts` | `app/projects/page.tsx` |
| Stats & Stories `/stats` | `src/data/stats/personal.tsx` | `app/stats/page.tsx` |
| Contact `/contact` | `src/data/contact.ts` + `src/components/Contact/EmailLink.tsx` | `app/contact/page.tsx` |

## Shared / global

- Contact icons (GitHub, LinkedIn, Email, Scholar) — `src/data/contact.ts`,
  rendered by `src/components/Contact/ContactIcons.tsx` (used in sidebar footer and `/contact`).
- Site title, description, social preview, fonts — `app/layout.tsx`.
- Sitemap / SEO URLs — `app/sitemap.ts`.
- Styles — `src/static/css/` (`libs/_vars.scss` for colors/sizes, `pages/` per page,
  `layout/` for sidebar/header).
- Images / CV / favicon — `public/images/`, `public/`.

## Practical tips

- Change text/content → edit `src/data/*`, not the components.
- Change a page heading or metadata → that page's `app/**/page.tsx`.
- Add a new page → create `app/<name>/page.tsx` and add it to `src/data/routes.ts`.
- Data files are TypeScript; keep the existing shape (each exports a typed array/string).
- Preview locally with `npm run dev`, then commit + push to deploy.
- Some resume sections are commented out in `app/resume/page.tsx` (Skills, site stats);
  check there if a section doesn't show.
