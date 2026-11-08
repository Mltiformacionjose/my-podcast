import { episodes } from "@/data/episodes";
import type { Episode } from "@/types/episode";

export function getEpisodes(): Episode[] {
  return [...episodes].sort((first, second) => second.number - first.number);
}

export function getRecentEpisodes(limit = 3): Episode[] {
  return getEpisodes().slice(0, Math.max(0, limit));
}

export function getEpisodeById(id: string): Episode | undefined {
  return episodes.find((episode) => episode.id === id);
}
