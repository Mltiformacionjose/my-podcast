# Implementation Plan: My Podcast Website

**Branch**: `001-podcast-website` | **Date**: 2026-11-08 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-podcast-website/spec.md`

## Summary

Construir un sitio web estático en español para "My Podcast" con tres rutas: página principal,
catálogo de 20 episodios y preguntas frecuentes. La implementación usa Next.js 16 con App Router,
TypeScript en modo estricto y Tailwind CSS 4 con tokens de diseño propios. El contenido vive en
módulos tipados de datos simulados, consumidos por componentes de presentación reutilizables. Las
preguntas frecuentes usan el elemento nativo `details`/`summary` para un despliegue accesible sin
estado adicional, y el botón de escucha comunica el estado de demostración mediante un componente
cliente con región `aria-live`. Todas las páginas se prerenderizan; no hay base de datos, API
externa, fuente remota ni petición de red en tiempo de ejecución. La validación se apoya en
TypeScript, ESLint, build de producción y una guía de comprobación manual.

## Technical Context

**Language/Version**: TypeScript 5.x (mínimo 5.1 requerido por Next.js 16) sobre Node.js 24.18.0
(entorno local; Next.js 16 requiere >= 20.9).

**Primary Dependencies**: Next.js 16.4.5 (App Router, Turbopack), React 19.3 y React DOM 19.3,
Tailwind CSS 4.3.5 mediante `@tailwindcss/postcss`. Sin dependencias de UI, estado, datos o
servicios en tiempo de ejecución.

**Storage**: Ninguno. Datos simulados en módulos TypeScript estáticos dentro de `src/data/`.

**Testing**: Sin framework de pruebas automatizadas en la v1. Verificación obligatoria con
`npx tsc --noEmit`, `npm run lint`, `npm run build` y los escenarios funcionales de
[quickstart.md](./quickstart.md). Playwright podrá añadirse si se requiere cobertura de regresión.

**Target Platform**: Aplicación web en navegadores modernos (Chrome, Edge, Firefox y Safari, dos
últimas versiones). Renderizado estático generado por Next.js y desplegable en cualquier hosting
Node.js o estático.

**Project Type**: Aplicación web de un solo proyecto, solo frontend.

**Performance Goals**: LCP < 2.5 s en conexión 4G; CLS < 0.1; HTML prerenderizado para las tres
rutas; JavaScript cliente limitado a navegación activa, menú móvil y feedback de escucha; cero
peticiones a dominios externos en ejecución.

**Constraints**: Sin bases de datos, APIs ni servicios externos; sin reproducción real de audio;
exactamente 20 episodios; WCAG 2.1 AA; mobile-first de 320 px a 1440 px y superior; fuentes del
sistema y portadas generadas localmente para garantizar funcionamiento autónomo y sin descargas de
recursos remotos.

**Scale/Scope**: 3 rutas públicas, 20 episodios, 8 preguntas frecuentes, un único idioma (español),
contenido estático sin autenticación, búsqueda, filtros ni paginación.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principio / requisito | Cumplimiento | Evidencia en el plan |
|-----------------------|--------------|----------------------|
| I. Next.js como framework principal | PASS | Next.js 16 con App Router; sin router paralelo. |
| II. TypeScript obligatorio | PASS | `strict: true`; tipos en `src/types/`; sin `any` injustificado. |
| III. Componentes reutilizables | PASS | Componentes por responsabilidad en `src/components/`; `EpisodeCard`, `FaqItem` y primitivas UI. |
| IV. Estructura limpia y organizada | PASS | Separación `app/`, `components/`, `data/`, `lib/`, `types/`. |
| V. Interfaz moderna, elegante y profesional | PASS | Tokens de diseño Tailwind, tipografía editorial, estados interactivos definidos. |
| VI. Diseño responsive | PASS | Enfoque mobile-first, breakpoints probados de 320 a 1440 px. |
| VII. Datos simulados | PASS | `src/data/` como fuente única; selectores en `src/lib/`; componentes desacoplados. |
| VIII. Sin BD ni servicios externos | PASS | Sin API, base de datos, fuentes remotas ni peticiones de red en runtime. |
| IX. Accesibilidad y usabilidad | PASS | Landmarks, skip link, `aria-current`, `details`/`summary`, foco visible, contraste AA. |
| X. Nombres claros y descriptivos | PASS | Identificadores de código en inglés descriptivo; textos y rutas en español. |
| Calidad: compilación sin errores | PASS | Gates `tsc`, lint y build de producción. |
| Calidad: identidad visual coherente | PASS | Layout compartido y tokens únicos para las tres rutas. |

**Post-design re-check**: PASS. El diseño de datos, contratos y estructura no introduce
dependencias externas ni viola ningún principio. No se requieren excepciones.

## Project Structure

### Documentation (this feature)

```text
specs/001-podcast-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/
│   ├── routes.md        # Route-level UI contract
│   └── ui-components.md # Component props and behavior contract
├── checklists/
│   └── requirements.md  # From /speckit.specify
└── tasks.md             # Phase 2 output (/speckit.tasks - not created here)
```

### Source Code (repository root)

```text
my-podcast/
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── public/
│   └── favicon.svg
└── src/
    ├── app/
    │   ├── layout.tsx                  # Root layout: metadata, header, footer
    │   ├── page.tsx                    # Route: /
    │   ├── globals.css                 # Tailwind import + design tokens
    │   ├── not-found.tsx               # Friendly 404 with navigation
    │   ├── episodios/
    │   │   └── page.tsx                # Route: /episodios
    │   └── preguntas-frecuentes/
    │       └── page.tsx                # Route: /preguntas-frecuentes
    ├── components/
    │   ├── layout/
    │   │   ├── SiteHeader.tsx          # Brand + navigation shell
    │   │   ├── NavigationMenu.tsx      # Client: active link, mobile menu
    │   │   ├── SiteFooter.tsx
    │   │   └── SkipLink.tsx
    │   ├── home/
    │   │   ├── HeroSection.tsx
    │   │   ├── RecentEpisodesSection.tsx
    │   │   └── AboutSection.tsx
    │   ├── episodes/
    │   │   ├── EpisodeCard.tsx
    │   │   ├── EpisodeCover.tsx
    │   │   ├── EpisodeGrid.tsx
    │   │   └── ListenButton.tsx        # Client: demo feedback
    │   ├── faq/
    │   │   ├── FaqAccordion.tsx
    │   │   └── FaqItem.tsx
    │   └── ui/
    │       ├── Container.tsx
    │       ├── SectionHeading.tsx
    │       ├── ButtonLink.tsx
    │       └── Tag.tsx
    ├── data/
    │   ├── podcast.ts
    │   ├── episodes.ts                 # Exactly 20 typed episodes
    │   └── faqs.ts                     # 8 items across 4 topics
    ├── lib/
    │   ├── episodes.ts                 # getEpisodes, getRecentEpisodes
    │   └── format.ts                   # formatDate, formatDuration
    └── types/
        ├── episode.ts
        ├── podcast.ts
        └── faq.ts
```

**Structure Decision**: Proyecto único con `src/` y App Router. Las rutas viven exclusivamente en
`src/app/`; la interfaz reutilizable en `src/components/` agrupada por dominio (`layout`, `home`,
`episodes`, `faq`, `ui`); los datos simulados en `src/data/`; la lógica de selección y formato en
`src/lib/`; los tipos compartidos en `src/types/`. No se usa carpeta `tests/` porque la v1 valida
con compilación, lint, build y el recorrido manual de `quickstart.md`.

## Complexity Tracking

> No hay violaciones constitucionales ni excepciones de complejidad que justificar.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
