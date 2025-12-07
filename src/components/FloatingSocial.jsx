import { socialLinksData } from '../data';
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/FloatingSocial.module.css';

const socialIconMap = {
  'bxl-github': FiGithub,
  'bxl-linkedin': FiLinkedin,
  'bxl-facebook': FiFacebook,
  'bxl-instagram': FiInstagram,
  'bxl-whatsapp': FaWhatsapp,
};

const FloatingSocial = () => {
  return (
    <div className={styles.floatingSocial}>
      <div className={styles.floatingSocialLinks}>
        {socialLinksData.map(social => {
          const IconComponent = socialIconMap[social.icon] || FiGithub;
          return (
            <a
              key={social.name}
              href={social.url}
              className={styles.floatingSocialLink}
              aria-label={social.name}
              data-tooltip={social.tooltip}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent />
              <span className={styles.tooltip}>{social.tooltip}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingSocial;
