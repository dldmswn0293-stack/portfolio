import type { Project } from "./types";

export const bearingPm: Project = {
  slug: "bearing-pm",
  order: 1,
  category: { ko: "예지보전", en: "Predictive Maintenance" },
  title: { ko: "베어링 예지보전", en: "Bearing Predictive Maintenance" },
  tagline: {
    ko: "진동 신호로 베어링 열화를 조기에 감지하는 RandomForest 모델",
    en: "Detecting early bearing degradation from vibration signals with a RandomForest model",
  },
  businessValue: {
    ko: "설비 다운타임은 곧 생산 손실 비용입니다. 고장 전 열화 징후를 미리 잡아내면 계획되지 않은 라인 정지를 계획된 정비로 바꿀 수 있습니다.",
    en: "Unplanned downtime is lost production revenue. Catching degradation before failure turns an unplanned line stop into scheduled maintenance.",
  },
  summary: {
    ko: "가속도계로 수집한 진동 신호에서 h_rms, h_kurt, h_skew, h_crest 등 통계적 특징을 추출해 베어링의 정상/열화 상태를 분류하는 RandomForest 모델입니다. 특징 중요도 분석을 통해 어떤 신호 특성이 열화를 가장 잘 설명하는지 검증했고, 임계값 튜닝으로 오탐/미탐 균형을 맞췄습니다.",
    en: "A RandomForest model that classifies bearing condition (normal vs. degraded) from statistical features - h_rms, h_kurt, h_skew, h_crest - extracted from accelerometer vibration signals. Feature-importance analysis validates which signal characteristics best explain degradation, and threshold tuning balances false positives against missed failures.",
  },
  highlights: [
    {
      ko: "h_rms·h_kurt·h_skew·h_crest 진동 특징 기반 정상/열화 이진 분류",
      en: "Binary normal/degraded classification from vibration features (h_rms, h_kurt, h_skew, h_crest)",
    },
    {
      ko: "특징 중요도 분석 결과 h_rms가 예측 기여도 82%로 가장 높음",
      en: "Feature-importance analysis shows h_rms drives 82% of the prediction",
    },
    {
      ko: "Streamlit Cloud에 실시간 진단 데모 배포",
      en: "Deployed as a live diagnostic demo on Streamlit Cloud",
    },
  ],
  techStack: ["RandomForest", "scikit-learn", "pandas", "Streamlit"],
  cover: "/projects/bearing-pm/stitch-cover.jpg",
  resources: [
    {
      label: { ko: "학습 노트북 (RUL)", en: "Training notebook (RUL)" },
      url: "https://github.com/dldmswn0293-stack/bearing_PM/blob/main/bearing_RUL.ipynb",
    },
    { label: { ko: "보고서 PDF", en: "Report PDF" }, url: "/projects/bearing-pm/report.pdf" },
  ],
  githubUrl: "https://github.com/dldmswn0293-stack/bearing_PM",
  demoUrl: "https://bearingpm-ej.streamlit.app/",
};
