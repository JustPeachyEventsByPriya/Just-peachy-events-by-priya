import { useEffect, useState } from 'react';
import './Header.css';

const navigation = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header className="header">
      <div className="header__container">
        <a
          className="header__brand"
          href="#"
          aria-label="Just Peachy Events home"
          onClick={closeMenu}
        >
          <span className="header__brand-name">
            JUST PEACHY EVENTS
          </span>

          <span className="header__brand-subtitle">
            by Priya
          </span>
        </a>

        <button
          className={`header__menu-button ${menuOpen ? 'header__menu-button--open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="primary-navigation"
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header;