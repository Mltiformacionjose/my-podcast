import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import type { NavigationItem } from "@/components/layout/NavigationMenu";
import { podcast } from "@/data/podcast";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "My Podcast — Historias que se escuchan",
    template: "%s — My Podcast",
  },
  description:
    "Un podcast de conversaciones pausadas sobre creación, cultura, oficios y vida cotidiana.",
  icons: {
    icon: "/favicon.svg",
  },
};

const navigationItems: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Episodios", href: "/episodios" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <SkipLink />
        <SiteHeader podcastName={podcast.name} items={navigationItems} />
        <main id="contenido">{children}</main>
        <SiteFooter
          podcastName={podcast.name}
          contactEmail={podcast.contactEmail}
          items={navigationItems}
        />
      </body>
    </html>
  );
}
