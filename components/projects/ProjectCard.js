import Image from 'next/image';
import styles from './ProjectCard.module.css';
import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <a href={project.liveURL} target="blank">
        <Image src={project.image} height={375} width={600}/>
      </a>
      <h2 className={styles.header}>{project.name}</h2>
      <div className={styles.bottomHalf}>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.technologies.map((tech) => (
              <div key={tech} className={styles.tag}>
                {tech}
              </div>
          ))}
        </div>
        <div className={styles.linksContainer}>
          <a href={project.liveURL} target="blank" className={styles.link}>
            Live
          </a>
          <a href={project.gitHubURL} target="blank" className={styles.link}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired
}