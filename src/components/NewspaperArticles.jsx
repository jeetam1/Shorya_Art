import React, { useState, useRef } from 'react';

export default function NewspaperArticles() {
  const [modalImage, setModalImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  
  // States for drag-to-pan functionality
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scrollStart, setScrollStart] = useState({ left: 0, top: 0 });
  const scrollContainerRef = useRef(null);

  const handleCloseModal = () => {
    setModalImage(null);
    setIsZoomed(false);
  };

  const handleImageClick = (e) => {
    // Prevent zooming if the user was just dragging to read the text
    if (isDragging) {
      setIsDragging(false);
      return;
    }
    setIsZoomed(!isZoomed);
  };

  const handleMouseDown = (e) => {
    if (!isZoomed) return;
    setDragStart({ x: e.clientX, y: e.clientY });
    setScrollStart({
      left: scrollContainerRef.current.scrollLeft,
      top: scrollContainerRef.current.scrollTop
    });
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isZoomed || e.buttons !== 1) return; // Only trigger if left mouse button is held down
    
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    
    // If the mouse moves more than 5 pixels, register it as a drag rather than a click
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      setIsDragging(true);
    }

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollStart.left - dx;
      scrollContainerRef.current.scrollTop = scrollStart.top - dy;
    }
  };

  // Structural array setup handling your multi-year newspaper data mapping
  const articlesData = [
    {
      brand: "the guardian",
      brandSrc: "/750.jpg",
      clippingSrc: "/751.jpg",
      text: "He swept the bristles in wide strokes over the canvas. Each movement appeared deliberate but exaggerated as if his paintings were an unruly orchestra under his conduction."
    },
    {
      brand: "THE TIMES OF INDIA",
      brandSrc: "/753.jpeg",
      clippingSrc: "/754.jpg",
      text: "Shorya Mahanot, an abstract artist whose paintings have been exhibited at RK Laxman's house and at the Taj Mahal Hotel, Mumbai has become the talk of the town. In fact, Cartoonist RK Laxman welcomed Shorya to his residence and was left speechless by his works."
    },
    {
      brand: "THE TIMES OF INDIA",
      brandSrc: "/755.jpeg",
      clippingSrc: "/756.jpg",
      text: "Renowned five-year-old abstract painting master Shorya Mahanot would showcase his works at Kalidas Academy, Ujjain. Shorya has already painted 150 canvases ever since his family realized his talent two years ago."
    },
    {
      brand: "ht café",
      brandSrc: "/757.jpeg",
      clippingSrc: "/758.jpg",
      text: "Shorya has painted over a hundred abstracts since his first started, and he is among one of the few child artists in the world who have had their works exhibited. He is also one of the lucky few to have been allotted a privileged space, the hotel's Chambers Terrace which hosted Obama's speech in Mumbai and the World Cup Celebration, for his show in the city."
    },
    {
      brand: "hindustantimes",
      brandSrc: "/759.png",
      clippingSrc: "/760.jpg",
      text: "The most significant aspect of Shorya's paintings is they have a signature unique to Shorya that all great artists across the globe uphold. Each of his painting has a style of his own and yet subtly they are all related to each other. But he is simply oblivious of the magic that his brush creates."
    },
    {
      brand: "DNA AFTER Hrs",
      brandSrc: "/761.jpeg",
      clippingSrc: "/762.jpg",
      text: "He's no different from a regular, naughty four-year-old kid. But one look at his canvas and you know that there's more to the persona of Shorya Mahanot. One of the youngest abstract artists... Shorya's brushwork has depth and there's beautiful usage of colours."
    },
    {
      brand: "DNA",
      brandSrc: "/763.jpeg",
      clippingSrc: "/764.jpg",
      text: "Six-year-old prodigy Shorya Mahanot, who features among the world's top three child artists, was in the city to receive blessings from Pune's very own Common Man, RK Laxman. 'My father wanted to meet Shorya when I told him about the child,' He said that he would like to see the child paint,' Said Usha, Daughter of RK Laxman. Laxman blessed the child and gifted him an autographed paintbrush, while his wife Kamala Laxman also presented a small gift to the child."
    },
    {
      brand: "MID DAY",
      brandSrc: "/765.jpg",
      clippingSrc: "/766.jpg",
      text: "Child prodigy Shorya Mahanot from Neemuch of Madhya Pradesh receives blessings from the legendary cartoonist RK Laxman."
    },
    {
      brand: "ROBINAGE",
      brandSrc: "/767.jpg",
      clippingSrc: "/768.jpg",
      text: "Starting from the tender age of four, Shorya has been painting willingly and has created over hundred abstract paintings till date. His works have been appreciated by reputed artists and collectors and Shorya is among few child artists to have exhibited their work across the globe."
    },
    {
      brand: "Afternoon DESPATCH & COURIER",
      brandSrc: "/769.jpg",
      clippingSrc: "/770.jpg",
      text: "It is very intriguing in the way he uses color and form. Shows he has an innate understanding of composition which is pure and unsullied by experience from the real world."
    },
    {
      brand: "hindustantimes",
      brandSrc: "/771.png",
      clippingSrc: "/772.jpg",
      text: "Shorya Mahanot from Madhya Pradesh displays his works at city hotel, The Taj Mahal Palace. Same space where Obama delivered a speech during his visit to Mumbai."
    },
    {
      brand: "yak YOUNG ADULT",
      brandSrc: "/773.jpg",
      clippingSrc: "/774.jpg",
      text: "The little painter's little hands flow gracefully across the canvas as he sets out to create just another painting but for his observers, a masterpiece of abstract art."
    },
    {
      brand: "PUNE Newsline",
      brandSrc: "/775.jpg",
      clippingSrc: "/776.jpg",
      text: "Five-year-old Shorya Mahanot, one of the youngest signature style abstract artists of the world, makes painting as Cartoonist RK Laxman watches at Laxman's residence in Aundh on Wednesday."
    },
    {
      brand: "The Asian Age",
      brandSrc: "/777.png",
      clippingSrc: "/778.jpg",
      text: "His work has an innocent confidence. It resembles Jackson Pollock's abstract expressionist work and makes you wonder what Shorya will accomplish in the years to come."
    },
    {
      brand: "India Post",
      brandSrc: "/779.jpg",
      clippingSrc: "/780.jpg",
      text: "\"The maturity of his creations defies his age...\""
    }
  ];

  return (
  <div className="shorya-media-view-root">
    
    {/* HEADER BANNER BLOCK */}
    <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')" }}>
      <div className="shorya-custom-title-white-block">
        <h1 className="shorya-custom-title-text-value">Newspaper Articles</h1>
      </div>
    </div>

    {/* ARTICLES LAYOUT TIMELINE COLUMN */}
    <div className="shorya-media-articles-container">
      {articlesData.map((article, index) => (
        <div key={index} className="shorya-media-article-card">
          
          {/* Top Row: Brand Logo sits side-by-side with description text */}
          <div className="shorya-media-split-row">
            <div className="shorya-media-brand-logo-frame">
              <img src={article.brandSrc} alt={`${article.brand} logo`} className="shorya-media-brand-logo-img" />
            </div>
            <p className="shorya-media-description-body-text">{article.text}</p>
          </div>

          {/* Bottom Row: Newspaper Clipping Scans Centered below text */}
          <div className="shorya-media-right-clipping-col" onClick={() => {
            setModalImage(article.clippingSrc);
            setIsZoomed(false); // Reset zoom when opening a new one
          }}>
            <div className="shorya-media-clipping-frame">
              <img src={article.clippingSrc} alt="Newspaper clipping snapshot document" className="shorya-media-clipping-img" />
            </div>
          </div>

          {/* Separation Partition Line Divider */}
          {index < articlesData.length - 1 && <hr className="shorya-media-divider-line" />}

        </div>
      ))}
    </div>

    {/* LIGHTBOX MODAL CHASSIS WITH DRAG-TO-PAN AND ZOOM */}
    {modalImage && (
      <div className="shorya-modal-overlay" onClick={handleCloseModal}>
        
        {/* CROSS (CLOSE) OPTION */}
        <button onClick={handleCloseModal} className="shorya-modal-cross-btn">
          ✕ Close
        </button>

        {/* SCROLLABLE / DRAGGABLE AREA */}
        <div 
          ref={scrollContainerRef}
          className={`shorya-modal-scroll-container ${isZoomed ? 'is-zoomed' : ''}`}
          onClick={(e) => e.stopPropagation()} // Stop click from closing modal
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => setTimeout(() => setIsDragging(false), 0)}
          onMouseLeave={() => setIsDragging(false)}
        >
          <img 
            src={modalImage} 
            alt="Enlarged view blueprint scanner" 
            className={`shorya-modal-image ${isZoomed ? 'zoomed-in' : 'zoomed-out'}`}
            onClick={handleImageClick}
            draggable={false} // Prevents HTML5 ghost image dragging
          />
        </div>

      </div>
    )}

    
  </div>
);
}