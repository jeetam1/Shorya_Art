import React, { useState } from 'react';

export default function Biography() {
  const [modalImage, setModalImage] = useState(null);

  // Exact academic accolades array sequencing certificates from 503.jpg to 510.jpg sequentially
  const academicAccolades = [
    {
      id: 'harvard-1',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_coat_of_arms.svg',
      institution: 'HARVARD UNIVERSITY',
      certSrc: '/503.jpg'
    },
    {
      id: 'harvard-2',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_coat_of_arms.svg',
      institution: 'HARVARD UNIVERSITY',
      certSrc: '/504.jpg'
    },
    {
      id: 'mit-1',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
      institution: 'MASSACHUSETTS INSTITUTE OF TECHNOLOGY',
      certSrc: '/505.jpg'
    },
    {
      id: 'mit-2',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
      institution: 'MASSACHUSETTS INSTITUTE OF TECHNOLOGY',
      certSrc: '/506.jpg'
    },
    {
      id: 'mit-3',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
      institution: 'MASSACHUSETTS INSTITUTE OF TECHNOLOGY',
      certSrc: '/507.jpg'
    },
    {
      id: 'imperial-1',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Imperial_College_London_Crest.svg',
      institution: 'IMPERIAL COLLEGE LONDON',
      certSrc: '/508.jpg'
    },
    {
      id: 'imperial-2',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Imperial_College_London_Crest.svg',
      institution: 'IMPERIAL COLLEGE LONDON',
      certSrc: '/509.jpg'
    },
    {
      id: 'davidson-1',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Davidson_College_logo.svg',
      institution: 'DAVIDSON COLLEGE',
      certSrc: '/510.jpg'
    }
  ];

  return (
    <div className="editorial-page-canvas">
      
      {/* 1. TOP HERO BANNER STRIP - ALIGNED LEFT BOTTOM */}
      <div className="editorial-hero-banner-frame" style={{ backgroundImage: `url('/6.jpg')` }}>
        <div className="editorial-title-overlap-box">
          <h1 className="editorial-main-title-text">Biography</h1>
        </div>
      </div>

      {/* 2. MAIN SCROLLABLE CONTENT BODY */}
      <div className="editorial-inner-content-scaffold">
        
        {/* MAIN PROFILE PORTRAIT */}
        <div className="editorial-portrait-wrapper-box">
          <img 
            src="/511.jpg" 
            alt="Shorya Portrait" 
            className="editorial-featured-portrait-asset" 
            onClick={() => setModalImage('/511.jpg')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="editorial-text-editorial-block">
          <p className="editorial-highlight-paragraph">
            <strong>ABSTRACT PAINTING</strong> has the power to address ideas and emotions from the deepest level of human consciousness. 
            Shorya Mahanot from India has been astounding people’s minds with his masterful brushstrokes, 
            colorful composition, and symmetry in abstract paintings, over the time of 10 years. 
            Dubbed as “World’s Youngest Signature Style Abstract Artist” (Google Search Results) and 
            “India’s Child Picasso” (The Guardian, July 2012, London Ed.), Shorya has been winning laurels from a 
            tender age of three with his luscious use of colors and expressiveness on the canvas. 
            A featured artist at the <strong>HOLTZMAN GALLERY</strong> now, he had made his international debut in the U.S.A. 
            in March 2013 when his paintings were selected as “Best of Art Expo 2013”.
          </p>

          <h2 className="editorial-section-subheading-marker">A tour de force in Abstract Art</h2>

          <p className="editorial-standard-body-paragraph">
            Since then, Shorya has been a tour de force in the league of abstract artists with a unique signature style. 
            His paintings have been exhibited at Spectrum, Miami and auctioned in events like Celebrity Chef Gala for Autism 
            Speaks Foundation. Till date, his paintings have fetched $65,000 across different events and art exhibitions, over 
            the world. Keeping up with new age and technology, the small wonder also collaborated by Microsoft to create abstract 
            paintings digitally, a rare feat achieved at this young age. Appreciated by world media and international artists alike, 
            Shorya, the abstract artist has become the next sensation in the art world.
          </p>

          <p className="editorial-standard-body-paragraph">
            There’s whirling chaos underneath the little wings of this old soul that emerges and imprints itself on the canvas 
            to create a legacy, one magnum opus at one time!
          </p>

          {/* CHRONOLOGICAL GRAPHIC MAP TIMELINE */}
          <div className="biography-infographic-timeline-box" onClick={() => setModalImage('/501.jpg')} style={{ cursor: 'pointer' }}>
            <img src="/500.jpg" alt="Shorya Timeline Journey Infographic" className="biography-full-width-infographic-asset" />
          </div>

          <h2 className="biography-journey-title-header">Shorya's art journey till date</h2>

          {/* THE SINGLE DYNAMIC HIGH-RESOLUTION ARTWORK DISPLAY ROW */}
          <div className="biography-single-artwork-journey-row">
            <div className="biography-journey-main-artwork-frame" onClick={() => setModalImage('/502.jpg')}>
              <img src="/502.jpg" alt="Shorya's Core Journey Abstract Artwork" className="biography-journey-main-img" />
              <div className="biography-journey-artwork-meta-footer">
                <span className="meta-left">Sparks of Spring (Sold)</span>
                <span className="meta-center">2011</span>
                <span className="meta-right">Acrylic on Canvas</span>
              </div>
            </div>
          </div>

          {/* ACADEMIC TIMELINE STRUCTURE (MATCHES VIDEO CHRONOLOGY PERFECTLY) */}
          <h2 className="biography-journey-title-header">Academic accolades</h2>

          <div className="academics-container-stack">
            {academicAccolades.map((accolade, idx) => (
              <div key={`${accolade.id}-${idx}`} className="academic-credential-row-block">
                
                {/* A. Official University Vector Emblem Logo */}
                <div className="academic-institution-logo-wrap">
                  <img src={accolade.logo} alt={`${accolade.institution} emblem`} className="academic-vector-logo-img" />
                </div>

                {/* B. University Typographic Header Name */}
                <h3 className="academic-institution-name-heading">{accolade.institution}</h3>

                {/* C. Verified Certificate Document Image Component */}
                <div className="academic-certificate-photo-frame" onClick={() => setModalImage(accolade.certSrc)}>
                  <img src={accolade.certSrc} alt={`${accolade.institution} Certificate Document`} className="academic-certificate-img-asset" />
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 3. HIGH-FIDELITY ANIMATED POP-UP OVERLAY LIGHTBOX ENGINE */}
      {modalImage && (
        <div className="portfolio-modal-overlay-shroud" onClick={() => setModalImage(null)}>
          <div className="portfolio-modal-container-window" onClick={(e) => e.stopPropagation()}>
            <button className="portfolio-modal-close-trigger-btn" onClick={() => setModalImage(null)}>&times;</button>
            <div className="portfolio-modal-image-bounding-wrapper">
              <img src={modalImage} alt="Enlarged Ultra-HD Asset" className="portfolio-modal-large-img animate-zoom-in" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}