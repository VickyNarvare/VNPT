import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { HiX } from 'react-icons/hi';
import { FiHome, FiUser, FiCode, FiSettings, FiBriefcase, FiMail } from 'react-icons/fi';

const navLinks = [
  { href: '#home', label: 'Home', icon: FiHome },
  { href: '#about', label: 'About', icon: FiUser },
  { href: '#skills', label: 'Skills', icon: FiCode },
  { href: '#services', label: 'Services', icon: FiSettings },
  { href: '#works', label: 'Projects', icon: FiBriefcase },
  { href: '#contact', label: 'Contact', icon: FiMail },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'services', 'works', 'contact'];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(href);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  return (
    <nav className="navbar">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" className="logo-link" onClick={(e) => handleNavClick(e, '#home')}>
            <span className="logo-text">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">ViCKY</span>
              <span className="logo-bracket">/&gt;</span>
            </span>
          </a>
        </div>

        <div className="nav-menu desktop-menu">
          <ul className="nav-list">
            {navLinks.map(link => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span className="nav-text">{link.label}</span>
                  <span className="nav-indicator" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-controls">
          <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
            <div className="theme-icon">
              {isDark ? <BsSunFill className="sun-icon" /> : <BsMoonFill className="moon-icon" />}
            </div>
          </button>

          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger">
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={(e) => {
        if (e.target.classList.contains('mobile-menu-overlay')) {
          setMobileMenuOpen(false);
          document.body.style.overflow = '';
        }
      }}>
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <span className="logo-text">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-name">ViCKY</span>
                <span className="logo-bracket">/&gt;</span>
              </span>
            </div>
            <button className="mobile-menu-close" onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = ''; }}>
              <HiX />
            </button>
          </div>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navLinks.map(link => {
                const IconComponent = link.icon;
                return (
                  <li key={link.href} className="mobile-nav-item">
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${activeLink === link.href ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      <IconComponent />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
