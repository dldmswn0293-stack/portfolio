"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ProjectRow } from "@/components/project-row";
import type { Project } from "@/content/projects/types";

export function ProjectsListBody({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();

  return (
    <main className="flex-1 bg-surface px-6 py-16">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-1 text-[14px] text-primary">
            <ArrowLeft size={14} /> {t.nav.home}
          </Link>
          <h1 className="text-[28px] font-bold text-ink sm:text-[32px]">{t.hero.capabilitiesLabel}</h1>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
