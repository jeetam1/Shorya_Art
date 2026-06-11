import React from 'react';

export default function NDTV() {

  const row1Images = ['/events-photos/a915.jpg', '/events-photos/a916.jpg', '/events-photos/a917.jpg'];
const row2Images = ['/events-photos/a918.jpg', '/events-photos/a919.jpg', '/events-photos/a920.jpg'];
const row3Images = ['/events-photos/a921.jpg', '/events-photos/a922.jpg', '/events-photos/a923.jpg'];
const row4Images = ['/events-photos/a924.jpg', '/events-photos/a925.jpg']; 

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">NDTV</h1>
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          Done a live demo on NDTV as part of "Support My School telethon"– A 6 hour live televised fundraiser aired across NDTV Network on 29 November 2015 with anchors: Sourav Ganguly, Vikram Chandra. The guests present were Mr. Rajkumar Hirani, Ms. Zarina Screwvala, Mr. Ranveer Singh.
        </p>

        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto 70px auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
              src="https://www.youtube.com/embed/wcprieORULY"
              title="Shorya NDTV"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0 auto 40px auto', lineHeight: '1.4' }}>
            Event Gallery of NDTV Support my school telethon.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row1Images.map((src, index) => (
              <div key={`r1-${index}`} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`NDTV Event Row 1 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row2Images.map((src, index) => (
              <div key={`r2-${index}`} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`NDTV Event Row 2 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row3Images.map((src, index) => (
              <div key={`r3-${index}`} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`NDTV Event Row 3 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', marginBottom: '30px' }}>
            {row4Images.map((src, index) => (
              <div key={`r4-${index}`} style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img src={src} alt={`NDTV Event Row 4 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

        </div> 

      </div>

    </div>
  );
}