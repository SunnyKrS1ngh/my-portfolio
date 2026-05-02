import './Projects.css'

const projects = [
  {
    title: 'MindScribe',
    description: 'Full-stack blogging platform for creating, sharing, and managing blog posts with user authentication and dynamic data storage.',
    tags: ['NodeJS', 'ReactJS', 'Express', 'MongoDB'],
    link: '#',
    github: 'https://github.com/SunnyKrS1ngh/MindScribe_Blogs',
  },
  {
    title: 'Fashion Search',
    description: 'CLIP transformer-based fashion recommendation system that returns top 5 relevant suggestions from 44k images via text queries. 94.79% accuracy.',
    tags: ['PyTorch', 'Streamlit', 'CLIP'],
    link: '#',
    github: 'https://github.com/SunnyKrS1ngh/Fashion_search',
  },
  {
    title: 'Reverse Image Search',
    description: 'Image-based fashion recommendation using ResNet50 and Euclidean distance. Returns top 5 similar items from 22k images. ~80% accuracy.',
    tags: ['TensorFlow', 'NumPy', 'ResNet50'],
    link: '#',
    github: 'https://github.com/SunnyKrS1ngh/Reverse_image_search',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <div className="prompt">~/portfolio $ cat projects.json</div>
        <h2>projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <div className="project-header">
              <span className="project-title">{project.title}</span>
              <div className="project-actions">
                <a href={project.github} className="project-link" title="Source Code">
                  &lt;/&gt;
                </a>
                <a href={project.link} className="project-link" title="Live Demo">
                  ↗
                </a>
              </div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
