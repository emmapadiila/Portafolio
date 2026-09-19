import type { Certificate } from '../../types'

interface CertificateCardProps {
  certificate: Certificate
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <article className="certificate-card">
      <div className="certificate-card__icon" aria-hidden="true">
        ▣
      </div>
      <h3>{certificate.title}</h3>
      <p>{certificate.institution}</p>
      <span>{certificate.date}</span>
      <div className="certificate-card__actions">
        {certificate.document || certificate.verificationUrl ? (
          <a
            className="button button--primary button--sm"
            href={certificate.document ?? certificate.verificationUrl}
            target="_blank"
            rel="noreferrer"
          >
            ↗ Ver
          </a>
        ) : null}
        {certificate.document ? (
          <a
            className="icon-button"
            href={certificate.document}
            download
            aria-label={`Descargar ${certificate.title}`}
          >
            ⇩
          </a>
        ) : null}
      </div>
    </article>
  )
}
