# Design System Onboarding Agenda

Use this document to onboard a new collaborator or assistant quickly.
Copy it, fill it in, and keep it updated as the system evolves.

## 1) Snapshot

- **What is this system?**
- **Who is it for?** (product teams, internal apps, public library)
- **Primary goals:** (consistency, speed, accessibility, theming)
- **Non-goals:** (what this system will not cover)

## 2) Current Status

- **Stage:** (prototype, alpha, beta, production)
- **What is done:** (components, tokens, themes)
- **In progress:** (current focus area)
- **Biggest risks:** (scope, tech debt, unknowns)

## 3) Key Decisions (Decision Log)

- **Styling approach:** (Tailwind v4 + CSS tokens)
- **Component pattern:** (CVA variants, forwardRef)
- **Theming approach:** (CSS variables + data-theme)
- **Folder structure:** (one component per folder)

Add date and rationale if it changes.

## 4) Design Tokens

- **Token categories:** color, spacing, typography, radius, shadow
- **Source of truth:** (CSS variables, JSON, Figma)
- **Naming rules:** (prefix, scale, semantic vs. primitive)
- **Theming strategy:** (light/dark, brand variants)

## 5) Components

- **Existing:** (list the current set)
- **Next up:** (short list of planned components)
- **Variant strategy:** (size, intent, tone)
- **Accessibility rules:** (focus, aria, keyboard)

## 6) Architecture Map

- `src/styles/index.css` - Tailwind theme mapping
- `src/styles/tokens/` - tokens and theme overrides
- `src/components/` - component folders
- `src/utils/cn.ts` - className helper

## 7) Workflow

- **How to add a component:** (steps)
- **How to add a token:** (steps)
- **Review checklist:** (type safety, a11y, tokens, docs)

## 8) Testing and QA

- **Current tests:** (none / unit / visual)
- **Planned tests:** (Storybook, Playwright, snapshots)
- **Manual checks:** (focus, contrast, themes)

## 9) Open Questions

- Branding and tone? (colors, fonts)
- Distribution? (library build, npm package)
- Doc site? (Storybook, custom)

## 10) Next Actions

- [ ] Define token naming conventions
- [ ] Add typography scale and spacing tokens
- [ ] Establish accessibility checklist
- [ ] Decide on docs approach
