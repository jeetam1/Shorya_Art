import React, { useState, useEffect, useRef } from 'react';
import PageBanner from './PageBanner';

export default function AcrylicOnCanvas() {
  const [activeImage, setActiveImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [modalOrigin, setModalOrigin] = useState(null);
  const [magnifier, setMagnifier] = useState({ x: 0, y: 0, show: false });
  const [activeViewMode, setActiveViewMode] = useState('painting'); // 'painting' or 'mockup'

  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const magnifierContainerRef = useRef(null);
  const modalRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const cursorScale = useRef(1);
  const isHovering = useRef(false);

  const galleryItems = Array.from({ length: 33 }, (_, i) => {
    const imageNumber = 601 + (i % 9);
    return {
      id: `shorya-acrylic-canvas-thumb-${i + 1}`,
      src: `/banners/${imageNumber}.jpg`
    };
  });

  useEffect(() => {
    const container = containerRef.current;
    const ring = ringRef.current;
    if (!container || !ring) return;

    let animationFrameId;

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      
      if (!isHovering.current) {
        isHovering.current = true;
        ring.style.opacity = '1';
      }
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
      ring.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      ring.style.opacity = '0';
    };

    const animateCursor = () => {
      // 1:1 instant tracking like a standard cursor (zero delay/trailing lag)
      cursorPos.current.x = mousePos.current.x;
      cursorPos.current.y = mousePos.current.y;

      if (ringRef.current) {
        // Subtract 10 to center the 20px ring
        ringRef.current.style.transform = `translate3d(${cursorPos.current.x - 10}px, ${cursorPos.current.y - 10}px, 0) scale(${cursorScale.current})`;
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    animateCursor();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (activeImage && modalRef.current && modalOrigin) {
      const modalElement = modalRef.current;
      const modalRect = modalElement.getBoundingClientRect();
      const originX = ((modalOrigin.x - modalRect.left) / modalRect.width) * 100;
      const originY = ((modalOrigin.y - modalRect.top) / modalRect.height) * 100;
      modalElement.style.transformOrigin = `${originX}% ${originY}%`;
    }
  }, [activeImage, modalOrigin]);

  const handleOpenModal = (e, src) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    setModalOrigin({ x: cardCenterX, y: cardCenterY });
    setActiveImage(src);
    setActiveViewMode('painting');
    setIsClosing(false);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveImage(null);
      setIsClosing(false);
      setActiveViewMode('painting');
    }, 350); // matches the shroud/modal fade/scale duration (350ms)
  };

  const handleInteractiveEnter = () => {
    cursorScale.current = 2.2; // Reduced size from 3 to 2.2 on hover
    if (ringRef.current) {
      ringRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
      ringRef.current.style.borderWidth = '1.5px';
      ringRef.current.style.borderColor = '#000000';
    }
  };

  const handleInteractiveLeave = () => {
    cursorScale.current = 1;
    if (ringRef.current) {
      ringRef.current.style.backgroundColor = 'transparent';
      ringRef.current.style.borderWidth = '2px';
      ringRef.current.style.borderColor = '#000000';
    }
  };

  const handleMagnifierMouseMove = (e) => {
    if (activeViewMode !== 'painting') return;
    if (!magnifierContainerRef.current) return;
    const { left, top, width, height } = magnifierContainerRef.current.getBoundingClientRect();
    const posX = e.clientX - left;
    const posY = e.clientY - top;

    if (posX < 0 || posY < 0 || posX > width || posY > height) {
      setMagnifier(prev => ({ ...prev, show: false }));
    } else {
      setMagnifier({ x: posX, y: posY, show: true });
    }
  };

  const getMagnifierStyles = () => {
    if (!magnifierContainerRef.current) return {};
    const lensSize = 180;
    const zoomLevel = 2.5;
    const { width, height } = magnifierContainerRef.current.getBoundingClientRect();

    const bgWidth = width * zoomLevel;
    const bgHeight = height * zoomLevel;

    const bgPosX = -(magnifier.x * zoomLevel) + (lensSize / 2);
    const bgPosY = -(magnifier.y * zoomLevel) + (lensSize / 2);

    const displayedImage = activeImage ? (activeViewMode === 'painting' ? activeImage : activeImage.replace('.jpg', '_mock.png')) : '';

    return {
      left: `${magnifier.x - (lensSize / 2)}px`,
      top: `${magnifier.y - (lensSize / 2)}px`,
      width: `${lensSize}px`,
      height: `${lensSize}px`,
      backgroundImage: `url(${displayedImage})`,
      backgroundPosition: `${bgPosX}px ${bgPosY}px`,
      backgroundSize: `${bgWidth}px ${bgHeight}px`,
      imageRendering: 'high-quality'
    };
  };

  return (
    <div ref={containerRef} className={`shorya-acrylic-canvas-view-root ${activeImage ? 'lightbox-active' : ''}`}>
      
      <PageBanner title="Acrylic on canvas" bgImage="/acrylic_on_canvas.jpg" />

      <div className="shorya-compact-gallery-outer-wrapper">
        <div className="shorya-gallery-grid-three-columns-matrix">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="shorya-gallery-thumbnail-card-frame" 
              onClick={(e) => handleOpenModal(e, item.src)}
              onMouseEnter={handleInteractiveEnter}
              onMouseLeave={handleInteractiveLeave}
            >
              <div className="shorya-gallery-thumbnail-image-clipping-box">
                <img loading="lazy" src={item.src} alt="Portfolio Work Piece" className="shorya-gallery-thumbnail-img-asset" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div 
          className={`shorya-lightbox-overlay-shroud ${isClosing ? 'close-animation' : 'open-animation'}`} 
          onClick={handleCloseModal}
        >
          <div 
            ref={modalRef} 
            className={`shorya-lightbox-modal-window ${isClosing ? 'close-animation' : 'open-animation'}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="shorya-lightbox-close-trigger-btn" 
              onClick={handleCloseModal}
              onMouseEnter={handleInteractiveEnter}
              onMouseLeave={handleInteractiveLeave}
            >&times;</button>
            <div className="shorya-lightbox-split-container">
              <div 
                className="shorya-lightbox-left-image-side"
                style={{ cursor: activeViewMode === 'painting' ? 'crosshair' : 'default', display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center', alignItems: 'center' }}
              >
                <div
                  className="shorya-lightbox-image-wrapper"
                  ref={magnifierContainerRef}
                  onMouseMove={handleMagnifierMouseMove}
                  onMouseLeave={() => setMagnifier(prev => ({ ...prev, show: false }))}
                  style={{ position: 'relative' }}
                >
                  <img loading="lazy" src={activeImage ? (activeViewMode === 'painting' ? activeImage : activeImage.replace('.jpg', '_mock.png')) : ''} alt="Enlarged Portfolio View" className="shorya-lightbox-large-img-asset" />
                  {activeViewMode === 'painting' && magnifier.show && magnifierContainerRef.current && (
                    <div className="artwork-magnifier-glass-lens" style={getMagnifierStyles()} />
                  )}
                </div>

                {/* Thumbnails preview bar */}
                <div className="shorya-lightbox-preview-bar">
                  <div 
                    className={`shorya-preview-thumb-item ${activeViewMode === 'painting' ? 'active' : ''}`}
                    onClick={() => setActiveViewMode('painting')}
                    onMouseEnter={handleInteractiveEnter}
                    onMouseLeave={handleInteractiveLeave}
                  >
                    <img loading="lazy" src={activeImage} alt="Painting view" />
                  </div>
                  <div 
                    className={`shorya-preview-thumb-item ${activeViewMode === 'mockup' ? 'active' : ''}`}
                    onClick={() => setActiveViewMode('mockup')}
                    onMouseEnter={handleInteractiveEnter}
                    onMouseLeave={handleInteractiveLeave}
                  >
                    <img loading="lazy" src={activeImage ? activeImage.replace('.jpg', '_mock.png') : ''} alt="Room view" />
                  </div>
                </div>
              </div>
              <div className="shorya-lightbox-right-content-side">
                <h2 className="shorya-lightbox-artwork-title">Acrylic on Canvas Series</h2>
                <div className="shorya-lightbox-artwork-meta">
                  <span className="shorya-meta-badge">Original Work</span>
                  <span className="shorya-meta-badge">Abstract Art</span>
                </div>
                <hr className="shorya-lightbox-divider" />
                <p className="shorya-lightbox-artwork-description">
                  This vibrant abstract piece features intricate textures and dynamic brush strokes, capturing the essence of spontaneous expression. Created using premium acrylic pigments on a stretched canvas, the composition explores the interplay of bold vertical alignments and energetic splatters of color.
                </p>
                <div className="shorya-lightbox-technical-details">
                  <div className="shorya-tech-row">
                    <strong>Medium:</strong> <span>Acrylic on Canvas</span>
                  </div>
                  <div className="shorya-tech-row">
                    <strong>Dimensions:</strong> <span>36 x 48 inches (91 x 122 cm)</span>
                  </div>
                  <div className="shorya-tech-row">
                    <strong>Year:</strong> <span>2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Trailing Cursor Element */}
      <div ref={ringRef} className="custom-cursor-ring" />

    </div>
  );
}