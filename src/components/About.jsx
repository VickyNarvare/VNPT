import { useEffect, useRef, useState } from 'react';
import { FiZap, FiAward, FiGitCommit, FiCode } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import useInView from '../hooks/useInView';
import styles from '../styles/About.module.css';
import anim from '../styles/animations.module.css';

const stats = [
  { icon: FiZap,       value: 2,      suffix: '+', label: 'Years Experience' },
  { icon: FiAward,     value: 8,      suffix: '',  label: 'Live Projects' },
  { icon: FiGitCommit, value: 200,    suffix: '+', label: 'Git Commits' },
  { icon: FiCode,      value: 'MERN', suffix: '',  label: 'Stack Focus' },
];

// Animated number counter
const Counter = ({ target, suffix, active }) => {
  const isString = typeof target === 'string';
  const [count, setCount] = useState(isString ? target : 0);

  useEffect(() => {
    if (!active || isString) {
      if (isString) setCount(target);
      return;
    }
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { 
        setCount(target); 
        clearInterval(timer); 
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, isString]);

  return <span>{count}{suffix}</span>;
};

const About = () => {
  const [sectionRef, sectionVisible] = useInView();
  const [statsRef, statsVisible] = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="section" aria-labelledby="about-heading" ref={sectionRef}>
      <div className="container">
        <SectionHeader
          title={<>About <span>Me</span></>}
          bgText="ABOUT"
        />
        <article className={styles.aboutContent} itemScope itemType="https://schema.org/Person">
          {/* Left - Image */}
          <figure className={`${anim.fadeLeft} ${sectionVisible ? anim.visible : ''} ${styles.aboutImageWrapper}`}>
            <div className={styles.imageFrame}>
              <div className={styles.frameBg}></div>
              <div className={styles.imageContainer}>
                <img
                  src="/images/VickyNarvare.webp"
                  alt="Vicky Narvare - Professional MERN Stack Developer from Indore, India"
                  title="Vicky Narvare - MERN Stack Developer"
                  loading="eager"
                  itemProp="image"
                  width="300"
                  height="300"
                />
              </div>
              <div className={styles.expBadge}>
                <span className={styles.expNumber}>2+</span>
                <span className={styles.expText}>Years Exp.</span>
              </div>
            </div>
          </figure>

          {/* Right - Text */}
          <div className={`${anim.fadeRight} ${sectionVisible ? anim.visible : ''} ${styles.aboutText}`}>
            <meta itemProp="name" content="Vicky Narvare" />
            <meta itemProp="jobTitle" content="Full-Stack Developer" />
            <p>
              I'm Vicky Narvare, a <span className={styles.highlight} itemProp="jobTitle">MERN Stack Developer</span> based in <span className={styles.highlight} itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">Indore</span>, <span itemProp="addressCountry">India</span></span>. I specialize in building full-stack web applications using <span className={styles.highlight}>MongoDB</span>, <span className={styles.highlight}>Express.js</span>, <span className={styles.highlight}>React</span>, and <span className={styles.highlight}>Node.js</span>.
            </p>
            <p>
              Over the past 2+ years, I've delivered 8 live projects including e-commerce platforms with shopping carts and checkout flows, business websites with admin dashboards, and interactive web applications with animations and real-time features. I handle the complete development cycle—from database design and API development to responsive UI implementation and deployment.
            </p>
            <p>
              I write clean, maintainable code and work comfortably both independently and as part of a team. I'm currently seeking MERN Stack or React Developer roles—open to both freelance projects and full-time opportunities where I can contribute, solve meaningful problems, and continue growing as a developer.
            </p>
          </div>
        </article>

        {/* Stats */}
        <div className={styles.statsContainer} ref={statsRef}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${anim.fadeUp} ${statsVisible ? anim.visible : ''} ${styles.statItem}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <stat.icon className={styles.statIcon} />
              <span className={styles.statValue}>
                <Counter target={stat.value} suffix={stat.suffix} active={statsVisible} />
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
