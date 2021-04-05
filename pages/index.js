import { useRef } from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Projects from '../components/projects/Projects'

export default function Home() {
  const heroRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  return (
    <main>
      <Navbar 
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        heroRef={heroRef}
      />
      <Hero heroRef={heroRef} />
      <Projects projectsRef={projectsRef} />
      <About aboutRef={aboutRef}/>
      <Contact contactRef={contactRef}/>
    </main>
  )
}
