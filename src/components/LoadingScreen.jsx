import { useEffect, useState } from 'react';
import { FiCode, FiUser, FiGithub } from 'react-icons/fi';
import styles from '../styles/LoadingScreen.module.css';

const LoadingScreen = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className={`${styles.loadingScreen} ${!visible ? styles.hidden : ''}`}>
      <div className={styles.loadingContent}>
        <div className={styles.loadingIcons}>
          <div className={styles.loadingIconCircle}><FiCode /></div>
          <div className={styles.loadingIconCircle}><FiUser /></div>
          <div className={styles.loadingIconCircle}><FiGithub /></div>
        </div>
        <h2 className={styles.loadingName}>Hello, I'm Vicky,</h2>
        <h3 className={styles.loadingTitle}>Frontend Developer</h3>
        <div className={styles.loadingUrl}>
          <span>www.vickynarvare.vercel.app</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
