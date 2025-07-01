import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-3 md:gap-4 cursor-pointer">
          <span className="text-3xl md:text-4xl drop-shadow-lg hover:scale-110 transition-transform">🦁</span>
          <h1 className="text-lg md:text-2xl font-black text-transparent bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text">
            Rising Lion Academy
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-900 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-900 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">About</a>
          <a href="#academics" className="text-gray-700 hover:text-blue-900 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">Academics</a>
          <a href="#staff" className="text-gray-700 hover:text-blue-900 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">Staff</a>
          <a href="#tour" className="text-gray-700 hover:text-blue-900 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">Tour</a>
          <a href="#admission" className="text-gray-700 hover:text-blue-900 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">Admission</a>
          <a href="#news" className="text-gray-700 hover:text-blue-900 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">News</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-900 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">Contact</a>
        </nav>

        <button 
          className="md:hidden text-2xl text-blue-900 hover:text-yellow-500 p-2 rounded-lg hover:bg-blue-50 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>☰</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-all">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-all">About</a>
            <a href="#academics" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-all">Academics</a>
            <a href="#staff" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-all">Staff</a>
            <a href="#tour" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-all">Tour</a>
            <a href="#admission" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-all">Admission</a>
            <a href="#news" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-all">News</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-900 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-all">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}
