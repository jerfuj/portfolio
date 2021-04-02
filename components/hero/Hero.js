import Image from 'next/image';
import styles from './Hero.module.css';

function Hero({ heroRef }) {
  return (
    <section ref={heroRef} className={styles.heroContainer}>
      <div>
        <Image
          alt="Golf course"
          src="/images/klipper.jpeg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.textContainer}>
        <h1 className={styles.header}>Jeremy Fujimoto</h1>
        <p className={styles.p}>Full Stack Web Developer</p>
      </div>
    </section>
  )
};

export default Hero;