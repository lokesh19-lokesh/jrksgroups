import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#fff' }}>

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#f8f9fa', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: '#003366', fontWeight: '600' }}>Contact Us</span>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '50vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f142fcb96319?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }}></div>
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Contact Us</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>We are here to assist you. Reach out to us for any queries.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-container" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

          {/* Contact Information */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#003366' }}>Get in Touch</h2>
            <div style={{ width: '50px', height: '3px', backgroundColor: '#D4AF37', marginBottom: '2rem' }}></div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
              Whether you have a question about our businesses, need assistance, or want to explore partnership opportunities, our team is ready to help.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem', color: '#D4AF37', marginTop: '3px' }}>📍</div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Corporate Office</h4>
                  <p style={{ margin: 0, color: '#666' }}>
                    123 Corporate Park, Financial District,<br />
                    Hyderabad, Telangana, India - 500032
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem', color: '#D4AF37', marginTop: '3px' }}>📞</div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Phone</h4>
                  <p style={{ margin: 0, color: '#666' }}>+91 93908 00446</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem', color: '#D4AF37', marginTop: '3px' }}>✉️</div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Email</h4>
                  <p style={{ margin: 0, color: '#666' }}>
                    <a href="mailto:info@jrksgroup.com" style={{ color: '#003366', textDecoration: 'none' }}>info@jrksgroup.com</a><br />
                    <a href="mailto:support@jrksgroup.com" style={{ color: '#003366', textDecoration: 'none' }}>support@jrksgroup.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div style={{ backgroundColor: '#f9f9f9', padding: '3rem', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#003366' }}>Send us a Message</h2>
            <div style={{ width: '50px', height: '3px', backgroundColor: '#D4AF37', marginBottom: '2rem' }}></div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#444' }}>Name</label>
                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }} />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#444' }}>Email</label>
                <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }} />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#444' }}>Subject</label>
                <select style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', backgroundColor: 'white' }}>
                  <option>General Inquiry</option>
                  <option>Business Partnership</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#444' }}>Message</label>
                <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" style={{
                backgroundColor: '#003366',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
                transition: 'background-color 0.2s'
              }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#002244'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#003366'}
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
