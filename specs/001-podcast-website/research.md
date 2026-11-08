# Research: My Podcast Website

**Feature**: `001-podcast-website`
**Date**: 2026-11-08

Todas las incógnitas del contexto técnico quedan resueltas. No se requieren marcadores
`NEEDS CLARIFICATION`.

## Decision 1: Versiones del stack

**Decision**: Next.js 16.4.5 (App Router), React 19.3 y React DOM 19.3 sobre Node.js 24.18.0.

**Rationale**: Next.js 16.4.5 es la versión estable con parches de seguridad de noviembre de 2026.
El App Router es el modelo de enrutamiento recomendado y el entorno local ya dispone de Node.js
24.18.0, muy por encima del mínimo 20.9 de Next.js 16. React 19.3 se instala como dependencia
explícita para compatibilidad con el ecosistema y herramientas.

**Alternatives considered**:
- Next.js 15 LTS: finaliza su ventana de soporte en octubre de 2026 y no aporta ventajas.
- Pages Router: descartado por la indicación explícita de App Router y por ser el modelo legado.
- Canary de Next.js 16.5: descartado por inestabilidad y falta de necesidad.

## Decision 2: Configuración de TypeScript

**Decision**: `strict: true`, alias `@/*` hacia `src/*`, sin uso de `any` salvo justificación
documentada.

**Rationale**: El principio II exige tipado explícito. El modo estricto detecta errores en datos,
props y selectores antes de compilar. El alias mantiene importaciones legibles y estables.

**Alternatives considered**:
- JavaScript: prohibido por la constitución.
- Tipado laxo con `any`: descartado por el riesgo de errores silenciosos en los datos simulados.

## Decision 3: Tailwind CSS 4 con tokens CSS-first

**Decision**: Tailwind CSS 4.3.5 integrado mediante `@tailwindcss/postcss`, con `@import
"tailwindcss"` y tokens de diseño declarados en `@theme` dentro de `src/app/globals.css`. Sin
`tailwind.config.ts` salvo que se necesite un token no expresable en CSS.

**Rationale**: Tailwind 4 adopta configuración CSS-first y elimina la necesidad de un archivo de
configuración JavaScript. Los tokens centralizan paleta, tipografía, radios y sombras, lo que
garantiza identidad visual coherente en las tres rutas. Se evita añadir un sistema de componentes
paralelo.

**Alternatives considered**:
- CSS Modules: viable, pero fragmenta los estilos y no aprovecha los tokens utilitarios.
- styled-components u otra librería CSS-in-JS: añade dependencia y JavaScript de runtime.
- Tailwind 3: configuración JavaScript más pesada y sin las ventajas CSS-first de la versión actual.

## Decision 4: Estructura de carpetas por dominio

**Decision**: `src/app` para rutas, `src/components` agrupado por dominio, `src/data` para datos
simulados, `src/lib` para selectores y formato, `src/types` para contratos de datos.

**Rationale**: Satisface los principios III, IV y VII: las páginas solo componen secciones; los
componentes de presentación reciben datos tipados; la fuente de datos es sustituible sin reescribir
la UI. La separación por dominio evita carpetas planas difíciles de navegar.

**Alternatives considered**:
- Todo en `src/components` sin subcarpetas: se degrada al crecer y mezcla layout, dominio y UI.
- Colocar los datos junto a cada componente: acopla presentación y fuente de datos, violando el
  principio VII.
- Arquitectura feature-sliced completa: sobredimensionada para tres rutas.

## Decision 5: Datos simulados con selectores puros

**Decision**: Tipos en `src/types`, arrays tipados en `src/data` y funciones puras en
`src/lib/episodes.ts` (`getEpisodes`, `getRecentEpisodes`). Los componentes nunca importan los
arrays directamente; reciben props tipadas.

**Rationale**: La capa de selectores permite cambiar el orden, el número de episodios recientes o
la fuente de datos sin tocar la UI. Las funciones puras son triviales de razonar y no requieren
estado.

**Alternatives considered**:
- Importar el array de episodios en cada componente: duplica lógica y acopla la presentación.
- Context o store global: innecesario para datos inmutables de solo lectura.
- JSON externo: añade carga asíncrona sin beneficio y dificulta el tipado estático.

## Decision 6: FAQ con `details` y `summary` nativos

**Decision**: El acordeón de preguntas frecuentes se implementa con los elementos HTML nativos
`<details>` y `<summary>`, estilizados con Tailwind mediante el estado `open`. Cada elemento es
independiente, por lo que pueden permanecer varios abiertos.

**Rationale**: Proporciona expansión y contracción accesibles por teclado y para tecnologías de
asistencia sin JavaScript cliente ni estado React. Cumple los requisitos FR-013 y FR-014 y evita
riesgos de manejo manual de `aria-expanded`. La preferencia de movimiento reducido se respeta con
`motion-reduce`.

**Alternatives considered**:
- Acordeón controlado con `useState` y `aria-expanded`: viable, pero añade JS y superficie de error
  sin mejorar la experiencia.
- Acordeón de una sola pregunta abierta: contradice la suposición de independencia entre preguntas.
- Librería de acordeón: dependencia innecesaria para un patrón nativo.

## Decision 7: Feedback del botón de escucha

**Decision**: `ListenButton` es un componente cliente pequeño que, al activarse, muestra un mensaje
visible en una región `aria-live="polite"` indicando que la reproducción no está disponible en esta
versión de demostración. El botón expone un nombre accesible que incluye el número del episodio.

