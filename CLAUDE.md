# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Yeonjoon Choi, hosted on GitHub Pages at `ckjoon.github.io`.

## Tech Stack

- **Vite** — build tool and dev server
- **React 19** — UI framework
- **Tailwind CSS v4** — utility-first styling (configured via `@tailwindcss/vite` plugin)
- **react-icons** — icon library (replaces Font Awesome CDN)

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally

## Architecture

- `index.html` — Vite entry point, mounts React at `#root`
- `src/main.jsx` — React root render
- `src/App.jsx` — top-level layout composing all section components
- `src/index.css` — Tailwind import + custom theme (colors, fonts)
- `src/components/` — one component per section: `Navbar`, `Hero`, `About`, `Education`, `Experience`, `Projects`, `Footer`
- `src/assets/` — images imported by components (Vite handles bundling)

## Tailwind Theme

Custom theme tokens defined in `src/index.css` via `@theme`:
- `--color-primary`, `--color-surface`, `--color-card`, `--color-border`, etc.
- Fonts: `Inter` (sans), `Playfair Display` (serif) loaded from Google Fonts

## Legacy Files

Old static site files remain in the repo root (`css/`, `js/`, `fonts/`, `image/`, `video/`, `yeeji.html`). These are not used by the Vite/React app but haven't been removed yet.

## Deployment

GitHub Pages deploys from `master`. For the Vite build output, GitHub Actions or a `gh-pages` branch workflow is needed to serve `dist/`.
