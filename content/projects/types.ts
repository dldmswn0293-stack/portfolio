export interface LocalizedText {
  ko: string;
  en: string;
}

export interface GalleryImage {
  src: string;
  caption: LocalizedText;
}

export interface ResourceLink {
  label: LocalizedText;
  url: string;
}

export interface ProjectVideo {
  src: string;
  poster?: string;
}

export interface Project {
  slug: string;
  order: number;
  category: LocalizedText;
  title: LocalizedText;
  tagline: LocalizedText;
  businessValue: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedText[];
  techStack: string[];
  cover: string;
  /** 상세 페이지 상단 미리보기: video가 있으면 영상, 없으면 gallery 이미지를 자동 순환 캐러셀로 보여줌 */
  gallery: GalleryImage[];
  video?: ProjectVideo;
  resources?: ResourceLink[];
  githubUrl: string;
  demoUrl: string;
}
