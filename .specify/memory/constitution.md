<!--
Sync Impact Report
==================
Version change: (unversioned scaffold) → 1.0.0
Bump rationale: Initial adoption of the project constitution. The previous file was the
unmodified template scaffold, so this amendment establishes the first governed baseline.

Modified principles:
- [PRINCIPLE_1_NAME] → I. Next.js como Framework Principal
- [PRINCIPLE_2_NAME] → II. TypeScript Obligatorio
- [PRINCIPLE_3_NAME] → III. Componentes Reutilizables
- [PRINCIPLE_4_NAME] → IV. Estructura de Código Limpia y Organizada
- [PRINCIPLE_5_NAME] → V. Interfaz Moderna, Elegante y Profesional
- (new) → VI. Diseño Responsive
- (new) → VII. Datos Simulados (Mock Data)
- (new) → VIII. Sin Bases de Datos ni Servicios Externos
- (new) → IX. Accesibilidad y Usabilidad
- (new) → X. Nombres Claros y Descriptivos

Added sections:
- Requisitos de Calidad
- Objetivo del Proyecto
- Governance (amendment procedure, versioning policy, compliance review)

Removed sections:
- None

Follow-up TODOs:
- None. All placeholder tokens were resolved.
-->

# My Podcast Constitution

## Core Principles

### I. Next.js como Framework Principal

Toda la aplicación MUST construirse sobre Next.js. El enrutamiento, la representación de páginas
y las capacidades del framework MUST aprovecharse como base del proyecto; no se introducirán
frameworks alternativos ni soluciones de enrutamiento paralelas. Cualquier dependencia adicional
MUST justificarse frente a las capacidades nativas de Next.js.

*Rationale*: un único framework principal reduce la complejidad, evita duplicidad de abstracciones
y facilita el mantenimiento a largo plazo.

### II. TypeScript Obligatorio

Todo el código fuente MUST escribirse en TypeScript con tipado explícito. El uso de `any` MUST
evitarse salvo justificación documentada. Los tipos MUST describir los modelos de datos del
podcast, las props de los componentes y los contratos entre módulos.

*Rationale*: el tipado estático detecta errores antes de la ejecución y documenta las intenciones
del código, lo que mejora la mantenibilidad.

### III. Componentes Reutilizables

La interfaz MUST construirse a partir de componentes reutilizables con una responsabilidad única.
Todo patrón visual o de comportamiento repetido MUST extraerse a un componente compartido. Los
componentes de presentación MUST permanecer independientes de la fuente de datos concreta.

*Rationale*: la reutilización evita duplicación, garantiza coherencia visual y acelera la evolución
de la interfaz.

### IV. Estructura de Código Limpia y Organizada

El proyecto MUST mantener una estructura de carpetas predecible que separe páginas, componentes,
datos y utilidades. Cada archivo MUST tener una responsabilidad clara y acotada. El código MUST
evitar duplicaciones innecesarias, dependencias circulares y lógica de negocio mezclada con la
presentación.

*Rationale*: una organización consistente reduce el coste de navegación y facilita la incorporación
de nuevas personas al proyecto.

### V. Interfaz Moderna, Elegante y Profesional

La interfaz MUST presentar un diseño moderno, elegante y profesional. La elección de tipografía,
paleta de color, espaciado y jerarquía visual MUST ser coherente en todas las páginas. Los estados
interactivos (hover, focus, active, disabled) MUST estar definidos y ser visualmente perceptibles.

*Rationale*: la calidad visual transmite credibilidad y diferencia al producto frente a
alternativas genéricas.

### VI. Diseño Responsive

Toda página y componente MUST adaptarse a móviles, tablets y ordenadores. El diseño MUST partir de
un enfoque mobile-first y MUST verificarse en los tres rangos de tamaño. Ningún contenido MUST
provocar desplazamiento horizontal ni quedar inaccesible en pantallas pequeñas.

*Rationale*: la audiencia de un podcast consume contenido desde dispositivos muy diversos; la
experiencia debe ser equivalente en todos ellos.

### VII. Datos Simulados (Mock Data)

