export default function Staff() {
  const teachers = [
    { name: 'Dr. Sarah Mitchell', subject: 'Mathematics', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Prof. James Wilson', subject: 'Physics', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Ms. Emily Chen', subject: 'English Literature', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'Dr. Michael Rodriguez', subject: 'Chemistry', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Mrs. Lisa Thompson', subject: 'History', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { name: 'Mr. David Park', subject: 'Computer Science', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { name: 'Dr. Amanda Foster', subject: 'Biology', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { name: 'Prof. Robert Johnson', subject: 'Art & Design', image: 'https://randomuser.me/api/portraits/men/8.jpg' }
  ]

  return (
    <section id="staff" className="section section-gray">
      <div className="container">
        <div className="section-header">
          <h2>Our Faculty</h2>
          <p>
            Meet our dedicated team of educators who are committed to student success and academic excellence.
          </p>
        </div>

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px'}}>
          {teachers.map((teacher, index) => (
            <div key={index} style={{textAlign: 'center', minWidth: '200px', maxWidth: '220px', flex: '1'}}>
              <div className="card">
                <div style={{width: '150px', height: '150px', margin: '0 auto 16px', borderRadius: '12px', overflow: 'hidden', border: '3px solid #1e3a8a', boxShadow: '0 4px 15px rgba(30, 58, 138, 0.2)'}}>
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </div>
                <h3 style={{fontSize: '18px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px'}}>
                  {teacher.name}
                </h3>
                <p style={{color: '#6b7280', fontWeight: '600', fontSize: '14px'}}>
                  {teacher.subject}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}