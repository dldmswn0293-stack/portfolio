import { bearingPm } from "./bearing-pm";
import { wafer } from "./wafer";
import { digitalTwin } from "./digital-twin";
import type { Project } from "./types";

export const projects: Project[] = [bearingPm, wafer, digitalTwin].sort(
  (a, b) => a.order - b.order,
);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export * from "./types";
