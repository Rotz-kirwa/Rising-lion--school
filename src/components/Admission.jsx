import { useState, useEffect } from 'react'

export default function Admission() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    { step: '1', title: 'Submit Application', desc: 'Complete online application form' },
    { step: '2', title: 'School Tour', desc: 'Visit our campus and meet faculty' },
    { step: '3', title: 'Assessment', desc: 'Academic evaluation and interview' },
    { step: '4', title: 'Enrollment', desc: 'Complete registration process' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="admission" className="section section-gray">
      <div className="container">
        <div className="section-header">
          <h2>Admission Process</h2>
          <p>
            Join our community of learners. We welcome students who are ready to excel.
          </p>
        </div>

        <div className="mb-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {steps.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8 text-center">
                  <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep ? 'bg-blue-900 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
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