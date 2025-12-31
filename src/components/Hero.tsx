import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import rodoshiPhoto from '../assets/610BA1F6-C724-45F8-9A4A-EC03889CD0E3_1_105_c.jpeg'
import './Hero.css'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentMetric, setCurrentMetric] = useState(0)
  const [countUp, setCountUp] = useState({ value: 0, target: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  const highlights = [
    'Former Software Engineer Intern @Magna International',
    '2x Hackathon Winner',
    '3D printed prosthetic project featured on Global News',
    'Built and shipped software in the industry impacting 7+ engineers, boosting data accuracy and operational efficiency',
    'Mentored students at Hackathons and Coding workshops',
    'Leadership involvement: Project Lead @Engineers Without Borders, Mentor @WISE, Externals Associate @IEEE_UofT, Residence Don @UofT'
  ]

  const metrics = [
    { label: 'Time Reduction', before: 300, after: 5, unit: 'seconds', description: 'Operator logging time' },
    { label: 'Accuracy Improvement', before: 10, after: 100, unit: '%', description: 'Reporting accuracy' },
    { label: 'Manual Work Eliminated', before: 100, after: 5, unit: '%', description: 'Automation achieved' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const target = metrics[currentMetric].after
    const duration = 2000
    const steps = 60
    const increment = (target - countUp.value) / steps
    let current = countUp.value

    const timer = setInterval(() => {
      current += increment
      if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
        setCountUp({ value: target, target })
        clearInterval(timer)
      } else {
        setCountUp({ value: Math.round(current), target })
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [currentMetric])

  const current = metrics[currentMetric]

  return (
    <div ref={containerRef} className="hero-container">
      <div className="hero-background">
        <div className="grid-pattern" />
        <div className="gradient-mesh" />
      </div>

      <motion.div 
        className="hero-content"
        style={{ opacity, y }}
      >
        {/* Top Section - Name and Intro */}
        <div className="hero-top">
          <motion.div
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="intro-badge">Software Engineer</div>
            <div className="intro-location">Magna International · Autonomous Systems</div>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Rodoshi Mondal
          </motion.h1>

          <motion.p
            className="hero-statement"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building production software that engineers rely on during 
            <span className="highlight"> live self-driving vehicle testing</span>
          </motion.p>
        </div>

        {/* Main Content - Photo, Metrics, Highlights */}
        <div className="hero-main">
          {/* Left - Photo */}
          <motion.div
            className="hero-photo-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="photo-frame">
              <img
                src={rodoshiPhoto}
                alt="Rodoshi Mondal"
                className="hero-photo"
              />
            </div>
          </motion.div>

          {/* Center - Metrics and Stats */}
          <div className="hero-center-section">
            <motion.div
              className="impact-visualization"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="metric-display">
                <div className="metric-label">{current.label}</div>
                <div className="metric-comparison">
                  <div className="metric-before">
                    <div className="metric-value">{current.before}</div>
                    <div className="metric-unit">{current.unit}</div>
                  </div>
                  <div className="metric-arrow">→</div>
                  <div className="metric-after">
                    <div className="metric-value highlight-value">{countUp.value}</div>
                    <div className="metric-unit">{current.unit}</div>
                  </div>
                </div>
                <div className="metric-description">{current.description}</div>
              </div>

              <div className="metric-indicators">
                {metrics.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentMetric ? 'active' : ''}`}
                    onClick={() => setCurrentMetric(index)}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Projects Shipped</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-number">7+</div>
                <div className="stat-label">Engineers Impacted</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-number">2x</div>
                <div className="stat-label">Hackathon Winner</div>
              </div>
            </motion.div>
          </div>

          {/* Right - Highlights */}
          <motion.div
            className="hero-highlights-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="highlights-label">Highlights</div>
            <ul className="highlights-list">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  className="highlight-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                >
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="scroll-text">Explore Work</div>
          <motion.div
            className="scroll-line"
            animate={{ 
              scaleY: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
