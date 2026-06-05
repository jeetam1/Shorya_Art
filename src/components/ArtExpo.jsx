import React from 'react';

export default function ArtExpo() {
  
  // EXPLICIT IMAGE DEFINITIONS
  // You can easily change any of these paths to .png or rename them here.
  const row1Images = ['/a81.jpg', '/a82.jpg', '/a83.jpg'];
  const row2Images = ['/a84.jpg', '/a85.jpg'];

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Art Expo</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Introductory Paragraph */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          His first debut show at Art Expo New York (U.S.A.) in March, 2013. Where his paintings were selected to appear their "Best of Artexpo 2013" exhibition
        </p>

        {/* ========================================================================
            GALLERY SIZE WRAPPER (750px max width to perfectly match your other pages)
            ======================================================================== */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          {/* Gallery Section Subtitle */}
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Event Gallery of Art Expo &ndash; NY
          </h2>

          {/* ROW 1: 3-COLUMN GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row1Images.map((src, imgIndex) => (
              <div 
                key={imgIndex} 
                style={{ 
                  width: '100%', 
                  aspectRatio: '4 / 3', // Forces the uniform landscape shape
                  overflow: 'hidden', 
                  backgroundColor: '#f4f4f4',
                  border: '1px solid #e2e2e2'
                }}
              >
                <img 
                  src={src} 
                  alt={`Art Expo Event Image ${imgIndex + 1}`} 
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

          {/* ROW 2: 2-COLUMN GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', marginBottom: '30px' }}>
            {row2Images.map((src, imgIndex) => (
              <div 
                key={imgIndex} 
                style={{ 
                  width: '100%', 
                  aspectRatio: '4 / 3', // Keeps the boxes perfectly uniform
                  overflow: 'hidden',
                  backgroundColor: '#f4f4f4',
                  border: '1px solid #e2e2e2'
                }}
              >
                <img 
                  src={src} 
                  alt={`Art Expo Event Image ${imgIndex + 4}`} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            ))}
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