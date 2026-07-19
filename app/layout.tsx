import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "EJ Portfolio — ML/DL/LLM Projects",
    template: "%s — EJ Portfolio",
  },
  description: "예지보전부터 Agentic RAG까지, 제조 도메인 ML/DL/LLM 프로젝트 포트폴리오.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <NavBar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
