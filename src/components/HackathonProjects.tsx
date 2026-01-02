import { motion } from 'framer-motion'
import holofundImage from '../assets/holofund.jpeg'
import safetyBUDImage from '../assets/safetyBUD.jpeg'
import './HackathonProjects.css'

const hackathons = [
  {
    name: 'Holofund',
    date: 'August 2024',
    image: holofundImage,
    award: 'Hackathon Winner',
    link: 'https://devpost.com/software/blockhack-qdhf53'
  },
  {
    name: 'SafetyBUD',
    date: 'March 2024',
    image: safetyBUDImage,
    award: 'Best AI in Equity, Diversity and Inclusion',
    link: 'https://devpost.com/software/safety-bud'
  }
]

export default function HackathonProjects() {
  return (
    <div className="hackathon-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-number">02</div>
        <h2 className="section-title">Hackathon Projects</h2>
        <p className="section-subtitle">Winning solutions built in 48-hour sprints</p>
      </motion.div>

      <div className="hackathon-grid">
        {hackathons.map((hackathon, index) => (
          <motion.a
            key={index}
            href={hackathon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hackathon-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="hackathon-image-wrapper">
              <img
                src={hackathon.image}
                alt={hackathon.name}
                className="hackathon-image"
              />
            </div>
            <div className="hackathon-info">
              <div className="hackathon-name">{hackathon.name}</div>
              <div className="hackathon-date">{hackathon.date}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
