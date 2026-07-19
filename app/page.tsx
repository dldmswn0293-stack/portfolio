import { Hero } from "@/components/hero";
import { ProjectTile } from "@/components/project-tile";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <div id="projects">
        {projects.map((project, i) => (
          <ProjectTile key={project.slug} project={project} dark={i % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
