import Image from "next/image";
import Link from "next/link";
import { TechStack } from "./TechStack";
import { ProjectType, projects } from "@data";

const Project = ({ project }: { project: ProjectType }) => {
  const projectUrl = `/projects/${project.slug}`;
  return (
    <div id={`project-${project.slug}`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h3>
          <Link href={projectUrl} target="_blank" className="project-title ">
            {project.title}
          </Link>
        </h3>
        <h4 className="text-zinc-500 font-light m-0">{project.type}</h4>
      </div>
      <div className="project-container">
        <Link
          className="project-image-container"
          href={projectUrl}
          target="_blank"
        >
          {/* {project.featured && <span className="absolute -ml-4 -mt-4">✨</span>} */}
          <Image
            className="project-image"
            src={project.imageUrl}
            alt={`${project.imageAlt}`}
            width={400}
            height={300}
          />
        </Link>
        <div className="project-details">
          <div className="project-summary">{project.summary}</div>
          <Link
            href={projectUrl}
            target="_blank"
            className="text-lg font-medium block my-5"
          >
            Click here to learn more
          </Link>
          <TechStack technologies={project.technologies} />
        </div>
      </div>
    </div>
  );
};

export const Projects = () => (
  <section id="projects">
    <h2>Portfolio</h2>
    <hr />
    <p>
      {
        "Below are exciting projects I have created and/or contributed to during my career. Due to the nature of some industries, certain projects are under NDA agreements, so I can’t show everything I’ve worked on."
      }
    </p>
    <div className="project-showcase">
      {projects.map((p) => {
        return <Project key={p.slug} project={p} />;
      })}
    </div>
  </section>
);
