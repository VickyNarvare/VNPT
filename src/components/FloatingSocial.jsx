import { socialLinksData } from '../data';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialIconMap = {
  'bxl-github': FaGithub,
  'bxl-linkedin': FaLinkedin,
  'bxl-facebook': FaFacebook,
  'bxl-instagram': FaInstagram,
  'bxl-whatsapp': FaWhatsapp,
};

const FloatingSocial = () => {
  return (
    <div className="floating-social">
      <div className="floating-social-links">
        {socialLinksData.map(social => {
          const IconComponent = socialIconMap[social.icon] || FaGithub;
          return (
            <a
              key={social.name}
              href={social.url}
              className="floating-social-link"
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
