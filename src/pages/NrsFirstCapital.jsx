import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NrsFirstCapital = () => {
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

  const loanServices = [
    { title: "House Loans", icon: "🏠", desc: "Affordable housing loans to help you build or buy your dream home." },
    { title: "Personal Loans", icon: "👤", desc: "Quick and easy personal loans for your immediate financial needs." },
    { title: "Business Loans", icon: "💼", desc: "Capital to fuel your business growth and expansion plans." },
    { title: "Project Funding", icon: "🏗️", desc: "Large-scale funding solutions for infrastructure and development projects." },
    { title: "Financial Advising", icon: "📈", desc: "Expert advice to manage your wealth and plan your financial future." }
  ];

  const insuranceServices = [
    { title: "Life Insurance", icon: "❤️", desc: "Secure your family's future with our comprehensive life insurance plans." },
    { title: "Health Insurance", icon: "🏥", desc: "Coverage for medical emergencies and health-related expenses." },
    { title: "Vehicle Insurance", icon: "🚗", desc: "Protection for your two-wheelers and four-wheelers against damages." },
    { title: "Corporate Insurance", icon: "🏢", desc: "Tailored insurance products for companies and their assets." }
  ];

  const partners = ["SBI", "HDFC", "KOTAK", "INDUSIND"];

  const accentColor = "#0056b3"; // Lighter Blue

  return (
    <div className="nrs-first-capital-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#fff' }}>

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#f8f9fa', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: accentColor, fontWeight: '600' }}>NRS First Capital</span>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '60vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 2rem'
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
        <div className="hero-content" style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>NRS First Capital</h1>
          <p style={{ fontSize: '1.5rem', opacity: '1', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', maxWidth: '800px', margin: '0 auto' }}>
            Your Partner in Financial Growth and Security.
          </p>
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
              <button onClick={() => scrollToSection('loans')} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
              }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                Loan Services
              </button>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <button onClick={() => scrollToSection('insurance')} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
              }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                Insurance Solutions
              </button>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <button onClick={() => scrollToSection('partners')} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
              }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                Our Partners
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: '1', minWidth: '300px' }}>

          {/* Loans Section */}
          <section id="loans" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Loan Services</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>
            <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
              Comprehensive loan solutions tailored to your personal and business needs.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {loanServices.map((service, index) => (
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
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                  <h3 style={{ color: accentColor, marginBottom: '1rem', fontSize: '1.3rem' }}>{service.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Insurance Section */}
          <section id="insurance" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Insurance Solutions</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>
            <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
              Protecting what matters most with our wide range of insurance products.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {insuranceServices.map((service, index) => (
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
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                  <h3 style={{ color: accentColor, marginBottom: '1rem', fontSize: '1.3rem' }}>{service.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Partners Section */}
          <section id="partners" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Our Banking Partners</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              {partners.map((partner, index) => (
                <div key={index} style={{
                  padding: '1.5rem 3rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '4px',
                  border: '1px solid #e9ecef',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#555',
                  letterSpacing: '1px'
                }}>
                  {partner}
                </div>
              ))}
            </div>
            <p style={{ marginTop: '2rem', color: '#666' }}>
              We collaborate with these leading financial institutions to offer you the best rates and services.
            </p>
          </section>

        </main>
      </div>

      {/* Call to Action - Full Width */}
      <section style={{
        background: `linear-gradient(135deg, ${accentColor} 0%, #002a5c 100%)`,
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: '300', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Secure Your Financial Future</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9' }}>
            Contact NRS First Capital for expert financial advice and capital solutions.
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

export default NrsFirstCapital;
