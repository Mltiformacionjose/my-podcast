# Quickstart: My Podcast Website

**Feature**: `001-podcast-website`
**Purpose**: Validate the feature end-to-end after implementation.
**Contracts**: [routes.md](./contracts/routes.md) · [ui-components.md](./contracts/ui-components.md)
**Data model**: [data-model.md](./data-model.md)

## Prerequisites

- Node.js >= 20.9 (verified locally with 24.18.0).
- npm >= 10 (verified locally with 11.16.0).
- Modern browser (Chrome, Edge, Firefox or Safari, last two versions).
- No database, API key, environment variable or external account is required.

## Setup

```powershell
npm install
```

Expected: dependencies install without errors and no post-install network service is required.

## Run in development

```powershell
npm run dev
```

Expected: Next.js starts on `http://localhost:3000` and the three routes compile without errors.

## Build and quality gates

Run these before considering the feature complete:

```powershell
npx tsc --noEmit
npm run lint
npm run build
```

Expected:

- TypeScript reports no errors.
- ESLint reports no errors (warnings must be justified).
- The production build completes and lists `/`, `/episodios` and `/preguntas-frecuentes` as static
  routes.
- No `fetch`, route handler, database client or remote asset is involved.

Optional production preview:

```powershell
npm run start
```

## Validation Scenarios

### VS-1 — Landing page (User Story 1)

1. Open `http://localhost:3000/`.
2. Verify the header shows the podcast name, a logo mark and the navigation menu.
3. Verify the hero shows the podcast presentation, a featured visual and the button
   `"Descubrir episodios"`.
4. Verify the `"Episodios recientes"` section shows exactly 3 episode cards.
5. Verify the about section describes the podcast and its hosts.
6. Activate `"Descubrir episodios"`.

**Expected**: The browser navigates to `/episodios`. The page contains one `h1` and the sections in
the order defined in [routes.md](./contracts/routes.md).

### VS-2 — Navigation and active state

1. From any route, use the header menu to visit Inicio, Episodios and Preguntas frecuentes.
2. Verify each link reaches an existing page.
3. Verify the current route is visually marked and exposes `aria-current="page"`.
4. On a 360 px viewport, open and close the mobile menu with the toggle button.
5. Select a destination from the open mobile menu.

**Expected**: All links resolve, the active item is marked, the mobile menu closes after
navigation, and no route shows a 404.

### VS-3 — Episode catalog (User Story 2)

1. Open `/episodios`.
2. Count the episode cards.

**Expected**: Exactly 20 cards, ordered from episode 20 to episode 1.

3. Inspect any card.

**Expected**: It shows episode number, title, short description, cover, publication date,
duration and a `"Escuchar episodio N"` button.

4. Activate a listen button with the mouse and with the keyboard.

**Expected**: A visible message states that playback is not available in this demonstration. No
navigation, download or audio playback occurs.

5. Resize to 320 px.

**Expected**: The grid becomes one column and no horizontal scrollbar appears.

### VS-4 — FAQ (User Story 3)

1. Open `/preguntas-frecuentes`.
2. Verify there is at least one question about content, publishing frequency, where to listen and
   contact.
3. Expand a collapsed question with the mouse.

**Expected**: The answer appears, the chevron rotates and the open state is visible.

4. Collapse it again.

**Expected**: The answer hides.

5. Open two different questions.

**Expected**: Both remain open independently.

6. Navigate using only `Tab`, `Shift+Tab`, `Enter` and `Space`.

**Expected**: Every question is reachable, can be expanded and collapsed, and keeps a visible focus
indicator.

7. Activate the contact link.

**Expected**: The default mail client opens a message addressed to the simulated podcast email.

### VS-5 — Responsive layout

Check the three routes at widths 320, 768, 1024 and 1440 px (browser device toolbar or manual
resize).

**Expected**:

- No horizontal scrolling at any width.
- Text remains legible without zoom.
- Cards and headings do not overlap or clip.
- Navigation remains usable at 320 px.

### VS-6 — Accessibility smoke check

1. Use only the keyboard from the top of each page.

**Expected**: The skip link appears on first `Tab`, targets `#contenido` and all interactive
elements are reachable with a visible focus ring.

2. Check the document outline.

**Expected**: One `h1` per page and sequential heading levels.

3. Inspect the generated cover visuals.

**Expected**: Each cover exposes an accessible name via `role="img"` and `aria-label`.

4. Inspect body text contrast.

**Expected**: At least 4.5:1 against its background.

### VS-7 — Offline and external dependency check

1. Build the project and start the production preview.
2. Open DevTools → Network.
3. Reload each route and filter by third-party domains.

**Expected**: No requests to external domains. Fonts are system fonts and covers are generated
locally. The site remains usable without network access after the initial local load.

### VS-8 — 404 page

1. Open an unknown path such as `/ruta-inexistente`.

**Expected**: A friendly `"Página no encontrada"` page appears with working links to the three
primary routes and the shared header and footer.

## Acceptance Summary

| Spec criterion | Validation |
|----------------|------------|
| SC-001 | VS-1 steps 1–6 |
| SC-002 | VS-3 steps 1–3 |
| SC-003 | VS-4 steps 3–5 |
| SC-004 | VS-2 steps 1–2 |
| SC-005 | VS-5 |
| SC-006 | VS-4 step 6 and VS-6 step 1 |
| SC-007 | VS-6 step 4 |
| SC-008 | Visual comparison across VS-1, VS-3 and VS-4 |
| SC-009 | VS-2 step 2 and VS-8 |

## Troubleshooting

- **Port 3000 in use**: run `npm run dev -- -p 3001` and use the reported URL.
- **Missing styles**: confirm `src/app/globals.css` contains `@import "tailwindcss";` and
  `postcss.config.mjs` registers `@tailwindcss/postcss`.
- **Type errors on data**: verify exactly 20 unique episode numbers and the `CoverTheme` union.
- **FAQ does not open**: confirm each item renders a native `<details>` with a `<summary>`.
- **External font request**: remove any remote font import; the design uses system font stacks.
