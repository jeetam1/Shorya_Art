import React from 'react';
import PageBanner from './PageBanner';

export default function MicrosoftFutureDecoded() {

  const galleryImages = [
  '/events-photos/a530.jpg', '/events-photos/a531.jpg', '/events-photos/a532.jpg',
  '/events-photos/a533.jpg', '/events-photos/a534.jpg', '/events-photos/a535.jpg',
  '/events-photos/a536.jpg', '/events-photos/a537.jpg', '/events-photos/a538.jpg'
];

  const gridRows = [];
  for (let i = 0; i < galleryImages.length; i += 3) {
    gridRows.push(galleryImages.slice(i, i + 3));
  }

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <PageBanner title="Microsoft Future Decoded" bgImage="/banners/701.jpg" />

      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          Collaborating with Microsoft in Future Decoded 2017: I attempted my first few Signature Style Abstract Art(s) digitally on Surface Pro 4 gifted by Microsoft. The Future decoded 2017 was graced by about 1700 thought Leaders who were invited by Microsoft.
        </p>

        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Event Gallery of Microsoft Future Decoded
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginBottom: '40px' }}>
            {gridRows.map((rowImages, rowIndex) => (
              <div key={rowIndex} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%' }}>
                {rowImages.map((src, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    style={{ 
                      width: '100%', 
                      aspectRatio: '3 / 4', 
                      overflow: 'hidden', 
                      backgroundColor: '#f4f4f4',
                      border: '1px solid #e2e2e2'
                    }}
                  >
                    <img loading="lazy" src={src} 
                      alt={`Microsoft Future Decoded Event Image ${rowIndex * 3 + imgIndex + 1}`} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        objectPosition: 'center top', 
                        display: 'block'
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div> 

      </div>

    </div>
  );
}