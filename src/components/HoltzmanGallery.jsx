import React from 'react';

export default function HoltzmanGallery() {
  
  // EXPLICIT IMAGE DEFINITIONS (Total 13 Images)
  const row1Images = ['/a91.jpg', '/a92.jpg', '/a93.jpg'];
  const row2Images = ['/a94.jpg', '/a95.jpg', '/a96.jpg'];
  const row3Images = ['/a97.jpg', '/a98.jpg'];
  const row4Images = ['/a99.jpg', '/a910.jpg'];
  const row5Images = ['/a911.jpg', '/a912.jpg'];
  const finalImage = '/a913.jpg';

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Holtzman Gallery</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Introductory Paragraph */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          Another glorious year in his feather, 2015 defined Shorya as the coming-of-age artist. Masterful strokes, multiple layers, deliberate color composition and amazing control on the symmetry were pulling people to see the work on display of this world’s signature style youngest abstract artist. One single art exhibition at Holtzman Gallery further defined Shorya as an artist to look out for upcoming years.
        </p>

        {/* STACK OF EXACTLY 3 YOUTUBE VIDEOS */}
        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto 70px auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* Video 1 */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} src="https://www.youtube.com/embed/5pyRs1Wrd64" title="Video 1" frameBorder="0" allowFullScreen></iframe>
          </div>

          {/* Video 2: Greater AC Chamber Mixer */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} src="https://www.youtube.com/embed/M-U50NCA170" title="Greater AC Chamber Mixer" frameBorder="0" allowFullScreen></iframe>
          </div>

          {/* Video 3 */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} src="https://www.youtube.com/embed/T0e2nMsNZ9g" title="Video 3" frameBorder="0" allowFullScreen></iframe>
          </div>

        </div>

        {/* ========================================================================
            GALLERY SIZE WRAPPER (750px max width to perfectly match your other pages)
            ======================================================================== */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          {/* ROW 1: 3-COLUMN GRID (Small Landscape) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row1Images.map((src, index) => (
              <div key={`r1-${index}`} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`Holtzman Row 1 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          {/* ROW 2: 3-COLUMN GRID (Small Landscape) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row2Images.map((src, index) => (
              <div key={`r2-${index}`} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`Holtzman Row 2 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          {/* ROW 3: 2-COLUMN GRID (Big Tall Portrait) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row3Images.map((src, index) => (
              <div key={`r3-${index}`} style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`Holtzman Row 3 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          {/* ROW 4: 2-COLUMN GRID (Big Tall Portrait) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row4Images.map((src, index) => (
              <div key={`r4-${index}`} style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`Holtzman Row 4 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          {/* ROW 5: 2-COLUMN GRID (Big Landscape) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row5Images.map((src, index) => (
              <div key={`r5-${index}`} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`Holtzman Row 5 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          {/* ROW 6: FULL-WIDTH IMAGE */}
          <div style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #e2e2e2', marginBottom: '30px' }}>
            <img src={finalImage} alt="Final Wide View of Holtzman Gallery" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

        </div> 
        {/* End of Gallery Sizing Wrapper */}

      </div>

      
      
    </div>
  );
}