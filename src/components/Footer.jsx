import { socialLinksData } from '../data';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialIconMap = {
  'bxl-github': FaGithub,
  'bxl-linkedin': FaLinkedin,
  'bxl-facebook': FaFacebook,
  'bxl-instagram': FaInstagram,
  'bxl-whatsapp': FaWhatsapp,
};

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#works', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-name">ViCKY</span>
                <span className="logo-bracket">/&gt;</span>
              </span>
            </div>
            <p className="footer-description">
              Frontend Developer creating beautiful and functional web experiences.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <a href="mailto:vickynarvare51@gmail.com">
                    <FiMail /> vickynarvare51@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+916267607029">
                    <FiPhone /> +91 6267607029
                  </a>
                </li>
                <li><FiMapPin /> Indore, India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            {socialLinksData.map(social => {
              const IconComponent = socialIconMap[social.icon] || FaGithub;
              return (
                <a key={social.name} href={social.url} className="social-link" aria-label={social.name} target="_blank" rel="noopener noreferrer">
                  <IconComponent />
                </a>
              );
            })}
          </div>
          <div className="footer-copyright">
            <p>&copy; 2024 <strong>Vicky Narvare</strong> — Crafted with passion. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
