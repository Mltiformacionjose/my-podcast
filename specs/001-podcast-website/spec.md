# Feature Specification: My Podcast Website

**Feature Branch**: `001-podcast-website`

**Created**: 2026-11-08

**Status**: Draft

**Input**: User description: "Quiero desarrollar una página web para un podcast con un diseño moderno, atractivo, minimalista y profesional. La página principal debe incluir encabezado con nombre y logotipo, menú de navegación, sección principal de presentación, imagen destacada, botón para descubrir los episodios, sección con los episodios más recientes y sección de presentación del podcast. La página de episodios debe mostrar 20 episodios en tarjetas con número, título, descripción breve, imagen o portada, fecha de publicación, duración y botón para escuchar, usando datos simulados. La sección de preguntas frecuentes debe usar un sistema desplegable con preguntas sobre contenido, frecuencia de publicación, dónde escuchar y cómo contactar. El diseño debe ser moderno, elegante, responsive, con buena experiencia de usuario, navegación sencilla, tipografía legible y coherencia entre secciones."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Descubrir el podcast desde la página principal (Priority: P1)

Un visitante que llega por primera vez a la página principal quiere entender de qué trata el podcast,
reconocer su identidad visual y acceder rápidamente a los episodios. La página debe presentar el
podcast, mostrar una imagen destacada, un botón para descubrir los episodios, una selección de los
episodios más recientes y una sección que explique el proyecto.

**Why this priority**: Es el punto de entrada del sitio y determina la primera impresión. Sin una
landing clara, el visitante no entiende la propuesta ni llega al contenido principal.

**Independent Test**: Abrir la página principal y comprobar que muestra el encabezado con nombre y
logotipo, el menú de navegación, la presentación del podcast, la imagen destacada, el botón para
descubrir episodios, la sección de episodios recientes y la sección de presentación del podcast.
Activar el botón principal debe llevar a la página de episodios.

**Acceptance Scenarios**:

1. **Given** un visitante accede a la página principal, **When** la página termina de cargar,
   **Then** ve el nombre y el logotipo del podcast, el menú de navegación, una presentación del
   podcast, una imagen destacada y un botón para descubrir los episodios.
2. **Given** el visitante está en la página principal, **When** activa el botón para descubrir los
   episodios, **Then** se abre la página de episodios.
3. **Given** el visitante está en la página principal, **When** revisa la parte inferior, **Then**
   encuentra una sección con los episodios más recientes y una sección de presentación del podcast.
4. **Given** el visitante usa el menú de navegación, **When** selecciona una sección, **Then** llega
   al destino correspondiente y puede identificar en qué sección se encuentra.

---

### User Story 2 - Explorar el catálogo de 20 episodios (Priority: P2)

Un oyente interesado quiere revisar la oferta completa de episodios y decidir cuál escuchar. Necesita
ver cada episodio en una tarjeta con número, título, descripción breve, portada, fecha de publicación,
duración y un botón para escuchar.

**Why this priority**: El catálogo es el contenido central del producto. Sin él, el sitio informa
pero no entrega valor de escucha.

**Independent Test**: Abrir la página de episodios y verificar que aparecen exactamente 20 tarjetas,
cada una con los siete elementos requeridos, en un orden comprensible, y que el botón para escuchar
responde visualmente al activarse.

**Acceptance Scenarios**:

1. **Given** el oyente abre la página de episodios, **When** la página termina de cargar, **Then**
   ve exactamente 20 episodios presentados como tarjetas.
2. **Given** cualquier tarjeta de episodio, **When** el oyente la revisa, **Then** encuentra el
   número del episodio, el título, la descripción breve, la portada, la fecha de publicación, la
   duración y un botón para escuchar.
3. **Given** una tarjeta de episodio, **When** el oyente activa el botón para escuchar, **Then**
   recibe una respuesta visible que indica el estado de la reproducción en esta versión de
   demostración.
4. **Given** un episodio con título o descripción extensos, **When** se muestra en la tarjeta,
   **Then** el contenido se ajusta sin romper la composición ni desbordar la tarjeta.

---

### User Story 3 - Resolver dudas en las preguntas frecuentes (Priority: P3)

