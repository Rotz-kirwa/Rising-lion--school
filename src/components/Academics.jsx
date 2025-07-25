export default function Academics() {
  const programs = [
    { icon: '🔬', title: 'STEM Programs', desc: 'Advanced Science, Technology, Engineering & Mathematics' },
    { icon: '📖', title: 'Liberal Arts', desc: 'Literature, History, Philosophy & Critical Thinking' },
    { icon: '🎨', title: 'Arts & Music', desc: 'Creative Expression & Performance Arts' },
    { icon: '⚽', title: 'Athletics', desc: 'Physical Education & Competitive Sports' },
    { icon: '🌍', title: 'Languages', desc: 'English, Kiswahili & Chinese Programs' },
    { icon: '👑', title: 'Leadership', desc: 'Student Government & Community Service' }
  ]

  return (
    <section id="academics" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Academic Programs</h2>
          <p>
            Comprehensive curriculum designed to challenge and inspire students across all disciplines.
          </p>
        </div>

        <div className="space-y-4 lg:space-y-0 desktop-grid-container">
          <div className="hidden lg:grid desktop-academic-grid">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm desktop-card">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{program.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{program.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-4">
            {programs.slice(0, 2).map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-4xl mb-3">{program.icon}</div>
                <h3 className="text-base font-bold text-blue-900 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 leading-tight">{program.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {programs.slice(2, 4).map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-4xl mb-3">{program.icon}</div>
                <h3 className="text-base font-bold text-blue-900 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 leading-tight">{program.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {programs.slice(4, 6).map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-4xl mb-3">{program.icon}</div>
                <h3 className="text-base font-bold text-blue-900 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 leading-tight">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop: '64px', background: '#1e3a8a', color: 'white', padding: '32px', borderRadius: '16px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap'}}>
            <div style={{flex: '1', minWidth: '300px'}}>
              <h3 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '16px'}}>Advanced Placement Courses</h3>
              <p style={{color: '#bfdbfe', marginBottom: '24px', fontSize: '16px'}}>
                Over 20 AP courses available to help students earn college credit and stand out in admissions.
              </p>
              <a href="#course-catalog" className="btn btn-primary" style={{textDecoration: 'none', background: '#f97316', color: 'white'}}>
                View Course Catalog
              </a>
            </div>
            <div style={{textAlign: 'center', minWidth: '200px'}}>
              <div style={{fontSize: '64px', marginBottom: '16px'}}>📊</div>
              <div style={{fontSize: '24px', fontWeight: 'bold'}}>Average AP Score: 4.2</div>
              <div style={{color: '#bfdbfe'}}>Above National Average</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}