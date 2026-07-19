"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-canvas px-6 py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-6 text-left">
          <p className="text-[13px] font-semibold tracking-[0.06em] text-primary uppercase">{t.hero.eyebrow}</p>
          <h1 className="whitespace-pre-line text-[32px] font-bold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[40px]">
            {t.hero.title.split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "text-primary" : undefined}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="max-w-[520px] text-[16px] leading-[1.6] text-ink-muted">{t.hero.subtitle}</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#projects"
              className="rounded-pill bg-primary px-7 py-3 text-[15px] font-medium text-primary-on transition hover:bg-primary-dark active:scale-95"
            >
              {t.card.viewProject}
            </Link>
            <a
              href="https://github.com/dldmswn0293-stack"
              target="_blank"
              rel="noreferrer"
              className="rounded-pill border border-border px-7 py-3 text-[15px] font-medium text-ink transition hover:border-ink active:scale-95"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg product-shadow">
          <Image
            src="/hero-factory.jpg"
            alt="Smart factory floor"
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
