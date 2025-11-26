import React from 'react';

const FraudAlert = () => {
  return (
    <div className="section-container">
      <div className="section-title">
        <h2>Fraud Alert</h2>
        <div className="divider"></div>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
        <p>
          <strong>Caution Notice against Fraudulent Offers</strong>
        </p>
        <p>
          It has come to our attention that certain unscrupulous individuals/agencies are falsely representing themselves as authorized agents or representatives of Jrks Group. They may be offering fraudulent employment opportunities, business partnerships, or demanding money in exchange for services.
        </p>
        <p>
          Please be aware that Jrks Group does not charge any fees for recruitment or business proposals. We do not authorize any third-party agencies to collect money on our behalf.
        </p>
        <p>
          <strong>What to do if you encounter such offers:</strong>
        </p>
        <ul>
          <li>Do not respond to unsolicited emails or calls asking for personal or financial information.</li>
          <li>Verify the authenticity of the communication by contacting us directly through our official channels.</li>
          <li>Report any suspicious activity to the relevant authorities.</li>
        </ul>
        <p>
          Jrks Group shall not be liable for any loss or damage resulting from such fraudulent activities.
        </p>
      </div>
    </div>
  );
};

export default FraudAlert;
