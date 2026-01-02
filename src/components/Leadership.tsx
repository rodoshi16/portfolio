import { motion } from 'framer-motion'
import wiseImage from '../assets/wise.jpeg'
import ewbImage from '../assets/ewb.jpeg'
import ieeeImage from '../assets/iee.jpeg'
import './Leadership.css'

const leadership = [
  {
    organization: 'Women in Science & Engineering UofT',
    role: 'Mentor',
    period: 'Jan 2025 – Apr 2025',
    image: wiseImage,
    description: 'Guided high school female students in exploring foundational Python programming, including iteration, loops, and basic data structures. Fostered problem-solving skills through hands-on coding challenges and one-on-one debugging support.'
  },
  {
    organization: 'Engineers Without Borders UofT',
    role: 'Project Lead',
    period: 'Sept 2024 – Apr 2025',
    image: ewbImage,
    description: 'Organized a beginner-friendly hackathon for 150 first-year students, guiding teams through debugging, React project structure, API integration, and coding best practices. Assisted students during "Intro to Git" workshop, helping with repository setup, branch management, and resolving merge conflicts.'
  },
  {
    organization: 'IEEE UofT',
    role: 'Externals Associate',
    period: 'Jul 2024 – Apr 2025',
    image: ieeeImage,
    description: 'Managed external partnerships and communications for the IEEE student branch, facilitating connections between students and industry. Organized events and workshops connecting students with tech industry professionals.'
  }
]

export default function Leadership() {
  return (
    <div className="leadership-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-number">04</div>
        <h2 className="section-title">Leadership</h2>
        <p className="section-subtitle">Leading initiatives and mentoring the next generation</p>
      </motion.div>

      <div className="leadership-grid">
        {leadership.map((item, index) => (
          <motion.div
            key={index}
            className="leadership-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
          >
            <div className="leadership-image-wrapper">
              <img
                src={item.image}
                alt={item.organization}
                className="leadership-image"
              />
            </div>
            <div className="leadership-info">
              <div className="leadership-role">{item.role}</div>
              <div className="leadership-organization">{item.organization}</div>
              <div className="leadership-period">{item.period}</div>
              <div className="leadership-description">{item.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
