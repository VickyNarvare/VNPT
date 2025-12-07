import { skillsData } from '../data';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  // Generate code-like syntax for each skill category
  const getCodeSnippet = (category) => {
    const skills = category.skills.map(s => `"${s.name}"`).join(', ');
    return {
      comment: `// ${category.title} technologies`,
      constLine: `const ${category.title.replace(/[^a-zA-Z]/g, '')} = {`,
      skills: category.skills,
      closeBrace: '};'
    };
  };

  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        <h2 className={styles.skillsSectionTitle}>
          My <span>Technical Skills</span>
        </h2>
        <div className={styles.skillsTitleUnderline} />
        <p className={styles.skillsSectionSubtitle}>Technologies & tools I work with as a Frontend Developer</p>

        <div className={styles.skillsGrid}>
          {skillsData.map((category, index) => {
            const snippet = getCodeSnippet(category);
            return (
              <div key={category.id} className={styles.codeCard}>
                {/* Window Header */}
                <div className={styles.codeHeader}>
                  <div className={styles.windowDots}>
                    <span className={styles.dotRed}></span>
                    <span className={styles.dotYellow}></span>
                    <span className={styles.dotGreen}></span>
                  </div>
                  <span className={styles.fileName}>{category.title.toLowerCase().replace(/\s+/g, '-')}.js</span>
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
                      <span className={styles.comment}>{snippet.comment}</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.keyword}>const</span>{' '}
                      <span className={styles.variable}>{category.title.replace(/[^a-zA-Z]/g, '')}</span>{' '}
                      <span className={styles.operator}>=</span>{' '}
                      <span className={styles.bracket}>{'['}</span>
                    </div>
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.dataSkill} className={styles.codeLine}>
                        <span className={styles.indent}></span>
                        <span className={styles.string}>"{skill.name}"</span>
                        {skillIndex < category.skills.length - 1 && <span className={styles.punctuation}>,</span>}
                      </div>
                    ))}
                    <div className={styles.codeLine}>
                      <span className={styles.bracket}>{']'}</span>
                      <span className={styles.punctuation}>;</span>
                    </div>
                  </div>
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
