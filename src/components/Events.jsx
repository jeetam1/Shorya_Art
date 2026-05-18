import React from 'react';

export default function Events() {
  return (
    <div className="editorial-page-canvas">
      
      {/* 1. TOP HERO BANNER RIBBON (Using 701.jpg as requested) */}
      <div className="editorial-hero-banner-frame" style={{ backgroundImage: `url('/701.jpg')` }}>
        <h1 className="editorial-main-title-text">Events</h1>
      </div>

      {/* 2. MAIN TIMELINE CONTENT SCOPE */}
      <div className="editorial-inner-content-scaffold event-page-scaffold">
        
        {/* ==================== YEAR 2011 SECTION ==================== */}
        <div className="event-timeline-block">
          <h2 className="event-year-heading">Year – 2011</h2>
          
          <div className="event-media-container">
            <img src="/701.jpg" alt="Mumbai Cityline Grid" className="event-large-banner-img" />
          </div>

          <h3 className="event-item-sub-title">Solo Exhibition at The Taj Mahal Palace Hotel</h3>

          {/* Dynamic Row Layout: Left Side Logo, Right Side Content Description */}
          <div className="event-split-row-layout">
            <div className="event-brand-logo-wrapper">
              <img src="/702.jpg" alt="The Taj Mahal Palace Mumbai Logo" className="event-inline-logo-asset" />
            </div>
            <div className="event-editorial-text-pane">
              <p className="editorial-standard-body-paragraph">
                The journey into the world of abstract art started with a solo exhibition at the exclusive Chambers Terrace, Hotel Taj Mahal Palace, Mumbai on 21st of October 2011. Only Barack Obama and World Cup winning Indian Cricket Team had experienced the magnificent view of the Gateway of India from up here; Shorya has been the youngest one to receive this honoured privilege to be invited and to present his art before art critics, artists and various dignitaries from different walks of life.
              </p>
              <a href="#/read-more" className="event-teal-readmore-link">Read More...</a>
            </div>
          </div>
        </div>

        {/* ==================== YEAR 2012 SECTION ==================== */}
        <div className="event-timeline-block" style={{ marginTop: '40px' }}>
          <h2 className="event-year-heading">Year – 2012</h2>
          
          <div className="event-media-container">
            <img src="/703.jpg" alt="Pogo Kids Awards Shorya Mahanot" className="event-large-banner-img" />
          </div>

          <h3 className="event-item-sub-title">This Amazing kid gets Amazing kids award</h3>

          {/* Dynamic Row Layout: Left Side Brand Icon, Right Side Content Description */}
          <div className="event-split-row-layout">
            <div className="event-brand-logo-wrapper pogo-logo-adjust">
              <img src="/702.jpg" alt="Pogo Brand Logo Icon Asset" className="event-inline-logo-asset" />
            </div>
            <div className="event-editorial-text-pane">
              <p className="editorial-standard-body-paragraph">
                It was November 2012 when this young artist received Pogo Television ‘Amazing Kids Award’ and featured in the commercial by turner broadcasting where he showcased his talent along with his shy nature. Few instances that established Shorya as a budding artist.
              </p>
              <a href="#/read-more" className="event-teal-readmore-link">Read More...</a>
            </div>
          </div>
        </div>

      </div>

      {/* 3. STICKY BRAND CORNER FOOTLINE MARKER */}
      <footer className="detail-page-footer-signature-bio">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>

    </div>
  );
}
