# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React + TypeScript app. Route-level pages live in `src/pages/` (e.g., `Index.tsx`, `Blog.tsx`).
- Shared UI components live in `src/components/`, with layout chrome in `src/components/layout/` and home sections in `src/components/home/`.
- UI primitives (shadcn/ui + Radix wrappers) live in `src/components/ui/`.
- Assets are in `src/assets/`; public static files are in `public/`.
- Entry points and global styles are `src/main.tsx`, `src/App.tsx`, and `src/index.css`.
- Supabase wiring is in `src/integrations/supabase/`; local Supabase config is in `supabase/`.

## Build, Test, and Development Commands
- `npm run dev`: start the Vite dev server with hot reload.
- `npm run build`: generate a production build in `dist/`.
- `npm run build:dev`: build with development mode flags.
- `npm run preview`: serve the production build locally.
- `npm run lint`: run ESLint across the project.

## Coding Style & Naming Conventions
- Follow existing formatting: 2-space indentation, double quotes, semicolons.
- Use PascalCase for components (e.g., `HeroSection`) and default-export pages in `src/pages/`.
- Use the `@/` alias for `src/` imports (see `tsconfig.json`).
- Tailwind CSS is used for styling; keep utility classes in the component where they apply.

## Testing Guidelines
- No test runner is configured yet in this repo. If you add tests, document the tool (e.g., Vitest) and use a consistent pattern like `*.test.tsx` or `__tests__/`.

## Commit & Pull Request Guidelines
- Recent history mixes terse messages ("Changes") and imperative commits ("Add testimonials..."); no strict convention.
- Prefer short, imperative commit subjects ("Add FAQ section", "Fix navbar scroll").
- Pull requests should include a clear summary, list of changes, and screenshots for UI updates.

## Configuration & Environment Notes
- Key config: `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `eslint.config.js`.
- If you add env vars, document them and use Vite’s `VITE_` prefix.
