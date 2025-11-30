import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const allJobs = [
    // Universal Solar Power Systems
    { title: "Solar Installation Technician", company: "Universal Solar Power Systems", location: "Hyderabad", type: "Full Time" },
    { title: "Sales Executive - Renewable Energy", company: "Universal Solar Power Systems", location: "Bangalore", type: "Full Time" },
    { title: "Solar Engineering Intern", company: "Universal Solar Power Systems", location: "Hyderabad", type: "Internship" },

    // Jrks Traders
    { title: "Supply Chain Manager", company: "Jrks Traders", location: "Mumbai", type: "Full Time" },
    { title: "Procurement Specialist", company: "Jrks Traders", location: "Delhi", type: "Full Time" },
    { title: "Logistics Intern", company: "Jrks Traders", location: "Mumbai", type: "Internship" },

    // NRS Trust Capital
    { title: "Financial Analyst", company: "NRS Trust Capital", location: "Hyderabad", type: "Full Time" },
    { title: "Loan Officer", company: "NRS Trust Capital", location: "Chennai", type: "Full Time" },
    { title: "Finance Intern", company: "NRS Trust Capital", location: "Hyderabad", type: "Internship" },

    // Industrial Consultant Services
    { title: "Industrial Safety Consultant", company: "Industrial Consultant Services", location: "Pune", type: "Contract" },
    { title: "Process Improvement Engineer", company: "Industrial Consultant Services", location: "Hyderabad", type: "Full Time" },
    { title: "Industrial Management Intern", company: "Industrial Consultant Services", location: "Pune", type: "Internship" },

    // Surya Projects
    { title: "Civil Engineer", company: "Surya Projects", location: "Visakhapatnam", type: "Full Time" },
    { title: "Project Manager", company: "Surya Projects", location: "Hyderabad", type: "Full Time" },
    { title: "Civil Engineering Intern", company: "Surya Projects", location: "Visakhapatnam", type: "Internship" },

    // Sri Vedantha Educational Trust
    { title: "Program Coordinator", company: "Sri Vedantha Educational Trust", location: "Hyderabad", type: "Full Time" },
    { title: "Vocational Trainer", company: "Sri Vedantha Educational Trust", location: "Rural Districts", type: "Part Time" },
    { title: "Social Work Intern", company: "Sri Vedantha Educational Trust", location: "Hyderabad", type: "Internship" },

    // Universal Cancer Screening
    { title: "Community Health Worker", company: "Universal Cancer Screening", location: "Pan India", type: "Full Time" },
    { title: "Medical Technician", company: "Universal Cancer Screening", location: "Hyderabad", type: "Full Time" },
    { title: "Public Health Intern", company: "Universal Cancer Screening", location: "Hyderabad", type: "Internship" }
  ];

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCompany = selectedCompany ? job.company === selectedCompany : true;
    const matchesLocation = selectedLocation ? job.location === selectedLocation : true;
    return matchesSearch && matchesCompany && matchesLocation;
  });

  const companies = [
    "Universal Solar Power Systems",
    "Jrks Traders",
    "NRS Trust Capital",
    "Industrial Consultant Services",
    "Surya Projects",
    "Sri Vedantha Educational Trust",
    "Universal Cancer Screening"
  ];

  const locations = ["Hyderabad", "Bangalore", "Mumbai", "Delhi", "Chennai", "Pune", "Visakhapatnam", "Pan India"];

  return (
    <div className="career-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#f9f9f9' }}>
      <SEO
        title="Careers"
        description="Explore job openings and internships across JRKS Group of Companies. Join us in shaping the future."
        keywords="Careers, Jobs, Internships, JRKS Group, Employment, Work With Us"
      />

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#fff', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: '#003366', fontWeight: '600' }}>Careers</span>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '50vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80)',
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
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Build Your Career With Us</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>Join a team that is shaping the future of industry and innovation.</p>
        </div>
      </section>

      {/* Search Section */}
      <section style={{ marginTop: '-3rem', position: 'relative', zIndex: 3, padding: '0 2rem' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          alignItems: 'end'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', fontSize: '0.9rem', color: '#555' }}>Keywords</label>
            <input
              type="text"
              placeholder="Job title, skill or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', fontSize: '0.9rem', color: '#555' }}>Function (Company)</label>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}
            >
              <option value="">All Companies</option>
              {companies.map((company, index) => (
                <option key={index} value={company}>{company}</option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', fontSize: '0.9rem', color: '#555' }}>Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}
            >
              <option value="">All Locations</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <button style={{
            backgroundColor: '#D4AF37',
            color: '#003366',
            border: 'none',
            padding: '0.8rem',
            fontWeight: 'bold',
            borderRadius: '4px',
            cursor: 'pointer',
            height: '42px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Search Jobs</button>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-container" style={{ padding: '5rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#003366' }}>Current Openings</h2>
          <div className="divider" style={{ width: '60px', height: '3px', backgroundColor: '#D4AF37', margin: '1rem auto' }}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div key={index} className="job-card" style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#003366', marginBottom: '0.5rem' }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '1.5rem', color: '#666', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '600', color: '#D4AF37' }}>🏢 {job.company}</span>
                    <span>📍 {job.location}</span>
                    <span>🕒 {job.type}</span>
                  </div>
                </div>
                <button style={{
                  padding: '0.6rem 1.5rem',
                  border: '1px solid #003366',
                  backgroundColor: 'transparent',
                  color: '#003366',
                  borderRadius: '4px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#003366';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#003366';
                  }}
                >Apply Now</button>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
              <p>No jobs found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* General Application CTA */}
      <section style={{ backgroundColor: '#003366', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Don't see the right fit?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            We are always looking for talented individuals. Send us your resume and we will keep it on file for future opportunities.
          </p>
          <Link to="/contact" style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            backgroundColor: '#D4AF37',
            color: '#003366',
            textDecoration: 'none',
            fontWeight: 'bold',
            borderRadius: '4px',
            fontSize: '1.1rem',
            transition: 'transform 0.2s'
          }}>Contact HR Team</Link>
        </div>
      </section>

    </div>
  );
};

export default Career;
