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
  category: LocalizedText;
  title: LocalizedText;
  tagline: LocalizedText;
  businessValue: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedText[];
  techStack: string[];
  cover: string;
  gallery: GalleryImage[];
  resources?: ResourceLink[];
  githubUrl: string;
  demoUrl: string;
}
