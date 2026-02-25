import { useEffect, useState } from 'react';
import styles from '../styles/LoadingScreen.module.css';

const LoadingScreen = ({ onComplete }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsHidden(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      }, 300);
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className={`${styles.loadingScreen} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.loadingContent}>
        {/* Animated Progress Circle */}
        <div className={styles.circleContainer}>
          <svg className={styles.progressRing} width="200" height="200">
            {/* Outer Glow Circle */}
            <circle
              className={styles.glowCircle}
              stroke="rgba(64, 112, 244, 0.2)"
              strokeWidth="1"
              fill="transparent"
              r="90"
              cx="100"
              cy="100"
            />
            {/* Background Circle */}
            <circle
              stroke="rgba(64, 112, 244, 0.15)"
              strokeWidth="6"
              fill="transparent"
              r="80"
              cx="100"
              cy="100"
            />
            {/* Progress Circle */}
            <circle
              className={styles.progressRingCircle}
              stroke="url(#gradient)"
              strokeWidth="6"
              fill="transparent"
              r="80"
              cx="100"
              cy="100"
              style={{
                strokeDasharray: `${2 * Math.PI * 80}`,
                strokeDashoffset: `${2 * Math.PI * 80 * (1 - progress / 100)}`
              }}
            />
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4070f4" />
                <stop offset="50%" stopColor="#3056d3" />
                <stop offset="100%" stopColor="#4070f4" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center Content */}
          <div className={styles.circleContent}>
            <div className={styles.loadingIcons}>
              <div className={`${styles.loadingIconBox} ${styles.icon1}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.25 2.1l-.35.35L8.23 8.12a4.5 4.5 0 0 0 0 6.36l5.67 5.67.35.35.35-.35 5.67-5.67a4.5 4.5 0 0 0 0-6.36l-5.67-5.67-.35-.35zm0 2.12l5.67 5.67a2.5 2.5 0 0 1 0 3.54l-5.67 5.67-5.67-5.67a2.5 2.5 0 0 1 0-3.54l5.67-5.67z"/>
                </svg>
              </div>
              <div className={`${styles.loadingIconBox} ${styles.icon2}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <div className={`${styles.loadingIconBox} ${styles.icon3}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            <div className={styles.progressText}>{Math.floor(progress)}%</div>
          </div>
        </div>

        <h1 className={styles.loadingName}>
          Vicky <span className={styles.highlight}>Narvare</span>
        </h1>

        <h2 className={styles.loadingTitle}>Full Stack Developer</h2>

        <div className={styles.underline}></div>

        <div className={styles.loadingUrl}>
          <div className={styles.dot}></div>
          <span>vickynarware.vercel.app</span>
        </div>

        {/* Loading Text */}
        <div className={styles.loadingTextContainer}>
          <span className={styles.loadingText}>Loading Experience</span>
          <div className={styles.dots}>
            <span className={styles.dot1}>.</span>
            <span className={styles.dot2}>.</span>
            <span className={styles.dot3}>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
