# Return & Earn

A responsive, static concept website for a Chalmers University of Technology capstone project developed in response to an IKEA innovation challenge. Return & Earn is a proposed end-of-life furniture take-back and material recovery service—not an official IKEA service.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Build and preview

```bash
npm run build
npm run preview
```

The production-ready static site is written to `dist/`.

## Pages

- `/` — Overview
- `/problem` — The problem
- `/solution` — Our solution
- `/demo` — Static app concept
- `/customers` — Customer value
- `/ikea` — IKEA value
- `/sustainability-goals` — Sustainability goals
- `/circularity` — Circularity and sustainable software
- `/development` — Development and research
- `/team` — Project team
- `/references` — Sources

The site uses React, TypeScript, Vite, Tailwind CSS, React Router and Lucide React. Content is static and local; there is no authentication, database, backend or live IKEA integration.

## Editing content

- Update team placeholders and source entries in `src/data/siteContent.ts`.
- Update page content and concept examples in `src/pages/Pages.tsx`.
- Shared navigation and page layout live under `src/components/layout/`.
- Global responsive styles are in `src/index.css`.

Research placeholders and fictional demonstration values are labeled in the interface. Verify sustainability targets and sources against current official publications before external use.

## Static deployment

Run `npm run build` and deploy the contents of `dist/` to any static host. Because navigation uses React Router's history API, configure the host to serve `index.html` for unknown paths (SPA fallback) so direct visits and refreshes on nested routes work.
