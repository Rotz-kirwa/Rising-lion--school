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

        <div style={{display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '48px', flexWrap: 'wrap'}}>
          <div className="card" style={{textAlign: 'center', maxWidth: '400px', flex: '1'}}>
            <h3 style={{fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '20px'}}>Vision</h3>
            <p style={{color: '#6b7280', fontSize: '16px', lineHeight: '1.6'}}>
              To raise a generation of confident, creative, and responsible leaders equipped to make a positive impact in the world.
            </p>
          </div>
          <div className="card" style={{textAlign: 'center', maxWidth: '400px', flex: '1'}}>
            <h3 style={{fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '20px'}}>Mission</h3>
            <p style={{color: '#6b7280', fontSize: '16px', lineHeight: '1.6'}}>
              At RisingLion Academy, our mission is to provide a nurturing and inspiring environment where students develop 
              critical thinking skills, strong values, and a lifelong passion for learning.
            </p>
          </div>
        </div>

        <div className="card" style={{marginBottom: '48px', textAlign: 'center'}}>
          <h3 style={{fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '32px'}}>Core Values</h3>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', padding: '24px', minWidth: '180px', flex: '1'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>🎯</div>
              <h4 style={{color: '#1e3a8a', fontWeight: 'bold', marginBottom: '12px', fontSize: '18px'}}>Excellence</h4>
              <p style={{color: '#6b7280', fontSize: '15px', lineHeight: '1.5'}}>Pursuing the highest standards in academics and character.</p>
            </div>
            <div style={{textAlign: 'center', padding: '24px', minWidth: '180px', flex: '1'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>👑</div>
              <h4 style={{color: '#1e3a8a', fontWeight: 'bold', marginBottom: '12px', fontSize: '18px'}}>Leadership</h4>
              <p style={{color: '#6b7280', fontSize: '15px', lineHeight: '1.5'}}>Empowering students to lead with courage, vision, and service.</p>
            </div>
            <div style={{textAlign: 'center', padding: '24px', minWidth: '180px', flex: '1'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>🤝</div>
              <h4 style={{color: '#1e3a8a', fontWeight: 'bold', marginBottom: '12px', fontSize: '18px'}}>Integrity</h4>
              <p style={{color: '#6b7280', fontSize: '15px', lineHeight: '1.5'}}>Promoting honesty, accountability, and ethical decision-making.</p>
            </div>
            <div style={{textAlign: 'center', padding: '24px', minWidth: '180px', flex: '1'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>💡</div>
              <h4 style={{color: '#1e3a8a', fontWeight: 'bold', marginBottom: '12px', fontSize: '18px'}}>Innovation</h4>
              <p style={{color: '#6b7280', fontSize: '15px', lineHeight: '1.5'}}>Encouraging creativity, curiosity, and adaptability.</p>
            </div>
            <div style={{textAlign: 'center', padding: '24px', minWidth: '180px', flex: '1'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>❤️</div>
              <h4 style={{color: '#1e3a8a', fontWeight: 'bold', marginBottom: '12px', fontSize: '18px'}}>Respect</h4>
              <p style={{color: '#6b7280', fontSize: '15px', lineHeight: '1.5'}}>Cultivating empathy, kindness, and appreciation for diversity.</p>
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

        <div style={{display: 'flex', justifyContent: 'center', gap: '64px', flexWrap: 'wrap', textAlign: 'center'}}>
          <div>
            <div style={{fontSize: '48px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px'}}>500+</div>
            <div style={{color: '#6b7280', fontSize: '16px', fontWeight: '500'}}>Students</div>
          </div>
          <div>
            <div style={{fontSize: '48px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px'}}>50+</div>
            <div style={{color: '#6b7280', fontSize: '16px', fontWeight: '500'}}>Teachers</div>
          </div>
          <div>
            <div style={{fontSize: '48px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px'}}>90%</div>
            <div style={{color: '#6b7280', fontSize: '16px', fontWeight: '500'}}>Job Entry</div>
          </div>
        </div>
      </div>
    </section>
  )
}