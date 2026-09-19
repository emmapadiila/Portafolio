import { navigationItems } from '../../data/navigation'
import { Button } from '../common/Button'
import { MobileMenu } from './MobileMenu'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTheme } from '../../hooks/useTheme'
import { resumeAvailable, resumePath } from '../../utils/constants'
import { useEffect, useState } from 'react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, toggleTheme] = useTheme()
  const activeSection = useActiveSection(
    navigationItems.map((item) => item.href.slice(1)),
  )

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMobileMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isMobileMenuOpen])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <div className="header__inner container">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Ir al inicio"
        >
          <span className="brand__mark">EP</span>
          <span>Emma Padilla</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigationItems.map((item) => {
            const sectionId = item.href.slice(1)
            return (
              <a
                className={activeSection === sectionId ? 'is-active' : ''}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="header__actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {isDark ? '☀' : '☼'}
          </button>
          {resumeAvailable ? (
            <Button href={resumePath} size="sm" icon="⇩">
              Descargar CV
            </Button>
          ) : (
            <Button
              size="sm"
              disabled
              icon="⇩"
              title="La hoja de vida se agregará próximamente"
            >
              Descargar CV
            </Button>
          )}
          <button
            className={`menu-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <MobileMenu
        id="mobile-navigation"
        items={navigationItems}
        activeSection={activeSection}
        isOpen={isMobileMenuOpen}
        onNavigate={closeMenu}
      />
    </header>
  )
}
