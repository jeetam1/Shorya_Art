import React from 'react';

export default function AcrylicOnCanvas() {
  // Generates exactly 33 structured artwork items repeating assets 601 to 610
  const galleryItems = Array.from({ length: 33 }, (_, i) => {
    const imageNumber = 601 + (i % 10); // Cycles smoothly from 601.jpg up to 610.jpg
    return {
      id: `acrylic-${i + 1}`,
      title: `Acrylic Artwork Specimen ${i + 1}`,
      src: `/${imageNumber}.jpg`,
      size: "24\" x 36\"",
      medium: "Acrylic on canvas"
    };
  });

  return (
    <div className="editorial-page-canvas">
      
      {/* 1. TOP DYNAMIC BANNER STRIP HEADER */}
      <div className="editorial-hero-banner-frame" style={{ backgroundImage: `url('/601.jpg')` }}>
        <h1 className="editorial-main-title-text">Acrylic on canvas</h1>
      </div>

      {/* 2. CORE PORTFOLIO EXHIBITION CANVAS AREA */}
      <div className="gallery-category-container">
        <div className="gallery-category-3col-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-thumbnail-card-frame">
              <div className="gallery-thumbnail-image-wrapper">
                <img src={item.src} alt={item.title} className="gallery-thumbnail-asset-img" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. STICKY BRAND CORNER FOOTLINE MARKER */}
      <footer className="detail-page-footer-signature-bio">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>

    </div>
  );
}