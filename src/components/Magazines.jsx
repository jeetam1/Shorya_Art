import React, { useState, useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

// Optimized Custom Page Component with Native Lazy Loading
const FlipBookPage = React.forwardRef((props, ref) => {
  return (
    <div className="shorya-flip-page" ref={ref} style={{ overflow: 'hidden', backgroundColor: '#ffffff' }}>
      {props.image === "blank" ? (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#ffffff' }} />
      ) : (
        <img 
          src={props.image} 
          alt="Magazine Page" 
          loading="lazy" 
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} 
        />
      )}
    </div>
  );
});

export default function Magazines() {
  const [activeModal, setActiveModal] = useState({ type: null, src: null, pdfUrl: null, jumpFromIndex: null, jumpToIndex: null, pages: [] });
  const [isMobile, setIsMobile] = useState(false);
  
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0); 
  
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onPageFlip = (e) => {
    setCurrentPage(e.data); 
    const flipSound = new Audio('/page-flip.mp3');
    flipSound.volume = 0.3;
    flipSound.play().catch(err => console.log('Audio playback prevented:', err));
  };

  const handlePrevPage = () => {
    if (flipBookRef.current) flipBookRef.current.pageFlip().flipPrev();
  };

  const handleNextPage = () => {
    if (flipBookRef.current) {
      if (activeModal.jumpFromIndex !== undefined && currentPage === activeModal.jumpFromIndex) {
        flipBookRef.current.pageFlip().flip(activeModal.jumpToIndex);
      } else {
        flipBookRef.current.pageFlip().flipNext();
      }
    }
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => {
    setZoom(prev => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) setPan({ x: 0, y: 0 }); 
      return newZoom;
    });
  }; 

  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || zoom <= 1 || e.buttons !== 1) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Keeps the active page perfectly centered
  const getCenterShift = () => {
    if (isMobile) return '0%'; // Never shift on mobile, keep it dead center
    if (!activeModal.pages || activeModal.pages.length === 0) return '0%';
    if (currentPage === 0) return '-25%'; 
    if (currentPage >= activeModal.pages.length - 1) return '25%'; 
    return '0%'; 
  };

  // =======================================================================
  // DYNAMIC MAGAZINE DATA
  // =======================================================================
  const magazinesData = [
    {
      title: "INDUSTRY STATEN ISLAND",
      coverSrc: "/Industry/Industry-Magazine_page-0001.jpg",
      isFlipbook: true, 
      pdfSrc: "/Industry/Industry-Magazine.pdf", 
      flipbookPages: [
        ...Array.from({ length: 3 }, (_, i) => `/Industry/Industry-Magazine_page-${String(i + 1).padStart(4, '0')}.jpg`),
        "blank"
      ],
      text: "With every painting, Shorya's signature style as an abstract expressionist artist evolves. Shorya works in acrylics in a heavy impasto technique that has been compared to Jackson Pollock's \"drip painting\" or \"action painting\"."
    },
    {
      title: "THE WORLD OF SOCIETY",
      coverSrc: "/551.jpg", 
      isFlipbook: false, 
      pdfSrc: null,
      text: "Dummy details added here temporarily. This magazine will be updated with the full interactive 3D flipbook and PDF download once the assets are processed and ready."
    },
    {
      title: "Reader's digest",
      coverSrc: "/Readers_digest/rd_page-0001.jpg",
      isFlipbook: true,
      pdfSrc: "/Readers_digest/rd.pdf",
      jumpFromIndex: 3, 
      jumpToIndex: 99,  
      flipbookPages: [
        ...Array.from({ length: 166 }, (_, i) => `/Readers_digest/rd_page-${String(i + 1).padStart(4, '0')}.jpg`),
        "blank" 
      ],
      text: "His family had never seen an art like this before — there were shades of Jackson Pollock — and his father, Aditya, was beyond ecstatic. One of the world's youngest signature style abstract artist, with several solo exhibitions under his belt, he has participated at the artexpo in New York and Microsoft's Future Decoded in Mumbai."
    },
    {
      title: "imagine",
      coverSrc: "/Imagine/i_page-0001.jpg",
      isFlipbook: true,
      pdfSrc: "/Imagine/i.pdf",
      flipbookPages: [
        ...Array.from({ length: 40 }, (_, i) => `/Imagine/i_page-${String(i + 1).padStart(4, '0')}.jpg`),
        "blank"
      ],
      text: "\"Don't be Afraid.\" Shorya has just one thing to say... 'if you have the creativity, then this world is a canvas to your imagination.'"
    },
    {
      title: "child",
      coverSrc: "/child_Magazines/Child-Magazine_page-0001.jpg",
      isFlipbook: true,
      pdfSrc: "/child_Magazines/Child-Magazine.pdf",
      flipbookPages: [
        ...Array.from({ length: 9 }, (_, i) => `/child_Magazines/Child-Magazine_page-${String(i + 1).padStart(4, '0')}.jpg`),
        "blank" 
      ],
      text: "Shorya discovered his penchant for painting when he was just 3 years old. Since then, he has created around 200 paintings and 21 of them have already been sold."
    },
    {
      title: "art expo 2013",
      coverSrc: "/Art_Expo/ArtExpo-2013_page-0001.jpg",
      isFlipbook: true,
      pdfSrc: "/Art_Expo/ArtExpo-2013.pdf",
      flipbookPages: [
        ...Array.from({ length: 5 }, (_, i) => `/Art_Expo/ArtExpo-2013_page-${String(i + 1).padStart(4, '0')}.jpg`),
        "blank"
      ],
      text: "Pollock-like paint smatterings and bold, geometric forms cover the canvases of India's youngest abstract artist. Shorya's painting exudes a visual sophistication and balance."
    },
    {
      title: "Showtime (Hindi)",
      coverSrc: "/556.jpg",
      isFlipbook: false, 
      text: "शौर्य जब मात्र चार साल के थे तो मुम्बई के होटल ताज के चैम्बर्स टेरेस में उनकी 24 कलाकृतियाँ प्रदर्शित की गई थीं।"
    }
  ];

  return (
    <div className="shorya-magazines-view-root">
      
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')" }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Magazines</h1>
        </div>
      </div>

      <div className="shorya-magazines-list-container">
        {magazinesData.map((item, index) => {
          const isLastItem = index === magazinesData.length - 1;

          return (
            <div key={index} className="shorya-magazine-row-card">
              <div className={`shorya-magazine-split-layout ${isLastItem ? 'shorya-last-row-layout' : ''}`}>
                
                <div 
                  className="shorya-magazine-cover-box" 
                  style={{ cursor: 'pointer' }} 
                  onClick={() => {
                    if (item.isFlipbook) {
                      setActiveModal({ 
                        type: 'flipbook', 
                        pages: item.flipbookPages, 
                        pdfUrl: item.pdfSrc,
                        jumpFromIndex: item.jumpFromIndex, 
                        jumpToIndex: item.jumpToIndex
                      });
                      setZoom(1); 
                      setPan({ x: 0, y: 0 }); 
                      setCurrentPage(0); 
                    } else {
                      setActiveModal({ type: 'image', src: item.coverSrc, pages: [] });
                    }
                  }}
                >
                  <div className="shorya-magazine-image-frame" style={{ cursor: 'pointer' }}>
                    <img src={item.coverSrc} alt={`${item.title} cover`} loading="lazy" className="shorya-magazine-cover-img" style={{ cursor: 'pointer' }} />
                  </div>
                </div>

                <div className="shorya-magazine-text-content-box">
                  <h3 className="shorya-magazine-row-title" style={{ cursor: 'pointer' }} onClick={() => {
                    if (item.isFlipbook) {
                      setActiveModal({ type: 'flipbook', pages: item.flipbookPages, pdfUrl: item.pdfSrc, jumpFromIndex: item.jumpFromIndex, jumpToIndex: item.jumpToIndex });
                      setZoom(1); setPan({ x: 0, y: 0 }); setCurrentPage(0);
                    } else {
                      setActiveModal({ type: 'image', src: item.coverSrc, pages: [] });
                    }
                  }}>{item.title}</h3>
                  <p className="shorya-magazine-paragraph-text-value">{item.text}</p>
                </div>

              </div>
              {index < magazinesData.length - 1 && <hr className="shorya-magazine-dashed-divider" />}
            </div>
          );
        })}
      </div>

      {activeModal.type && (
        <div className="shorya-flipbook-modal-overlay" onClick={() => setActiveModal({ type: null, src: null, pdfUrl: null, jumpFromIndex: null, jumpToIndex: null, pages: [] })}>
          
          <button className="shorya-flipbook-close-btn" onClick={() => setActiveModal({ type: null, src: null, pdfUrl: null, jumpFromIndex: null, jumpToIndex: null, pages: [] })}>✖</button>

          {activeModal.type === 'flipbook' && !isMobile && (
            <>
              <button className="shorya-side-arrow-left" onClick={(e) => { e.stopPropagation(); handlePrevPage(); }}>&#10094;</button>
              <button className="shorya-side-arrow-right" onClick={(e) => { e.stopPropagation(); handleNextPage(); }}>&#10095;</button>
            </>
          )}

          <div 
            className="shorya-flipbook-viewer-area" 
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            
            {activeModal.type === 'flipbook' ? (
              <div 
                className="shorya-zoom-pan-wrapper-layer"
                style={{ 
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, 
                  transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
                  transformOrigin: 'center center',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div 
                  className="shorya-flipbook-container"
                  style={{ 
                    pointerEvents: zoom > 1 ? 'none' : 'auto',
                    transform: `translateX(${getCenterShift()})`,
                    transition: 'transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)' 
                  }}
                >
                  {/* DYNAMIC SIZING: Automatically scales down for mobile and ensures touch swiping works! */}
                  <HTMLFlipBook 
                    width={isMobile ? 320 : 400} 
                    height={isMobile ? 450 : 550} 
                    size="stretch"
                    minWidth={isMobile ? 280 : 315}
                    maxWidth={isMobile ? 380 : 500} 
                    minHeight={isMobile ? 400 : 400}
                    maxHeight={700}
                    maxShadowOpacity={0.5}
                    showCover={true} 
                    usePortrait={isMobile} // CRITICAL: Flips 1 page at a time on mobile to stay readable
                    useMouseEvents={true}  // CRITICAL: Allows user to swipe their finger to flip pages
                    mobileScrollSupport={true}
                    onFlip={onPageFlip} 
                    className="shorya-interactive-flipbook"
                    ref={flipBookRef}
                  >
                    {(activeModal.pages || []).map((pageSrc, idx) => (
                      <FlipBookPage key={idx} image={pageSrc} />
                    ))}
                  </HTMLFlipBook>
                </div>
              </div>
            ) : (
              <img 
                src={activeModal.src} 
                alt="Enlarged magazine" 
                className="shorya-static-modal-img"
                style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", border: "3px solid #ffffff", boxShadow: "0 10px 40px rgba(0,0,0,0.6)" }} 
              />
            )}
          </div>

          {activeModal.type === 'flipbook' && (
            <div className="shorya-flipbook-control-bar" onClick={(e) => e.stopPropagation()}>
              <div className="shorya-flipbook-zoom-controls">
                <button onClick={handleZoomOut} title="Zoom Out">➖</button>
                <span style={{ fontSize: isMobile ? '12px' : '14px' }}>Zoom</span>
                <button onClick={handleZoomIn} title="Zoom In">➕</button>
              </div>

              <div className="shorya-page-counter-display" style={{ fontSize: isMobile ? '12px' : '14px' }}>
                Page {currentPage + 1} of {activeModal.pages ? activeModal.pages.length : 0}
              </div>
              
              {activeModal.pdfUrl && (
                <a 
                  href={activeModal.pdfUrl} 
                  download 
                  className="shorya-flipbook-download-link"
                  style={{ fontSize: isMobile ? '12px' : '14px' }}
                >
                  ⬇ PDF
                </a>
              )}
            </div>
          )}

        </div>
      )}
    </div>
  );
}