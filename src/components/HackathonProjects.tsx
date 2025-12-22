import { motion } from 'framer-motion'
import { FaTrophy, FaUsers, FaBrain, FaAward } from 'react-icons/fa'
import './HackathonProjects.css'

const hackathons = [
  {
    name: 'Genesis AI Hackathon',
    award: 'Best AI in Equity, Diversity and Inclusion',
    description: 'Built SafetyBUD, an AI-powered safety training application that dynamically generates personalized questions based on user mistakes.',
    problem: 'Traditional safety training is one-size-fits-all and doesn\'t adapt to individual learning needs.',
    solution: 'Created a FastAPI backend integrated with Google Vertex AI\'s Gemini model to generate context-aware, personalized safety questions in real-time.',
    team: 'Team of 4',
    tech: ['Python', 'FastAPI', 'Google Gemini', 'Vertex AI'],
    impact: [
      { label: 'Award', value: 'Best AI', description: 'Equity & Inclusion' },
      { label: 'Hackathon', value: 'Canada\'s Largest', description: 'AI Hackathon' },
      { label: 'Innovation', value: 'Real-time', description: 'Content Generation' },
    ],
    year: 'March 2024',
    icon: <FaTrophy />
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
        <div className="section-number">03</div>
        <h2 className="section-title">Hackathon Wins</h2>
        <p className="section-subtitle">48-hour builds that solve real problems</p>
      </motion.div>

      <div className="hackathon-showcase">
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={index}
            className="hackathon-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="hackathon-header">
              <div className="award-badge">
                <FaAward className="award-icon" />
                <span>Winner</span>
              </div>
              <div className="hackathon-year">{hackathon.year}</div>
            </div>

            <div className="hackathon-content">
              <div className="hackathon-title-section">
                <div className="hackathon-icon">{hackathon.icon}</div>
                <div>
                  <h3 className="hackathon-name">{hackathon.name}</h3>
                  <div className="hackathon-award">{hackathon.award}</div>
                </div>
              </div>

              <div className="hackathon-details">
                <div className="detail-section">
                  <div className="detail-label">Problem</div>
                  <p className="detail-text">{hackathon.problem}</p>
                </div>

                <div className="detail-section">
                  <div className="detail-label">Solution</div>
                  <p className="detail-text">{hackathon.solution}</p>
                </div>

                <div className="tech-section">
                  <div className="tech-label">Technologies</div>
                  <div className="tech-list">
                    {hackathon.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="impact-grid">
                  {hackathon.impact.map((item, i) => (
                    <div key={i} className="impact-item">
                      <div className="impact-value">{item.value}</div>
                      <div className="impact-label">{item.label}</div>
                      <div className="impact-desc">{item.description}</div>
                    </div>
                  ))}
                </div>

                <div className="team-info">
                  <FaUsers className="team-icon" />
                  <span>{hackathon.team}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
