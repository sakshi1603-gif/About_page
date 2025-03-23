import React, { useState, useEffect } from 'react';
import style from './navbar.module.css';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${style.navigation} ${isScrolled ? style.scrolled : ''}`}>
      <header className={style.Header}>
        <div className={style.logo}>
          <h1>BIJAL SHAH</h1>
          <h3 className={style.h3}>Financial Coach</h3>
        </div>

        {/* Hamburger menu for mobile */}
        <div className={style.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation menu */}
        <div className={`${style.menuContainer} ${isMenuOpen ? style.menuOpen : ''}`}>
          <ul className={style.list}>
            <li>Home</li>
            <li>About</li>
            <li>Work With Me</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>

      <section className={style.Section}>
        <div className={style.line}></div>
        <div className={style.images}>
          <a href='https://www.facebook.com/wix' target='_blank' rel="noreferrer">
            <img src={facebook} className={style.facebookimg} alt="Facebook" />
          </a>
          <a href='https://x.com/Wix' target='_blank' rel="noreferrer">
            <img src={twitter} className={style.twitterimg} alt="Twitter" />
          </a>
          <a href='https://www.linkedin.com/company/wix-com' target='_blank' rel="noreferrer">
            <img src={linkedin} className={style.linkedinimg} alt="LinkedIn" />
          </a>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;