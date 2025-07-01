import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Academics from './components/Academics'
import CourseCatalog from './components/CourseCatalog'
import Staff from './components/Staff'
import Tour from './components/Tour'
import Admission from './components/Admission'
import AdmissionForm from './components/AdmissionForm'
import News from './components/News'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{minHeight: '100vh', background: 'white'}}>
      <Header />
      <Hero />
      <About />
      <Academics />
      <CourseCatalog />
      <Staff />
      <Tour />
      <Admission />
      <AdmissionForm />
      <News />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
