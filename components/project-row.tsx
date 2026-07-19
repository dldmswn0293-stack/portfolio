"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Project } from "@/content/projects/types";
import { CtaButtons } from "./cta-buttons";
import { TechBadge } from "./tech-badge";
import { MediaPreview } from "./media-preview";

export function ProjectRow({ project }: { project: Project }) {
  const { locale, t } = useLanguage();

  return (
    <article className="flex flex-col gap-8 rounded-lg border border-border bg-canvas p-6 sm:p-8 md:flex-row">
      <MediaPreview
        cover={project.cover}
        video={project.video}
        title={project.title[locale]}
        className="aspect-[4/3] w-full shrink-0 md:w-[320px]"
      />

      <div className="flex flex-1 flex-col gap-4">
        <div>
          <p className="mb-2 text-[13px] font-semibold tracking-[0.03em] text-primary uppercase">
            {project.category[locale]}
          </p>
          <h2 className="mb-3 text-[22px] font-bold leading-[1.3] text-ink sm:text-[24px]">
            {project.title[locale]}
          </h2>
          <p className="text-[15px] leading-[1.6] text-ink-muted">{project.businessValue[locale]}</p>
        </div>

        <div>
          <h3 className="mb-2 text-[13px] font-semibold tracking-[0.03em] text-ink-faint uppercase">
            {t.detail.highlights}
          </h3>
          <ul className="flex flex-col gap-1.5">
            {project.highlights.map((h) => (
              <li key={h.en} className="flex items-start gap-2 text-[14px] leading-[1.5] text-ink-muted">
                <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                {h[locale]}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {project.resources && project.resources.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {project.resources.map((r) => (
              <Link
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-primary hover:underline"
              >
                {r.label[locale]}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-1">
          <CtaButtons githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
        </div>
      </div>
    </article>
  );
}
