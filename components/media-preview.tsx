"use client";

import Image from "next/image";
import type { ProjectVideo } from "@/content/projects/types";

export function MediaPreview({
  cover,
  video,
  title,
  className = "",
}: {
  cover: string;
  video?: ProjectVideo;
  title: string;
  className?: string;
}) {
  if (video) {
    return (
      <div className={`relative overflow-hidden rounded-lg product-shadow ${className}`}>
        {/* 재생 버튼은 poster가 있는 네이티브 video 컨트롤이 자동으로 보여줌 */}
        <video src={video.src} poster={video.poster ?? cover} className="h-full w-full object-cover" controls playsInline />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg product-shadow ${className}`}>
      <Image src={cover} alt={title} fill sizes="(min-width: 900px) 860px, 100vw" className="object-cover" />
    </div>
  );
}
