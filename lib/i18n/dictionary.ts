export type Locale = "ko" | "en";

export interface Dictionary {
  nav: { work: string };
  hero: { eyebrow: string; title: string; subtitle: string; capabilitiesLabel: string };
  card: { github: string; demo: string; demoNotice: string; whyItMatters: string };
  detail: { back: string; highlights: string; techStack: string; resources: string };
  footer: { rights: string };
}

export const dictionary: Record<Locale, Dictionary> = {
  ko: {
    nav: { work: "프로젝트" },
    hero: {
      eyebrow: "스마트팩토리 × AI 솔루션",
      title: "현장을 이해하는 기술로,\n고객의 스마트팩토리를 설계합니다.",
      subtitle:
        "예지보전, 품질 검사, Agentic AI까지 — 제조 현장의 문제를 AI로 직접 풀어본 경험이 고객의 니즈를 가장 정확히 짚어내는 기술 기반 제안의 출발점이 됩니다.",
      capabilitiesLabel: "핵심 역량",
    },
    card: {
      github: "GitHub",
      demo: "Live Demo",
      demoNotice: "최초 로딩 시 20~30초 정도 걸릴 수 있어요.",
      whyItMatters: "왜 중요한가",
    },
    detail: {
      back: "전체 프로젝트",
      highlights: "Key Highlights",
      techStack: "Tech Stack",
      resources: "자료",
    },
    footer: {
      rights: "모든 프로젝트 코드는 GitHub에서 확인하실 수 있습니다.",
    },
  },
  en: {
    nav: { work: "Projects" },
    hero: {
      eyebrow: "Smart Factory × AI Solutions",
      title: "Engineering that understands the floor,\ndesigning smart factories with customers.",
      subtitle:
        "From predictive maintenance to defect inspection and agentic AI — hands-on experience solving real shop-floor problems is what makes a technical proposal actually land with the customer.",
      capabilitiesLabel: "Core Capabilities",
    },
    card: {
      github: "GitHub",
      demo: "Live Demo",
      demoNotice: "First load may take 20-30s while the demo wakes up.",
      whyItMatters: "Why it matters",
    },
    detail: {
      back: "All projects",
      highlights: "Key Highlights",
      techStack: "Tech Stack",
      resources: "Resources",
    },
    footer: {
      rights: "All project source code is available on GitHub.",
    },
  },
};
