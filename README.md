# React Design System

A React + TypeScript design system sandbox focused on tokens, themes, and
component ergonomics.

## Goals

- Build a reusable UI foundation with clear tokens and theme support.
- Keep components composable, typed, and easy to theme.
- Document conventions so new contributors can move fast.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- class-variance-authority + tailwind-merge for variants

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

- `src/components/` - Components, one folder per component
- `src/styles/` - Global styles and tokens
- `src/styles/tokens/` - Design tokens and themes
- `src/utils/cn.ts` - className utility

## Design Tokens

Tokens live as CSS variables in `src/styles/tokens/tokens.css` and are mapped
into Tailwind via `src/styles/index.css`. Theme overrides are in
`src/styles/tokens/themes.css`.

Example tokens:

- `--ds-bg`, `--ds-text`, `--ds-border`
- `--ds-primary`, `--ds-primary-hover`, `--ds-primary-active`

## Themes

The default theme is defined in `:root` in `src/styles/tokens/tokens.css`.
Dark theme values are applied via `data-theme="dark"` in
`src/styles/tokens/themes.css`.

```ts
document.documentElement.setAttribute("data-theme", "dark");
```

## Components

Components use variants via `class-variance-authority`. Example button:

```tsx
import { Button } from "@/components/button";

<Button variant="secondary">Secondary</Button>;
```

## Conventions

- One component per folder with `index.ts` re-export.
- Variants live next to the component using CVA.
- Tokens first, hard-coded values last resort.

## Scripts

- `npm run dev` - local dev server
- `npm run build` - typecheck + build
- `npm run lint` - lint
- `npm run preview` - preview build

## Next Docs

- `AGENDA.md` contains a reusable onboarding template.
