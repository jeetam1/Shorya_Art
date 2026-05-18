import React from 'react';

export default function Biography() {
  return (
    <div className="editorial-page-canvas">
      <div className="editorial-hero-banner-frame" style={{ backgroundImage: `url('/501.jpg')` }}>
        <h1 className="editorial-main-title-text">Biography</h1>
      </div>

      <div className="editorial-inner-content-scaffold">
        <div className="editorial-portrait-wrapper-box">
          <img src="/500.jpg" alt="Shorya Portrait" className="editorial-featured-portrait-asset" />
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

          <div className="biography-infographic-timeline-box">
            <img src="/501.jpg" alt="Shorya Timeline Journey Infographic" className="biography-full-width-infographic-asset" />
          </div>

          <h2 className="biography-journey-title-header">Shorya's art journey till date</h2>

          <div className="biography-historical-sampler-flex-grid">
            <div className="sampler-thumbnail-card"><img src="/502.jpg" alt="Art 2011" /></div>
            <div className="sampler-thumbnail-card"><img src="/503.jpg" alt="Art 2012" /></div>
            <div className="sampler-thumbnail-card"><img src="/504.jpg" alt="Art 2013" /></div>
            <div className="sampler-thumbnail-card"><img src="/505.jpg" alt="Art 2014" /></div>
            <div className="sampler-thumbnail-card"><img src="/506.jpg" alt="Art 2015" /></div>
            <div className="sampler-thumbnail-card"><img src="/507.jpg" alt="Art 2016" /></div>
          </div>

          <h2 className="biography-journey-title-header">Academic accolades</h2>

          <div className="biography-credentials-vertical-stack">
            <div className="credential-certificate-card-frame"><img src="/508.jpg" alt="Harvard" /></div>
            <div className="credential-certificate-card-frame"><img src="/509.jpg" alt="MIT" /></div>
            <div className="credential-certificate-card-frame"><img src="/510.jpg" alt="Imperial" /></div>
          </div>
        </div>
      </div>

      <footer className="detail-page-footer-signature-bio">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>
    </div>
  );
}