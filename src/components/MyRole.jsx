import './MyRole.css';

const MyRole = () => {
  const roles = ['Engineer', 'Web Developer', 'Blogger', 'Student','Open Source Contributor'];

  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-header">
          <h3 className="text-neon">My Role</h3>
          <p>What I do and how I contribute.</p>
        </div>
        
        <div className="roles-marquee-container">
          <div className="roles-marquee-content">
            {/* Render two sets of items for seamless infinite scroll */}
            {[...roles, ...roles].map((role, index) => (
              <div key={index} className="client-logo bordered-box">
                <span className="logo-text">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyRole;
