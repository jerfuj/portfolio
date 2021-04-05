import styles from './Hero.module.css';
import ParticlesBg from './ParticlesBg';
import PropTypes from 'prop-types';

function Hero({ heroRef }) {
  return (
    <section ref={heroRef} className={styles.heroContainer}>
      <ParticlesBg />
      <div className={styles.textContainer}>
        <h1 className={styles.header}>Jeremy Fujimoto</h1>
        <p className={styles.p}>Full Stack Web Developer</p>
      </div>
    </section>
  )
}

Hero.propTypes = {
  heroRef: PropTypes.instanceOf(Object).isRequired
}

export default Hero;