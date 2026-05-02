import './Skills.css'

const skills = [
  {
    category: 'languages',
    items: ['C/C++', 'Python', 'JavaScript'],
  },
  {
    category: 'frameworks',
    items: ['AngularJS', 'ReactJS', 'Flask', 'Streamlit', 'LangChain', 'PyTorch', 'TensorFlow', 'NumPy', 'Pandas'],
  },
  {
    category: 'tools',
    items: ['MongoDB', 'Git', 'Linux'],
  },
  {
    category: 'core',
    items: ['DSA', 'DBMS', 'Machine Learning', 'Deep Learning', 'Computer Networks'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <div className="prompt">~/portfolio $ ls -la skills/</div>
        <h2>skills</h2>
      </div>
      <div className="skills-container">
        {skills.map(group => (
          <div key={group.category} className="skill-group">
            <div className="skill-group-header">
              <span className="dir-symbol">/</span>
              <span className="dir-name">{group.category}</span>
            </div>
            <ul className="skill-list">
              {group.items.map(skill => (
                <li key={skill} className="skill-item">
                  <span className="skill-icon">▹</span>
                  <span className="skill-name">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
