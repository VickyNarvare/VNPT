import { useRef, useState, useEffect } from 'react';
import { skillsData } from '../data';
import SectionHeader from './SectionHeader';
import styles from '../styles/Skills.module.css';
import anim from '../styles/animations.module.css';

const Skills = () => {
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
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        <SectionHeader
          title={<>My <span>Technical Skills</span></>}
          subtitle="Technologies & tools I work with as a MERN Stack Developer"
          bgText="SKILLS"
        />

        <div className={styles.skillsGrid}>
          {skillsData.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`${anim.fadeUp} ${visibleCards.has(index) ? anim.visible : ''}`}
              style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
            >
              <div className={styles.codeCard}>
                {/* Window Header */}
                <div className={styles.codeHeader}>
                  <div className={styles.windowDots}>
                    <span className={styles.dotRed} />
                    <span className={styles.dotYellow} />
                    <span className={styles.dotGreen} />
                  </div>
                  <span className={styles.fileName}>
                    {category.title.toLowerCase().replace(/\s+/g, '-')}.js
                  </span>
                </div>

                {/* Code Content */}
                <div className={styles.codeContent}>
                  <div className={styles.lineNumbers}>
                    {Array.from({ length: category.skills.length + 3 }, (_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>
                  <div className={styles.codeText}>
                    <div className={styles.codeLine}>
                      <span className={styles.comment}>// {category.title} technologies</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.keyword}>const</span>{' '}
                      <span className={styles.variable}>{category.title.replace(/[^a-zA-Z]/g, '')}</span>{' '}
                      <span className={styles.operator}>=</span>{' '}
                      <span className={styles.bracket}>{'['}</span>
                    </div>
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.dataSkill} className={styles.codeLine}>
                        <span className={styles.indent} />
                        <span className={styles.string}>"{skill.name}"</span>
                        {skillIndex < category.skills.length - 1 && (
                          <span className={styles.punctuation}>,</span>
                        )}
                      </div>
                    ))}
                    <div className={styles.codeLine}>
                      <span className={styles.bracket}>{']'}</span>
                      <span className={styles.punctuation}>;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
