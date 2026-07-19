import type { Project } from "./types";

export const wafer: Project = {
  slug: "wafer",
  order: 2,
  category: { ko: "품질 검사 (컴퓨터 비전)", en: "Quality Inspection (Computer Vision)" },
  title: { ko: "웨이퍼 결함 패턴 분류", en: "Wafer Defect Pattern Classification" },
  tagline: {
    ko: "CNN과 Grad-CAM으로 반도체 웨이퍼맵 결함을 분류하고 설명하는 모델",
    en: "Classifying semiconductor wafer-map defects with a CNN, explained via Grad-CAM",
  },
  businessValue: {
    ko: "불량 유형을 빠르게 잡아낼수록 수율 손실과 재작업 비용이 줄어듭니다. 판단 근거까지 시각화하면 현장 엔지니어가 결과를 신뢰하고 바로 조치할 수 있습니다.",
    en: "The faster a defect pattern is caught, the less yield loss and rework cost it causes. Visualizing the model's reasoning lets floor engineers trust the call and act on it immediately.",
  },
  summary: {
    ko: "웨이퍼맵 이미지를 입력으로 다중 결함 패턴(Center, Donut, Edge-Ring 등)을 분류하는 CNN 모델입니다. Grad-CAM으로 모델이 어느 영역을 근거로 판단했는지 시각화해 설명가능성을 확보했고, MLflow로 실험을 추적하며 macro F1 기준으로 모델을 관리했습니다.",
    en: "A CNN model that classifies multiple wafer-map defect patterns (Center, Donut, Edge-Ring, etc.) from wafer-map images. Grad-CAM visualizes which regions drive each prediction for explainability, and experiments are tracked in MLflow using macro F1 as the model-selection metric.",
  },
  highlights: [
    { ko: "CNN 기반 다중 클래스 웨이퍼맵 결함 분류", en: "Multi-class wafer-map defect classification with a CNN" },
    { ko: "Grad-CAM으로 모델 판단 근거를 픽셀 단위로 시각화", en: "Grad-CAM visualizes the pixel-level basis for each prediction" },
    { ko: "MLflow로 실험 추적, macro F1 기준 모델 선정", en: "Experiment tracking in MLflow, model selection by macro F1" },
  ],
  techStack: ["CNN", "TensorFlow/Keras", "Grad-CAM", "MLflow", "Streamlit"],
  cover: "/projects/wafer/cover.png",
  gallery: [
    { src: "/projects/wafer/grad-cam.png", caption: { ko: "Grad-CAM 시각화", en: "Grad-CAM visualization" } },
    { src: "/projects/wafer/confusion-matrix-after.png", caption: { ko: "혼동 행렬(개선 후)", en: "Confusion matrix (after tuning)" } },
    { src: "/projects/wafer/sample-wafer-map.png", caption: { ko: "클래스별 웨이퍼맵 샘플", en: "Sample wafer maps per class" } },
    { src: "/projects/wafer/training-vs-validation.png", caption: { ko: "학습/검증 곡선", en: "Training vs. validation curves" } },
    { src: "/projects/wafer/mlflow-macro-f1.png", caption: { ko: "MLflow macro F1 추적", en: "MLflow macro F1 tracking" } },
  ],
  resources: [
    {
      label: { ko: "학습 노트북", en: "Training notebook" },
      url: "https://github.com/dldmswn0293-stack/wafer/blob/main/wafer_detection6.ipynb",
    },
  ],
  githubUrl: "https://github.com/dldmswn0293-stack/wafer",
  demoUrl: "https://waferdefect-ej.streamlit.app",
};
