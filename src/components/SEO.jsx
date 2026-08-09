import React, { useEffect } from 'react';
import { BASE_URL, DEFAULT_IMAGE, PERSON_SCHEMA, WEBSITE_SCHEMA } from '../data/seoData';

function setMetaTag(attrName, attrValue, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonicalUrl(url) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function setJsonLd(id, data) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export default function SEO({
  title = "Shorya Mahanot | World's Youngest Signature Style Abstract Artist",
  description = "Explore the vibrant signature abstract expressionist artworks, exhibitions, press articles, and bio of Shorya Mahanot, Asia's youngest signature-style abstract painter.",
  keywords = "Shorya Mahanot, Abstract Artist, Youngest Abstract Painter, Child Prodigy Artist, Indian Abstract Art, Signature Style Art, Acrylic on Canvas",
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  breadcrumbs = [],
  artworkData = null
}) {
  useEffect(() => {
    const fullUrl = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
    const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`;

    // 1. Document Title
    document.title = title;

    // 2. Primary Meta Tags
    setMetaTag('name', 'title', title);
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'Shorya Mahanot');
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setCanonicalUrl(fullUrl);

    // 3. Open Graph / Facebook / LinkedIn
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:site_name', 'Shorya Mahanot Art Portfolio');
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:image:alt', title);

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', fullUrl);
    setMetaTag('name', 'twitter:site', '@shoryamahanot');
    setMetaTag('name', 'twitter:creator', '@shoryamahanot');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);
    setMetaTag('name', 'twitter:image:alt', title);

    // 5. Schema.org JSON-LD Structured Data
    // Master Person & WebSite Schema
    setJsonLd('schema-person', PERSON_SCHEMA);
    setJsonLd('schema-website', WEBSITE_SCHEMA);

    // BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          ...breadcrumbs.map((crumb, idx) => ({
            "@type": "ListItem",
            "position": idx + 2,
            "name": crumb.name,
            "item": crumb.url.startsWith('http') ? crumb.url : `${BASE_URL}${crumb.url.startsWith('/') ? crumb.url : `/${crumb.url}`}`
          }))
        ]
      };
      setJsonLd('schema-breadcrumbs', breadcrumbSchema);
    } else {
      const el = document.getElementById('schema-breadcrumbs');
      if (el) el.remove();
    }

    // VisualArtwork Schema (if artwork detail page)
    if (artworkData) {
      const artworkSchema = {
        "@context": "https://schema.org",
        "@type": "VisualArtwork",
        "@id": artworkData.url,
        "name": artworkData.name,
        "image": artworkData.image,
        "description": artworkData.description,
        "artMedium": artworkData.medium || "Acrylic on Canvas",
        "artform": "Abstract Expressionism",
        "material": "Acrylic paint on stretched canvas",
        "creator": {
          "@type": "Person",
          "name": "Shorya Mahanot",
          "url": BASE_URL,
          "sameAs": PERSON_SCHEMA.sameAs
        },
        ...(artworkData.size ? { "size": artworkData.size } : {}),
        ...(artworkData.year ? { "dateCreated": artworkData.year } : {}),
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "url": `${BASE_URL}/contact`,
          "seller": {
            "@type": "Person",
            "name": "Shorya Mahanot"
          }
        }
      };
      setJsonLd('schema-artwork', artworkSchema);
    } else {
      const el = document.getElementById('schema-artwork');
      if (el) el.remove();
    }

  }, [title, description, keywords, path, image, type, breadcrumbs, artworkData]);

  return null;
}
