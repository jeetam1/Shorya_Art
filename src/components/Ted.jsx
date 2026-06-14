import React from 'react';
import CommentSection from './CommentSection'; 

export default function Ted() {
  
  const galleryImages = [
  '/events-photos/a515.jpg', '/events-photos/a516.jpg', '/events-photos/a517.jpg', '/events-photos/a518.jpg',
  '/events-photos/a519.jpg', '/events-photos/a520.jpg', '/events-photos/a521.jpg', '/events-photos/a522.jpg'
];

  const gridRows = [];
  for (let i = 0; i < galleryImages.length; i += 2) {
    gridRows.push(galleryImages.slice(i, i + 2));
  }

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/banners/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Ted X</h1>
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '14px', color: '#888888', margin: '0 0 30px 0' }}>
          Posted | 0 comments
        </p>

        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto 10px auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid #e5e5e5', backgroundColor: '#000000' }}>
            <iframe
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
              src="https://www.youtube.com/embed/16jmQN8CGZ0"
              title="TEDx JSSATE Speech"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '13px', color: '#666666', textAlign: 'center', fontStyle: 'italic', margin: '0 auto 50px auto' }}>
          "The story of my life" - see my TEDx speech about 7 years of my Abstract Art Journey.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '60px', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 450px', fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '14.5px', color: '#444444', lineHeight: '1.7' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#333333', marginBottom: '15px' }}>
              What is TEDx event?
            </h2>
            <p style={{ marginBottom: '15px' }}>
              Imagin a day filled with brilliant speakers, thought-provoking video and mind-blowing conversation. By organizing a TEDx event, you can create a unique gathering in your community that will unleash new ideas, inspire and inform.
            </p>
            <p>
              A TEDx event is a local gathering where live TED-like talks and videos previously recorded at TED conferences are shared with the community. TEDx events are fully planned and coordinated independently, on a community-by-community basis. The content and design of each TEDx event is unique and developed independently, but all of them have features in common.
            </p>
          </div>
          
          <div style={{ flex: '1 1 200px', display: 'flex', justifyContent: 'center' }}>
            <img src="/events-photos/a523.jpg" alt="TEDx Logo" style={{ maxWidth: '240px', width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'left', margin: '0 0 40px 0', lineHeight: '1.4' }}>
            Event Gallery of TEDx JSSATE
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginBottom: '60px' }}>
            {gridRows.map((rowImages, rowIndex) => (
              <div key={rowIndex} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%' }}>
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
                    <img 
                      src={src} 
                      alt={`TEDx Event Row ${rowIndex + 1} Image ${imgIndex + 1}`} 
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

        </div> 

        <CommentSection storageKey="comments-ted-event-page" />

      </div>
    </div>
  );
}