import { FaEnvelope, FaGithub } from 'react-icons/fa'
import rodoshiPhoto from '../assets/610BA1F6-C724-45F8-9A4A-EC03889CD0E3_1_105_c.jpeg'
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content-wrapper">
        <div className="hero-main-layout">
          {/* Left: Photo */}
          <div className="hero-left">
            <div className="hero-photo-section">
              <div className="photo-container">
                <img src={rodoshiPhoto} alt="Rodoshi Mondal" className="hero-photo" />
              </div>
            </div>
          </div>

          {/* Right: Introduction */}
          <div className="hero-right">
            <div className="hero-intro">
              <h1 className="hero-name">Hi, this is <span className="name-highlight">Rodoshi</span></h1>
              
              <div className="hero-education">
                Computer Science Specialist @ University of Toronto (Sep 2023 - Apr 2027)
              </div>

              <div className="hero-bio">
                <p>
                  I am an aspiring engineer with experience designing and deploying production grade software in the industry with a focus on correctness, performance and reliability under real world constraints. I am currently building depth in backend systems, infrastructure and algorithmic problem solving. 

                </p>
              </div>

              <div className="hero-contact-links">
                <a href="mailto:rodoshi.mondal@mail.utoronto.ca" className="contact-link">
                  <FaEnvelope className="contact-icon" />
                  <span>rodoshi.mondal@mail.utoronto.ca</span>
                </a>
                <a href="https://github.com/rodoshi16" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <FaGithub className="contact-icon" />
                  <span>github.com/rodoshi16</span>
                </a>
              </div>
              <div className="hero-metrics-card">
                <div className="hero-metrics-grid">
                  <div className="hero-metric-item">
                    <div className="hero-metric-value">3</div>
                    <div className="hero-metric-label">Projects Shipped</div>
                  </div>
                  <div className="hero-metric-item">
                    <div className="hero-metric-value">7+</div>
                    <div className="hero-metric-label">Engineers Impacted</div>
                  </div>
                  <div className="hero-metric-item">
                    <div className="hero-metric-value">90%</div>
                    <div className="hero-metric-label">Accuracy Improved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
