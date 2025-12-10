import { useState, useEffect, useRef, useMemo } from 'react';
import { projectsData } from '../data';
import { FiExternalLink, FiGithub, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from '../styles/Projects.module.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <article 
      className={styles.projectCard} 
      onClick={() => onClick(project)}
      itemScope 
      itemType="https://schema.org/CreativeWork"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
      aria-label={`View details for ${project.title}`}
    >
      <figure className={styles.cardImage}>
        <img 
          src={project.image} 
          alt={project.imageAlt}
          title={project.title}
          loading="lazy" 
          itemProp="image"
          width="400"
          height="300"
        />
        <figcaption className={styles.cardOverlay}>
          <h3 className={styles.cardTitle} itemProp="name">{project.title}</h3>
          <div className={styles.cardTech}>
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className={styles.techBadge} itemProp="keywords">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className={styles.techBadge}>+{project.technologies.length - 3}</span>
            )}
          </div>
          <span className={styles.viewMore}>Click to view details</span>
        </figcaption>
      </figure>
      <meta itemProp="description" content={project.description} />
      <link itemProp="url" href={project.demoLink} />
    </article>
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
          <img src={project.image} alt={project.imageAlt} title={project.title} />
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


const INITIAL_SHOW = 6;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const scrollPositionRef = useRef(0);

  // Get unique technologies for filter
  const filterOptions = useMemo(() => {
    const allTechs = projectsData.flatMap(p => p.technologies);
    const mainTechs = ['All', 'HTML', 'React'];
    return mainTechs.filter(tech => tech === 'All' || allTechs.some(t => t.toLowerCase().includes(tech.toLowerCase())));
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter(project => 
      project.technologies.some(tech => 
        tech.toLowerCase().includes(activeFilter.toLowerCase())
      )
    );
  }, [activeFilter]);

  // Show limited or all projects
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_SHOW);
  const hasMore = filteredProjects.length > INITIAL_SHOW;

  const openModal = (project) => {
    scrollPositionRef.current = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '0px';
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    requestAnimationFrame(() => {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'instant'
      });
    });
  };

  return (
    <section id="works" className={`section ${styles.worksSection}`} aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeader 
          title={<>My <span>Projects</span></>}
          subtitle="Click on any project to see more details"
          bgText="PROJECTS"
        />
        
        <div className={styles.filterButtons}>
          {filterOptions.map(filter => (
            <button 
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className={styles.projectsGrid}>
          {displayedProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={openModal}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className={styles.noProjects}>No projects found with this technology.</p>
        )}

        {hasMore && (
          <div className={styles.showMoreWrapper}>
            <button 
              className={styles.showMoreBtn}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>Show Less <FiChevronUp /></>
              ) : (
                <>Show More<FiChevronDown /></>
              )}
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
