"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Project } from "@/content/projects/types";
import { CtaButtons } from "./cta-buttons";
import { TechBadge } from "./tech-badge";

export function ProjectTile({ project, dark }: { project: Project; dark: boolean }) {
  const { locale, t } = useLanguage();

  return (
    <article
      id={project.slug}
      className={`flex flex-col gap-8 rounded-lg border border-border bg-canvas p-6 sm:p-10 md:flex-row ${
        dark ? "md:flex-row-reverse" : ""
      }`}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block aspect-video w-full shrink-0 overflow-hidden rounded-md border border-border md:w-[38%]"
      >
        <Image
          src={project.cover}
          alt={project.title[locale]}
          fill
          sizes="(min-width: 768px) 38vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-4">
        <div>
          <p className="mb-2 text-[13px] font-semibold tracking-[0.03em] text-primary uppercase">
            {project.category[locale]}
          </p>
          <h2 className="mb-3 text-[22px] font-bold leading-[1.3] text-ink sm:text-[26px]">
            {project.title[locale]}
          </h2>
          <p className="text-[15px] leading-[1.6] text-ink-muted">{project.tagline[locale]}</p>
        </div>

        <div className="rounded-md border-l-2 border-primary bg-primary-tint/40 py-2.5 pl-4 pr-3">
          <p className="mb-0.5 text-[12px] font-semibold tracking-[0.03em] text-primary uppercase">
            {t.card.whyItMatters}
          </p>
          <p className="text-[14px] leading-[1.55] text-ink-muted">{project.businessValue[locale]}</p>
        </div>

        <ul className="flex flex-col gap-1.5">
          {project.highlights.map((h) => (
            <li key={h.en} className="flex items-start gap-2 text-[14px] leading-[1.5] text-ink-muted">
              <Check size={15} className="mt-0.5 shrink-0 text-primary" />
              {h[locale]}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <CtaButtons githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
          <Link
            href={`/projects/${project.slug}`}
            className="text-[14px] font-medium text-primary underline-offset-4 hover:underline"
          >
            {t.card.viewProject} →
          </Link>
        </div>
      </div>
    </article>
  );
}