Un visitante quiere aclarar dudas antes de decidir escuchar o contactar al equipo. Necesita una
sección de preguntas frecuentes desplegable que cubra el contenido del podcast, la frecuencia de
publicación, dónde escuchar los episodios y cómo contactar.

**Why this priority**: Reduce la fricción y responde objeciones, pero no bloquea el consumo del
contenido principal.

**Independent Test**: Abrir la sección de preguntas frecuentes, comprobar que existe al menos una
pregunta por cada uno de los cuatro temas y que cada pregunta se puede expandir y contraer.

**Acceptance Scenarios**:

1. **Given** el visitante accede a las preguntas frecuentes, **When** revisa la lista, **Then**
   encuentra preguntas sobre el contenido, la frecuencia de publicación, dónde escuchar y cómo
   contactar con el equipo.
2. **Given** una pregunta contraída, **When** el visitante la activa, **Then** la respuesta se
   muestra y el estado expandido resulta perceptible.
3. **Given** una pregunta expandida, **When** el visitante la activa de nuevo, **Then** la respuesta
   se oculta.
4. **Given** un visitante que navega solo con teclado, **When** recorre las preguntas, **Then** puede
   alcanzar y operar cada pregunta y leer su respuesta.

---

### Edge Cases

- El visitante accede desde una pantalla estrecha de 320 px: el contenido debe seguir siendo legible
  y no debe generar desplazamiento horizontal.
- Un episodio tiene un título muy largo o una descripción de varias líneas: la tarjeta debe mantener
  la alineación y la altura de sus elementos sin recortar información esencial.
- La portada de un episodio no está disponible: debe mostrarse un recurso visual de respaldo que
  conserve la composición de la tarjeta.
- El visitante usa solo el teclado o un lector de pantalla: debe poder navegar, activar el botón de
  escuchar y operar todas las preguntas frecuentes.
- El visitante prefiere movimiento reducido: las transiciones de expansión no deben impedir la
  lectura del contenido.
- El botón de escuchar no dispone de audio real en esta versión: debe comunicar el estado sin
  aparentar una reproducción que no existe.
- El visitante abre varias preguntas frecuentes a la vez: cada pregunta debe mantener su propio
  estado sin interferir con las demás.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El sitio MUST ofrecer tres destinos principales: página principal, episodios y
  preguntas frecuentes.
- **FR-002**: Todas las páginas MUST incluir un encabezado con el nombre y el logotipo del podcast y
  un menú de navegación que permita llegar a los tres destinos principales.
- **FR-003**: El menú de navegación MUST indicar de forma perceptible cuál es la sección activa.
- **FR-004**: La página principal MUST presentar el podcast mediante un título, una descripción breve
  y una imagen destacada.
- **FR-005**: La página principal MUST incluir un botón principal para descubrir los episodios que
  dirija a la página de episodios.
- **FR-006**: La página principal MUST mostrar una sección con los episodios más recientes.
- **FR-007**: La página principal MUST incluir una sección de presentación del podcast con
  información sobre su propósito, temática y equipo.
- **FR-008**: La página de episodios MUST mostrar exactamente 20 episodios en formato de tarjeta.
- **FR-009**: Cada tarjeta de episodio MUST mostrar el número del episodio, el título, la descripción
  breve, la portada, la fecha de publicación, la duración y un botón para escuchar.
- **FR-010**: Los episodios MUST presentarse en un orden estable y comprensible para el oyente, del
  más reciente al más antiguo.
- **FR-011**: El botón para escuchar MUST estar disponible en cada tarjeta y, al activarse, MUST
  ofrecer una respuesta visible que comunique el estado de reproducción de esta versión de
  demostración.
- **FR-012**: La sección de preguntas frecuentes MUST incluir al menos una pregunta sobre el
  contenido del podcast, una sobre la frecuencia de publicación, una sobre dónde escuchar los
  episodios y una sobre cómo contactar con el equipo.
- **FR-013**: Cada pregunta frecuente MUST mostrar su respuesta solo después de que el visitante la
  active, y MUST poder contraerse de nuevo.
- **FR-014**: El estado expandido o contraído de cada pregunta MUST ser perceptible visualmente y
  para tecnologías de asistencia.
- **FR-015**: La respuesta sobre contacto MUST indicar un canal claro y utilizable para comunicarse
  con el equipo.
