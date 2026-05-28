import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './About.css';

const AnimatedNumber = ({ end, duration = 2000, decimals = 0 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            setValue(ease * end);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setValue(end);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    let timeout;
    if (ref.current) {
      // Delay observation slightly to ensure page layout has settled
      // and it doesn't falsely trigger as intersecting on initial load
      timeout = setTimeout(() => {
        if (ref.current) observer.observe(ref.current);
      }, 500);
    }
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
};

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-left">
          <span className="text-neon about-label">About Me</span>
          <h2 className="about-title">
            I design and develop<br />with intention..
          </h2>
          <a href="/diwakar-web.pdf" download="diwakar-web.pdf" className="btn btn-outline about-btn">
            My Experience & Resume <ArrowRight size={18} className="arrow-anim" />
          </a>
        </div>
        
        <div className="about-right">
          <p className="about-description">
Hi, I’m Diwakar Nagar, a creative developer focused on building modern, smooth, and visually engaging digital experiences. I enjoy crafting clean interfaces, meaningful interactions, and immersive web experiences that blend aesthetics with functionality. I’m passionate about creating designs that not only look visually appealing but also feel intuitive and seamless to use. I love turning ideas into interactive realities through creativity, clean code, and a strong eye for modern design. </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number"><AnimatedNumber end={10} /><span className="text-neon">+</span></h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number"><AnimatedNumber end={2.5} decimals={1} /><span className="text-neon">+</span></h3>
              <p className="stat-label">Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number"><AnimatedNumber end={20} /><span className="text-neon">+</span></h3>
              <p className="stat-label">Repositories</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number"><AnimatedNumber end={450} /><span className="text-neon">+</span></h3>
              <p className="stat-label">LinkedIn Connections</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wireframe cube decoration */}
      <div className="cube-decoration top-right"></div>
      <div className="cube-decoration bottom-left"></div>
    </section>
  );
};

export default About;
