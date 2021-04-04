import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import NavLinks from './NavLinks';
import Hamburger from './Hamburger';


export default function Navbar({ projectsRef, aboutRef, contactRef, heroRef }) {
  const [scrolled, setScrolled] = useState(false);
  const [navClass, setNavClass] = useState(`${styles.nav}`);
  const [mobile, setMobile] = useState(false);

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
          {/* <NavLinks /> */}
        </div>
        {menuOpen && <BurgerLinks />}
      </header>
    </>
  )
};


