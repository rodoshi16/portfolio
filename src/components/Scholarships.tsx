import { motion } from 'framer-motion'
import { FaAward, FaDollarSign } from 'react-icons/fa'
import './SectionTemplate.css'

const scholarships = [
  {
    name: 'Lester B. Pearson International Scholarship',
    amount: '$2,000',
    year: '2024',
    description: 'Awarded for academic excellence and leadership',
    icon: <FaAward />
  },
  {
    name: 'Computer Science Excellence Award',
    amount: '$1,500',
    year: '2024',
    description: 'Recognition for outstanding performance in CS courses',
    icon: <FaAward />
  },
  {
    name: 'Innovation & Entrepreneurship Scholarship',
    amount: '$500',
    year: '2023',
    description: 'Awarded for innovative projects and entrepreneurial spirit',
    icon: <FaAward />
  }
]

export default function Scholarships() {
  const totalAmount = scholarships.reduce((sum, s) => sum + parseInt(s.amount.replace(/[^0-9]/g, '')), 0)

  return (
    <div className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="section-number">06</div>
        <h2 className="section-title">Scholarships</h2>
        <p className="section-subtitle">Academic recognition and achievement</p>
        <motion.div
          className="total-amount"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <FaDollarSign className="dollar-icon" />
          <span className="total-text">Total: ${totalAmount.toLocaleString()}+</span>
        </motion.div>
      </motion.div>

      <div className="items-grid">
        {scholarships.map((scholarship, index) => (
          <motion.div
            key={index}
            className="item-card scholarship-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="item-icon">{scholarship.icon}</div>
            <h3 className="item-title">{scholarship.name}</h3>
            <div className="scholarship-amount">{scholarship.amount}</div>
            <p className="scholarship-year">{scholarship.year}</p>
            <p className="item-description">{scholarship.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
