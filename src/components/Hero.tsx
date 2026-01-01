import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import rodoshiPhoto from '../assets/610BA1F6-C724-45F8-9A4A-EC03889CD0E3_1_105_c.jpeg'
import './Hero.css'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  return (
    <div ref={containerRef} className="hero-container">
      {/* Subtle background video */}
      <div className="hero-background">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <motion.div 
        className="hero-content"
        style={{ opacity, y }}
      >
        <div className="hero-layout">
          {/* Left: Photo */}
          <motion.div
            className="hero-photo-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="photo-container">
              <img src={rodoshiPhoto} alt="Rodoshi Mondal" className="hero-photo" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="hero-text-section">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Software Engineer Intern @ Magna International
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Rodoshi Mondal
            </motion.h1>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Building production software for autonomous vehicle systems at scale
            </motion.p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="stat">
                <div className="stat-value">3</div>
                <div className="stat-label">Projects Shipped</div>
              </div>
              <div className="stat">
                <div className="stat-value">99.8%</div>
                <div className="stat-label">Time Reduction</div>
              </div>
              <div className="stat">
                <div className="stat-value">7+</div>
                <div className="stat-label">Engineers Impacted</div>
              </div>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link to="/magna-experience" className="primary-button">
                View Work Experience →
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
