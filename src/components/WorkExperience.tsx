import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
        <p className="section-subtitle">Production software shipped at Magna International</p>
      </motion.div>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="experience-header">
          <div>
            <div className="company-badge">Magna International</div>
            <h3 className="role-title">Software Engineer Intern</h3>
            <div className="role-period">Autonomous Driving Team · Jun 2025 - Aug 2025</div>
          </div>
          <div className="company-logo-placeholder">
            <span>MG</span>
          </div>
        </div>

        <div className="experience-summary">
          <p className="summary-text">
            Shipped 3 production applications used by 7+ engineers during live self-driving vehicle testing. 
            Architected full-stack systems reducing manual work by 80-99% and improving data accuracy by 90%.
          </p>
        </div>

        <div className="key-achievements">
          <div className="achievement-item">
            <div className="achievement-icon">⚡</div>
            <div className="achievement-content">
              <div className="achievement-title">99.8% Time Reduction</div>
              <div className="achievement-desc">5 minutes → 5 seconds per disengagement</div>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">📊</div>
            <div className="achievement-content">
              <div className="achievement-title">90% Accuracy Improvement</div>
              <div className="achievement-desc">Eliminated manual Excel tracking</div>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">🚀</div>
            <div className="achievement-content">
              <div className="achievement-title">3 Production Systems</div>
              <div className="achievement-desc">All deployed and actively used</div>
            </div>
          </div>
        </div>

        <div className="tech-stack-section">
          <div className="tech-label">Technologies</div>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express</span>
            <span className="tech-tag">React Native</span>
            <span className="tech-tag">Azure</span>
            <span className="tech-tag">BigQuery</span>
          </div>
        </div>

        <Link to="/magna-experience" className="view-details-button">
          View Detailed Experience →
        </Link>
      </motion.div>
    </div>
  )
}
