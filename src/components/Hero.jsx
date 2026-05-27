import { useState, useEffect } from 'react';
import { Mouse } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [musicClicked, setMusicClicked] = useState(false);
  const [showEnjoy, setShowEnjoy] = useState(false);

  const handleMusicClick = () => {
    window.dispatchEvent(new Event('playMusic'));
    setMusicClicked(true);
    setShowEnjoy(true);
    setTimeout(() => {
      setShowEnjoy(false);
    }, 2000);
  };

  useEffect(() => {
    const handleGlobalMusicPlaying = () => {
      if (!musicClicked) {
        setMusicClicked(true);
        setShowEnjoy(true);
        setTimeout(() => setShowEnjoy(false), 2000);
      }
    };
    window.addEventListener('musicPlaying', handleGlobalMusicPlaying);
    return () => window.removeEventListener('musicPlaying', handleGlobalMusicPlaying);
  }, [musicClicked]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollY <= windowHeight) {
        const progress = scrollY / windowHeight;
        setScale(1 - (progress * 0.3)); // Shrink to 0.7
        setOpacity(1 - progress); // Fade out completely
      } else {
        setScale(0.7);
        setOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div 
        className="hero-sticky-wrapper" 
        style={{ 
          transform: `scale(${scale})`,
          opacity: opacity,
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
        }}
      >
      <div className="hero-background">
        <div className="hero-image-container">
          <img 
            src="/abc.jpeg"
            alt="Diwakar Nagar" 
            className="hero-image"
          />
          <div className="neon-overlay-box"></div>
        </div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Diwakar Nagar
          </h1>
          <p className="hero-subtitle">
            Hello, my name is Diwakar Nagar. Nice to meet you.  I would like to welcome you with my personal portfolio.
          </p>
        </div>
      </div>

      <div className="hero-action-area">
        {!musicClicked ? (
          <button className="btn btn-outline hero-music-btn needs-attention" onClick={handleMusicClick}>
            experience the ambience...
          </button>
        ) : showEnjoy ? (
          <div className="hero-music-btn" style={{ background: 'var(--accent-neon)', color: 'var(--bg-color)', fontStyle: 'italic', cursor: 'default', fontWeight: '600' }}>
            Welcome To My Space!
          </div>
        ) : null}
      </div>

      <div className="scroll-indicator">
        <Mouse size={24} color="var(--text-secondary)" />
      </div>
      </div>
    </section>
  );
};

export default Hero;
