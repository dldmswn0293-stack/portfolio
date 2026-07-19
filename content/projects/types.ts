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

export interface Project {
  slug: string;
  order: number;
  title: LocalizedText;
  tagline: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedText[];
  techStack: string[];
  cover: string;
  gallery: GalleryImage[];
  resources?: ResourceLink[];
  githubUrl: string;
  demoUrl: string;
}
