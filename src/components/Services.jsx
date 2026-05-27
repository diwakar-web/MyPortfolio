import './Services.css';

const Services = () => {
  const categories = [
    {
      num: '01.',
      title: 'Design & Visual',
      desc: 'Creating clean, modern, and visually engaging interfaces with a strong focus on aesthetics, usability, and smooth user experiences. I enjoy blending creativity with minimal and impactful design.',
      services: ['UI/UX Design', 'Canva Design', 'Figma Design', 'Graphic Design', 'Creative Visuals'],
    },
    {
      num: '02.',
      title: 'Development',
      desc: 'Building modern, responsive, and scalable web experiences using clean code, smooth interactions, and performance-focused development across frontend and backend technologies.',
      services: ['Frontend Development', 'React Development', 'Backend Development', 'API Integration', 'Full Stack Development'],
    },
    {
      num: '03.',
      title: 'Tools & Technologies',
      desc: 'Using modern tools, deployment platforms, databases, and version control systems to create efficient, production-ready, and maintainable digital products.',
      services: ['Git & GitHub', 'MongoDB', 'SQL', 'Vercel Deployment', 'Prompt Engineering'],
    },
    {
      num: '04.',
      title: 'Creative Skills',
      desc: 'Exploring creativity beyond development through music production, digital aesthetics, and visual storytelling to create more immersive and expressive experiences.',
      services: ['Music Production', 'Sound Design', 'Creative Direction', 'Digital Branding', 'Visual Storytelling'],
    },
  ];

  return (
    <section id="service" className="section services-section">
      <div className="container">
        <div className="services-header text-center">
          <span className="text-neon services-label">Service</span>
          <h2 className="services-title">Available services that<br />I can work on</h2>
        </div>

        {categories.map((cat, i) => (
          <div key={i} className="service-category">
            <div className="category-header">
              <h3 className="category-title"><span className="text-neon">{cat.num}</span> {cat.title}</h3>
              <p className="category-desc">{cat.desc}</p>
            </div>
            <div className="service-grid">
              {cat.services.map((service, idx) => (
                <div key={idx} className="service-box bordered-box">
                  {service}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative cubes */}
      <div className="cube-decoration mid-right"></div>
    </section>
  );
};

export default Services;
