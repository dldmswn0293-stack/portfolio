export interface LocalizedText {
  ko: string;
  en: string;
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
  /** 목록/상세 페이지 미리보기 대표 이미지 */
  cover: string;
  /** 녹화된 시연 영상이 있으면 대표 이미지 대신 재생 가능한 영상으로 보여줌 */
  video?: ProjectVideo;
  resources?: ResourceLink[];
  githubUrl: string;
  demoUrl: string;
}
