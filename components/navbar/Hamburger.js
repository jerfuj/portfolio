import styles from './Navbar.module.css';
import PropTypes from 'prop-types';

function Hamburger({ toggleBurger }) {
  return (
    <div onClick={toggleBurger} className={styles.hamburger}>
      <svg viewBox="0 0 100 80" width="40" height="40">
        <g color="white">
          <rect fill="currentcolor" width="90" height="5" rx="8" x="5" y="15"></rect>
          <rect fill="currentcolor" width="90" height="5" rx="8" x="5" y="40"></rect>
          <rect fill="currentcolor" width="90" height="5" rx="8" x="5" y="65"></rect>
        </g>
      </svg>
    </div>
  )
}

Hamburger.propTypes = {
  toggleBurger: PropTypes.instanceOf(Function).isRequired
}

export default Hamburger;