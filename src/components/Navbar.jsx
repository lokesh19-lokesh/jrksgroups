import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isHome ? 'home-mode' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="dealer-info">
            <span className="dealer-text">Steel Authority of India dealers <span className="dealer-highlight">JRKSGROUP</span></span>
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
            <img src={logo} alt="JRKSGROUP" className="navbar-logo" />
          </Link>
          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>

            <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
              <span className="dropdown-toggle">Businesses <i className="fas fa-chevron-down" style={{ fontSize: '0.7em', marginLeft: '3px' }}></i></span>
              <ul className="dropdown-menu">
                <li><Link to="/universal-power-systems" onClick={toggleMenu}>Universal Solar Power Systems</Link></li>
                <li><Link to="/jrks-traders" onClick={toggleMenu}>Jrks Traders</Link></li>
                <li><Link to="/nrs-first-capital" onClick={toggleMenu}>NRS Trust Capital</Link></li>
                <li><Link to="/jrks-industrial-consultant-services" onClick={toggleMenu}>Jrks Industrial Consultant Services</Link></li>
                <li><Link to="/surya-projects" onClick={toggleMenu}>Surya Projects</Link></li>

                <li><Link to="/sri-vedantha-educational-trust" onClick={toggleMenu}>Sri Vedantha Educational Trust</Link></li>
                <li><Link to="/universal-cancer-screening" onClick={toggleMenu}>Universal Cancer Screening</Link></li>
              </ul>
            </li>

            <li><Link to="/career" onClick={toggleMenu}>Careers</Link></li>
            <li><Link to="/news-media" onClick={toggleMenu}>News & Media</Link></li>
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