**Rationale**: El requisito FR-011 exige una respuesta visible sin simular audio real. Un estado
local mínimo es suficiente, no requiere red ni archivos de audio y mantiene el resto de la tarjeta
como componente de servidor.

**Alternatives considered**:
- Reproducir audio local: no se proporcionaron archivos y añadiría peso y estados complejos.
- Enlazar a una plataforma externa: prohibido por el principio VIII.
- Botón sin respuesta: incumple FR-011 y genera una acción muerta.

## Decision 8: Navegación activa y menú móvil

**Decision**: `NavigationMenu` es un componente cliente que usa `usePathname` para marcar la ruta
activa con `aria-current="page"`. En pantallas pequeñas ofrece un botón de menú con
`aria-expanded`, cierre al navegar y foco visible.

**Rationale**: El layout raíz es un componente de servidor; aislar la interactividad en la
navegación mantiene el resto del árbol estático. `aria-current` hace perceptible la sección activa
(FR-003) también para tecnologías de asistencia.

**Alternatives considered**:
- Comparar la ruta en el servidor: el layout no recibe el pathname de forma directa.
- Menú siempre visible con scroll horizontal: rompe la experiencia móvil.
- Dependencia de menú móvil: innecesaria para tres enlaces.

## Decision 9: Tipografía y recursos sin dependencias remotas

**Decision**: Usar pilas de fuentes del sistema: una serif editorial para títulos y una sans del
sistema para cuerpo y controles. Las portadas de episodios y la imagen destacada se generan con
gradientes y tipografía locales mediante el componente `EpisodeCover`, sin archivos binarios ni
URLs externas.

**Rationale**: `next/font/google` descarga fuentes en tiempo de build y rompe la compilación sin
conexión. Las fuentes del sistema y las portadas CSS garantizan autonomía total, evitan CLS por
fuentes y cumplen el principio VIII. `EpisodeCover` usa `role="img"` y un `aria-label` descriptivo.
La portada siempre está disponible, lo que cubre el caso límite de imagen ausente.

**Alternatives considered**:
- Google Fonts: dependencia de red en build y posible incumplimiento del espíritu offline.
- Archivos de fuente locales: no se proporcionaron y añaden peso al repositorio.
- 20 SVG de portada: válido, pero multiplica archivos y no aporta valor frente a una portada
  generada y consistente.

## Decision 10: Renderizado estático y ausencia de red

**Decision**: Las tres rutas se prerenderizan de forma estática. No se usan Route Handlers, Server
Actions, `fetch`, `cookies`, `headers`, bases de datos ni imágenes remotas. El sitio funciona tras
el build sin conexión.

**Rationale**: El contenido es inmutable y local. El renderizado estático maximiza rendimiento y
simplicidad, y hace verificable el principio VIII: ninguna ruta realiza peticiones externas.

**Alternatives considered**:
- SSR dinámico: innecesario sin datos por petición.
- `output: "export"`: compatible, pero se deja la configuración por defecto para no limitar el
  despliegue; el comportamiento sigue siendo estático.

## Decision 11: Sistema de diseño "editorial cálido"

**Decision**: Paleta cálida y minimalista con fondo marfil, tinta casi negra, acento terracota y
superficies blancas; títulos serif de gran tamaño, cuerpo sans legible, tarjetas con borde sutil,
radios generosos y sombras suaves. Modo claro únicamente en la v1.

**Rationale**: Transmite cercanía y profesionalismo propios de un podcast, mantiene contraste AA y
evita la estética genérica. Definir tokens únicos evita inconsistencias entre páginas (FR-017).

**Alternatives considered**:
- Tema oscuro: atractivo, pero duplica la superficie de contraste y pruebas de accesibilidad.
- Estilo neobrutalista: llamativo, pero choca con el requisito de minimalismo.
- Paleta monocroma: elegante, pero con menor jerarquía para llamadas a la acción.

## Decision 12: Estrategia de validación

**Decision**: Gates obligatorios `npx tsc --noEmit`, `npm run lint` y `npm run build`, seguidos de
los escenarios manuales de `quickstart.md`. Sin framework de pruebas en la v1.

**Rationale**: Cubre los cinco puntos de validación solicitados (páginas, navegación, FAQ, 20
episodios y compilación) con herramientas ya incluidas en el stack. Evita añadir Playwright y
navegadores de prueba a un alcance de tres rutas estáticas.

**Alternatives considered**:
- Playwright: mejor cobertura de regresión, pero dependencia y tiempo de configuración no
  justificados para la v1; puede incorporarse después sin cambiar la arquitectura.
- Vitest + Testing Library: útil para selectores y formato, pero no valida el comportamiento real
  del acordeón nativo ni la navegación completa.
- Solo revisión manual: insuficiente para garantizar compilación y tipos.

## Decision 13: Scaffolding manual sobre el repositorio existente

**Decision**: Crear la configuración de Next.js manualmente (o mediante scaffolding en un
directorio temporal) en lugar de ejecutar `create-next-app` directamente sobre la raíz.

**Rationale**: La raíz ya contiene `.specify/` y `.opencode/`; `create-next-app` rechaza directorios
con archivos en conflicto. Un scaffold manual conserva el flujo Spec Kit y evita mover archivos.

**Alternatives considered**:
- `create-next-app .` con `--force`: no existe una opción segura para preservar el contenido.
- Scaffold en subcarpeta: rompe la estructura de proyecto único y las rutas esperadas.
