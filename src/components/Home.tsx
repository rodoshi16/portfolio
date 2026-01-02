import { useState, useEffect } from 'react'
import Hero from './Hero'
import WorkExperience from './WorkExperience'
import PersonalProjects from './PersonalProjects'
import HackathonProjects from './HackathonProjects'
import Leadership from './Leadership'
import Volunteering from './Volunteering'
import MiniMe from './MiniMe'
import Navigation from './Navigation'

export default function Home() {
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
          setActiveSection(sectionId || 'hero')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navigation activeSection={activeSection} />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="hackathon-projects">
          <HackathonProjects />
        </section>
        <section id="personal-projects">
          <PersonalProjects />
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
    </>
  )
}

