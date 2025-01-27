import { Project } from "../../models/Project"

function ProjectDetails({project}: {project: Project}) {
  return (
    <>
      <div className="project-details-section-1">
        <img src={project.imgURL} className="project-img"/>
        <div className="project-overview">
          <h1>
            {project.title}
          </h1>
          <h3>
            {project.overview}
          </h3>
          <p>
            {project.tech.join(', ')}
          </p>
        </div>
      </div>
      <div className="project-details-section-2">
        {project.details}
      </div>
      <div className="project-details-section-3">

        <div className="project-button">
          <a
            href={project.siteURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button >Visit Deployed Site</button>
          </a>
        </div>
        
        <div className="project-button">
          <a
            href={project.githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-link"
          >
            <button >View Project Github</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails