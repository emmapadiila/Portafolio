interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <span className="eyebrow">✦ {eyebrow}</span>
      <h2>{title}</h2>
      <span className="section-heading__line" aria-hidden="true" />
      {description ? <p>{description}</p> : null}
    </header>
  )
}
