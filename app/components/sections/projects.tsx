import { projects } from "@/constants/data";
import { StaggerGroup, StaggerItem } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { ProjectCard } from "../ui/project-card";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading
          index="03"
          title="Featured Projects"
          description="A selection of things I've designed, built, and shipped."
        />

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} index={i} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
