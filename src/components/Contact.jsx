import './Contact.css'

const links = [
  {
    label: 'email',
    value: 'usnnyks73@gmail.com',
    href: 'mailto:usnnyks73@gmail.com',
  },
  {
    label: 'github',
    value: 'github.com/SunnyKrS1ngh',
    href: 'https://github.com/SunnyKrS1ngh',
  },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/sunny-singh-20b075225',
    href: 'https://www.linkedin.com/in/sunny-singh-20b075225/',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header">
        <div className="prompt">~/portfolio $ ./contact.sh</div>
        <h2>contact</h2>
      </div>
      <div className="contact-terminal">
        <div className="contact-line">
          <span className="prompt-symbol">$</span>
          <span className="command">echo "Let's build something together"</span>
        </div>
        <div className="contact-output">
          <span className="output-prefix">{'>'}</span>
          <span className="output-text">Open for work and collaborations.</span>
        </div>
        <div className="contact-line">
          <span className="prompt-symbol">$</span>
          <span className="command">cat connections.txt</span>
        </div>
        <div className="contact-links">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="link-label">[{link.label}]</span>
              <span className="link-value">{link.value}</span>
            </a>
          ))}
        </div>
        <div className="contact-line">
          <span className="prompt-symbol">$</span>
          <span className="cursor"></span>
        </div>
      </div>
    </section>
  )
}
