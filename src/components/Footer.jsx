export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span>🦁</span>
              </div>
              <div>
                <h3>Rising Lion Academy</h3>
                <p className="footer-tagline">Empowering Minds, Shaping Futures</p>
              </div>
            </div>
            <p className="footer-description">
              Dedicated to providing exceptional education and character development 
              for students to succeed in an ever-changing world.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <span>📘</span>
              </a>
              <a href="#" className="social-link">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link">
                <span>📷</span>
              </a>
              <a href="#" className="social-link">
                <span>💼</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#admission">Admissions</a></li>
              <li><a href="#news">News & Events</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Career Opportunities</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Student Portal</a></li>
              <li><a href="#">Parent Portal</a></li>
              <li><a href="#">Faculty Portal</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Policies</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{color: '#bfdbfe'}}>
            <p>&copy; 2023 Rising Lion Academy. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}