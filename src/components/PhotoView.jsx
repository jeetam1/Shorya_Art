import React, { useState, useEffect, useRef, useCallback } from 'react';

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
  { id: 11, name: "Colours of Life I", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/11.jpg", description: "The colors of life surround us." },
  { id: 12, name: "Sun Shine", size: "18\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/12.jpg", description: "I love the sunshine!" },
  { id: 13, name: "Cloudy Dreams", size: "24\" x 72\"", year: "2012", age: "6", src: "/Gallery-photos/13.jpg", isWide: true, description: "The clouds pass by as I dream of ultramarine – my favorite color." },
  { id: 14, name: "Tiny Soldiers", size: "24\" x 18\"", year: "2010", age: "4", src: "/Gallery-photos/14.jpg", description: "Tiny soldiers marching across the painting…" },
  { id: 15, name: "Rainy Day", size: "18\" x 24\"", year: "2010", age: "3 1/2", src: "/Gallery-photos/15.jpg", description: "Puddles of water, rain on my window." },
  { id: 16, name: "Fall Days", size: "18\" x 24\"", year: "2009", age: "3 1/2", src: "/Gallery-photos/16.jpg", description: "The tall trees shed their leaves." },
  { id: 17, name: "Dawning Day", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/17.jpg", description: "The bright sun awakes us to a new day." },
  { id: 18, name: "In the deep II", size: "24\" x 36\"", year: "2011", age: "5", src: "/Gallery-photos/18.jpg", description: "I look at mountains and oceans." },
  { id: 19, name: "Meteor Shower", size: "24\" x 36\"", year: "2011", age: "5", src: "/Gallery-photos/19.jpg", description: "Spectacular color rains across the sky." },
  { id: 20, name: "Diving", size: "24\" x 36\"", year: "2011", age: "5", src: "/Gallery-photos/20.jpg", description: "Diving deep into the water." },
  { id: 21, name: "Shouts and Whispers", size: "24\" x 72\"", year: "2012", age: "6", src: "/Gallery-photos/21.jpg", isWide: true, description: "When someone shouts is there really another message?" },
  { id: 22, name: "Side by Side", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/22.jpg", description: "We're standing side by side." },
  { id: 23, name: "Sea Splash", size: "18\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/23.jpg", description: "The sea splashes against the sand." },
  { id: 24, name: "In The Sea", size: "18\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/24.jpg", description: "We wonder what goes on in the depths." },
  { id: 25, name: "Blushing", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/25.jpg", description: "My sister is blushing." },
  { id: 26, name: "Pretty Dreams", size: "24\" x 34\"", year: "2010", age: "5", src: "/Gallery-photos/26.jpg", description: "My friends, my family, they all come into my pretty dreams." },
  { id: 27, name: "Windblown", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/27.jpg", description: "The wind stirs up everything." },
  { id: 28, name: "Moving Colour", size: "36\" x 60\"", year: "2012", age: "6", src: "/Gallery-photos/28.jpg", isWide: true, description: "Can you see the color moving through this painting?" },
  { id: 29, name: "Untitled V", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/29.jpg" },
  { id: 30, name: "Galaxy Dreams", size: "36\" x 24\"", year: "2010", age: "4", src: "/Gallery-photos/30.jpg", description: "What is out there – in space?" },
  { id: 31, name: "Untitled VIII", size: "24\" x 18\"", year: "2020", age: "6", src: "/Gallery-photos/31.jpg" }
];

const defaultDescription = "This abstract painting features vibrant colors and expressive textures. Created using premium pigments on canvas.";

const getPaintingDimensions = (item) => {
  let w = 24, h = 18;
  const sizeStr = item.size || '24" x 18"';
  const parts = sizeStr.split(/[xX]/).map(p => parseFloat(p.trim().replace(/["\s]/g, "")));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    w = parts[0];
    h = parts[1];
  }
  if (item.isWide) {
    const tempW = Math.max(w, h);
    const tempH = Math.min(w, h);
    w = tempW; h = tempH;
  }
  const scale = 7.5;
  const maxW = item.isWide ? 520 : 280;
  const maxH = 300;
  let pw = w * scale;
  let ph = h * scale;
  if (pw > maxW) { const r = maxW / pw; pw = maxW; ph *= r; }
  if (ph > maxH) { const r = maxH / ph; ph = maxH; pw *= r; }
  return { width: pw, height: ph };
};

export default function PhotoView() {
  const corridorRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeImage, setActiveImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const autoScrollRef = useRef(null);
  const modalRef = useRef(null);

  const activeItem = galleryItems.find(item => item.src === activeImage);

  // Fade out welcome overlay
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Horizontal scroll on mouse wheel
  const handleWheel = useCallback((e) => {
    if (!corridorRef.current) return;
    if (activeImage) return;
    e.preventDefault();
    setIsAutoScrolling(false); // Stop auto-scroll on manual interaction
    corridorRef.current.scrollLeft += e.deltaY * 2.5;
  }, [activeImage]);

  useEffect(() => {
    const el = corridorRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // Auto-scroll animation loop
  useEffect(() => {
    if (!isAutoScrolling || !corridorRef.current) {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
      return;
    }
    const speed = 2.5; // pixels per frame
    const step = () => {
      if (!corridorRef.current) return;
      const el = corridorRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 1) {
        setIsAutoScrolling(false); // Stop at end
        return;
      }
      el.scrollLeft += speed;
      autoScrollRef.current = requestAnimationFrame(step);
    };
    autoScrollRef.current = requestAnimationFrame(step);
    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    };
  }, [isAutoScrolling]);

  // Update scroll progress bar
  const handleScroll = () => {
    if (!corridorRef.current) return;
    const el = corridorRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollProgress(maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0);
  };

  // Arrow navigation
  const scrollBy = (direction) => {
    if (!corridorRef.current) return;
    setIsAutoScrolling(false); // Stop auto-scroll on manual arrow click
    corridorRef.current.scrollBy({ left: direction * 500, behavior: 'smooth' });
  };

  // Lightbox open/close
  const handleOpenModal = (src) => {
    setActiveImage(src);
    setIsClosing(false);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveImage(null);
      setIsClosing(false);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 350);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImage) {
        if (e.key === 'Escape') handleCloseModal();
        return;
      }
      if (e.key === 'ArrowRight') scrollBy(1);
      if (e.key === 'ArrowLeft') scrollBy(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  return (
    <div className="pv-exhibition-root">
      {/* Welcome Overlay */}
      <div className={`pv-welcome-overlay ${showWelcome ? 'visible' : 'hidden'}`}>
        <div className="pv-welcome-content">
          <div className="pv-welcome-line"></div>
          <h1 className="pv-welcome-title">The Exhibition</h1>
          <p className="pv-welcome-subtitle">Shorya Mahanot — Abstract Expressionism</p>
          <div className="pv-welcome-line"></div>
        </div>
      </div>

      {/* Left Arrow */}
      <button className="pv-scroll-arrow pv-arrow-left" onClick={() => scrollBy(-1)} aria-label="Scroll left">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Right Arrow */}
      <button className="pv-scroll-arrow pv-arrow-right" onClick={() => scrollBy(1)} aria-label="Scroll right">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Auto-scroll Button */}
      <button
        className={`pv-auto-scroll-btn ${isAutoScrolling ? 'active' : ''}`}
        onClick={() => setIsAutoScrolling(prev => !prev)}
        aria-label={isAutoScrolling ? 'Pause auto-scroll' : 'Start auto-scroll'}
      >
        {isAutoScrolling ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"></rect>
            <rect x="14" y="4" width="4" height="16" rx="1"></rect>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
        <span className="pv-auto-scroll-label">{isAutoScrolling ? 'Pause' : 'Auto Tour'}</span>
      </button>

      {/* Gallery Corridor */}
      <div
        className="pv-gallery-corridor"
        ref={corridorRef}
        onScroll={handleScroll}
      >
        {/* Entrance pillar */}
        <div className="pv-entrance-section">
          <div className="pv-entrance-plaque">
            <span className="pv-plaque-overline">Gallery Exhibition</span>
            <h2 className="pv-plaque-title">Acrylic on Canvas</h2>
            <span className="pv-plaque-artist">by Shorya Mahanot</span>
            <div className="pv-plaque-divider"></div>
            <span className="pv-plaque-scroll-hint">Scroll to explore →</span>
          </div>
        </div>

        {/* Wall sections */}
        {galleryItems.map((item, index) => {
          const dims = getPaintingDimensions(item);
          const isHovered = hoveredId === item.id;
          const sectionWidth = item.isWide ? 620 : 400;

          return (
            <div
              key={item.id}
              className={`pv-wall-section ${isHovered ? 'hovered' : ''}`}
              style={{
                minWidth: `${sectionWidth}px`,
                animationDelay: `${0.8 + index * 0.08}s`
              }}
            >
              {/* Ceiling */}
              <div className="pv-ceiling">
                <div className="pv-ceiling-trim"></div>
              </div>

              {/* Spotlight cone */}
              <div className={`pv-spotlight ${isHovered ? 'bright' : ''}`}></div>

              {/* Wall surface */}
              <div className="pv-wall-surface">
                {/* Framed painting */}
                <div
                  className={`pv-frame ${isHovered ? 'hovered' : ''}`}
                  style={{ width: `${dims.width + 40}px`, height: `${dims.height + 40}px` }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleOpenModal(item.src)}
                >
                  <div className="pv-mat">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="pv-painting-img"
                      loading="lazy"
                      style={{ width: `${dims.width}px`, height: `${dims.height}px` }}
                    />
                  </div>
                </div>

                {/* Nameplate */}
                <div className={`pv-nameplate ${isHovered ? 'visible' : ''}`}>
                  <span className="pv-nameplate-title">{item.name}</span>
                  <span className="pv-nameplate-info">{item.year} · {item.size}</span>
                </div>
              </div>

              {/* Floor */}
              <div className="pv-floor">
                {/* Floor reflection */}
                <div className="pv-floor-reflection" style={{ width: `${dims.width + 40}px` }}>
                  <img
                    src={item.src}
                    alt=""
                    className="pv-reflection-img"
                    loading="lazy"
                    style={{ width: `${dims.width}px`, height: `${dims.height * 0.4}px` }}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* Exit section */}
        <div className="pv-exit-section">
          <div className="pv-exit-text">
            <span>Thank you for visiting</span>
            <span className="pv-exit-artist">Shorya Mahanot</span>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="pv-scroll-indicator-track">
        <div className="pv-scroll-indicator-fill" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Lightbox Modal */}
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
            <button className="shorya-lightbox-close-trigger-btn" onClick={handleCloseModal}>&times;</button>
            <div className="shorya-lightbox-split-container">
              <div
                className="shorya-lightbox-left-image-side"
                style={{ display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center', alignItems: 'center' }}
              >
                <div
                  className="shorya-lightbox-image-wrapper"
                  style={{
                    position: 'relative',
                    aspectRatio: activeItem ? (() => {
                      let w = 24, h = 18;
                      const parts = (activeItem.size || '24" x 18"').split(/[xX]/).map(p => parseFloat(p.trim().replace(/["\s]/g, "")));
                      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) { w = parts[0]; h = parts[1]; }
                      if (activeItem.isWide) { const t = Math.max(w,h); h = Math.min(w,h); w = t; }
                      return `${w} / ${h}`;
                    })() : '4 / 3'
                  }}
                >
                  <img src={activeImage} alt="Enlarged view" className="shorya-lightbox-large-img-asset" />
                </div>
              </div>
              <div className="shorya-lightbox-right-content-side">
                <h2 className="shorya-lightbox-artwork-title">{activeItem ? activeItem.name : "Artwork"}</h2>
                <div className="shorya-lightbox-artwork-meta">
                  <span className="shorya-meta-badge">Original Work</span>
                  <span className="shorya-meta-badge">Abstract Art</span>
                  {activeItem && activeItem.age && (
                    <span className="shorya-meta-badge">Artist Age: {activeItem.age}</span>
                  )}
                </div>
                <hr className="shorya-lightbox-divider" />
                <p className="shorya-lightbox-artwork-description">
                  {activeItem && activeItem.description ? activeItem.description : defaultDescription}
                </p>
                <div className="shorya-lightbox-technical-details">
                  <div className="shorya-tech-row">
                    <strong>Medium:</strong> <span>Acrylic on Canvas</span>
                  </div>
                  <div className="shorya-tech-row">
                    <strong>Dimensions:</strong> <span>{activeItem ? activeItem.size : '24" x 18"'}</span>
                  </div>
                  <div className="shorya-tech-row">
                    <strong>Year:</strong> <span>{activeItem ? activeItem.year : "2020"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
