import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Universal Power Systems",
      subtitle: "Leading solutions in power management and industrial energy systems.",
      image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Jrks Traders",
      subtitle: "Your trusted partner for steel trading and industrial raw materials.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "NRS First Capital",
      subtitle: "Financial services and capital management for sustainable growth.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Jrks Industrial Consultant Services",
      subtitle: "Expert industrial consultancy to optimize your business operations.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]); // Restart timer on slide change

  return (
    <div>
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.7)), url(${slides[currentSlide].image})` }}>
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

      <section className="section-container">
        <div className="section-title">
          <h2>Our Businesses</h2>
          <div className="divider"></div>
          <p style={{ marginTop: '1rem', color: '#666' }}>
            Driving value through diverse business interests.
          </p>
        </div>

        <div className="cards-grid">
          {/* Card 1 */}
          <div className="business-card">
            <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565610222536-ef125c59da2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
            <div className="card-content">
              <h3>Universal Power Systems</h3>
              <p>Leading solutions in power management and industrial energy systems.</p>
              <Link to="/universal-power-systems" className="card-link">Learn More</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="business-card">
            <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
            <div className="card-content">
              <h3>Jrks Traders</h3>
              <p>Your trusted partner for steel trading and industrial raw materials.</p>
              <Link to="/jrks-traders" className="card-link">Learn More</Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="business-card">
            <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
            <div className="card-content">
              <h3>NRS First Capital</h3>
              <p>Financial services and capital management for sustainable growth.</p>
              <Link to="/nrs-first-capital" className="card-link">Learn More</Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="business-card">
            <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
            <div className="card-content">
              <h3>Consultant Services</h3>
              <p>Expert industrial consultancy to optimize your business operations.</p>
              <Link to="/jrks-industrial-consultant-services" className="card-link">Learn More</Link>
            </div>
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
