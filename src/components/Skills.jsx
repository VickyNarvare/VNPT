import { skillsData } from '../data';
import { FiCode, FiDatabase, FiFilm, FiGitBranch, FiLayout, FiTerminal } from 'react-icons/fi';
import styles from '../styles/Skills.module.css';

const iconMap = {
  'bx-code-alt': FiCode,
  'bx-data': FiDatabase,
  'bx-movie-play': FiFilm,
  'bx-git-branch': FiGitBranch,
  'bx-palette': FiLayout,
  'bx-code-curly': FiTerminal,
};

const Skills = () => {
  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        <h2 className={styles.skillsSectionTitle}>
          My <span>Technical Skills</span>
        </h2>
        <div className={styles.skillsTitleUnderline} />
        <p className={styles.skillsSectionSubtitle}>Technologies & tools I work with as a Frontend Developer</p>

        <div className={styles.skillsGrid}>
          {skillsData.map(category => {
            const IconComponent = iconMap[category.icon] || FiCode;
            return (
              <div key={category.id} className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <IconComponent />
                </div>
                <h3 className={styles.skillCardTitle}>{category.title}</h3>
                <div className={styles.skillTagsContainer}>
                  {category.skills.map(skill => (
                    <span key={skill.dataSkill} className={styles.skillTag} data-skill={skill.dataSkill}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
