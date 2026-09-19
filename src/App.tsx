import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './sections/About'
import { Certificates } from './sections/Certificates'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Resume } from './sections/Resume'
import { Skills } from './sections/Skills'

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Resume />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
