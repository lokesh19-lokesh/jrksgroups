import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const JrksTraders = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const products = [
    { title: "Steel Trading", icon: "🏗️", desc: "Trading in Steel Canals & TMT bars from premium brands like SAIL and Jindal." },
    { title: "Solar Electronics", icon: "☀️", desc: "Complete range of solar electronics including Panels, Inverters, and Cables." },
    { title: "Infrastructure Components", icon: "🔩", desc: "Supply of Transformers, Structures, and other essential infrastructure components." },
    { title: "Dealership Services", icon: "🤝", desc: "Authorized dealership ensuring authentic products and warranty support." }
  ];

  const features = [
    { title: "Authorized Dealer", icon: "✅", desc: "We are authorized dealers for SAIL, Jindal, and top solar electronic brands." },
    { title: "Comprehensive Range", icon: "📦", desc: "One-stop solution for steel and solar infrastructure needs." },
    { title: "Quality Assurance", icon: "🛡️", desc: "Guaranteed quality with products sourced directly from manufacturers." }
  ];

  const accentColor = "#D4AF37"; // Gold

  return (
    <div className="jrks-traders-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#fff' }}>
      <SEO
        title="Jrks Traders"
        description="Trusted partner for steel trading and industrial raw materials."
        keywords="Steel Trading, Industrial Raw Materials, SAIL Dealer, Jindal Dealer, Solar Electronics"
      />

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#f8f9fa', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: accentColor, fontWeight: '600' }}>JRKS Traders</span>
      </div>

      {/* Hero Section */}
     
 <section className="news-hero">
        <div className="news-hero-bg jrks"></div>
        <div className="section-container news-hero-content">
          <div style={{ maxWidth: '600px', margin: '0 auto 0 0' }}>
            <div style={{
              width: '50px',
              height: '5px',
              backgroundColor: '#D4AF37',
              marginBottom: '2rem'
            }}></div>
            <h1 className="news-hero-title">
              JRKS Traders
            </h1>
            <p className="news-hero-subtitle">
              Premier Trading Partner for Steel and Solar Infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem',
        gap: '4rem',
        alignItems: 'flex-start'
      }}>

        {/* Sidebar Navigation */}
        <aside style={{
          flex: '0 0 250px',
          position: isMobile ? 'static' : 'sticky',
          top: '120px',
          display: isMobile ? 'none' : 'block',
          borderRight: '1px solid #eee',
          paddingRight: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: accentColor,
            borderBottom: `2px solid ${accentColor}`,
            paddingBottom: '0.5rem',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            paddingLeft: '1rem'
          }}>In this section</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <button onClick={() => scrollToSection('overview')} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
              }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                Overview
              </button>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <button onClick={() => scrollToSection('products')} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
              }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                Our Products
              </button>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <button onClick={() => scrollToSection('why-choose-us')} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
              }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                Why Choose Us
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: '1', minWidth: '300px' }}>

          {/* Overview Section */}
          <section id="overview" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Excellence in Trading</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
              Jrks Traders is a leading authorized dealer specializing in high-quality steel and solar infrastructure components.
              We supply Steel Canals and TMT bars from renowned manufacturers like <strong>SAIL</strong> and <strong>Jindal</strong>.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              In addition to steel, we offer a comprehensive range of solar related electronics including panels, inverters, transformers, cables, and mounting structures, catering to the growing renewable energy sector.
            </p>

            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f9f9f9', borderLeft: `4px solid ${accentColor}` }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>Registered Entity</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#666' }}>
                We are a fully compliant and registered trading entity. <br />
                <a href="https://www.knowyourgst.com/gst-number-search/jrks-traders-36AATFJ5236A1ZD/" target="_blank" rel="noopener noreferrer" style={{ color: accentColor, textDecoration: 'underline', fontWeight: 'bold' }}>View GST Profile</a>
              </p>
            </div>
          </section>

          {/* Products Section */}
          <section id="products" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Our Portfolio</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>
            <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
              Comprehensive trading solutions for construction and energy.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {products.map((product, index) => (
                <div key={index} style={{
                  padding: '2rem',
                  border: '1px solid #eee',
                  borderRadius: '4px',
                  backgroundColor: '#fff',
                  transition: 'all 0.3s ease',
                  borderLeft: '4px solid transparent'
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                    e.currentTarget.style.borderLeft = `4px solid ${accentColor}`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderLeft = '4px solid transparent';
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.icon}</div>
                  <h3 style={{ color: accentColor, marginBottom: '1rem', fontSize: '1.3rem' }}>{product.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>{product.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section id="why-choose-us" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Why Choose Us?</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              {features.map((feature, index) => (
                <div key={index} style={{ flex: '1 1 250px', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    minWidth: '50px',
                    height: '50px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: accentColor,
                    border: '1px solid #e9ecef'
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '0.5rem', color: '#333', fontSize: '1.2rem' }}>{feature.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* Call to Action - Full Width */}
      <section style={{
        background: `linear-gradient(135deg, ${accentColor} 0%, #8a6e00 100%)`,
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: '300', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Partner with Us</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9' }}>
            Contact JRKS Traders for your Steel and Solar component needs.
          </p>
          <Link to="/contact" style={{
            display: 'inline-block',
            padding: '1rem 3rem',
            backgroundColor: 'white',
            color: accentColor,
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </div>
  );
};

export default JrksTraders;
