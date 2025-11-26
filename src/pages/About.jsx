import React from 'react';

const About = () => {
  return (
    <div>
      <section className="hero-section" style={{ height: '50vh', backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80)' }}>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Building a legacy of trust and excellence.</p>
        </div>
      </section>

      <section className="section-container">
        <div className="section-title">
          <h2>Our Story</h2>
          <div className="divider"></div>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#555' }}>
          <p>
            Established with a vision to contribute to India's industrial growth, Jrks Group has evolved into a diversified conglomerate with interests in Steel, Power, Finance, and Consultancy.
            Our journey is marked by a relentless pursuit of quality, customer satisfaction, and ethical business practices.
          </p>
          <p>
            Over the years, we have expanded our footprint, partnering with global leaders like Steel Authority of India (SAIL) to bring the best products and services to our clients.
          </p>
        </div>
      </section>

      <section className="section-container" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="section-title">
          <h2>Vision & Mission</h2>
          <div className="divider"></div>
        </div>
        <div className="cards-grid">
          <div className="business-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary-color)' }}>Vision</h3>
            <p>To be a global leader in our chosen sectors, driving sustainable growth and creating value for all stakeholders.</p>
          </div>
          <div className="business-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary-color)' }}>Mission</h3>
            <p>To deliver superior products and services through innovation, integrity, and operational excellence.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
