import { useEffect, useRef } from 'react';
import { projectsData } from '../data';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from '../styles/Projects.module.css';

const ProjectItem = ({ project }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = project.layout === 'left';

  const Content = () => (
    <div className={styles.projectContent}>
      <span className={styles.projectNumber}>PROJECT {project.id}</span>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.projectTechnologies}>
        {project.technologies.map(tech => (
          <span key={tech} className={styles.techTag}>{tech}</span>
        ))}
      </div>
      <div className={styles.projectLinks}>
        <a href={project.demoLink} className={`${styles.projectBtn} ${styles.btnDemo}`} target="_blank" rel="noopener noreferrer">
          <FiExternalLink /><span>Live Demo</span>
        </a>
        <a href={project.codeLink} className={`${styles.projectBtn} ${styles.btnCode}`} target="_blank" rel="noopener noreferrer">
          <FiGithub /><span>View Code</span>
        </a>
      </div>
    </div>
  );

  const Image = () => (
    <div className={styles.projectImageWrapper}>
      <div className={styles.projectImage}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <div className={styles.imageOverlay}>
          <span className={styles.overlayTitle}>{project.title}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={ref} className={`${styles.projectItem} ${isLeft ? styles.projectLeft : styles.projectRight}`}>
      {isLeft ? <><Content /><Image /></> : <><Image /><Content /></>}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="works" className={`section ${styles.worksSectionPadding}`}>
      <div className="container">
        <h2 className={`section-title ${styles.projectsTitle}`}>
          <span className="accent-text">My Projects</span>
        </h2>
        <div className={styles.projectsGrid}>
          {projectsData.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
