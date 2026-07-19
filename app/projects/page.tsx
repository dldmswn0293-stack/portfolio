import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectsListBody } from "./projects-list-body";

export const metadata: Metadata = {
  title: "AI Projects",
  description: "예지보전, 품질 검사, Agentic AI — 스마트팩토리 AI 프로젝트 3가지.",
};

export default function ProjectsPage() {
  return <ProjectsListBody projects={projects} />;
}
