"use client";

import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function CtaButtons({
  githubUrl,
  demoUrl,
  showNotice = false,
}: {
  githubUrl: string;
  demoUrl: string;
  showNotice?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-pill bg-primary px-[22px] py-[11px] text-[15px] font-medium text-primary-on transition hover:bg-primary-dark active:scale-95"
        >
          <ExternalLink size={16} /> {t.card.demo}
        </Link>
        <Link
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-pill border border-border px-[22px] py-[11px] text-[15px] font-medium text-ink transition hover:border-ink active:scale-95"
        >
          <Code2 size={16} /> {t.card.github}
        </Link>
      </div>
      {showNotice && <p className="text-[12px] text-ink-faint">{t.card.demoNotice}</p>}
    </div>
  );
}
