import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <span>🦁</span>
          </div>
          <div>
            <h1>Rising Lion Academy</h1>
          </div>
        </div>
        
        <nav className="nav">
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
          className="mobile-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>☰</span>
        </button>
      </div>

      {isMenuOpen && (
        <div style={{padding: '16px 20px'}}>
          <nav style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <a href="#home" style={{padding: '8px 0', color: '#4b5563', textDecoration: 'none'}}>Home</a>
            <a href="#about" style={{padding: '8px 0', color: '#4b5563', textDecoration: 'none'}}>About</a>
            <a href="#academics" style={{padding: '8px 0', color: '#4b5563', textDecoration: 'none'}}>Academics</a>
            <a href="#staff" style={{padding: '8px 0', color: '#4b5563', textDecoration: 'none'}}>Staff</a>
            <a href="#tour" style={{padding: '8px 0', color: '#4b5563', textDecoration: 'none'}}>Tour</a>
            <a href="#admission" style={{padding: '8px 0', color: '#4b5563', textDecoration: 'none'}}>Admission</a>
            <a href="#news" style={{padding: '8px 0', color: '#4b5563', textDecoration: 'none'}}>News</a>
            <a href="#contact" style={{padding: '8px 0', color: '#4b5563', textDecoration: 'none'}}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}