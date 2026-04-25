import { useState } from 'react';
import { toast } from 'react-toastify';
import { socialLinksData } from '../data';
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheckCircle, FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import useInView from '../hooks/useInView';
import styles from '../styles/Contact.module.css';
import anim from '../styles/animations.module.css';

const socialIconMap = {
  'bxl-github': FiGithub,
  'bxl-linkedin': FiLinkedin,
  'bxl-facebook': FiFacebook,
  'bxl-instagram': FiInstagram,
  'bxl-whatsapp': FaWhatsapp,
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [sectionRef, sectionVisible] = useInView();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all fields.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    
    toast.warning('Contact section is not working right now. Please try emailing me instead!');
    
    // Reset form after submit
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const copyEmail = async () => {
    const email = 'vickynarvare51@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error('Failed to copy email. Please copy manually: ' + email);
    }
  };

  const contactSocials = socialLinksData.filter(s => s.name !== 'Instagram');

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading" ref={sectionRef}>
      <div className="container">
        <SectionHeader
          title={<>Get In <span>Touch</span></>}
          bgText="CONTACT"
        />

        <div className={`${anim.fadeUp} ${sectionVisible ? anim.visible : ''}`}>
          <div className={styles.availabilityNotice}>
          <div className={styles.availabilityNoticeIcon}>
            <FiCheckCircle />
          </div>
          <div className={styles.availabilityNoticeContent}>
            <h3>Available for Work</h3>
            <p>I'm currently available for freelance projects and full-time opportunities.</p>
          </div>
          </div>
        </div>

        <div className={styles.contactContent}>
          <div className={`${anim.fadeLeft} ${sectionVisible ? anim.visible : ''} ${anim.delay2} ${styles.contactInfo}`}>
            <h3>Let's Work Together</h3>
            <p>I'm currently available for freelance projects and full-time opportunities. The fastest way to reach me is via email or WhatsApp—I typically respond within 24 hours on weekdays.</p>
            <address className={styles.contactDetails} itemScope itemType="https://schema.org/Person">
              <meta itemProp="name" content="Vicky Narvare" />
              <div className={styles.contactItem}>
                <FiMail aria-hidden="true" />
                <a href="mailto:vickynarvare51@gmail.com" itemProp="email">vickynarvare51@gmail.com</a>
                <button className={styles.copyEmailBtn} onClick={copyEmail} aria-label="Copy email address">
                  {copied ? <FiCheckCircle /> : <FiCopy />}
                  <span className={styles.copyText}>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className={styles.contactItem}>
                <FiPhone aria-hidden="true" />
                <a href="tel:+916267607029" itemProp="telephone">+91 6267607029</a>
              </div>
              <div className={styles.contactItem}>
                <FaWhatsapp aria-hidden="true" />
                <a href="https://wa.me/916267607029" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
              <div className={styles.contactItem} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <FiMapPin aria-hidden="true" />
                <span><span itemProp="addressLocality">Indore</span>, <span itemProp="addressCountry">India</span></span>
              </div>
            </address>
            <div className={styles.socialLinks}>
              {contactSocials.map(social => {
                const IconComponent = socialIconMap[social.icon] || FiGithub;
                return (
                  <a key={social.name} href={social.url} className={styles.socialLink} aria-label={social.name} data-tooltip={social.tooltip} target="_blank" rel="noopener noreferrer">
                    <IconComponent />
                    <span className={styles.tooltip}>{social.tooltip}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className={`${anim.fadeRight} ${sectionVisible ? anim.visible : ''} ${anim.delay3} ${styles.contactFormWrapper}`}>
            <div className={styles.formNotice}>
              <p><strong>Note:</strong> The contact form is currently under development. Please use email or WhatsApp to reach me directly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
