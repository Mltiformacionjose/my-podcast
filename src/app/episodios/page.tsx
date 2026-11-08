import type { Metadata } from "next";
import { EpisodeGrid } from "@/components/episodes/EpisodeGrid";
import { Container } from "@/components/ui/Container";
import { getEpisodes } from "@/lib/episodes";

export const metadata: Metadata = {
  title: "Episodios",
  description:
    "Los 20 episodios de My Podcast: conversaciones sobre creación, cultura, oficios y vida cotidiana.",
};

export default function EpisodesPage() {
  const episodes = getEpisodes();

  return (
    <>
      <section className="border-b border-line/70 bg-surface/40 py-14 md:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Catálogo completo · Temporadas 1 y 2
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Todos los episodios
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft">
            Veinte conversaciones ordenadas de la más reciente a la más antigua.
            Cada episodio incluye su portada, fecha, duración y un botón para
            escuchar en esta demostración.
          </p>
        </Container>
      </section>

      <section aria-labelledby="listado-episodios" className="py-14 md:py-20">
        <Container>
          <h2 id="listado-episodios" className="sr-only">
            Listado de episodios
          </h2>
          <EpisodeGrid episodes={episodes} />
        </Container>
      </section>
    </>
  );
}
