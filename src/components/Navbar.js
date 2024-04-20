import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './Navbar.css';
import { Button } from './Button';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/images/logo-2.png" alt="logo" />
          <span className="navbar-name">Matka Suomi</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              Meistä
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
              Lomat
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              Palvelut
            </Link>
          </li>
        </ul>
        {button && (
          <Link to="/contact" className="btn-mobile" onClick={closeMobileMenu}>
            <Button buttonStyle="btn--outline" path={{ path: '/contact' }}>OTA YHTEYTTÄ</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;