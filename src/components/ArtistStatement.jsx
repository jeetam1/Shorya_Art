import React, { useState } from 'react';

export default function ArtistStatement() {
  // Modal visualization state tracking hooks
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="shorya-biography-view-root">
      
      {/* 1. TOP HERO BANNER STRIP - USING 604.JPG ANCHORED AT LEFT BOTTOM EDGE */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/604.jpg')" }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Artist's Statement</h1>
        </div>
      </div>

      {/* 2. CORE TEXT EDITORIAL LAYOUT SCAFFOLD CONTAINER */}
      <div className="shorya-biography-body-scaffold-layout">
        
        {/* MAIN FEATURED PRESENTATION DISPLAY PHOTO - SET TO 600.JPG */}
        <div className="shorya-main-portrait-frame-wrapper" onClick={() => setModalImage('/600.jpg')}>
          <img 
            src="/600.jpg" 
            alt="Shorya Mahanot painting working asset" 
            className="shorya-main-portrait-img-element" 
          />
        </div>

        {/* TYPOGRAPHY PARAGRAPHS TEXT FRAME */}
        <div className="shorya-biography-paragraphs-stack-column">
          <p className="shorya-paragraph-text-standard-value">
            Every moment is worth living. And every moment worth liveable is worth painting. I believe this. Whenever I pick colours, I don’t just want to paint; I want to play and talk with canvas in such a way that anyone can sense and read the stories hidden behind those colours and splashes.
          </p>

          <p className="shorya-paragraph-text-standard-value">
            I treat the painting as if I am playing. I put my canvas on the floor and drip and pour and put my brush to throw strokes that I am not aware with. There’s always something new, whenever you try different things, in a different manner. Sometimes a blissful moment opens a window, showing me a world full of colours. A world bursting out with colours, a world that is beyond the thoughts of shapes and sizes, you just have to see it.
          </p>

          {/* ACCURATE SANS-SERIF SECTION MARKER SUB-HEADING */}
          <h2 className="shorya-paragraph-section-sub-heading-marker">A window to another world</h2>

          <p className="shorya-paragraph-text-standard-value">
            Painting for me is the excitement of seeing one colour getting mixed with another and becoming the third one. At times, it transforms into a colour that even I can't name. People tell me what I paint is simple and complex, at the same time. But I don't think so. These colours come from a world that is beyond a window where colours appear and disappear. A happy place for an artist like me maybe, but I can’t get them off my mind. And when these colours get down on the canvas, the world calls that as Shorya’s painting. People compare my paintings with what they know and say that I have a signature style but for me it’s just a beautiful feeling.
          </p>

          {/* TRADITIONAL BOLD ALIGNED SIGNATURE HIGHLIGHT SLIP */}
          <p className="shorya-single-artwork-meta-footer-strip" style={{ backgroundColor: 'transparent', color: '#111111', padding: '10px 0', fontSize: '16px', fontWeight: 'bold' }}>
            -Shorya
          </p>
        </div>

      </div>

      {/* 3. DYNAMIC SPRING LIGHTBOX POP-UP LIGHTBOX WINDOW OVERLAY */}
      {modalImage && (
        <div className="shorya-lightbox-overlay-shroud" onClick={() => setModalImage(null)}>
          <div className="shorya-lightbox-modal-window" onClick={(e) => e.stopPropagation()}>
            <button className="shorya-lightbox-close-trigger-btn" onClick={() => setModalImage(null)}>&times;</button>
            <div className="shorya-lightbox-img-bounding-wrapper">
              <img src={modalImage} alt="Enlarged Ultra-HD Statement Asset" className="shorya-lightbox-large-img-asset shorya-spring-zoom-animation" />
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