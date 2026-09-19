import type { SkillCategory } from '../../types'

interface SkillCardProps {
  category: SkillCategory
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <article className={`skill-card skill-card--${category.tone ?? 'violet'}`}>
      <h3>{category.name}</h3>
      <div className="skill-card__items">
        {category.skills.map((skill) => (
          <span className="skill-pill" key={skill.id}>
            {skill.icon ? <span aria-hidden="true">{skill.icon}</span> : null}
            {skill.name}
          </span>
        ))}
      </div>
    </article>
  )
}
