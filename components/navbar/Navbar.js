import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Hamburger from './Hamburger';
import PropTypes from 'prop-types';

export default function Navbar({ projectsRef, aboutRef, contactRef, heroRef }) {
  const [navClass, setNavClass] = useState(`${styles.navContent}`);
  const [mainNavClass, setMainNavClass] = useState(`${styles.nav}`);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleBurger = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollDown);
  }, []);

  const scrollDown = () => {
    if (window.scrollY >= 80) {
      setNavClass(`${styles.navContent} ${styles.navScrollDown}`);
      setMainNavClass(`${styles.nav} ${styles.changeBg}`);
    } else {
      setNavClass(`${styles.navContent}`);
      setMainNavClass(`${styles.nav}`);
    }
  };

  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView();
  };

  function BurgerLinks() {
    return (
      <ul className={styles.burgerLinksContainer}>
        <li
          onClick={() => {
            scrollIntoView(projectsRef);
            toggleBurger();
          }}
          className={styles.burgerLink}
        >
          Projects
        </li>
        <li
          onClick={() => {
            scrollIntoView(aboutRef);
            toggleBurger();
          }}
          className={styles.burgerLink}
        >
          About
        </li>
        <li
          onClick={() => {
            scrollIntoView(contactRef);
            toggleBurger();
          }}
          className={styles.burgerLink}
        >
          Contact
        </li>
        <li className={styles.resume}>
          <a
            href='https://drive.google.com/file/d/1p3XIQEq8tzs6hV_nxlZtQQkMY9MSzHH5/view'
            target='blank'
          >
            Resume
          </a>
        </li>
      </ul>
    );
  }

  function NavLinks() {
    return (
      <ul className={styles.linksContainer}>
        <li onClick={() => scrollIntoView(projectsRef)}>Projects</li>
        <li onClick={() => scrollIntoView(aboutRef)}>About</li>
        <li onClick={() => scrollIntoView(contactRef)}>Contact</li>
        <li className={styles.resume}>
          <a
            href='https://drive.google.com/file/d/1p3XIQEq8tzs6hV_nxlZtQQkMY9MSzHH5/view'
            target='blank'
          >
            Resume
          </a>
        </li>
      </ul>
    );
  }

  return (
    <header className={mainNavClass}>
      <div className={navClass}>
        <div
          className={styles.logoContainer}
          onClick={() => scrollIntoView(heroRef)}
        >
          <Image src='/images/JF-logo.png' height={55} width={55} />
        </div>
        <Hamburger toggleBurger={toggleBurger} />
        <NavLinks />
      </div>
      {menuOpen && <BurgerLinks />}
    </header>
  );
}

Navbar.propTypes = {
  projectsRef: PropTypes.instanceOf(Object).isRequired,
  aboutRef: PropTypes.instanceOf(Object).isRequired,
  contactRef: PropTypes.instanceOf(Object).isRequired,
  heroRef: PropTypes.instanceOf(Object).isRequired,
};
