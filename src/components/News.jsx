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

        <div className="space-y-8 lg:space-y-0">
          <div className="lg:hidden">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Latest News</h3>
                <div className="space-y-4">
                  {news.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-xs font-medium">
                          {item.category}
                        </span>
                        <span className="text-gray-500 text-xs">{item.date}</span>
                      </div>
                      <h4 className="font-bold text-blue-900 mb-2 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.desc}</p>
                      <a href="#" className="text-blue-900 text-sm font-medium hover:underline">
                        Read More →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Upcoming Events</h3>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="space-y-3">
                    {events.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <div className="flex-1">
                          <div className="font-medium text-blue-900 text-sm">{item.event}</div>
                          <div className="text-gray-500 text-xs">{item.time}</div>
                        </div>
                        <div className="bg-blue-900 text-white px-3 py-1 rounded text-xs font-medium">
                          {item.date}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 bg-blue-900 text-white py-3 rounded-lg font-medium text-sm hover:bg-blue-800 transition-colors">
                    View All Events
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Latest News</h3>
              <div className="space-y-6">
                {news.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                    <a href="#" className="text-blue-900 font-medium hover:underline">
                      Read More →
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Upcoming Events</h3>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="space-y-4">
                  {events.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-medium text-blue-900">{item.event}</div>
                        <div className="text-gray-500 text-sm">{item.time}</div>
                      </div>
                      <div className="bg-blue-900 text-white px-3 py-2 rounded font-medium text-sm">
                        {item.date}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                  View All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}