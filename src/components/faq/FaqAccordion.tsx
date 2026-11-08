import { Tag } from "@/components/ui/Tag";
import type { FaqItem as FaqItemType, FaqTopic } from "@/types/faq";
import { FaqItem } from "./FaqItem";

interface FaqAccordionProps {
  items: FaqItemType[];
}

const topicOrder: FaqTopic[] = [
  "contenido",
  "frecuencia",
  "donde-escuchar",
  "contacto",
];

const topicLabels: Record<FaqTopic, string> = {
  contenido: "Sobre el contenido",
  frecuencia: "Frecuencia de publicación",
  "donde-escuchar": "Dónde escuchar",
  contacto: "Contacto",
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-10">
      {topicOrder.map((topic) => {
        const topicItems = items.filter((item) => item.topic === topic);

        if (topicItems.length === 0) {
          return null;
        }

        return (
          <section
            key={topic}
            aria-labelledby={`faq-${topic}`}
            className="scroll-mt-28"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2
                id={`faq-${topic}`}
                className="font-serif text-2xl text-ink"
              >
                {topicLabels[topic]}
              </h2>
              <Tag>
                {topicItems.length} {topicItems.length === 1 ? "pregunta" : "preguntas"}
              </Tag>
            </div>

            <div className="space-y-3">
              {topicItems.map((item) => (
                <FaqItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
