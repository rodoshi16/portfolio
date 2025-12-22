import { motion } from 'framer-motion'
import { FaCode, FaTrophy, FaChartBar } from 'react-icons/fa'
import './SectionTemplate.css'

const achievements = [
  {
    platform: 'LeetCode',
    rank: 'Top 1%',
    problems: '500+ problems solved',
    contests: '50+ contests participated',
    icon: <FaCode />
  },
  {
    platform: 'Codeforces',
    rank: 'Expert (1600+)',
    problems: '300+ problems solved',
    contests: '30+ contests participated',
    icon: <FaTrophy />
  },
  {
    platform: 'HackerRank',
    rank: '5 Stars',
    problems: '200+ problems solved',
    contests: '20+ contests participated',
    icon: <FaChartBar />
  }
]

export default function CompetitiveProgramming() {
  return (
    <div className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="section-number">08</div>
        <h2 className="section-title">Competitive Programming</h2>
        <p className="section-subtitle">Algorithmic problem solving and optimization</p>
      </motion.div>

      <div className="items-grid">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="item-card cp-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="item-icon">{achievement.icon}</div>
            <h3 className="item-title">{achievement.platform}</h3>
            <div className="cp-rank">{achievement.rank}</div>
            <div className="cp-stats">
              <div className="stat-item">
                <span className="stat-label">Problems</span>
                <span className="stat-value">{achievement.problems}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Contests</span>
                <span className="stat-value">{achievement.contests}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
