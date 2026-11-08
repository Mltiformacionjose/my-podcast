export type FaqTopic = "contenido" | "frecuencia" | "donde-escuchar" | "contacto";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  topic: FaqTopic;
}
