import styles from './Hero.module.css';

function Hero({ heroRef }) {
  return (
    <section ref={heroRef} className={styles.heroContainer}>
      <h1 className={styles.header}>Hello! My name is Jeremy</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, odio itaque. Corporis quia, delectus itaque voluptatem provident praesentium incidunt ut, corrupti unde illo soluta facilis aut voluptatibus consequatur, ex neque?</p>
    </section>
  )
};

export default Hero;