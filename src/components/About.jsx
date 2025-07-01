export default function About() {
  return (
    <section id="about" className="section section-gray">
      <div className="container">
        <div className="section-header">
          <h2>About Rising Lion Academy</h2>
          <p>
            At RisingLion Academy, we believe that every child is born to lead. Located in the heart of our community, 
            we are a private institution committed to delivering quality education that nurtures both the mind and the character.
          </p>
        </div>

        <div style={{marginBottom: '48px', textAlign: 'center'}}>
          <p style={{fontSize: '18px', color: '#6b7280', maxWidth: '800px', margin: '0 auto'}}>
            Since our founding, RisingLion has stood for excellence, innovation, and integrity. Our passionate team of educators 
            works to create a safe, inclusive, and dynamic learning environment where students thrive academically, socially, and emotionally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="card text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 lg:mb-6">Vision</h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              To raise a generation of confident, creative, and responsible leaders equipped to make a positive impact in the world.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 lg:mb-6">Mission</h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              At RisingLion Academy, our mission is to provide a nurturing and inspiring environment where students develop 
              critical thinking skills, strong values, and a lifelong passion for learning.
            </p>
          </div>
        </div>

        <div className="card" style={{marginBottom: '48px', textAlign: 'center'}}>
          <h3 style={{fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '32px'}}>Core Values</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">🎯</div>
              <h4 className="text-blue-900 font-bold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Excellence</h4>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">Pursuing the highest standards in academics and character.</p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">👑</div>
              <h4 className="text-blue-900 font-bold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Leadership</h4>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">Empowering students to lead with courage, vision, and service.</p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">🤝</div>
              <h4 className="text-blue-900 font-bold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Integrity</h4>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">Promoting honesty, accountability, and ethical decision-making.</p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">💡</div>
              <h4 className="text-blue-900 font-bold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Innovation</h4>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">Encouraging creativity, curiosity, and adaptability.</p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">❤️</div>
              <h4 className="text-blue-900 font-bold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Respect</h4>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">Cultivating empathy, kindness, and appreciation for diversity.</p>
            </div>
          </div>
        </div>

        <div className="card" style={{marginBottom: '48px', background: '#1e3a8a', color: 'white'}}>
          <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center'}}>Headteacher's Welcome</h3>
          <p style={{fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', textAlign: 'center'}}>
            Welcome to RisingLion Academy — a place where every child's potential is recognized, nurtured, and celebrated. 
            As the Headteacher, I am proud to lead a team that is passionate about education, excellence, and holistic growth. 
            We look forward to partnering with you on this exciting journey.
          </p>
          <p style={{textAlign: 'center', fontStyle: 'italic', color: '#fbbf24'}}>— Mrs. Jane A. Kimani, Headteacher</p>
        </div>

        <div className="card" style={{background: '#f8fafc', padding: '40px 20px'}}>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '32px', textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>
            <div style={{minWidth: '120px'}}>
              <div style={{fontSize: '40px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px'}}>500+</div>
              <div style={{color: '#6b7280', fontSize: '16px', fontWeight: '500'}}>Students</div>
            </div>
            <div style={{minWidth: '120px'}}>
              <div style={{fontSize: '40px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px'}}>50+</div>
              <div style={{color: '#6b7280', fontSize: '16px', fontWeight: '500'}}>Teachers</div>
            </div>
            <div style={{minWidth: '120px'}}>
              <div style={{fontSize: '40px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px'}}>90%</div>
              <div style={{color: '#6b7280', fontSize: '16px', fontWeight: '500'}}>Job Entry</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}