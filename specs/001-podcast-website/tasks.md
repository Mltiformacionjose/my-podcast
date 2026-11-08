# Tasks: My Podcast Website

**Input**: Design documents from `/specs/001-podcast-website/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No automated test framework was requested. Validation tasks use the manual, runnable
scenarios defined in `quickstart.md`; no test files are generated in this phase.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing
of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Every task includes an exact file path

## Path Conventions

- Single project with `src/` at repository root, per `plan.md`
- Routes: `src/app/`
- Components: `src/components/`
- Mock data: `src/data/`
- Selectors and formatters: `src/lib/`
- Types: `src/types/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Next.js project and its tooling on the existing repository root
without `create-next-app` (the root already contains `.specify/` and `.opencode/`).

- [X] T001 Initialize `package.json` at repository root with Next.js 16.4.5, React 19.3.x, React DOM 19.3.x, TypeScript 5.x, Tailwind CSS 4.3.5, `@tailwindcss/postcss`, ESLint and `eslint-config-next`; add `dev`, `build`, `start` and `lint` scripts.
- [X] T002 Create `tsconfig.json` with `strict: true`, `noUncheckedIndexedAccess: true`, `moduleResolution: "bundler"`, the Next.js plugin and the `@/*` path alias mapped to `./src/*`.
- [X] T003 [P] Create `next.config.ts` with a typed `NextConfig`, `reactStrictMode: true` and no remote image patterns.
- [X] T004 [P] Create `postcss.config.mjs` registering `@tailwindcss/postcss`.
- [X] T005 [P] Create `eslint.config.mjs` using the Next.js flat configuration with Core Web Vitals and TypeScript rules.
- [X] T006 [P] Create `.gitignore` covering `node_modules/`, `.next/`, `out/`, `.env*`, build logs and OS files.
- [X] T007 [P] Create `public/favicon.svg` as a local brand mark with the podcast initials and no external references.
- [X] T008 Create `src/app/globals.css` with `@import "tailwindcss";`, `@theme` tokens for warm ivory background, near-black ink, terracotta accent, system serif/sans font stacks, radii and shadows, plus base `body`, `:focus-visible`, selection and `prefers-reduced-motion` rules.
- [X] T009 Run `npm install` at repository root and confirm dependencies resolve without errors.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Types, mock data, shared components and the root shell that every user story requires.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T010 Create `src/types/podcast.ts` with `Podcast`: `name`, `tagline`, `shortDescription`, `longDescription`, `hostNames: string[]`, `contactEmail`.
- [X] T011 [P] Create `src/types/episode.ts` with `CoverTheme` (`terracotta`, `olive`, `navy`, `plum`, `amber`, `teal`) and `Episode`: `id`, `number`, `title`, `summary`, `publishedAt`, `durationMinutes`, `coverTheme`.
- [X] T012 [P] Create `src/types/faq.ts` with `FaqTopic` (`contenido`, `frecuencia`, `donde-escuchar`, `contacto`) and `FaqItem`: `id`, `question`, `answer`, `topic`.
- [X] T013 Create `src/data/podcast.ts` with a `Podcast` fixture: name `"My Podcast"`, tagline of 20–80 characters, short description of 80–220 characters, long description of 200–600 characters, at least one unique host name and contact email `hola@mypodcast.example`.
- [X] T014 Create `src/data/episodes.ts` with exactly 20 `Episode` records: unique `id` in `episodio-01`–`episodio-20` format, unique integer `number` covering 1–20 without gaps, title 10–80 characters, summary 60–200 characters, valid non-future ISO `YYYY-MM-DD` date coherent with descending order, duration 15–120 minutes and a valid `coverTheme`.
- [X] T015 Create `src/data/faqs.ts` with exactly 8 `FaqItem` records: two per topic (`contenido`, `frecuencia`, `donde-escuchar`, `contacto`), unique kebab-case `id`, question 15–120 characters ending in `?`, answer 80–400 characters and the contact answers including `hola@mypodcast.example`.
- [X] T016 [P] Create `src/lib/format.ts` with `formatDate` using `Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" })` and `formatDuration` returning labels such as `"42 min"`.
- [X] T017 Create `src/lib/episodes.ts` with `getEpisodes()` sorted by `number` descending, `getRecentEpisodes(limit = 3)` and `getEpisodeById(id)`, all pure and free of network or storage access.
- [X] T018 [P] Create `src/components/ui/Container.tsx`: max-width wrapper with responsive horizontal padding and optional `className`.
- [X] T019 [P] Create `src/components/ui/SectionHeading.tsx`: optional eyebrow, required title rendered as `h2` by default, optional description and anchor `id`.
- [X] T020 [P] Create `src/components/ui/ButtonLink.tsx`: `primary`, `secondary` and `ghost` variants, Next.js `Link` for internal routes, minimum 44×44 px target and visible focus ring.
- [X] T021 [P] Create `src/components/ui/Tag.tsx`: neutral and accent tones for topic and metadata labels.
- [X] T022 Create `src/components/episodes/EpisodeCover.tsx`: local CSS gradient cover with `role="img"`, `aria-label="Portada del episodio {number}: {title}"`, fixed aspect ratio and `terracotta` fallback theme.
- [X] T023 [P] Create `src/components/episodes/ListenButton.tsx` as a client component: label `"Escuchar episodio {number}"`, visible focus, and an `aria-live="polite"` notice `"La reproducción no está disponible en esta demostración."` on activation.
- [X] T024 Create `src/components/episodes/EpisodeCard.tsx`: semantic `article` rendering number, title, summary, `EpisodeCover`, formatted date, formatted duration and `ListenButton`; layout must survive long titles and summaries.
- [X] T025 [P] Create `src/components/layout/SkipLink.tsx` targeting `#contenido`, visually hidden until focused.
- [X] T026 [P] Create `src/components/layout/NavigationMenu.tsx` as a client component: `items` prop, `usePathname` active state with `aria-current="page"`, mobile toggle with `aria-expanded`/`aria-controls` and close-on-navigate behavior.
- [X] T027 Create `src/components/layout/SiteHeader.tsx` with the brand link to `/` and `NavigationMenu` using Inicio, Episodios and Preguntas frecuentes.
- [X] T028 [P] Create `src/components/layout/SiteFooter.tsx` with podcast name, `mailto:` contact and the three primary links.
- [X] T029 Create `src/app/layout.tsx` with `lang="es"`, metadata title template and description, favicon reference, `SkipLink`, `SiteHeader`, `<main id="contenido">` and `SiteFooter`.
- [X] T030 [P] Create `src/app/not-found.tsx` with a `"Página no encontrada"` message and working links to `/`, `/episodios` and `/preguntas-frecuentes`.
- [X] T031 Run `npx tsc --noEmit` and `npm run lint`; fix all errors in the foundational files before starting any user story.

