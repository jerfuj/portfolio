import styles from './Projects.module.css';
import projectData from './projectData';
import ProjectCard from './ProjectCard';

function Projects({ projectsRef }) {
  return (
    <section className={styles.projectsContainer} ref={projectsRef}>
      <h2 className={styles.header}>Projects</h2>
      <ul className={styles.cardsContainer}>
        {projectData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </section>
  )
};

export default Projects;