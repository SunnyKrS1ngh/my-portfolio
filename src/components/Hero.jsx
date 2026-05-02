import { useState, useEffect } from 'react'
import './Hero.css'

const lines = [
  { text: 'system.boot()', delay: 300 },
  { text: 'loading profile...', delay: 600 },
  { text: 'name: "Sunny Kumar Singh"', delay: 500 },
  { text: 'role: "Software Engineer"', delay: 500 },
  { text: 'status: "Building at LTM"', delay: 500 },
  { text: '>', delay: 200 },
]

export default function Hero() {
  const [displayed, setDisplayed] = useState([])
  const [currentChar, setCurrentChar] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= lines.length) return

    const line = lines[lineIndex]

    if (charIndex < line.text.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + line.text[charIndex])
        setCharIndex(prev => prev + 1)
      }, 40 + Math.random() * 60)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayed(prev => [...prev, line.text])
        setCurrentChar('')
        setCharIndex(0)
        setLineIndex(prev => prev + 1)
      }, line.delay)
      return () => clearTimeout(timeout)
    }
  }, [lineIndex, charIndex])

  return (
    <section id="hero" className="hero">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">user@portfolio:~</span>
        </div>
        <div className="terminal-body">
          {displayed.map((line, i) => (
            <div key={i} className="terminal-line">
              <span className="prompt-symbol">$</span>
              <span className={line.includes('>') ? 'teal-text' : ''}>{line}</span>
            </div>
          ))}
          {lineIndex < lines.length && (
            <div className="terminal-line">
              <span className="prompt-symbol">$</span>
              <span>{currentChar}<span className="cursor"></span></span>
            </div>
          )}
          {lineIndex >= lines.length && (
            <div className="terminal-line">
              <span className="prompt-symbol">$</span>
              <span className="cursor"></span>
            </div>
          )}
        </div>
      </div>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">view_projects()</a>
        <a href="#contact" className="btn btn-outline">contact_me()</a>
      </div>
    </section>
  )
}
