import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import heroVideo from '../assets/herosection/hero2.mp4';
import s1 from '../assets/1.png';
import s2 from '../assets/2.png';
import s3 from '../assets/3.png';
import s4 from '../assets/4.png';
import businessBg from '../assets/SteelAuthorityofIndiadealers.jpg';
import solar from '../assets/solar.jpeg';
import aboutimage from '../assets/about.jpeg';
import JRKSTraders from '../assets/JRKSTraders.png';
import NRSFirstCapital from '../assets/nrs.png';
import suryaProjects from '../assets/surya.png';
import education from '../assets/education.png';
import ConsultantServices from '../assets/ConsultantServices.png';

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Universal Solar Power Systems",
      subtitle: "Leading solutions in power management and industrial energy systems.",
      image: s1
    },
    {
      id: 2,
      title: "JRKS Traders",
      subtitle: "Your trusted partner for steel trading and industrial raw materials.",
      image: s2
    },
    {
      id: 3,
      title: "NRS Trust Capital",
      subtitle: "Financial services and capital management for sustainable growth.",
      image: s3
    },
    {
      id: 4,
      title: "Jrks Industrial Consultant Services",
      subtitle: "Expert industrial consultancy to optimize your business operations.",
      image: s4
    }
  ];


  const businesses = [
    {
      title: "Universal Solar Power Systems",
      description: "Leading solutions in power management and industrial energy systems.",
      link: "/universal-power-systems",
      image: solar,
      bgColor: "#003366",
      textColor: "#ffffff"
    },
    {
      title: "JRKS Traders",
      description: "Your trusted partner for steel trading and industrial raw materials.",
      link: "/jrks-traders",
      image: JRKSTraders,
      bgColor: "#D4AF37",
      textColor: "#003366"
    },
    {
      title: "NRS TRUST Capital",
      description: "Financial services and capital management for sustainable growth.",
      link: "/nrs-trust-capital",
      image: NRSFirstCapital,
      bgColor: "#0056b3",
      textColor: "#ffffff"
    },
    {
      title: "Consultant Services",
      description: "Expert industrial consultancy to optimize your business operations.",
      link: "/jrks-industrial-consultant-services",
      image: ConsultantServices,
      bgColor: "#333333",
      textColor: "#ffffff"
    },
    {
      title: "Surya Projects",
      description: "Specializing in Civil, Electrical, Railway, and Government infrastructure projects.",
      link: "/surya-projects",
      image: suryaProjects,
      bgColor: "#8B0000",
      textColor: "#ffffff"
    },
    {
      title: "Sri Vedantha Educational Trust",
      description: "Empowering the future through education.",
      link: "/sri-vedantha-educational-trust",
      image: education,
      bgColor: "#4B0082",
      textColor: "#ffffff"
    },
    {
      title: "Universal Cancer Screening",
      description: "Early detection saves lives. Comprehensive screening programs led by Dr. Lakshmi.",
      link: "/universal-cancer-screening",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgColor: "#D63384",
      textColor: "#ffffff"
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "JRKSGROUP",
      "url": "https://www.jrksgroup.com",
      "logo": "https://www.jrksgroup.com/logo.png",
      "description": "JRKSGROUP is a diversified conglomerate with a commanding presence in Steel Trading, Power Systems, Financial Services, Industrial Consultancy, Infrastructure, and Education.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Corporate Park, Financial District",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500032",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9390800446",
        "contactType": "customer service"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does JRKSGROUP provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JRKSGROUP offers a wide range of services including Universal Solar Power Systems, JRKS Traders (Steel Trading), NRS Trust Capital (Financial Services), Industrial Consultant Services, Surya Projects (Infrastructure), Sri Vedantha Educational Trust, and Universal Cancer Screening."
          }
        },
        {
          "@type": "Question",
          "name": "Where is JRKSGROUP headquartered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JRKSGROUP is headquartered in Hyderabad, Telangana, India, with operations spanning across various sectors."
          }
        }
      ]
    }
  ];

  return (
    <div>
      <SEO
        title="Home"
        description="Jrks Group - Leading solutions in Steel Trading, Power Systems, Financial Services, and more."
        schema={schema}
      />
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Universal Solar Power Systems</h1>
          <p>Leading solutions in power management and industrial energy systems.</p>
          <Link to="/universal-power-systems" className="cta-button" style={{ marginTop: '1rem', display: 'inline-block' }}>
            Partner With Us
          </Link>
        </div>
      </section>

      <section className="section-container" style={{ backgroundColor: '#fff', paddingBottom: '2rem' }}>
        <div className="section-title">
          <h2>Corporate Overview</h2>
          <div className="divider"></div>
        </div>
        <div style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1 1 400px' }}>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', textAlign: 'left' }}>
              <strong>Jrks Group</strong> is a diversified conglomerate with a commanding presence in <strong>Steel Trading, Power Systems, Financial Services, Industrial Consultancy, Infrastructure, and Education</strong>.
              Driven by a vision of excellence and a commitment to nation-building, we empower industries and enrich lives through our multifaceted ventures.
            </p>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <img
              src={aboutimage}
              alt="Jrks Group Overview"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'scale-down',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
              }}
            />
          </div>
        </div>
      </section>

      <section className="section-container" style={{
        position: 'relative',
        backgroundImage: `url(${businessBg})`,
        backgroundColor: '#003366',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 2rem',
        marginTop: '0'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1
        }}></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title">
            <h2 style={{ color: 'white' }}>Our Group Companies</h2>
            <div className="divider" style={{ backgroundColor: '#D4AF37' }}></div>
            <p style={{ marginTop: '1rem', color: '#f0f0f0', fontSize: '1.1rem' }}>
              A synergy of specialized verticals driving value and innovation.
            </p>
          </div>

          <div className="cards-grid home-business-grid">
            {businesses.map((business, index) => (
              <div
                key={index}
                className="business-card fade-in-up"
                style={{
                  backgroundColor: business.bgColor,
                  color: business.textColor,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="card-image" style={{ backgroundImage: `url(${business.image})` }}></div>
                <div className="card-content">
                  <h3 style={{ color: business.textColor }}>{business.title}</h3>
                  <p style={{ color: business.textColor, opacity: 0.9 }}>{business.description}</p>
                  <Link
                    to={business.link}
                    className="card-link"
                    style={{ color: business.textColor }}
                  >
                    Visit Company Page
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Answer Engine Optimization (AEO) - FAQ Section */}
      <section className="section-container" style={{ backgroundColor: '#f9f9f9', padding: '4rem 2rem' }}>
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <div className="divider"></div>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <details style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <summary style={{ fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer', color: '#003366' }}>What services does JRKSGROUP provide?</summary>
            <p style={{ marginTop: '1rem', color: '#555', lineHeight: '1.6' }}>
              JRKSGROUP offers a comprehensive range of services across multiple sectors, including Universal Solar Power Systems, JRKS Traders (Steel Trading and raw materials), NRS Trust Capital (Financial Services), Industrial Consultant Services, Surya Projects (Infrastructure and Engineering), Sri Vedantha Educational Trust, and Universal Cancer Screening.
            </p>
          </details>
          <details style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <summary style={{ fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer', color: '#003366' }}>Where is JRKSGROUP headquartered?</summary>
            <p style={{ marginTop: '1rem', color: '#555', lineHeight: '1.6' }}>
              Our corporate office is headquartered in the Financial District of Hyderabad, Telangana, India. From here, we coordinate our nationwide and global operations, driving value and innovation across all our specialized verticals.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Home;