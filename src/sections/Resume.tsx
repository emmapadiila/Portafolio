import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { resumeAvailable, resumePath } from '../utils/constants'

export function Resume() {
  return (
    <section className="section section--mid" id="resume">
      <Container>
        <SectionHeading
          eyebrow="HOJA DE VIDA"
          title="Mi hoja de vida"
          description="Conoce mi formación, experiencia y las herramientas que hacen parte de mi perfil profesional."
        />
        <div className="resume-card">
          <div className="resume-card__preview">
            <span aria-hidden="true">▤</span>
            <strong>
              {resumeAvailable
                ? 'Hoja de vida disponible'
                : 'Documento pendiente'}
            </strong>
            <p>
              {resumeAvailable
                ? 'Puedes consultar o descargar mi hoja de vida.'
                : 'La hoja de vida estará disponible próximamente.'}
            </p>
          </div>
          <div className="resume-card__actions">
            {resumeAvailable ? (
              <>
                <Button href={resumePath} target="_blank">
                  ↗ Ver hoja de vida
                </Button>
                <Button href={resumePath} download variant="secondary">
                  ⇩ Descargar PDF
                </Button>
              </>
            ) : (
              <Button disabled variant="secondary">
                Documento pendiente
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
