import { useState } from 'react'
import { FaEnvelope, FaGithub, FaPaperPlane } from 'react-icons/fa'
import './MiniMe.css'

export default function MiniMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setName('')
        setEmail('')
        setMessage('')
      }, 3000)
    }, 1000)
  }

  return (
    <div className="mini-me-container">
      <div className="section-header">
        <div className="section-number">06</div>
        <h2 className="section-title">Let's Collaborate</h2>
        <p className="section-subtitle">If you're interested in getting some reps of DSA problems or working on open source projects together, shoot me a message</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-content-grid">
          {/* Left: Interactive Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  required
                />
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : isSubmitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Quick Links */}
          <div className="contact-links-section">
            <div className="quick-links-card">
              <h3 className="links-title">Quick Links</h3>
              <div className="social-links">
                <a 
                  href="mailto:rodoshi.mondal@mail.utoronto.ca" 
                  className="social-link"
                >
                  <div className="social-icon email">
                    <FaEnvelope />
                  </div>
                  <div className="social-info">
                    <div className="social-label">Email</div>
                    <div className="social-text">rodoshi.mondal@mail.utoronto.ca</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/rodoshi16" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <div className="social-icon github">
                    <FaGithub />
                  </div>
                  <div className="social-info">
                    <div className="social-label">GitHub</div>
                    <div className="social-text">github.com/rodoshi16</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
