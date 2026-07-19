"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Project } from "@/content/projects/types";
import { CtaButtons } from "@/components/cta-buttons";
import { TechBadge } from "@/components/tech-badge";
import { Gallery } from "@/components/gallery";

export function ProjectDetailBody({ project }: { project: Project }) {
  const { locale, t } = useLanguage();

  return (
    <main className="flex-1">
      <section className="flex flex-col items-center gap-6 bg-canvas px-6 py-20 text-center">
        <Link href="/#projects" className="flex items-center gap-1 text-[14px] text-primary">
          <ArrowLeft size={14} /> {t.detail.back}
        </Link>
        <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.28px] text-ink sm:text-[40px]">
          {project.title[locale]}
        </h1>
        <p className="max-w-[600px] text-[17px] leading-[1.47] text-ink-muted-80">{project.tagline[locale]}</p>
        <Image
          src={project.cover}
          alt={project.title[locale]}
          width={1200}
          height={720}
          className="product-shadow w-full max-w-[900px] object-cover"
        />
      </section>

      <section className="flex flex-col items-center gap-10 bg-surface-tile-1 px-6 py-20 text-white">
        <div className="flex max-w-[720px] flex-col gap-6">
          <div>
            <h2 className="mb-3 text-[21px] font-semibold">{t.detail.highlights}</h2>
            <ul className="flex flex-col gap-2 text-[17px] leading-[1.47] text-white/85">
              {project.highlights.map((h) => (
                <li key={h.en}>• {h[locale]}</li>
              ))}
            </ul>
          </div>
          <p className="text-[17px] leading-[1.47] text-white/85">{project.summary[locale]}</p>
        </div>

        <div>
          <h2 className="mb-3 text-center text-[14px] font-semibold text-white/70">{t.detail.techStack}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </div>

        <CtaButtons githubUrl={project.githubUrl} demoUrl={project.demoUrl} showNotice />
      </section>

      <section className="bg-canvas px-6 py-20">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-10">
          <div>
            <h2 className="mb-6 text-[21px] font-semibold text-ink">{t.detail.gallery}</h2>
            <Gallery images={project.gallery} />
          </div>

          {project.resources && project.resources.length > 0 && (
            <div>
              <h2 className="mb-4 text-[21px] font-semibold text-ink">{t.detail.resources}</h2>
              <ul className="flex flex-col gap-1">
                {project.resources.map((r) => (
                  <li key={r.url}>
                    <Link
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[17px] leading-[2.41] text-primary hover:underline"
                    >
                      {r.label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
