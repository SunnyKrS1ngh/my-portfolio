import { useState, useEffect } from 'react'
import './Nav.css'

const links = [
  { href: '#hero', label: 'home' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => ({
        id: l.href.replace('#', ''),
        el: document.getElementById(l.href.replace('#', ''))
      }))

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">~/portfolio $</span>
        <ul className="nav-links">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.replace('#', '') ? 'active' : ''}
              >
                [{link.label}]
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
