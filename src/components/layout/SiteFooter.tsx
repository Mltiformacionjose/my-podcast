import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { NavigationItem } from "./NavigationMenu";

interface SiteFooterProps {
  podcastName: string;
  contactEmail: string;
  items: NavigationItem[];
}

export function SiteFooter({
  podcastName,
  contactEmail,
  items,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-line bg-surface/70">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-ink">{podcastName}</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-ink-soft">
              Conversaciones pausadas sobre creación, cultura y vida cotidiana.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 inline-flex min-h-7 items-center text-sm font-semibold text-accent-strong underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              {contactEmail}
            </a>
          </div>

          <nav aria-label="Navegación del pie de página">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Explorar
            </p>
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft hover:text-accent-strong"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Hecho con cuidado
            </p>
            <p className="mt-4 text-sm leading-6 text-ink-soft">
              Sitio de demostración con datos simulados. Sin bases de datos ni
              servicios externos.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {podcastName}. Contenido simulado.</p>
          <p>Hecho para escuchar sin prisa.</p>
        </div>
      </Container>
    </footer>
  );
}
