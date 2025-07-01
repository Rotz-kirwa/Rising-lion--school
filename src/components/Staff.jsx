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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="card text-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto mb-3 rounded-xl overflow-hidden border-3 border-blue-900 shadow-lg">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-blue-900 mb-1 sm:mb-2">
                {teacher.name}
              </h3>
              <p className="text-gray-600 font-semibold text-xs sm:text-sm">
                {teacher.subject}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}