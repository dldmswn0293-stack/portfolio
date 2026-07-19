"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col items-center gap-6 bg-canvas px-6 py-20 text-center">
      <p className="text-[14px] font-semibold text-primary">{t.hero.eyebrow}</p>
      <h1 className="max-w-[720px] whitespace-pre-line text-[40px] font-semibold leading-[1.1] tracking-[-0.28px] text-ink sm:text-[56px] sm:leading-[1.07]">
        {t.hero.title}
      </h1>
      <p className="max-w-[560px] text-[17px] leading-[1.47] tracking-[-0.374px] text-ink-muted-80">
        {t.hero.subtitle}
      </p>
    </section>
  );
}
