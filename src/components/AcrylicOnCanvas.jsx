import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from './PageBanner';
import { galleryItems } from '../data/galleryData';

export default function AcrylicOnCanvas() {
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomTitle, setZoomTitle] = useState('');
  const [zoomClosing, setZoomClosing] = useState(false);
  const [lightboxSize, setLightboxSize] = useState({ width: 'auto', height: 'auto' });
  const navigate = useNavigate();

  useEffect(() => {
    if (zoomImage) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [zoomImage]);

  useEffect(() => {
    if (!zoomImage) return;

    const handleResize = () => {
      const img = document.querySelector('.shorya-zoom-lightbox-img');
      if (img && img.naturalWidth && img.naturalHeight) {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const maxWidthPx = window.innerWidth * 0.94;
        const maxHeightPx = window.innerHeight * 0.86;

        const maxImgWidth = maxWidthPx - 24;
        const maxImgHeight = maxHeightPx - 24;

        let imgWidth = maxImgWidth;
        let imgHeight = maxImgWidth / aspectRatio;

        if (imgHeight > maxImgHeight) {
          imgHeight = maxImgHeight;
          imgWidth = maxImgHeight * aspectRatio;
        }

        setLightboxSize({
          width: `${Math.round(imgWidth + 24)}px`,
          height: `${Math.round(imgHeight + 24)}px`
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [zoomImage]);

  const handleZoomOpen = (src, title) => {
    setLightboxSize({ width: 'auto', height: 'auto' });
    setZoomImage(src);
    setZoomTitle(title);
    setZoomClosing(false);
  };

  const handleZoomClose = () => {
    setZoomClosing(true);
    setTimeout(() => {
      setZoomImage(null);
      setZoomTitle('');
      setZoomClosing(false);
    }, 350);
  };

  const handleImageLoad = (e) => {
    const img = e.target;
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    if (!naturalWidth || !naturalHeight) return;

    const aspectRatio = naturalWidth / naturalHeight;
    const maxWidthPx = window.innerWidth * 0.94;
    const maxHeightPx = window.innerHeight * 0.86;

    const maxImgWidth = maxWidthPx - 24;
    const maxImgHeight = maxHeightPx - 24;

    let imgWidth = maxImgWidth;
    let imgHeight = maxImgWidth / aspectRatio;

    if (imgHeight > maxImgHeight) {
      imgHeight = maxImgHeight;
      imgWidth = maxImgHeight * aspectRatio;
    }

    setLightboxSize({
      width: `${Math.round(imgWidth + 24)}px`,
      height: `${Math.round(imgHeight + 24)}px`
    });
  };

  return (
    <div className="shorya-acrylic-canvas-view-root">

      <PageBanner title="Acrylic on canvas" bgImage="/acrylic_on_canvas.jpg" />

      <div className="shorya-compact-gallery-outer-wrapper">
        <p className="shorya-gallery-intro-text">
          Please browse Shorya's amazing catalog of work. Click each image for a detailed view and more information. For all inquiries please contact us <a href="/contact" className="shorya-gallery-contact-link">here</a>. Enjoy!
        </p>
        <div className="shorya-gallery-grid-three-columns-matrix">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`shorya-gallery-thumbnail-card-frame ${item.isWide ? 'wide-frame' : ''}`}
            >
              <h3 className="shorya-gallery-item-title">{item.name}</h3>
              <div
                className="shorya-gallery-thumbnail-image-clipping-box"
                onClick={() => navigate(`/artwork/${item.slug}`, { state: { fromGallery: true } })}
                style={{ cursor: 'pointer' }}
              >
                <img loading="lazy" src={item.src} alt={`${item.name} - Acrylic on Canvas Abstract Painting by Shorya Mahanot`} className="shorya-gallery-thumbnail-img-asset" />
                <div className="shorya-gallery-thumbnail-inner-shadow-overlay"></div>
                <div className="shorya-gallery-hover-overlay">
                  <button
                    className="shorya-gallery-hover-icon-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/artwork/${item.slug}`, { state: { fromGallery: true } });
                    }}
                    title="Open"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <polyline points="9 21 3 21 3 15"></polyline>
                      <line x1="21" y1="3" x2="14" y2="10"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                  </button>
                  <button
                    className="shorya-gallery-hover-icon-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleZoomOpen(item.src, item.name);
                    }}
                    title="Zoom"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {zoomImage && (
        <div
          className={`shorya-zoom-lightbox-overlay-shroud ${zoomClosing ? 'close-animation' : 'open-animation'}`}
          onClick={handleZoomClose}
        >
          <div
            className="shorya-zoom-lightbox-content-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`shorya-zoom-lightbox-container ${zoomClosing ? 'close-animation' : 'open-animation'}`}
              style={lightboxSize}
            >
              <button
                className="shorya-zoom-lightbox-close-btn"
                onClick={handleZoomClose}
              >&times;</button>
              <img
                loading="lazy"
                src={zoomImage}
                alt={`${zoomTitle} - High-Resolution Abstract Art by Shorya Mahanot`}
                className="shorya-zoom-lightbox-img"
                onLoad={handleImageLoad}
              />
            </div>
            {zoomTitle && (
              <div className="shorya-zoom-lightbox-caption">
                {zoomTitle}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}