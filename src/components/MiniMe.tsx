import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import './MiniMe.css'

export default function MiniMe() {
  const contactLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      text: 'rodoshi.mondal@mail.utoronto.ca',
      href: 'mailto:rodoshi.mondal@mail.utoronto.ca',
      className: 'email'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      text: 'github.com/rodoshi16',
      href: 'https://github.com/rodoshi16',
      className: 'github',
      external: true
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      text: 'linkedin.com/in/rodoshi-mondal',
      href: 'https://www.linkedin.com/in/rodoshi-mondal',
      className: 'linkedin',
      external: true
    }
  ]

  return (
    <div className="mini-me-container">
      <div className="section-header">
        <div className="section-number">06</div>
        <h2 className="section-title">Let's Collaborate</h2>
        <p className="section-subtitle">If you're interested in getting some reps of DSA problems or working on open source projects together, shoot me a message</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-cards-grid">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <motion.a
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`contact-card ${link.className}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="contact-card-icon-wrapper">
                  <IconComponent className="contact-card-icon" />
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">{link.label}</div>
                  <div className="contact-card-text">{link.text}</div>
                </div>
                <div className="contact-card-arrow">→</div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
