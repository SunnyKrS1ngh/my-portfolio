import './Experience.css'

const experience = {
  company: 'LTIMindtree',
  location: 'Bengaluru',
  phases: [
    {
      role: 'Software Engineer Trainee',
      dates: 'August 2025 – October 2025',
      bullets: [
        'Built a policy chatbot that answers queries from internal policy documents using a RAG pipeline',
        'Evaluated multiple chunking strategies (RecursiveTextSplitter, Semantic Chunking) and retrieval methods (Dense, Sparse, Ensemble) using LangChain Benchmarks',
      ],
      tech: ['LangChain', 'Streamlit', 'FAISS Vectorstore'],
    },
    {
      role: 'Software Engineer',
      dates: 'November 2025 – Present',
      bullets: [
        'Building and optimizing AI-driven solutions for clients in the insurance sector',
      ],
      tech: ['AngularJS', 'Flask', 'MongoDB', 'Langgraph'],
    },
  ],
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header">
        <div className="prompt">~/portfolio $ cat experience.log</div>
        <h2>experience</h2>
      </div>
      <div className="experience-card">
        <div className="exp-header">
          <span className="exp-company">{experience.company}</span>
          <span className="exp-location">{experience.location}</span>
        </div>
        <div className="timeline">
          {experience.phases.map((phase, i) => (
            <div key={i} className="timeline-item">
              <div className={`timeline-dot ${i === experience.phases.length - 1 ? 'active' : 'hollow'}`}></div>
              <div className="timeline-content">
                <div className="exp-phase-header">
                  <span className="exp-role">{phase.role}</span>
                  <span className="exp-dates">{phase.dates}</span>
                </div>
                <ul className="exp-bullets">
                  {phase.bullets.map((bullet, j) => (
                    <li key={j}>
                      <span className="exp-bullet-icon">▹</span>
                      <span className="exp-bullet-text">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="exp-tech">
                  {phase.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          )          )}
        </div>
      </div>
    </section>
  )
}
