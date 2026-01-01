import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import magnaImage from '../magna.jpg'
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

  // Manager feedback content - replace with actual text from your feedback
  const overallComments = `Excellent work this summer Rodoshi, thank you so much for all the hard work you put in over this term. We could not have done any of this without you and will get everything recording as soon as possible! These systems will get integrated into our daily operations for a long time!`

  const strengthsAndAccomplishments = [
    'Ability to work independently in a low structure work environment',
    'Ability to learn new topics and skills quickly and thoroughly',
    'Ability to think of a whole project and break it down into achievable milestones',
    'Technical knowledge in computer science and complex algorithms',
    'Learned backend integrations to support databasing recorded and generated data',
    'Developed GUI and app for self-driving bot training and data collection'
  ]

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link to="/disengagement-logger" className="project-link-button">
              View Project Details →
            </Link>
          </motion.div>
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
          
          {/* Overall Comments */}
          <motion.div
            className="feedback-overall-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="feedback-section-title">Supervisior's overall comments</div>
            <div className="feedback-quote">
              <div className="quote-mark">"</div>
              <p className="feedback-text">{overallComments}</p>
            </div>
          </motion.div>

          {/* Strengths & Accomplishments */}
          <motion.div
            className="feedback-strengths-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="feedback-section-title">Strengths & Accomplishments identified by Team</div>
            <div className="strengths-grid">
              {strengthsAndAccomplishments.map((strength, index) => (
                <motion.div
                  key={index}
                  className="strength-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.85 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="strength-icon">✓</div>
                  <p className="strength-text">{strength}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

