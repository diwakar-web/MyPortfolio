import { useState, useEffect } from 'react';
import { X, Mail, MessageCircle, Send } from 'lucide-react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, defaultSubject = '' }) => {
  const [activeTab, setActiveTab] = useState('mail');
  
  // Mail State
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(defaultSubject);
  const [mailMessage, setMailMessage] = useState('');

  // WhatsApp State
  const [waName, setWaName] = useState('');
  const [waMessage, setWaMessage] = useState('');

  // Update subject when it changes via props
  useEffect(() => {
    setSubject(defaultSubject);
  }, [defaultSubject]);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('contact-modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('contact-modal-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('contact-modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleMailSend = (e) => {
    e.preventDefault();
    const body = `${mailMessage}\n\nFrom: ${email}`;
    window.location.href = `mailto:diwakarnagar01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWaSend = (e) => {
    e.preventDefault();
    const text = `${waMessage}\n\n-from ${waName}`;
    window.open(`https://wa.me/919906251573?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-modal-inner" onClick={(e) => e.stopPropagation()}>
        <button className="contact-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="contact-modal-header">
          <h2 className="contact-modal-title">Get in <span className="text-neon">Touch</span></h2>
          <p className="contact-modal-desc">Choose how you'd like to reach out.</p>
        </div>

        <div className="contact-tabs">
          <button 
            className={`contact-tab ${activeTab === 'mail' ? 'active' : ''}`}
            onClick={() => setActiveTab('mail')}
          >
            <Mail size={18} /> Mail
          </button>
          <button 
            className={`contact-tab ${activeTab === 'whatsapp' ? 'active' : ''}`}
            onClick={() => setActiveTab('whatsapp')}
          >
            <MessageCircle size={18} /> WhatsApp
          </button>
        </div>

        <div className="contact-form-container">
          {activeTab === 'mail' && (
            <form onSubmit={handleMailSend} className="contact-form animate-fade-in">
              <div className="form-group">
                <label>To</label>
                <input type="text" value="Diwakar Nagar" disabled className="form-input disabled" />
              </div>
              <div className="form-group">
                <label>From <span className="text-neon">*</span></label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Message <span className="text-neon">*</span></label>
                <textarea 
                  placeholder="Hello Diwakar, I'd like to discuss..."
                  value={mailMessage}
                  onChange={(e) => setMailMessage(e.target.value)}
                  className="form-textarea"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="form-submit-wrapper">
                <button type="submit" className="btn btn-primary send-btn">
                  Send <Send size={16} />
                </button>
              </div>
            </form>
          )}

          {activeTab === 'whatsapp' && (
            <form onSubmit={handleWaSend} className="contact-form animate-fade-in">
              <div className="form-group">
                <label>To</label>
                <input type="text" value="Diwakar Nagar" disabled className="form-input disabled" />
              </div>
              <div className="form-group">
                <label>From (Your Name) <span className="text-neon">*</span></label>
                <input 
                  type="text" 
                  placeholder="Alan Turing" 
                  value={waName}
                  onChange={(e) => setWaName(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message <span className="text-neon">*</span></label>
                <textarea 
                  placeholder="Hey Diwakar! Saw your portfolio and..."
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="form-submit-wrapper">
                <button type="submit" className="btn btn-primary send-btn whatsapp-btn">
                  Send via WhatsApp <MessageCircle size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
