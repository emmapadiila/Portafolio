import type { Experience } from '../../types'

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className={`timeline-card timeline-card--${experience.kind}`}>
      <div className="timeline-card__meta">
        <strong>{experience.period}</strong>
        <span>{experience.duration}</span>
      </div>
      <h3>{experience.role}</h3>
      <p className="timeline-card__company">{experience.company}</p>
      <ul>
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  )
}
