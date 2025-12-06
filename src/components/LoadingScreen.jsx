import { useEffect, useState } from 'react';
import { FiCode, FiUser, FiGithub } from 'react-icons/fi';

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
    <div className={`loading-screen ${!visible ? 'hidden' : ''}`}>
      <div className="loading-content">
        <div className="loading-icons">
          <div className="loading-icon-circle"><FiCode /></div>
          <div className="loading-icon-circle"><FiUser /></div>
          <div className="loading-icon-circle"><FiGithub /></div>
        </div>
        <h2 className="loading-name">Hello, I'm Vicky,</h2>
        <h3 className="loading-title">Frontend Developer</h3>
        <div className="loading-url">
          <span>www.vickynarvare.vercel.app</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
