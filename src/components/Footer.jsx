import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-left">
          <h2 className="footer-title">Diwakar Nagar</h2>
          <p className="footer-subtitle">making the web feel a little more alive.</p>
          <p className="footer-copy desktop-copy">
            &copy; {new Date().getFullYear()} Diwakar Nagar. All rights reserved.
          </p>
        </div>
        
        <div className="footer-right">
          <ul className="footer-socials">
            <li>
              <a href="https://github.com/diwakar-web" target="_blank" rel="noopener noreferrer">
                <FaGithub size={16} /> Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/diwakarnagar" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/diwakar_nagar01" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={16} /> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/diwakar_nagar01" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={16} /> Instagram
              </a>
            </li>
          </ul>
        </div>
        
        <p className="footer-copy mobile-copy">
          &copy; {new Date().getFullYear()} Diwakar Nagar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
