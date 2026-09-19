import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { personalInfo } from '../data/personal'

export function About() {
  const facts = [
    {
      label: 'Carrera',
      value: personalInfo.profile.split(' y ')[0].replace('Estudiante de ', ''),
      icon: '🎓',
    },
    { label: 'Nivel', value: `${personalInfo.semester} semestre`, icon: '📚' },
    { label: 'Ciudad', value: personalInfo.city, icon: '📍' },
    { label: 'Experiencia', value: 'Desarrollo de software', icon: '💼' },
    { label: 'Disponibilidad', value: personalInfo.availability, icon: '✦' },
    { label: 'Modalidad', value: personalInfo.modality, icon: '🌐' },
  ]
  return (
    <section className="section section--dark" id="about">
      <Container>
        <div className="about__grid">
          <div>
            <SectionHeading
              eyebrow="SOBRE MÍ"
              title="Conóceme mejor"
              align="left"
            />
            <div className="about__copy">
              <p>
                Soy {personalInfo.name}, estudiante de{' '}
                {personalInfo.semester.toLowerCase()} semestre de Ingeniería de
                Sistemas en la <strong>{personalInfo.university}</strong>.
                Cuento con seis meses de experiencia en desarrollo de software
                durante mi práctica profesional en{' '}
                <strong>Procaps Laboratorios</strong>.
              </p>
              <p>
                Me interesa el desarrollo de aplicaciones web, la integración de
                APIs, la gestión de bases de datos y la implementación de
                soluciones con inteligencia artificial. Me caracterizo por mi
                pensamiento analítico, responsabilidad, aprendizaje continuo y
                capacidad para trabajar en equipo.
              </p>
            </div>
          </div>
          <div className="facts-grid">
            {facts.map((fact) => (
              <article className="fact-card" key={fact.label}>
                <span className="fact-card__icon" aria-hidden="true">
                  {fact.icon}
                </span>
                <div>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
