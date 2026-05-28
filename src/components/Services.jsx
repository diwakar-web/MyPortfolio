import './Services.css';
import { 
  FaPaintBrush, FaCode, FaReact, FaServer, FaLaptopCode, FaGithub, FaDatabase, 
  FaMusic, FaLightbulb, FaBullhorn, FaBookOpen, FaLinkedin, FaInstagram, FaImage 
} from 'react-icons/fa';
import { FaXTwitter, FaRobot } from 'react-icons/fa6';
import { MdDesignServices, MdOutlineAudiotrack } from 'react-icons/md';
import { SiCanva, SiFigma, SiMongodb, SiVercel } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Services = () => {
  const categories = [
    {
      num: '01.',
      title: 'Design & Visual',
      desc: 'Creating clean, modern, and visually engaging interfaces with a strong focus on aesthetics, usability, and smooth user experiences. I enjoy blending creativity with minimal and impactful design.',
      services: [
        { name: 'UI/UX Design', icon: <MdDesignServices /> },
        { name: 'Canva Design', icon: <SiCanva /> },
        { name: 'Figma Design', icon: <SiFigma /> },
        { name: 'Graphic Design', icon: <FaPaintBrush /> },
        { name: 'Creative Visuals', icon: <FaImage /> },
      ],
    },
    {
      num: '02.',
      title: 'Development',
      desc: 'Building modern, responsive, and scalable web experiences using clean code, smooth interactions, and performance-focused development across frontend and backend technologies.',
      services: [
        { name: 'Frontend Development', icon: <FaCode /> },
        { name: 'React Development', icon: <FaReact /> },
        { name: 'Backend Development', icon: <FaServer /> },
        { name: 'API Integration', icon: <TbApi /> },
        { name: 'Full Stack Development', icon: <FaLaptopCode /> },
      ],
    },
    {
      num: '03.',
      title: 'Tools & Technologies',
      desc: 'Using modern tools, deployment platforms, databases, and version control systems to create efficient, production-ready, and maintainable digital products.',
      services: [
        { name: 'Git & GitHub', icon: <FaGithub /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'Vercel Deployment', icon: <SiVercel /> },
        { name: 'Prompt Engineering', icon: <FaRobot /> },
      ],
    },
    {
      num: '04.',
      title: 'Creative Skills',
      desc: 'Exploring creativity beyond development through music production, digital aesthetics, and visual storytelling to create more immersive and expressive experiences.',
      services: [
        { name: 'Music Production', icon: <FaMusic /> },
        { name: 'Audio Editing', icon: <MdOutlineAudiotrack /> },
        { name: 'Creative Direction', icon: <FaLightbulb /> },
        { name: 'Digital Branding', icon: <FaBullhorn /> },
        { name: 'Visual Storytelling', icon: <FaBookOpen /> },
      ],
    },
    {
      num: '05.',
      title: 'Where you can find me',
      desc: 'Connect with me across various platforms. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.',
      services: [
        { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/diwakar-web' },
        { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/diwakarnagar' },
        { name: 'X / Twitter', icon: <FaXTwitter />, link: 'https://x.com/diwakar_nagar01' },
        { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/diwakar_nagar01' },
      ],
    }
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
                service.link ? (
                  <a href={service.link} target="_blank" rel="noopener noreferrer" key={idx} className="service-box bordered-box social-box">
                    <span className="social-icon-only">{service.icon}</span>
                  </a>
                ) : (
                  <div key={idx} className="service-box bordered-box default-service-box">
                    <span className="service-name">{service.name}</span>
                    <span className="service-icon">{service.icon}</span>
                  </div>
                )
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
