import { FiZap, FiAward, FiGitCommit, FiCode } from 'react-icons/fi';
import styles from '../styles/About.module.css';

const stats = [
  { icon: FiZap, value: '2+', label: 'Years Experience' },
  { icon: FiAward, value: '20+', label: 'Projects Done' },
  { icon: FiGitCommit, value: '150+', label: 'Git Commits' },
  { icon: FiCode, value: '25K+', label: 'Lines of Code' },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          About <span className="accent-text">Me</span>
        </h2>
        <div className={styles.aboutContent}>
          {/* Left - Image */}
          <div className={styles.aboutImageWrapper}>
            <div className={styles.imageFrame}>
              <div className={styles.frameBg}></div>
              <div className={styles.imageContainer}>
                <img
                  src="/images/VickyNarvare.webp"
                  alt="Vicky Narvare - Professional Frontend Developer"
                  loading="eager"
                />
              </div>
              <div className={styles.expBadge}>
                <span className={styles.expNumber}>2+</span>
                <span className={styles.expText}>Years Exp.</span>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className={styles.aboutText}>
            <p>
              Welcome to my portfolio! I'm a passionate <span className={styles.highlight}>MERN Developer</span> with a love for creating engaging user experiences. As a React & Next.js expert, I bring ideas to life through clean, efficient code and thoughtful design.
            </p>
            <p>
              Based in <span className={styles.highlight}>Indore, India</span>, I specialize in building responsive and performant web applications that not only look great but also provide exceptional user experiences with cutting-edge technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while sketching out new ideas. Always eager to take on new challenges!
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <stat.icon className={styles.statIcon} />
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
