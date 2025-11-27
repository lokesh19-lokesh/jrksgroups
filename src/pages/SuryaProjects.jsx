import React from 'react';
import { Link } from 'react-router-dom';

const SuryaProjects = () => {
  const sectors = [
    { title: "Civil Contract Works", icon: "🏗️", desc: "High-quality civil construction and infrastructure development, ranging from residential complexes to large-scale industrial facilities." },
    { title: "Electrical Contract Works", icon: "⚡", desc: "Comprehensive electrical contracting services for industrial and commercial projects, ensuring safety and efficiency." },
    { title: "Central Government Projects", icon: "🏛️", desc: "Trusted partner for major Central Government infrastructure initiatives, delivering projects of national importance." },
    { title: "Railway Contracts", icon: "🚂", desc: "Specialized execution of railway infrastructure, track laying, and station modernization projects." },
    { title: "NMDC Projects", icon: "⛏️", desc: "Expertise in complex mining infrastructure and support projects for the National Mineral Development Corporation." },
    { title: "Roads & Buildings", icon: "🛣️", desc: "Construction of durable roads, highways, and state-of-the-art public and private buildings." }
  ];

  const features = [
    { title: "Timely Delivery", icon: "⏱️", desc: "We pride ourselves on completing projects within the stipulated timeframe without compromising quality." },
    { title: "Quality Assurance", icon: "🛡️", desc: "Adhering to the highest standards of construction and safety to ensure long-lasting infrastructure." },
    { title: "Expert Team", icon: "👷", desc: "A dedicated team of engineers, architects, and skilled workers committed to excellence." }
  ];

  return (
    <div className="surya-projects-page">
      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '70vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
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
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1
        }}></div>
        <div className="hero-content" style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Surya Projects</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: '1', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Building the Nation's Infrastructure with Precision and Integrity.
          </p>
          <div style={{ height: '4px', width: '100px', backgroundColor: '#fff', margin: '0 auto', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container" style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: '#333', marginBottom: '1.5rem' }}>Engineering Excellence</h2>
          <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
            Surya Projects is a premier contracting firm dedicated to delivering world-class infrastructure.
            With a robust portfolio spanning Civil, Electrical, and Government sectors, we are committed to
            transforming blueprints into reality. Our expertise in executing complex projects for Railways
            and NMDC stands as a testament to our technical prowess and project management capabilities.
          </p>
        </div>
      </section>

      {/* Key Sectors Grid */}
      <section className="section-container" style={{ backgroundColor: '#f9f9f9', padding: '5rem 2rem' }}>
        <div className="section-title">
          <h2>Our Expertise</h2>
          <div className="divider"></div>
          <p style={{ marginTop: '1rem', color: '#666' }}>
            Delivering specialized solutions across diverse sectors.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem',
          marginTop: '3rem'
        }}>
          {sectors.map((sector, index) => (
            <div key={index} style={{
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              borderRadius: '12px',
              backgroundColor: 'white',
              textAlign: 'left',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              borderBottom: '4px solid #8B0000'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{sector.icon}</div>
              <h3 style={{ color: '#8B0000', marginBottom: '1rem', fontSize: '1.5rem' }}>{sector.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{sector.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container" style={{ padding: '5rem 2rem' }}>
        <div className="section-title">
          <h2>Why Choose Surya Projects?</h2>
          <div className="divider"></div>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '3rem',
          marginTop: '3rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              flex: '1 1 300px',
              maxWidth: '400px',
              textAlign: 'center',
              padding: '2rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#fff0f0',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                margin: '0 auto 1.5rem auto',
                color: '#8B0000'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>{feature.title}</h3>
              <p style={{ color: '#666' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready to Build the Future?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem auto', opacity: '0.9' }}>
          Partner with Surya Projects for reliable, high-quality, and timely execution of your infrastructure needs.
        </p>
        <Link to="/contact" style={{
          display: 'inline-block',
          padding: '1rem 2.5rem',
          backgroundColor: '#8B0000',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '50px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#a50000'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#8B0000'}
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  );
};

export default SuryaProjects;
