import React from 'react';
import PageBanner from './PageBanner';

export default function HoltzmanGallery() {
  
  const row1Images = ['/events-photos/a91.jpg', '/events-photos/a92.jpg', '/events-photos/a93.jpg'];
const row2Images = ['/events-photos/a94.jpg', '/events-photos/a95.jpg', '/events-photos/a96.jpg'];
const row3Images = ['/events-photos/a97.jpg', '/events-photos/a98.jpg'];
const row4Images = ['/events-photos/a99.jpg', '/events-photos/a910.jpg'];
const row5Images = ['/events-photos/a911.jpg', '/events-photos/a912.jpg'];
const finalImage = '/events-photos/a913.jpg';

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <PageBanner title="Holtzman Gallery" bgImage="/holtzman--gallery.jpg" />

      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#444444', lineHeight: '1.7', margin: '0 auto 60px auto', width: '100%', textAlign: 'left' }}>
          Another glorious year in his feather, 2015 defined Shorya as the coming-of-age artist. Masterful strokes, multiple layers, deliberate color composition and amazing control on the symmetry were pulling people to see the work on display of this world’s signature style youngest abstract artist. One single art exhibition at Holtzman Gallery further defined Shorya as an artist to look out for upcoming years.
        </p>

        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto 70px auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} src="https://www.youtube.com/embed/5pyRs1Wrd64" title="Video 1" frameBorder="0" allowFullScreen></iframe>
          </div>

          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} src="https://www.youtube.com/embed/M-U50NCA170" title="Greater AC Chamber Mixer" frameBorder="0" allowFullScreen></iframe>
          </div>

          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} src="https://www.youtube.com/embed/T0e2nMsNZ9g" title="Video 3" frameBorder="0" allowFullScreen></iframe>
          </div>

        </div>

        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row1Images.map((src, index) => (
              <div key={`r1-${index}`} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img loading="lazy" src={src} alt={`Holtzman Row 1 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row2Images.map((src, index) => (
              <div key={`r2-${index}`} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img loading="lazy" src={src} alt={`Holtzman Row 2 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row3Images.map((src, index) => (
              <div key={`r3-${index}`} style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img loading="lazy" src={src} alt={`Holtzman Row 3 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row4Images.map((src, index) => (
              <div key={`r4-${index}`} style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img loading="lazy" src={src} alt={`Holtzman Row 4 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', marginBottom: '15px' }}>
            {row5Images.map((src, index) => (
              <div key={`r5-${index}`} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#f4f4f4', border: '1px solid #e2e2e2' }}>
                <img loading="lazy" src={src} alt={`Holtzman Row 5 Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          <div style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #e2e2e2', marginBottom: '30px' }}>
            <img loading="lazy" src={finalImage} alt="Final Wide View of Holtzman Gallery" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

        </div> 

      </div>

    </div>
  );
}