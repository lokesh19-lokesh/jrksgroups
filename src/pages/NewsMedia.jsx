import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import nm1 from '../assets/nm1.avif';

const NewsMedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredNews = {
    title: "Accelerating Growth: Jrks Group's Strategic Vision for 2030",
    date: "NOVEMBER 10, 2025",
    category: "STRATEGY",
    image: nm1,
    excerpt: "We are redefining our operational frameworks to embrace sustainability and digital transformation across all verticals."
  };

  const newsItems = [
    {
      title: "Universal Solar: New High-Efficiency Panels",
      date: "OCT 15, 2025",
      category: "INNOVATION",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Pushing the boundaries of renewable energy with 25% greater efficiency."
    },
    {
      title: "SAIL Partnership Renewed",
      date: "SEP 22, 2025",
      category: "BUSINESS",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Strengthening our bond with Steel Authority of India for another 5 years."
    },
    {
      title: "Sri Vedantha Trust: Skill Center Opening",
      date: "AUG 10, 2025",
      category: "CSR",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Empowering 1000+ students annually with vocational training in Hyderabad."
    }
  ];

  return (
    <div className="news-media-page">
      <SEO
        title="News & Media"
        description="Latest insights, updates, and press releases from Jrks Group."
      />

      {/* Hero Section */}
      <section className="news-hero">
        <div className="news-hero-bg"></div>
        <div className="section-container news-hero-content">
          <div style={{ maxWidth: '600px', margin: '0 auto 0 0' }}>
            <div style={{
              width: '50px',
              height: '5px',
              backgroundColor: '#D4AF37',
              marginBottom: '2rem'
            }}></div>
            <h1 className="news-hero-title">
              NEWS & <br />
              INSIGHTS
            </h1>
            <p className="news-hero-subtitle">
              Discover how Jrks Group is shaping industries and empowering communities through innovation and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="news-featured-section">
        <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '3rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#000'
          }}>
            In the Spotlight
          </h2>

          <div className="news-featured-grid">
            <div className="news-featured-image" style={{ backgroundImage: `url(${featuredNews.image})` }}></div>

            <div className="news-featured-text">
              <span style={{ color: '#D4AF37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '1px' }}>
                {featuredNews.category}
              </span>
              <h3 style={{ fontSize: '2rem', color: 'white', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                {featuredNews.title}
              </h3>
              <p style={{ color: '#e0e0e0', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {featuredNews.excerpt}
              </p>
              <Link to="#" style={{
                color: 'white',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '1.1rem'
              }}>
                READ THE STORY <span style={{ marginLeft: '10px', fontSize: '1.5rem' }}>&rsaquo;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="news-latest-section">
        <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '3rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#000'
          }}>
            Latest Updates
          </h2>

          <div className="news-grid">
            {newsItems.map((item, index) => (
              <div key={index} className="news-card">
                <div style={{
                  height: '240px',
                  marginBottom: '1.5rem',
                  overflow: 'hidden'
                }}>
                  <img src={item.image} alt={item.title} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: '#666',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase'
                }}>
                  {item.category} | {item.date}
                </span>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#000',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#333',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  flex: '1'
                }}>
                  {item.excerpt}
                </p>
                <a href="#" style={{
                  color: '#003366',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  READ MORE <span style={{ marginLeft: '5px' }}>&rsaquo;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="news-subscribe-section">
        <div className="news-subscribe-container">
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#003366', marginBottom: '0.5rem' }}>
              Stay Connected
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#003366' }}>
              Subscribe to our newsletter for the latest updates.
            </p>
          </div>
          <div className="news-subscribe-form">
            <input type="email" placeholder="Email Address" className="news-subscribe-input" />
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: '#003366',
              color: 'white',
              border: 'none',
              fontWeight: '700',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsMedia;
