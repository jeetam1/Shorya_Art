import React, { useState } from 'react';

export default function Ted({ setLatestComment }) {
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);

  // EXPLICIT IMAGE DEFINITIONS (Total 8 Images: a515.jpg to a522.jpg)
  const galleryImages = [
    '/a515.jpg', '/a516.jpg', '/a517.jpg', '/a518.jpg',
    '/a519.jpg', '/a520.jpg', '/a521.jpg', '/a522.jpg'
  ];

  // Chunk images into rows of 2 (as shown in your layout screenshots)
  const gridRows = [];
  for (let i = 0; i < galleryImages.length; i += 2) {
    gridRows.push(galleryImages.slice(i, i + 2));
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentBox = e.target.elements.commentBody.value;
    const nameBox = e.target.elements.authorName.value;
    
    if (commentBox && nameBox) {
      if (setLatestComment) {
        setLatestComment(`"${commentBox}" - ${nameBox}`);
      }
      setIsCommentSubmitted(true);
    }
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Ted X</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Post Meta Data */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '14px', color: '#888888', margin: '0 0 30px 0' }}>
          Posted | 0 comments
        </p>

        {/* CENTERED YOUTUBE VIDEO PLAYER */}
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
        
        {/* Video Caption */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '13px', color: '#666666', textAlign: 'center', fontStyle: 'italic', margin: '0 auto 50px auto' }}>
          "The story of my life" - see my TEDx speech about 7 years of my Abstract Art Journey.
        </p>

        {/* TEXT & LOGO SECTION */}
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
            <img src="/a523.jpg" alt="TEDx Logo" style={{ maxWidth: '240px', width: '100%', height: 'auto' }} />
          </div>
        </div>

        {/* ========================================================================
            GALLERY SIZE WRAPPER (750px max width)
            ======================================================================== */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>

          {/* Gallery Section Subtitle */}
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '22px', fontWeight: '700', color: '#333333', textAlign: 'left', margin: '0 0 40px 0', lineHeight: '1.4' }}>
            Event Gallery of TEDx JSSATE
          </h2>

          {/* 2-COLUMN DYNAMIC ROW RENDERER (Landscape Shape) */}
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

        {/* INTERACTIVE COMMENT SECTION PANEL */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto 40px auto', borderTop: '1px solid #eeeeee', paddingTop: '40px' }}>
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '24px', fontWeight: '700', color: '#333333', marginBottom: '10px' }}>Submit a Comment</h2>
          <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '13px', color: '#666666', marginBottom: '30px' }}>Your email address will not be published. Required fields are marked *</p>
          
          {isCommentSubmitted ? (
            <div style={{ padding: '25px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#166534', fontFamily: 'sans-serif' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#15803d' }}>Success!</h3>
              <p style={{ margin: 0, fontSize: '15px' }}>Your comment has been successfully submitted.</p>
            </div>
          ) : (
            <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <textarea name="commentBody" placeholder="Comment" rows="8" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', boxSizing: 'border-box', fontFamily: 'inherit', fontSize: '14px' }}></textarea>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <input name="authorName" type="text" placeholder="Name *" required style={{ flex: '1 1 200px', padding: '12px', border: '1px solid #ddd', boxSizing: 'border-box', fontSize: '14px' }} />
                <input type="email" placeholder="Email *" required style={{ flex: '1 1 200px', padding: '12px', border: '1px solid #ddd', boxSizing: 'border-box', fontSize: '14px' }} />
                <input type="text" placeholder="Website" style={{ flex: '1 1 200px', padding: '12px', border: '1px solid #ddd', boxSizing: 'border-box', fontSize: '14px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <input type="checkbox" id="save-info" style={{ marginTop: '3px' }} />
                <label htmlFor="save-info" style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '13px', color: '#555555', lineHeight: '1.4' }}>
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
              <div>
                <button type="submit" style={{ backgroundColor: '#222222', color: '#ffffff', border: 'none', padding: '12px 28px', fontSize: '14px', fontWeight: '6px', cursor: 'pointer', transition: 'background 0.2s' }}>Submit</button>
              </div>
            </form>
          )}
        </div>

      </div>

      {/* FOOTER */}
      <footer className="shorya-view-footer-signature-line" style={{ textAlign: 'center', marginTop: 'auto' }}>
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>
      
    </div>
  );
}