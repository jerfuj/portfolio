import styles from './Projects.module.css';
import projectData from './projectData';
import ProjectCard from './ProjectCard';

function Projects({ projectsRef }) {
  return (
    <section className={styles.projectsContainer} ref={projectsRef}>
      <h1 className={styles.header}>Projects</h1>
      <ul className={styles.cardsContainer}>
        {projectData.map((project) => (
          <ProjectCard project={project} />
        ))}
      </ul>
    </section>
  )
};

export default Projects;