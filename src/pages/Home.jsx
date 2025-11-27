import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s1 from '../assets/s12.jpg';
import s2 from '../assets/s2.jpeg';
import s3 from '../assets/s3.jpeg';
import s4 from '../assets/s4.jpeg';
import businessBg from '../assets/SteelAuthorityofIndiadealers.jpg';
import solar from '../assets/solar.jpeg';

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
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]); // Restart timer on slide change

  const businesses = [
    {
      title: "Universal Solar Power Systems",
      description: "Leading solutions in power management and industrial energy systems.",
      link: "/universal-power-systems",
      image: solar,
      bgColor: "#003366", // Deep Blue
      textColor: "#ffffff"
    },
    {
      title: "JRKS Traders",
      description: "Your trusted partner for steel trading and industrial raw materials.",
      link: "/jrks-traders",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgColor: "#D4AF37", // Gold
      textColor: "#003366" // Dark Blue text for contrast
    },
    {
      title: "NRS First Capital",
      description: "Financial services and capital management for sustainable growth.",
      link: "/nrs-first-capital",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgColor: "#0056b3", // Lighter Blue
      textColor: "#ffffff"
    },
    {
      title: "Consultant Services",
      description: "Expert industrial consultancy to optimize your business operations.",
      link: "/jrks-industrial-consultant-services",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgColor: "#333333", // Dark Grey
      textColor: "#ffffff"
    },
    {
      title: "Surya Projects",
      description: "Specializing in Civil, Electrical, Railway, and Government infrastructure projects.",
      link: "/surya-projects",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgColor: "#8B0000", // Dark Red
      textColor: "#ffffff"
    },
    {
      title: "Sri Vedantha Educational Trust",
      description: "Empowering the future through education.",
      link: "/sri-vedantha-educational-trust",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgColor: "#4B0082", // Indigo
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

      <section className="section-container" style={{
        position: 'relative',
        backgroundImage: `url(${businessBg})`,
        backgroundColor: '#003366', // Fallback color
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 2rem',
        marginTop: '2rem'
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

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title">
            <h2 style={{ color: 'white' }}>Our Businesses</h2>
            <div className="divider"></div>
            <p style={{ marginTop: '1rem', color: '#f0f0f0' }}>
              Driving value through diverse business interests.
            </p>
          </div>

          <div className="cards-grid home-business-grid">
            {businesses.map((business, index) => (
              <div
                key={index}
                className="business-card"
                style={{ backgroundColor: business.bgColor, color: business.textColor }}
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
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="section-title">
          <h2>Who We Are</h2>
          <div className="divider"></div>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Jrks Group is a conglomerate with a strong footprint in Steel Trading, Power Systems, Financial Services, and Industrial Consultancy.
            Inspired by the vision of building a self-reliant India, we strive to deliver excellence in every venture we undertake.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
