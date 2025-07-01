export default function Admission() {
  const steps = [
    { step: '1', title: 'Submit Application', desc: 'Complete online application form' },
    { step: '2', title: 'School Tour', desc: 'Visit our campus and meet faculty' },
    { step: '3', title: 'Assessment', desc: 'Academic evaluation and interview' },
    { step: '4', title: 'Enrollment', desc: 'Complete registration process' }
  ]

  return (
    <section id="admission" className="section section-gray">
      <div className="container">
        <div className="section-header">
          <h2>Admission Process</h2>
          <p>
            Join our community of learners. We welcome students who are ready to excel.
          </p>
        </div>

        <div className="steps">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="step-number">
                {item.step}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px'}}>Application Requirements</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#6b7280'}}>
                <span style={{color: '#10b981', marginRight: '8px'}}>✓</span> Completed application form
              </li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#6b7280'}}>
                <span style={{color: '#10b981', marginRight: '8px'}}>✓</span> Academic transcripts
              </li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#6b7280'}}>
                <span style={{color: '#10b981', marginRight: '8px'}}>✓</span> Teacher recommendations
              </li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#6b7280'}}>
                <span style={{color: '#10b981', marginRight: '8px'}}>✓</span> Personal statement
              </li>
              <li style={{display: 'flex', alignItems: 'center', color: '#6b7280'}}>
                <span style={{color: '#10b981', marginRight: '8px'}}>✓</span> Application fee ($50)
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px'}}>Important Dates</h3>
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px', marginBottom: '16px'}}>
                <span style={{fontWeight: '600'}}>Application Deadline</span>
                <span style={{color: '#1e3a8a'}}>March 15, 2024</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px', marginBottom: '16px'}}>
                <span style={{fontWeight: '600'}}>Admission Decision</span>
                <span style={{color: '#1e3a8a'}}>April 30, 2024</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px', marginBottom: '16px'}}>
                <span style={{fontWeight: '600'}}>Enrollment Deadline</span>
                <span style={{color: '#1e3a8a'}}>May 31, 2024</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span style={{fontWeight: '600'}}>School Year Begins</span>
                <span style={{color: '#1e3a8a'}}>August 28, 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center" style={{marginTop: '48px'}}>
          <a href="#admission-form" className="btn btn-primary" style={{marginRight: '16px', textDecoration: 'none'}}>
            Start Application
          </a>
          <button className="btn" style={{border: '2px solid #1e3a8a', color: '#1e3a8a', background: 'transparent'}}>
            Schedule Tour
          </button>
        </div>
      </div>
    </section>
  )
}