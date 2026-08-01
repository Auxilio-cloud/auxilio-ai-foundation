# CLAUDE.md

## Project Overview
Auxilio AI Foundation is the marketing and product platform for [auxilio.cloud](https://auxilio.cloud) — an AI-native development and consulting company. Built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. Deployed on Vercel.

## Build & Dev Commands
- `npm run dev` — Start Vite dev server with hot reload
- `npm run build` — Production build to `dist/`
- `npm run build:dev` — Development mode build
- `npm run lint` — Run ESLint
- `npm run preview` — Serve production build locally

## Git Workflow
1. Branch off current `main` — one short-lived branch per change, named for the work (e.g. `add-team-mark-abdul`)
2. Push that branch to `origin`
3. Create a PR from the branch → `main`
4. Merge the PR to deploy (Vercel auto-deploys from `main`), then delete the branch

Do not reuse the dated `backup*` branches as working branches — they are point-in-time
snapshots of `main`, not feature branches, and they fall behind quickly. To take a new
snapshot, branch from current `main` as `backupDDMMYY` and push it without opening a PR.

## Commit Style
- Use short, imperative subjects: "Add FAQ section", "Fix navbar scroll"
- Include a `Co-Authored-By: <model> <noreply@anthropic.com>` trailer on AI-assisted commits, naming the model that did the work
- Stage specific files — avoid `git add -A` or `git add .`

## PR Format
```
## Summary
- Bullet points describing changes

## Test plan
- [ ] Verification steps
```

## Coding Conventions
- 2-space indentation, double quotes, semicolons
- PascalCase for components (e.g. `HeroSection.tsx`)
- Default-export page components in `src/pages/`
- Use `@/` path alias for `src/` imports (configured in `tsconfig.json`)
- Tailwind CSS for all styling — keep utility classes in the component

## File Structure
```
src/
  pages/          — Route-level page components (default export)
  components/
    layout/       — Layout, Header, Footer
    home/         — Homepage section components
    ui/           — shadcn/ui primitives (DO NOT modify directly)
  hooks/          — Custom React hooks
  integrations/   — External service clients (Supabase)
  lib/            — Utilities (cn, SEO helpers, structured data)
  assets/         — Static assets (images)
public/           — Public static files (favicon, PDFs)
supabase/         — Supabase project config
```

## Do Not
- Modify files in `src/components/ui/` — these are managed by shadcn/ui
- Commit `.env` files — use `VITE_` prefix for env vars, document new ones
- Push directly to `main` — always go through a feature branch → PR

## Environment Variables
- Use `VITE_` prefix for all client-side env vars
- `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` are required for Supabase

## Key Dependencies
- React 18 + React Router 6 for routing
- @tanstack/react-query for server state
- react-hook-form + zod for form validation
- react-helmet-async for SEO meta tags
- lucide-react for icons
- sonner for toast notifications
