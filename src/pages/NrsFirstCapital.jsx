import React from 'react';

const NrsFirstCapital = () => {
  return (
    <div>
      <section className="hero-section" style={{ height: '50vh', backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}>
        <div className="hero-content">
          <h1>NRS First Capital</h1>
          <p>Strategic Financial Solutions for Sustainable Growth</p>
        </div>
      </section>

      <section className="section-container">
        <div className="section-title">
          <h2>Capital & Finance</h2>
          <div className="divider"></div>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', color: '#555' }}>
          <p>
            NRS First Capital is dedicated to providing robust financial services and capital management solutions.
            We assist businesses in navigating complex financial landscapes, offering expertise in corporate finance, investment strategies, and capital restructuring.
          </p>
          <p>
            Our goal is to empower our partners with the financial strength required to innovate, expand, and lead in their respective markets.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NrsFirstCapital;
