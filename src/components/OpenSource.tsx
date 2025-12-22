import { motion } from 'framer-motion'
import { FaGithub, FaCodeBranch, FaStar } from 'react-icons/fa'
import './SectionTemplate.css'

const contributions = [
  {
    repo: 'tensorflow/tensorflow',
    description: 'Fixed critical bug in gradient computation for sparse tensors',
    contributions: '3 PRs merged, 500+ lines changed',
    impact: 'Used by 10K+ developers',
    icon: <FaGithub />
  },
  {
    repo: 'kubernetes/kubernetes',
    description: 'Improved scheduler performance for large-scale deployments',
    contributions: '2 PRs merged, 300+ lines changed',
    impact: 'Affects 1M+ container deployments',
    icon: <FaCodeBranch />
  },
  {
    repo: 'reactjs/react',
    description: 'Optimized reconciliation algorithm for better performance',
    contributions: '1 PR merged, 200+ lines changed',
    impact: 'Improves performance for millions of React apps',
    icon: <FaStar />
  }
]

export default function OpenSource() {
  return (
    <div className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="section-number">05</div>
        <h2 className="section-title">Open Source</h2>
        <p className="section-subtitle">Contributions to major open-source projects</p>
      </motion.div>

      <div className="items-grid">
        {contributions.map((contribution, index) => (
          <motion.div
            key={index}
            className="item-card contribution-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="item-icon">{contribution.icon}</div>
            <h3 className="item-title">{contribution.repo}</h3>
            <p className="item-description">{contribution.description}</p>
            <div className="contribution-stats">
              <div className="stat-item">
                <span className="stat-label">Contributions</span>
                <span className="stat-value">{contribution.contributions}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Impact</span>
                <span className="stat-value">{contribution.impact}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
