import { useEffect, useRef } from 'react';
import { projectsData } from '../data';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectItem = ({ project }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = project.layout === 'left';

  const Content = () => (
    <div className="project-content">
      <span className="project-number">PROJECT {project.id}</span>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.demoLink} className="project-btn btn-demo" target="_blank" rel="noopener noreferrer">
          <FiExternalLink /><span>Demo</span>
        </a>
        <a href={project.codeLink} className="project-btn btn-code" target="_blank" rel="noopener noreferrer">
          <FiGithub /><span>View Code</span>
        </a>
      </div>
    </div>
  );

  const Image = () => (
    <div className="project-image-wrapper">
      <div className="project-image">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
    </div>
  );

  return (
    <div ref={ref} className={`project-item project-${project.layout}`}>
      {isLeft ? <><Content /><Image /></> : <><Image /><Content /></>}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="works" className="section works-section-padding">
      <div className="container">
        <h2 className="section-title projects-title">
          <span className="accent-text">My Projects</span>
        </h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
