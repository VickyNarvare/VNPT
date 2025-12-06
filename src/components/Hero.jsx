import { useTypingEffect } from '../hooks/useTypingEffect';
import { technologies, typingTexts } from '../data';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaSass, FaReact, FaGitAlt, FaGithub, FaFigma, FaNodeJs 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiMysql, SiCanva, SiGreensock, SiSublimetext, SiGooglechrome 
} from 'react-icons/si';
import { BiData, BiPalette, BiDevices, BiPlayCircle } from 'react-icons/bi';
import { VscVscode } from 'react-icons/vsc';

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
    <div className="tech-tag">
      <span className="tech-icon" style={{ color: tech.color }}>
        {IconComponent ? <IconComponent size={20} /> : tech.name.charAt(0)}
      </span>
      <span className="tech-name">{tech.name}</span>
    </div>
  );
};

const Hero = () => {
  const displayText = useTypingEffect(typingTexts);

  return (
    <section id="home" className="section">
      <div className="container">
        <div className="availability-badge">
          <span className="availability-dot" />
          <span className="availability-text">Available for Work</span>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">&lt;V<span className="i">i</span>CKY/&gt;</span>
          </h1>
          <p className="hero-subtitle">
            <span id="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </p>
          <p className="hero-description">
            Expert Frontend Developer from Indore, India. Welcome to my portfolio! I create beautiful, responsive, and
            performant web experiences using React, Next.js, JavaScript, HTML5, and CSS3. Specializing in modern web
            development and UI/UX design.
          </p>
          <div className="hero-buttons">
            <a href="#works" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>

        <div className="tech-marquee-container">
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee">
              <div className="tech-marquee-track marquee-left">
                {tripledTechnologies.map((tech, index) => (
                  <TechTag key={`left-${index}`} tech={tech} />
                ))}
              </div>
            </div>
          </div>
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee">
              <div className="tech-marquee-track marquee-right">
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
