"use client";

import { useState } from "react";

interface ListenButtonProps {
  episodeNumber: number;
  episodeTitle: string;
}

export function ListenButton({
  episodeNumber,
  episodeTitle,
}: ListenButtonProps) {
  const [showNotice, setShowNotice] = useState(false);
  const noticeId = `listen-notice-${episodeNumber}`;

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowNotice(true)}
        aria-describedby={showNotice ? noticeId : undefined}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-accent"
        >
          <path d="M6.75 4.5a.75.75 0 0 1 1.14-.64l7 4.5a.75.75 0 0 1 0 1.28l-7 4.5a.75.75 0 0 1-1.14-.64V4.5Z" />
        </svg>
        Escuchar episodio {episodeNumber}
        <span className="sr-only">: {episodeTitle}</span>
      </button>
      <p
        id={noticeId}
        aria-live="polite"
        className="mt-2 min-h-5 text-xs leading-5 text-muted"
      >
        {showNotice
          ? "La reproducción no está disponible en esta demostración."
          : ""}
      </p>
    </div>
  );
}
