import { socialLinksData } from '../data';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const socialIconMap = {
  'bxl-github': FiGithub,
  'bxl-linkedin': FiLinkedin,
  'bxl-facebook': FiFacebook,
  'bxl-instagram': FiInstagram,
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
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <span className={styles.logoText}>
                <span className={styles.logoBracket}>&lt;</span>
                <span className={styles.logoName}>ViCKY</span>
                <span className={styles.logoBracket}>/&gt;</span>
              </span>
            </div>
            <p className={styles.footerDescription}>
              Frontend Developer creating beautiful and functional web experiences.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <ul>
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.footerSection}>
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

        <div className={styles.footerBottom}>
          <div className={styles.footerSocial}>
            {socialLinksData.map(social => {
              const IconComponent = socialIconMap[social.icon] || FiGithub;
              return (
                <a key={social.name} href={social.url} className={styles.socialLink} aria-label={social.name} data-tooltip={social.tooltip} target="_blank" rel="noopener noreferrer">
                  <IconComponent />
                  <span className={styles.tooltip}>{social.tooltip}</span>
                </a>
              );
            })}
          </div>
          <div className={styles.footerCopyright}>
            <p>&copy; 2024 <strong>Vicky Narvare</strong> — Crafted with passion. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
