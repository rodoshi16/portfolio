import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import './Highlights.css'

const highlights = [
  { label: 'Interned', value: 'Magna International', metric: 'Summer 2024', color: 'cyan' },
  { label: 'Hackathons', value: '2', metric: 'Won', color: 'purple' },
  { label: 'Open Source', value: '3', metric: 'Contributions', color: 'pink' },
  { label: 'Projects', value: '3', metric: 'Deployed', color: 'green' },
  { label: 'Leadership', value: '4', metric: 'Positions', color: 'cyan' },
  { label: 'Scholarships', value: '$4,000+', metric: 'Awarded', color: 'purple' },
]

export default function Highlights() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const springConfig = { damping: 50, stiffness: 100 }
  const x = useSpring(useTransform(mouseX, (latest) => latest - 200), springConfig)
  const y = useSpring(useTransform(mouseY, (latest) => latest - 200), springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <div ref={containerRef} className="highlights-container">
      {/* Animated gradient background */}
      <div className="gradient-background">
        <motion.div
          className="gradient-orb cyan-orb"
          style={{ x, y }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="gradient-orb purple-orb"
          style={{ 
            x: useTransform(x, (latest) => latest + 300),
            y: useTransform(y, (latest) => latest - 200)
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="gradient-orb pink-orb"
          style={{ 
            x: useTransform(x, (latest) => latest - 200),
            y: useTransform(y, (latest) => latest + 300)
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        className="highlights-content"
        style={{ opacity, scale }}
      >
        <div className="hero-section">
          <motion.div
            className="name-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <span className="gradient-text">Rodoshi Mondal</span>
            </motion.h1>
            <motion.div 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="title-line">Computer Science Specialist</span>
              <span className="title-separator">·</span>
              <span className="title-line">University of Toronto</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="stats-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className={`stat-item stat-${highlight.color}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="stat-glow" />
                <div className="stat-label">{highlight.label}</div>
                <motion.div 
                  className="stat-value"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {highlight.value}
                </motion.div>
                <div className="stat-metric">{highlight.metric}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="scroll-line"
            animate={{ 
              scaleY: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span>Scroll</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
