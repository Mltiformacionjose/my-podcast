import { EpisodeCard } from "@/components/episodes/EpisodeCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Episode } from "@/types/episode";

interface RecentEpisodesSectionProps {
  episodes: Episode[];
}

export function RecentEpisodesSection({
  episodes,
}: RecentEpisodesSectionProps) {
  return (
    <section aria-labelledby="episodios-recientes" className="py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="episodios-recientes"
            eyebrow="Recién publicados"
            title="Episodios recientes"
            description="Tres conversaciones para empezar. Sin orden obligatorio y sin prisa."
          />
          <ButtonLink href="/episodios" variant="ghost">
            Ver todos los episodios
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </Container>
    </section>
  );
}
