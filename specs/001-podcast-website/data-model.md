# Data Model: My Podcast Website

**Feature**: `001-podcast-website`
**Date**: 2026-11-08
**Source of truth**: [spec.md](./spec.md) — Key Entities
**Persistence**: None. All data is immutable and bundled at build time.

## Overview

El sitio maneja tres entidades: **Podcast**, **Episode** y **FaqItem**. No existen relaciones
persistidas ni estado compartido; las relaciones son de composición en memoria. La UI mantiene
únicamente estado efímero local (menú móvil abierto, feedback de escucha y preguntas nativas
abiertas).

## TypeScript Contracts

Los contratos viven en `src/types/` y son la referencia para datos, componentes y selectores.

```ts
export type CoverTheme =
  | "terracotta"
  | "olive"
  | "navy"
  | "plum"
  | "amber"
  | "teal";

export interface Episode {
  id: string;
  number: number;
  title: string;
  summary: string;
  publishedAt: string; // ISO 8601 date: YYYY-MM-DD
  durationMinutes: number;
  coverTheme: CoverTheme;
}

export type FaqTopic = "contenido" | "frecuencia" | "donde-escuchar" | "contacto";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  topic: FaqTopic;
}

export interface Podcast {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  hostNames: string[];
  contactEmail: string;
}
```

## Entity: Podcast

Representa el programa y alimenta el encabezado, la portada y la sección de presentación.

| Field | Type | Rules |
|-------|------|-------|
| `name` | `string` | Obligatorio, no vacío. Valor de la v1: `"My Podcast"`. |
| `tagline` | `string` | Obligatorio, 20–80 caracteres. Resume la propuesta. |
| `shortDescription` | `string` | Obligatorio, 80–220 caracteres. Usado en el hero. |
| `longDescription` | `string` | Obligatorio, 200–600 caracteres. Usado en la sección de presentación. |
| `hostNames` | `string[]` | Al menos 1 nombre; sin duplicados. |
| `contactEmail` | `string` | Obligatorio, formato de correo válido, dominio reservado `example` (`hola@mypodcast.example`) para no depender de un servicio real. |

**Derived values**: ninguno obligatorio; el logotipo se compone con iniciales o marca tipográfica a
partir de `name`.

## Entity: Episode

Representa una entrega del podcast. El catálogo contiene exactamente 20 registros.

| Field | Type | Rules |
|-------|------|-------|
| `id` | `string` | Obligatorio, único, kebab-case estable. Patrón: `episodio-01` … `episodio-20`. |
| `number` | `number` | Entero positivo, único, rango 1–20. Sin huecos. |
| `title` | `string` | Obligatorio, 10–80 caracteres, sin HTML. |
| `summary` | `string` | Obligatorio, 60–200 caracteres, texto plano. |
| `publishedAt` | `string` | Fecha ISO `YYYY-MM-DD`, válida y no futura respecto a la fecha de publicación del sitio. |
| `durationMinutes` | `number` | Entero positivo, rango 15–120. |
| `coverTheme` | `CoverTheme` | Uno de los seis temas permitidos; determina la portada generada. |

**Ordering**: la colección se ordena por `number` descendente (20 → 1), de acuerdo con la
suposición de que el número más alto es el más reciente. `publishedAt` debe ser coherente con ese
orden (fechas más recientes para números mayores).

**Derived values**:
- `formattedDate` = `formatDate(publishedAt)` → formato largo en español, por ejemplo
  `"12 de octubre de 2026"`.
- `formattedDuration` = `formatDuration(durationMinutes)` → por ejemplo `"42 min"`.
- `coverLabel` = `"Portada del episodio {number}: {title}"` para el nombre accesible de la portada.

**Validation rules**:
- Debe haber exactamente 20 episodios.
- `number` debe cubrir 1–20 sin duplicados.
- `id` no puede repetirse.
- Ningún campo de texto puede estar vacío.
- `publishedAt` debe poder parsearse como fecha válida.
- `coverTheme` debe pertenecer al conjunto permitido; si faltara, `EpisodeCover` usa el tema
  `terracotta` como respaldo visual.

## Entity: FaqItem

Representa una duda de la audiencia. La colección contiene 8 registros, dos por tema.

| Field | Type | Rules |
|-------|------|-------|
| `id` | `string` | Obligatorio, único, kebab-case. |
| `question` | `string` | Obligatorio, 15–120 caracteres, termina en signo de interrogación. |
| `answer` | `string` | Obligatorio, 80–400 caracteres, texto plano. Para el tema `contacto` incluye `contactEmail`. |
| `topic` | `FaqTopic` | Uno de: `contenido`, `frecuencia`, `donde-escuchar`, `contacto`. |

**Coverage rule**: al menos un registro por cada uno de los cuatro temas; la v1 usa dos por tema.

**Ordering**: agrupadas por tema en el orden `contenido`, `frecuencia`, `donde-escuchar`, `contacto`;
dentro de cada tema, orden de declaración.

**Derived values**:
- `formattedTopic` = etiqueta legible del tema, por ejemplo `"Dónde escuchar"`.

## Relationships

```text
Podcast 1 ──< Episode   (composición: el podcast agrupa 20 episodios)
Podcast 1 ──< FaqItem   (composición: el podcast publica 8 preguntas frecuentes)
```

No existen claves foráneas ni persistencia. Las relaciones se expresan mediante los módulos de
datos y los selectores.

## Selectors (`src/lib/episodes.ts`)

| Function | Contract |
|----------|----------|
| `getEpisodes(): Episode[]` | Devuelve los 20 episodios ordenados por `number` descendente. |
| `getRecentEpisodes(limit?: number): Episode[]` | Devuelve los `limit` episodios más recientes (por defecto 3) usando `getEpisodes()`. |
| `getEpisodeById(id: string): Episode \| undefined` | Búsqueda por `id`; reservado para futuras rutas de detalle. |

Los selectores son puros y no acceden a red, almacenamiento ni variables de entorno.

## UI State (ephemeral, not persisted)

| State | Owner | Initial | Transitions |
|-------|-------|---------|-------------|
| Menú móvil abierto | `NavigationMenu` | `false` | Abrir/cerrar con botón; cerrar al seleccionar una ruta. |
| Feedback de escucha | `ListenButton` | `idle` | `idle → demo-notice` al activar; el aviso permanece visible y anunciado. |
| FAQ abierta | `<details>` nativo | `false` | Abrir/cerrar por activación de puntero, teclado o tecnología de asistencia; independiente por ítem. |

No hay transiciones de estado persistentes, sesiones ni datos de usuario.

## Sample Record

```ts
const episode: Episode = {
  id: "episodio-20",
  number: 20,
  title: "El futuro del audio independiente",
  summary:
    "Una conversación sobre modelos de producción, comunidades pequeñas y el regreso del audio cuidado.",
  publishedAt: "2026-10-28",
  durationMinutes: 48,
  coverTheme: "terracotta",
};
```
