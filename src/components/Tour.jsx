export default function Tour() {
  const facilities = [
    { name: 'Dispensary', icon: '🏥', image: 'https://sagnairobi.org/wp-content/uploads/2024/01/DSC00406-1024x662.jpg' },
    { name: 'Canteen', icon: '🍽️', image: 'https://media.istockphoto.com/id/498665609/photo/children-eating-school-dinners.webp?a=1&b=1&s=612x612&w=0&k=20&c=_P_tG1_E4XSnfOTMFCVxy_Pr-MtG0e3-3iD-4Czuz10=' },
    { name: 'Classrooms', icon: '🏫', image: 'https://images.unsplash.com/photo-1665492095698-8ea8406cdf2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sJTIwY2FudGVlbnxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Administrative Offices', icon: '🏢', image: 'https://media.istockphoto.com/id/157476686/photo/university-lecture-hall-college-dorm-school-or-campus-education-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sd4HJ3aX6KVEKYsz7zp9MWyIIfzp1Ph_mk-CmFH-Yn4=' },
    { name: 'Dormitory', icon: '🏠', image: 'https://images.unsplash.com/photo-1709805619372-40de3f158e83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvcm1pdG9yeXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Library', icon: '📚', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwbGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Dining Hall', icon: '🍴', image: 'https://photo-cdn2.icons8.com/0Weoc7wZUzuSGIon4ji9kad9IEPDAOSbB8Yy-_gQd3c/rs:fit:288:407/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODcvYzllNTY5/MmQtNTY5Yi00MDJj/LWE0M2ItYmVmNThh/NmRiZGYzLmpwZw.webp' },
    { name: 'Sports Field', icon: '⚽', image: 'https://images.unsplash.com/photo-1566938089211-5821c49b3548?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbCUyMHBsYXlncm91bmR8ZW58MHx8MHx8fDA%3D' },
    { name: 'Chapel', icon: '⛪', image: 'https://images.unsplash.com/photo-1675609606512-9bf426a32096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcGVsfGVufDB8fDB8fHww' },
    { name: 'Mosque', icon: '🕌', image: 'https://images.unsplash.com/photo-1590075865003-e48277faa558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Parade Ground', icon: '🏟️', image: 'https://images.unsplash.com/photo-1636393853624-2fce2206c9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwYXNzZW1ibHklMjBncm91bmR8ZW58MHx8MHx8fDA%3D' }
  ]

  return (
    <section id="tour" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Campus Tour</h2>
          <p>
            Explore our state-of-the-art facilities designed to provide the best learning environment for our students.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="card text-center p-3 sm:p-4">
              <div className="relative mb-3">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto rounded-xl overflow-hidden border-3 border-blue-900 shadow-lg">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm border-2 border-white shadow-lg">
                  {facility.icon}
                </div>
              </div>
              <h3 className="text-xs sm:text-sm lg:text-base font-bold text-blue-900 leading-tight">
                {facility.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center" style={{marginTop: '48px'}}>
          <button className="btn btn-primary" style={{marginRight: '16px'}}>
            Schedule Campus Tour
          </button>
          <button className="btn" style={{border: '2px solid #1e3a8a', color: '#1e3a8a', background: 'transparent'}}>
            Virtual Tour
          </button>
        </div>
      </div>
    </section>
  )
}