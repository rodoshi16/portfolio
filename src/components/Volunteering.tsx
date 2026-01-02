import { motion } from 'framer-motion'
import enableImage from '../assets/enable.jpeg'
import './Volunteering.css'

const featuredProject = {
  title: '3D Printed Prosthetics Project',
  organization: 'Enable Toronto',
  description: 'Led a team that 3D printed 10 prosthetic hands for differently abled individuals with upper hand amputations in Afghanistan. The project was featured on Global News for its humanitarian impact.',
  image: enableImage,
  videoLink: 'https://globalnews.ca/video/9801713/durham-region-students-lend-helping-hand-using-3-d-printer/',
  impact: '10 prosthetics shipped to hospital in Afghanistan'
}

export default function Volunteering() {
  return (
    <div className="volunteering-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-number">05</div>
        <h2 className="section-title">Global Impact</h2>
        <p className="section-subtitle">Using technology as a tool to create meaningful change</p>
      </motion.div>

      {/* Featured Global News Project */}
      <motion.div
        className="featured-project-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="featured-badge">Featured on Global News</div>
        <div className="featured-content">
          <div className="featured-image-wrapper">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="featured-image"
            />
            <a
              href={featuredProject.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="video-link-overlay"
            >
              <div className="play-button">▶</div>
              <span>Watch on Global News</span>
            </a>
          </div>
          <div className="featured-info">
            <div className="featured-organization">{featuredProject.organization}</div>
            <div className="featured-title">{featuredProject.title}</div>
            <p className="featured-description">{featuredProject.description}</p>
            <div className="featured-impact">{featuredProject.impact}</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
