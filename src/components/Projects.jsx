import { useState, useEffect, useRef } from 'react';
import { projectsData } from '../data';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import styles from '../styles/Projects.module.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className={styles.projectCard} onClick={() => onClick(project)}>
      <div className={styles.cardImage}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <div className={styles.cardOverlay}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <div className={styles.cardTech}>
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className={styles.techBadge}>{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className={styles.techBadge}>+{project.technologies.length - 3}</span>
            )}
          </div>
          <span className={styles.viewMore}>Click to view details</span>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  // Prevent scroll propagation on modal content
  const handleWheel = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()} onWheel={handleWheel}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>
        
        <div className={styles.modalImage}>
          <img src={project.image} alt={project.imageAlt} />
        </div>
        
        <div className={styles.modalBody}>
          <span className={styles.modalNumber}>Project 0{project.id}</span>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalDescription}>{project.description}</p>
          
          {project.features && (
            <div className={styles.modalFeatures}>
              <h4>Key Features</h4>
              <ul className={styles.featuresList}>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className={styles.modalTech}>
            <h4>Technologies Used</h4>
            <div className={styles.techList}>
              {project.technologies.map(tech => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.modalButtons}>
            <a 
              href={project.demoLink} 
              className={styles.btnDemo}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiExternalLink /> Live Demo
            </a>
            <a 
              href={project.codeLink} 
              className={styles.btnCode}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiGithub /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollPositionRef = useRef(0);

  const openModal = (project) => {
    // Save scroll position before opening modal
    scrollPositionRef.current = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '0px';
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    // Use requestAnimationFrame to ensure DOM updates before scrolling
    requestAnimationFrame(() => {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'instant'
      });
    });
  };

  return (
    <section id="works" className={`section ${styles.worksSection}`}>
      <div className="container">
        <h2 className={`section-title ${styles.projectsTitle}`}>
          <span className="accent-text">My Projects</span>
        </h2>
        <p className={styles.projectsSubtitle}>
          Click on any project to see more details
        </p>
        
        <div className={styles.projectsGrid}>
          {projectsData.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={openModal}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
