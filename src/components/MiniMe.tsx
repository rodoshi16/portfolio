import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { FaPaperPlane, FaUser, FaRobot, FaTimes } from 'react-icons/fa'
import './MiniMe.css'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function MiniMe() {
  const [isOpen, setIsOpen] = useState(false)
  const [userName, setName] = useState('')
  const [nameSubmitted, setNameSubmitted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello, I'm Rodoshi's assistant. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userName.trim()) {
      setNameSubmitted(true)
      setMessages([
        {
          id: 1,
          text: `Hello ${userName}, I'm Rodoshi's assistant. What would you like to know?`,
          sender: 'bot',
          timestamp: new Date()
        }
      ])
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    setTimeout(() => {
      const responses = [
        "That's a great question. Rodoshi would be happy to discuss that. Feel free to reach out via email or LinkedIn.",
        "Interesting! Rodoshi has experience with that. Check out the projects section for more details.",
        "Thanks for asking. For more specific details, you can find Rodoshi's contact information in the portfolio.",
        "Great question. Rodoshi is always open to discussing opportunities and collaborations.",
        "I'd love to help. For detailed information, please check out the relevant sections above or reach out directly."
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  return (
    <div className="mini-me-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="section-number">10</div>
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let's connect and discuss opportunities</p>
      </motion.div>

      <motion.div
        className="mini-me-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {!isOpen ? (
          <motion.button
            className="mini-me-toggle"
            onClick={() => setIsOpen(true)}
            whileHover={{ opacity: 0.7 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="avatar-container">
              <div className="avatar">
                <span>RM</span>
              </div>
            </div>
            <span className="toggle-text">Start Conversation</span>
          </motion.button>
        ) : (
          <motion.div
            className="chat-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="avatar-small">
                  <span>RM</span>
                </div>
                <div>
                  <h3>Assistant</h3>
                  <p>Ask me anything</p>
                </div>
              </div>
              <button
                className="close-button"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            {!nameSubmitted ? (
              <div className="name-form-container">
                <form onSubmit={handleNameSubmit} className="name-form">
                  <label htmlFor="user-name">What's your name?</label>
                  <input
                    id="user-name"
                    type="text"
                    value={userName}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    autoFocus
                  />
                  <button type="submit" className="submit-name-button">
                    Continue
                  </button>
                </form>
              </div>
            ) : (
              <>
                <div className="messages-container">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        className={`message ${message.sender}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="message-icon">
                          {message.sender === 'user' ? <FaUser /> : <FaRobot />}
                        </div>
                        <div className="message-content">
                          <p>{message.text}</p>
                          <span className="message-time">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="chat-input-form">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything..."
                    className="chat-input"
                    autoFocus
                  />
                  <button type="submit" className="send-button">
                    <FaPaperPlane />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
