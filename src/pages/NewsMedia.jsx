import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsMedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsItems = [
    {
      title: "Jrks Group Announces Expansion in Solar Sector",
      date: "October 15, 2025",
      category: "Press Release",
      excerpt: "Universal Solar Power Systems launches new high-efficiency panel manufacturing unit to boost renewable energy adoption."
    },
    {
      title: "Strategic Partnership with SAIL Renewed",
      date: "September 22, 2025",
      category: "Business",
      excerpt: "Jrks Traders solidifies its position as a key distributor for Steel Authority of India with a renewed long-term partnership."
    },
    {
      title: "Community Outreach: Education for All",
      date: "August 10, 2025",
      category: "CSR",
      excerpt: "Sri Vedantha Educational Trust inaugurates a new skill development center for underprivileged youth in Hyderabad."
    }
  ];

  return (
    <div className="news-media-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#fff' }}>

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#f8f9fa', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: '#003366', fontWeight: '600' }}>News & Media</span>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '50vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
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
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>News Room</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>Latest updates, press releases, and media coverage.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-container" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#003366' }}>Latest Updates</h2>
          <div className="divider" style={{ width: '60px', height: '3px', backgroundColor: '#D4AF37', margin: '1rem auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {newsItems.map((item, index) => (
            <div key={index} style={{
              border: '1px solid #eee',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              backgroundColor: 'white'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ padding: '2rem' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.8rem',
                  backgroundColor: '#FFF8E7',
                  color: '#D4AF37',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  borderRadius: '20px',
                  marginBottom: '1rem'
                }}>
                  {item.category}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#003366' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '1rem' }}>{item.date}</p>
                <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>{item.excerpt}</p>
                <a href="#" style={{ color: '#003366', fontWeight: '600', textDecoration: 'none' }}>Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NewsMedia;
