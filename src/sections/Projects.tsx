import { ProjectCard } from '../components/cards/ProjectCard'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section className="section section--dark" id="projects">
      <Container>
        <SectionHeading eyebrow="PROYECTOS" title="Mi portafolio" />
        {projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span aria-hidden="true">⌘</span>
            <p>Próximamente agregaré mis proyectos destacados.</p>
          </div>
        )}
      </Container>
    </section>
  )
}
