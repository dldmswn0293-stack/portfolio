import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { ProjectDetailBody } from "./project-detail-body";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title.ko,
    description: project.tagline.ko,
    openGraph: {
      title: project.title.ko,
      description: project.tagline.ko,
      images: [project.cover],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectDetailBody project={project} />;
}
