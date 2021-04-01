import styles from './About.module.css';

function About({ aboutRef }) {
  return (
    <section ref={aboutRef} className={styles.aboutContainer}>
      <h1 className={styles.header}>About</h1>
    </section>
  )
};

export default About;