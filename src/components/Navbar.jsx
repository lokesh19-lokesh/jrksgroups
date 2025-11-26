import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <header className="site-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="dealer-info">
            <span className="dealer-text">Steel Authority of India dealers <span className="dealer-highlight">Jrks</span></span>
          </div>
          <div className="top-links">
            <Link to="/fraud-alert">Fraud Alert</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="Jrks Group" className="navbar-logo" />
          </Link>
          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>

            <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
              <span className="dropdown-toggle">Businesses <i className="fas fa-chevron-down" style={{ fontSize: '0.7em', marginLeft: '3px' }}></i></span>
              <ul className="dropdown-menu">
                <li><Link to="/universal-power-systems" onClick={toggleMenu}>Universal Power Systems</Link></li>
                <li><Link to="/jrks-traders" onClick={toggleMenu}>Jrks Traders</Link></li>
                <li><Link to="/nrs-first-capital" onClick={toggleMenu}>NRS First Capital</Link></li>
                <li><Link to="/jrks-industrial-consultant-services" onClick={toggleMenu}>Jrks Industrial Consultant Services</Link></li>
              </ul>
            </li>

            <li><Link to="#" onClick={toggleMenu}>Sustainability</Link></li>
            <li><Link to="#" onClick={toggleMenu}>Investors</Link></li>
            <li><Link to="/career" onClick={toggleMenu}>Careers</Link></li>
            <li><Link to="#" onClick={toggleMenu}>News & Media</Link></li>
          </ul>

          <div className="navbar-icons">
            <Link to="/contact" title="Support"><i className="fas fa-headset"></i></Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
