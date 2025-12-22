import { motion } from 'framer-motion'
import { FaTrophy, FaUsers, FaLightbulb } from 'react-icons/fa'
import './SectionTemplate.css'

const competitions = [
  {
    name: 'McKinsey Case Competition',
    result: '1st Place',
    year: '2024',
    description: 'Developed strategic solution for digital transformation, presented to C-suite executives',
    team: 'Team of 4',
    prize: '$5,000',
    icon: <FaTrophy />
  },
  {
    name: 'Deloitte Tech Case Competition',
    result: '1st Place',
    year: '2023',
    description: 'Designed innovative tech solution for enterprise clients, won against 50+ teams',
    team: 'Team of 3',
    prize: '$3,000',
    icon: <FaLightbulb />
  },
  {
    name: 'BCG Strategy Case Competition',
    result: '2nd Place',
    year: '2023',
    description: 'Analyzed market trends and proposed strategic recommendations for Fortune 500 company',
    team: 'Team of 4',
    prize: '$2,000',
    icon: <FaUsers />
  }
]

export default function CaseCompetitions() {
  return (
    <div className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="section-number">09</div>
        <h2 className="section-title">Case Competitions</h2>
        <p className="section-subtitle">Strategic problem solving and business acumen</p>
      </motion.div>

      <div className="items-grid">
        {competitions.map((competition, index) => (
          <motion.div
            key={index}
            className="item-card case-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="case-header">
              <div className="item-icon">{competition.icon}</div>
              <div className={`case-badge ${competition.result.includes('1st') ? 'winner' : 'runner-up'}`}>
                {competition.result}
              </div>
            </div>
            <h3 className="item-title">{competition.name}</h3>
            <p className="case-year">{competition.year}</p>
            <p className="item-description">{competition.description}</p>
            <div className="case-details">
              <div className="detail-item">
                <FaUsers className="detail-icon" />
                <span>{competition.team}</span>
              </div>
              <div className="detail-item">
                <FaTrophy className="detail-icon" />
                <span>{competition.prize}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
