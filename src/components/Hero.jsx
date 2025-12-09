import { useTypingEffect } from '../hooks/useTypingEffect';
import { technologies, typingTexts } from '../data';
import { FiGitBranch, FiGithub, FiLayout, FiSmartphone, FiPlay } from 'react-icons/fi';
import { BsMouse } from 'react-icons/bs';
import { 
  SiHtml5, SiCss3, SiJavascript, SiSass, SiTailwindcss, SiReact, SiNextdotjs,
  SiFigma, SiNpm, SiSublimetext, SiGooglechrome, SiCanva, SiMysql, SiGreensock,
  SiMongodb, SiExpress, SiNodedotjs
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import styles from '../styles/Hero.module.css';

// MERN Stack icons with colors
const mernStack = [
  { icon: SiMongodb, color: '#47A248', name: 'M' },
  { icon: SiExpress, color: '#000000', name: 'E' },
  { icon: SiReact, color: '#61DAFB', name: 'R' },
  { icon: SiNodedotjs, color: '#339933', name: 'N' },
];

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
          
          <div className={styles.mernStack}>
            {mernStack.map((tech, index) => (
              <div key={index} className={styles.mernIcon} style={{ color: tech.color }}>
                <tech.icon />
              </div>
            ))}
          </div>

          <p className={styles.heroDescription}>
            Expert MERN Stack Developer from Indore, India. I craft beautiful, responsive, and
            performant full-stack web applications using <span className={styles.techHighlight}>MongoDB</span>, <span className={styles.techHighlight}>Express</span>, <span className={styles.techHighlight}>React</span>, and <span className={styles.techHighlight}>Node.js</span>.
          </p>
          <div className={styles.heroButtons}>
            <a href="#contact" className={styles.btnPrimary}>
              Hire Me <span className={styles.arrow}>→</span>
            </a>
            <a href="#works" className={styles.btnSecondary}>View My Projects</a>
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
        </a>
      </div>
    </section>
  );
};

export default Hero;
