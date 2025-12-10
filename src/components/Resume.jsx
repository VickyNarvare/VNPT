import { FiDownload, FiEye, FiFileText } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from '../styles/Resume.module.css';

const Resume = () => {
  const resumeUrl = '/resume/Vicky_Narvare_Resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vicky_Narvare_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="section" aria-labelledby="resume-heading">
      <div className="container">
        <SectionHeader 
          title={<>My <span>Resume</span></>}
          subtitle="Download my resume to know more about my experience"
          bgText="RESUME"
        />
        <div className={styles.resumeContainer}>
          <div className={styles.resumeCard}>
            <div className={styles.iconWrapper}>
              <FiFileText className={styles.fileIcon} />
            </div>
            <h3 className={styles.title}>Vicky Narvare</h3>
            <p className={styles.subtitle}>MERN Stack Developer</p>
            <p className={styles.description}>
              2+ years of experience in building full-stack web applications with MongoDB, Express.js, React, and Node.js.
            </p>
            <div className={styles.buttons}>
              <button onClick={handleDownload} className={styles.btnPrimary}>
                <FiDownload /> Download CV
              </button>
              <button onClick={handleView} className={styles.btnSecondary}>
                <FiEye /> View Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
