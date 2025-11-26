import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Jrks Group</h3>
          <p>Building the future with excellence and integrity.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/career">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Businesses</h3>
          <ul>
            <li><Link to="/universal-power-systems">Universal Power Systems</Link></li>
            <li><Link to="/jrks-traders">Jrks Traders</Link></li>
            <li><Link to="/nrs-first-capital">NRS First Capital</Link></li>
            <li><Link to="/jrks-industrial-consultant-services">Jrks Industrial Consultant Services</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Corporate Park,<br />Hyderabad, India</p>
          <p>Email: info@jrksgroup.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jrks Group. All rights reserved. | Design by <a href="https://thepatternscompany.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>The Patterns Company</a></p>
      </div>
    </footer>
  );
};

export default Footer;
