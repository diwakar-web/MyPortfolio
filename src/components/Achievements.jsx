import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    id: 1,
    title: 'NPTEL Elite HCI Course - Top 2%',
    image: 'achievement4.webp',
    para: 'Secured 99% (Top 2% of 23,139 candidates) in the 12-week NPTEL Elite HCI course by IIIT Delhi. Covered UI/UX Design, Smart UI, HCI with IoT, and AI/LLMs. This taught me how to mitigate cognitive overload and design systems that feel simple, intuitive, and user-centric.',
  },
  {
    id: 2,
    title: 'AI Impact Summit India 2025',
    image: 'achievement1.webp',
    para: 'Attended the AI Impact Summit India, 2025 in New Delhi, gaining insights into emerging trends in artificial intelligence, real-world applications, and industry innovations through expert talks, workshops, and networking with professionals.',
  },
  {
    id: 3,
    title: 'Inter-University Chess Competition',
    image: 'achievement2.webp',
    para: 'Secured a Gold Medal and Runner-Up position in an inter-university chess competition, demonstrating strategic thinking, problem-solving skills, and competitive excellence against top university players.',
  },
  {
    id: 4,
    title: 'Independent Music Producer',
    image: 'achievement3.webp',
    para: 'Achieved 10K+ streams on Spotify for an original track, marking a significant milestone in music production. Collaborated on 25+ projects, including both Indian and international artists, showcasing creativity, consistency, and cross-cultural collaboration.',
  },
  
];

const Achievements = () => {
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  const open = (item) => {
    setSelected(item);
    setTimeout(() => setVisible(true), 10);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('achievements-open');
  };

  const close = () => {
    setVisible(false);
    setTimeout(() => {
      setSelected(null);
      document.body.style.overflow = '';
      document.body.classList.remove('achievements-open');
    }, 400);
  };

  useEffect(() => {
    return () => { 
      document.body.style.overflow = ''; 
      document.body.classList.remove('achievements-open');
    };
  }, []);

  return (
    <>
      <section id="achievements" className="section achievements-section">
        <div className="container">
          <div className="projects-header">
            <div className="header-left">
              <span className="text-neon projects-label">Achievements</span>
              <h2 className="projects-title">Moments that<br />define my journey</h2>
            </div>
            <div className="header-right">
              <p className="projects-desc">Explore my proudest moments and milestones.</p>
              <button className="btn btn-outline view-all-btn" onClick={() => open(null)}>
                View All <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="achievements-grid">
            {achievements.slice(0, 3).map((item) => (
              <div key={item.id} className="achievement-card" onClick={() => open(item)}>
                <img src={item.image} alt={item.title} className="achievement-img" />
                <div className="achievement-hover-overlay">
                  <h3 className="achievement-hover-title">{item.title}</h3>
                  <p className="achievement-hover-para">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen detail overlay */}
      {selected && (
        <div className={`ach-overlay ${visible ? 'open' : ''}`} onClick={close}>
          <div className="ach-overlay-inner" onClick={(e) => e.stopPropagation()}>
            <button className="ach-close-btn" onClick={close}>
              <X size={24} />
            </button>
            <div className="ach-detail-left">
              <img src={selected.image} alt={selected.title} className="ach-detail-img" />
            </div>
            <div className="ach-detail-right">
              <span className="text-neon ach-detail-label">Achievement</span>
              <h2 className="ach-detail-title">{selected.title}</h2>
              <p className="ach-detail-para">{selected.para}</p>
            </div>
          </div>
        </div>
      )}

      {/* All-achievements fullscreen (when view all is clicked) */}
      {selected === null && visible && (
        <div className={`ach-all-overlay ${visible ? 'open' : ''}`} onClick={close}>
          <div className="ach-all-inner" onClick={(e) => e.stopPropagation()}>
            <div className="ach-all-header">
              <h2 className="ach-all-title">All <span className="text-neon">Achievements</span></h2>
              <button className="ach-close-btn" onClick={close}><X size={24} /></button>
            </div>
            <div className="ach-all-grid">
              {achievements.map((item) => (
                <div key={item.id} className="achievement-card" onClick={(e) => { e.stopPropagation(); open(item); }}>
                  <img src={item.image} alt={item.title} className="achievement-img" />
                  <div className="achievement-hover-overlay">
                    <h3 className="achievement-hover-title">{item.title}</h3>
                    <p className="achievement-hover-para">{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;
