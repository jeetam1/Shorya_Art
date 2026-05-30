import React from 'react';

export default function TedX() {
  // Automated array for your images 250 through 257
  const galleryImages = Array.from({ length: 8 }, (_, i) => `/${250 + i}.jpg`);

  return (
    <div className="artwork-detail-page custom-tedx-page">
      <div className="tedx-content-flow">
        
        {/* ADDED CLEAN TEXT HEADER */}
        <h1 className="tedx-main-title-heading">Ted X</h1>
        <p className="tedx-meta-subheader-text">Posted | 0 comments</p>

        {/* EMBEDDED YOUTUBE VIDEO PLAYER */}
        <div className="tedx-video-player-wrapper">
          <iframe
            className="tedx-video-iframe"
            src="https://www.youtube.com/embed/16jmQN8CGZ0"
            title="TEDx Speech Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* UPDATED CAPTION TEXT */}
        <p className="tedx-video-caption-text">
          The story of my life’ – see my <em>TEDx</em> speech about 7 years of my Abstract Art Journey. 30.jpg
        </p>

        {/* NARRATIVE EXPLANATION SPLIT BLOCK */}
        <div className="tedx-description-split-row">
          <div className="tedx-info-text-column">
            <h2 className="tedx-section-heading">What is TEDx event?</h2>
            <p className="tedx-body-paragraph-text">
              Imagin a day filled with brilliant speakers, thought-provoking video and mind-blowing conversations. By organizing a TEDx event, you can create a unique gathering in your community that will unleash new ideas, inspire and inform.
            </p>
            <p className="tedx-body-paragraph-text">
              A TEDx event is a local gathering where live TED-like talks and videos previously recorded at TED conferences are shared with the community. TEDx events are fully planned and coordinated independently, on a community-by-community basis. The content and design of each TEDx event is unique and developed independently, but all of them have features in common.
            </p>
          </div>
          <div className="tedx-branding-logo-box">
            <img src="/30.jpg" alt="TEDx Branding Logo" className="tedx-fluid-logo" onError={(e) => e.target.style.display = 'none'} />
          </div>
        </div>

        {/* IMAGE MATRIX TITLE */}
        <h3 className="tedx-gallery-title-header">Event Gallery of TEDx JSSATE</h3>

        {/* EXACT 2-COLUMN THUMBNAIL GRID MATRIX */}
        <div className="tedx-thumbnail-matrix-grid">
          {galleryImages.map((srcUrl, index) => (
            <div key={index} className="tedx-matrix-thumbnail-card">
              <div className="tedx-matrix-image-clipping-box">
                <img 
                  src={srcUrl} 
                  alt={`TEDx Event Frame Asset ${250 + index}`} 
                  className="tedx-matrix-img-asset" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVE COMMENT SECTION CONTAINER */}
      <div className="comment-section-container">
        <h2 className="comment-heading">Submit a Comment</h2>
        <p className="comment-subtext">Your email address will not be published. Required fields are marked *</p>
        
        <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group full-width">
            <textarea placeholder="Comment" className="comment-textarea" rows="8" required></textarea>
          </div>
          <div className="form-group half-width">
            <input type="text" placeholder="Name *" className="comment-input" required />
          </div>
          <div className="form-group half-width">
            <input type="email" placeholder="Email *" className="comment-input" required />
          </div>
          <div className="form-group half-width">
            <input type="text" placeholder="Website" className="comment-input" />
          </div>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="tedx-save-checkbox" className="comment-checkbox" />
            <label htmlFor="tedx-save-checkbox" className="comment-checkbox-label">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <div className="submit-btn-wrapper">
            <button type="submit" className="comment-submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}