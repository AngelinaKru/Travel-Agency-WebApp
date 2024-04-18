import React, {useState, useEffect} from 'react';
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
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
      <img src="/travel-bag.png" alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}/>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                Meistä
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/beach" className="nav-links" onClick={closeMobileMenu}>
                Rantaloma
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/city" className="nav-links" onClick={closeMobileMenu}>
              Kaupunkiloma
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Kirjaudu sisään
              </Link>
            </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">KIRJAUDU SISÄÄN</Button>}
      </div>
    </nav>
  );
};

export default Navbar;