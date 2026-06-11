import React from 'react';

export default function RKLaxman() {

  const galleryImages = [
  '/rk-photos/aaa1.jpg', '/rk-photos/aaa2.jpg', '/rk-photos/aaa3.jpg', 
  '/rk-photos/aaa4.jpg', '/rk-photos/aaa5.jpg', '/rk-photos/aaa6.jpg', 
  '/rk-photos/aaa7.jpg', '/rk-photos/aaa8.jpg', '/rk-photos/aaa9.jpg', 
  '/rk-photos/aaa11.jpg', '/rk-photos/aaa11.jpg', '/rk-photos/aaa12.jpg', 
  '/rk-photos/aaa13.jpg', '/rk-photos/aaa14.jpg', '/rk-photos/aaa15.jpg', 
  '/rk-photos/aaa16.jpg', '/rk-photos/aaa17.jpg', '/rk-photos/aaa18.jpg', 
  '/rk-photos/aaa19.jpg', '/rk-photos/aaa20.jpg', '/rk-photos/aaa21.jpg', 
  '/rk-photos/aaa22.jpg', '/rk-photos/aaa23.jpg', '/rk-photos/aaa24.jpg', 
  '/rk-photos/aaa25.jpg', '/rk-photos/aaa26.jpg', '/rk-photos/aaa27.jpg', 
  '/rk-photos/aaa28.jpg', '/rk-photos/aaa29.png', '/rk-photos/aaa30.png', 
  '/rk-photos/aaa31.png', '/rk-photos/aaa32.png', '/rk-photos/aaa33.jpg', 
  '/rk-photos/aaa34.jpg', '/rk-photos/aaa35.jpg', '/rk-photos/aaa36.jpg', 
  '/rk-photos/aaa37.jpg', '/rk-photos/aaa38.jpg', '/rk-photos/aaa39.jpg', 
  '/rk-photos/aaa40.jpg', '/rk-photos/aaa41.jpg', '/rk-photos/aaa42.jpg', 
  '/rk-photos/aaa43.jpg', '/rk-photos/aaa44.jpg', '/rk-photos/aaa45.jpg',
  '/rk-photos/aaa46.jpg' 
];

  const gridRows = [];
  for (let i = 0; i < 45; i += 3) {
    gridRows.push(galleryImages.slice(i, i + 3));
  }

  const finalImage = galleryImages[45]; 

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">R.K. Laxman</h1>
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          Blessed by legendary cartoonist Shri R.K. Laxman and has a solo show at his residence on 19th June'2012 and at the same place he had live demonstration of two paintings.
        </p>

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

        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Photo Gallery of the event
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {gridRows.map((rowImages, rowIndex) => {

              const isBigRow = rowIndex === 0 || rowIndex === gridRows.length - 1;
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
                        alt={`R.K. Laxman Event Row ${rowIndex + 1} Image ${imgIndex + 1}`} 
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
              );
            })}
          </div>

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

      </div>

    </div>
  );
}