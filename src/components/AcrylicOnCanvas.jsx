import React, { useState, useEffect, useRef } from 'react';
import PageBanner from './PageBanner';

const galleryItems = [
  { id: 1, name: "Untitled VI", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/1.jpg" },
  { id: 2, name: "Untitled VII", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/2.jpg" },
  { id: 3, name: "Untitled IX", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/3.jpg" },
  { id: 4, name: "Untitled X", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/4.jpg" },
  { id: 5, name: "Untitled XI", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/5.jpg" },
  { id: 6, name: "Untitled XII", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/6.jpg" },
  { id: 7, name: "Untitled XIII", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/7.jpg" },
  { id: 8, name: "Untitled XIV", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/8.jpg" },
  { id: 9, name: "Untitled XV", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/9.jpg" },
  { id: 10, name: "Untitled XVI", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/10.jpg" },
  { id: 11, name: "Colours of Life I", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/11.jpg", description: "The colors of life surround us. The garden has so many colors from the plants and flowers. They make me smile." },
  { id: 12, name: "Sun Shine", size: "18\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/12.jpg", description: "I love the sunshine! Painting in the sunshine makes the whole day joyful – and it comes through in the colors I paint" },
  { id: 13, name: "Cloudy Dreams", size: "24\" x 72\"", year: "2012", age: "6", src: "/Gallery-photos/13.jpg", isWide: true, description: "The clouds pass by as I dream of ultramarine – my favorite color. Composed of two 24\" x 36\" canvases painted together as one large panorama." },
  { id: 14, name: "Tiny Soldiers", size: "24\" x 18\"", year: "2010", age: "4", src: "/Gallery-photos/14.jpg", description: "Tiny soldiers marching across the painting…can you see them?" },
  { id: 15, name: "Rainy Day", size: "18\" x 24\"", year: "2010", age: "3 1/2", src: "/Gallery-photos/15.jpg", description: "Puddles of water, rain on my window, it’s a rainy day!" },
  { id: 16, name: "Fall Days", size: "18\" x 24\"", year: "2009", age: "3 1/2", src: "/Gallery-photos/16.jpg", description: "The tall trees shed their leaves – leaves falling down in golden colors." },
  { id: 17, name: "Dawning Day", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/17.jpg", description: "The bright sun awakes us to a new day." },
  { id: 18, name: "In the deep II", size: "24\" x 36\"", year: "2011", age: "5", src: "/Gallery-photos/18.jpg", description: "I look at mountains and oceans. Where you stand can change the meaning of deep for you." },
  { id: 19, name: "Meteor Shower", size: "24\" x 36\"", year: "2011", age: "5", src: "/Gallery-photos/19.jpg", description: "Spectacular color rains across the sky from the meteor shower. We wonder at its display." },
  { id: 20, name: "Diving", size: "24\" x 36\"", year: "2011", age: "5", src: "/Gallery-photos/20.jpg", description: "Diving deep into the water – what can we see? What sea life will we discover?" },
  { id: 21, name: "Shouts and Whispers", size: "24\" x 72\"", year: "2012", age: "6", src: "/Gallery-photos/21.jpg", isWide: true, description: "When someone shouts is there really another message they would like to whisper to us? Composed of two 24\" x 36\" canvases painted together as one." },
  { id: 22, name: "Side by Side", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/22.jpg", description: "We’re standing side by side. Each one beside the other. It’s makes us feel strong when we are together." },
  { id: 23, name: "Sea Splash", size: "18\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/23.jpg", description: "The sea splashes against the sand, changing the sand each time the waves come. Bringing treasures from the sea and taking them back again." },
  { id: 24, name: "In The Sea", size: "18\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/24.jpg", description: "We wonder what goes on in the depths of the sea. We imagine it and the colors come through" },
  { id: 25, name: "Blushing", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/25.jpg", description: "My sister is blushing. She is trying to hide behind her long hair but I can see her and her pretty eyes shining at me!" },
  { id: 26, name: "Pretty Dreams", size: "24\" x 34\"", year: "2010", age: "5", src: "/Gallery-photos/26.jpg", description: "My friends, my family, they all come into my pretty dreams." },
  { id: 27, name: "Windblown", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/27.jpg", description: "The wind stirs up everything. It blows the dirt, the plants, the trees – even me!" },
  { id: 28, name: "Moving Colour", size: "36\" x 60\"", year: "2012", age: "6", src: "/Gallery-photos/28.jpg", description: "Can you see the color moving through this painting? Where is it going? Where are we going?" },
  { id: 29, name: "Untitled V", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/29.jpg" },
  { id: 30, name: "Galaxy Dreams", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/30.jpg", description: "What is out there – in space? Galaxies, stars, planets…far away and mysterious" },
  { id: 31, name: "Untitled VIII", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/31.jpg" }
];

const defaultDescription = "This abstract painting features vibrant colors and expressive textures. Created using premium pigments on canvas, the composition explores Shorya's early signature style of abstract expressionism.";

const getRoomPaintingStyles = (item, isZoomed = false) => {
  if (!item) return {};
  
  let widthInches = 36;
  let heightInches = 24;
  
  const sizeStr = item.size || '36" x 24"';
  
  if (sizeStr.includes("'")) {
    const parts = sizeStr.split(/[xX]/).map(p => parseFloat(p.trim().replace("'", "")));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      widthInches = parts[0] * 12;
      heightInches = parts[1] * 12;
    }
  } else {
    const parts = sizeStr.split(/[xX]/).map(p => parseFloat(p.trim().replace(/["\s]/g, "")));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      widthInches = parts[0];
      heightInches = parts[1];
    }
  }

  // Ensure horizontal orientation for wide/panoramic paintings
  if (item.isWide) {
    const tempWidth = Math.max(widthInches, heightInches);
    const tempHeight = Math.min(widthInches, heightInches);
    widthInches = tempWidth;
    heightInches = tempHeight;
  }
  
  const scaleFactor = isZoomed ? 6.2 : 3.8;
  const maxDimension = isZoomed ? 500 : 310; // Maximum dimension in pixels on the wall
  
  let widthPx = widthInches * scaleFactor;
  let heightPx = heightInches * scaleFactor;
  
  if (widthPx > maxDimension) {
    const ratio = maxDimension / widthPx;
    widthPx = maxDimension;
    heightPx = heightPx * ratio;
  }
  if (heightPx > maxDimension) {
    const ratio = maxDimension / heightPx;
    heightPx = maxDimension;
    widthPx = widthPx * ratio;
  }

  return {
    width: `${widthPx}px`,
    height: `${heightPx}px`
  };
};

const getRoomPaintingThumbStyles = (item) => {
  const mainStyles = getRoomPaintingStyles(item, false);
  if (!mainStyles.width || !mainStyles.height) return {};
  const wPx = parseFloat(mainStyles.width.replace('px', '')) / 8;
  const hPx = parseFloat(mainStyles.height.replace('px', '')) / 8;
  return {
    width: `${wPx}px`,
    height: `${hPx}px`
  };
};

const getArtworkAspectRatio = (item) => {
  if (!item) return '4 / 3';
  
  let widthInches = 36;
  let heightInches = 24;
  
  const sizeStr = item.size || '36" x 24"';
  
  if (sizeStr.includes("'")) {
    const parts = sizeStr.split(/[xX]/).map(p => parseFloat(p.trim().replace("'", "")));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      widthInches = parts[0] * 12;
      heightInches = parts[1] * 12;
    }
  } else {
    const parts = sizeStr.split(/[xX]/).map(p => parseFloat(p.trim().replace(/["\s]/g, "")));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      widthInches = parts[0];
      heightInches = parts[1];
    }
  }
  
  if (item.isWide) {
    const tempWidth = Math.max(widthInches, heightInches);
    const tempHeight = Math.min(widthInches, heightInches);
    widthInches = tempWidth;
    heightInches = tempHeight;
  }
  
  if (widthInches > 0 && heightInches > 0) {
    return `${widthInches} / ${heightInches}`;
  }
  return '4 / 3';
};

export default function AcrylicOnCanvas() {
  const [activeImage, setActiveImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [modalOrigin, setModalOrigin] = useState(null);
  const [magnifier, setMagnifier] = useState({ x: 0, y: 0, show: false });
  const [activeViewMode, setActiveViewMode] = useState('painting'); // 'painting' or 'mockup'
  const [isRoomZoomed, setIsRoomZoomed] = useState(false);

  const activeItem = galleryItems.find(item => item.src === activeImage);

  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const magnifierContainerRef = useRef(null);
  const modalRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const cursorScale = useRef(1);
  const isHovering = useRef(false);

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
      cursorPos.current.x = mousePos.current.x;
      cursorPos.current.y = mousePos.current.y;

      if (ringRef.current) {
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

  useEffect(() => {
    if (activeImage) {
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
  }, [activeImage]);

  const handleOpenModal = (e, src) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    setModalOrigin({ x: cardCenterX, y: cardCenterY });
    setActiveImage(src);
    setActiveViewMode('painting');
    setIsRoomZoomed(false);
    setIsClosing(false);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveImage(null);
      setIsClosing(false);
      setActiveViewMode('painting');
      setIsRoomZoomed(false);
    }, 350);
  };

  const handleInteractiveEnter = () => {
    cursorScale.current = 2.2;
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

    const displayedImage = activeImage || '';

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
              className={`shorya-gallery-thumbnail-card-frame ${item.isWide ? 'wide-frame' : ''}`}
              onClick={(e) => handleOpenModal(e, item.src)}
              onMouseEnter={handleInteractiveEnter}
              onMouseLeave={handleInteractiveLeave}
            >
              <div className="shorya-gallery-thumbnail-image-clipping-box">
                <img loading="lazy" src={item.src} alt={item.name} className="shorya-gallery-thumbnail-img-asset" />
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
            {activeItem && activeItem.isWide ? (
              <div className="shorya-lightbox-wide-container">
                <div 
                  className="shorya-lightbox-wide-image-section"
                  style={{ cursor: activeViewMode === 'painting' ? 'crosshair' : 'default' }}
                >
                  <div
                    className="shorya-lightbox-image-wrapper wide-wrapper"
                    ref={magnifierContainerRef}
                    onMouseMove={handleMagnifierMouseMove}
                    onMouseLeave={() => setMagnifier(prev => ({ ...prev, show: false }))}
                    style={{ 
                      position: 'relative',
                      aspectRatio: getArtworkAspectRatio(activeItem)
                    }}
                  >
                    {activeViewMode === 'painting' ? (
                      <>
                        <img loading="lazy" src={activeImage} alt="Enlarged Portfolio View" className="shorya-lightbox-large-img-asset wide-asset" />
                        {magnifier.show && magnifierContainerRef.current && (
                          <div className="artwork-magnifier-glass-lens" style={getMagnifierStyles()} />
                        )}
                      </>
                    ) : (
                      <div className={`shorya-dynamic-room-view ${isRoomZoomed ? 'zoomed' : ''}`}>
                        <img 
                          loading="lazy" 
                          src={activeImage} 
                          alt="Painting on Wall" 
                          className="shorya-room-painting-on-wall" 
                          style={getRoomPaintingStyles(activeItem, isRoomZoomed)} 
                        />
                        <button 
                          className="shorya-room-zoom-toggle"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsRoomZoomed(!isRoomZoomed);
                          }}
                          onMouseEnter={handleInteractiveEnter}
                          onMouseLeave={handleInteractiveLeave}
                          title={isRoomZoomed ? "Zoom Out" : "Zoom In"}
                        >
                          {isRoomZoomed ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                              <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                              <line x1="11" y1="8" x2="11" y2="16"></line>
                              <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                          )}
                          <span>{isRoomZoomed ? "Zoom Out" : "Zoom In"}</span>
                        </button>
                      </div>
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
                      className={`shorya-preview-thumb-item shorya-preview-room-thumb ${activeViewMode === 'mockup' ? 'active' : ''}`}
                      onClick={() => setActiveViewMode('mockup')}
                      onMouseEnter={handleInteractiveEnter}
                      onMouseLeave={handleInteractiveLeave}
                    >
                      <div className="shorya-room-thumb-preview">
                        <img 
                          loading="lazy" 
                          src={activeImage} 
                          alt="Room view preview" 
                          className="shorya-room-thumb-painting"
                          style={getRoomPaintingThumbStyles(activeItem)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="shorya-lightbox-wide-content-section">
                  <div className="shorya-lightbox-wide-header">
                    <h2 className="shorya-lightbox-artwork-title">{activeItem ? activeItem.name : "Acrylic on Canvas Series"}</h2>
                    <div className="shorya-lightbox-artwork-meta">
                      <span className="shorya-meta-badge">Original Work</span>
                      <span className="shorya-meta-badge">Abstract Art</span>
                      {activeItem && activeItem.age && (
                        <span className="shorya-meta-badge">Artist Age: {activeItem.age}</span>
                      )}
                    </div>
                  </div>
                  <hr className="shorya-lightbox-divider" />
                  <div className="shorya-lightbox-wide-details-row">
                    <div className="shorya-lightbox-wide-description-col">
                      <p className="shorya-lightbox-artwork-description">
                        {activeItem && activeItem.description 
                          ? activeItem.description 
                          : defaultDescription}
                      </p>
                    </div>
                    <div className="shorya-lightbox-wide-specs-col">
                      <div className="shorya-lightbox-technical-details" style={{ marginTop: 0 }}>
                        <div className="shorya-tech-row">
                          <strong>Medium:</strong> <span>{activeItem && activeItem.medium ? activeItem.medium : "Acrylic on Canvas"}</span>
                        </div>
                        <div className="shorya-tech-row">
                          <strong>Dimensions:</strong> <span>{activeItem ? activeItem.size : '36" x 24"'}</span>
                        </div>
                        <div className="shorya-tech-row">
                          <strong>Year:</strong> <span>{activeItem ? activeItem.year : "2010"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Original Split Layout */
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
                    style={{ 
                      position: 'relative',
                      aspectRatio: getArtworkAspectRatio(activeItem)
                    }}
                  >
                    {activeViewMode === 'painting' ? (
                      <>
                        <img loading="lazy" src={activeImage} alt="Enlarged Portfolio View" className="shorya-lightbox-large-img-asset" />
                        {magnifier.show && magnifierContainerRef.current && (
                          <div className="artwork-magnifier-glass-lens" style={getMagnifierStyles()} />
                        )}
                      </>
                    ) : (
                      <div className={`shorya-dynamic-room-view ${isRoomZoomed ? 'zoomed' : ''}`}>
                        <img 
                          loading="lazy" 
                          src={activeImage} 
                          alt="Painting on Wall" 
                          className="shorya-room-painting-on-wall" 
                          style={getRoomPaintingStyles(activeItem, isRoomZoomed)} 
                        />
                        <button 
                          className="shorya-room-zoom-toggle"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsRoomZoomed(!isRoomZoomed);
                          }}
                          onMouseEnter={handleInteractiveEnter}
                          onMouseLeave={handleInteractiveLeave}
                          title={isRoomZoomed ? "Zoom Out" : "Zoom In"}
                        >
                          {isRoomZoomed ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                              <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                              <line x1="11" y1="8" x2="11" y2="16"></line>
                              <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                          )}
                          <span>{isRoomZoomed ? "Zoom Out" : "Zoom In"}</span>
                        </button>
                      </div>
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
                      className={`shorya-preview-thumb-item shorya-preview-room-thumb ${activeViewMode === 'mockup' ? 'active' : ''}`}
                      onClick={() => setActiveViewMode('mockup')}
                      onMouseEnter={handleInteractiveEnter}
                      onMouseLeave={handleInteractiveLeave}
                    >
                      <div className="shorya-room-thumb-preview">
                        <img 
                          loading="lazy" 
                          src={activeImage} 
                          alt="Room view preview" 
                          className="shorya-room-thumb-painting"
                          style={getRoomPaintingThumbStyles(activeItem)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shorya-lightbox-right-content-side">
                  <h2 className="shorya-lightbox-artwork-title">{activeItem ? activeItem.name : "Acrylic on Canvas Series"}</h2>
                  <div className="shorya-lightbox-artwork-meta">
                    <span className="shorya-meta-badge">Original Work</span>
                    <span className="shorya-meta-badge">Abstract Art</span>
                    {activeItem && activeItem.age && (
                      <span className="shorya-meta-badge">Artist Age: {activeItem.age}</span>
                    )}
                  </div>
                  <hr className="shorya-lightbox-divider" />
                  <p className="shorya-lightbox-artwork-description">
                    {activeItem && activeItem.description 
                      ? activeItem.description 
                      : defaultDescription}
                  </p>
                  <div className="shorya-lightbox-technical-details">
                    <div className="shorya-tech-row">
                      <strong>Medium:</strong> <span>{activeItem && activeItem.medium ? activeItem.medium : "Acrylic on Canvas"}</span>
                    </div>
                    <div className="shorya-tech-row">
                      <strong>Dimensions:</strong> <span>{activeItem ? activeItem.size : '36" x 24"'}</span>
                    </div>
                    <div className="shorya-tech-row">
                      <strong>Year:</strong> <span>{activeItem ? activeItem.year : "2010"}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Custom Trailing Cursor Element */}
      <div ref={ringRef} className="custom-cursor-ring" />

    </div>
  );
}