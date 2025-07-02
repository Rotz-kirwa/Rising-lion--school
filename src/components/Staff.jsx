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

        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {teachers.slice(0, 4).map((teacher, index) => (
              <div key={index} className="bg-white rounded-xl p-3 text-center shadow-sm">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 rounded-lg overflow-hidden border-2 border-blue-900">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-blue-900 mb-1 leading-tight">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 font-medium text-xs leading-tight">
                  {teacher.subject}
                </p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {teachers.slice(4, 8).map((teacher, index) => (
              <div key={index} className="bg-white rounded-xl p-3 text-center shadow-sm">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 rounded-lg overflow-hidden border-2 border-blue-900">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-blue-900 mb-1 leading-tight">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 font-medium text-xs leading-tight">
                  {teacher.subject}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}