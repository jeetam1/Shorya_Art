import React from 'react';

export default function KalidasSanskrit() {
  
  // 1. EXPLICIT IMAGE ARRAY:
  // You can easily change any of these paths to .png or rename them here.
  const galleryImages = [
    '/a51.jpg', '/a52.jpg', '/a53.jpg', 
    '/a54.jpg', '/a55.jpg', '/a56.jpg', 
    '/a57.jpg', '/a58.jpg', '/a59.jpg'
  ];

  // The final full-width image at the bottom
  const finalImage = '/a510.jpg';

  // 2. CHUNK THE 9 IMAGES INTO 3 PERFECT ROWS OF 3
  const gridRows = [];
  for (let i = 0; i < galleryImages.length; i += 3) {
    gridRows.push(galleryImages.slice(i, i + 3));
  }

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Kalidas Sanskrit Academy</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Introductory Paragraph */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          Solo show held in Ujjain at Kalidas Sanskrit Academy Gallery on 25th Oct'2012
        </p>

        {/* ========================================================================
            GALLERY SIZE WRAPPER (750px max width to perfectly match your other pages)
            ======================================================================== */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          {/* Gallery Section Subtitle */}
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Photo Gallery of Kalidas Sanskrit Academy Event
          </h2>

          {/* DYNAMIC ROW RENDERER (All small landscape boxes) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginBottom: '30px' }}>
            {gridRows.map((rowImages, rowIndex) => (
              <div key={rowIndex} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%' }}>
                {rowImages.map((src, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    style={{ 
                      width: '100%', 
                      aspectRatio: '4 / 3', // All boxes are standard landscape shape
                      overflow: 'hidden', 
                      backgroundColor: '#f4f4f4',
                      border: '1px solid #e2e2e2'
                    }}
                  >
                    <img 
                      src={src} 
                      alt={`Kalidas Academy Event Row ${rowIndex + 1} Image ${imgIndex + 1}`} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', // Eliminates all white space
                        display: 'block'
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* FINAL FULL-WIDTH BOTTOM IMAGE */}
          <div 
            style={{ width: '100%', overflow: 'hidden', border: '1px solid #e2e2e2' }}
          >
            <img 
              src={finalImage} 
              alt="Final Wide View of Event" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

        </div> 
        {/* End of Gallery Sizing Wrapper */}

      </div>

      
      
    </div>
  );
}