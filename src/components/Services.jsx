import { useState } from 'react';
import { servicesData } from '../data';
import { FiCode, FiLayout, FiGrid, FiBox, FiChevronDown, FiServer, FiEdit3, FiCloud } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from '../styles/Services.module.css';

const iconMap = {
  'bx-code-alt': FiCode,
  'bx-palette': FiLayout,
  'bx-grid-alt': FiGrid,
  'bx-code-block': FiBox,
  'bx-server': FiServer,
  'bx-brush': FiEdit3,
  'bx-cloud-upload': FiCloud,
};

const ServiceCard = ({ service }) => {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = iconMap[service.icon] || FiCode;

  return (
    <article className={`${styles.serviceCard} ${expanded ? styles.expanded : ''}`} itemProp="item" itemScope itemType="https://schema.org/Service">
      <div className={styles.serviceHeader}>
        <div className={styles.serviceIcon} aria-hidden="true">
          <IconComponent />
        </div>
        <button className={styles.serviceToggle} aria-label="Toggle service details" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
          <FiChevronDown className={styles.serviceArrow} />
        </button>
      </div>
      <h3 className={styles.serviceTitle} itemProp="name">{service.title}</h3>
      <p className={styles.serviceDesc} itemProp="description">{service.description}</p>
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
    </article>
  );
};

const Services = () => {
  return (
    <section id="services" className={`section ${styles.servicesSection}`} aria-labelledby="services-heading">
      <div className="container">
        <SectionHeader 
          title={<>My <span>Services</span></>}
          subtitle="As a dedicated MERN Stack Developer from Indore, I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js."
          bgText="SERVICES"
        />
        <div className={styles.servicesGrid} itemScope itemType="https://schema.org/ItemList">
          {servicesData.map((service, index) => (
            <div key={service.id} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="position" content={String(index + 1)} />
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
