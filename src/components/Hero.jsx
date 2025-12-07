import { useTypingEffect } from '../hooks/useTypingEffect';
import { technologies, typingTexts } from '../data';
import { FiGitBranch, FiGithub, FiLayout, FiSmartphone, FiPlay } from 'react-icons/fi';
import { BsMouse } from 'react-icons/bs';
import { 
  SiHtml5, SiCss3, SiJavascript, SiSass, SiTailwindcss, SiReact, SiNextdotjs,
  SiFigma, SiNpm, SiSublimetext, SiGooglechrome, SiCanva, SiMysql, SiGreensock
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import styles from '../styles/Hero.module.css';

const iconMap = {
  'bxl-html5': SiHtml5,
  'bxl-css3': SiCss3,
  'bxl-javascript': SiJavascript,
  'bxl-sass': SiSass,
  'bxl-tailwind-css': SiTailwindcss,
  'bxl-react': SiReact,
  'bx-code-alt': SiNextdotjs,
  'bxl-git': FiGitBranch,
  'bxl-github': FiGithub,
  'bxl-figma': SiFigma,
  'bxl-nodejs': SiNpm,
  'bx-code': SiSublimetext,
  'bxl-chrome': SiGooglechrome,
  'bx-data': SiMysql,
  'bx-image': SiCanva,
  'bx-movie-play': SiGreensock,
  'bx-palette': FiLayout,
  'bx-devices': FiSmartphone,
  'bxl-visual-studio': VscVscode,
  'bx-play-circle': FiPlay,
};

// Create tripled array for seamless marquee loop
const tripledTechnologies = [...technologies, ...technologies, ...technologies];

const TechTag = ({ tech }) => {
  const IconComponent = iconMap[tech.icon];
  return (
    <div className={styles.techTag}>
      <span className={styles.techIcon} style={{ color: tech.color }}>
        {IconComponent ? <IconComponent size={20} /> : tech.name.charAt(0)}
      </span>
      <span className={styles.techName}>{tech.name}</span>
    </div>
  );
};

const Hero = () => {
  const displayText = useTypingEffect(typingTexts);

  return (
    <section id="home" className={`section ${styles.home}`}>
      <div className="container">
        <div className={styles.availabilityBadge}>
          <span className={styles.availabilityDot} />
          <span className={styles.availabilityText}>Available for Work</span>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            HELLO, I'M &lt;<span className={styles.highlight}>VICKY</span>/&gt;
          </h1>
          <p className={styles.heroSubtitle}>
            <span id="typing-text">{displayText}</span>
            <span className={styles.typingCursor}>|</span>
          </p>
          <p className={styles.heroDescription}>
            Expert Frontend Developer from Indore, India. I craft beautiful, responsive, and
            performant web experiences using <span className={styles.techHighlight}>React</span>, <span className={styles.techHighlight}>Next.js</span>, and modern technologies.
          </p>
          <div className={styles.heroButtons}>
            <a href="#works" className={styles.btnPrimary}>
              View My Projects <span className={styles.arrow}>→</span>
            </a>
            <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
          </div>
        </div>

        <div className={styles.techMarqueeContainer}>
          <div className={styles.techMarqueeWrapper}>
            <div className={styles.techMarquee}>
              <div className={`${styles.techMarqueeTrack} ${styles.marqueeLeft}`}>
                {tripledTechnologies.map((tech, index) => (
                  <TechTag key={`left-${index}`} tech={tech} />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.techMarqueeWrapper}>
            <div className={styles.techMarquee}>
              <div className={`${styles.techMarqueeTrack} ${styles.marqueeRight}`}>
                {tripledTechnologies.map((tech, index) => (
                  <TechTag key={`right-${index}`} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className={styles.scrollDown} aria-label="Scroll down">
          <div className={styles.scrollMouse}>
            <BsMouse />
            <span className={styles.scrollDot}></span>
          </div>
          <span className={styles.scrollText}>Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
