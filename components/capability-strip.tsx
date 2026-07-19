"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/content/projects";

export function CapabilityStrip() {
  const { locale, t } = useLanguage();

  return (
    <section id="projects" className="border-y border-border bg-surface px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-6 text-[13px] font-semibold tracking-[0.06em] text-ink-faint uppercase">
          {t.hero.capabilitiesLabel}
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-canvas transition hover:border-primary hover:shadow-sm"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.title[locale]}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="text-[12px] font-semibold tracking-[0.03em] text-primary uppercase">
                  {project.category[locale]}
                </p>
                <p className="text-[14px] leading-[1.55] text-ink-muted">{project.businessValue[locale]}</p>
                <span className="mt-auto flex items-center gap-1 pt-2 text-[13px] font-medium text-primary">
                  {project.title[locale]}
                  <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
