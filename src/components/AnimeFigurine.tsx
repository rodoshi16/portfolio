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
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1a0f0f', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#2d1b1b', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1a0f0f', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f5d7c4', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#e8c4a8', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="clothingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1a1a2e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0f0f1e', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="orbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
          </linearGradient>
          <radialGradient id="eyeGrad" cx="50%" cy="50%">
            <stop offset="0%" style={{ stopColor: '#4a5568', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1a0f0f', stopOpacity: 1 }} />
          </radialGradient>
        </defs>

        {/* Background glow */}
        <ellipse cx="100" cy="200" rx="75" ry="110" fill="rgba(0, 212, 255, 0.1)" className="bg-glow" />

        {/* Glowing orb - held in left hand */}
        <motion.g
          className="orb-group"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="65" cy="160" r="26" fill="rgba(0, 212, 255, 0.3)" className="orb-outer" />
          <circle cx="65" cy="160" r="20" fill="rgba(0, 212, 255, 0.4)" className="orb-middle" />
          <circle cx="65" cy="160" r="14" fill="url(#orbGrad)" className="orb-core" />
          <ellipse cx="63" cy="157" rx="3" ry="5" fill="rgba(255, 255, 255, 0.8)" className="orb-shine" />
        </motion.g>

        {/* Hair - long, dark, flowing */}
        <path
          d="M 82 48 Q 75 32, 82 26 Q 90 22, 100 30 Q 110 22, 118 26 Q 125 32, 118 48 L 118 80 Q 116 85, 110 88 Q 104 91, 100 90 Q 96 91, 90 88 Q 84 85, 82 80 Z"
          fill="url(#hairGrad)"
          className="hair-main"
        />
        {/* Hair strands/details */}
        <path
          d="M 88 55 Q 85 50, 88 45 Q 92 42, 96 45"
          fill="rgba(0, 0, 0, 0.3)"
        />
        <path
          d="M 112 55 Q 115 50, 112 45 Q 108 42, 104 45"
          fill="rgba(0, 0, 0, 0.3)"
        />

        {/* Head/face */}
        <ellipse cx="100" cy="60" rx="22" ry="26" fill="url(#skinGrad)" className="head" />

        {/* Eyes - large anime style */}
        <ellipse cx="92" cy="58" rx="5" ry="6" fill="url(#eyeGrad)" className="eye" />
        <ellipse cx="108" cy="58" rx="5" ry="6" fill="url(#eyeGrad)" className="eye" />
        {/* Eye shine */}
        <ellipse cx="93" cy="57" rx="2" ry="2.5" fill="#ffffff" />
        <ellipse cx="109" cy="57" rx="2" ry="2.5" fill="#ffffff" />
        {/* Smaller shine */}
        <ellipse cx="94.5" cy="56.5" rx="0.8" ry="1" fill="rgba(255, 255, 255, 0.9)" />
        <ellipse cx="110.5" cy="56.5" rx="0.8" ry="1" fill="rgba(255, 255, 255, 0.9)" />

        {/* Eyebrows */}
        <path d="M 88 52 Q 92 51, 96 52" stroke="#2d1b1b" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 104 52 Q 108 51, 112 52" stroke="#2d1b1b" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Nose */}
        <ellipse cx="100" cy="63" rx="1.5" ry="2" fill="#d4a082" opacity="0.5" />

        {/* Mouth - friendly smile */}
        <path d="M 96 67 Q 100 69, 104 67" stroke="#c98b6f" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Cheeks - subtle blush */}
        <ellipse cx="85" cy="65" rx="3" ry="4" fill="rgba(255, 182, 193, 0.3)" />
        <ellipse cx="115" cy="65" rx="3" ry="4" fill="rgba(255, 182, 193, 0.3)" />

        {/* Body - professional blazer/dress */}
        <path
          d="M 100 86 L 88 135 Q 86 142, 88 148 L 88 200 L 112 200 L 112 148 Q 114 142, 112 135 Z"
          fill="url(#clothingGrad)"
          className="body"
        />
        {/* Collar/shirt detail */}
        <path d="M 95 92 L 100 98 L 105 92" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Left arm - holding orb */}
        <path
          d="M 88 135 Q 70 145, 58 158 Q 56 163, 58 167"
          stroke="url(#skinGrad)"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
          className="arm"
        />
        <circle cx="60" cy="165" r="7" fill="url(#skinGrad)" />

        {/* Right arm - confident pose */}
        <path
          d="M 112 135 Q 130 140, 142 152 Q 140 157, 134 160"
          stroke="url(#skinGrad)"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
          className="arm"
        />
        <ellipse cx="132" cy="157" rx="7" ry="9" fill="url(#skinGrad)" />

        {/* Legs */}
        <path
          d="M 100 200 L 92 250 L 89 275 L 85 275 L 87 250 L 95 200"
          fill="url(#clothingGrad)"
          className="leg"
        />
        <path
          d="M 100 200 L 108 250 L 111 275 L 115 275 L 113 250 L 105 200"
          fill="url(#clothingGrad)"
          className="leg"
        />

        {/* Shoes */}
        <ellipse cx="87" cy="275" rx="7" ry="5" fill="#0a0a14" className="shoe" />
        <ellipse cx="113" cy="275" rx="7" ry="5" fill="#0a0a14" className="shoe" />
      </svg>
    </motion.div>
  )
}
