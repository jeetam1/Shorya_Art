import React, { useState } from 'react';

export default function Magazines() {
  const [modalImage, setModalImage] = useState(null);

  // Exact data sequence using your correct /550.jpg to /556.jpg naming scheme
  const magazinesData = [
    {
      title: "INDUSTRY STATEN ISLAND",
      coverSrc: "/550.jpg",
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
      heading: "..और सपने कर दिखाया", // Added heading property exclusively for the final badge layout view
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
              
              {/* Dynamic structural injection layout conditional statement for the last index element */}
              <div className={`shorya-magazine-split-layout ${isLastItem ? 'shorya-last-row-layout' : ''}`}>
                
                {/* Left Column: Interactive Magazine Cover */}
                <div className="shorya-magazine-cover-box" onClick={() => setModalImage(item.coverSrc)}>
                  <div className="shorya-magazine-image-frame">
                    <img src={item.coverSrc} alt={`${item.title} cover snapshot`} className="shorya-magazine-cover-img" />
                  </div>
                </div>

                {/* Right Column: Narrative Description Text Block */}
                <div className="shorya-magazine-text-content-box">
                  {/* Render the custom yellow banner text badge header only if it exists in data item metadata */}
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

      {/* POPUP LIGHTBOX SYSTEM */}
      {modalImage && (
        <div 
          style={{
            position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99999,
            cursor: "zoom-out"
          }} 
          onClick={() => setModalImage(null)}
        >
          <img 
            src={modalImage} 
            alt="Enlarged magazine high res page asset" 
            style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain", border: "3px solid #ffffff", boxShadow: "0 10px 40px rgba(0,0,0,0.6)" }} 
          />
        </div>
      )}

      {/* FOOTER SIGNATURE STRIP */}
      <footer className="shorya-view-footer-signature-line">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>
    </div>
  );
}