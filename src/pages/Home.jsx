import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s1 from '../assets/s12.jpg';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.jpeg';
import s4 from '../assets/s4.jpeg';
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
      title: "Universal Power Systems",
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
      title: "NRS First Capital",
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

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentSlide]);

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
      title: "NRS First Capital",
      description: "Financial services and capital management for sustainable growth.",
      link: "/nrs-first-capital",
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
    }
  ];

  return (
    <div>
      <section className="hero-section" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
        <div className="hero-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
          <Link to="/contact" className="cta-button">Partner With Us</Link>
        </div>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
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
    </div>
  );
};

export default Home;