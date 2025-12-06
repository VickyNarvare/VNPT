import { useState } from 'react';
import { toast } from 'react-toastify';
import { socialLinksData } from '../data';
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheckCircle } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialIconMap = {
  'bxl-github': FaGithub,
  'bxl-linkedin': FaLinkedin,
  'bxl-facebook': FaFacebook,
  'bxl-instagram': FaInstagram,
  'bxl-whatsapp': FaWhatsapp,
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all fields.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    
    toast.warning('Contact section is not working right now. Please try emailing me instead!');
  };

  const copyEmail = async () => {
    const email = 'vickynarvare51@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error('Failed to copy email. Please copy manually: ' + email);
    }
  };

  const contactSocials = socialLinksData.filter(s => s.name !== 'Instagram');

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          Get In <span className="accent-text">Touch</span>
        </h2>

        <div className="availability-notice">
          <div className="availability-notice-icon">
            <FiCheckCircle />
          </div>
          <div className="availability-notice-content">
            <h3>Available for Work</h3>
            <p>I'm currently available for freelance projects and full-time opportunities.</p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
            <div className="contact-details">
              <div className="contact-item">
                <FiMail />
                <span>vickynarvare51@gmail.com</span>
                <button className="copy-email-btn" onClick={copyEmail} aria-label="Copy email">
                  {copied ? <FiCheckCircle /> : <FiCopy />}
                  <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="contact-item">
                <FiPhone />
                <span>+91 6267607029</span>
              </div>
              <div className="contact-item">
                <FiMapPin />
                <span>Indore, India</span>
              </div>
            </div>
            <div className="social-links">
              {contactSocials.map(social => {
                const IconComponent = socialIconMap[social.icon] || FaGithub;
                return (
                  <a key={social.name} href={social.url} className="social-link" aria-label={social.name} target="_blank" rel="noopener noreferrer">
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
            </div>
            <button type="submit" className="btn btn-primary contact_btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
