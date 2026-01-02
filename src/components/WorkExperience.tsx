import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import magnaImage from '../magna.jpg'
import './WorkExperience.css'

export default function WorkExperience() {
  return (
    <div className="work-experience-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-number">01</div>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">Production software for autonomous vehicle systems</p>
      </motion.div>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/magna-experience" className="experience-link">
          <div className="experience-image-wrapper">
            <img
              src={magnaImage}
              alt="Magna International"
              className="experience-image"
            />
          </div>
          <div className="experience-info">
            <div className="company-name">Magna International</div>
            <div className="role-title">Software Engineer Intern</div>
            <div className="role-details">Autonomous Driving Team · Jun 2025 - Aug 2025</div>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}
