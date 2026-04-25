import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { projectsData } from '../data';
import { FiExternalLink, FiGithub, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from '../styles/Projects.module.css';

// ── Card skeleton shown while image loads ──────────────────────────────────
const CardSkeleton = () => <div className={styles.cardSkeleton} aria-hidden="true" />;

// ── Single project card ────────────────────────────────────────────────────
const ProjectCard = ({ project, onClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

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
        {!imgLoaded && <CardSkeleton />}
        <img
          src={project.image}
          alt={project.imageAlt}
          title={project.title}
          loading="lazy"
          itemProp="image"
          width="400"
          height="300"
          onLoad={() => setImgLoaded(true)}
          style={{ opacity: imgLoaded ? 1 : 0 }}
        />

        {/* Always-visible title strip (important for touch devices) */}
        <div className={styles.cardStrip}>
          <h3 className={styles.cardStripTitle} itemProp="name">{project.title}</h3>
        </div>

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
          <span className={styles.viewMore}>View details</span>
        </figcaption>
      </figure>
      <meta itemProp="description" content={project.description} />
      <link itemProp="url" href={project.demoLink} />
    </article>
  );
};

// ── Modal ──────────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        <div className={styles.modalImage}>
          <img src={project.image} alt={project.imageAlt} title={project.title} />
        </div>

        <div className={styles.modalBody}>
          <span className={styles.modalNumber}>Project 0{project.id}</span>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          {project.subtitle && <p className={styles.modalSubtitle}>{project.subtitle}</p>}
          <p className={styles.modalDescription}>{project.description}</p>

          {(project.problem || project.solution) && (
            <div className={styles.modalContext}>
              {project.problem && (
                <div className={styles.contextItem}>
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className={styles.contextItem}>
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>
              )}
            </div>
          )}

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

          {project.role && (
            <div className={styles.modalRole}>
              <h4>Role</h4>
              <p>{project.role}</p>
            </div>
          )}

          {project.learned && (
            <div className={styles.modalLearned}>
              <h4>What I Learned</h4>
              <p>{project.learned}</p>
            </div>
          )}

          <div className={styles.modalButtons}>
            <a href={project.demoLink} className={styles.btnDemo} target="_blank" rel="noopener noreferrer">
              <FiExternalLink /> Live Demo
            </a>
            <a href={project.codeLink} className={styles.btnCode} target="_blank" rel="noopener noreferrer">
              <FiGithub /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main section ───────────────────────────────────────────────────────────
const INITIAL_SHOW = 6;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const scrollPositionRef = useRef(0);
  const cardRefs = useRef([]);

  const filterOptions = useMemo(() => {
    const allTechs = projectsData.flatMap(p => p.technologies);
    const mainTechs = ['All', 'HTML', 'React'];
    return mainTechs.filter(tech => tech === 'All' || allTechs.some(t => t.toLowerCase().includes(tech.toLowerCase())));
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter(project =>
      project.technologies.some(tech =>
        tech.toLowerCase().includes(activeFilter.toLowerCase())
      )
    );
  }, [activeFilter]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_SHOW);
  const hasMore = filteredProjects.length > INITIAL_SHOW;

  // Reset visibility when filter or pagination changes, then re-observe
  useEffect(() => {
    setVisibleCards(new Set());

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.dataset.index);
              setVisibleCards((prev) => new Set([...prev, index]));
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );

      cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
      return () => observer.disconnect();
    }, 60); // wait one frame for refs to attach

    return () => clearTimeout(timer);
  }, [activeFilter, showAll]); // eslint-disable-line react-hooks/exhaustive-deps

  const openModal = useCallback((project) => {
    scrollPositionRef.current = window.scrollY;
    document.body.style.overflow = 'hidden';
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = '';
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollPositionRef.current, behavior: 'instant' });
    });
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false); // reset pagination on filter change
  };

  return (
    <section id="works" className={`section ${styles.worksSection}`} aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeader
          title={<>Featured <span>Projects</span></>}
          subtitle="A selection of live projects showcasing full-stack development and frontend work"
          bgText="PROJECTS"
        />

        <div className={styles.filterButtons} role="group" aria-label="Filter projects by technology">
          {filterOptions.map(filter => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => handleFilterChange(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`${styles.cardWrapper} ${visibleCards.has(index) ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
            >
              <ProjectCard
                project={project}
                onClick={openModal}
              />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className={styles.noProjects}>No projects found with this technology.</p>
        )}

        {hasMore && (
          <div className={styles.showMoreWrapper}>
            <button className={styles.showMoreBtn} onClick={() => setShowAll(!showAll)}>
              {showAll ? <><FiChevronUp /> Show Less</> : <>Show More <FiChevronDown /></>}
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
