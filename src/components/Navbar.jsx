import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { HiX } from 'react-icons/hi';
import { FiHome, FiUser, FiCode, FiSettings, FiBriefcase, FiMail, FiSend } from 'react-icons/fi';
import styles from '../styles/Navbar.module.css';

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
    <nav className={styles.navbar}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <a href="#home" className={styles.logoLink} onClick={(e) => handleNavClick(e, '#home')}>
            <span className={styles.logoText}>
              <span className={styles.logoBracket}>&lt;</span>
              <span className={styles.logoName}>ViCKY</span>
              <span className={styles.logoBracket}>/&gt;</span>
            </span>
          </a>
        </div>

        <div className={`${styles.navMenu} ${styles.desktopMenu}`}>
          <ul className={styles.navList}>
            {navLinks.map(link => (
              <li key={link.href} className={styles.navItem}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${activeLink === link.href ? styles.active : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span className={styles.navText}>{link.label}</span>
                  <span className={styles.navIndicator} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.navControls}>
         

          <button className={styles.themeToggle} aria-label="Toggle theme" onClick={toggleTheme}>
            <div className={styles.themeIcon}>
              {isDark ? <BsSunFill className={styles.sunIcon} /> : <BsMoonFill className={styles.moonIcon} />}
            </div>
          </button>
 <a href="#contact" className={styles.hireMeBtn} onClick={(e) => handleNavClick(e, '#contact')}>
            <FiSend className={styles.hireMeIcon} />
            <span>Hire Me</span>
          </a>
          <button
            className={`${styles.mobileMenuToggle} ${mobileMenuOpen ? styles.active : ''}`}
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
          >
            <span className={styles.hamburger}>
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </span>
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.active : ''}`} onClick={(e) => {
        if (e.target.classList.contains(styles.mobileMenuOverlay)) {
          setMobileMenuOpen(false);
          document.body.style.overflow = '';
        }
      }}>
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.mobileLogo}>
              <span className={styles.logoText}>
                <span className={styles.logoBracket}>&lt;</span>
                <span className={styles.logoName}>ViCKY</span>
                <span className={styles.logoBracket}>/&gt;</span>
              </span>
            </div>
            <button className={styles.mobileMenuClose} onClick={() => { setMobileMenuOpen(false); document.body.style.overflow = ''; }}>
              <HiX />
            </button>
          </div>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navLinks.map(link => {
                const IconComponent = link.icon;
                return (
                  <li key={link.href} className={styles.mobileNavItem}>
                    <a
                      href={link.href}
                      className={`${styles.mobileNavLink} ${activeLink === link.href ? styles.active : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      <IconComponent />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <a href="#contact" className={styles.mobileHireMeBtn} onClick={(e) => handleNavClick(e, '#contact')}>
              <FiSend />
              <span>Hire Me</span>
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
