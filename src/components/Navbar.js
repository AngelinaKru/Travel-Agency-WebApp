import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
      <img src="/logo.png" alt="logo" />
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
              <Link to="/citiy" className="nav-links" onClick={closeMobileMenu}>
              Kaupunkiloma
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Kirjaudu sisään
              </Link>
            </li>
            </ul>
      </div>
    </nav>
  );
};

export default Navbar;