import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="career-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#f9f9f9' }}>

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#fff', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: '#003366', fontWeight: '600' }}>Careers</span>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '50vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80)',
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
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }}></div>
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Build Your Career With Us</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>Join a team that is shaping the future of industry and innovation.</p>
        </div>
      </section>

      {/* Search Section */}
      <section style={{ marginTop: '-3rem', position: 'relative', zIndex: 3, padding: '0 2rem' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          alignItems: 'end'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', fontSize: '0.9rem', color: '#555' }}>Keywords</label>
            <input type="text" placeholder="Job title or skill" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', fontSize: '0.9rem', color: '#555' }}>Function</label>
            <select style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}>
              <option value="">All Functions</option>
              <option value="engineering">Engineering</option>
              <option value="finance">Finance</option>
              <option value="sales">Sales & Marketing</option>
              <option value="operations">Operations</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', fontSize: '0.9rem', color: '#555' }}>Location</label>
            <select style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}>
              <option value="">All Locations</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          <button style={{
            backgroundColor: '#D4AF37',
            color: '#003366',
            border: 'none',
            padding: '0.8rem',
            fontWeight: 'bold',
            borderRadius: '4px',
            cursor: 'pointer',
            height: '42px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Search Jobs</button>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-container" style={{ padding: '5rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#003366' }}>Current Openings</h2>
          <div className="divider" style={{ width: '60px', height: '3px', backgroundColor: '#D4AF37', margin: '1rem auto' }}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Job Card 1 */}
          <div className="job-card" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#003366', marginBottom: '0.5rem' }}>Senior Sales Manager</h3>
              <div style={{ display: 'flex', gap: '1.5rem', color: '#666', fontSize: '0.9rem' }}>
                <span>📍 Hyderabad</span>
                <span>💼 Sales & Marketing</span>
                <span>🕒 Full Time</span>
              </div>
            </div>
            <button style={{
              padding: '0.6rem 1.5rem',
              border: '1px solid #003366',
              backgroundColor: 'transparent',
              color: '#003366',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#003366';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#003366';
              }}
            >Apply Now</button>
          </div>

          {/* Job Card 2 */}
          <div className="job-card" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#003366', marginBottom: '0.5rem' }}>Industrial Engineer</h3>
              <div style={{ display: 'flex', gap: '1.5rem', color: '#666', fontSize: '0.9rem' }}>
                <span>📍 Hyderabad</span>
                <span>💼 Engineering</span>
                <span>🕒 Full Time</span>
              </div>
            </div>
            <button style={{
              padding: '0.6rem 1.5rem',
              border: '1px solid #003366',
              backgroundColor: 'transparent',
              color: '#003366',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#003366';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#003366';
              }}
            >Apply Now</button>
          </div>

          {/* Job Card 3 */}
          <div className="job-card" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#003366', marginBottom: '0.5rem' }}>Financial Analyst</h3>
              <div style={{ display: 'flex', gap: '1.5rem', color: '#666', fontSize: '0.9rem' }}>
                <span>📍 Mumbai</span>
                <span>💼 Finance</span>
                <span>🕒 Full Time</span>
              </div>
            </div>
            <button style={{
              padding: '0.6rem 1.5rem',
              border: '1px solid #003366',
              backgroundColor: 'transparent',
              color: '#003366',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#003366';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#003366';
              }}
            >Apply Now</button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Career;
