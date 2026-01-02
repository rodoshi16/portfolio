import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa'
import './MiniMe.css'

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    href: 'mailto:rodoshi.mondal@mail.utoronto.ca',
    text: 'rodoshi.mondal@mail.utoronto.ca',
    description: 'Send me a message'
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rodoshi-mondal-99249126b/',
    text: 'rodoshi-mondal',
    description: 'Connect professionally'
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/rodoshi16',
    text: 'rodoshi16',
    description: 'View my code'
  }
]

export default function MiniMe() {
  return (
    <div className="mini-me-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="section-number">06</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's build something extraordinary together</p>
      </motion.div>

      <div className="contact-wrapper">
        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="contact-message">
            I'm always interested in discussing new opportunities, technical challenges, and innovative projects.
          </p>
          <div className="contact-availability">
            <span className="availability-dot"></span>
            <span>Open to Software Engineering opportunities for Summer 2025</span>
          </div>
        </motion.div>

        <div className="contact-links-grid">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="contact-card-background"></div>
              <div className="contact-card-content">
                <div className="contact-icon-wrapper">
                  <div className="icon-inner">
                    {link.icon}
                  </div>
                  <div className="icon-glow"></div>
                </div>
                <div className="contact-link-info">
                  <div className="contact-link-label">{link.label}</div>
                  <div className="contact-link-text">{link.text}</div>
                  <div className="contact-link-description">{link.description}</div>
                </div>
                <div className="contact-link-arrow">
                  <FaArrowRight />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="footer-divider"></div>
          <p className="contact-footer-text">
            Looking forward to connecting with you
          </p>
        </motion.div>
      </div>
    </div>
  )
}
