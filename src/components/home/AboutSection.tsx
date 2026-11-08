import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import type { Podcast } from "@/types/podcast";

interface AboutSectionProps {
  podcast: Podcast;
}

export function AboutSection({ podcast }: AboutSectionProps) {
  return (
    <section
      id="sobre-el-podcast"
      aria-labelledby="sobre-el-podcast-titulo"
      className="scroll-mt-24 border-y border-line bg-surface/60 py-16 md:py-24"
    >
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Sobre el podcast
          </p>
          <h2
            id="sobre-el-podcast-titulo"
            className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
          >
            Un podcast para escuchar sin prisa.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {podcast.hostNames.map((hostName) => (
              <Tag key={hostName}>{hostName}</Tag>
            ))}
          </div>
        </div>

        <div>
          <p className="text-base leading-8 text-ink-soft">
            {podcast.longDescription}
          </p>

          <div className="mt-8 rounded-card border border-line bg-canvas p-6">
            <h3 className="font-serif text-2xl text-ink">
              ¿Tienes una historia que contar?
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              Escríbenos con tu idea, una pregunta o el nombre de alguien a quien
              deberíamos escuchar. Leemos todos los mensajes.
            </p>
            <ButtonLink
              href={`mailto:${podcast.contactEmail}`}
              variant="secondary"
              className="mt-4"
            >
              Escríbenos
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
