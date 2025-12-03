import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import careerHeroImg from '../assets/career-img.avif';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    role: "",
    resume: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loade
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("address", formData.address);
    form.append("role", selectedJob.title);
    form.append("resume", formData.resume);

    const res = await fetch("http://localhost:5000/apply", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setShowApplicationForm(false);
      setSubmitSuccess(true);
    } else {
      alert("Something went wrong. Try again!");
    }
  };

  // Form data


  // ⭐ Razorpay Payment Function





  const allJobs = [
    // Universal Solar Power Systems
    {
      title: "Solar Installation Technician",
      company: "Universal Solar Power Systems",
      location: "Hyderabad",
      type: "Full Time",
      description: "Responsible for installing and maintaining solar PV systems. Must have experience with electrical wiring and roofing. Join us to power the future with renewable energy. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Sales Executive - Renewable Energy",
      company: "Universal Solar Power Systems",
      location: "Bangalore",
      type: "Full Time",
      description: "Drive sales for our solar solutions. We are looking for energetic individuals with a passion for green energy and a track record in B2C or B2B sales. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Solar Engineering Intern",
      company: "Universal Solar Power Systems",
      location: "Hyderabad",
      type: "Internship",
      description: "Learn the ropes of solar system design and engineering. Work closely with our senior engineers on real-world projects. Internship for MBA & ENGINEERING & POLYTECHNIC & GRADUATION required."
    },

    // Jrks Traders
    {
      title: "Supply Chain Manager",
      company: "Jrks Traders",
      location: "Mumbai",
      type: "Full Time",
      description: "Oversee our steel trading supply chain. Optimize logistics, manage vendor relationships, and ensure timely delivery of industrial materials. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Procurement Specialist",
      company: "Jrks Traders",
      location: "Delhi",
      type: "Full Time",
      description: "Handle procurement of raw materials. Negotiate with suppliers to get the best deals for our trading operations. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Logistics Intern",
      company: "Jrks Traders",
      location: "Mumbai",
      type: "Internship",
      description: "Gain hands-on experience in logistics management. Assist in tracking shipments and coordinating with transport partners. Internship for MBA & ENGINEERING & POLYTECHNIC & GRADUATION required."
    },

    // NRS Trust Capital
    {
      title: "Financial Analyst",
      company: "NRS Trust Capital",
      location: "Hyderabad",
      type: "Full Time",
      description: "Analyze financial data to help our clients make informed investment decisions. Strong modeling and analytical skills required. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Loan Officer",
      company: "NRS Trust Capital",
      location: "Chennai",
      type: "Full Time",
      description: "Evaluate loan applications and assess creditworthiness. Help individuals and businesses secure the funding they need. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Finance Intern",
      company: "NRS Trust Capital",
      location: "Hyderabad",
      type: "Internship",
      description: "Support our finance team with data entry, report generation, and market research. Great opportunity for finance students. Internship for MBA & ENGINEERING & POLYTECHNIC & GRADUATION required."
    },

    // Industrial Consultant Services
    {
      title: "Industrial Safety Consultant",
      company: "Industrial Consultant Services",
      location: "Pune",
      type: "Contract",
      description: "Advise factories on safety standards and regulations. Conduct audits and implement safety protocols to prevent accidents. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Process Improvement Engineer",
      company: "Industrial Consultant Services",
      location: "Hyderabad",
      type: "Full Time",
      description: "Analyze industrial processes to identify bottlenecks and inefficiencies. Implement lean methodologies to improve productivity. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Industrial Management Intern",
      company: "Industrial Consultant Services",
      location: "Pune",
      type: "Internship",
      description: "Assist consultants in data collection and analysis. Learn about industrial operations and management consulting. Internship for MBA & ENGINEERING & POLYTECHNIC & GRADUATION required."
    },

    // Surya Projects
    {
      title: "Civil Engineer",
      company: "Surya Projects",
      location: "Visakhapatnam",
      type: "Full Time",
      description: "Supervise construction projects from start to finish. Ensure quality control and adherence to safety standards on site. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Project Manager",
      company: "Surya Projects",
      location: "Hyderabad",
      type: "Full Time",
      description: "Manage infrastructure projects, coordinate teams, and ensure timely completion within budget. Experience in construction management is a must. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Civil Engineering Intern",
      company: "Surya Projects",
      location: "Visakhapatnam",
      type: "Internship",
      description: "Work on site with our civil engineers. Gain practical experience in construction supervision and project planning. Internship for MBA & ENGINEERING & POLYTECHNIC & GRADUATION required."
    },

    // Sri Vedantha Educational Trust
    {
      title: "Program Coordinator",
      company: "Sri Vedantha Educational Trust",
      location: "Hyderabad",
      type: "Full Time",
      description: "Coordinate our educational programs and community outreach initiatives. Passion for education and social impact is essential. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Vocational Trainer",
      company: "Sri Vedantha Educational Trust",
      location: "Rural Districts",
      type: "Part Time",
      description: "Train youth in vocational skills to improve their employability. Experience in skill development training is preferred. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Social Work Intern",
      company: "Sri Vedantha Educational Trust",
      location: "Hyderabad",
      type: "Internship",
      description: "Assist in organizing community events and educational workshops. Ideal for social work or education students. Internship for MBA & ENGINEERING & POLYTECHNIC & GRADUATION required."
    },

    // Universal Cancer Screening
    {
      title: "Community Health Worker",
      company: "Universal Cancer Screening",
      location: "Pan India",
      type: "Full Time",
      description: "Raise awareness about cancer screening in communities. Organize camps and facilitate early detection programs. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Medical Technician",
      company: "Universal Cancer Screening",
      location: "Hyderabad",
      type: "Full Time",
      description: "Operate screening equipment and assist doctors during camps. Certification in medical lab technology is required. Education Qualification: MBA, MTECH, BTECH, MCOM, BCOM."
    },
    {
      title: "Public Health Intern",
      company: "Universal Cancer Screening",
      location: "Hyderabad",
      type: "Internship",
      description: "Support our public health initiatives. Assist in data management and program evaluation. Internship for MBA & ENGINEERING & POLYTECHNIC & GRADUATION required."
    }
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

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(false);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setShowApplicationForm(false);
  };

  return (
    <div className="career-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#f9f9f9', position: 'relative' }}>
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
        backgroundImage: `url(${careerHeroImg})`,
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
          <h1 style={{ fontSize: isMobile ? '2rem' : '3.5rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Build Your Career With Us</h1>
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
                <button
                  onClick={() => handleApplyClick(job)}
                  style={{
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


      {/* Job Application Modal */}
      {selectedJob && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              animation: "fadeIn 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div
              style={{
                padding: "2rem",
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    color: "#003366",
                    margin: "0 0 0.5rem 0",
                  }}
                >
                  {showApplicationForm ? "Application Form" : selectedJob.title}
                </h3>

                <p style={{ margin: 0, color: "#666", fontWeight: "500" }}>
                  {showApplicationForm
                    ? `Applying for: ${selectedJob.title}`
                    : selectedJob.company}
                </p>
              </div>

              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#999",
                }}
              >
                &times;
              </button>
            </div>

            {/* BODY */}
            <div style={{ padding: "2rem" }}>

              {/* JOB DETAILS VIEW */}
              {!showApplicationForm ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                      fontSize: "0.9rem",
                      color: "#555",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "#f0f4f8",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "20px",
                      }}
                    >
                      📍 {selectedJob.location}
                    </span>
                    <span
                      style={{
                        backgroundColor: "#f0f4f8",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "20px",
                      }}
                    >
                      🕒 {selectedJob.type}
                    </span>
                  </div>

                  <h4 style={{ fontSize: "1.1rem", color: "#333", marginBottom: "0.5rem" }}>
                    Job Description
                  </h4>
                  <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "2rem" }}>
                    {selectedJob.description}
                  </p>

                  <button
                    style={{
                      width: "100%",
                      padding: "1rem",
                      backgroundColor: "#003366",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowApplicationForm(true)}
                  >
                    Apply Now
                  </button>
                </>
              ) : (

                /* APPLICATION FORM */
                <form onSubmit={handleSubmit}>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontWeight: "600" }}>Full Name</label>
                    <input
                      name="name"
                      onChange={handleChange}
                      type="text"
                      required
                      style={{
                        width: "100%",
                        padding: "0.8rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontWeight: "600" }}>Phone Number</label>
                    <input
                      name="phone"
                      onChange={handleChange}
                      type="tel"
                      required
                      style={{
                        width: "100%",
                        padding: "0.8rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontWeight: "600" }}>Email</label>
                    <input
                      name="email"
                      onChange={handleChange}
                      type="email"
                      required
                      style={{
                        width: "100%",
                        padding: "0.8rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontWeight: "600" }}>Address</label>
                    <textarea
                      name="address"
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.8rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        minHeight: "80px",
                      }}
                    ></textarea>
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontWeight: "600" }}>Role Applying For</label>
                    <select
                      name="role"
                      defaultValue={selectedJob.title}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.8rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                      }}
                    >
                      {allJobs.map((job, idx) => (
                        <option key={idx} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ fontWeight: "600" }}>Upload Resume</label>
                    <input
                      name="resume"
                      onChange={handleChange}
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      style={{
                        width: "100%",
                        padding: "0.5rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", gap: "1rem" }}>
                    <button
                      type="button"
                      onClick={() => setShowApplicationForm(false)}
                      style={{
                        flex: 1,
                        padding: "1rem",
                        backgroundColor: "transparent",
                        color: "#666",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                      }}
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      style={{
                        flex: 2,
                        padding: "1rem",
                        backgroundColor: loading ? "#666" : "#003366",
                        color: "white",
                        borderRadius: "6px",
                        cursor: "pointer",     // FIX for hand icon
                        opacity: loading ? 0.7 : 1,
                      }}
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Application"}
                    </button>

                  </div>

                </form>

              )}
              {submitSuccess && (
                <div style={{
                  padding: "2rem",
                  textAlign: "center",
                  animation: "fadeIn 0.3s ease-out"
                }}>
                  <h2 style={{ color: "green", marginBottom: "1rem" }}>
                    ✔ Form Submitted Successfully!
                  </h2>

                  <p style={{ color: "#444", marginBottom: "1rem" }}>
                    You will receive a verification email shortly.<br />
                    Please check your inbox.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setSelectedJob(null); // close modal
                    }}
                    style={{
                      padding: "0.8rem 1.5rem",
                      backgroundColor: "#003366",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      marginTop: "1rem"
                    }}
                  >
                    Close
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}


      {/* PAYMENT SUCCESS POPUP */}



      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

    </div>
  );
};

export default Career;
