import { useEffect } from 'react';

const SEO = ({ title, description, keywords, schema }) => {
  const siteTitle = "JRKSGROUP";

  useEffect(() => {
    // Update Title
    document.title = title ? `${title} | ${siteTitle}` : siteTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || "JRKSGROUP - A diversified conglomerate.";

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || "JRKSGROUP, Steel, Power, Finance";

    // Add Structured Data (JSON-LD)
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schema);
    }

    // Cleanup function to reset title/meta when component unmounts (optional, but good practice)
    return () => {
      // We generally don't want to clear description/keywords on unmount as the next page will set them,
      // but we could reset title if needed. For now, we leave it.
    };
  }, [title, description, keywords, schema]);

  return null; // This component renders nothing
};

export default SEO;
