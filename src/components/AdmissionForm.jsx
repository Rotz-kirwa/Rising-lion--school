export default function AdmissionForm() {
  return (
    <section id="admission-form" className="section section-gray">
      <div className="container">
        <div className="section-header">
          <h2>Student Admission Form</h2>
          <p>Complete the form below to apply for admission to Rising Lion Academy</p>
        </div>

        <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
          <form action="https://formspree.io/f/xpwzgqko" method="POST">
            
            <h3 style={{color: '#1e3a8a', marginBottom: '20px', borderBottom: '2px solid #1e3a8a', paddingBottom: '10px'}}>1. Student Information</h3>
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" name="fullName" required />
              </div>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-input" name="dateOfBirth" required />
              </div>
            </div>
            
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select className="form-input" name="gender" required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Nationality</label>
                <input type="text" className="form-input" name="nationality" required />
              </div>
            </div>

            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Current Grade/Class</label>
                <input type="text" className="form-input" name="currentGrade" />
              </div>
              <div className="form-group">
                <label className="form-label">Applying For Grade/Class</label>
                <input type="text" className="form-input" name="applyingGrade" required />
              </div>
            </div>

            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Preferred Admission Term</label>
                <select className="form-input" name="admissionTerm" required>
                  <option value="">Select Term</option>
                  <option value="Term 1">Term 1</option>
                  <option value="Term 2">Term 2</option>
                  <option value="Term 3">Term 3</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Religion (optional)</label>
                <input type="text" className="form-input" name="religion" />
              </div>
            </div>

            <h3 style={{color: '#1e3a8a', marginBottom: '20px', marginTop: '30px', borderBottom: '2px solid #1e3a8a', paddingBottom: '10px'}}>2. Parent/Guardian Information</h3>
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Parent/Guardian Full Name</label>
                <input type="text" className="form-input" name="parentName" required />
              </div>
              <div className="form-group">
                <label className="form-label">Relationship to Student</label>
                <input type="text" className="form-input" name="relationship" required />
              </div>
            </div>

            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">ID/Passport Number</label>
                <input type="text" className="form-input" name="idNumber" required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" name="phoneNumber" required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" name="emailAddress" required />
            </div>

            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Residential Address</label>
                <textarea className="form-input" name="residentialAddress" rows="3" required></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">Postal Address</label>
                <textarea className="form-input" name="postalAddress" rows="3"></textarea>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Occupation/Employer</label>
              <input type="text" className="form-input" name="occupation" />
            </div>

            <h3 style={{color: '#1e3a8a', marginBottom: '20px', marginTop: '30px', borderBottom: '2px solid #1e3a8a', paddingBottom: '10px'}}>3. Emergency Contact</h3>
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Emergency Contact Name</label>
                <input type="text" className="form-input" name="emergencyName" required />
              </div>
              <div className="form-group">
                <label className="form-label">Relationship to Student</label>
                <input type="text" className="form-input" name="emergencyRelationship" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Emergency Phone Number</label>
              <input type="tel" className="form-input" name="emergencyPhone" required />
            </div>

            <h3 style={{color: '#1e3a8a', marginBottom: '20px', marginTop: '30px', borderBottom: '2px solid #1e3a8a', paddingBottom: '10px'}}>4. Previous School Information</h3>
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">Name of Previous School</label>
                <input type="text" className="form-input" name="previousSchool" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Class Attended</label>
                <input type="text" className="form-input" name="lastClass" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Reason for Transfer (if applicable)</label>
              <textarea className="form-input" name="transferReason" rows="3"></textarea>
            </div>

            <h3 style={{color: '#1e3a8a', marginBottom: '20px', marginTop: '30px', borderBottom: '2px solid #1e3a8a', paddingBottom: '10px'}}>5. Medical Information</h3>
            <div className="form-group">
              <label className="form-label">Medical Conditions/Allergies</label>
              <textarea className="form-input" name="medicalConditions" rows="3" placeholder="Please specify any medical conditions or allergies. Write 'None' if not applicable."></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Medical Insurance Provider</label>
              <input type="text" className="form-input" name="insuranceProvider" />
            </div>

            <h3 style={{color: '#1e3a8a', marginBottom: '20px', marginTop: '30px', borderBottom: '2px solid #1e3a8a', paddingBottom: '10px'}}>6. Declaration</h3>
            <div style={{background: '#f9fafb', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
              <p style={{marginBottom: '15px', lineHeight: '1.6'}}>
                I confirm that the information provided above is true and complete. I understand that admission is subject to review and availability.
              </p>
              <div className="form-group">
                <label style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <input type="checkbox" name="declaration" required />
                  <span>I agree to the terms and conditions</span>
                </label>
              </div>
            </div>

            <div style={{background: '#1e3a8a', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
              <h4 style={{marginBottom: '10px'}}>Required Documents:</h4>
              <ul style={{listStyle: 'none', padding: '0'}}>
                <li>• Copy of Birth Certificate</li>
                <li>• Two Passport-Size Photos</li>
                <li>• Academic Report/Transcript</li>
                <li>• Transfer Letter (if applicable)</li>
                <li>• Copy of Parent/Guardian ID</li>
                <li>• Medical Report (if required)</li>
              </ul>
              <p style={{marginTop: '15px', fontSize: '14px', color: '#bfdbfe'}}>
                Please prepare these documents and bring them during the admission interview.
              </p>
            </div>

            <button type="submit" className="btn" style={{width: '100%', background: '#1e3a8a', color: 'white', padding: '15px', fontSize: '18px'}}>
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}