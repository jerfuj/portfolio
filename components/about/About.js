import styles from './About.module.css';
import Technologies from './Technologies';
import PropTypes from 'prop-types';

function About({ aboutRef }) {
  return (
    <section ref={aboutRef} className={styles.aboutContainer}>
      <div className={styles.aboutMeContainer}>
        <h2>About Me</h2>
        <p>
          Hi! My name is Jeremy and I was born and raised in Mililani, Hawaii. I&apos;m a baseball player turned flight attendant turned passionate full stack web developer. I particularly enjoy working on the front end, especially with React, and love the satisfaction that comes with bringing an idea to life.
        </p>
        <p>
          Outside of coding, I enjoy golf and travel!
        </p>
      </div>
      <Technologies />
    </section>
  )
}

About.propTypes = {
  aboutRef: PropTypes.instanceOf(Object).isRequired
}

export default About;