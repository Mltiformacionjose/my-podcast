import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { podcast } from "@/data/podcast";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas sobre el contenido de My Podcast, la frecuencia de publicación, dónde escuchar los episodios y cómo contactar con el equipo.",
};

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-line/70 bg-surface/40 py-14 md:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Todo lo que suele preguntarse
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Preguntas frecuentes
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft">
            Contenido, frecuencia de publicación, dónde escuchar y cómo
            contactar. Si tu duda no aparece aquí, escríbenos y la añadiremos.
          </p>
        </Container>
      </section>

      <section aria-label="Preguntas y respuestas" className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <FaqAccordion items={faqs} />

          <div className="mt-12 rounded-card border border-line bg-surface p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-ink">
              ¿No encuentras tu respuesta?
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              Escríbenos a{" "}
              <a
                href={`mailto:${podcast.contactEmail}`}
                className="font-semibold text-accent-strong underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                {podcast.contactEmail}
              </a>
              . Leemos todos los mensajes y respondemos en un plazo aproximado de
              tres días laborables.
            </p>
            <ButtonLink
              href={`mailto:${podcast.contactEmail}`}
              variant="secondary"
              className="mt-5"
            >
              Contactar con el equipo
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
