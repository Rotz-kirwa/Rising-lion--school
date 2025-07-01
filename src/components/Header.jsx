import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon" aria-label="Rising Lion Academy logo" role="img">
            <span>🦁</span>
          </div>
          <div>
            <h1>Rising Lion Academy</h1>
          </div>
        </div>
        
        <nav className="nav" role="navigation" aria-label="Primary navigation">
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
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>☰</span>
        </button>
      </div>

      {isMenuOpen && (
        <div ref={menuRef} style={{padding: '16px 20px', animation: 'fadeIn 0.3s ease', overflowX: 'auto'}}>
          <nav style={{display: 'flex', flexDirection: 'row', gap: '8px', justifyContent: 'flex-start', whiteSpace: 'nowrap', overflowX: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#1e3a8a #d1d5db'}}>
            <a href="#home" style={{padding: '6px 8px', color: '#4b5563', textDecoration: 'none', flexShrink: 0, fontSize: '14px'}}>Home</a>
            <a href="#about" style={{padding: '6px 8px', color: '#4b5563', textDecoration: 'none', flexShrink: 0, fontSize: '14px'}}>About</a>
            <a href="#academics" style={{padding: '6px 8px', color: '#4b5563', textDecoration: 'none', flexShrink: 0, fontSize: '14px'}}>Academics</a>
            <a href="#staff" style={{padding: '6px 8px', color: '#4b5563', textDecoration: 'none', flexShrink: 0, fontSize: '14px'}}>Staff</a>
            <a href="#tour" style={{padding: '6px 8px', color: '#4b5563', textDecoration: 'none', flexShrink: 0, fontSize: '14px'}}>Tour</a>
            <a href="#admission" style={{padding: '6px 8px', color: '#4b5563', textDecoration: 'none', flexShrink: 0, fontSize: '14px'}}>Admission</a>
            <a href="#news" style={{padding: '6px 8px', color: '#4b5563', textDecoration: 'none', flexShrink: 0, fontSize: '14px'}}>News</a>
            <a href="#contact" style={{padding: '6px 8px', color: '#4b5563', textDecoration: 'none', flexShrink: 0, fontSize: '14px'}}>Contact</a>
          </nav>
        </div>
      )}
      <style>
        {`
          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }
        `}
      </style>
    </header>
  )
}
