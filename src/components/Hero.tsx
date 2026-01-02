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

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95])

  const highlights = [
    'Former Software Engineer Intern @Magna International',
    '2x Hackathon Winner',
    '3D printed prosthetic project featured on Global News',
    'Built and shipped software impacting 7+ engineers, boosting data accuracy and operational efficiency',
    'Mentored students at Hackathons and Coding workshops',
    'Leadership: Project Lead @Engineers Without Borders, Mentor @WISE, Externals Associate @IEEE_UofT, Residence Don @UofT'
  ]

  return (
    <div ref={containerRef} className="hero-container">
      {/* Impressive Background - NYC/Quant Vibes */}
      <div className="hero-video-background">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          {/* Replace with NYC cityscape or quant/finance themed video */}
          <source src="https://videos.pexels.com/video-files/2491284/2491284-sd_640_360_30fps.mp4" type="video/mp4" />
          {/* Fallback to another city video */}
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <motion.div
        className="hero-content"
        style={{ opacity, scale }}
      >
        <div className="hero-layout">
          {/* Left: Photo - Clean, No Glow */}
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
              Building production systems for <span className="tagline-highlight">autonomous vehicles</span>
            </motion.p>

            {/* Clean Highlights Section */}
            <motion.div
              className="hero-highlights"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="highlights-label">Highlights</div>
              <div className="highlights-grid">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="highlight-item"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                  >
                    {highlight}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
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
