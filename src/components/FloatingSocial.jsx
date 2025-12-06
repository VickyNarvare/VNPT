import { socialLinksData } from '../data';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/FloatingSocial.module.css';

const socialIconMap = {
  'bxl-github': FaGithub,
  'bxl-linkedin': FaLinkedin,
  'bxl-facebook': FaFacebook,
  'bxl-instagram': FaInstagram,
  'bxl-whatsapp': FaWhatsapp,
};

const FloatingSocial = () => {
  return (
    <div className={styles.floatingSocial}>
      <div className={styles.floatingSocialLinks}>
        {socialLinksData.map(social => {
          const IconComponent = socialIconMap[social.icon] || FaGithub;
          return (
            <a
              key={social.name}
              href={social.url}
              className={styles.floatingSocialLink}
              aria-label={social.name}
              title={social.tooltip}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingSocial;
