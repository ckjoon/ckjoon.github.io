import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Education />
        <Experience />
        <Certifications />
      </main>
      <Footer />
    </>
  )
}
