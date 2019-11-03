import React from 'react';
import { projects } from '../../data/projects';
import { changePageTitle } from '../../services/domUtils';
import Videos from './components/Videos';
import styles from './styles.module.css';

export default function Projects() {
  changePageTitle('Projects - Sean Corrales');
  return (
    <div className="page-container">
      <h2>Projects</h2>
      {projects.map(project => (
        <div key={project.name} className={styles.project}>
          <Videos videos={project.video} />
          <div className={styles.content}>
            <h3 className={styles.title}>{project.name}</h3>
            <div className={styles.description}>{project.description}</div>
            <div className={styles.links}>
              {project.urls.map((link, i) => (
                <span key={i}>
                  <a href={link.url}>{link.text}</a>
                  {i + 1 < project.urls.length && ' | '}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
