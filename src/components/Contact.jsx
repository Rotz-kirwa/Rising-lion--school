export default function Contact() {
  return (
    <section id="contact" className="section section-gray">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>
            Get in touch with us. We're here to answer your questions and help you get started.
          </p>
        </div>

        <div className="grid grid-2">
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'space-between'}}>
            <div className="contact-info" style={{flex: '1', minWidth: '200px'}}>
              <div className="contact-icon">
                <span>📍</span>
              </div>
              <div>
                <h3>Address</h3>
                <p>
                  RisingLion Academy<br />
                  Kingara Road<br />
                  Nairobi, Nairobi County<br />
                  P.O. Box 136250 – 00100<br />
                  Kenya
                </p>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '24px', flex: '1', minWidth: '300px'}}>
              <div className="contact-info" style={{marginBottom: '0'}}>
                <div className="contact-icon">
                  <span>📞</span>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:0791260817" style={{color: '#1e3a8a', textDecoration: 'none'}}>0791260817</a>
                  </p>
                </div>
              </div>

              <div className="contact-info" style={{marginBottom: '0'}}>
                <div className="contact-icon">
                  <span>💬</span>
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>
                    <a href="https://wa.me/254791260817" style={{color: '#1e3a8a', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">0791260817</a>
                  </p>
                </div>
              </div>

              <div className="contact-info" style={{marginBottom: '0'}}>
                <div className="contact-icon">
                  <span>✉️</span>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:gadielkirwa@gmail.com" style={{color: '#1e3a8a', textDecoration: 'none'}}>gadielkirwa@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-info" style={{marginBottom: '0'}}>
                <div className="contact-icon">
                  <span>🕒</span>
                </div>
                <div>
                  <h3>Office Hours</h3>
                  <p>
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb'}}>
            <div style={{textAlign: 'center', marginBottom: '32px'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>✉️</div>
              <h3 style={{fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px'}}>Send us a Message</h3>
              <p style={{color: '#6b7280', fontSize: '16px'}}>We'd love to hear from you. Get in touch with us!</p>
            </div>
            
            <form action="https://formspree.io/f/xpwzgqko" method="POST">
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px'}}>
                <div>
                  <label style={{display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px', fontSize: '14px'}}>First Name *</label>
                  <input 
                    type="text" 
                    name="firstName"
                    placeholder="Your first name"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
                <div>
                  <label style={{display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px', fontSize: '14px'}}>Last Name *</label>
                  <input 
                    type="text" 
                    name="lastName"
                    placeholder="Your last name"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              </div>
              
              <div style={{marginBottom: '20px'}}>
                <label style={{display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px', fontSize: '14px'}}>Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{marginBottom: '20px'}}>
                <label style={{display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px', fontSize: '14px'}}>Subject *</label>
                <select 
                  name="subject" 
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    backgroundColor: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Admissions">Admissions</option>
                  <option value="Academics">Academics</option>
                  <option value="Campus Tour">Campus Tour</option>
                </select>
              </div>

              <div style={{marginBottom: '24px'}}>
                <label style={{display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px', fontSize: '14px'}}>Message *</label>
                <textarea 
                  rows="5" 
                  name="message"
                  placeholder="Tell us how we can help you..."
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '120px',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                ></textarea>
              </div>

              <button 
                type="submit" 
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                  color: 'white',
                  padding: '16px 24px',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(30, 58, 138, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 6px 20px rgba(30, 58, 138, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 15px rgba(30, 58, 138, 0.3)'
                }}
              >
                Send Message 📤
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}