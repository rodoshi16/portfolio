import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
import autonomousRobot from '../assets/Autonomous robot.png'
// @ts-ignore
import teleopsImage from '../assets/teleops.jpeg'
import './DisengagementLogger.css'

export default function DisengagementLogger() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const engineeringQuestions = [
    {
      question: 'System Architecture',
      answer: 'Client-server, event-driven architecture which follows a stateless API design.',
      icon: '🏗️'
    },
    {
      question: 'Complexity',
      answer: 'Focused on low architectural complexity rather than algorithmic complexity. Used Feature-Sliced Design to separate UI, business logic, and data access. Modular structure makes features easy to add without touching unrelated code.',
      icon: '⚡'
    },
    {
      question: 'Memory',
      answer: 'Kept client-side state minimal and short-lived. Only stored data needed for the current UI step. Cleared state after submission; no client-side caching of historical data.',
      icon: '🚀'
    },
    {
      question: 'Latency',
      answer: 'Optimized for immediate UI responsiveness in a safety-critical environment. Frontend validation prepares data before submission. Events sent asynchronously to backend for near-instant logging.',
      icon: '⏱️'
    },
    {
      question: 'Tradeoffs',
      answer: 'Prioritized simplicity and reliability over massive scalability. Designed for a limited number of concurrent operators. Avoided unnecessary infrastructure to keep deployment and maintenance simple.',
      icon: '⚖️'
    },
    {
      question: 'Behavior Under Load',
      answer: 'UI remains responsive due to local event handling. Backend may experience higher latency with increased concurrent writes. Can be extended with event streaming to decouple ingestion from storage.',
      icon: '🔥'
    }
  ]

  return (
    <div ref={containerRef} className="disengagement-container">
      <div className="disengagement-content">
        <Link to="/magna-experience" className="project-back-button">
          ← Back to Magna Experience
        </Link>

        {/* Hero Section - Full Screen Story Opening */}
      <motion.div 
        ref={heroRef}
        className="hero-section"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="hero-background">
          <div className="hero-image-overlay">
            <img
              src={autonomousRobot}
              alt="Autonomous Vehicle"
              className="hero-robot-image"
            />
          </div>
          <div className="hero-video-overlay">
            {/* Replace src with your autonomous vehicle testing video - add video file to public folder */}
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              {/* Example: <source src="/autonomous-vehicle-video.mp4" type="video/mp4" /> */}
              {/* For now using placeholder - replace with your video */}
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-grid"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Disengagement <span className="title-highlight">Logger</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A production system architected for real-time data collection during autonomous vehicle testing
          </motion.p>
          <motion.div
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p>Built to eliminate manual logging bottlenecks and enable data-driven decision making</p>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <motion.div
            className="scroll-line"
            animate={{ height: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span></span>
        </div>
      </motion.div>

      {/* The Why - Problem Statement with Visual Story */}
      <section className="story-section why-section">
        <div 
          className="teleops-bg-layer"
          style={{
            backgroundImage: `url(${teleopsImage})`,
          }}
        ></div>
        <div className="section-container teleops-overlay-content">
          <motion.div
            className="section-number-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            01
          </motion.div>
          <motion.h2
            className="section-title-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The Why
          </motion.h2>
          
          <div className="problem-visualization">
            <motion.div
              className="problem-text-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="story-text-large">
                The team was required to report autonomous driving disengagements to the Ministry of Transportation every month.
              </p>
              <p className="story-text-large" style={{ marginTop: '24px' }}>
                At the time, disengagements were logged after the fact, based on operator memory.
              </p>
              <p className="story-text-large" style={{ marginTop: '24px' }}>
                Teleoperators were under pressure during disengagements, so manual note-taking in the moment was unrealistic.
              </p>
              <p className="story-text-large" style={{ marginTop: '32px', fontWeight: '600' }}>
                As a result:
              </p>
              <div className="problem-pain-points" style={{ marginTop: '24px' }}>
                <div className="pain-point">
                  <div className="pain-icon">📉</div>
                  <div className="pain-text">Data accuracy was low</div>
                </div>
                <div className="pain-point">
                  <div className="pain-icon">⚠️</div>
                  <div className="pain-text">Key details like time, location, and cause were often missing or incorrect</div>
                </div>
                <div className="pain-point">
                  <div className="pain-icon">🔄</div>
                  <div className="pain-text">Engineers and managers had to manually chase information, creating operational backlog</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The How - Solution with Architecture Visualization */}
      <section className="story-section how-section">
        <div className="section-container">
          <motion.div
            className="section-number-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            02
          </motion.div>
          <motion.h2
            className="section-title-large"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The How
          </motion.h2>

          <div className="architecture-showcase">
            <motion.div
              className="architecture-diagram"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="arch-layer frontend">
                <div className="layer-label">Frontend</div>
                <div className="layer-tech">React + TypeScript</div>
                <div className="layer-description"></div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer backend">
                <div className="layer-label">Backend</div>
                <div className="layer-tech">Node.js + Express</div>
                <div className="layer-description"></div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer database">
                <div className="layer-label">Data Layer</div>
                <div className="layer-tech">BigQuery</div>
                <div className="layer-description"></div>
              </div>
            </motion.div>

            <motion.div
              className="solution-features"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="feature-card">
                <div className="feature-icon">🔐</div>
                <h3 className="feature-title">Azure MSAL SSO</h3>
                <p className="feature-description">Authentication</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📦</div>
                <h3 className="feature-title">Session-based Workflows</h3>
                <p className="feature-description">Unlimited disengagements per trip</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">User friendly UI</h3>
                <p className="feature-description">Designed with bigger buttons and icons for faster reaction time</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Impact - Results with Animated Metrics */}
      <section className="story-section impact-section">
        <div className="section-container">
          <motion.div
            className="section-number-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            03
          </motion.div>
          <motion.h2
            className="section-title-large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The Impact
          </motion.h2>

          <div className="impact-showcase">
            <motion.div
              className="impact-facts-box"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="impact-visual-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Analytics Dashboard"
                  className="impact-visual-image"
                />
              </div>
              <div className="facts-box-content">
                <div className="impact-achievement-item">
                  <div className="achievement-icon">✓</div>
                  <div className="achievement-text">Eliminated Excel workflows</div>
                </div>
                <div className="impact-achievement-item">
                  <div className="achievement-icon">✓</div>
                  <div className="achievement-text">Increased operational efficiency</div>
                </div>
              </div>
            </motion.div>
            <div className="impact-metrics-grid">
              <motion.div
                className="impact-card-metric"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="impact-value-large">98.3%</div>
                <div className="impact-metric-large">Time Reduction</div>
                <div className="impact-description-large">5 minutes → 5 seconds</div>
              </motion.div>
              <motion.div
                className="impact-card-metric"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="impact-value-large">90%</div>
                <div className="impact-metric-large">Accuracy Improvement</div>
              </motion.div>
            </div>
          </div>

          <motion.p
            className="impact-statement"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Now integrated into daily operations, enabling engineers to focus on testing rather than data entry.
          </motion.p>
        </div>
      </section>

      {/* Engineering Principles - Deep Dive */}
      <section className="story-section engineering-section">
        <div className="section-container">
          <motion.div
            className="section-number-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            04
          </motion.div>
          <motion.h2
            className="section-title-large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Engineering Principles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            System design, performance optimization, and scalability deep dive
          </motion.p>

          <div className="engineering-grid">
            {engineeringQuestions.map((item, index) => (
              <motion.div
                key={index}
                className="engineering-card-advanced"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card-header">
                  <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="card-icon">{item.icon}</div>
                </div>
                <h3 className="card-question">{item.question}</h3>
                <p className="card-answer">{item.answer}</p>
                <div className="card-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}