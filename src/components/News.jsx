export default function News() {
  const news = [
    {
      date: 'Dec 15, 2023',
      title: 'Science Fair Winners Announced',
      desc: 'Our students excel in regional competition with innovative projects.',
      category: 'Academics'
    },
    {
      date: 'Dec 10, 2023',
      title: 'Winter Concert Performance',
      desc: 'Join us for our annual winter concert featuring choir and orchestra.',
      category: 'Events'
    },
    {
      date: 'Dec 5, 2023',
      title: 'New STEM Lab Opening',
      desc: 'State-of-the-art laboratory facility now open for student use.',
      category: 'Facilities'
    }
  ]

  const events = [
    { date: 'Jan 15', event: 'Open House', time: '10:00 AM' },
    { date: 'Jan 22', event: 'Parent-Teacher Conference', time: '2:00 PM' },
    { date: 'Feb 5', event: 'Science Fair', time: '9:00 AM' },
    { date: 'Feb 14', event: 'Valentine\'s Dance', time: '7:00 PM' }
  ]

  return (
    <section id="news" className="section">
      <div className="container">
        <div className="section-header">
          <h2>News & Events</h2>
          <p>
            Stay updated with the latest happenings at Rising Lion Academy.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px'}}>
          <div>
            <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px'}}>Latest News</h3>
            <div>
              {news.map((item, index) => (
                <div key={index} className="news-item">
                  <div className="news-meta">
                    <span className="news-category">
                      {item.category}
                    </span>
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <a href="#" className="read-more">
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px'}}>Upcoming Events</h3>
            <div className="events-card">
              <div>
                {events.map((item, index) => (
                  <div key={index} className="event-item">
                    <div>
                      <div className="event-name">{item.event}</div>
                      <div className="event-time">{item.time}</div>
                    </div>
                    <div>
                      <div className="event-date">
                        {item.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary" style={{width: '100%', marginTop: '24px'}}>
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}