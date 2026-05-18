import React, { useState } from 'react';

export default function Events() {
  // Modal visualization state tracking hooks for interactive preview windows
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="shorya-biography-view-root">
      
      {/* 1. TOP HERO ACCENT BANNER STRIP - SET TO 701.JPG WITH LEFT-BOTTOM OVERLAP */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')" }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Events</h1>
        </div>
      </div>

      {/* 2. MAIN TIMELINE CONTENT SCOPE */}
      <div className="shorya-biography-body-scaffold-layout">
        
        {/* ==================== YEAR 2011 SECTION ==================== */}
        <div className="event-timeline-block">
          <h2 className="shorya-secondary-scaffold-section-header" style={{ marginTop: '0px' }}>Year – 2011</h2>
          
          <div className="event-media-container" onClick={() => setModalImage('/701.jpg')} style={{ cursor: 'pointer' }}>
            <img src="/701.jpg" alt="Mumbai Cityline Grid" className="event-large-banner-img" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          <h3 className="shorya-paragraph-section-sub-heading-marker">Solo Exhibition at The Taj Mahal Palace Hotel</h3>

          {/* Dynamic Row Layout: Left Side Logo, Right Side Content Description */}
          <div className="event-split-row-layout">
            <div className="event-brand-logo-wrapper">
              <img src="/702.jpg" alt="The Taj Mahal Palace Mumbai Logo" className="event-inline-logo-asset" />
            </div>
            <div className="event-editorial-text-pane">
              <p className="shorya-paragraph-text-standard-value">
                The journey into the world of abstract art started with a solo exhibition at the exclusive Chambers Terrace, Hotel Taj Mahal Palace, Mumbai on 21st of October 2011. Only Barack Obama and World Cup winning Indian Cricket Team had experienced the magnificent view of the Gateway of India from up here; Shorya has been the youngest one to receive this honoured privilege to be invited and to present his art before art critics, artists and various dignitaries from different walks of life.
              </p>
              <a href="#/read-more" className="event-teal-readmore-link">Read More...</a>
            </div>
          </div>
        </div>

        {/* ==================== YEAR 2012 SECTION ==================== */}
        <div className="event-timeline-block" style={{ marginTop: '50px' }}>
          <h2 className="shorya-secondary-scaffold-section-header">Year – 2012</h2>
          
          <div className="event-media-container" onClick={() => setModalImage('/703.jpg')} style={{ cursor: 'pointer' }}>
            <img src="/703.jpg" alt="Pogo Kids Awards Shorya Mahanot" className="event-large-banner-img" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          <h3 className="shorya-paragraph-section-sub-heading-marker">This Amazing kid gets Amazing kids award</h3>

          {/* Dynamic Row Layout: Left Side Brand Icon, Right Side Content Description */}
          <div className="event-split-row-layout">
            <div className="event-brand-logo-wrapper pogo-logo-adjust">
              <img src="/702.jpg" alt="Pogo Brand Logo Icon Asset" className="event-inline-logo-asset" />
            </div>
            <div className="event-editorial-text-pane">
              <p className="shorya-paragraph-text-standard-value">
                It was November 2012 when this young artist received Pogo Television ‘Amazing Kids Award’ and featured in the commercial by turner broadcasting where he showcased his talent along with his shy nature. Few instances that established Shorya as a budding artist.
              </p>
              <a href="#/read-more" className="event-teal-readmore-link">Read More...</a>
            </div>
          </div>
        </div>

      </div>

      {/* 3. DYNAMIC SPRING POP-UP OVERLAY LIGHTBOX */}
      {modalImage && (
        <div className="shorya-lightbox-overlay-shroud" onClick={() => setModalImage(null)}>
          <div className="shorya-lightbox-modal-window" onClick={(e) => e.stopPropagation()}>
            <button className="shorya-lightbox-close-trigger-btn" onClick={() => setModalImage(null)}>&times;</button>
            <div className="shorya-lightbox-img-bounding-wrapper">
              <img src={modalImage} alt="Enlarged Event View" className="shorya-lightbox-large-img-asset shorya-spring-zoom-animation" />
            </div>
          </div>
        </div>
      )}

      {/* STICKY BRAND FOOTLINE */}
      <footer className="shorya-view-footer-signature-line">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>

    </div>
  );
}