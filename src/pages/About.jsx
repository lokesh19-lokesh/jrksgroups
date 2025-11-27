import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const businesses = [
    {
      title: "Universal Solar Power Systems",
      desc: "Specializing in uninterrupted power supply (UPS) systems, industrial batteries, and renewable energy integrations. We empower industries with reliable energy solutions.",
      link: "/universal-solar-power-systems",
      color: "#003366"
    },
    {
      title: "Jrks Traders",
      desc: "Authorized dealers for SAIL and Jindal Steel, offering a comprehensive range of construction materials and solar electronics including panels and inverters.",
      link: "/jrks-traders",
      color: "#D4AF37"
    },
    {
      title: "NRS First Capital",
      desc: "Your partner in financial growth, providing tailored loan services (Housing, Personal, Business) and comprehensive insurance solutions.",
      link: "/nrs-first-capital",
      color: "#0056b3"
    },
    {
      title: "Jrks Industrial Consultant Services",
      desc: "Expert consultancy for process optimization, supply chain management, and regulatory compliance to drive industrial excellence.",
      link: "/jrks-industrial-consultant-services",
      color: "#333333"
    },
    {
      title: "Surya Projects",
      desc: "Premier contracting firm executing complex infrastructure projects in Civil, Electrical, and Government sectors, including Railways and NMDC.",
      link: "/surya-projects",
      color: "#8B0000"
    },
    {
      title: "Sri Vedantha Educational Trust",
      desc: "Committed to empowering the future through quality education, skill development programs, and community outreach initiatives.",
      link: "/sri-vedantha-educational-trust",
      color: "#4B0082"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '60vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80)',
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
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>About Us</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>Building a legacy of trust, excellence, and diversified growth.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-container">
        <div className="section-title">
          <h2>Our Story</h2>
          <div className="divider"></div>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', color: '#555', lineHeight: '1.8', textAlign: 'center' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Established with a vision to contribute significantly to India's industrial and economic growth, <strong>Jrks Group</strong> has evolved into a dynamic conglomerate with a diversified portfolio. From our humble beginnings, we have expanded our footprint across critical sectors including <strong>Steel Trading, Renewable Energy, Finance, Infrastructure, and Education</strong>.
          </p>
          <p>
            Our journey is defined by a relentless pursuit of quality, customer satisfaction, and ethical business practices. We take pride in our strategic partnerships with global leaders like <strong>Steel Authority of India (SAIL)</strong> and <strong>Jindal</strong>, enabling us to bring world-class products and services to our clients. At Jrks Group, we don't just build businesses; we build enduring relationships and sustainable futures.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-container" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="section-title">
          <h2>Vision & Mission</h2>
          <div className="divider"></div>
        </div>
        <div className="cards-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="business-card" style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '4px solid var(--primary-color)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁️</div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Our Vision</h3>
            <p style={{ color: '#666' }}>To be a globally recognized leader in our chosen sectors, driving sustainable growth, innovation, and creating long-term value for all our stakeholders and the community.</p>
          </div>
          <div className="business-card" style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '4px solid var(--secondary-color)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ color: '#666' }}>To deliver superior products and services through operational excellence, integrity, and a customer-centric approach, while fostering a culture of continuous learning and social responsibility.</p>
          </div>
        </div>
      </section>

      {/* Our Businesses Overview */}
      <section className="section-container">
        <div className="section-title">
          <h2>Our Group Companies</h2>
          <div className="divider"></div>
          <p style={{ marginTop: '1rem', color: '#666' }}>A diverse portfolio driving excellence across industries.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {businesses.map((biz, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              border: '1px solid #eee',
              transition: 'transform 0.3s ease'
            }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '5px', backgroundColor: biz.color }}></div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ color: biz.color, fontSize: '1.4rem', marginBottom: '1rem' }}>{biz.title}</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '0.95rem' }}>{biz.desc}</p>
                <Link to={biz.link} style={{
                  color: biz.color,
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}>
                  Learn More <span style={{ marginLeft: '5px' }}>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
