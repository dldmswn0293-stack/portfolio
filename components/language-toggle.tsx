"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="rounded-sm border border-border px-[15px] py-[8px] text-[14px] font-medium text-ink-muted transition hover:border-ink hover:text-ink active:scale-95"
      aria-label="Toggle language"
    >
      {locale === "ko" ? "EN" : "KO"}
    </button>
  );
}
