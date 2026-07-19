export type Locale = "ko" | "en";

export interface Dictionary {
  nav: { work: string };
  hero: { eyebrow: string; title: string; subtitle: string };
  card: { github: string; demo: string; demoNotice: string; viewProject: string };
  detail: { back: string; highlights: string; techStack: string; gallery: string; resources: string };
  footer: { rights: string };
}

export const dictionary: Record<Locale, Dictionary> = {
  ko: {
    nav: { work: "프로젝트" },
    hero: {
      eyebrow: "ML · DL · LLM 포트폴리오",
      title: "데이터로 문제를 풀고,\n모델로 현장에 배포합니다.",
      subtitle:
        "예지보전부터 Agentic RAG까지, 제조 도메인의 ML/DL/LLM 프로젝트 3가지를 소개합니다.",
    },
    card: {
      github: "GitHub",
      demo: "Live Demo",
      demoNotice: "최초 로딩 시 20~30초 정도 걸릴 수 있어요.",
      viewProject: "프로젝트 자세히 보기",
    },
    detail: {
      back: "전체 프로젝트",
      highlights: "Key Highlights",
      techStack: "Tech Stack",
      gallery: "스크린샷",
      resources: "자료",
    },
    footer: {
      rights: "모든 프로젝트 코드는 GitHub에서 확인하실 수 있습니다.",
    },
  },
  en: {
    nav: { work: "Projects" },
    hero: {
      eyebrow: "ML · DL · LLM Portfolio",
      title: "Solving problems with data,\nshipping models to production.",
      subtitle:
        "Three ML/DL/LLM projects spanning predictive maintenance to agentic RAG in manufacturing.",
    },
    card: {
      github: "GitHub",
      demo: "Live Demo",
      demoNotice: "First load may take 20-30s while the demo wakes up.",
      viewProject: "View project",
    },
    detail: {
      back: "All projects",
      highlights: "Key Highlights",
      techStack: "Tech Stack",
      gallery: "Screenshots",
      resources: "Resources",
    },
    footer: {
      rights: "All project source code is available on GitHub.",
    },
  },
};
