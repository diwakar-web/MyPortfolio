import { useState, useEffect } from 'react';
import { ArrowRight, X, ExternalLink } from 'lucide-react';
import './Projects.css';

const allProjects = [
  { id: 1, title: 'AeroXplore.in', tag: 'Blogging', image: '/Aeroxplore.webp', url: 'https://aeroxplore.in' },
  { id: 2, title: 'ARTIKA.life', tag: 'Web Development', image: '/Artika.webp', url: 'https://github.com/diwakar-web/ARTIKA.life' },
  { id: 3, title: 'VIGYX', tag: 'Web Development', image: '/vigyx.webp', url: 'https://github.com/diwakar-web/VIGYX' },
  { id: 4, title: 'FitBox Sports', tag: 'E-Commerce Website', image: '/fitboxsports.webp', url: 'https://fitboxsports.in' },
  { id: 5, title: 'Project Watermelon', tag: 'Web Design', image: '/watermelon.webp', url: 'https://https://watermelondn.vercel.app/' },
  { id: 6, title: 'Admin Dashboard', tag: 'Dashboard', image: '/admin.webp', url: 'https://admin.fitboxsports.in' },
  { id: 7, title: 'BMW Template', tag: 'Web Design', image: '/bmw.webp', url: 'https://bmw-template.vercel.app/' },
  { id: 8, title: 'Weather Web Extension', tag: 'Web Extension', image: '/web.webp', url: 'https://webextension01.vercel.app/' },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.title} className="project-image" />
    <div className="project-overlay">
      <div className="project-info">
        <span className="project-tag">{project.tag}</span>
        <h3 className="project-name">{project.title}</h3>
      </div>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="visit-btn">
        Visit <ExternalLink size={14} />
      </a>
    </div>
  </div>
);

const Projects = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expanded) {
      document.body.classList.add('projects-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('projects-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('projects-open');
      document.body.style.overflow = '';
    };
  }, [expanded]);

  return (
    <>
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="projects-header">
            <div className="header-left">
              <span className="text-neon projects-label">Projects</span>
              <h2 className="projects-title">Selected works<br />that I've built</h2>
            </div>
            <div className="header-right">
              <p className="projects-desc">Explore my work</p>
              <button className="btn btn-outline view-all-btn" onClick={() => setExpanded(true)}>
                View All <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="projects-grid">
            {allProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Overlay */}
      <div
        className={`projects-overlay ${expanded ? 'open' : ''}`}
        onClick={() => setExpanded(false)}
      >
        <div className="overlay-inner" onClick={(e) => e.stopPropagation()}>
          <div className="overlay-header">
            <h2 className="overlay-title">All <span className="text-neon">Projects</span></h2>
            <button className="close-btn" onClick={() => setExpanded(false)}>
              <X size={28} />
            </button>
          </div>
          <div className="overlay-grid">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
