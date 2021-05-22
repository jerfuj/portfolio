import styles from './Hero.module.css';
import ParticlesBg from './ParticlesBg';
import { BiChevronDownCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

function Hero({ heroRef, projectsRef }) {
  const handleIconClick = () => {
    projectsRef.current.scrollIntoView();
  };

  return (
    <section ref={heroRef} className={styles.heroContainer}>
      <ParticlesBg />
      <div className={styles.textContainer}>
        <h1 className={styles.header}>Jeremy Fujimoto</h1>
        <p className={styles.p}>Full Stack Software Engineer</p>
      </div>
      <div className={styles.iconContainer} onClick={handleIconClick}>
        <IconContext.Provider value={{ color: 'white' }}>
          <BiChevronDownCircle size='50px' />
        </IconContext.Provider>
      </div>
    </section>
  );
}

Hero.propTypes = {
  heroRef: PropTypes.instanceOf(Object).isRequired,
  projectsRef: PropTypes.instanceOf(Object).isRequired,
};

export default Hero;
