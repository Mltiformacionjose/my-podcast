# UI Contract: Components

**Feature**: `001-podcast-website`
**Scope**: Reusable React components under `src/components/`
**Rule**: Presentational components receive typed props and never import mock data directly.

## Layout components

### `SiteHeader`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| — | — | — | Renders brand link to `/` and `NavigationMenu`. Sticky optional. |

### `NavigationMenu` (client)

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `items` | `NavigationItem[]` | Yes | Label + href pairs. |

- Marks the active route with `aria-current="page"`.
- Mobile: toggle button with `aria-expanded` and `aria-controls`; closes after navigation.
- Keyboard: all controls reachable; visible focus ring.

### `SkipLink`

- Targets `#contenido`.
- Visually hidden until focused.

### `SiteFooter`

- Displays podcast name, contact email and the three primary links.
- No external social links in v1.

## UI primitives

### `Container`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `children` | `ReactNode` | Yes | Max-width wrapper with responsive horizontal padding. |
| `className` | `string` | No | Additional layout classes. |

### `SectionHeading`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `eyebrow` | `string` | No | Small uppercase context label. |
| `title` | `string` | Yes | Section heading (`h2` by default). |
| `description` | `string` | No | Supporting paragraph. |
| `id` | `string` | No | Anchor target and `aria-labelledby` source. |

### `ButtonLink`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `href` | `string` | Yes | Internal route or `mailto:`/anchor. |
| `variant` | `"primary" \| "secondary" \| "ghost"` | No | Visual emphasis; default `primary`. |
| `children` | `ReactNode` | Yes | Visible label. |

- Renders a Next.js `Link` for internal routes.
- Minimum 44×44 px touch target.
- Visible `:focus-visible` ring; no icon-only usage.

### `Tag`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `children` | `ReactNode` | Yes | Short label, for example the FAQ topic. |
| `tone` | `"neutral" \| "accent"` | No | Color treatment. |

## Episode components

### `EpisodeCover`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `number` | `number` | Yes | Large episode number. |
| `title` | `string` | Yes | Used in the accessible label and secondary text. |
| `theme` | `CoverTheme` | No | Palette; defaults to `terracotta`. |
| `size` | `"card" \| "hero"` | No | Aspect and typography scale; default `card`. |

- Renders a `<div role="img">` with `aria-label="Portada del episodio {number}: {title}"`.
- Generated locally with CSS gradients; never fetches an image.
- Preserves aspect ratio to avoid layout shift.

### `EpisodeCard`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `episode` | `Episode` | Yes | Typed episode record. |
| `priority` | `boolean` | No | Optional emphasis for above-the-fold cards. |

Required rendered elements:

1. Episode number.
2. Title (heading level coherent with page hierarchy).
3. Summary.
4. `EpisodeCover`.
5. Publication date from `formatDate`.
6. Duration from `formatDuration`.
7. `ListenButton`.

- Card layout must not break with long titles or summaries.
- Uses semantic `<article>`.

### `EpisodeGrid`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `episodes` | `Episode[]` | Yes | Ordered list of episodes. |

- Responsive grid: 1 column mobile, 2 tablet, 3 desktop.
- Renders one `EpisodeCard` per item; no internal sorting.

### `ListenButton` (client)

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `episodeNumber` | `number` | Yes | Included in the accessible name. |
| `episodeTitle` | `string` | Yes | Included in the announcement context. |

- Button label: `"Escuchar episodio {number}"`.
- On activation: displays `"La reproducción no está disponible en esta demostración."` in an
  `aria-live="polite"` region.
- Does not navigate, fetch, or play audio.
- Remains keyboard operable and clearly focusable.

## Home components

### `HeroSection`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `podcast` | `Podcast` | Yes | Name, tagline and short description. |

- Renders one `h1` for the page.
- Contains the primary CTA to `/episodios`.
- Includes the featured visual.

### `RecentEpisodesSection`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `episodes` | `Episode[]` | Yes | Exactly the 3 most recent episodes. |

- Shows `SectionHeading`, 3 `EpisodeCard`s and a link to the full catalog.

### `AboutSection`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `podcast` | `Podcast` | Yes | Long description, hosts and contact. |

- Uses a single `h2` and readable measure.
- Contact link uses `mailto:`.

## FAQ components

### `FaqAccordion`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `items` | `FaqItem[]` | Yes | Ordered FAQ entries. |

- Groups entries by topic with visible headings.
- Renders `FaqItem` for each entry.
- Allows multiple items open simultaneously.

### `FaqItem`

| Prop | Type | Required | Behavior |
|------|------|----------|----------|
| `item` | `FaqItem` | Yes | Question, answer and topic. |

- Uses native `<details>` and `<summary>`.
- `<summary>` is the question and contains a visible chevron that rotates when open.
- Answer content is plain text except for the contact `mailto:` link.
- Open state is communicated by the native element and the visual chevron.
- Respects `prefers-reduced-motion` for the chevron transition.

## Shared behavior and accessibility

- Every interactive element has a visible `:focus-visible` style.
- Touch targets are at least 44×44 px.
- Headings follow one `h1` per page and sequential levels.
- No component imports from `src/data`; data arrives through props or `src/lib` selectors at page
  level.
- No component performs network requests or reads browser storage.
