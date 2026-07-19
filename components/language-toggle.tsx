"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="rounded-sm bg-ink px-[15px] py-[8px] text-[14px] text-white transition active:scale-95"
      aria-label="Toggle language"
    >
      {locale === "ko" ? "EN" : "KO"}
    </button>
  );
}
