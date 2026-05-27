import { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      window.dispatchEvent(new Event('musicPlaying'));
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleGlobalPlay = () => {
      setHasInteracted(true);
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error(err));
      }
    };
    window.addEventListener('playMusic', handleGlobalPlay);
    return () => window.removeEventListener('playMusic', handleGlobalPlay);
  }, []);

  useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    };

    // Attempt immediately
    tryPlay();

    // Attempt on first user interaction
    const handleInteraction = () => {
      setHasInteracted(true);
      tryPlay();
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
    
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    setHasInteracted(true);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Error playing audio:", error));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo">
          <div className="logo-dot green"></div>
          <div className="logo-dot white"></div>
          <div className="logo-dot white"></div>
          <div className="logo-dot green"></div>
        </a>



        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <a href="#" className="btn btn-outline get-in-touch-nav" onClick={(e) => { e.preventDefault(); onOpenContact('Let’s build something people remember.'); }}>
            Get in Touch
          </a>
          <div className="music-player-wrapper">
            <div className="song-tooltip">
              <a href="https://www.youtube.com/watch?v=PGR1pPoJSmg" target="_blank" rel="noopener noreferrer">
                Portofino · Malditho.wav · Tobias Rhein Larsen
              </a>
            </div>
            <button onClick={togglePlay} className={`music-toggle-btn ${!hasInteracted ? 'needs-attention' : ''}`} aria-label="Toggle Music">
              {isPlaying ? <Pause size={20} fill="#ccff00" color="#ccff00" /> : <Play size={20} fill="#ccff00" color="#ccff00" />}
            </button>
            <audio ref={audioRef} src="/Website.m4a" loop />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
