"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { GalleryImage, ProjectVideo } from "@/content/projects/types";

const AUTO_ADVANCE_MS = 4000;

export function MediaPreview({
  images,
  video,
  title,
}: {
  images: GalleryImage[];
  video?: ProjectVideo;
  title: string;
}) {
  const { locale } = useLanguage();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (video || images.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [video, images.length]);

  if (video) {
    return (
      <div className="relative aspect-video w-full max-w-[860px] overflow-hidden rounded-lg product-shadow">
        <video
          src={video.src}
          poster={video.poster}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </div>
    );
  }

  if (images.length === 0) return null;

  return (
    <div className="flex w-full max-w-[860px] flex-col gap-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg product-shadow">
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.caption[locale]}
            fill
            sizes="(min-width: 900px) 860px, 100vw"
            className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
            priority={i === 0}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              aria-label={`${title} ${i + 1}`}
              aria-current={i === active}
              className={`h-1.5 rounded-pill transition-all ${
                i === active ? "w-6 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      )}
      <p className="text-center text-[13px] text-ink-faint">{images[active].caption[locale]}</p>
    </div>
  );
}
