import React from 'react';
import CommentSection from './CommentSection'; 

export default function TedX() {
  
  const galleryImages = Array.from({ length: 8 }, (_, i) => `/events-photos/${250 + i}.jpg`);

  return (
    <div className="artwork-detail-page custom-tedx-page">
      <div className="tedx-content-flow">
        <h1 className="tedx-main-title-heading">Ted X</h1>
        <p className="tedx-meta-subheader-text">Posted | 0 comments</p>

        <div className="tedx-video-player-wrapper">
          <iframe 
            className="tedx-video-iframe" 
            src="https://www.youtube.com/embed/16jmQN8CGZ0" 
            title="TEDx Speech" 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>

        <p className="tedx-video-caption-text">
          The story of my life’ – see my <em>TEDx</em> speech about 7 years of my Abstract Art Journey.
        </p>

        <div className="tedx-description-split-row">
          <div className="tedx-info-text-column">
            <h2 className="tedx-section-heading">What is TEDx event?</h2>
            <p className="tedx-body-paragraph-text">Imagin a day filled with brilliant speakers...</p>
            <p className="tedx-body-paragraph-text">A TEDx event is a local gathering...</p>
          </div>
          <div className="tedx-branding-logo-box">
            
            <img src="/events-photos/30.jpg" alt="TEDx Logo" className="tedx-fluid-logo" />
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

      <CommentSection storageKey="comments-tedx-presentation" />

    </div>
  );
}