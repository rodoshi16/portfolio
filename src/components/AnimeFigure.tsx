import { motion } from 'framer-motion'
import './AnimeFigure.css'

export default function AnimeFigure({ size = 'large' }: { size?: 'large' | 'small' }) {
  return (
    <motion.div
      className={`anime-figure-container ${size}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <svg
        className="anime-figure"
        viewBox="0 0 200 280"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Subtle background glow */}
        <ellipse
          cx="100"
          cy="200"
          rx="60"
          ry="100"
          className="figure-glow"
        />

        {/* Glowing orb - elegantly held */}
        <motion.g
          className="orb-group"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="65" cy="155" r="28" className="orb-outer-glow" />
          <circle cx="65" cy="155" r="22" className="orb-middle-glow" />
          <circle cx="65" cy="155" r="16" className="orb-core" />
          <ellipse cx="62" cy="152" rx="4" ry="6" className="orb-shine" />
        </motion.g>

        {/* Head - oval, elegant */}
        <ellipse cx="100" cy="50" rx="18" ry="22" className="figure-head" />
        
        {/* Hair - sleek, professional bob/long */}
        <path
          d="M 82 42 Q 78 32, 85 28 Q 92 25, 98 30 Q 100 32, 102 30 Q 108 25, 115 28 Q 122 32, 118 42 L 118 65 Q 116 68, 112 70 Q 108 72, 104 71 Q 100 72, 96 71 Q 92 72, 88 70 Q 84 68, 82 65 Z"
          className="figure-hair"
        />
        
        {/* Body - professional blazer/dress silhouette */}
        <path
          d="M 100 72 L 90 120 Q 88 125, 90 130 L 90 180 L 110 180 L 110 130 Q 112 125, 110 120 Z"
          className="figure-body"
        />
        
        {/* Left arm - holding orb gracefully */}
        <path
          d="M 90 120 Q 75 130, 65 150 Q 63 155, 65 158"
          className="figure-arm-left"
          strokeLinecap="round"
        />
        
        {/* Right arm - confident, hand on hip */}
        <path
          d="M 110 120 Q 125 125, 135 140 Q 133 145, 128 148"
          className="figure-arm-right"
          strokeLinecap="round"
        />
        <ellipse cx="130" cy="145" rx="5" ry="7" className="figure-hand-right" />
        
        {/* Legs - professional stance */}
        <path
          d="M 100 180 L 95 230 L 92 260 L 88 260 L 90 230 L 96 180"
          className="figure-leg-left"
        />
        <path
          d="M 100 180 L 105 230 L 108 260 L 112 260 L 110 230 L 104 180"
          className="figure-leg-right"
        />
        
        {/* Shoes/feet - subtle */}
        <ellipse cx="91" cy="260" rx="5" ry="3" className="figure-foot-left" />
        <ellipse cx="109" cy="260" rx="5" ry="3" className="figure-foot-right" />
      </svg>
    </motion.div>
  )
}
