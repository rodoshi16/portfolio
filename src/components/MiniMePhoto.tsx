import { motion } from 'framer-motion'
import './MiniMePhoto.css'

export default function MiniMePhoto({ size = 'large' }: { size?: 'large' | 'small' }) {
  return (
    <motion.div
      className={`mini-me-photo-container ${size}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="photo-wrapper">
        <img
          src="/rodoshi-photo.jpg"
          alt="Rodoshi Mondal"
          className="mini-me-photo"
          onError={(e) => {
            // Fallback if image doesn't exist yet
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const fallback = target.nextElementSibling as HTMLElement
            if (fallback) fallback.style.display = 'flex'
          }}
        />
        <div className="photo-fallback">
          <span>RM</span>
        </div>
        
        {/* Glowing orb positioned near hand */}
        <motion.div
          className="orb-container"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="orb-outer" />
          <div className="orb-middle" />
          <div className="orb-core" />
          <div className="orb-shine" />
        </motion.div>
      </div>
    </motion.div>
  )
}

