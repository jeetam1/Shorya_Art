import React from 'react';

export default function SpectrumMiami() {
  
  // EXPLICIT IMAGE DEFINITIONS
  // The first 3 images will be in the top row, the 4th will be full-width at the bottom.
  const topRowImages = ['/a71.jpg', '/a72.jpeg', '/a73.jpeg'];
  const fullWidthImage = '/a74.jpg';

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Spectrum &ndash; Miami</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Introductory Paragraph */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          His works where displayed in SPECTRUM Miami FL. (U.S.A.) in 2013.Where one of his paintings was sold in $3,000.00
        </p>

        {/* ========================================================================
            GALLERY SIZE WRAPPER (750px max width to perfectly match your other pages)
            ======================================================================== */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          {/* Gallery Section Subtitle */}
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Event Gallery of Spectrum- Miami
          </h2>

          {/* ROW 1: 3-COLUMN GRID (Tall Portrait Boxes) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {topRowImages.map((src, imgIndex) => (
              <div 
                key={imgIndex} 
                style={{ 
                  width: '100%', 
                  aspectRatio: '3 / 4', // Forces the uniform portrait shape seen in the screenshot
                  overflow: 'hidden', 
                  backgroundColor: '#f4f4f4',
                  border: '1px solid #e2e2e2'
                }}
              >
                <img 
                  src={src} 
                  alt={`Spectrum Miami Event Image ${imgIndex + 1}`} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', // Eliminates white space
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </div>

          {/* ROW 2: FULL-WIDTH IMAGE (Image a74.jpg) */}
          <div style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #e2e2e2', marginBottom: '30px' }}>
            <img 
              src={fullWidthImage} 
              alt="Spectrum Miami Exhibition Floor" 
              style={{ 
                width: '100%', 
                height: 'auto', // Allows the massive image to expand to its natural height
                display: 'block'
              }}
            />
          </div>

        </div> 
        {/* End of Gallery Sizing Wrapper */}

      </div>

      {/* FOOTER */}
      <footer className="shorya-view-footer-signature-line" style={{ textAlign: 'center', marginTop: 'auto' }}>
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>
      
    </div>
  );
}