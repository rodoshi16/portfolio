import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import magnaImage from '../magna.jpg'
import managerFeedback from '../assets/600A01D5-7444-4088-90DC-933251799D54.jpeg'
import './MagnaExperience.css'

export default function MagnaExperience() {
  const containerRef = useRef<HTMLDivElement>(null)

  const bullets = [
    'Built and deployed a client-server, event-driven web application on Azure, including the database schema design and a BigQuery-based cloud data layer to enable real-time logging of autonomous robot disengagements.',
    'Improved reporting accuracy by 90% through the deployed software solution, reducing operator logging time from 5 minutes to 5 seconds, eliminating manual excel workflows and increasing operational efficiency.',
    'Optimized schedule generation, reducing manual creation time by 80% through an end to end full-stack solution (Node.js + Express + React) using Haversine and Fisher-Yates algorithm for randomized multi-dropoff routes.',
    'Developed the frontend of an Android mobile app for 7+ Magna engineers, enabling schedule sync via game pins, role selection, and pickup/drop-off tracking on maps, enhancing user engagement for autonomous robot testing.'
  ]

  const skills = ['Node.js', 'Express', 'TypeScript', 'React.js', 'React Native', 'Azure', 'BigQuery']

  return (
    <div ref={containerRef} className="magna-experience-container">
      <div className="magna-content">
        <Link to="/" className="magna-back-button">
          ← Back to Portfolio
        </Link>
        {/* Hero Image */}
        <motion.div
          className="magna-hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="magna-image-wrapper">
            <img
              src={magnaImage}
              alt="Magna International"
              className="magna-image"
            />
          </div>
          <div className="magna-title-section">
            <h1 className="magna-title">Magna International</h1>
            <h2 className="magna-role">Software Engineer Intern</h2>
            <p className="magna-team">Autonomous Driving Team</p>
          </div>
        </motion.div>

        {/* Accomplishments */}
        <motion.div
          className="accomplishments-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="section-label">Accomplishments</div>
          <ul className="bullets-list">
            {bullets.map((bullet, index) => (
              <motion.li
                key={index}
                className="bullet-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                {bullet}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="section-label">Technologies</div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="skill-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Manager Feedback */}
        <motion.div
          className="feedback-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="section-label">Manager Feedback</div>
          <div className="feedback-content">
            <div className="feedback-image-wrapper">
              <img
                src={managerFeedback}
                alt="Manager Feedback"
                className="feedback-image"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

