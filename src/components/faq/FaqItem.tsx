import type { FaqItem as FaqItemType } from "@/types/faq";

interface FaqItemProps {
  item: FaqItemType;
}

export function FaqItem({ item }: FaqItemProps) {
  return (
    <details className="group rounded-2xl border border-line bg-surface px-5 py-4 transition-colors open:border-accent/50 open:bg-white">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-serif text-xl leading-snug text-ink [&::-webkit-details-marker]:hidden">
        <span>{item.question}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="mt-1 h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </summary>

      <div className="mt-3 border-t border-line pt-3">
        <p className="text-sm leading-7 text-ink-soft">{item.answer}</p>
      </div>
    </details>
  );
}
