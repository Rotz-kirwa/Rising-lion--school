export default function CourseCatalog() {
  const courses = [
    {
      category: "STEM Courses",
      courses: [
        { name: "Advanced Mathematics", code: "MATH-401", description: "Calculus, Statistics, and Advanced Problem Solving" },
        { name: "Physics", code: "PHYS-301", description: "Mechanics, Thermodynamics, and Modern Physics" },
        { name: "Chemistry", code: "CHEM-301", description: "Organic, Inorganic, and Analytical Chemistry" },
        { name: "Biology", code: "BIO-301", description: "Molecular Biology, Genetics, and Ecology" },
        { name: "Computer Science", code: "CS-401", description: "Programming, Data Structures, and Software Development" },
        { name: "Engineering Principles", code: "ENG-201", description: "Design Thinking, Robotics, and Engineering Applications" }
      ]
    },
    {
      category: "Liberal Arts",
      courses: [
        { name: "English Literature", code: "ENG-301", description: "Classic and Contemporary Literature Analysis" },
        { name: "World History", code: "HIST-301", description: "Global Civilizations and Historical Perspectives" },
        { name: "Philosophy", code: "PHIL-201", description: "Ethics, Logic, and Critical Thinking" },
        { name: "Psychology", code: "PSYC-201", description: "Human Behavior and Mental Processes" },
        { name: "Sociology", code: "SOC-201", description: "Society, Culture, and Social Interactions" }
      ]
    },
    {
      category: "Languages",
      courses: [
        { name: "Advanced English", code: "ENG-401", description: "Academic Writing, Public Speaking, and Communication" },
        { name: "Kiswahili", code: "KIS-301", description: "Advanced Grammar, Literature, and Cultural Studies" },
        { name: "Chinese (Mandarin)", code: "CHN-201", description: "Speaking, Writing, and Cultural Understanding" },
        { name: "French", code: "FRE-201", description: "Conversational French and Francophone Culture" }
      ]
    },
    {
      category: "Arts & Creative",
      courses: [
        { name: "Visual Arts", code: "ART-301", description: "Drawing, Painting, and Digital Art Techniques" },
        { name: "Music Theory", code: "MUS-201", description: "Composition, Performance, and Music History" },
        { name: "Drama & Theatre", code: "DRA-201", description: "Acting, Script Writing, and Stage Production" },
        { name: "Creative Writing", code: "CW-201", description: "Poetry, Short Stories, and Narrative Techniques" }
      ]
    },
    {
      category: "Leadership & Life Skills",
      courses: [
        { name: "Leadership Development", code: "LEAD-301", description: "Team Management, Decision Making, and Communication" },
        { name: "Entrepreneurship", code: "ENT-201", description: "Business Planning, Innovation, and Market Analysis" },
        { name: "Financial Literacy", code: "FIN-101", description: "Personal Finance, Investment, and Economic Principles" },
        { name: "Public Speaking", code: "COMM-201", description: "Presentation Skills, Debate, and Effective Communication" }
      ]
    }
  ]

  return (
    <section id="course-catalog" className="section section-gray">
      <div className="container">
        <div className="section-header">
          <h2>Course Catalog</h2>
          <p>
            Explore our comprehensive curriculum designed to prepare students for academic excellence and future success.
          </p>
        </div>

        {courses.map((category, categoryIndex) => (
          <div key={categoryIndex} style={{marginBottom: '48px'}}>
            <h3 style={{
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: '#1e3a8a', 
              marginBottom: '24px',
              textAlign: 'center',
              borderBottom: '3px solid #fbbf24',
              paddingBottom: '12px'
            }}>
              {category.category}
            </h3>
            
            <div className="grid grid-2" style={{gap: '20px'}}>
              {category.courses.map((course, courseIndex) => (
                <div key={courseIndex} className="card" style={{
                  padding: '24px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e5e7eb'
                }}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                    <h4 style={{
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: '#1e3a8a',
                      flex: '1'
                    }}>
                      {course.name}
                    </h4>
                    <span style={{
                      background: '#1e3a8a',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {course.code}
                    </span>
                  </div>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{
          background: '#1e3a8a',
          color: 'white',
          padding: '32px',
          borderRadius: '12px',
          textAlign: 'center',
          marginTop: '48px'
        }}>
          <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>
            Ready to Enroll?
          </h3>
          <p style={{marginBottom: '24px', color: '#bfdbfe'}}>
            Contact our admissions team to learn more about course requirements and enrollment procedures.
          </p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="#contact" className="btn btn-primary" style={{textDecoration: 'none'}}>
              Contact Admissions
            </a>
            <a href="#admission-form" className="btn btn-secondary" style={{textDecoration: 'none'}}>
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}