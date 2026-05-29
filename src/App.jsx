import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GreenTransition from './components/GreenTransition';
import MyRole from './components/MyRole';
import About from './components/About';
import MarqueeTape from './components/MarqueeTape';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const openContact = (subject = 'Let’s build something people remember.') => {
    setContactSubject(subject);
    setIsContactModalOpen(true);
  };

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Delay slightly to override the browser's default behavior
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    const handleGlobalScroll = () => {
      // Toggle theme when scrolling past half the Hero's sticky phase
      if (window.scrollY > window.innerHeight * 0.5) {
        document.body.classList.add('theme-green');
      } else {
        document.body.classList.remove('theme-green');
      }
    };

    window.addEventListener('scroll', handleGlobalScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleGlobalScroll);
  }, []);

  return (
    <>
      <Navbar onOpenContact={openContact} />
      <main>
        <Hero />
        <GreenTransition />
        <div className="black-canvas-wrapper">
          <MyRole />
          <About />
          <MarqueeTape />
          <Services />
          <Projects />
          <Experience />
          <Achievements />
          <Contact onOpenContact={openContact} />
        </div>
      </main>
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        defaultSubject={contactSubject} 
      />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
