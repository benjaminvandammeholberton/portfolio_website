import SectionTitle from "../components/section-title/SectionTitle";
import { projects } from "../data/projects";
import Project from "./ProjectItem";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="project">
      <SectionTitle title="Projets" />
      <div className="grid-container">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
