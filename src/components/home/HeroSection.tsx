import { EpisodeCover } from "@/components/episodes/EpisodeCover";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import type { Episode } from "@/types/episode";
import type { Podcast } from "@/types/podcast";

interface HeroSectionProps {
  podcast: Podcast;
  featuredEpisode?: Episode;
}

export function HeroSection({ podcast, featuredEpisode }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-line/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-accent-soft/70 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Podcast independiente · Temporada 2
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Historias que se escuchan.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
            {podcast.shortDescription}
          </p>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted">
            {podcast.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/episodios">
              Descubrir episodios
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </ButtonLink>
            <ButtonLink href="#sobre-el-podcast" variant="secondary">
              Conocer el podcast
            </ButtonLink>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Episodios
              </dt>
              <dd className="mt-1 font-serif text-2xl text-ink">20</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Temporadas
              </dt>
              <dd className="mt-1 font-serif text-2xl text-ink">2</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Voces
              </dt>
              <dd className="mt-1 font-serif text-2xl text-ink">2</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {featuredEpisode ? (
            <EpisodeCover
              number={featuredEpisode.number}
              title={featuredEpisode.title}
              theme={featuredEpisode.coverTheme}
              size="hero"
            />
          ) : (
            <div className="aspect-[4/5] rounded-card border border-line bg-surface" />
          )}

          <div className="absolute -bottom-5 left-4 rounded-2xl border border-line bg-surface px-4 py-3 shadow-card sm:-left-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
              Último episodio
            </p>
            <p className="mt-1 max-w-56 font-serif text-lg leading-snug text-ink">
              {featuredEpisode?.title ?? "Próximamente"}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
