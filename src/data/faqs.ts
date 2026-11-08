import type { FaqItem } from "@/types/faq";

export const faqs: FaqItem[] = [
  {
    id: "que-es-my-podcast",
    question: "¿De qué trata My Podcast?",
    answer:
      "My Podcast es un espacio de conversaciones pausadas sobre creación, cultura, oficios y vida cotidiana. Cada episodio propone una charla con una persona que mira su trabajo desde un lugar particular, sin guiones rígidos ni respuestas de manual.",
    topic: "contenido",
  },
  {
    id: "conocimientos-previos",
    question: "¿Necesito conocimientos previos para escucharlo?",
    answer:
      "No. Los episodios están pensados para cualquier persona curiosa, sin importar su formación. Si un tema requiere contexto, lo presentamos al inicio y evitamos tecnicismos innecesarios para que puedas seguir la conversación con naturalidad.",
    topic: "contenido",
  },
  {
    id: "frecuencia-publicacion",
    question: "¿Cada cuánto se publica un episodio?",
    answer:
      "Publicamos un episodio nuevo cada dos semanas, los miércoles. Entre temporadas hacemos una pausa breve para preparar las siguientes conversaciones y avisamos con antelación en la página principal.",
    topic: "frecuencia",
  },
  {
    id: "episodios-por-temporada",
    question: "¿Cuántos episodios tiene cada temporada?",
    answer:
      "Cada temporada reúne diez episodios y una conversación final con preguntas de la audiencia. La primera temporada completa está disponible en el catálogo, junto con el inicio de la segunda.",
    topic: "frecuencia",
  },
  {
    id: "donde-escuchar",
    question: "¿Dónde puedo escuchar los episodios?",
    answer:
      "Todos los episodios están disponibles en esta misma web, en la sección de episodios. En esta versión de demostración el botón de escucha solo muestra un aviso, porque no se reproduce audio real ni se depende de plataformas externas.",
    topic: "donde-escuchar",
  },
  {
    id: "descargar-episodios",
    question: "¿Puedo descargar los episodios para escucharlos sin conexión?",
    answer:
      "La demostración actual no incluye descargas ni archivos de audio. El contenido, las portadas y las preguntas frecuentes funcionan con datos simulados incluidos en el sitio, así que puedes navegar sin depender de servicios externos.",
    topic: "donde-escuchar",
  },
  {
    id: "contactar-equipo",
    question: "¿Cómo puedo contactar con el equipo?",
    answer:
      "Puedes escribirnos a hola@mypodcast.example. Leemos todos los mensajes y respondemos en un plazo aproximado de tres días laborables. También puedes proponer temas, invitados o dejar comentarios sobre un episodio.",
    topic: "contacto",
  },
  {
    id: "proponer-tema",
    question: "¿Puedo proponer un tema o participar en un episodio?",
    answer:
      "Sí. Escríbenos a hola@mypodcast.example con una breve descripción de tu idea y por qué te gustaría compartirla. Seleccionamos propuestas al preparar cada temporada y nos ponemos en contacto si encajan con la línea editorial.",
    topic: "contacto",
  },
];
