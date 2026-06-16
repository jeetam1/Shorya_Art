import React from 'react';
import PageBanner from './PageBanner';

export default function KalidasSanskrit() {
  
  const galleryImages = [
  '/kalidas-photos/a51.jpg', '/kalidas-photos/a52.jpg', '/kalidas-photos/a53.jpg', 
  '/kalidas-photos/a54.jpg', '/kalidas-photos/a55.jpg', '/kalidas-photos/a56.jpg', 
  '/kalidas-photos/a57.jpg', '/kalidas-photos/a58.jpg', '/kalidas-photos/a59.jpg'
];

  const finalImage = '/a510.jpg';

  const gridRows = [];
  for (let i = 0; i < galleryImages.length; i += 3) {
    gridRows.push(galleryImages.slice(i, i + 3));
  }

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <PageBanner title="Kalidas Sanskrit Academy" bgImage="/Kalidas.jpg" />

      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          Solo show held in Ujjain at Kalidas Sanskrit Academy Gallery on 25th Oct'2012
        </p>

        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Photo Gallery of Kalidas Sanskrit Academy Event
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginBottom: '30px' }}>
            {gridRows.map((rowImages, rowIndex) => (
              <div key={rowIndex} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%' }}>
                {rowImages.map((src, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    style={{ 
                      width: '100%', 
                      aspectRatio: '4 / 3', 
                      overflow: 'hidden', 
                      backgroundColor: '#f4f4f4',
                      border: '1px solid #e2e2e2'
                    }}
                  >
                    <img loading="lazy" src={src} 
                      alt={`Kalidas Academy Event Row ${rowIndex + 1} Image ${imgIndex + 1}`} 
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
            ))}
          </div>

          <div 
            style={{ width: '100%', overflow: 'hidden', border: '1px solid #e2e2e2' }}
          >
            <img loading="lazy" src={finalImage} 
              alt="Final Wide View of Event" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

        </div> 

      </div>

    </div>
  );
}