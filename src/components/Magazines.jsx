import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

// 1. Create a custom Page component required by react-pageflip
const FlipBookPage = React.forwardRef((props, ref) => {
  return (
    <div className="shorya-flip-page" ref={ref}>
      <img 
        src={props.image} 
        alt="Magazine Page" 
        style={{ width: '100%', height: '100%', objectFit: 'fill', backgroundColor: '#ffffff' }} 
      />
    </div>
  );
});

export default function Magazines() {
  const [activeModal, setActiveModal] = useState({ type: null, src: null, pdfUrl: null });
  const flipBookRef = useRef(null);

  // Exact data sequence
  const magazinesData = [
    {
      title: "INDUSTRY STATEN ISLAND",
      coverSrc: "/550.jpg",
      isFlipbook: true, 
      pdfSrc: "/Industry-Magazine.pdf", // Ensure you have this file in your public folder for the download button
      
      // UPDATED: Using your new exact file names
      flipbookPages: [
        "/Industry-Magazine_page-0001.jpg", 
        "/Industry-Magazine_page-0002.jpg", 
        "/Industry-Magazine_page-0003.jpg", 
        "/Industry-Magazine_page-0004.jpg" // Added the 4th to keep the book even, remove if you only have 3!
      ],
      
      text: "With every painting, Shorya's signature style as an abstract expressionist artist evolves. Shorya works in acrylics in a heavy impasto technique that has been compared to Jackson Pollock's \"drip painting\" or \"action painting\". Like Pollock, Shorya spreads his canvas on the floor and begins composing with masterful strokes in multiple layers and deliberate consideration of color composition and the symmetry between his brushstrokes, dripping and pouring. With the amazing skill of a conductor leading an orchestra, as well as the joyfulness of his youth, a magical world is revealed."
    },
    {
      title: "THE WORLD OF SOCIETY",
      coverSrc: "/551.jpg",
      text: "\"We showcased his works before some of the accomplished artists and authorities in this field and they shared our pleasure and astonishment over his talent and potential.\" Explained Pushpa Mahanot, Shorya's mother. 'By god's grace, the medium itself reached out to him and feathers continued to get added in his cap.'"
    },
    {
      title: "Reader's digest",
      coverSrc: "/552.jpg",
      text: "His family had never seen an art like this before — there were shades of Jackson Pollock — and his father, Aditya, was beyond ecstatic. One of the world's youngest signature style abstract artist, with several solo exhibitions under his belt, he has participated at the artexpo in New York and Microsoft's Future Decoded in Mumbai, selling painting worth $40,000 in all. Now 12, Shorya also has honour to do a live demonstration for the late cartoonist R.K. Laxman at the age of five. Shorya gushed, \"He blessed me and encouraged me to paint.\""
    },
    {
      title: "imagine",
      coverSrc: "/553.jpg",
      text: "\"Don't be Afraid.\" Shorya has just one thing to say... 'if you have the creativity, then this world is a canvas to your imagination.' Rightly so, Young art master Shorya has transformed his imagination into world-class masterpieces."
    },
    {
      title: "child",
      coverSrc: "/554.jpg",
      text: "\"We discovered a pattern in his paintings. It was surprising to see a child of his age creating a signature style and we don't want any external influence on his works\", says his proud father Aditya Mahanot. Shorya discovered his penchant for painting when he was just 3 years old. Since then, he has created around 200 paintings and 21 of them have already been sold."
    },
    {
      title: "art expo 2013",
      coverSrc: "/555.png",
      text: "Pollock-like paint smatterings and bold, geometric forms cover the canvases of India's youngest abstract artist. Shorya's painting exudes a visual sophistication and balance that belies his years. What's more, they seem to hold some degree of emotional complexity – or at least, a powerful juxtaposition of innocence and confidence."
    },
    {
      title: "Showtime (Hindi)",
      heading: "..और सपने कर दिखाया", 
      coverSrc: "/556.jpg",
      text: "शौर्य जब मात्र चार साल के थे तो मुम्बई के होटल ताज के चैम्बर्स टेरेस में उनकी 24 कलाकृतियाँ प्रदर्शित की गई थीं। इन पेन्टिंग्स को जो भी देखता, विश्वास नहीं कर पाता की वे एक छोटे से बच्चे ने बनाई हैं। विश्वास दिलाने के लिए पिता को वीडियो दिखाना पड़ता। दुनिया का यह पहला बच्चा है, जिसे न्यूयार्क की सुप्रसिद्ध आर्ट गैलरी वार्ड-नासे में पूरे एक साल के लिए एक वाल दी गयी, जहाँ शौर्य की चित्रकला हर कला प्रेमी का ध्यान खींचती है।"
    }
  ];

  return (
    <div className="shorya-magazines-view-root">
      
      {/* HEADER BANNER STRIP */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')" }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Magazines</h1>
        </div>
      </div>

      {/* TIMELINE COLUMN CONTAINER */}
      <div className="shorya-magazines-list-container">
        {magazinesData.map((item, index) => {
          const isLastItem = index === magazinesData.length - 1;

          return (
            <div key={index} className="shorya-magazine-row-card">
              <div className={`shorya-magazine-split-layout ${isLastItem ? 'shorya-last-row-layout' : ''}`}>
                
                {/* Left Column: Interactive Magazine Cover */}
                <div 
                  className="shorya-magazine-cover-box" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (item.isFlipbook) {
                      setActiveModal({ type: 'flipbook', pages: item.flipbookPages, pdfUrl: item.pdfSrc });
                    } else {
                      setActiveModal({ type: 'image', src: item.coverSrc });
                    }
                  }}
                >
                  <div className="shorya-magazine-image-frame">
                    <img src={item.coverSrc} alt={`${item.title} cover snapshot`} className="shorya-magazine-cover-img" />
                  </div>
                </div>

                {/* Right Column: Narrative Description Text Block */}
                <div className="shorya-magazine-text-content-box">
                  {item.heading && (
                    <div className="shorya-magazine-custom-badge-heading">
                      {item.heading}
                    </div>
                  )}
                  <p className="shorya-magazine-paragraph-text-value">{item.text}</p>
                </div>

              </div>

              {/* Separator Line Partition */}
              {index < magazinesData.length - 1 && <hr className="shorya-magazine-dashed-divider" />}

            </div>
          );
        })}
      </div>

      {/* DYNAMIC POPUP LIGHTBOX SYSTEM */}
      {activeModal.type && (
        <div className="shorya-flipbook-modal-overlay" onClick={() => setActiveModal({ type: null })}>
          
          {/* Close Button */}
          <button 
            className="shorya-flipbook-close-btn"
            onClick={() => setActiveModal({ type: null })}
          >
            ✖
          </button>

          {/* Interactive Container - stops click from closing modal */}
          <div className="shorya-flipbook-viewer-area" onClick={(e) => e.stopPropagation()}>
            
            {activeModal.type === 'flipbook' ? (
              <div className="shorya-flipbook-container">
                {/* The 3D Flipbook Component */}
                <HTMLFlipBook 
                  width={400} 
                  height={550} 
                  size="stretch"
                  minWidth={315}
                  maxWidth={500}
                  minHeight={400}
                  maxHeight={700}
                  maxShadowOpacity={0.5}
                  showCover={true} 
                  usePortrait={false} 
                  mobileScrollSupport={true}
                  className="shorya-interactive-flipbook"
                  ref={flipBookRef}
                >
                  {activeModal.pages.map((pageSrc, idx) => (
                    <FlipBookPage key={idx} image={pageSrc} />
                  ))}
                </HTMLFlipBook>

                {/* Bottom Control Bar with Download Button */}
                <div className="shorya-flipbook-control-bar">
                  <button onClick={() => flipBookRef.current.pageFlip().flipPrev()}>◀ Prev</button>
                  <span>3D FlipBook Viewer</span>
                  <button onClick={() => flipBookRef.current.pageFlip().flipNext()}>Next ▶</button>
                  
                  {/* Download PDF Button */}
                  {activeModal.pdfUrl && (
                    <a 
                      href={activeModal.pdfUrl} 
                      download 
                      className="shorya-flipbook-download-link"
                    >
                      ⬇ Download
                    </a>
                  )}
                </div>
              </div>
            ) : (
              /* Standard Image Viewer fallback for other magazines */
              <img 
                src={activeModal.src} 
                alt="Enlarged magazine high res page asset" 
                style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", border: "3px solid #ffffff", boxShadow: "0 10px 40px rgba(0,0,0,0.6)" }} 
              />
            )}
          </div>
        </div>
      )}

      {/* FOOTER SIGNATURE STRIP */}
      <footer className="shorya-view-footer-signature-line">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>
    </div>
  );
}