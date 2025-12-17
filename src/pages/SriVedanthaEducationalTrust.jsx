import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SriVedanthaEducationalTrust = () => {
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

  const programs = [
    { title: "Quality Education", icon: "📚", desc: "Providing accessible and high-quality education to students from all backgrounds." },
    { title: "Skill Development", icon: "🛠️", desc: "Vocational training programs to enhance employability and practical skills." },
    { title: "Scholarships", icon: "🎓", desc: "Financial aid and scholarships for meritorious and underprivileged students." },
    { title: "Community Outreach", icon: "🤝", desc: "Engaging with local communities to promote literacy and educational awareness." }
  ];

  const features = [
    { title: "Dedicated Faculty", icon: "👩‍🏫", desc: "Experienced educators committed to student success." },
    { title: "Holistic Growth", icon: "🌱", desc: "Focus on academic, physical, and emotional development." },
    { title: "Modern Facilities", icon: "🏫", desc: "State-of-the-art infrastructure to support learning." }
  ];

  const accentColor = "#4B0082"; // Indigo

  return (
    <div className="educational-trust-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#fff' }}>
      <SEO
        title="Sri Vedantha Educational Trust"
        description="Empowering the future through education and academic excellence."
        keywords="Education, Scholarship, Skill Development, Community Outreach, Vocational Training"
      />

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#f8f9fa', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: accentColor, fontWeight: '600' }}>Sri Vedantha Educational Trust</span>
      </div>

      {/* Hero Section */}
     
 <section className="news-hero">
        <div className="news-hero-bg sri"></div>
        <div className="section-container news-hero-content">
          <div style={{ maxWidth: '600px', margin: '0 auto 0 0' }}>
            <div style={{
              width: '50px',
              height: '5px',
              backgroundColor: '#D4AF37',
              marginBottom: '2rem'
            }}></div>
            <h1 className="news-hero-title">
              Sri Vedantha Educational Trust
            </h1>
            <p className="news-hero-subtitle">
              Empowering the Future Through Education.
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
              <button onClick={() => scrollToSection('programs')} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
              }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                Our Programs
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Our Mission</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
              Sri Vedantha Educational Trust is committed to providing quality education and fostering holistic development for students. We believe in the power of knowledge to transform lives.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              Our initiatives are designed to bridge the gap between potential and opportunity, ensuring that every student has the resources and support they need to succeed.
            </p>
          </section>

          {/* Programs Section */}
          <section id="programs" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Our Programs</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>
            <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
              Comprehensive educational initiatives for a brighter tomorrow.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {programs.map((program, index) => (
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
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{program.icon}</div>
                  <h3 style={{ color: accentColor, marginBottom: '1rem', fontSize: '1.3rem' }}>{program.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>{program.desc}</p>
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
        background: `linear-gradient(135deg, ${accentColor} 0%, #2a004d 100%)`,
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: '300', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Join Our Mission</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9' }}>
            Support Sri Vedantha Educational Trust in shaping the leaders of tomorrow.
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
            Get Involved
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SriVedanthaEducationalTrust;
