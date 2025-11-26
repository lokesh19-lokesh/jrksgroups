import React from 'react';

const Career = () => {
  return (
    <div>
      <section className="career-hero">
        <h1>Build Your Career With Us</h1>
        <p>Join a team that is shaping the future of industry and innovation.</p>
      </section>

      <section className="search-container">
        <div className="form-group">
          <label htmlFor="keywords">Keywords</label>
          <input type="text" id="keywords" placeholder="Job title or skill" />
        </div>
        <div className="form-group">
          <label htmlFor="function">Function</label>
          <select id="function">
            <option value="">All Functions</option>
            <option value="engineering">Engineering</option>
            <option value="finance">Finance</option>
            <option value="sales">Sales & Marketing</option>
            <option value="operations">Operations</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select id="location">
            <option value="">All Locations</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
          </select>
        </div>
        <button className="search-btn">Search Jobs</button>
      </section>

      <section className="job-listings">
        <div className="section-title">
          <h2>Current Openings</h2>
          <div className="divider"></div>
        </div>

        {/* Job Card 1 */}
        <div className="job-card">
          <div className="job-info">
            <h3>Senior Sales Manager</h3>
            <div className="job-meta">
              <span><i className="fas fa-map-marker-alt"></i> Hyderabad</span>
              <span><i className="fas fa-briefcase"></i> Sales & Marketing</span>
              <span><i className="far fa-clock"></i> Full Time</span>
            </div>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>

        {/* Job Card 2 */}
        <div className="job-card">
          <div className="job-info">
            <h3>Industrial Engineer</h3>
            <div className="job-meta">
              <span><i className="fas fa-map-marker-alt"></i> Hyderabad</span>
              <span><i className="fas fa-briefcase"></i> Engineering</span>
              <span><i className="far fa-clock"></i> Full Time</span>
            </div>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>

        {/* Job Card 3 */}
        <div className="job-card">
          <div className="job-info">
            <h3>Financial Analyst</h3>
            <div className="job-meta">
              <span><i className="fas fa-map-marker-alt"></i> Mumbai</span>
              <span><i className="fas fa-briefcase"></i> Finance</span>
              <span><i className="far fa-clock"></i> Full Time</span>
            </div>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>

      </section>
    </div>
  );
};

export default Career;
