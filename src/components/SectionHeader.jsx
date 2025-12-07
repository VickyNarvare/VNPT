import styles from '../styles/SectionHeader.module.css';

const SectionHeader = ({ title, subtitle, bgText }) => {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.bgText}>{bgText || title}</span>
      <h2 className={styles.title}>
        {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
