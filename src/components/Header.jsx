import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header-responsive">
      <div className="header-content-responsive">
        <div className="logo-responsive">
          <div className="logo-icon-responsive">
            <span>🦁</span>
          </div>
          <div>
            <h1>Rising Lion Academy</h1>
          </div>
        </div>
        
        <nav className="nav-responsive">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#staff">Staff</a>
          <a href="#tour">Tour</a>
          <a href="#admission">Admission</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>

        <button 
          className="mobile-menu-responsive"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>☰</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav-responsive">
          <nav>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#academics" onClick={() => setIsMenuOpen(false)}>Academics</a>
            <a href="#staff" onClick={() => setIsMenuOpen(false)}>Staff</a>
            <a href="#tour" onClick={() => setIsMenuOpen(false)}>Tour</a>
            <a href="#admission" onClick={() => setIsMenuOpen(false)}>Admission</a>
            <a href="#news" onClick={() => setIsMenuOpen(false)}>News</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}
