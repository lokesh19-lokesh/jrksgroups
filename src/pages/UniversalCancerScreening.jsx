import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const UniversalCancerScreening = () => {
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

  const accentColor = "#D63384"; // Pink for Breast Cancer Awareness / General Health

  return (
    <div className="universal-cancer-screening-page" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', backgroundColor: '#fff' }}>
      <SEO
        title="Universal Cancer Screening"
        description="Early detection saves lives. Comprehensive screening programs led by Dr. Lakshmi."
        keywords="Cancer Screening, Breast Cancer, Cervical Cancer, Dr. Lakshmi, Early Detection"
      />

      {/* Breadcrumbs */}
      <div style={{ padding: '1rem 5%', backgroundColor: '#f8f9fa', fontSize: '0.9rem', borderBottom: '1px solid #e9ecef' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#6c757d' }}>&gt;</span>
        <span style={{ color: accentColor, fontWeight: '600' }}>Universal Cancer Screening</span>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={{
        height: '60vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)', // Medical/Care background
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
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }}></div>
        <div className="hero-content" style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Universal Cancer Screening</h1>
          <p style={{ fontSize: '1.5rem', opacity: '1', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', maxWidth: '800px', margin: '0 auto' }}>
            Early Detection Saves Lives. Led by Dr. Lakshmi.
          </p>
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
            {['Profile', 'Training', 'Experience', 'Education', 'Voluntary Work', 'Cancer Screening'].map((item) => (
              <li key={item} style={{ marginBottom: '1rem' }}>
                <button onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))} style={{
                  background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '1rem', textAlign: 'left', padding: 0, fontWeight: '500', transition: 'color 0.2s'
                }} onMouseOver={(e) => e.target.style.color = accentColor} onMouseOut={(e) => e.target.style.color = '#555'}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: '1', minWidth: '300px' }}>

          {/* Profile Section */}
          <section id="profile" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>Dr. Lakshmi</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>

            <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', borderLeft: `4px solid ${accentColor}` }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>Date of Birth:</strong> September 20, 1945</p>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>Present Work:</strong> Affiliated with Bristlecone Hospital, Omega Hospital, Femina Hospital, Nova Hospital, Vivekananda Hospital, Motherhood, Lucid, Hyderabad, India</p>
            </div>
          </section>

          {/* Training Section */}
          <section id="training" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#444' }}>Specialized Training</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                "Operative Hysteroscopy, France, Prof. Jacques Hamou",
                "Operative Laparoscopic Surgery, Germany",
                "Laparoscopic Oncological Surgery, Lymphadenectomy, France",
                "Advanced Obstetrics Ultrasound, King’s College, U.K., Prof. Stuart Campbell",
                "Yearly CME Courses Harvard University"
              ].map((item, index) => (
                <li key={index} style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'start' }}>
                  <span style={{ color: accentColor, marginRight: '10px' }}>•</span> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Work Experience Section */}
          <section id="experience" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#444' }}>Work Experience</h3>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {[
                { year: "1982-2010", role: "Private Practice as physician and surgeon", loc: "Philadelphia, Bryn Mawr, Pennsylvania, and California, USA" },
                { year: "1977-1979", role: "Fellowship in Gynecological Oncology", loc: "Temple University Hospital, Philadelphia, PA" },
                { year: "1975-1976", role: "Internship in Obstetrics & Gynecology", loc: "Hahneman Hospital, Philadelphia, PA" },
                { year: "1974-1975", role: "Chief Resident and Registrar, OB-GYN", loc: "Leicester Hospital, U.K." },
                { year: "1972-1974", role: "House Surgeon", loc: "Sunderland General Hospital, U.K." }
              ].map((job, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem' }}>
                  <div style={{ minWidth: '120px', fontWeight: 'bold', color: accentColor }}>{job.year}</div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{job.role}</div>
                    <div style={{ color: '#666' }}>{job.loc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#444' }}>Education & Qualifications</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { year: "1990", deg: "Fellowship of the Royal College of Obstetrics and Gynaecology (FRCOG)", loc: "London, U.K. (Special mention for academic achievements and service)" },
                { year: "1985", deg: "FRCOG Work experience", loc: "" },
                { year: "1983", deg: "Fellowship of the American College of Obstetrics and Gynecology", loc: "" },
                { year: "1980", deg: "Board Exam Obstetrics & Gynecology Part 2", loc: "" },
                { year: "1976", deg: "Board Exam Obstetrics & Gynecology Part 1", loc: "" },
                { year: "1975", deg: "Membership of the Royal College of Obstetrics and Gynaecology (MRCOG)", loc: "London, U.K." },
                { year: "1973", deg: "Educational Commission for Foreign Medical Graduates (ECFMG)", loc: "" },
                { year: "1972", deg: "Diploma in Obstetrics & Gynaecology (DGO)", loc: "Andhra Univ. Vizag" },
                { year: "Dec, 1969", deg: "MBBS", loc: "Armed Forces Medical College (AFMC), Pune" },
                { year: "1962", deg: "Pre-Medical", loc: "Dayal Singh College, New Delhi" },
                { year: "1960", deg: "SSC, First Class", loc: "Bishop Azariah High School, Vijayawada, India" }
              ].map((edu, index) => (
                <div key={index} style={{ padding: '0.5rem 0', borderBottom: '1px dashed #eee' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '1rem', color: '#555' }}>{edu.year}</span>
                  <span style={{ fontWeight: '600' }}>{edu.deg}</span>
                  {edu.loc && <span style={{ display: 'block', color: '#777', fontSize: '0.9rem', marginTop: '0.2rem' }}>{edu.loc}</span>}
                </div>
              ))}
            </div>
          </section>

          {/* Voluntary Work Section */}
          <section id="voluntary-work" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#444' }}>Voluntary Work & Impact</h3>
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: accentColor, marginBottom: '0.5rem' }}>Promoting Advanced Medicine (1983)</h4>
                <p style={{ color: '#555', lineHeight: '1.6' }}>Promoted the Chinmaya Post Graduate Institute (CPGI), India, affiliated to the Chinmaya Institute for Continuing Medical Education (CICME), USA to introduce advanced medical technology and new surgical techniques to India.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: accentColor, marginBottom: '0.5rem' }}>Medical Education & Camps (1983-89)</h4>
                <p style={{ color: '#555', lineHeight: '1.6' }}>Conducted seminars, hands-on training workshops, and treatment camps in gynecological oncology, laparoscopic surgery, in-vitro fertilization (IVF), prevention of cervical cancer, uterine cancer, ovarian cancer, management of high risk pregnancy, and breast cancer awareness.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: accentColor, marginBottom: '0.5rem' }}>Mammography Campaign (1989)</h4>
                <p style={{ color: '#555', lineHeight: '1.6' }}>Self-financed Mammography Campaign in India: Purchased and brought 11 mammography machines and sponsored 25 doctors and technicians to screen 8,500 women free of charge in 11 cities (rural and urban). Collected extensive data for a groundbreaking, first-of-its-kind report on the incidence of breast cancer in India.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: accentColor, marginBottom: '0.5rem' }}>Community Service (2004-2006)</h4>
                <p style={{ color: '#555', lineHeight: '1.6' }}>Volunteered at the Hollywood Sunset Free Clinic, counseling and educating homeless and indigent patients on issues like AIDS, Venereal Disease, sexually transmitted diseases, nutrition, weight control, diabetes, hypertension, nutrition in pregnancy, and pre-natal care.</p>
              </div>
            </div>
          </section>

          {/* Licenses Section */}
          <section id="licenses" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#444' }}>Licenses</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>✅ Licensed in California to operate medical equipment in gynecological and urological procedures.</li>
              <li>✅ Serve Safe – National License to work in any food industry, restaurants, etc.</li>
            </ul>
          </section>

          {/* Cancer Screening Info Section */}
          <section id="cancer-screening" style={{ backgroundColor: '#fff0f5', padding: '2rem', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', fontWeight: '300' }}>About Cancer Screening</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: accentColor, marginBottom: '2rem' }}></div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
              Cancer screening is looking for cancer before a person has any symptoms. Screening tests can help find cancer at an early stage, before symptoms appear. When abnormal tissue or cancer is found early, it may be easier to treat or cure. By the time symptoms appear, the cancer may have grown and spread. This can make the cancer harder to treat or cure.
            </p>

            <h3 style={{ fontSize: '1.5rem', color: accentColor, marginBottom: '1rem' }}>Why is Screening Important?</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
              Universal cancer screening aims to reduce the number of people who develop cancer and the number of people who die from cancer. Dr. Lakshmi has dedicated a significant portion of her career to bringing advanced screening technologies, such as mammography, to populations that previously lacked access.
            </p>

            <h3 style={{ fontSize: '1.5rem', color: accentColor, marginBottom: '1rem' }}>Key Screening Areas</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '6px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#333' }}>Breast Cancer</h4>
                <p style={{ fontSize: '0.95rem', color: '#666' }}>Mammograms are the best way to find breast cancer early, when it is easier to treat and before it is big enough to feel or cause symptoms.</p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '6px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#333' }}>Cervical Cancer</h4>
                <p style={{ fontSize: '0.95rem', color: '#666' }}>The Pap test can find abnormal cells in the cervix which may turn into cancer. The HPV test looks for the virus that causes these cell changes.</p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '6px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#333' }}>Ovarian & Uterine Cancer</h4>
                <p style={{ fontSize: '0.95rem', color: '#666' }}>While routine screening tests are less common, awareness of symptoms and family history, along with regular check-ups, are vital for early detection.</p>
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* Call to Action */}
      <section style={{
        background: `linear-gradient(135deg, ${accentColor} 0%, #a02060 100%)`,
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: '300', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Take Charge of Your Health</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9' }}>
            Contact us to learn more about our screening programs and how Dr. Lakshmi's expertise can help you.
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
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
};

export default UniversalCancerScreening;
