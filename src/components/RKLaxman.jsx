import React from 'react';

export default function RKLaxman() {
  
  // 1. EXPLICIT IMAGE ARRAY:
  // You can easily change any of these paths to .png or rename them below.
  const galleryImages = [
    '/aaa1.jpg', '/aaa2.jpg', '/aaa3.jpg', 
    '/aaa4.jpg', '/aaa5.jpg', '/aaa6.jpg', 
    '/aaa7.jpg', '/aaa8.jpg', '/aaa9.jpg', 
    '/aaa11.jpg', '/aaa11.jpg', '/aaa12.jpg', 
    '/aaa13.jpg', '/aaa14.jpg', '/aaa15.jpg', 
    '/aaa16.jpg', '/aaa17.jpg', '/aaa18.jpg', 
    '/aaa19.jpg', '/aaa20.jpg', '/aaa21.jpg', 
    '/aaa22.jpg', '/aaa23.jpg', '/aaa24.jpg', 
    '/aaa25.jpg', '/aaa26.jpg', '/aaa27.jpg', 
    '/aaa28.jpg', '/aaa29.png', '/aaa30.png', 
    '/aaa31.png', '/aaa32.png', '/aaa33.jpg', 
    '/aaa34.jpg', '/aaa35.jpg', '/aaa36.jpg', 
    '/aaa37.jpg', '/aaa38.jpg', '/aaa39.jpg', 
    '/aaa40.jpg', '/aaa41.jpg', '/aaa42.jpg', 
    '/aaa43.jpg', '/aaa44.jpg', '/aaa45.jpg',
    '/aaa46.jpg' // This 46th image will be used as the final full-width bottom image
  ];

  // 2. CHUNK THE FIRST 45 IMAGES INTO ROWS OF 3
  const gridRows = [];
  for (let i = 0; i < 45; i += 3) {
    gridRows.push(galleryImages.slice(i, i + 3));
  }
  
  // Extract the very last image for the bottom banner
  const finalImage = galleryImages[45]; 

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">R.K. Laxman</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Introductory Paragraph */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          Blessed by legendary cartoonist Shri R.K. Laxman and has a solo show at his residence on 19th June'2012 and at the same place he had live demonstration of two paintings.
        </p>

        {/* CENTERED YOUTUBE VIDEO PLAYER */}
        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto 70px auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
              src="https://www.youtube.com/embed/rIySB9-HXEQ"
              title="Shorya Mahanot Receives Blessings From Renowned Cartoonist R.K. Laxman"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* ========================================================================
            REDUCED GALLERY SIZE WRAPPER (750px max width to shrink photos)
            ======================================================================== */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          {/* Gallery Section Subtitle */}
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Photo Gallery of the event
          </h2>

          {/* DYNAMIC PATTERN ROW RENDERER */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {gridRows.map((rowImages, rowIndex) => {
              
              // LOGIC: If it is the VERY FIRST row (0) OR the VERY LAST row (length - 1), make it a BIG box.
              // Everything else becomes a SMALL box.
              const isBigRow = rowIndex === 0 || rowIndex === gridRows.length - 1;
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
                        border: '1px solid #e2e2e2',
                        position: 'relative'
                      }}
                    >
                      <img 
                        src={src} 
                        alt={`R.K. Laxman Event Row ${rowIndex + 1} Image ${imgIndex + 1}`} 
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

          {/* FINAL FULL-WIDTH BOTTOM IMAGE (Image 46) */}
          <div 
            style={{ width: '100%', overflow: 'hidden', border: '1px solid #e2e2e2', marginTop: '10px' }}
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