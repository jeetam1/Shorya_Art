import React from 'react';

export default function TajMahalPalace() {
  // 1. Filter out the specific images you requested to remove
  const excludedImages = [17, 23, 32, 33];
  
  // 2. Generate the array from 1 to 40, minus the excluded ones (Leaves 36 images)
  const galleryImages = Array.from({ length: 40 }, (_, index) => index + 1)
    .filter(num => !excludedImages.includes(num))
    .map(num => `/aa${num}.jpg`);

  // 3. Chunk the 36 images into exactly 12 Rows (3 images per row)
  const gridRows = [];
  for (let i = 0; i < galleryImages.length; i += 3) {
    gridRows.push(galleryImages.slice(i, i + 3));
  }

  // YOUR EXACT ROW PATTERN
  const rowPattern = [
    'small', 'small',     // 2 small rows
    'big',                // 1 big row
    'small',              // 1 small row
    'big', 'big', 'big',  // 3 big rows
    'small', 'small', 'small', 'small', // 4 small rows
    'big',                // 1 big row
    'small'               // 1 small row (if there's overflow)
  ];

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Taj Mahal Palace Hotel</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Introductory Paragraph */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          First Solo exhibition of Shorya's works was held at the Chambers Terrace, Taj Mahal Palace, Mumbai on 21st Oct'2011
        </p>

        {/* CENTERED YOUTUBE VIDEO PLAYER */}
        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto 70px auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
              src="https://www.youtube.com/embed/nxli8G81FGU"
              title="India's Young Contemporary Artists Shorya Mahanot"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* 
          ========================================================================
          4. ⬇️ CHANGE IMAGE SIZES HERE: Adjust maxWidth (e.g., '600px', '800px') ⬇️ 
          ========================================================================
        */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          {/* Gallery Section Subtitle */}
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Event Gallery of Solo exhibition of Shorya's works at The Taj Mahal Palace
          </h2>

          {/* DYNAMIC PATTERN ROW RENDERER */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginBottom: '15px' }}>
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
                        aspectRatio: rowAspectRatio, 
                        overflow: 'hidden', 
                        backgroundColor: '#f4f4f4',
                        border: '1px solid #e2e2e2',
                        position: 'relative'
                      }}
                    >
                      <img 
                        src={src} 
                        alt={`Exhibition Row ${rowIndex + 1} Image ${imgIndex + 1}`} 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover', 
                          display: 'block',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'} 
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* FINAL FULL-WIDTH BOTTOM IMAGE */}
          <div 
            style={{ width: '100%', overflow: 'hidden', border: '1px solid #e2e2e2', marginTop: '10px' }}
          >
            <img 
              src="/aa41.jpg" 
              alt="Final Wide View of Exhibition" 
              style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} 
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
            />
          </div>

        </div> 
        {/* End of Gallery Sizing Wrapper */}

      </div>

      
      
    </div>
  );
}