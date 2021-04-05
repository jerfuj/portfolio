import { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Hamburger from './Hamburger';
import PropTypes from 'prop-types';

export default function Navbar({ projectsRef, aboutRef, contactRef, heroRef }) {
  const [navClass, setNavClass] = useState(`${styles.nav}`);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleBurger = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, [])
  
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavClass(`${styles.nav} ${styles.navScrollDown}`)
    } else {
      setNavClass(`${styles.nav}`);
    }
  }

  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView();
  } 

  function BurgerLinks() {
    return (
      <ul className={styles.burgerLinksContainer}>
        <li onClick={() => {
          scrollIntoView(projectsRef);
          toggleBurger();
        }
        }>
          Projects
        </li>
        <li onClick={() => {
          scrollIntoView(aboutRef);
          toggleBurger();
        }
        }>
          About
        </li>
        <li onClick={() => {
          scrollIntoView(contactRef);
          toggleBurger();
        }
        }>
          Contact
        </li>
        <li className={styles.resume}>
          <a href="https://docs.google.com/document/d/1TxgDlWCuosxEHGHiO6SpZsRMj8rSBkzHc5Kxqxqr98E/edit#heading=h.au8c9iwzs8ej" target="blank">Resume</a>
        </li>
      </ul>
    )
  }

  function NavLinks() {
    return (
      <ul className={styles.linksContainer}>
        <li onClick={() => scrollIntoView(projectsRef)}>Projects</li>
        <li onClick={() => scrollIntoView(aboutRef)}>About</li>
        <li onClick={() => scrollIntoView(contactRef)}>Contact</li>
        <li className={styles.resume}>
          <a href="https://docs.google.com/document/d/1TxgDlWCuosxEHGHiO6SpZsRMj8rSBkzHc5Kxqxqr98E/edit#heading=h.au8c9iwzs8ej" target="blank">Resume</a>
        </li>
      </ul>
    )
  }

  return (
    <>
      <header className={navClass}>
        <div className={styles.navContent}>
          <div 
            className={styles.logoContainer}
            onClick={() => scrollIntoView(heroRef)}
          >
            <Image src="/images/JF-logo.png" height={55} width={55} />
          </div>
          <Hamburger toggleBurger={toggleBurger} />
          <NavLinks />
        </div>
        {menuOpen && <BurgerLinks />}
      </header>
    </>
  )
}

Navbar.propTypes = {
  projectsRef: PropTypes.instanceOf(Object).isRequired,
  aboutRef: PropTypes.instanceOf(Object).isRequired,
  contactRef: PropTypes.instanceOf(Object).isRequired,
  heroRef: PropTypes.instanceOf(Object).isRequired
}