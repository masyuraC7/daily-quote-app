# AGENTS.md

## Overview

Vite + React 19 app in plain JavaScript (no TypeScript). Single package, no monorepo, no test framework, no CI.

## Commands

- `npm run dev` — dev server (binds `--host`)
- `npm run lint` — eslint (`.js`/`.jsx` only)
- `npm run build` — vite build (output to `dist/`)
- `npm run preview` — preview the production build
- No test or typecheck scripts exist — do not invent them.

## Architecture

- Entry: `index.html` loads `src/main.jsx`, which renders `<App />` inside `ThemeProvider`
- `src/services/api.js` — fetches from the external endpoint `https://dummyjson.com/quotes/random`; needs network at runtime
- `src/hooks/` — `useFetchQuote`, `useQuoteHistory`
- `src/context/theme.js` + `ThemeContext.jsx` — theme provider
- `src/utils/` — `exportTxt`, `exportPdf` (jsPDF), `formatDate`
- `src/components/` — `ui/` (Button, Card, IconButton, TogglePill), `layout/` (NavBar, MainLayout, Footer), `features/quote/`, `features/history/`
- `@vercel/analytics` and `@vercel/speed-insights` components render in `App.jsx`

## Styling conventions

- **No Tailwind.** Do not add Tailwind utility classes or reintroduce the Tailwind pipeline; styling lives entirely in custom BEM-style classes (e.g. `history-item__time`, `toggle-pill__item`) in `src/assets/css/global.css`
- Colors, fonts, and sizes are CSS custom properties (`--color-primary`, etc.) defined in `global.css`, themable via `:root[data-theme="light"]`
- `docs/DESIGN.md` documents the design tokens/typography (in Indonesian) — keep it in sync with `global.css`
- Theme is applied via `data-theme` on `<html>`; stored in localStorage key `daily-quote-theme`, default `dark`

## Gotchas

- Quote history persists in localStorage under `daily-quote-history` — UI state depends on it
- No automated tests anywhere; verify changes with `npm run lint` + manual browser check
- Production deploys automatically to Vercel on every push to `main` — the quote API is a runtime dependency of the deployed app
