import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

function Navbar({ projectsRef, aboutRef, contactRef, heroRef }) {
  const [scrolled, setScrolled] = useState(false);
  const [navClass, setNavClass] = useState(`${styles.nav}`)

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, [])
  
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavClass(`${styles.nav} ${styles.navScrollDown}`)
    } else {
      setNavClass(`${styles.nav} ${styles.navScrollUp}`);
    }
  }

  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView();
  } 

  return (
    <header className={navClass}>
      <div className={styles.navContent}>
        <div 
          className={styles.logoContainer}
          onClick={() => scrollIntoView(heroRef)}
        >
          <h1 className={styles.logo}>
            <span className={styles.j}>J</span>
            <span className={styles.f}>F</span>
          </h1>
        </div>
        <ul className={styles.linksContainer}>
          <li onClick={() => scrollIntoView(projectsRef)}>Projects</li>
          <li onClick={() => scrollIntoView(aboutRef)}>About</li>
          <li onClick={() => scrollIntoView(contactRef)}>Contact</li>
          <li className={styles.resume}>
            <a href="https://docs.google.com/document/d/1TxgDlWCuosxEHGHiO6SpZsRMj8rSBkzHc5Kxqxqr98E/edit#heading=h.au8c9iwzs8ej" target="blank">Resume</a>
          </li>
        </ul>
      </div>
    </header>
  )
};

export default Navbar;
