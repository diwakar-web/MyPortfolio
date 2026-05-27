import { useEffect } from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'FullStack Engineer',
    company: 'Fitbox Sports',
    year: 'NOW',
    desc: 'Built and managed the complete e-commerce website and backend for Fitbox Sports, serving 1M+ customers with a smooth and scalable user experience.',
  },
  {
    title: 'FullStack Web Dev',
    company: 'IIT Jammu',
    year: '2025',
    desc: 'Worked on MERN stack projects while learning databases, Git/GitHub, project structure, Figma, Canva, and modern web development practices.',
  },
  {
    title: 'Web Dev Intern',
    company: 'Under Govt Employee',
    year: '2024',
    desc: 'Developed an SEO-optimized portfolio website using HTML, CSS, and JavaScript, achieving performance scores above 95.',
  },
  {
    title: 'Freelance Dev & Designer',
    company: 'Self-Employed',
    year: '2023',
    desc: 'Building modern websites, UI designs, and creative digital projects for clients since 2023.',
  },
];

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.6 } // Element glows when 60% visible
    );

    const rows = document.querySelectorAll('.timeline-row');
    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="projects-header">
          <div className="header-left">
            <span className="text-neon projects-label">Experience</span>
            <h2 className="projects-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>My Career &amp; Experience</h2>
          </div>
          <div className="header-right">
            <p className="projects-desc">A timeline of my professional journey.</p>
          </div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-row">
              {/* Left: Title + Company */}
              <div className="timeline-left">
                <h3 className="exp-title">{exp.title}</h3>
                <span className="exp-company">{exp.company}</span>
              </div>

              {/* Center: Year + dot */}
              <div className="timeline-center">
                <span className="exp-year">{exp.year}</span>
                <div className="timeline-dot"></div>
              </div>

              {/* Right: Description */}
              <div className="timeline-right">
                <p className="exp-desc">{exp.desc}</p>
              </div>
            </div>
          ))}

          {/* Vertical line */}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
