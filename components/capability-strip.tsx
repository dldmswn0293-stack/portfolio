"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/content/projects";

export function CapabilityStrip() {
  const { locale, t } = useLanguage();

  return (
    <section className="border-y border-border bg-surface px-6 py-14">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-6 text-[13px] font-semibold tracking-[0.06em] text-ink-faint uppercase">
          {t.hero.capabilitiesLabel}
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="rounded-lg border border-border bg-canvas p-6">
              <p className="mb-2 text-[13px] font-semibold text-primary">{project.category[locale]}</p>
              <p className="text-[14px] leading-[1.6] text-ink-muted">{project.businessValue[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
