import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
import magnaImage from '../magna.jpg'
import './MagnaExperience.css'

export default function MagnaExperience() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const bullets = [
    'Built and deployed a client-server, event-driven web application on Azure, including the database schema design and a BigQuery-based cloud data layer to enable real-time logging of autonomous robot disengagements.',
    'Improved reporting accuracy by 90% through the deployed software solution, reducing operator logging time from 5 minutes to 5 seconds, eliminating manual excel workflows and increasing operational efficiency.',
    'Optimized schedule generation, reducing manual creation time by 80% through an end to end full-stack solution (Node.js + Express + React) using Haversine and Fisher-Yates algorithm for randomized multi-dropoff routes.',
    'Developed the frontend of an Android mobile app for 7+ Magna engineers, enabling schedule sync via game pins, role selection, and pickup/drop-off tracking on maps, enhancing user engagement for autonomous robot testing.'
  ]

  // Function to bold numbers in text
  const boldNumbers = (text: string) => {
    // Match numbers with optional + or %, or time phrases like "5 minutes", "5 seconds"
    // Using capturing group so split includes the matches
    const parts = text.split(/(\d+\+?%?|\d+\s*(?:minutes?|seconds?|hours?|days?))/gi)
    
    return parts.map((part, index) => {
      // Check if part is a number (matches the regex)
      if (/\d/.test(part)) {
        return <strong key={index}>{part}</strong>
      }
      return part
    })
  }

  const skills = ['Node.js', 'Express', 'TypeScript', 'React.js', 'React Native', 'Azure', 'BigQuery']

  // Manager feedback content - replace with actual text from your feedback
  const overallComments = `Excellent work this summer Rodoshi, thank you so much for all the hard work you put in over this term. We could not have done any of this without you and will get everything recording as soon as possible! These systems will get integrated into our daily operations for a long time!`

  const strengthsAndAccomplishments = [
    'Ability to work independently in a low structure work environment',
    'Ability to learn new topics and skills quickly and thoroughly',
    'Ability to think of a whole project and break it down into achievable milestones',
    'Technical knowledge in computer science and complex algorithms',
    'Learned backend integrations to support databasing recorded and generated data',
    'Developed GUI and app for self-driving bot training and data collection'
  ]

  return (
    <div ref={containerRef} className="magna-experience-container">
      <div className="magna-content">
        <Link to="/" className="magna-back-button">
          ← Back to Portfolio
        </Link>
        {/* Hero Image */}
        <div className="magna-hero">
          <div className="magna-image-wrapper">
            <img
              src={magnaImage}
              alt="Magna International"
              className="magna-image"
            />
          </div>
          <div className="magna-title-section">
            <h1 className="magna-title">Magna International</h1>
            <h2 className="magna-role">Software Engineer Intern</h2>
            <p className="magna-team">Autonomous Driving Team</p>
          </div>
        </div>

        {/* Accomplishments */}
        <div className="accomplishments-section">
          <div className="section-label">Accomplishments</div>
          <ul className="bullets-list">
            {bullets.map((bullet, index) => (
              <li key={index} className="bullet-item">
                {boldNumbers(bullet)}
              </li>
            ))}
          </ul>
          <div>
            <Link to="/disengagement-logger" className="project-link-button">
              View Project Details →
            </Link>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <div className="section-label">Technologies</div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Manager Feedback */}
        <div className="feedback-section">
          <div className="section-label">Manager Feedback</div>
          
          {/* Overall Comments */}
          <div className="feedback-overall-section">
            <div className="feedback-section-title">Supervisor's Overall Comments</div>
            <div className="feedback-quote">
              <div className="quote-mark">"</div>
              <p className="feedback-text">{overallComments}</p>
            </div>
          </div>

          {/* Strengths & Accomplishments */}
          <div className="feedback-strengths-section">
            <div className="feedback-section-title">Strengths & Accomplishments identified by Team</div>
            <div className="strengths-grid">
              {strengthsAndAccomplishments.map((strength, index) => (
                <div key={index} className="strength-card">
                  <div className="strength-icon">✓</div>
                  <p className="strength-text">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

