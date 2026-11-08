# UI Contract: Routes

**Feature**: `001-podcast-website`
**Type**: Server-rendered, statically prerendered web routes
**Base path**: `/`

## Global shell contract

Every page shares the root layout and MUST provide:

- `<html lang="es">` and a unique `<title>` with the site name suffix.
- A skip link as the first focusable element, targeting `#contenido`.
- `SiteHeader` with the podcast brand (links to `/`) and `NavigationMenu`.
- `<main id="contenido">` as the single main landmark.
- `SiteFooter` with contact information and a navigation shortcut.
- Consistent design tokens: background, ink, accent, typography, spacing and focus ring.

## Navigation contract

| Label | Target | Active indication |
|-------|--------|-------------------|
| Inicio | `/` | `aria-current="page"` + visual accent |
| Episodios | `/episodios` | `aria-current="page"` + visual accent |
| Preguntas frecuentes | `/preguntas-frecuentes` | `aria-current="page"` + visual accent |

The brand also links to `/`. No navigation item may point to a nonexistent route.

## Route: `/` — Página principal

**File**: `src/app/page.tsx`
**Page title**: `My Podcast — Historias que se escuchan`
**Purpose**: Present the podcast and drive users to the episode catalog.

Required content, in order:

1. `HeroSection`
   - Podcast name and tagline.
   - `shortDescription`.
   - Featured visual (`EpisodeCover`-style composition or dedicated hero art).
   - Primary `ButtonLink` labeled `"Descubrir episodios"` targeting `/episodios`.
2. `RecentEpisodesSection`
   - Heading `"Episodios recientes"`.
   - Exactly 3 recent episodes rendered with `EpisodeCard`.
   - Link to `/episodios` labeled `"Ver todos los episodios"`.
3. `AboutSection`
   - Heading about the podcast.
   - `longDescription` and host names.
   - Contact call to action using `contactEmail`.

**Acceptance**:

- CTA navigates to `/episodios`.
- Recent episodes match `getRecentEpisodes(3)`.
- All sections appear without horizontal scrolling at 320 px.

## Route: `/episodios` — Catálogo

**File**: `src/app/episodios/page.tsx`
**Page title**: `Episodios — My Podcast`
**Purpose**: Show the complete catalog of 20 episodes.

Required content:

- Page hero with heading `"Todos los episodios"` and a short introductory sentence.
- `EpisodeGrid` with exactly 20 `EpisodeCard` items from `getEpisodes()`.
- Order: episode 20 first, episode 1 last.
- Each card exposes: number, title, summary, cover, formatted date, formatted duration and
  `ListenButton`.
- `ListenButton` activation shows a visible demo notice in an `aria-live="polite"` region.

**Acceptance**:

- The DOM contains exactly 20 episode cards.
- Every card contains all seven required elements.
- No card link or action is broken or silent.

## Route: `/preguntas-frecuentes` — FAQ

**File**: `src/app/preguntas-frecuentes/page.tsx`
**Page title**: `Preguntas frecuentes — My Podcast`
**Purpose**: Resolve audience questions with an accessible accordion.

Required content:

- Page hero with heading `"Preguntas frecuentes"` and a short introductory sentence.
- `FaqAccordion` with 8 `FaqItem` entries grouped by the four topics.
- Each item uses native `<details>` and `<summary>`.
- The contact answer includes a `mailto:` link to `contactEmail`.
- Optional contact card at the end with the same email.

**Acceptance**:

- At least one question per topic: content, frequency, where to listen, contact.
- Every item expands and collapses independently with pointer and keyboard.
- The open state is visible and announced by assistive technology.

## Route: not found

**File**: `src/app/not-found.tsx`
**Purpose**: Keep navigation usable for unknown paths.

Required content:

- Clear `"Página no encontrada"` message.
- Links to `/`, `/episodios` and `/preguntas-frecuentes`.
- Same header, footer and design tokens as the rest of the site.
