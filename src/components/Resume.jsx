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

  const resumeHighlights = [
    { label: 'Experience', value: '2+ Years' },
    { label: 'Projects', value: '8 Live' },
    { label: 'Stack', value: 'MERN' },
    { label: 'Availability', value: 'Immediate' }
  ];

  return (
    <section id="resume" className="section" aria-labelledby="resume-heading">
      <div className="container">
        <SectionHeader 
          title={<>My <span>Resume</span></>}
          subtitle="Download my resume for complete details on experience and skills"
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
              MERN Stack Developer with 2+ years of experience building full-stack web applications. Delivered 8 live projects including e-commerce platforms, admin dashboards, and interactive web apps. Experienced in authentication systems, RESTful APIs, and production deployments. Seeking MERN/React Developer roles—open to freelance and full-time opportunities.
            </p>
            
            <div className={styles.highlights}>
              {resumeHighlights.map((item, index) => (
                <div key={index} className={styles.highlightItem}>
                  <span className={styles.highlightLabel}>{item.label}</span>
                  <span className={styles.highlightValue}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className={styles.buttons}>
              <button onClick={handleDownload} className={styles.btnPrimary}>
                <FiDownload /> Download Resume
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
