import { useState } from 'react';
import { servicesData } from '../data';
import { FiCode, FiLayout, FiGrid, FiBox, FiChevronDown } from 'react-icons/fi';
import styles from '../styles/Services.module.css';

const iconMap = {
  'bx-code-alt': FiCode,
  'bx-palette': FiLayout,
  'bx-grid-alt': FiGrid,
  'bx-code-block': FiBox,
};

const ServiceCard = ({ service }) => {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = iconMap[service.icon] || FiCode;

  return (
    <div className={`${styles.serviceCard} ${expanded ? styles.expanded : ''}`}>
      <div className={styles.serviceHeader}>
        <div className={styles.serviceIcon}>
          <IconComponent />
        </div>
        <button className={styles.serviceToggle} aria-label="Toggle service details" onClick={() => setExpanded(!expanded)}>
          <FiChevronDown className={styles.serviceArrow} />
        </button>
      </div>
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceDesc}>{service.description}</p>
      <div className={styles.serviceDetails}>
        <h4 className={styles.servicesIncludeTitle}>Services Include:</h4>
        <ul className={styles.servicesList}>
          {service.services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.serviceFooter}>
        <button className={styles.serviceLinkToggle} onClick={() => setExpanded(false)}>Click to minimize</button>
        <button className={styles.serviceLinkExpand} onClick={() => setExpanded(true)}>Click for details</button>
        <a href="#contact" className={styles.serviceBtn}>Custom Quote</a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <h2 className={styles.servicesTitle}>
          My <span>Services</span>
        </h2>
        <p className={styles.servicesDescription}>
          As a dedicated Frontend Developer from Indore, I specialize in building modern, responsive web applications
          using React, Next.js, and cutting-edge technologies. I transform design concepts into high-performance,
          user-friendly digital experiences that drive engagement and results.
        </p>
        <div className={styles.servicesGrid}>
          {servicesData.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
