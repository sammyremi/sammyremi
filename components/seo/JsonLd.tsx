import React from "react";
import { siteConfig } from "@/lib/site";

export const JsonLd: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
      caption: siteConfig.name,
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: "SammyRemi Technologies | Website, Mobile App & Software Development",
    description: siteConfig.description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Development & Digital Solutions",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Capabilities",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description:
              "Modern, responsive websites and web applications designed around business goals.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Search Engine Optimization",
            description:
              "Technical SEO, on-page optimization, structured data, Google Search Console setup, performance improvements, and business search visibility.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile Application Development",
            description:
              "Cross-platform iOS and Android mobile applications built for performance and intuitive user experience.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Business Software",
            description:
              "Tailored internal business tooling, custom ERP/CRM engines, and workflow automation systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backend & API Development",
            description:
              "Scalable REST & GraphQL APIs, database architecture and cloud infrastructure integration.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Automation",
            description:
              "Practical AI integration, custom AI assistants, automated document processing, and intelligent workflows.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
};