**Checkpoint**: Foundation ready. Types, data, shared components and the root shell compile and lint
cleanly.

---

## Phase 3: User Story 1 - Descubrir el podcast desde la página principal (Priority: P1) 🎯 MVP

**Goal**: Deliver a landing page that presents the podcast, showcases three recent episodes and
drives visitors to the catalog.

**Independent Test**: Complete VS-1 in `quickstart.md`: open `/`, confirm header, navigation, hero,
featured visual, CTA, three recent episodes and about section; activate the CTA and reach
`/episodios`.

### Implementation for User Story 1

- [X] T032 [P] [US1] Create `src/components/home/HeroSection.tsx` with the single page `h1`, tagline, short description, featured visual and a `ButtonLink` labeled `"Descubrir episodios"` targeting `/episodios`.
- [X] T033 [P] [US1] Create `src/components/home/AboutSection.tsx` with an `h2`, long description, host names and a `mailto:` contact call to action.
- [X] T034 [US1] Create `src/components/home/RecentEpisodesSection.tsx` with `SectionHeading`, exactly three `EpisodeCard` items received via props and a `"Ver todos los episodios"` link to `/episodios`.
- [X] T035 [US1] Create `src/app/page.tsx` with page metadata (`My Podcast — Historias que se escuchan` plus description), `getRecentEpisodes(3)` and the `HeroSection` → `RecentEpisodesSection` → `AboutSection` composition.
- [X] T036 [US1] Validate User Story 1 by running VS-1 from `quickstart.md`; confirm the CTA navigates to `/episodios` and record the result.

