import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { personalInfo } from '../data/personal'

const profileImage = Object.values(
  import.meta.glob('../assets/images/profile.webp', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)[0] as string | undefined

export function Hero() {
  const socialLinks = [
    { label: 'GitHub', value: personalInfo.github, icon: '◉' },
    { label: 'LinkedIn', value: personalInfo.linkedin, icon: 'in' },
    { label: 'Correo', value: `mailto:${personalInfo.email}`, icon: '✉' },
    { label: 'WhatsApp', value: personalInfo.whatsapp, icon: '◌' },
  ].filter((link): link is { label: string; value: string; icon: string } =>
    Boolean(link.value),
  )

  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <span className="availability">
              <i /> Disponible para nuevas oportunidades
            </span>
            <p className="hero__hello">Hola, soy</p>
            <h1>
              <span>Emma Victoria</span>
              <strong>
                Padilla
                <br />
                Jaramillo
              </strong>
            </h1>
            <p className="hero__role">{personalInfo.profile}</p>
            <p className="hero__quote">
              “Transformo ideas y necesidades en soluciones digitales
              funcionales.”
            </p>
            <p className="hero__description">
              Desarrollo aplicaciones web, integro APIs y gestiono bases de
              datos, combinando creatividad, análisis y tecnología para resolver
              problemas reales.
            </p>
            <div className="hero__actions">
              <Button href="#projects" size="lg">
                Conoce mi trabajo
              </Button>
              <Button
                size="lg"
                variant="secondary"
                disabled
                icon="⇩"
                title="La hoja de vida se agregará próximamente"
              >
                Descargar hoja de vida
              </Button>
              <Button
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                size="lg"
                variant="whatsapp"
                icon="◌"
              >
                Contáctame por WhatsApp
              </Button>
            </div>
            <div
              className="social-links social-links--hero"
              aria-label="Enlaces de contacto"
            >
              {socialLinks.map((link) => (
                <a
                  href={link.value}
                  target={link.value.startsWith('http') ? '_blank' : undefined}
                  rel={link.value.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={link.label}
                  title={
                    link.label === 'Correo'
                      ? `Enviar correo a ${personalInfo.email}`
                      : link.label
                  }
                  key={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div
            className="hero__visual"
            aria-label="Espacio reservado para fotografía profesional"
          >
            <div className="hero__orbit hero__orbit--outer" />
            <div className="hero__orbit hero__orbit--inner" />
            <div className="profile-placeholder">
              {profileImage ? (
                <img src={profileImage} alt="Emma Victoria Padilla Jaramillo" />
              ) : (
                <>
                  <strong>EP</strong>
                  <span>Foto profesional</span>
                </>
              )}
            </div>
            <span className="floating-tag floating-tag--react">React ⚛</span>
            <span className="floating-tag floating-tag--frontend">
              Frontend 🎨
            </span>
            <span className="floating-tag floating-tag--backend">
              Backend ⚙
            </span>
            <span className="floating-tag floating-tag--databases">
              Bases de datos ▥
            </span>
            <span className="floating-tag floating-tag--analysis">
              Análisis de datos 📊
            </span>
            <span className="floating-tag floating-tag--ai">IA 🤖</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
