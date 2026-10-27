# ReturnAndEarn_Team18 — Return & Earn

**Submission identifier:** `ReturnAndEarn_Team18`
**Visible project name:** Return & Earn · **Team:** 18

A responsive, static concept website for the Sustainable Digitalization in Practice course at Chalmers University of Technology, developed as an IKEA Capstone Project. Return & Earn is a proposed end-of-life furniture take-back and material recovery service—not an official IKEA service.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```bash
npm install        # also installs the app demo's dependencies
npm run build:demo
npm run dev
```

Vite prints the local development URL after startup. `npm run build:demo` builds the interactive app demo into `public/app-demo/` so the Demo page can show it; re-run it after changing the demo.

## Build and preview

```bash
npm run build
npm run preview
```

`npm run build` builds the app demo first, then the site. The production-ready static site is written to `dist/`, with the demo at `dist/app-demo/`.

## Pages

- `/` — Overview
- `/problem` — The problem
- `/solution` — Our solution
- `/demo` — Interactive app demo
- `/customers` — Customer value
- `/ikea` — IKEA value
- `/sustainability-goals` — Sustainability goals
- `/circularity` — Preliminary sustainability assessment, effects diagrams and validation questions
- `/development` — Development and research
- `/team` — Project team
- `/references` — Sources

The site uses React, TypeScript, Vite, Tailwind CSS, React Router and Lucide React. Content is static and local; there is no authentication, database, backend or live IKEA integration.

## Editing content

- Update team member names and source entries in `src/data/siteContent.ts`.
- Update most page content and concept examples in `src/pages/Pages.tsx`; the Circularity and Development pages are in `src/pages/Circularity.tsx` and `src/pages/Development.tsx`.
- Static phone-screen mockups used on the Development page are in `src/components/common/PrototypeScreens.tsx`. The interactive Demo page is built from `app-demo/`.
- Shared navigation and page layout live under `src/components/layout/`.
- Global responsive styles are in `src/index.css`.

## App demo

The clickable prototype shown on the Demo page lives in `app-demo/`, a separate Vite app with its own `package.json` (see `app-demo/README.md`). It is embedded in an iframe from `public/app-demo/`, which is generated and git-ignored.

```bash
npm --prefix app-demo run dev   # work on the demo on its own
npm run build:demo              # rebuild it for the website
```

Fictional demonstration values are labeled in the interface; sources with links that could not be verified are explicitly marked for manual checking. Verify sustainability targets and sources against current official publications before external use.

## Static deployment

Run `npm run build` and deploy the contents of `dist/` to any static host. Because navigation uses React Router's history API, configure the host to serve `index.html` for unknown paths (SPA fallback) so direct visits and refreshes on nested routes work.

### GitHub Pages

The `Deploy to GitHub Pages` workflow builds and publishes the site from `main` whenever changes are pushed (and can also be run manually). In the repository settings, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The published site is available at `https://cleanmain.github.io/ReturnAndEarn/`.

The GitHub repository and deployed project URL retain their existing `ReturnAndEarn` names to avoid breaking links; they do not include the `Team18` suffix from the submission identifier.
