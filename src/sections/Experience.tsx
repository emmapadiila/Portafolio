import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { ExperienceCard } from '../components/cards/ExperienceCard'

export function Experience() {
  return (
    <section className="section section--mid" id="experience">
      <Container>
        <SectionHeading eyebrow="TRAYECTORIA" title="Experiencia & Educación" />
        <div className="timeline-grid">
          <div className="timeline-column">
            <h3 className="column-title">▣ Experiencia Profesional</h3>
            {experience.map((item) => (
              <ExperienceCard experience={item} key={item.id} />
            ))}
          </div>
          <div className="timeline-column education-column">
            <h3 className="column-title">♧ Formación Académica</h3>
            {education.map((item) => (
              <article className="education-card" key={item.id}>
                <span className="timeline-dot" />
                <h3>{item.program}</h3>
                <p>{item.institution}</p>
                <span>{item.period}</span>
                {item.semester ? <em>{item.semester} semestre</em> : null}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
