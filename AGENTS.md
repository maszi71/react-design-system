# Agent Notes

## Component Structure

Components are organized by folder and split by concern when helpful:

- `component.tsx` - render-only component
- `component.styles.ts` - CVA variants and class maps
- `component.types.ts` - props/types
- `component.hooks.ts` - optional logic hooks (only when needed)
- `component.stories.tsx` - Storybook

Keep simple components in fewer files; split only when it improves clarity.

## Current Components

- Button: styles/types split
- Tag: styles/types split
- Checkbox: styles/types/hooks split

## Styling Conventions

- Prefer tokens via Tailwind theme classes (e.g. `bg-primary`, `text-text`).
- Avoid hard-coded colors unless a token is missing.

## Storybook

- One playground story per component with inline-radio controls when practical.
- Use small inline SVGs for icon examples; keep them local to the story file.
