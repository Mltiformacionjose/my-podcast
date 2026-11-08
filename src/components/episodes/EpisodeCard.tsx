import { formatDate, formatDuration } from "@/lib/format";
import type { Episode } from "@/types/episode";
import { EpisodeCover } from "./EpisodeCover";
import { ListenButton } from "./ListenButton";

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="p-3 pb-0">
        <EpisodeCover
          number={episode.number}
          title={episode.title}
          theme={episode.coverTheme}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          <span>Episodio {episode.number}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={episode.publishedAt}>
            {formatDate(episode.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{formatDuration(episode.durationMinutes)}</span>
        </div>

        <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">
          {episode.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
          {episode.summary}
        </p>

        <div className="mt-5">
          <ListenButton
            episodeNumber={episode.number}
            episodeTitle={episode.title}
          />
        </div>
      </div>
    </article>
  );
}
