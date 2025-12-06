import { useTypingEffect } from '../hooks/useTypingEffect';
import { technologies, typingTexts } from '../data';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaSass, FaReact, FaGitAlt, FaGithub, FaFigma, FaNodeJs 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiCanva, SiGreensock, SiSublimetext, SiGooglechrome 
} from 'react-icons/si';
import { BiData, BiPalette, BiDevices, BiPlayCircle } from 'react-icons/bi';
import { VscVscode } from 'react-icons/vsc';
import styles from '../styles/Hero.module.css';

const iconMap = {
  'bxl-html5': FaHtml5,
  'bxl-css3': FaCss3Alt,
  'bxl-javascript': FaJs,
  'bxl-sass': FaSass,
  'bxl-tailwind-css': SiTailwindcss,
  'bxl-react': FaReact,
  'bx-code-alt': SiNextdotjs,
  'bxl-git': FaGitAlt,
  'bxl-github': FaGithub,
  'bxl-figma': FaFigma,
  'bxl-nodejs': FaNodeJs,
  'bx-code': SiSublimetext,
  'bxl-chrome': SiGooglechrome,
  'bx-data': BiData,
  'bx-image': SiCanva,
  'bx-movie-play': SiGreensock,
  'bx-palette': BiPalette,
  'bx-devices': BiDevices,
  'bxl-visual-studio': VscVscode,
  'bx-play-circle': BiPlayCircle,
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
      </div>
    </section>
  );
};

export default Hero;
