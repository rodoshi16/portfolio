import { motion } from 'framer-motion'
import { FaChartLine, FaUsers, FaServer } from 'react-icons/fa'
import './SectionTemplate.css'

const products = [
  {
    name: 'Enterprise Analytics Platform',
    description: 'Scaled to handle 1M+ daily active users',
    metrics: '1M+ DAU, 99.9% uptime',
    icon: <FaChartLine />
  },
  {
    name: 'Real-time Communication System',
    description: 'Processes 10M+ messages per day',
    metrics: '10M+ messages/day, <50ms latency',
    icon: <FaUsers />
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Reduced costs by 40% while scaling 3x',
    metrics: '40% cost reduction, 3x scale',
    icon: <FaServer />
  }
]

export default function ProductsScaled() {
  return (
    <div className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="section-number">02</div>
        <h2 className="section-title">Products Scaled</h2>
        <p className="section-subtitle">Production systems with measurable impact</p>
      </motion.div>

      <div className="items-grid">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="item-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="item-icon">{product.icon}</div>
            <h3 className="item-title">{product.name}</h3>
            <p className="item-description">{product.description}</p>
            <div className="item-metrics">{product.metrics}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

