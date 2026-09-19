import { CertificateCard } from '../components/cards/CertificateCard'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { certificates } from '../data/certificates'

export function Certificates() {
  return (
    <section className="section section--mid" id="certificates">
      <Container>
        <SectionHeading
          eyebrow="CERTIFICACIONES"
          title="Cursos y Certificados"
        />
        {certificates.length > 0 ? (
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <CertificateCard certificate={certificate} key={certificate.id} />
            ))}
          </div>
        ) : (
          <div className="empty-state empty-state--light">
            <span aria-hidden="true">▣</span>
            <p>Mis certificados estarán disponibles próximamente.</p>
          </div>
        )}
      </Container>
    </section>
  )
}
