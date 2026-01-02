import { motion } from 'framer-motion'
import foodbridgeImage from '../assets/foodbridge.jpeg'
import fraudiqImage from '../assets/fraudiq.jpeg'
import mindmateImage from '../assets/mindmate.jpeg'
import './PersonalProjects.css'

const projects = [
  {
    name: 'FraudIQ',
    date: 'March 2024',
    image: fraudiqImage,
    description: 'Machine Learning Risk Analysis Tool',
    link: 'https://github.com/rodoshi16/FraudIQ---ML'
  },
  {
    name: 'MindMate',
    date: 'December 2024',
    image: mindmateImage,
    description: 'AI Chatbot with Sentiment Analysis',
    link: 'https://github.com/rodoshi16/MentalHealthApp'
  },
  {
    name: 'FoodBridge',
    date: 'December 2024',
    image: foodbridgeImage,
    description: 'Geolocation Based FoodBank Locator',
    link: 'https://github.com/rodoshi16/foodbridge-backend'
  }
]

export default function PersonalProjects() {
  return (
    <div className="personal-projects-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-number">03</div>
        <h2 className="section-title">Personal Projects</h2>
        <p className="section-subtitle">Full-stack applications built from scratch</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <div className="project-name">{project.name}</div>
              <div className="project-date">{project.date}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
