"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-canvas-parchment px-6 py-16 text-ink-muted-80">
      <div className="mx-auto max-w-[1440px] text-[12px]">
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  );
}
