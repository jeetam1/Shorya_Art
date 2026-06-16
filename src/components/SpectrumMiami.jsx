import React from 'react';
import PageBanner from './PageBanner';

export default function SpectrumMiami() {

  const topRowImages = ['/events-photos/a71.jpg', '/events-photos/a72.jpeg', '/events-photos/a73.jpeg'];
const fullWidthImage = '/events-photos/a74.jpg';

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <PageBanner title="Spectrum &ndash; Miami" bgImage="/banners/701.jpg" />

      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          His works where displayed in SPECTRUM Miami FL. (U.S.A.) in 2013.Where one of his paintings was sold in $3,000.00
        </p>

        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Event Gallery of Spectrum- Miami
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {topRowImages.map((src, imgIndex) => (
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
                  alt={`Spectrum Miami Event Image ${imgIndex + 1}`} 
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

          <div style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #e2e2e2', marginBottom: '30px' }}>
            <img loading="lazy" src={fullWidthImage} 
              alt="Spectrum Miami Exhibition Floor" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block'
              }}
            />
          </div>

        </div> 

      </div>

    </div>
  );
}