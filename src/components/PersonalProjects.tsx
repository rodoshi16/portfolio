import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaMapMarkerAlt, FaCode, FaRocket } from 'react-icons/fa'
import './PersonalProjects.css'

const projects = [
  {
    name: 'FoodBridge',
    tagline: 'Geolocation-Based Food Bank Locator',
    description: 'A responsive web application that helps users locate nearby food banks based on their geolocation, improving accessibility to essential resources.',
    problem: 'Finding nearby food banks was difficult and time-consuming, especially for those in need.',
    solution: 'Built a full-stack application with Google Maps API integration, real-time geolocation, and optimized backend queries.',
    tech: ['Java', 'Spring Boot', 'React', 'Google Maps API', 'REST API'],
    metrics: [
      { label: 'Query Response', value: '20%', description: 'Faster' },
      { label: 'Accessibility', value: '↑', description: 'Improved' },
    ],
    github: 'https://github.com/rodoshi16/google-maps-demo',
    year: 'Dec 2024',
    icon: <FaMapMarkerAlt />
  }
]

export default function PersonalProjects() {
  const [selectedProject, setSelectedProject] = useState(0)

  return (
    <div className="personal-projects-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-number">02</div>
        <h2 className="section-title">Personal Projects</h2>
        <p className="section-subtitle">Building solutions that make a difference</p>
      </motion.div>

      <div className="projects-showcase">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-showcase-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="project-header-section">
              <div className="project-icon-wrapper">
                <div className="project-icon">{project.icon}</div>
              </div>
              <div className="project-meta-info">
                <div className="project-year">{project.year}</div>
                <h3 className="project-name">{project.name}</h3>
                <div className="project-tagline">{project.tagline}</div>
              </div>
            </div>

            <div className="project-content-section">
              <div className="content-block">
                <div className="block-label">Problem</div>
                <p className="block-text">{project.problem}</p>
              </div>

              <div className="content-block">
                <div className="block-label">Solution</div>
                <p className="block-text">{project.solution}</p>
              </div>

              <div className="project-tech-section">
                <div className="tech-label">Technologies</div>
                <div className="tech-grid">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="tech-item">
                      <FaCode className="tech-icon" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="metrics-section">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="metric-item">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-info">
                      <div className="metric-label">{metric.label}</div>
                      <div className="metric-desc">{metric.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="project-actions">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="action-link"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
