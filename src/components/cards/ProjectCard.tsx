import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__image" aria-hidden="true">
        {project.image ? <img src={project.image} alt="" /> : '⌘'}
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-card__actions">
          {project.demoUrl ? (
            <a
              className="button button--primary button--sm"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              ↗ Ver proyecto
            </a>
          ) : null}
          {project.repositoryUrl ? (
            <a
              className="button button--secondary button--sm"
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              &lt;/&gt; Código
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
