export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      text: 'Rising Lion Academy has exceeded our expectations. The teachers are dedicated, and my daughter has grown both academically and personally.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Alumni, Class of 2020',
      text: 'The education I received here prepared me perfectly for college. I\'m now studying engineering at MIT thanks to the strong foundation.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Parent & Community Leader',
      text: 'The school\'s commitment to character development alongside academics makes it truly special. Highly recommend to any family.',
      rating: 5
    }
  ]

  return (
    <section className="section section-blue">
      <div className="container">
        <div className="section-header">
          <h2>What Our Community Says</h2>
          <p>
            Hear from parents, students, and alumni about their Rising Lion Academy experience.
          </p>
        </div>

        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{color: '#fbbf24', fontSize: '20px'}}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div>
                <div className="testimonial-author">{testimonial.name}</div>
                <div className="testimonial-role">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop: '64px', textAlign: 'center'}}>
          <div className="grid grid-3">
            <div>
              <div style={{fontSize: '40px', fontWeight: 'bold', color: '#fbbf24'}}>4.9/5</div>
              <div style={{color: '#bfdbfe'}}>Parent Satisfaction</div>
            </div>
            <div>
              <div style={{fontSize: '40px', fontWeight: 'bold', color: '#fbbf24'}}>95%</div>
              <div style={{color: '#bfdbfe'}}>Would Recommend</div>
            </div>
            <div>
              <div style={{fontSize: '40px', fontWeight: 'bold', color: '#fbbf24'}}>100%</div>
              <div style={{color: '#bfdbfe'}}>Graduate Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}