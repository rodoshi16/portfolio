import { motion } from 'framer-motion'
import { FaHandsHelping, FaUsers, FaAtom, FaGlobe } from 'react-icons/fa'
import './Volunteering.css'

const volunteering = [
  {
    title: 'Tech Executive',
    organization: 'Enable Toronto',
    period: '2021 - 2023',
    description: 'Produced 3D-printed prosthetics for underprivileged individuals with disabilities. Designed, printed, and assembled 10 prosthetics sent to Afghanistan.',
    impact: 'Gained international recognition and was featured on Global News television for humanitarian impact.',
    icon: <FaHandsHelping />,
    highlight: 'Featured on Global News',
    metrics: [
      { value: '10', label: 'Prosthetics' },
      { value: 'Afghanistan', label: 'Impact' },
    ]
  },
  {
    title: 'Peer Leader',
    organization: 'Community Development Council Durham',
    period: 'Jun 2022 - Aug 2023',
    description: 'Facilitated newcomer orientation program for recently immigrated students in Canada. Led lessons on the Canadian school system, fostering connections through inclusive activities.',
    impact: 'Broke language barriers and practiced Care, Compassion, Courage, and Collaboration - core leadership principles.',
    icon: <FaUsers />,
    highlight: '1+ Year Impact',
    metrics: [
      { value: 'Newcomers', label: 'Supported' },
      { value: 'Inclusive', label: 'Activities' },
    ]
  },
  {
    title: 'Quantum Student',
    organization: 'The Coding School - Qubit by Qubit',
    period: 'Sep 2022 - Jun 2023',
    description: 'Completed course taught by quantum researchers at MIT and UC Berkeley. Covered quantum mechanics, quantum information and computation, and quantum hardware.',
    impact: 'Gained foundational knowledge in cutting-edge quantum computing from world-leading institutions.',
    icon: <FaAtom />,
    highlight: 'MIT & UC Berkeley',
    metrics: [
      { value: 'Quantum', label: 'Computing' },
      { value: '10 Months', label: 'Program' },
    ]
  }
]

export default function Volunteering() {
  return (
    <div className="volunteering-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-number">05</div>
        <h2 className="section-title">Volunteering & Impact</h2>
        <p className="section-subtitle">Using technology and leadership to create change</p>
      </motion.div>

      <div className="volunteering-grid">
        {volunteering.map((item, index) => (
          <motion.div
            key={index}
            className="volunteer-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
          >
            <div className="card-header">
              <div className="card-icon">{item.icon}</div>
              <div className="card-highlight">{item.highlight}</div>
            </div>

            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <div className="card-org">{item.organization}</div>
              <div className="card-period">{item.period}</div>

              <p className="card-description">{item.description}</p>

              <div className="card-impact">
                <div className="impact-label">Impact</div>
                <p className="impact-text">{item.impact}</p>
              </div>

              <div className="card-metrics">
                {item.metrics.map((metric, i) => (
                  <div key={i} className="metric-item">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

