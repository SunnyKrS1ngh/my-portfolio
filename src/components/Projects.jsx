import './Projects.css'

const projects = [
  {
    title: 'Automated Text Review Generation from Product Images',
    description: 'AI-powered system that generates human-like product reviews from images using BLIP-2 for image captioning and Mistral-7B for language generation. Evaluated 9 model combinations, achieving top BERTScore of 0.8119.',
    tags: ['PyTorch', 'LLMs', 'BLIP-2', 'Mistral-7B', 'BERTScore'],
    link: '#',
    github: 'https://github.com/SunnyKrS1ngh/Automated_Text_Review_Generation_From_Product_Images',
  },
  {
    title: 'MindScribe',
    description: 'Full-stack blogging platform for creating, sharing, and managing blog posts with user authentication and dynamic data storage.',
    tags: ['NodeJS', 'ReactJS', 'Express', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    title: 'Fashion Search',
    description: 'CLIP transformer-based fashion recommendation system that returns top 5 relevant suggestions from 44k images via text queries. 94.79% accuracy.',
    tags: ['PyTorch', 'Streamlit', 'CLIP'],
    link: '#',
    github: '#',
  },
  {
    title: 'Reverse Image Search',
    description: 'Image-based fashion recommendation using ResNet50 and Euclidean distance. Returns top 5 similar items from 22k images. ~80% accuracy.',
    tags: ['TensorFlow', 'NumPy', 'ResNet50'],
    link: '#',
    github: '#',
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
