import './Contact.css';

const Contact = ({ onOpenContact }) => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container text-center">
        <span className="text-neon contact-label">Bring your vision</span>
        <h2 className="contact-title">Let’s create <br />something exceptional.</h2>
        
        <div className="contact-actions">
          <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); onOpenContact('Let’s build something people remember.'); }}>Get in Touch</a>
          <a href="#" className="btn btn-outline work-together-btn" onClick={(e) => { e.preventDefault(); onOpenContact('Let’s turn your vision into reality.'); }}>Work together</a>
        </div>
      </div>
      
      {/* Abstract Wireframe Cubes */}
      <div className="cube-decoration top-right"></div>
      <div className="cube-decoration bottom-left"></div>
    </section>
  );
};

export default Contact;
