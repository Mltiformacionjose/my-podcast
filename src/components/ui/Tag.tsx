import type { ReactNode } from "react";

type TagTone = "neutral" | "accent";

interface TagProps {
  children: ReactNode;
  tone?: TagTone;
}

const toneClasses: Record<TagTone, string> = {
  neutral: "border border-line bg-canvas text-muted",
  accent: "bg-accent-soft text-accent-strong",
};

export function Tag({ children, tone = "neutral" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
