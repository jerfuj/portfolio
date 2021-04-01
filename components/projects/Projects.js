import styles from './Projects.module.css';

function Projects({ projectsRef }) {
  return (
    <section 
      className={styles.projectsContainer}
      ref={projectsRef}
    >
      <h1 className={styles.header}>Projects</h1>
    </section>
  )
};

export default Projects;