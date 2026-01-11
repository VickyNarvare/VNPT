import { useState, useEffect } from 'react';
import { FiGithub, FiStar, FiGitBranch, FiCalendar, FiExternalLink } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from '../styles/GitHubActivity.module.css';

const GitHubActivity = () => {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'VickyNarvare';
  const GITHUB_API_BASE = 'https://api.github.com';

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      
      // Fetch latest repositories
      const reposResponse = await fetch(
        `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`,
        {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          }
        }
      );
      
      console.log('GitHub API Response Status:', reposResponse.status);
      
      if (!reposResponse.ok) {
        const errorText = await reposResponse.text();
        console.error('GitHub API Error Response:', errorText);
        throw new Error(`GitHub API Error: ${reposResponse.status} - ${errorText}`);
      }
      
      const reposData = await reposResponse.json();
      setRepos(reposData);

      // Fetch recent commits from all repos
      const commitsPromises = reposData.slice(0, 4).map(async (repo) => {
        try {
          const commitsResponse = await fetch(
            `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=2`,
            {
              headers: {
                'Accept': 'application/vnd.github.v3+json',
              }
            }
          );
          if (commitsResponse.ok) {
            const commitsData = await commitsResponse.json();
            return commitsData.map(commit => ({
              ...commit,
              repo: repo.name,
              repoUrl: repo.html_url
            }));
          }
        } catch (err) {
          console.log(`No commits found for ${repo.name}`);
        }
        return [];
      });

      const allCommits = await Promise.all(commitsPromises);
      const flatCommits = allCommits.flat().slice(0, 5);
      setCommits(flatCommits);

    } catch (err) {
      setError(err.message);
      console.error('GitHub API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading) {
    return (
      <section id="github" className="section">
        <div className="container">
          <SectionHeader 
            title={<>GitHub <span>Activity</span></>}
            subtitle="Latest repositories and commits"
            bgText="GITHUB"
          />
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Loading GitHub activity...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github" className="section">
        <div className="container">
          <SectionHeader 
            title={<>GitHub <span>Activity</span></>}
            subtitle="Latest repositories and commits"
            bgText="GITHUB"
          />
          <div className={styles.error}>
            <FiGithub className={styles.errorIcon} />
            <p>Unable to load GitHub activity</p>
            <button onClick={fetchGitHubData} className={styles.retryBtn}>
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="section">
      <div className="container">
        <SectionHeader 
          title={<>GitHub <span>Activity</span></>}
          subtitle="Latest repositories and commits"
          bgText="GITHUB"
        />
        
        <div className={styles.githubContent}>
          {/* Latest Repositories */}
          <div className={styles.reposSection}>
            <h3 className={styles.sectionTitle}>
              <FiGithub /> Latest Repositories
            </h3>
            <div className={styles.reposGrid}>
              {repos.map((repo) => (
                <div key={repo.id} className={styles.repoCard}>
                  <div className={styles.repoHeader}>
                    <h4 className={styles.repoName}>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    </h4>
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.externalLink}
                      aria-label={`Open ${repo.name} repository`}
                    >
                      <FiExternalLink className={styles.externalIcon} />
                    </a>
                  </div>
                  
                  <p className={styles.repoDescription}>
                    {repo.description || 'No description available'}
                  </p>
                  
                  <div className={styles.repoStats}>
                    <span className={styles.stat}>
                      <FiStar /> {repo.stargazers_count}
                    </span>
                    <span className={styles.stat}>
                      <FiGitBranch /> {repo.forks_count}
                    </span>
                    {repo.language && (
                      <span className={styles.language}>{repo.language}</span>
                    )}
                  </div>
                  
                  <div className={styles.repoFooter}>
                    <span className={styles.updatedDate}>
                      <FiCalendar /> Updated {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Commits */}
          {commits.length > 0 && (
            <div className={styles.commitsSection}>
              <h3 className={styles.sectionTitle}>
                <FiGitBranch /> Recent Commits
              </h3>
              <div className={styles.commitsList}>
                {commits.map((commit, index) => (
                  <div key={`${commit.repo}-${index}`} className={styles.commitItem}>
                    <div className={styles.commitInfo}>
                      <p className={styles.commitMessage}>
                        {truncateText(commit.commit.message, 60)}
                      </p>
                      <div className={styles.commitMeta}>
                        <span className={styles.commitRepo}>
                          <a href={commit.repoUrl} target="_blank" rel="noopener noreferrer">
                            {commit.repo}
                          </a>
                        </span>
                        <span className={styles.commitDate}>
                          {formatDate(commit.commit.author.date)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.githubFooter}>
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.viewAllBtn}
          >
            <FiGithub /> View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;