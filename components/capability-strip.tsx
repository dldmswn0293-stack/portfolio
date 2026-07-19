"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/content/projects";

export function CapabilityStrip() {
  const { locale, t } = useLanguage();

  return (
    <section className="border-y border-border bg-surface px-6 py-16">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10">
        <p className="self-start text-[13px] font-semibold tracking-[0.06em] text-ink-faint uppercase">
          {t.hero.capabilitiesLabel}
        </p>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="rounded-lg border border-border bg-canvas p-6">
              <p className="mb-2 text-[13px] font-semibold text-primary">{project.category[locale]}</p>
              <p className="text-[14px] leading-[1.6] text-ink-muted">{project.businessValue[locale]}</p>
            </div>
          ))}
        </div>

        <Link
          href="/projects"
          className="rounded-pill bg-primary px-8 py-3 text-[15px] font-medium text-primary-on transition hover:bg-primary-dark active:scale-95"
        >
          {t.hero.viewAllProjects}
        </Link>
      </div>
    </section>
  );
}
