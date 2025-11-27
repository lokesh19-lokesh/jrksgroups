import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JrksIndustrialConsultantServices = () => {
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
    { title: "Process Optimization", icon: "⚙️", desc: "Streamlining industrial processes to enhance efficiency and reduce waste." },
    { title: "Supply Chain Management", icon: "🔗", desc: "Optimizing supply chain logistics for cost-effective operations." },
    { title: "Regulatory Compliance", icon: "📜", desc: "Ensuring adherence to all industrial safety and environmental regulations." },
    { title: "Technology Integration", icon: "💻", desc: "Implementing modern technologies to modernize industrial setups." }
  ];

  const features = [
    { title: "Experienced Team", icon: "👨‍🏫", desc: "Consultants with decades of hands-on industrial experience." },
    { title: "Proven Track Record", icon: "🏆", desc: "History of successful projects across various industrial sectors." },
    { title: "Customized Strategies", icon: "📝", desc: "Tailored solutions designed to meet specific business challenges." }
  ];

  const accentColor = "#333333"; // Dark Grey

  return (
    <div className="jrks-consultant-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#fff' }}>

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#f8f9fa', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: accentColor, fontWeight: '600' }}>Consultant Services</span>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '60vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
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
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>JRKS Industrial Consultant Services</h1>
          <p style={{ fontSize: '1.5rem', opacity: '1', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', maxWidth: '800px', margin: '0 auto' }}>
            Expert Guidance for Industrial Excellence.
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Optimizing Operations</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
              Jrks Industrial Consultant Services offers specialized consultancy to optimize industrial operations, enhance efficiency, and drive innovation.
              Our team of experts brings decades of experience in process engineering, supply chain management, and regulatory compliance.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              We partner with organizations to identify bottlenecks, implement best practices, and achieve operational excellence that translates into tangible business results.
            </p>
          </section>

          {/* Services Section */}
          <section id="services" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Our Services</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>
            <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
              Expert guidance for every stage of your industrial journey.
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
        background: `linear-gradient(135deg, ${accentColor} 0%, #000000 100%)`,
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: '300', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Transform Your Operations</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9' }}>
            Partner with JRKS Industrial Consultant Services for operational excellence.
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

export default JrksIndustrialConsultantServices;
