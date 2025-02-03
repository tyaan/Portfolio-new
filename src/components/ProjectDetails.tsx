import { Project } from "../../models/Project"

function ProjectDetails({project}: {project: Project}) {
  return (
    <div className='project-details'>
      
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

    </ div>
  )
}

export default ProjectDetails