import Image from 'next/image';
import styles from './Hero.module.css';
import ParticlesBg from './ParticlesBg';

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
};

export default Hero;