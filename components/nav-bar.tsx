"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LanguageToggle } from "./language-toggle";

export function NavBar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 flex h-11 items-center justify-between bg-surface-black px-6 text-white">
      <Link href="/" className="text-[12px] font-medium tracking-tight">
        EJ Portfolio
      </Link>
      <nav className="flex items-center gap-5">
        <Link href="/#projects" className="text-[12px] text-white/80 hover:text-white">
          {t.nav.work}
        </Link>
        <LanguageToggle />
      </nav>
    </header>
  );
}
