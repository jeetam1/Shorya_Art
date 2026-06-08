import React from 'react';

export default function MicrosoftFutureDecoded() {
  
  // EXPLICIT IMAGE DEFINITIONS (Total 9 Images)
  // You can easily change any of these paths to .png or rename them here.
  const galleryImages = [
    '/a530.jpg', '/a531.jpg', '/a532.jpg',
    '/a533.jpg', '/a534.jpg', '/a535.jpg',
    '/a536.jpg', '/a537.jpg', '/a538.jpg'
  ];

  // Chunk images into 3 rows of 3
  const gridRows = [];
  for (let i = 0; i < galleryImages.length; i += 3) {
    gridRows.push(galleryImages.slice(i, i + 3));
  }

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Microsoft Future Decoded</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Introductory Paragraph */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          Collaborating with Microsoft in Future Decoded 2017: I attempted my first few Signature Style Abstract Art(s) digitally on Surface Pro 4 gifted by Microsoft. The Future decoded 2017 was graced by about 1700 thought Leaders who were invited by Microsoft.
        </p>

        {/* ========================================================================
            GALLERY SIZE WRAPPER (750px max width to perfectly match your other pages)
            ======================================================================== */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          {/* Gallery Section Subtitle */}
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Event Gallery of Microsoft Future Decoded
          </h2>

          {/* 3x3 DYNAMIC ROW RENDERER (Uniform Portrait Boxes) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginBottom: '40px' }}>
            {gridRows.map((rowImages, rowIndex) => (
              <div key={rowIndex} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%' }}>
                {rowImages.map((src, imgIndex) => (
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
                      alt={`Microsoft Future Decoded Event Image ${rowIndex * 3 + imgIndex + 1}`} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', // Eliminates white space and perfectly fills the grid
                        objectPosition: 'center top', // Keeps the focus towards the top for letters/posters
                        display: 'block'
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div> 
        {/* End of Gallery Sizing Wrapper */}

      </div>

      
      
    </div>
  );
}