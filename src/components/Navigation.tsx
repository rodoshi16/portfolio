import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './Navigation.css'

interface NavigationProps {
  activeSection: string
}

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'work-experience', label: 'Experience' },
  { id: 'personal-projects', label: 'Projects' },
  { id: 'hackathon-projects', label: 'Hackathons' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'volunteering', label: 'Impact' },
  { id: 'mini-me', label: 'Contact' },
]

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      className={`nav ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="nav-container">
        <motion.button
          className="nav-logo"
          onClick={() => scrollToSection('hero')}
          whileHover={{ opacity: 0.7 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">RM</span>
        </motion.button>
        <div className="nav-links">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ opacity: 0.7 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  className="nav-indicator"
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
