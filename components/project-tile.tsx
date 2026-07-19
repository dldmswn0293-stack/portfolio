"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Project } from "@/content/projects/types";
import { CtaButtons } from "./cta-buttons";

export function ProjectTile({ project, dark }: { project: Project; dark: boolean }) {
  const { locale, t } = useLanguage();

  return (
    <section
      className={`flex flex-col items-center gap-8 px-6 py-20 text-center ${
        dark ? "bg-surface-tile-1 text-white" : "bg-canvas-parchment text-ink"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.374px] sm:text-[40px]">
          {project.title[locale]}
        </h2>
        <p className={`max-w-[560px] text-[17px] leading-[1.47] ${dark ? "text-white/70" : "text-ink-muted-80"}`}>
          {project.tagline[locale]}
        </p>
      </div>

      <Link href={`/projects/${project.slug}`} className="group relative w-full max-w-[720px] overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title[locale]}
          width={1200}
          height={720}
          className="product-shadow w-full object-cover transition group-hover:scale-[1.01]"
        />
      </Link>

      <ul className={`flex max-w-[560px] flex-col gap-1 text-[14px] ${dark ? "text-white/80" : "text-ink-muted-80"}`}>
        {project.highlights.slice(0, 2).map((h) => (
          <li key={h.en}>• {h[locale]}</li>
        ))}
      </ul>

      <CtaButtons githubUrl={project.githubUrl} demoUrl={project.demoUrl} />

      <Link href={`/projects/${project.slug}`} className="text-[14px] text-primary underline-offset-4 hover:underline">
        {t.card.viewProject} →
      </Link>
    </section>
  );
}
