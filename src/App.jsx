import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="footer">
        <span>© 2026 Sunny Kumar Singh // Built with React & too much coffee</span>
      </footer>
    </div>
  )
}

export default App
