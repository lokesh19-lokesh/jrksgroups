import React from 'react';

const JrksTraders = () => {
  return (
    <div>
      <section className="hero-section" style={{ height: '50vh', backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}>
        <div className="hero-content">
          <h1>Jrks Traders</h1>
          <p>Your Trusted Partner in Industrial Trading</p>
        </div>
      </section>

      <section className="section-container">
        <div className="section-title">
          <h2>Excellence in Trading</h2>
          <div className="divider"></div>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', color: '#555' }}>
          <p>
            Jrks Traders is a premier trading house dealing in high-quality industrial raw materials and steel products.
            We bridge the gap between manufacturers and end-users, ensuring timely delivery and competitive pricing.
          </p>
          <p>
            With a robust supply chain and a commitment to quality, we serve a diverse clientele across the infrastructure and manufacturing sectors.
          </p>
          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f9f9f9', borderLeft: '4px solid var(--primary-color)' }}>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Registered Entity</h4>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              We are a fully compliant and registered trading entity. <br />
              <a href="https://www.knowyourgst.com/gst-number-search/jrks-traders-36AATFJ5236A1ZD/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>View GST Profile</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JrksTraders;
