import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import PersonalProjects from './components/PersonalProjects'
import HackathonProjects from './components/HackathonProjects'
import Leadership from './components/Leadership'
import Volunteering from './components/Volunteering'
import MiniMe from './components/MiniMe'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement
        const sectionTop = sectionElement.offsetTop - 100
        const sectionHeight = sectionElement.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'highlights')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navigation activeSection={activeSection} />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="personal-projects">
          <PersonalProjects />
        </section>
        <section id="hackathon-projects">
          <HackathonProjects />
        </section>
        <section id="leadership">
          <Leadership />
        </section>
        <section id="volunteering">
          <Volunteering />
        </section>
        <section id="mini-me">
          <MiniMe />
        </section>
      </main>
    </div>
  )
}

export default App

