import { motion } from 'framer-motion'
import { useState } from 'react'
import './WorkExperience.css'

interface Project {
  title: string
  problem: string
  solution: string
  impact: {
    metric: string
    value: string
    description: string
  }[]
  tech: string[]
  period: string
}

const projects: Project[] = [
  {
    title: 'Disengagement Logger',
    problem: 'Engineers manually logging vehicle disengagements during live testing took 5 minutes per entry, creating bottlenecks and reducing testing efficiency.',
    solution: 'Architected a session-based workflow system supporting unlimited disengagements per trip. Built with React + TypeScript, integrated Azure MSAL SSO, and designed a safety-first UI optimized for operator use during live vehicle testing.',
    impact: [
      { metric: 'Time Reduction', value: '99.8%', description: '5 minutes → 5 seconds' },
      { metric: 'Accuracy', value: '90%', description: 'Improvement vs manual tracking' },
      { metric: 'Reaction Time', value: '30%', description: 'Faster intervention response' },
    ],
    tech: ['React', 'TypeScript', 'Azure MSAL', 'Node.js', 'Express'],
    period: 'Jun 2025 - Aug 2025'
  },
  {
    title: 'Robot Delivery Training App',
    problem: 'Self-driving bot training relied on paper worksheets and manual Word table creation, making sessions less engaging and performance tracking difficult.',
    solution: 'Developed an Android mobile application that digitizes training workflows. Integrated with scheduling system via unique game pins, designed role-specific task flows, and gamified sessions with randomized buffs/debuffs to create realistic training scenarios.',
    impact: [
      { metric: 'Users', value: '7+', description: 'Engineers using platform' },
      { metric: 'Automation', value: '100%', description: 'Manual processes eliminated' },
      { metric: 'Engagement', value: '↑', description: 'Gamified training sessions' },
    ],
    tech: ['React Native', 'Android', 'Google BigQuery', 'Maps API'],
    period: 'Jun 2025 - Aug 2025'
  },
  {
    title: 'Randomized Schedule Generator',
    problem: 'Manual creation of randomized multi-dropoff routes was time-consuming and limited testing scenario diversity.',
    solution: 'Built a full-stack application leveraging Fisher-Yates algorithm for randomization and Haversine formula for geographic distance calculations. Architected end-to-end solution with Node.js + Express backend and React frontend.',
    impact: [
      { metric: 'Time Saved', value: '80%', description: 'Reduction in manual work' },
      { metric: 'Routes', value: '∞', description: 'Unlimited generation' },
      { metric: 'Optimization', value: '✓', description: 'Geographic distance calc' },
    ],
    tech: ['Node.js', 'Express', 'React', 'Fisher-Yates', 'Haversine'],
    period: 'Jun 2025 - Aug 2025'
  }
]

export default function WorkExperience() {
  const [selectedProject, setSelectedProject] = useState<number>(0)

  return (
    <div className="work-experience-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-number">01</div>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">Production software for autonomous vehicle systems</p>
      </motion.div>

      <div className="projects-showcase">
        <div className="project-selector">
          {projects.map((project, index) => (
            <button
              key={index}
              className={`project-tab ${selectedProject === index ? 'active' : ''}`}
              onClick={() => setSelectedProject(index)}
            >
              <span className="tab-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="tab-title">{project.title}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={selectedProject}
          className="project-detail"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="project-header">
            <div>
              <h3 className="project-title">{projects[selectedProject].title}</h3>
              <div className="project-period">{projects[selectedProject].period}</div>
            </div>
            <div className="project-tech">
              {projects[selectedProject].tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-content">
            <div className="content-section">
              <div className="section-label">Problem</div>
              <p className="section-text">{projects[selectedProject].problem}</p>
            </div>

            <div className="content-section">
              <div className="section-label">Solution</div>
              <p className="section-text">{projects[selectedProject].solution}</p>
            </div>

            <div className="impact-grid">
              {projects[selectedProject].impact.map((impact, i) => (
                <div key={i} className="impact-card">
                  <div className="impact-value">{impact.value}</div>
                  <div className="impact-metric">{impact.metric}</div>
                  <div className="impact-description">{impact.description}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
