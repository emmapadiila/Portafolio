import type { NavigationItem } from '../../types'

interface MobileMenuProps {
  id: string
  items: NavigationItem[]
  activeSection: string
  isOpen: boolean
  onNavigate: () => void
}

export function MobileMenu({
  id,
  items,
  activeSection,
  isOpen,
  onNavigate,
}: MobileMenuProps) {
  return (
    <nav
      className={`mobile-nav ${isOpen ? 'is-open' : ''}`}
      id={id}
      aria-label="Navegación móvil"
    >
      {items.map((item) => (
        <a
          className={activeSection === item.href.slice(1) ? 'is-active' : ''}
          href={item.href}
          key={item.href}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
