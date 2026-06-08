import React from 'react';

export default function Nestle() {
  
  // EXPLICIT IMAGE DEFINITIONS (Total 11 Images)
  // You can easily change any of these paths to .png or rename them here.
  const row1Images = ['/a610.jpg', '/a611.jpg', '/a612.jpg'];
  const row2Images = ['/a613.jpg', '/a614.jpg', '/a615.jpg'];
  const row3Images = ['/a616.jpg', '/a617.jpg', '/a618.jpg'];
  const row4Images = ['/a619.jpg', '/a620.jpg']; // The 2 landscape images at the bottom

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Nestle</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Introductory Paragraph */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          The 'Exellencia' a series of events for doctors, sponsored and supported by Nestle.
        </p>

        {/* ========================================================================
            GALLERY SIZE WRAPPER (750px max width to perfectly match your other pages)
            ======================================================================== */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          {/* Gallery Section Subtitle */}
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Event Gallery of Nestle Exellencia
          </h2>

          {/* ROW 1: 3-COLUMN GRID (Tall Portrait) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row1Images.map((src, index) => (
              <div key={`r1-${index}`} style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`Nestle Event Row 1 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          {/* ROW 2: 3-COLUMN GRID (Tall Portrait) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row2Images.map((src, index) => (
              <div key={`r2-${index}`} style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`Nestle Event Row 2 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          {/* ROW 3: 3-COLUMN GRID (Tall Portrait) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row3Images.map((src, index) => (
              <div key={`r3-${index}`} style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`Nestle Event Row 3 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          {/* ROW 4: 2-COLUMN GRID (Wide Landscape Boxes) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', marginBottom: '30px' }}>
            {row4Images.map((src, index) => (
              <div key={`r4-${index}`} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`Nestle Event Row 4 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

        </div> 
        {/* End of Gallery Sizing Wrapper */}

      </div>

      
      
    </div>
  );
}