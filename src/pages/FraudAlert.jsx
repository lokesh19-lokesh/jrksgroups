import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const FraudAlert = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fraud-alert-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#fff' }}>

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#f8f9fa', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: '#8B0000', fontWeight: '600' }}>Fraud Alert</span>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '40vh',
        backgroundColor: '#333',
        position: 'relative',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div className="hero-content" style={{ maxWidth: '800px', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', color: '#ffcc00' }}>Fraud Alert</h1>
          <p style={{ fontSize: '1.3rem', fontWeight: '300' }}>Important information regarding fraudulent activities.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-container" style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '3rem',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          backgroundColor: '#fff'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#8B0000', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>⚠️</span> Caution Notice
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#eee', marginBottom: '2rem' }}></div>

          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              It has come to our attention that certain unscrupulous individuals/agencies are falsely representing themselves as authorized agents or representatives of <strong>Jrks Group</strong>. They may be offering fraudulent employment opportunities, business partnerships, or demanding money in exchange for services.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Please be aware that <strong>Jrks Group does not charge any fees</strong> for recruitment or business proposals. We do not authorize any third-party agencies to collect money on our behalf.
            </p>

            <div style={{ backgroundColor: '#FFF8E7', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid #D4AF37', margin: '2rem 0' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#003366', fontSize: '1.2rem' }}>What to do if you encounter such offers:</h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Do not respond to unsolicited emails or calls asking for personal or financial information.</li>
                <li style={{ marginBottom: '0.5rem' }}>Verify the authenticity of the communication by contacting us directly through our official channels.</li>
                <li>Report any suspicious activity to the relevant authorities.</li>
              </ul>
            </div>

            <p style={{ fontStyle: 'italic', color: '#888', fontSize: '0.95rem' }}>
              Jrks Group shall not be liable for any loss or damage resulting from such fraudulent activities.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FraudAlert;