**Checkpoint**: User Story 1 is fully functional and testable independently; this is the MVP.

---

## Phase 4: User Story 2 - Explorar el catálogo de 20 episodios (Priority: P2)

**Goal**: Deliver the complete catalog with exactly 20 episode cards, ordered newest to oldest.

**Independent Test**: Complete VS-3 in `quickstart.md`: open `/episodios`, count exactly 20 cards,
verify all seven card elements, activate a listen button and confirm the demo notice.

### Implementation for User Story 2

- [X] T037 [P] [US2] Create `src/components/episodes/EpisodeGrid.tsx` with a responsive 1-column mobile, 2-column tablet and 3-column desktop layout that renders one `EpisodeCard` per item without reordering.
- [X] T038 [US2] Create `src/app/episodios/page.tsx` with metadata (`Episodios — My Podcast`), an introductory hero, `getEpisodes()` and `EpisodeGrid`; the rendered result must contain exactly 20 cards from episode 20 to episode 1.
- [X] T039 [US2] Validate User Story 2 by running VS-3 from `quickstart.md`; confirm the 20-card count, seven required elements per card and visible listen feedback, then record the result.

**Checkpoint**: User Stories 1 and 2 work independently and together.

---

## Phase 5: User Story 3 - Resolver dudas en las preguntas frecuentes (Priority: P3)

**Goal**: Deliver an accessible FAQ page with eight questions across the four required topics.

**Independent Test**: Complete VS-4 in `quickstart.md`: open `/preguntas-frecuentes`, confirm one
question per topic, expand and collapse items with pointer and keyboard, and verify the contact
channel.

### Implementation for User Story 3

- [X] T040 [P] [US3] Create `src/components/faq/FaqItem.tsx` using native `<details>` and `<summary>`, a chevron that rotates when open, `prefers-reduced-motion` support and a `mailto:` link in contact answers.
- [X] T041 [US3] Create `src/components/faq/FaqAccordion.tsx` that groups `FaqItem` entries by topic in the order `contenido`, `frecuencia`, `donde-escuchar`, `contacto`, with a visible heading per group and independent open state.
- [X] T042 [US3] Create `src/app/preguntas-frecuentes/page.tsx` with metadata (`Preguntas frecuentes — My Podcast`), an introductory hero, `FaqAccordion` fed by `src/data/faqs.ts` and a contact card using `hola@mypodcast.example`.
- [X] T043 [US3] Validate User Story 3 by running VS-4 from `quickstart.md`; confirm topic coverage, independent expand/collapse, keyboard operation and the contact link, then record the result.

**Checkpoint**: All three user stories are independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality gates and consistency checks across all stories.

- [X] T044 Perform the responsive audit from VS-5 at 320, 768, 1024 and 1440 px across `src/app/page.tsx`, `src/app/episodios/page.tsx` and `src/app/preguntas-frecuentes/page.tsx`; fix overflow, clipping or unreadable text in the relevant components.
- [X] T045 Perform the accessibility audit from VS-6: skip link, visible focus, `aria-current`, native `details` behavior, cover `aria-label`, one `h1` per page, heading order and 4.5:1 body contrast; fix issues in `src/components/` and `src/app/globals.css`.
- [X] T046 [P] Create `README.md` with the stack, folder structure, available scripts, mock-data explanation and a link to `specs/001-podcast-website/quickstart.md`.
- [X] T047 Run the quality gates `npx tsc --noEmit`, `npm run lint` and `npm run build`; fix all errors and confirm `/`, `/episodios` and `/preguntas-frecuentes` are prerendered.
- [X] T048 Run all scenarios VS-1 through VS-8 from `quickstart.md`, including the external-network check and the 404 page, and record the final validation result.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; start immediately.
- **Foundational (Phase 2)**: Depends on Setup; blocks all user stories.
- **User Stories (Phase 3–5)**: Depend on Phase 2. They can run in parallel or sequentially in
  priority order (US1 → US2 → US3).
