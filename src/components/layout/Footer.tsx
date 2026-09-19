import { personalInfo } from '../../data/personal'
import { navigationItems } from '../../data/navigation'

export function Footer() {
  const socialLinks = [
    { label: 'GitHub', url: personalInfo.github, icon: '◉' },
    { label: 'LinkedIn', url: personalInfo.linkedin, icon: 'in' },
  ].filter((link): link is { label: string; url: string; icon: string } =>
    Boolean(link.url),
  )

  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div>
          <a className="brand" href="#home" aria-label="Volver al inicio">
            <span className="brand__mark">EP</span>
            <span>Emma Victoria Padilla Jaramillo</span>
          </a>
          <p>{personalInfo.profile}</p>
        </div>
        <nav className="footer__nav" aria-label="Navegación del pie de página">
          {navigationItems.slice(0, 4).map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        {socialLinks.length > 0 ? (
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                href={link.url}
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
      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} Emma Victoria Padilla Jaramillo
        </span>
        <a className="back-to-top" href="#home" aria-label="Volver al inicio">
          ↑
        </a>
      </div>
    </footer>
  )
}
