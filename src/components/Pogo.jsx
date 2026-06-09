import React from 'react';

export default function Pogo() {
  
  // 1. EXPLICIT IMAGE ARRAY:
  // You can easily change any of these paths to .png or rename them here.
  const galleryImages = [
  '/pogo-photos/aaaa1.jpg', '/pogo-photos/aaaa2.jpg', '/pogo-photos/aaaa3.jpg', 
  '/pogo-photos/aaaa4.jpg', '/pogo-photos/aaaa5.jpg', '/pogo-photos/aaaa6.jpg', 
  '/pogo-photos/aaaa7.jpg', '/pogo-photos/aaaa8.jpg', '/pogo-photos/aaaa9.jpg', 
  '/pogo-photos/aaaa10.jpg', '/pogo-photos/aaaa11.jpg'
];

  // 2. CHUNK THE 11 IMAGES INTO ROWS OF 3
  const gridRows = [];
  for (let i = 0; i < galleryImages.length; i += 3) {
    gridRows.push(galleryImages.slice(i, i + 3));
  }
  
  // 3. YOUR EXACT ROW PATTERN (Based on the video/screenshots)
  // Row 1: 3 small (landscape)
  // Row 2: 3 big (portrait)
  // Row 3: 3 small (landscape)
  // Row 4: 2 small (landscape)
  const rowPattern = ['small', 'big', 'small', 'small'];

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Pogo</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Introductory Paragraph */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          In Nov. 2012, Shorya was honored by receiving the Pogo Television "Amazing Kids Award" and was featured in a commercial for Turner Broadcasting that highlighted his artistic talents.
        </p>

        {/* CENTERED YOUTUBE VIDEO PLAYER */}
        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto 70px auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
              src="https://www.youtube.com/embed/QfBQJvdwW08"
              title="Pogo Amazing Kids Awards 2012"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* ========================================================================
            GALLERY SIZE WRAPPER (750px max width to perfectly match your other pages)
            ======================================================================== */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          {/* Gallery Section Subtitle */}
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Event Gallery of Pogo Amazing Kids Awards
          </h2>

          {/* DYNAMIC PATTERN ROW RENDERER */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginBottom: '30px' }}>
            {gridRows.map((rowImages, rowIndex) => {
              
              const isBigRow = rowPattern[rowIndex] === 'big';
              const rowAspectRatio = isBigRow ? '3 / 4' : '4 / 3';

              return (
                <div key={rowIndex} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%' }}>
                  {rowImages.map((src, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      style={{ 
                        width: '100%', 
                        aspectRatio: rowAspectRatio, // Dynamically changes based on your pattern
                        overflow: 'hidden', 
                        backgroundColor: '#f4f4f4',
                        border: '1px solid #e2e2e2'
                      }}
                    >
                      <img 
                        src={src} 
                        alt={`Pogo Event Row ${rowIndex + 1} Image ${imgIndex + 1}`} 
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
              );
            })}
          </div>

        </div> 
        {/* End of Gallery Sizing Wrapper */}

      </div>

      
      
    </div>
  );
}