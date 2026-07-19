"use client";

import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Project } from "@/content/projects/types";
import { CtaButtons } from "@/components/cta-buttons";
import { TechBadge } from "@/components/tech-badge";
import { MediaPreview } from "@/components/media-preview";

export function ProjectDetailBody({ project }: { project: Project }) {
  const { locale, t } = useLanguage();

  return (
    <main className="flex-1">
      <section className="flex flex-col items-center gap-6 bg-canvas px-6 py-16 text-center">
        <Link href="/#projects" className="flex items-center gap-1 text-[14px] text-primary">
          <ArrowLeft size={14} /> {t.detail.back}
        </Link>
        <p className="text-[13px] font-semibold tracking-[0.03em] text-primary uppercase">
          {project.category[locale]}
        </p>
        <h1 className="text-[28px] font-bold leading-[1.25] text-ink sm:text-[36px]">{project.title[locale]}</h1>
        <p className="max-w-[600px] text-[16px] leading-[1.6] text-ink-muted">{project.tagline[locale]}</p>
        <MediaPreview images={project.gallery} video={project.video} title={project.title[locale]} />
      </section>

      <section className="border-y border-border bg-surface px-6 py-16">
        <div className="mx-auto flex max-w-[760px] flex-col gap-10">
          <div className="rounded-md border-l-2 border-primary bg-canvas py-3 pl-5 pr-4">
            <p className="mb-1 text-[12px] font-semibold tracking-[0.03em] text-primary uppercase">
              {t.card.whyItMatters}
            </p>
            <p className="text-[15px] leading-[1.6] text-ink-muted">{project.businessValue[locale]}</p>
          </div>

          <div>
            <h2 className="mb-4 text-[19px] font-bold text-ink">{t.detail.highlights}</h2>
            <ul className="flex flex-col gap-2">
              {project.highlights.map((h) => (
                <li key={h.en} className="flex items-start gap-2 text-[15px] leading-[1.6] text-ink-muted">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {h[locale]}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[15px] leading-[1.7] text-ink-muted">{project.summary[locale]}</p>

          <div>
            <h2 className="mb-3 text-[13px] font-semibold tracking-[0.03em] text-ink-faint uppercase">
              {t.detail.techStack}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </div>

          <CtaButtons githubUrl={project.githubUrl} demoUrl={project.demoUrl} showNotice />
        </div>
      </section>

      {project.resources && project.resources.length > 0 && (
        <section className="bg-canvas px-6 py-16">
          <div className="mx-auto flex max-w-[760px] flex-col gap-1">
            <h2 className="mb-3 text-[19px] font-bold text-ink">{t.detail.resources}</h2>
            <ul className="flex flex-col gap-1">
              {project.resources.map((r) => (
                <li key={r.url}>
                  <Link
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] leading-[2.2] text-primary hover:underline"
                  >
                    {r.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