El contenido del podcast (episodios, descripciones, preguntas frecuentes y metadatos) MUST
provenir de datos simulados definidos localmente en el proyecto. Los componentes MUST consumir
estos datos a través de una capa de acceso claramente identificada, de modo que puedan sustituirse
por una fuente real en el futuro sin reescribir la interfaz.

*Rationale*: los datos simulados permiten desarrollar y validar la experiencia sin depender de
infraestructura externa.

### VIII. Sin Bases de Datos ni Servicios Externos

El proyecto MUST NOT utilizar bases de datos, APIs de terceros ni servicios externos en tiempo de
ejecución. Toda la información MUST residir en el propio repositorio. Cualquier integración externa
futura MUST tratarse como una enmienda explícita a esta constitución.

*Rationale*: la ausencia de dependencias externas simplifica el despliegue, elimina costes ocultos
y garantiza que el proyecto funcione de forma autónoma.

### IX. Accesibilidad y Usabilidad

La interfaz MUST cumplir las pautas WCAG 2.1 nivel AA en lo relativo a contraste, estructura
semántica, navegación por teclado y textos alternativos. Todo control interactivo MUST ser
alcanzable y operable mediante teclado, y MUST exponer un nombre accesible. La navegación MUST ser
intuitiva, con etiquetas claras y una jerarquía de encabezados coherente.

*Rationale*: un producto accesible amplía su audiencia y garantiza una experiencia equitativa para
todas las personas.

### X. Nombres Claros y Descriptivos

Archivos, carpetas, componentes, variables y funciones MUST usar nombres claros, descriptivos y
consistentes con su propósito. Se MUST evitar la ambigüedad, las abreviaturas opacas y los nombres
genéricos que no comuniquen intención.

*Rationale*: los nombres expresivos hacen que el código se explique por sí mismo y reducen el
esfuerzo de lectura y revisión.

## Requisitos de Calidad

- El código MUST ser mantenible: cambios localizados, bajo acoplamiento y dependencias explícitas.
- Los componentes MUST estar separados por responsabilidades, sin concentrar presentación, datos y
  lógica en una misma unidad.
- La interfaz MUST ofrecer una navegación intuitiva entre la página principal, los episodios y las
  preguntas frecuentes.
- El proyecto MUST compilar sin errores ni advertencias bloqueantes.
- Todas las páginas MUST mantener una identidad visual coherente: misma tipografía, paleta,
  espaciado y patrones de interacción.

## Objetivo del Proyecto

Desarrollar una página web para un podcast que incluya una página principal, una sección de
episodios y una sección de preguntas frecuentes. El sitio MUST presentar el podcast, permitir la
exploración de sus episodios y resolver las dudas más comunes de la audiencia, manteniendo una
experiencia coherente, accesible y responsive en todos los dispositivos.

## Governance

Esta constitución MUST prevalecer sobre cualquier otra práctica, convención o instrucción de
desarrollo del proyecto. En caso de conflicto, la constitución es la fuente de autoridad.

**Procedimiento de enmienda**

1. Toda enmienda MUST presentarse como una propuesta documentada que incluya el cambio concreto, su
   justificación y el impacto esperado sobre el código y los procesos existentes.
2. La propuesta MUST revisarse y aprobarse antes de modificar este documento.
3. Si la enmienda elimina o redefine un principio, MUST incluirse un plan de migración que describa
   cómo se adaptará el trabajo en curso.
4. Tras la aprobación, la enmienda MUST registrarse actualizando la versión y la fecha de última
   modificación.

**Política de versionado**

La versión de la constitución sigue el esquema semántico MAJOR.MINOR.PATCH:

- MAJOR: eliminación o redefinición incompatible de principios o reglas de gobernanza.
- MINOR: incorporación de nuevos principios o secciones, o ampliación material de la guía.
- PATCH: aclaraciones, correcciones de redacción o refinamientos no semánticos.

**Revisión de cumplimiento**

Toda especificación, plan, tarea y revisión de código MUST verificar el cumplimiento de los
principios de esta constitución. Cualquier incumplimiento MUST corregirse o justificarse de forma
explícita antes de considerarse completado. La complejidad añadida MUST justificarse frente a una
alternativa más simple que respete los mismos principios.

**Version**: 1.0.0 | **Ratified**: 2026-11-08 | **Last Amended**: 2026-11-08
