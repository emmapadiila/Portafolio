import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { languages, personalSkills, skills } from '../data/skills'

export function Skills() {
  return (
    <section className="section section--dark" id="skills">
      <Container>
        <SectionHeading eyebrow="HABILIDADES" title="Stack tecnológico" />
        <div className="skills-grid">
          {skills.map((category) => (
            <article
              className={`skill-card skill-card--${category.tone ?? 'violet'}`}
              key={category.id}
            >
              <h3>{category.name}</h3>
              <div className="skill-card__items">
                {category.skills.map((skill) => (
                  <span className="skill-pill" key={skill.id}>
                    {skill.icon ? (
                      <span aria-hidden="true">{skill.icon}</span>
                    ) : null}
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="skills-extra">
          <h3>HABILIDADES PERSONALES</h3>
          <div className="tag-list">
            {personalSkills.map((skill) => (
              <span key={skill.id}>{skill.name}</span>
            ))}
          </div>
        </div>
        <div className="skills-extra languages">
          <h3>IDIOMAS</h3>
          <div className="language-grid">
            {languages.map((language) => (
              <div className="language-item" key={language.id}>
                <div>
                  <strong>{language.name}</strong>
                  <span>{language.level}</span>
                </div>
                <div className="progress">
                  <i style={{ width: `${language.progress ?? 0}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
