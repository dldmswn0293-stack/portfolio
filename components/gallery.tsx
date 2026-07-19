"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { GalleryImage } from "@/content/projects/types";

export function Gallery({ images }: { images: GalleryImage[] }) {
  const { locale } = useLanguage();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {images.map((img) => (
        <figure key={img.src} className="overflow-hidden rounded-lg border border-hairline bg-canvas">
          <Image
            src={img.src}
            alt={img.caption[locale]}
            width={800}
            height={500}
            className="w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-[14px] text-ink-muted-80">{img.caption[locale]}</figcaption>
        </figure>
      ))}
    </div>
  );
}
