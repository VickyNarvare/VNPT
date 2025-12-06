import { useEffect, useState } from 'react';
import { FiCode, FiUser } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import styles from '../styles/LoadingScreen.module.css';

const LoadingScreen = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 600);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className={`${styles.loadingScreen} ${fadeOut ? styles.hidden : ''}`}>
      <div className={styles.loadingContent}>
        {/* Icons */}
        <div className={styles.loadingIcons}>
          <div className={`${styles.loadingIconBox} ${styles.icon1}`}>
            <FiCode />
          </div>
          <div className={`${styles.loadingIconBox} ${styles.icon2}`}>
            <FiUser />
          </div>
          <div className={`${styles.loadingIconBox} ${styles.icon3}`}>
            <FaGithub />
          </div>
        </div>

        {/* Name */}
        <h1 className={styles.loadingName}>
          HELLO, I'M <span className={styles.highlight}>VICKY</span>
        </h1>

        {/* Title */}
        <h2 className={styles.loadingTitle}>Frontend Developer</h2>

        {/* Underline */}
        <div className={styles.underline}></div>

        {/* URL */}
        <div className={styles.loadingUrl}>
          <span className={styles.dot}></span>
          <span>www.vickynarvare.vercel.app</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
