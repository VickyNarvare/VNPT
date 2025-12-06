import { skillsData } from '../data';
import { FiCode, FiDatabase, FiFilm, FiGitBranch, FiLayout, FiTerminal } from 'react-icons/fi';

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
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="skills-section-title">
          My <span>Technical Skills</span>
        </h2>
        <div className="skills-title-underline" />
        <p className="skills-section-subtitle">Technologies & tools I work with as a Frontend Developer</p>

        <div className="skills-grid">
          {skillsData.map(category => {
            const IconComponent = iconMap[category.icon] || FiCode;
            return (
              <div key={category.id} className="skill-card">
                <div className="skill-icon">
                  <IconComponent />
                </div>
                <h3 className="skill-card-title">{category.title}</h3>
                <div className="skill-tags-container">
                  {category.skills.map(skill => (
                    <span key={skill.dataSkill} className="skill-tag" data-skill={skill.dataSkill}>
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
