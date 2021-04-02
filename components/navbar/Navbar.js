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
    if (window.scrollY >= window.innerHeight) {
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
          <h1>JF</h1>
        </div>
        <ul className={styles.linksContainer}>
          <li onClick={() => scrollIntoView(projectsRef)}>Projects</li>
          <li onClick={() => scrollIntoView(aboutRef)}>About</li>
          <li onClick={() => scrollIntoView(contactRef)}>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
    </header>
  )
};

export default Navbar;
