import React, { useState } from 'react';

export default function AcrylicOnCanvas() {
  const [modalImage, setModalImage] = useState(null);

  const galleryItems = Array.from({ length: 33 }, (_, i) => {
    const imageNumber = 601 + (i % 9);
    return {
      id: `shorya-acrylic-canvas-thumb-${i + 1}`,
      src: `/${imageNumber}.jpg`
    };
  });

  return (
    <div className="shorya-acrylic-canvas-view-root">
      
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/602.jpg')" }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Acrylic on canvas</h1>
        </div>
      </div>

      <div className="shorya-compact-gallery-outer-wrapper">
        <div className="shorya-gallery-grid-three-columns-matrix">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="shorya-gallery-thumbnail-card-frame" 
              onClick={() => setModalImage(item.src)}
            >
              <div className="shorya-gallery-thumbnail-image-clipping-box">
                <img src={item.src} alt="Portfolio Work Piece" className="shorya-gallery-thumbnail-img-asset" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="shorya-lightbox-overlay-shroud" onClick={() => setModalImage(null)}>
          <div className="shorya-lightbox-modal-window" onClick={(e) => e.stopPropagation()}>
            <button className="shorya-lightbox-close-trigger-btn" onClick={() => setModalImage(null)}>&times;</button>
            <div className="shorya-lightbox-img-bounding-wrapper">
              <img src={modalImage} alt="Enlarged Portfolio View" className="shorya-lightbox-large-img-asset shorya-spring-zoom-animation" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}