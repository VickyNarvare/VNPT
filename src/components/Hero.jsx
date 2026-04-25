import { useEffect, useState } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { technologies, typingTexts } from '../data';
import { FiGitBranch, FiGithub, FiLayout, FiSmartphone, FiPlay } from 'react-icons/fi';
import { BsMouse } from 'react-icons/bs';
import { FaCss3Alt } from 'react-icons/fa';
import { 
  SiHtml5, SiJavascript, SiSass, SiTailwindcss, SiReact, SiNextdotjs,
  SiFigma, SiNpm, SiSublimetext, SiGooglechrome, SiCanva, SiMysql, SiGreensock,
  SiMongodb, SiExpress, SiNodedotjs
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import styles from '../styles/Hero.module.css';
import anim from '../styles/animations.module.css';

// MERN Stack icons with colors
const mernStack = [
  { icon: SiMongodb, color: '#47A248', name: 'M' },
  { icon: SiExpress, color: '#000000', name: 'E' },
  { icon: SiReact, color: '#61DAFB', name: 'R' },
  { icon: SiNodedotjs, color: '#339933', name: 'N' },
];

const iconMap = {
  'bxl-html5': SiHtml5,
  'bxl-css3': FaCss3Alt,
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
  const [mounted, setMounted] = useState(false);

  // Trigger entrance after first paint
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const v = mounted ? anim.visible : '';

  return (
    <section id="home" className={`section ${styles.home}`}>
      <div className="container">
        <div className={`${anim.fadeUp} ${v} ${anim.delay1} ${styles.availabilityBadge}`}>
          <span className={styles.availabilityDot} />
          <span className={styles.availabilityText}>Available for Work</span>
        </div>

        <div className={styles.heroContent}>
          <h1 className={`${anim.fadeUp} ${v} ${anim.delay2} ${styles.heroTitle}`}>
            Vicky Narvare
          </h1>
          <p className={`${anim.fadeUp} ${v} ${anim.delay3} ${styles.heroSubtitle}`}>
            <span id="typing-text">{displayText}</span>
            <span className={styles.typingCursor}>|</span>
          </p>
          
          <div className={`${anim.fadeUp} ${v} ${anim.delay3} ${styles.mernStack}`}>
            {mernStack.map((tech, index) => (
              <div key={index} className={styles.mernIcon} style={{ color: tech.color }}>
                <tech.icon />
              </div>
            ))}
          </div>

          <p className={`${anim.fadeUp} ${v} ${anim.delay4} ${styles.heroDescription}`}>
            I build full-stack web applications using the <span className={styles.techHighlight}>MERN stack</span>—from e-commerce platforms and admin dashboards to interactive landing pages. With 2+ years of experience and 8 live projects deployed, I deliver clean code and scalable solutions. Based in Indore, India, and available for freelance projects and full-time roles.
          </p>
          <div className={`${anim.fadeUp} ${v} ${anim.delay5} ${styles.heroButtons}`}>
            <a href="#works" className={styles.btnPrimary}>
              View My Work <span className={styles.arrow}>→</span>
            </a>
            <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
          </div>
        </div>

        <div className={`${anim.fadeIn} ${v} ${anim.delay6} ${styles.techMarqueeContainer}`}>
          <div className={styles.techMarqueeWrapper}>
            <div className={styles.techMarquee}>
              <div className={`${styles.techMarqueeTrack} ${styles.marqueeLeft}`}>
                {tripledTechnologies.map((tech, index) => (
                  <TechTag key={`left-${index}`} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className={`${anim.fadeIn} ${v} ${anim.delay6} ${styles.scrollDown}`} aria-label="Scroll down">
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
