import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import founderImage from '../assets/universalsolarpowersystems/founder.png';

const UniversalPowerSystems = () => {
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

  const services = [
    { title: "UPS Systems", icon: "🔋", desc: "Uninterrupted power supply solutions for critical industrial and commercial applications." },
    { title: "Industrial Batteries", icon: "⚡", desc: "High-performance batteries designed for durability and long-lasting power storage." },
    { title: "Solar Integration", icon: "☀️", desc: "Seamless integration of solar power systems to reduce carbon footprint and energy costs." },
    { title: "Maintenance", icon: "🔧", desc: "Comprehensive maintenance and service packages to ensure optimal system performance." }
  ];

  const features = [
    { title: "Reliability", icon: "🛡️", desc: "Systems designed to perform under the most demanding conditions." },
    { title: "Efficiency", icon: "📈", desc: "Maximizing energy output while minimizing waste and operational costs." },
    { title: "Expert Support", icon: "👨‍🔧", desc: "24/7 technical support from certified power systems engineers." }
  ];

  const accentColor = "#003366"; // Deep Blue

  return (
    <div className="universal-power-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#fff' }}>
      <SEO
        title="Universal Solar Power Systems"
        description="Leading solutions in power management, UPS systems, industrial batteries, and solar integration."
        keywords="UPS, Industrial Batteries, Solar Power, Power Management, Energy Solutions"
      />

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#f8f9fa', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: accentColor, fontWeight: '600' }}>Universal Solar Power Systems</span>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '60vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
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
          <h1 style={{ fontSize: isMobile ? '2rem' : '3.5rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Universal Solar Power Systems</h1>
          <p style={{ fontSize: '1.5rem', opacity: '1', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', maxWidth: '800px', margin: '0 auto' }}>
            Empowering Industries with Reliable Energy Solutions.
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
              <button onClick={() => scrollToSection('overview')} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
              }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                Overview
              </button>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <button onClick={() => scrollToSection('services')} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
              }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                Our Services
              </button>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <button onClick={() => scrollToSection('founder-profile')} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
              }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                Founder Profile
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Powering Your Growth</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
              At Universal Solar Power Systems, we specialize in providing top-tier power management solutions tailored to the needs of modern industries.
              From uninterrupted power supply (UPS) systems to industrial batteries and renewable energy integrations, we ensure your operations never stop.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              We are authorized dealers for leading brands, offering sales, service, and maintenance to guarantee optimal performance and longevity of your power infrastructure.
            </p>
          </section>

          {/* Services Section */}
          <section id="services" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Our Services</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>
            <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
              Comprehensive power solutions for every need.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {services.map((service, index) => (
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

          {/* Founder Profile Section */}
          <section id="founder-profile" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Our Founder</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>

            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ flex: '0 0 300px', width: '100%' }}>
                <img src={founderImage} alt="Dr. S. Vathsal" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <h3 style={{ color: accentColor, fontSize: '1.4rem', marginBottom: '0.5rem' }}>Dr. S. Vathsal</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>Consultant/Advisor, Skyroot Aerospace</p>
                </div>
              </div>

              <div style={{ flex: '1' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
                  A distinguished scientist and academician, Dr. S. Vathsal brings decades of expertise in aerospace, control systems, and engineering education. His illustrious career spans prestigious organizations like ISRO, DRDO, NASA, and various academic institutions.
                </p>

                <h4 style={{ color: accentColor, fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Education</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#555', lineHeight: '1.6' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Ph.D.</strong> (1974), IISc Bangalore - "Minimax Approach to linear filtering Problems with uncertainties"</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>M.E.</strong> (1970), Electrical and Electronics Engineering, BITS Pilani</li>
                  <li>• <strong>B.E. (Hons)</strong> (1968), Electrical and Electronics, Thiagarajar College of Engineering, Madurai</li>
                </ul>

                <h4 style={{ color: accentColor, fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Professional Excellence</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#555', lineHeight: '1.6' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>ISRO (VSSC):</strong> Worked with Dr. APJ Abdul Kalam in Project SLV for 4 years in mission analysis group.</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>International Research:</strong> Post-doctoral research at DFVLR (Germany) and NASA Goddard Space Flight Center (USA) on estimation theory and spacecraft attitude determination.</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>DRDO (DRDL):</strong> Scientist E, F & G. Involved in Missile system design, Head of NDE division. Retired as Director Extra Mural Research & IPR from DRDO HQ (2007).</li>
                  <li>• <strong>Academic Leadership:</strong> Served as Professor, Principal, Dean, and Director in institutions like PSG College, Osmania University, VIT, Bhaskar Engineering College, and JBIET.</li>
                </ul>

                <h4 style={{ color: accentColor, fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Awards & Recognition</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#555', lineHeight: '1.6' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• Global Achievers Award (Dubai, 2016)</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Jewel of India Award</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Eminent Educationalist Award</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Rajiv Gandhi Education Excellence Award</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Indira Gandhi Vidya Gold Award</li>
                  <li>• Published 90+ technical papers; Chief Editor of IJIA (Korea) and JBIET Research Review.</li>
                </ul>
              </div>
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
        background: `linear-gradient(135deg, ${accentColor} 0%, #001a33 100%)`,
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: '300', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Ready to Power Up?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9' }}>
            Contact Universal Solar Power Systems today for a consultation on your energy needs.
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
            Get a Quote
          </Link>
        </div>
      </section>

    </div>
  );
};

export default UniversalPowerSystems;
