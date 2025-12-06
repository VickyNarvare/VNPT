import { useState } from 'react';
import { servicesData } from '../data';
import { FiCode, FiLayout, FiGrid, FiBox, FiChevronDown } from 'react-icons/fi';

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
    <div className={`service-card ${expanded ? 'expanded' : ''}`}>
      <div className="service-header">
        <div className="service-icon">
          <IconComponent />
        </div>
        <button className="service-toggle" aria-label="Toggle service details" onClick={() => setExpanded(!expanded)}>
          <FiChevronDown className="service-arrow" />
        </button>
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <div className="service-details">
        <h4 className="services-include-title">Services Include:</h4>
        <ul className="services-list">
          {service.services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="service-footer">
        <button className="service-link-toggle" onClick={() => setExpanded(false)}>Click to minimize</button>
        <button className="service-link-expand" onClick={() => setExpanded(true)}>Click for details</button>
        <a href="#contact" className="service-btn">Custom Quote</a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="services-title">
          My <span>Services</span>
        </h2>
        <p className="services-description">
          As a dedicated Frontend Developer from Indore, I specialize in building modern, responsive web applications
          using React, Next.js, and cutting-edge technologies. I transform design concepts into high-performance,
          user-friendly digital experiences that drive engagement and results.
        </p>
        <div className="services-grid">
          {servicesData.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
