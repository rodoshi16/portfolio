import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
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

  const engineeringQuestions = [
    {
      question: 'System Architecture',
      answer: 'Built a client-server, event-driven architecture using React + TypeScript frontend and Node.js + Express backend. Implemented Azure MSAL SSO for authentication, with a BigQuery-based cloud data layer for real-time logging. The system follows a stateless API design, enabling horizontal scaling and high availability. Session-based workflows allow for unlimited disengagements per trip, with optimistic UI updates and eventual consistency for offline resilience.',
      icon: '🏗️'
    },
    {
      question: 'Complexity & Performance',
      answer: 'Time complexity: O(1) for disengagement logging operations with indexed database queries. Space complexity: O(n) where n is the number of active sessions, optimized with session cleanup and data archival strategies. Average API response time: <100ms for logging operations, <200ms for session retrieval. Implemented debouncing and request batching to minimize network overhead during rapid user interactions.',
      icon: '⚡'
    },
    {
      question: 'Memory & Latency Optimization',
      answer: 'Client-side state management using React Context API with memoization to prevent unnecessary re-renders. Implemented virtual scrolling for large data sets. Backend uses connection pooling and query optimization with indexed database schemas. Reduced initial load time by 60% through code splitting and lazy loading. Implemented Redis caching for frequently accessed session data, reducing database load by 40%.',
      icon: '🚀'
    },
    {
      question: 'Tradeoffs & Design Decisions',
      answer: 'Chose event-driven over request-response pattern for better scalability and decoupling. Prioritized eventual consistency over strong consistency for better performance - acceptable since disengagement data doesn\'t require real-time synchronization across all clients. Selected BigQuery over traditional SQL for better analytical query performance and cost efficiency at scale. Tradeoff: slightly higher write latency for significantly better read performance and analytical capabilities.',
      icon: '⚖️'
    },
    {
      question: 'Behavior Under Extreme Load',
      answer: 'System handles 1000+ concurrent users through horizontal scaling of stateless backend services. Implemented rate limiting (100 requests/minute per user) to prevent abuse. Database connection pooling handles connection spikes. Used message queues for asynchronous processing of analytics events. Circuit breaker pattern prevents cascading failures. Auto-scaling configuration scales infrastructure based on CPU/memory metrics. Graceful degradation: if BigQuery is down, logs are buffered locally and synced when service recovers.',
      icon: '🔥'
    },
    {
      question: 'Scaling to 100x Users',
      answer: 'Horizontal scaling: deploy multiple backend instances behind load balancer. Database: migrate to BigQuery partitioned tables by date for better query performance. Implement read replicas for analytics queries. Caching layer: Redis cluster for distributed session caching. CDN for static assets. Microservices: split analytics processing into separate service for independent scaling. Data pipeline: implement Kafka for real-time event streaming. Monitoring: comprehensive observability with distributed tracing, metrics, and alerting. Estimated infrastructure cost increase: 80x (not linear due to economies of scale).',
      icon: '📈'
    }
  ]

  return (
    <div ref={containerRef} className="disengagement-container">
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
          <div className="hero-grid"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-pulse"></span>
            Production System
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Disengagement
            <span className="title-highlight">Logger</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Real-time logging system reducing operator logging time from 5 minutes to 5 seconds
          </motion.p>
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="stat-item">
              <div className="stat-value">99.8%</div>
              <div className="stat-label">Faster</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">90%</div>
              <div className="stat-label">More Accurate</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">Real-time</div>
              <div className="stat-label">Analytics</div>
            </div>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <motion.div
            className="scroll-line"
            animate={{ height: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span>Scroll to explore</span>
        </div>
      </motion.div>

      {/* The Why - Problem Statement with Visual Story */}
      <section className="story-section why-section">
        <div className="section-container">
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
              className="problem-timeline"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="timeline-item old-way">
                <div className="timeline-marker old"></div>
                <div className="timeline-content">
                  <div className="timeline-label">Before</div>
                  <div className="timeline-time">5 minutes</div>
                  <div className="timeline-description">Manual Excel logging</div>
                </div>
              </div>
              <div className="timeline-line"></div>
              <div className="timeline-item new-way">
                <div className="timeline-marker new"></div>
                <div className="timeline-content">
                  <div className="timeline-label">After</div>
                  <div className="timeline-time">5 seconds</div>
                  <div className="timeline-description">Automated system</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="problem-text-content"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="story-text-large">
                During live self-driving vehicle testing, engineers spent an average of <span className="text-highlight">5 minutes per disengagement</span> manually logging critical data points.
              </p>
              <div className="problem-pain-points">
                <div className="pain-point">
                  <div className="pain-icon">⚠️</div>
                  <div className="pain-text">Human error compromised data accuracy</div>
                </div>
                <div className="pain-point">
                  <div className="pain-icon">⏱️</div>
                  <div className="pain-text">Bottlenecks reduced testing efficiency</div>
                </div>
                <div className="pain-point">
                  <div className="pain-icon">📊</div>
                  <div className="pain-text">No real-time analytics capability</div>
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
                <div className="layer-description">Safety-first UI design</div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer backend">
                <div className="layer-label">Backend</div>
                <div className="layer-tech">Node.js + Express</div>
                <div className="layer-description">RESTful API</div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer database">
                <div className="layer-label">Data Layer</div>
                <div className="layer-tech">BigQuery</div>
                <div className="layer-description">Real-time analytics</div>
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
                <p className="feature-description">Enterprise-grade authentication</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📦</div>
                <h3 className="feature-title">Session-based Workflows</h3>
                <p className="feature-description">Unlimited disengagements per trip</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">Optimistic UI</h3>
                <p className="feature-description">Instant feedback, eventual consistency</p>
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
              className="impact-card-large primary"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="impact-icon">🚀</div>
              <div className="impact-value-large">99.8%</div>
              <div className="impact-metric-large">Time Reduction</div>
              <div className="impact-description-large">5 minutes → 5 seconds</div>
              <div className="impact-glow"></div>
            </motion.div>

            <div className="impact-grid-small">
              <motion.div
                className="impact-card-small"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="impact-value">90%</div>
                <div className="impact-label">Accuracy Improvement</div>
              </motion.div>
              <motion.div
                className="impact-card-small"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="impact-value">30%</div>
                <div className="impact-label">Faster Reaction Time</div>
              </motion.div>
              <motion.div
                className="impact-card-small"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="impact-value">Real-time</div>
                <div className="impact-label">Analytics Enabled</div>
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
            className="engineering-subtitle"
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
                whileHover={{ y: -8, scale: 1.02 }}
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
  )
}
