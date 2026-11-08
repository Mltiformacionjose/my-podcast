# My Podcast

Sitio web de podcast construido con Next.js App Router. Incluye una página de inicio en español,
un catálogo de 20 episodios simulados y una página de preguntas frecuentes con acordeón accesible.

## Stack

- **Next.js 16.4.5** con App Router y Turbopack
- **React 19.3** y **TypeScript 5.9** en modo estricto
- **Tailwind CSS 4.3** mediante `@tailwindcss/postcss`
- **ESLint 9** con `eslint-config-next`
- Fuentes del sistema y portadas generadas con gradientes CSS locales

No usa base de datos, API externa, servicios en tiempo de ejecución, fuentes remotas, imágenes
remotas ni archivos de audio reales.

## Requisitos

- Node.js >= 20.9 (verificado con 24.18.0)
- npm >= 10

## Scripts

```powershell
npm install      # instala dependencias
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # compilación de producción
npm run start    # vista previa de producción
npm run lint     # ESLint
npx tsc --noEmit # comprobación de tipos
```

## Rutas

| Ruta | Contenido |
|------|-----------|
| `/` | Presentación, tres episodios recientes y sección sobre el podcast |
| `/episodios` | Catálogo completo de 20 episodios, del más reciente al más antiguo |
| `/preguntas-frecuentes` | 8 preguntas agrupadas en contenido, frecuencia, dónde escuchar y contacto |
| Cualquier otra ruta | Página 404 con enlaces a las tres rutas principales |

## Estructura

```text
src/
├─ app/                    # Rutas y layout raíz
│  ├─ layout.tsx           # Shell, metadatos, cabecera y pie
│  ├─ page.tsx             # Página de inicio
│  ├─ episodios/page.tsx   # Catálogo
│  ├─ preguntas-frecuentes/page.tsx
│  ├─ not-found.tsx        # 404
│  └─ globals.css          # Tailwind y tokens de diseño
├─ components/
│  ├─ episodes/            # EpisodeCover, ListenButton, EpisodeCard, EpisodeGrid
│  ├─ faq/                 # FaqItem y FaqAccordion
│  ├─ home/                # Hero, episodios recientes y sección sobre el podcast
│  ├─ layout/              # SiteHeader, SiteFooter, NavigationMenu, SkipLink
│  └─ ui/                  # Container, SectionHeading, ButtonLink, Tag
├─ data/                   # Datos simulados: podcast, episodios y FAQs
├─ lib/                    # Selectores y formateadores puros
└─ types/                  # Tipos de podcast, episodio y FAQ
```

## Datos simulados

- `src/data/episodes.ts` contiene exactamente 20 episodios con número, título, resumen, fecha,
  duración y tema de portada. Las fechas son pasadas y el orden es coherente con la numeración.
- `src/data/faqs.ts` contiene 8 preguntas, dos por cada tema requerido.
- `src/data/podcast.ts` contiene la identidad del podcast y el correo de contacto simulado.
- El botón «Escuchar episodio» solo muestra un aviso: la reproducción de audio no está implementada
  en esta demostración.

## Validación

Las compuertas de calidad son `npx tsc --noEmit`, `npm run lint` y `npm run build`. Los escenarios
manuales VS-1 a VS-8 están documentados en
[`specs/001-podcast-website/quickstart.md`](./specs/001-podcast-website/quickstart.md).

## Documentación de la feature

- [Especificación](./specs/001-podcast-website/spec.md)
- [Plan técnico](./specs/001-podcast-website/plan.md)
- [Modelo de datos](./specs/001-podcast-website/data-model.md)
- [Contratos de rutas](./specs/001-podcast-website/contracts/routes.md)
- [Contratos de componentes](./specs/001-podcast-website/contracts/ui-components.md)
- [Tareas](./specs/001-podcast-website/tasks.md)
