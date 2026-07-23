import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, schema, url = 'https://www.jrksgroup.com' }) => {
  const siteTitle = "JRKSGROUP";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDesc = description || "JRKSGROUP is a diversified conglomerate with a commanding presence in Steel Trading, Power Systems, Financial Services, Industrial Consultancy, Infrastructure, and Education.";
  const metaKeywords = keywords || "JRKSGROUP, Steel, Power, Finance, Education, Infrastructure, Consultant";

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://www.jrksgroup.com/logo.png" />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content="https://www.jrksgroup.com/logo.png" />

      {/* GEO Meta Tags (Local SEO) */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.4123;78.3370" />
      <meta name="ICBM" content="17.4123, 78.3370" />

      {/* Schema.org JSON-LD (AEO & Rich Snippets) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
