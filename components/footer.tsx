"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-surface px-6 py-12">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-2 text-center">
        <p className="text-[14px] font-semibold text-ink">Eunju Lee</p>
        <p className="text-[13px] text-ink-muted">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