- **FR-016**: Todas las páginas MUST adaptarse a móviles, tablets y ordenadores sin desplazamiento
  horizontal ni contenido inaccesible.
- **FR-017**: Todas las páginas MUST compartir la misma identidad visual: tipografía, paleta de color,
  espaciado y estilo de componentes coherentes.
- **FR-018**: Todo el contenido del podcast y de las preguntas frecuentes MUST provenir de datos
  simulados incluidos en el propio sitio, sin depender de bases de datos ni de servicios externos en
  tiempo de ejecución.
- **FR-019**: Las imágenes MUST disponer de texto alternativo o estar marcadas como decorativas
  cuando no aporten información.
- **FR-020**: Cada página MUST tener un título propio y una jerarquía de encabezados coherente.
- **FR-021**: Todos los enlaces y botones de navegación MUST dirigir a un destino existente, sin
  enlaces rotos ni acciones sin respuesta.
- **FR-022**: El sitio MUST mantener el contenido disponible sin requerir cuentas de usuario,
  suscripciones ni conexiones a plataformas de terceros.

### Key Entities *(include if feature involves data)*

- **Podcast**: Representa el programa. Incluye nombre, logotipo, descripción breve, descripción
  extendida, imagen destacada e información de contacto.
- **Episodio**: Representa una entrega del podcast. Incluye número, título, descripción breve,
  portada, fecha de publicación, duración y una referencia de escucha.
- **Pregunta frecuente**: Representa una duda de la audiencia. Incluye la pregunta, la respuesta y el
  tema al que pertenece: contenido, frecuencia, dónde escuchar o contacto.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un visitante que llega por primera vez puede identificar la temática del podcast y
  llegar al catálogo de episodios en un máximo de 2 acciones.
- **SC-002**: El 100% de los 20 episodios muestra los siete elementos requeridos: número, título,
  descripción breve, portada, fecha de publicación, duración y botón para escuchar.
- **SC-003**: El 100% de las preguntas frecuentes se expande y se contrae correctamente, y muestra su
  respuesta al activarse.
- **SC-004**: Desde cualquier página, el visitante alcanza cada uno de los tres destinos principales
  con una sola acción de navegación.
- **SC-005**: El contenido se visualiza sin desplazamiento horizontal en anchos de 320, 768, 1024 y
  1440 píxeles.
- **SC-006**: Un usuario que navega solo con teclado puede alcanzar y operar el 100% de los enlaces de
  navegación, botones de escucha y preguntas frecuentes, con un indicador de foco visible.
- **SC-007**: El 100% de los textos de cuerpo de las tres páginas cumple una relación de contraste de
  al menos 4.5:1.
- **SC-008**: Una revisión visual de las tres páginas confirma que comparten tipografía, paleta,
  espaciado y estilo de componentes, sin inconsistencias de identidad visual.
- **SC-009**: El 100% de los enlaces y botones de navegación conduce a un destino existente.

## Assumptions

- El sitio se publica en español y el nombre del podcast es "My Podcast".
- La página principal muestra los 3 episodios más recientes; el catálogo completo de 20 episodios
  vive en la página de episodios.
- Los episodios se ordenan del más reciente al más antiguo, entendiendo el número más alto como el
  más reciente.
- Las preguntas frecuentes constituyen una página propia accesible desde el menú de navegación; no se
  duplican como bloque completo en la página principal.
- Cada pregunta frecuente se expande y contrae de forma independiente, por lo que pueden permanecer
  varias abiertas a la vez.
- No se proporcionan archivos de audio ni recursos de marca. Las portadas y el logotipo se representan
  con recursos visuales simulados incluidos en el sitio y la acción de escuchar se limita a comunicar
  el estado de demostración, sin reproducir audio real.
- El contacto se resuelve con datos simulados de correo electrónico y redes del podcast, sin envío
  real de mensajes ni integraciones externas.
- El alcance no incluye cuentas de usuario, comentarios, valoraciones, búsqueda, filtros, paginación,
  suscripciones ni pagos.
- El contenido simulado es finito y no requiere actualización automática ni administración.
- La tecnología concreta se rige por la constitución del proyecto y queda fuera del alcance de esta
  especificación funcional.
