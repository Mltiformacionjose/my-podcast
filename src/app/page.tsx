import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { HeroSection } from "@/components/home/HeroSection";
import { RecentEpisodesSection } from "@/components/home/RecentEpisodesSection";
import { podcast } from "@/data/podcast";
import { getRecentEpisodes } from "@/lib/episodes";

export const metadata: Metadata = {
  title: { absolute: "My Podcast — Historias que se escuchan" },
  description: podcast.shortDescription,
};

export default function HomePage() {
  const recentEpisodes = getRecentEpisodes(3);
  const featuredEpisode = recentEpisodes[0];

  return (
    <>
      <HeroSection podcast={podcast} featuredEpisode={featuredEpisode} />
      <RecentEpisodesSection episodes={recentEpisodes} />
      <AboutSection podcast={podcast} />
    </>
  );
}
