import { Hero } from "@/components/hero";
import { CapabilityStrip } from "@/components/capability-strip";
import { ProjectTile } from "@/components/project-tile";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <CapabilityStrip />
      <div id="projects" className="mx-auto flex max-w-[1100px] flex-col gap-8 px-6 py-20">
        {projects.map((project, i) => (
          <ProjectTile key={project.slug} project={project} dark={i % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
