import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Growth is Life</h1>
          <p>Jrks Group is committed to innovation, excellence, and sustainable growth across diverse sectors.</p>
          <Link to="/contact" className="cta-button">Partner With Us</Link>
        </div>
      </section>

      <section className="section-container">
        <div className="section-title">
          <h2>Our Businesses</h2>
          <div className="divider"></div>
          <p style={{ marginTop: '1rem', color: '#666' }}>
            Driving value through diverse business interests.
          </p>
        </div>

        <div className="cards-grid">
          {/* Card 1 */}
          <div className="business-card">
            <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565610222536-ef125c59da2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
            <div className="card-content">
              <h3>Universal Power Systems</h3>
              <p>Leading solutions in power management and industrial energy systems.</p>
              <Link to="/universal-power-systems" className="card-link">Learn More</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="business-card">
            <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
            <div className="card-content">
              <h3>Jrks Traders</h3>
              <p>Your trusted partner for steel trading and industrial raw materials.</p>
              <Link to="/jrks-traders" className="card-link">Learn More</Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="business-card">
            <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
            <div className="card-content">
              <h3>NRS First Capital</h3>
              <p>Financial services and capital management for sustainable growth.</p>
              <Link to="/nrs-first-capital" className="card-link">Learn More</Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="business-card">
            <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
            <div className="card-content">
              <h3>Consultant Services</h3>
              <p>Expert industrial consultancy to optimize your business operations.</p>
              <Link to="/jrks-industrial-consultant-services" className="card-link">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="section-title">
          <h2>Who We Are</h2>
          <div className="divider"></div>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Jrks Group is a conglomerate with a strong footprint in Steel Trading, Power Systems, Financial Services, and Industrial Consultancy.
            Inspired by the vision of building a self-reliant India, we strive to deliver excellence in every venture we undertake.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