- **Polish (Phase 6)**: Depends on the user stories selected for delivery.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Phase 2; no dependency on US2 or US3.
- **User Story 2 (P2)**: Starts after Phase 2; uses shared `EpisodeCard` from Phase 2, so it does not
  depend on US1.
- **User Story 3 (P3)**: Starts after Phase 2; independent of US1 and US2.

### Key Within-Phase Dependencies

- T013–T015 depend on T010–T012; T017 depends on T014; T024 depends on T016, T022 and T023.
- T027 depends on T026; T029 depends on T025, T027 and T028.
- US1: T034 depends on T024; T035 depends on T032–T034; T036 depends on T035.
- US2: T038 depends on T037; T039 depends on T038.
- US3: T041 depends on T040; T042 depends on T041; T043 depends on T042.

### Parallel Opportunities

- Setup: T003–T007 can run together after T002.
- Foundational: types T010–T012 in parallel; then data T013–T015 in parallel; T016–T017 in parallel;
  UI primitives T018–T021 in parallel; T023, T025, T026, T028 and T030 in parallel once their
  direct dependencies exist.
- US1: T032 and T033 in parallel.
- US2: T037 can start as soon as Phase 2 is complete.
- US3: T040 can start as soon as Phase 2 is complete.
- Across stories: after T031, one developer can take US1, another US2 and another US3.
- Polish: T046 can run alongside T044 and T045.

---

## Parallel Example: User Story 1

```bash
# Launch the independent landing sections together:
Task: "Create src/components/home/HeroSection.tsx"
Task: "Create src/components/home/AboutSection.tsx"

# Then compose them once RecentEpisodesSection exists:
Task: "Create src/app/page.tsx"
```

## Parallel Example: Foundational Types and Data

```bash
# Types first:
Task: "Create src/types/podcast.ts"
Task: "Create src/types/episode.ts"
Task: "Create src/types/faq.ts"

# Then mock data in parallel:
Task: "Create src/data/podcast.ts"
Task: "Create src/data/episodes.ts"
Task: "Create src/data/faqs.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational (blocks all stories).
3. Complete Phase 3: User Story 1.
4. Stop and run VS-1 from `quickstart.md`.
5. Demo the landing page and CTA.

### Incremental Delivery

1. Setup + Foundational → foundation ready.
2. Add US1 → validate VS-1 → demo (MVP).
3. Add US2 → validate VS-3 → demo the 20-episode catalog.
4. Add US3 → validate VS-4 → demo the FAQ.
5. Polish → run VS-5 through VS-8 and the build gates.

### Parallel Team Strategy

1. Team completes Setup + Foundational together.
2. Once Phase 2 is complete:
   - Developer A: US1 landing page.
   - Developer B: US2 episode catalog.
   - Developer C: US3 FAQ page.
3. Integrate, then run the polish audits and quality gates.

---

## Notes

- `[P]` tasks touch different files and can run concurrently.
- `[US1]`, `[US2]` and `[US3]` map directly to the three user stories in `spec.md`.
- Every task is independently executable with the design documents under
  `specs/001-podcast-website/`.
- No test files are generated because no automated test framework was requested; manual validation
  is mandatory at each checkpoint.
- Commit after each phase or logical group.
- Do not introduce external services, remote fonts, remote images, databases or audio files.
