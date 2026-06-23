# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Award Prospect Limited corporate website — a single-page Next.js static export site for a Hong Kong-based cross-border procurement and supply chain company. Domain: `awardprospect.com`, served via Cloudflare DNS → Netcup VPS Nginx.

## Commands

```bash
pnpm dev           # Development server on localhost:3000
pnpm build         # Static export → out/
pnpm start         # Serve the exported static site locally
pnpm lint          # ESLint (next/core-web-vitals + typescript)
```

**Package manager is pnpm** (not npm/yarn). Do not introduce lock files for other managers.

## Architecture

### Static export (no server runtime)

`next.config.ts` sets `output: "export"` with `images.unoptimized: true`. The site compiles to flat HTML/CSS/JS in `out/`. There is no Node.js server in production — Nginx serves the files directly.

### i18n: 4-language translation system

Languages: `en` (English, default), `zh-CN` (简体中文), `zh-TW` (繁體中文), `ar` (العربية — RTL).

- **Translation dictionary**: `src/lib/i18n.ts` — all strings live in the `t` record keyed by string IDs. The `tr(key, lang)` helper looks up translations with `"en"` fallback.
- **LanguageProvider**: `src/components/LanguageProvider.tsx` — client-side context with multi-tier detection: (1) stored preference in `localStorage`, (2) Cloudflare country code via `fetch("/cdn-cgi/trace")`, (3) browser `navigator.language`. Sets `document.documentElement.dir` to `"rtl"` for Arabic.
- **LanguageSwitcher**: dropdown in navbar and legal pages, persists choice to `localStorage`.

### Page structure

The app is a single page (`src/app/page.tsx`) composed of sections, plus 3 standalone legal pages:

| Route | Source | Notes |
|---|---|---|
| `/` (index) | `src/app/page.tsx` | Composed of 8 sections |
| `/privacy` | `src/app/privacy/page.tsx` | Uses `LegalLayout` wrapper |
| `/terms` | `src/app/terms/page.tsx` | Uses `LegalLayout` wrapper |
| `/cookies` | `src/app/cookies/page.tsx` | Uses `LegalLayout` wrapper |

### Component organization

- `src/sections/*.tsx` — page sections (Navbar, Hero, About, Capabilities, WhyUs, Timeline, Partners, Contact, Footer). Each is a `"use client"` component using `useLanguage()` for translations.
- `src/components/LanguageProvider.tsx` — i18n context + detection logic.
- `src/components/LegalLayout.tsx` — reusable layout for legal pages with back-link, language switcher, and `Section`/`Text` helper components.
- `src/lib/i18n.ts` — translation dictionary + `tr()` / `getDir()` helpers.
- `src/lib/constants.ts` — English-only fallback content (legacy — most sections now read from `i18n.ts` via `tr()`).

### Animation stack

- **framer-motion**: scroll-triggered entrance animations (`useInView`, `whileInView`, `AnimatePresence` for the contact success popup).
- **Canvas 2D**: Hero section renders two `<canvas>` elements with raw Canvas API (no Three.js/WebGL library at runtime — `three`, `@react-three/fiber`, `@react-three/drei` are in `package.json` but not used in current code):
  - Background particle network (particles + connecting lines).
  - Interactive spinning wireframe globe with city dots, flight route arcs, and continent outlines using orthographic projection math.

### Styling

- **Tailwind CSS v4** with `@theme inline` custom colors: `deep` (#1a1a2e), `ocean` (#0f3460), `coral` (#e94560), `slate-soft` (#16213e), `violet-deep` (#533483).
- Two font families: `Space Grotesk` (display) and `Inter` (body).
- Custom CSS classes in `globals.css`: `.glass` (frosted glass navbar), `.card-glow` (hover lift+glow), `.section` (responsive vertical padding), `.section-heading`/`.section-subtitle` (typography), `.animate-marquee` (infinite horizontal scroll for partner logos).

### Contact form

Posts to an **external B2B backend** at `https://b2b.awardprospect.com/api/website-inquiry` with fields: `name`, `email`, `message`, `country` (from Cloudflare trace), `language`. The form is fire-and-forget — it catches errors silently and shows a success popup regardless. No validation beyond `required` attributes.

## Deployment

See `deploy.sh` — deploys to Netcup VPS (152.53.82.24, SSH port 37210, key `~/.ssh/netcup_space_center_ed25519`).

The server has Node 22 + pnpm 10. The repo is cloned at `/opt/award-website-repo` and nginx serves from `/opt/award-website-repo/out/`.

The script:
1. `git pull origin main` on the server — only changed files transfer
2. `pnpm install --frozen-lockfile && pnpm build` on the server
3. Restructures HTML files into directories for clean URLs (`/privacy/index.html`, etc.)
4. Reloads nginx
5. Health-checks via `curl` on `127.0.0.1:80` with Host header `www.awardprospect.com`

**Always ask Kevin before deploying.** The deploy script is committed but deployment requires Kevin's approval.

## Important constraints

- The `.gitignore` excludes generated static output (`*.html`, `*.txt`, `_next/`, `_not-found/`, image assets in root) from the repo. These files exist on disk as build artifacts. Only source under `src/`, `public/`, and config files is tracked.
- The `public/` directory contains logo variants used at build time. The root-level logo files (outside `public/`) are build artifacts and gitignored.
- `three` and `@react-three/*` are installed dependencies but the current Hero implementation uses raw Canvas 2D, not React Three Fiber — the dependencies exist for potential future use.
- RTL support for Arabic is handled via `dir="rtl"` on `<html>` — Tailwind's RTL variants should be used for any new UI that needs RTL-aware layout.
