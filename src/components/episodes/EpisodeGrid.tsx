import type { Episode } from "@/types/episode";
import { EpisodeCard } from "./EpisodeCard";

interface EpisodeGridProps {
  episodes: Episode[];
}

export function EpisodeGrid({ episodes }: EpisodeGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
}
