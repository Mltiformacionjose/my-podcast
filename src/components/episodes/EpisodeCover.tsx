import type { CoverTheme } from "@/types/episode";

type CoverSize = "card" | "hero";

interface EpisodeCoverProps {
  number: number;
  title: string;
  theme?: CoverTheme;
  size?: CoverSize;
}

const themeClasses: Record<CoverTheme, string> = {
  terracotta: "from-[#a84326] via-[#7f2f18] to-[#3a140b]",
  olive: "from-[#5c6a2f] via-[#445023] to-[#202711]",
  navy: "from-[#24456f] via-[#183152] to-[#0c1829]",
  plum: "from-[#603a5a] via-[#452742] to-[#21121e]",
  amber: "from-[#8a5a14] via-[#6b430d] to-[#352006]",
  teal: "from-[#27625d] via-[#1a4743] to-[#0b2321]",
};

export function EpisodeCover({
  number,
  title,
  theme = "terracotta",
  size = "card",
}: EpisodeCoverProps) {
  const isHero = size === "hero";
  const gradient = themeClasses[theme] ?? themeClasses.terracotta;

  return (
    <div
      role="img"
      aria-label={`Portada del episodio ${number}: ${title}`}
      className={`relative flex w-full flex-col justify-between overflow-hidden rounded-card bg-linear-to-br p-5 text-white ${
        isHero ? "aspect-[4/5] sm:aspect-square" : "aspect-[16/10]"
      } ${gradient}`}
    >
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/90">
        My Podcast
      </span>

      <div className="relative z-10">
        <span
          className={`block font-serif leading-none text-white ${
            isHero ? "text-7xl sm:text-8xl" : "text-5xl"
          }`}
        >
          {String(number).padStart(2, "0")}
        </span>
        <span className="mt-2 block max-w-64 text-sm leading-5 text-white/90">
          {title}
        </span>
      </div>

      <div
        aria-hidden="true"
        className="absolute -top-10 -right-8 h-32 w-32 rounded-full border border-white/20"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
      />
    </div>
  );
}
