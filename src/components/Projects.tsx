import { projects } from "../../data/projects";

function ProjectList() {
  // Map over projects array and render a list of projects with their name and description

  return (
    <div className="proDivContain">
      {projects.map((project) => (
        <div className="proDiv" key={project._id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
