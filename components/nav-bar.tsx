"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LanguageToggle } from "./language-toggle";

export function NavBar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-canvas/90 px-6 backdrop-blur-md">
      <Link href="/" className="text-[15px] font-bold tracking-tight text-ink">
        Eunju Lee
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/projects" className="text-[14px] text-ink-muted hover:text-ink">
          {t.nav.work}
        </Link>
        <a
          href="https://github.com/dldmswn0293-stack"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-[14px] text-ink-muted hover:text-ink"
        >
          <Code2 size={15} /> GitHub
        </a>
        <LanguageToggle />
      </nav>
    </header>
  );
}
