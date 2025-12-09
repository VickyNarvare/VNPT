import { FiZap, FiAward, FiGitCommit, FiCode } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from '../styles/About.module.css';

const stats = [
  { icon: FiZap, value: '2+', label: 'Years Experience' },
  { icon: FiAward, value: '20+', label: 'Projects Done' },
  { icon: FiGitCommit, value: '150+', label: 'Git Commits' },
  { icon: FiCode, value: '25K+', label: 'Lines of Code' },
];

const About = () => {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeader 
          title={<>About <span>Me</span></>}
          bgText="ABOUT"
        />
        <article className={styles.aboutContent} itemScope itemType="https://schema.org/Person">
          {/* Left - Image */}
          <figure className={styles.aboutImageWrapper}>
            <div className={styles.imageFrame}>
              <div className={styles.frameBg}></div>
              <div className={styles.imageContainer}>
                <img
                  src="/images/VickyNarvare.webp"
                  alt="Vicky Narvare - Professional MERN Stack Developer from Indore, India"
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
          <div className={styles.aboutText}>
            <meta itemProp="name" content="Vicky Narvare" />
            <meta itemProp="jobTitle" content="MERN Stack Developer" />
            <p>
              Welcome to my portfolio! I'm a passionate <span className={styles.highlight} itemProp="jobTitle">MERN Developer</span> with a love for creating engaging user experiences. As a React & Next.js expert, I bring ideas to life through clean, efficient code and thoughtful design.
            </p>
            <p>
              Based in <span className={styles.highlight} itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">Indore</span>, <span itemProp="addressCountry">India</span></span>, I specialize in building responsive and performant web applications that not only look great but also provide exceptional user experiences with cutting-edge technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while sketching out new ideas. Always eager to take on new challenges!
            </p>
          </div>
        </article>

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
