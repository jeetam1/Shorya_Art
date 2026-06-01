import React, { useState } from 'react';

export default function TedX({ setLatestComment }) {
  const galleryImages = Array.from({ length: 8 }, (_, i) => `/${250 + i}.jpg`);
  
  // --- NEW: Tracks if the form is successfully submitted ---
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault(); 
    
    const commentBox = e.target.elements.commentBody.value;
    const nameBox = e.target.elements.authorName.value;
    
    if (commentBox && nameBox) {
      if (typeof setLatestComment === 'function') {
        setLatestComment(`"${commentBox}" - ${nameBox}`);
        // Success! Hide the form.
        setIsSubmitted(true); 
      }
    }
  };

  return (
    <div className="artwork-detail-page custom-tedx-page">
      <div className="tedx-content-flow">
        <h1 className="tedx-main-title-heading">Ted X</h1>
        <p className="tedx-meta-subheader-text">Posted | 0 comments</p>

        <div className="tedx-video-player-wrapper">
          <iframe className="tedx-video-iframe" src="https://www.youtube.com/embed/16jmQN8CGZ0" title="TEDx Speech" frameBorder="0" allowFullScreen></iframe>
        </div>

        <p className="tedx-video-caption-text">
          The story of my life’ – see my <em>TEDx</em> speech about 7 years of my Abstract Art Journey. 30.jpg
        </p>

        <div className="tedx-description-split-row">
          <div className="tedx-info-text-column">
            <h2 className="tedx-section-heading">What is TEDx event?</h2>
            <p className="tedx-body-paragraph-text">Imagin a day filled with brilliant speakers...</p>
            <p className="tedx-body-paragraph-text">A TEDx event is a local gathering...</p>
          </div>
          <div className="tedx-branding-logo-box">
            <img src="/30.jpg" alt="TEDx Logo" className="tedx-fluid-logo" />
          </div>
        </div>

        <h3 className="tedx-gallery-title-header">Event Gallery of TEDx JSSATE</h3>
        <div className="tedx-thumbnail-matrix-grid">
          {galleryImages.map((srcUrl, index) => (
            <div key={index} className="tedx-matrix-thumbnail-card">
              <div className="tedx-matrix-image-clipping-box">
                <img src={srcUrl} alt={`TEDx ${index}`} className="tedx-matrix-img-asset" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="comment-section-container">
        <h2 className="comment-heading">Submit a Comment</h2>
        <p className="comment-subtext">Your email address will not be published. Required fields are marked *</p>
        
        {/* --- DYNAMIC RENDER: Shows Success Box OR The Form --- */}
        {isSubmitted ? (
          <div style={{ padding: '25px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#166534', fontFamily: 'sans-serif' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#15803d' }}>Success!</h3>
            <p style={{ margin: 0, fontSize: '15px' }}>Your comment has been successfully submitted and is now moving in the sidebar.</p>
          </div>
        ) : (
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <div className="form-group full-width">
              <textarea name="commentBody" placeholder="Comment" className="comment-textarea" rows="8" required></textarea>
            </div>
            <div className="form-group half-width">
              <input name="authorName" type="text" placeholder="Name *" className="comment-input" required />
            </div>
            <div className="form-group half-width">
              <input type="email" placeholder="Email *" className="comment-input" required />
            </div>
            <div className="form-group half-width">
              <input type="text" placeholder="Website" className="comment-input" />
            </div>
            <div className="submit-btn-wrapper">
              <button type="submit" className="comment-submit-btn">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}