import React from 'react';

const UniversalPowerSystems = () => {
  return (
    <div>
      <section className="hero-section" style={{ height: '50vh', backgroundImage: 'url(https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}>
        <div className="hero-content">
          <h1>Universal Power Systems</h1>
          <p>Empowering Industries with Reliable Energy Solutions</p>
        </div>
      </section>

      <section className="section-container">
        <div className="section-title">
          <h2>Powering Your Growth</h2>
          <div className="divider"></div>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', color: '#555' }}>
          <p>
            At Universal Power Systems, we specialize in providing top-tier power management solutions tailored to the needs of modern industries.
            From uninterrupted power supply (UPS) systems to industrial batteries and renewable energy integrations, we ensure your operations never stop.
          </p>
          <p>
            We are authorized dealers for leading brands, offering sales, service, and maintenance to guarantee optimal performance and longevity of your power infrastructure.
          </p>
        </div>
      </section>
    </div>
  );
};

export default UniversalPowerSystems;
