import type { Project } from "./types";

export const digitalTwin: Project = {
  slug: "digital-twin",
  order: 3,
  title: { ko: "제조 설비 Agentic AI 데모", en: "Manufacturing Agentic AI Demo" },
  tagline: {
    ko: "LangGraph 기반 RAG 에이전트로 ML 예지보전 모델과 레거시 시스템을 연결",
    en: "A LangGraph RAG agent wrapping ML predictive-maintenance models as tools for legacy systems",
  },
  summary: {
    ko: "질문의 의도를 라우팅해 하이브리드 검색(Dense+BM25)과 베어링·웨이퍼 예측 모델 Tool을 조건에 따라 호출하는 LangGraph 기반 Agent입니다. Claude API와 로컬 sLLM(Ollama) 백엔드를 코드 변경 없이 전환할 수 있도록 추상화했고, LangSmith로 전체 파이프라인을 트레이싱합니다.",
    en: "A LangGraph agent that routes user intent to either hybrid retrieval (Dense+BM25) or the bearing/wafer prediction models exposed as tools. The LLM backend is abstracted so it can switch between the Claude API and a local sLLM (Ollama) without touching application logic, with LangSmith tracing across the full pipeline.",
  },
  highlights: [
    { ko: "Hybrid Dense+BM25 검색과 LangGraph 조건부 라우팅", en: "Hybrid Dense+BM25 retrieval with LangGraph conditional routing" },
    { ko: "베어링·웨이퍼 예측 모델을 Tool로 연동한 Agentic 파이프라인", en: "Agentic pipeline wrapping the bearing and wafer prediction models as tools" },
    { ko: "Claude API와 로컬 sLLM 백엔드 전환, LangSmith로 전체 트레이싱", en: "Swappable Claude API / local sLLM backend, fully traced with LangSmith" },
  ],
  techStack: ["LangGraph", "LangChain", "Claude API", "ChromaDB", "BM25", "LangSmith", "Streamlit"],
  cover: "/projects/digital-twin/cover.png",
  gallery: [
    { src: "/projects/digital-twin/graph.png", caption: { ko: "LangGraph 파이프라인 구조", en: "LangGraph pipeline structure" } },
    { src: "/projects/digital-twin/hybrid-search.png", caption: { ko: "하이브리드 검색 동작", en: "Hybrid search in action" } },
    { src: "/projects/digital-twin/chunking-dummy.png", caption: { ko: "문서 청킹 예시", en: "Document chunking example" } },
    { src: "/projects/digital-twin/tool-test.png", caption: { ko: "Tool 연동 테스트", en: "Tool integration test" } },
  ],
  resources: [
    { label: { ko: "발표 자료 (PDF)", en: "Slide deck (PDF)" }, url: "/projects/digital-twin/slides.pdf" },
  ],
  githubUrl: "https://github.com/dldmswn0293-stack/digital_twin",
  demoUrl: "https://digitaltwin-ej.streamlit.app/",
};
