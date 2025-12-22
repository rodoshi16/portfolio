import { motion } from 'framer-motion'
import { FaUsers, FaHandshake, FaBullhorn, FaCode } from 'react-icons/fa'
import './Leadership.css'

const leadership = [
  {
    role: 'Mentor',
    organization: 'Women in Science & Engineering (WISE)',
    period: 'Jan 2025 - Apr 2025',
    description: 'Guided high school female students in exploring foundational Python programming, including iteration, loops, and basic data structures.',
    impact: 'Fostered problem-solving skills through hands-on coding challenges and one-on-one debugging support.',
    icon: <FaUsers />,
    metrics: [
      { value: 'High School', label: 'Students' },
      { value: 'Python', label: 'Programming' },
    ]
  },
  {
    role: 'Project Lead',
    organization: 'Engineers Without Borders Canada',
    period: 'Aug 2024 - Apr 2025',
    description: 'Organized a beginner-friendly hackathon for 150 first-year students, guiding teams through debugging, React project structure, API integration, and coding best practices.',
    impact: 'Assisted students during "Intro to Git" workshop, helping with repository setup, branch management, and resolving merge conflicts.',
    icon: <FaHandshake />,
    metrics: [
      { value: '150', label: 'Students' },
      { value: '10+', label: 'Projects' },
    ]
  },
  {
    role: 'Associate of External Relations',
    organization: 'IEEE University of Toronto',
    period: 'Jul 2024 - Apr 2025',
    description: 'Managed external partnerships and communications for the IEEE student branch, facilitating connections between students and industry.',
    impact: 'Organized events and workshops connecting students with tech industry professionals.',
    icon: <FaBullhorn />,
    metrics: [
      { value: 'IEEE', label: 'Student Branch' },
      { value: 'Industry', label: 'Connections' },
    ]
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
        <h2 className="section-title">Leadership & Impact</h2>
        <p className="section-subtitle">Building communities and empowering others</p>
      </motion.div>

      <div className="leadership-timeline">
        {leadership.map((role, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="timeline-marker">
              <div className="marker-icon">{role.icon}</div>
              <div className="marker-line" />
            </div>

            <div className="timeline-content">
              <div className="role-header">
                <div>
                  <h3 className="role-title">{role.role}</h3>
                  <div className="role-org">{role.organization}</div>
                  <div className="role-period">{role.period}</div>
                </div>
                <div className="role-metrics">
                  {role.metrics.map((metric, i) => (
                    <div key={i} className="metric-box">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="role-description">
                <p>{role.description}</p>
              </div>

              <div className="role-impact">
                <div className="impact-label">Impact</div>
                <p className="impact-text">{role.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
