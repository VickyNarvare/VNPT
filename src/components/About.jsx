import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          About <span className="accent-text">Me</span>
        </h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Welcome to my portfolio! I'm a passionate frontend developer with a love for creating
              engaging user experiences. As a React & Next.js expert, I bring ideas to life through clean, efficient
              code and thoughtful design.
            </p>
            <p>
              Based in Indore, India, I specialize in building responsive and performant web applications
              that not only look great but also provide exceptional user experiences. I have hands-on
              experience working with cutting-edge technologies like React, Next.js, and modern JavaScript
              frameworks. I'm well-versed in creating pixel-perfect designs from Figma mockups, implementing
              responsive layouts that work seamlessly across all devices, and optimizing applications for
              performance and SEO.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source
              projects, or enjoying a good cup of coffee while sketching out new ideas. I'm always eager
              to take on new challenges and collaborate with teams to build amazing digital experiences.
            </p>
          </div>
          <div className={styles.aboutImage}>
            <img
              src="/images/VickyNarvare.webp"
              alt="Vicky Narvare - Professional Frontend Developer"
              loading="eager"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
