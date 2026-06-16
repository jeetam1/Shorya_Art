import React, { useState } from 'react';
import PageBanner from './PageBanner';

export default function Biography() {
  const [modalImage, setModalImage] = useState(null);

  const getInstitutionName = (id) => {
    switch (id) {
      case 'harvard': return 'Harvard University';
      case 'mit': return 'Massachusetts Institute of Technology';
      case 'imperial': return 'Imperial College London';
      case 'davidson': return 'Davidson Academy';
      default: return 'Institution';
    }
  };

  const academicAccolades = [
    {
      id: 'harvard',
      logo: '/biography-photos/a2.png',
      certificates: ['/biography-photos/503.jpg']
    },
    {
      id: 'mit',
      logo: '/biography-photos/a1.png',
      certificates: ['/biography-photos/505.jpg', '/biography-photos/506.jpg', '/biography-photos/504.jpg']
    },
    {
      id: 'imperial',
      logo: '/biography-photos/a3.jpg',
      certificates: ['/biography-photos/507.jpg', '/biography-photos/508.jpg', '/biography-photos/509.jpg']
    },
    {
      id: 'davidson',
      logo: '/biography-photos/a4.png',
      certificates: ['/biography-photos/510.jpg']
    }
  ];

  return (
    <div className="shorya-biography-view-root">

      <PageBanner title="Biography" bgImage="/biography.jpg" />

      <div className="shorya-biography-body-scaffold-layout" style={{ margin: '0 auto', alignItems: 'center', textAlign: 'center' }}>

        <div 
          className="shorya-main-portrait-frame-wrapper" 
          onClick={() => setModalImage('/biography-photos/511.jpg')}
        >
          <img loading="lazy" src="/biography-photos/511.jpg" alt="Shorya Portrait" className="shorya-main-portrait-img-element" />
        </div>

        <div className="shorya-biography-paragraphs-stack-column" style={{ maxWidth: '800px' }}>
          <p className="shorya-paragraph-text-lead-highlight">
            <strong>ABSTRACT PAINTING</strong> has the power to address ideas and emotions from the deepest level of human consciousness.
            Shorya Mahanot from India has been astounding people’s minds with his masterful brushstrokes,
            colorful composition, and symmetry in abstract paintings, over the time of 10 years.
            Dubbed as
            <a href="https://www.google.co.in/search?source=hp&ei=dOKyXIORL4rez7sPsJGK8A8&q=world+youngest+signature+style+abstract+artist&oq=Wor&gs_l=psy-ab.1.0.35i39l2j0i67l3j0i131j0l4.5773.6379..8306...1.0..0.216.677.0j3j1......0....1..gws-wiz.....0.tlXMYBWJXtQ" target="_blank" rel="noreferrer" className="shorya-bio-link"> “World’s Youngest Signature Style Abstract Artist”</a> (Google Search Results) and
            <a href="https://www.theguardian.com/world/2012/jul/03/india-child-picasso-goggles-canvas" target="_blank" rel="noreferrer" className="shorya-bio-link"> “India’s Child Picasso”</a> (The Guardian, July 2012, London Ed.),
            Shorya has been winning laurels from a tender age of three with his luscious use of colors and expressiveness on the canvas.
            A featured artist at the
            <a href="https://holtzmangallery.com/" target="_blank" rel="noreferrer" className="shorya-bio-bold-link">
              <strong> HOLTZMAN GALLERY</strong>
            </a> now, he had made his international debut in the U.S.A. in March 2013 when his paintings were selected as “Best of Art Expo 2013”.
          </p>

          <h2 className="shorya-paragraph-section-sub-heading-marker">A tour de force in Abstract Art</h2>

          <p className="shorya-paragraph-text-standard-value">
            Since then, Shorya has been a tour de force in the league of abstract artists with a unique signature style.
            His paintings have been exhibited at Spectrum, Miami and auctioned in events like Celebrity Chef Gala for Autism
            Speaks Foundation. Till date, his paintings have fetched $65,000 across different events and art exhibitions, over
            the world. Keeping up with new age and technology, the small wonder also collaborated by Microsoft to create abstract
            paintings digitally, a rare feat achieved at this young age. Appreciated by world media and international artists alike,
            Shorya, the abstract artist has become the next sensation in the art world.
          </p>

          <p className="shorya-paragraph-text-standard-value">
            There’s whirling chaos underneath the little wings of this old soul that emerges and imprints itself on the canvas
            to create a legacy, one magnum opus at one time!
          </p>

          <div className="shorya-timeline-infographic-holder-box" onClick={() => setModalImage('/biography-photos/500.jpg')} style={{ margin: '40px auto', display: 'flex', justifyContent: 'center' }}>
            <img loading="lazy" src="/biography-photos/500.jpg" alt="Shorya Timeline Journey Infographic" className="shorya-timeline-infographic-asset-img" style={{ margin: '0 auto' }} />
          </div>

          <h2 className="shorya-secondary-scaffold-section-header">Shorya's art journey till date</h2>

          <div className="shorya-single-artwork-presentation-row-block" style={{ margin: '20px auto 40px auto', display: 'flex', justifyContent: 'center' }}>
            <div className="shorya-single-artwork-inner-card-frame" onClick={() => setModalImage('/biography-photos/502.jpg')} style={{ margin: '0 auto' }}>
              <img loading="lazy" src="/biography-photos/502.jpg" alt="Sparks of Spring Artwork" className="shorya-single-artwork-img-asset" />
              <div className="shorya-single-artwork-meta-footer-strip">
                <span className="shorya-meta-txt-left">Sparks of Spring (Sold)</span>
                <span className="shorya-meta-badge-center">2011</span>
                <span className="shorya-meta-txt-right">Acrylic on Canvas</span>
              </div>
            </div>
          </div>

          <h2 className="shorya-secondary-scaffold-section-header">Academic accolades</h2>

          <div className="shorya-academics-vertical-grid-stack" style={{ alignItems: 'center' }}>
            {academicAccolades.map((accolade) => (
              <div key={accolade.id} className="shorya-academic-institution-card-unit" style={{ margin: '0 auto 40px auto', width: '100%' }}>

                <div className="shorya-academic-institution-logo-bounding-box" style={{ margin: '0 auto 10px auto', width: '300px', height: 'auto', display: 'flex', justifyContent: 'center' }}>
                  <img loading="lazy" src={accolade.logo}
                    alt={`${getInstitutionName(accolade.id)} Logo`}
                    className="shorya-academic-institution-vector-logo"
                    style={{ width: '100%', height: 'auto', maxHeight: '130px', objectFit: 'contain' }}
                  />
                </div>

                {accolade.certificates.map((certSrc, idx) => (
                  <div
                    key={idx}
                    className="shorya-academic-certificate-canvas-frame"
                    onClick={() => setModalImage(certSrc)}
                    style={{
                      marginBottom: '35px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      border: '1px solid #100f0f'
                    }}
                  >
                    <img loading="lazy" src={certSrc} alt={`${getInstitutionName(accolade.id)} Certificate`} className="shorya-academic-certificate-document-img" />
                  </div>
                ))}

              </div>
            ))}
          </div>
        </div>
      </div>

      {modalImage && (
        <div className="shorya-lightbox-overlay-shroud" onClick={() => setModalImage(null)}>
          <div className="shorya-lightbox-modal-window" onClick={(e) => e.stopPropagation()}>
            <button className="shorya-lightbox-close-trigger-btn" onClick={() => setModalImage(null)}>&times;</button>
            <div className="shorya-lightbox-img-bounding-wrapper">
              <img loading="lazy" src={modalImage} alt="Enlarged Asset View" className="shorya-lightbox-large-img-asset shorya-spring-zoom-animation" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}