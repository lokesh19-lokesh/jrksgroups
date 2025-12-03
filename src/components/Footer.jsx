import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section" style={{ flex: '1.5' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>JRKSGROUP</h3>
          <p style={{ lineHeight: '1.6', color: '#ccc', maxWidth: '300px' }}>
            A diversified conglomerate committed to excellence in Steel, Power, Finance, Infrastructure, and Education.
            Building a sustainable future through innovation and integrity.
          </p>
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
          <h3>Group Companies</h3>
          <ul>
            <li><Link to="/universal-solar-power-systems">Universal Solar Power Systems</Link></li>
            <li><Link to="/jrks-traders">Jrks Traders</Link></li>
            <li><Link to="/nrs-first-capital">NRS Trust Capital</Link></li>
            <li><Link to="/jrks-industrial-consultant-services">Industrial Consultant Services</Link></li>
            <li><Link to="/surya-projects">Surya Projects</Link></li>
            <li><Link to="/sri-vedantha-educational-trust">Sri Vedantha Educational Trust</Link></li>
            <li><Link to="/universal-cancer-screening">Universal Cancer Screening</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Corporate Park,<br />Hyderabad, India</p>
          <p style={{ marginTop: '0.5rem' }}>Email: <a href="mailto:info@jrksgroup.com" style={{ color: 'var(--secondary-color)' }}>info@jrksgroup.com</a></p>
          <p>Phone: +91 123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JRKSGROUP. All rights reserved. | Design by <a href="https://thepatternscompany.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>The Patterns Company</a></p>
      </div>
    </footer>
  );
};

export default Footer;
