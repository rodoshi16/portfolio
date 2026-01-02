import { motion } from 'framer-motion'
import { useState } from 'react'
import './AnimeFigurine3D.css'

export default function AnimeFigurine3D({ size = 'large' }: { size?: 'large' | 'small' }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    setRotation({
      x: ((y - centerY) / centerY) * 15,
      y: ((x - centerX) / centerX) * 15
    })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      className={`anime-3d-container ${size}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="figurine-3d-wrapper"
        style={{
          transform: `perspective(1000px) rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        {/* Background layer */}
        <div className="layer layer-back"></div>
        
        {/* Body layer - feminine shape */}
        <div className="layer layer-body">
          <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="clothing3D" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1a1a2e', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0f0f1e', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="skin3D" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f5d7c4', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#e8c4a8', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            {/* Body - feminine silhouette with waist */}
            <path
              d="M 100 85 Q 95 100, 92 115 L 92 140 Q 90 145, 92 150 L 92 195 Q 94 200, 100 200 Q 106 200, 108 195 L 108 150 Q 110 145, 108 140 L 108 115 Q 105 100, 100 85 Z"
              fill="url(#clothing3D)"
            />
            {/* Left arm - graceful, slender */}
            <path d="M 92 115 Q 78 120, 68 132 Q 66 138, 68 142" stroke="url(#skin3D)" strokeWidth="7" fill="none" strokeLinecap="round" />
            <circle cx="70" cy="140" r="6" fill="url(#skin3D)" />
            {/* Right arm - confident pose */}
            <path d="M 108 115 Q 122 118, 132 128 Q 130 133, 125 136" stroke="url(#skin3D)" strokeWidth="7" fill="none" strokeLinecap="round" />
            <ellipse cx="123" cy="133" rx="6" ry="7" fill="url(#skin3D)" />
            {/* Legs - feminine, curved */}
            <path d="M 100 195 Q 97 210, 94 230 L 92 260 L 88 265 L 86 265 L 88 260 L 90 230 Q 93 210, 96 195" fill="url(#clothing3D)" />
            <path d="M 100 195 Q 103 210, 106 230 L 108 260 L 112 265 L 114 265 L 112 260 L 110 230 Q 107 210, 104 195" fill="url(#clothing3D)" />
            {/* Shoes - heels or elegant */}
            <ellipse cx="87" cy="265" rx="6" ry="4" fill="#0a0a14" />
            <ellipse cx="113" cy="265" rx="6" ry="4" fill="#0a0a14" />
          </svg>
        </div>

        {/* Head layer - feminine features */}
        <div className="layer layer-head">
          <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hair3D" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1a0f0f', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#2d1b1b', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#1a0f0f', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="skinHead3D" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f5d7c4', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#e8c4a8', stopOpacity: 1 }} />
              </linearGradient>
              <radialGradient id="eye3D" cx="50%" cy="50%">
                <stop offset="0%" style={{ stopColor: '#4a5568', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#1a0f0f', stopOpacity: 1 }} />
              </radialGradient>
            </defs>
            {/* Hair - long, flowing, feminine */}
            <path
              d="M 80 45 Q 72 28, 80 22 Q 88 18, 100 28 Q 112 18, 120 22 Q 128 28, 120 45 L 120 85 Q 118 90, 112 93 Q 106 96, 100 95 Q 94 96, 88 93 Q 82 90, 80 85 Z"
              fill="url(#hair3D)"
            />
            {/* Hair detail strands */}
            <path d="M 90 55 Q 87 48, 90 42 Q 94 39, 98 42" fill="rgba(0, 0, 0, 0.4)" />
            <path d="M 110 55 Q 113 48, 110 42 Q 106 39, 102 42" fill="rgba(0, 0, 0, 0.4)" />
            {/* Head - feminine oval shape */}
            <ellipse cx="100" cy="58" rx="20" ry="24" fill="url(#skinHead3D)" />
            {/* Eyes - large, feminine, expressive */}
            <ellipse cx="91" cy="56" rx="5.5" ry="7" fill="url(#eye3D)" />
            <ellipse cx="109" cy="56" rx="5.5" ry="7" fill="url(#eye3D)" />
            {/* Eye shine - larger for more feminine look */}
            <ellipse cx="92.5" cy="54.5" rx="2.5" ry="3" fill="#ffffff" />
            <ellipse cx="108.5" cy="54.5" rx="2.5" ry="3" fill="#ffffff" />
            <ellipse cx="93.5" cy="53.5" rx="1" ry="1.5" fill="rgba(255, 255, 255, 0.9)" />
            <ellipse cx="109.5" cy="53.5" rx="1" ry="1.5" fill="rgba(255, 255, 255, 0.9)" />
            {/* Eyebrows - arched, feminine */}
            <path d="M 86 51 Q 91 49.5, 96 51" stroke="#2d1b1b" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 104 51 Q 109 49.5, 114 51" stroke="#2d1b1b" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Nose - small, delicate */}
            <ellipse cx="100" cy="61" rx="1.2" ry="1.8" fill="#d4a082" opacity="0.4" />
            {/* Mouth - soft, feminine smile */}
            <path d="M 95 65 Q 100 67.5, 105 65" stroke="#c98b6f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Cheeks - feminine blush */}
            <ellipse cx="83" cy="63" rx="4" ry="5" fill="rgba(255, 182, 193, 0.4)" />
            <ellipse cx="117" cy="63" rx="4" ry="5" fill="rgba(255, 182, 193, 0.4)" />
            {/* Neck */}
            <rect x="96" y="82" width="8" height="8" rx="4" fill="url(#skinHead3D)" />
          </svg>
        </div>

        {/* Orb layer - front */}
        <div className="layer layer-orb">
          <motion.div
            className="orb-3d"
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
            <div className="orb-outer-ring"></div>
            <div className="orb-middle-ring"></div>
            <div className="orb-core-ball"></div>
            <div className="orb-shine-spot"></div>
          </motion.div>
        </div>

        {/* Front highlight layer */}
        <div className="layer layer-front"></div>
      </div>
    </motion.div>
  )
}
