import { useState, useEffect } from 'react';
import './GreenTransition.css';

const GreenTransition = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // We want the text to scroll horizontally as the user scrolls down the page.
      // We'll calculate progress over the first 2.5 window heights
      const progress = window.scrollY / (window.innerHeight * 2.5);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Translate from right to left
  const translateX1 = 100 - (scrollProgress * 150);
  
  // Translate from left to right, starts off screen left and comes in
  const translateX2 = -150 + (scrollProgress * 200);

  return (
    <div className="green-transition-fixed">
      <h2 
        className="green-transition-text"
        style={{ transform: `translateX(${translateX1}%)` }}
      >
        Making The Web Feel A Little More Alive.
      </h2>
      <h2 
        className="green-transition-text"
        style={{ 
          transform: `translateX(${translateX2}%)`,
          color: 'transparent',
          WebkitTextStroke: '2px var(--bg-color)',
          marginTop: '-2rem'
        }}
      >
        Less Clutter, More Intention.
      </h2>
    </div>
  );
};

export default GreenTransition;
