import React from 'react';

export default function ArtExpo() {
  
  const row1Images = ['/events-photos/a81.jpg', '/events-photos/a82.jpg', '/events-photos/a83.jpg'];
const row2Images = ['/events-photos/a84.jpg', '/events-photos/a85.jpg'];

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/banners/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Art Expo</h1>
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          His first debut show at Art Expo New York (U.S.A.) in March, 2013. Where his paintings were selected to appear their "Best of Artexpo 2013" exhibition
        </p>

        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Event Gallery of Art Expo &ndash; NY
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row1Images.map((src, imgIndex) => (
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
                <img 
                  src={src} 
                  alt={`Art Expo Event Image ${imgIndex + 1}`} 
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', marginBottom: '30px' }}>
            {row2Images.map((src, imgIndex) => (
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
                <img 
                  src={src} 
                  alt={`Art Expo Event Image ${imgIndex + 4}`} 
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

        </div> 

      </div>
    </div>
  );
}