import React, { useState } from 'react';

export default function SBSRadio({ setLatestComment }) {
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);

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
          <h1 className="shorya-custom-title-text-value">SBS Radio</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Post Meta Data */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '14px', color: '#888888', margin: '0 0 50px 0' }}>
          Posted | 0 comments
        </p>

        {/* CENTERED MEDIA SECTION (Image & Audio Player) */}
        <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto 80px auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '18px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0' }}>
            Reaching to the land down under.
          </h2>

          <img 
            src="/a539.png" 
            alt="SBS Radio" 
            style={{ width: '100%', height: 'auto', display: 'block', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} 
          />

          <audio controls style={{ width: '100%', marginTop: '10px' }}>
            <source src="/audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '13px', color: '#888888', textAlign: 'center', margin: '0' }}>
            Shorya's Interview with SBS Radio Australia
          </p>

        </div>

        {/* INTERACTIVE COMMENT SECTION PANEL */}
        <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto 40px auto', borderTop: '1px solid #eeeeee', paddingTop: '40px' }}>
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '28px', fontWeight: '800', color: '#444444', marginBottom: '10px' }}>
            Submit a Comment
          </h2>
          <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '13px', color: '#666666', marginBottom: '30px' }}>
            Your email address will not be published. Required fields are marked *
          </p>
          
          {isCommentSubmitted ? (
            <div style={{ padding: '25px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#166534', fontFamily: 'sans-serif' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#15803d' }}>Success!</h3>
              <p style={{ margin: 0, fontSize: '15px' }}>Your comment has been successfully submitted.</p>
            </div>
          ) : (
            <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <textarea name="commentBody" placeholder="Comment" rows="8" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', boxSizing: 'border-box', fontFamily: 'inherit', fontSize: '14px', resize: 'vertical' }}></textarea>
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
                <button type="submit" style={{ backgroundColor: '#fafafa', color: '#333333', border: '1px solid #dddddd', padding: '10px 24px', fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s', borderRadius: '3px' }}>Submit</button>
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