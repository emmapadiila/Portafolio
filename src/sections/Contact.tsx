import { type FormEvent, useState } from 'react'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { personalInfo } from '../data/personal'

export function Contact() {
  const [error, setError] = useState('')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setError('Completa todos los campos para preparar el mensaje.')
      return
    }
    const data = new FormData(form)
    const subject = encodeURIComponent(
      String(data.get('subject') ?? 'Contacto desde mi portafolio'),
    )
    const body = encodeURIComponent(
      `Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\n\n${data.get('message')}`,
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  }
  const socialLinks = [
    { label: 'GitHub', value: personalInfo.github, icon: '◉' },
    { label: 'LinkedIn', value: personalInfo.linkedin, icon: 'in' },
  ].filter((link): link is { label: string; value: string; icon: string } =>
    Boolean(link.value),
  )
  return (
    <section className="section section--dark contact" id="contact">
      <Container>
        <SectionHeading
          eyebrow="CONTACTO"
          title="Hablemos y construyamos"
          description="Estoy disponible para participar en proyectos tecnológicos, oportunidades laborales y nuevas colaboraciones."
        />
        <div className="contact__grid">
          <div className="contact__info">
            <h3>Información de contacto</h3>
            <div className="contact-list">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(personalInfo.city)}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>⌖</span>
                <div>
                  <small>UBICACIÓN</small>
                  <strong>{personalInfo.city}</strong>
                </div>
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                <span>✉</span>
                <div>
                  <small>CORREO</small>
                  <strong>{personalInfo.email}</strong>
                </div>
              </a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer">
                <span>◌</span>
                <div>
                  <small>WHATSAPP / CELULAR</small>
                  <strong>
                    {personalInfo.phone.replace(
                      /(\d{3})(\d{3})(\d{4})/,
                      '$1 $2 $3',
                    )}
                  </strong>
                </div>
              </a>
            </div>
            <div className="contact__buttons">
              <Button
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="whatsapp"
              >
                ◌ Escríbeme por WhatsApp
              </Button>
              <Button href={`mailto:${personalInfo.email}`}>
                ✉ Enviar correo
              </Button>
            </div>
            {socialLinks.length > 0 ? (
              <div className="social-links social-links--contact">
                {socialLinks.map((link) => (
                  <a
                    href={link.value}
                    target="_blank"
                    rel="noreferrer"
                    key={link.label}
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label>
                Tu nombre
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Tu correo
                <input
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                />
              </label>
            </div>
            <label>
              Asunto
              <input name="subject" required />
            </label>
            <label>
              Tu mensaje...
              <textarea name="message" required rows={5} />
            </label>
            {error ? (
              <p className="form-error" role="alert">
                {error}
              </p>
            ) : null}
            <Button type="submit" size="lg">
              △ Enviar mensaje
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
