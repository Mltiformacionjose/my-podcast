import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NavigationMenu, type NavigationItem } from "./NavigationMenu";

interface SiteHeaderProps {
  podcastName: string;
  items: NavigationItem[];
}

export function SiteHeader({ podcastName, items }: SiteHeaderProps) {
  const initials = podcastName
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/90 backdrop-blur">
      <Container>
        <div className="relative flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`${podcastName}, ir a la página principal`}
            className="flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span
              aria-hidden="true"
              className="grid h-11 w-11 place-items-center rounded-full bg-ink font-serif text-lg font-bold text-canvas"
            >
              {initials}
            </span>
            <span className="font-serif text-xl tracking-tight text-ink">
              {podcastName}
            </span>
          </Link>

          <NavigationMenu items={items} />
        </div>
      </Container>
    </header>
  );
}
