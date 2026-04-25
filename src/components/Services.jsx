import { useState, useRef, useEffect } from 'react';
import { servicesData } from '../data';
import { FiCode, FiLayout, FiGrid, FiBox, FiChevronDown, FiServer, FiEdit3, FiCloud } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from '../styles/Services.module.css';
import anim from '../styles/animations.module.css';

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
        <button className={styles.serviceLinkToggle} onClick={() => setExpanded(false)}>Show less</button>
        <button className={styles.serviceLinkExpand} onClick={() => setExpanded(true)}>View details</button>
        <a href="#contact" className={styles.serviceBtn}>Get a Quote</a>
      </div>
    </article>
  );
};

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, i]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={`section ${styles.servicesSection}`} aria-labelledby="services-heading">
      <div className="container">
        <SectionHeader
          title={<>What I <span>Offer</span></>}
          subtitle="Development services I provide for clients and businesses"
          bgText="SERVICES"
        />
        <div className={styles.servicesGrid} itemScope itemType="https://schema.org/ItemList">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`${anim.fadeUp} ${visibleCards.has(index) ? anim.visible : ''}`}
              style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
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
