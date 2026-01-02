import { motion } from 'framer-motion'
import './AnimeFigurine.css'

export default function AnimeFigurine({ size = 'large' }: { size?: 'large' | 'small' }) {
  return (
    <motion.div
      className={`anime-figurine-container ${size}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <svg
        className="anime-figurine"
        viewBox="0 0 200 280"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2d1b1b', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#1a0f0f', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2d1b1b', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f5d7c4', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#e8c4a8', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="clothingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1a1a2e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0f0f1e', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="orbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background glow */}
        <ellipse
          cx="100"
          cy="200"
          rx="70"
          ry="100"
          className="figurine-background-glow"
        />

        {/* Glowing orb - held in hand */}
        <motion.g
          className="orb-group"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="68" cy="158" r="24" className="orb-outer" />
          <circle cx="68" cy="158" r="18" className="orb-middle" />
          <circle cx="68" cy="158" r="12" className="orb-core" />
          <ellipse cx="66" cy="155" rx="3" ry="5" className="orb-shine" />
        </motion.g>

        {/* Hair - long, flowing */}
        <path
          d="M 85 45 Q 78 30, 85 25 Q 92 20, 100 28 Q 108 20, 115 25 Q 122 30, 115 45 L 115 75 Q 113 78, 108 80 Q 103 82, 100 81 Q 97 82, 92 80 Q 87 78, 85 75 Z"
          fill="url(#hairGradient)"
          className="figurine-hair"
        />
        {/* Hair highlights */}
        <path
          d="M 95 35 Q 100 30, 105 35 Q 103 40, 100 42 Q 97 40, 95 35 Z"
          fill="rgba(255, 255, 255, 0.2)"
        />

        {/* Head */}
        <ellipse cx="100" cy="55" rx="20" ry="24" fill="url(#skinGradient)" className="figurine-head" />

        {/* Eyes - large and expressive */}
        <ellipse cx="92" cy="52" rx="4" ry="5" fill="#1a0f0f" className="figurine-eye" />
        <ellipse cx="108" cy="52" rx="4" ry="5" fill="#1a0f0f" className="figurine-eye" />
        {/* Eye shine */}
        <ellipse cx="93" cy="51" rx="1.5" ry="2" fill="#ffffff" />
        <ellipse cx="109" cy="51" rx="1.5" ry="2" fill="#ffffff" />

        {/* Eyebrows */}
        <path d="M 88 46 Q 92 45, 96 46" stroke="#2d1b1b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 104 46 Q 108 45, 112 46" stroke="#2d1b1b" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Nose */}
        <ellipse cx="100" cy="58" rx="1.5" ry="2" fill="#d4a082" opacity="0.6" />

        {/* Mouth - friendly smile */}
        <path d="M 96 62 Q 100 64, 104 62" stroke="#c98b6f" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Body - professional blazer/dress */}
        <path
          d="M 100 79 L 88 125 Q 86 132, 88 138 L 88 195 L 112 195 L 112 138 Q 114 132, 112 125 Z"
          fill="url(#clothingGradient)"
          className="figurine-body"
        />
        {/* Collar/shirt detail */}
        <path d="M 95 85 L 100 90 L 105 85" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Left arm - holding orb */}
        <path
          d="M 88 125 Q 72 135, 60 150 Q 58 156, 60 160"
          stroke="url(#skinGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className="figurine-arm"
        />
        <circle cx="62" cy="158" r="6" fill="url(#skinGradient)" />

        {/* Right arm - confident pose */}
        <path
          d="M 112 125 Q 128 130, 140 145 Q 138 150, 132 153"
          stroke="url(#skinGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className="figurine-arm"
        />
        <ellipse cx="130" cy="150" rx="6" ry="8" fill="url(#skinGradient)" />

        {/* Legs */}
        <path
          d="M 100 195 L 93 245 L 90 270 L 86 270 L 88 245 L 95 195"
          fill="url(#clothingGradient)"
          className="figurine-leg"
        />
        <path
          d="M 100 195 L 107 245 L 110 270 L 114 270 L 112 245 L 105 195"
          fill="url(#clothingGradient)"
          className="figurine-leg"
        />

        {/* Shoes */}
        <ellipse cx="89" cy="270" rx="6" ry="4" fill="#0a0a14" className="figurine-shoe" />
        <ellipse cx="111" cy="270" rx="6" ry="4" fill="#0a0a14" className="figurine-shoe" />
      </svg>
    </motion.div>
  )
}

