"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavigationItem[];
}

export function NavigationMenu({ items }: NavigationMenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <nav
        aria-label="Navegación principal"
        className="hidden items-center gap-1 md:flex"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              isActive(item.href)
                ? "bg-accent-soft text-accent-strong"
                : "text-ink-soft hover:bg-surface hover:text-ink"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors duration-200 hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
      >
        <span className="sr-only">
          {isOpen ? "Cerrar menú" : "Abrir menú"}
        </span>
        {isOpen ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Navegación móvil"
        className={`absolute top-full right-0 z-50 mt-3 w-64 rounded-2xl border border-line bg-surface p-3 shadow-card md:hidden ${
          isOpen ? "" : "hidden"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            aria-current={isActive(item.href) ? "page" : undefined}
            className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
              isActive(item.href)
                ? "bg-accent-soft text-accent-strong"
                : "text-ink-soft hover:bg-canvas hover:text-ink"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
