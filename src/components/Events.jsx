import React, { useState } from 'react';

export default function Events() {
  const [modalImage, setModalImage] = useState(null);

  // Structural array setup handling your multi-year dynamic exhibitions data mapping
  // ADDED: "linkPath" to each object so they route to different pages.
  const eventTimelineData = [
    {
      year: "Year - 2011",
      title: "Solo Exhibition at The Taj Mahal Palace Hotel",
      imgSrc: "/701.jpg",
      logoSrc: "/713.jpg",
      desc: "The journey into the world of abstract art started with a solo exhibition at the exclusive Chambers Terrace, Hotel Taj Mahal Palace, Mumbai on 21st of October 2011. Only Barack Obama and World Cup winning Indian Cricket Team had experienced the magnificent view of the Gateway of India from up here; Shorya has been the youngest one to receive this honoured privilege to be invited and to present his art before art critics, artists and various dignitaries from different walks of life.",
      linkPath: "/taj-mahal" // Links to the Taj Mahal page we built
    },
    {
      year: "Year - 2012",
      title: "Blessings From Shri R.K. Laxman",
      imgSrc: "/702.jpg",
      logoSrc: "/714.jpg",
      desc: "Blessed by the legendary cartoonist Shri R.K.Laxman, this young artist got a chance to demonstrate his abstract art talents in a solo show before the legend himself. Shri R.K.Laxman, sitting on a chair, keenly watched the blooming of a young artist. 19th of June, 2012 will always be a fond memory for this artist.",
      linkPath: "/rk-laxman" // Links to the R.K. Laxman page we built
    },
    {
      
      title: "This Amazing kid gets Amazing kids award",
      imgSrc: "/703.jpg",
      logoSrc: "/715.jpg",
      desc: "It was November 2012 when this young artist received Pogo Television ‘Amazing Kids Award’ and featured in the commercial by turner broadcasting where he showcased his talent along with his shy nature. Few instances that established Shorya as a budding artist.",
      linkPath: "/pogo" // Placeholder (e.g. y.jsx)
    },
    {
      
      title: "Solo Show in Ujjain at Kalidas Sanskrit Academy",
      imgSrc: "/704.jpg",
      logoSrc: "/716.png",
      desc: "Another solo show and with more confidence - 25th October 2012. Shorya's paintings were installed at Kalidas Sanskrit Academy, Ujjain.",
      linkPath: "/kalidas-sanskrit" 
    },
    {
      year: "Year - 2013",
      title: "Defining the place of a young artist in the world",
      imgSrc: "/705.png",
      logoSrc: "/717.jpg",
      desc: "The year 2013 was about global excursion and finding his place in the world as an abstract artist. Celebrity Chef Gala, one of the most renowned events on a global level recognized his art, and through Silent Auction Donation Breakdown of his art, they fetched $2,000 in the donation for Autism Speaks on October 2013 at Cipriani Wall Street, New York City, NY (U.S.A.). Shorya had arrived internationally.",
      linkPath: "/celebrity-chef-gala"
    },
    {
      
      title: "More international exposure",
      imgSrc: "/706.jpg",
      logoSrc: "/718.jpg",
      desc: "Spectrum, New York, USA was the host to Shorya's paintings in 2013. His work was not displayed in Spectrum, New York and Miami but also sold at $3,000, proving again and again how the world was waking up to this Indian talent.",
      linkPath: "/spectrum-miami"
    },
    {
      
      title: "Best of the Art Expo 2013",
      imgSrc: "/707.jpg",
      logoSrc: "/719.jpg",
      desc: "2013 was the year when Shorya debuted at Art Expo, New York where his paintings were selected as the Best of Art Expo 2013 exhibition. Imagine an artist just starting up and getting such accolades, a magical year indeed!",
      linkPath: "/art-expo"
    },
    {
      year: "Year - 2014",
      title: "Autism Speaks again but louder",
      imgSrc: "/708.jpg",
      logoSrc: "/720.jpg",
      desc: "2014 was a reaffirmation of things that the world was interested in this little master. In the next Silent Auction Donation Breakdown at Autism Speaks, Celebrity Chef Gala, NY – this prodigy’s painting fetched $1,800 again underlining the talents of this young man.",
      linkPath: "/celebrity-chef-gala"
    },
    {
      year: "Year - 2015",
      title: "Holtzman Gallery",
      imgSrc: "/709.jpg",
      logoSrc: "/721.png",
      desc: "Another glorious year in his feather, 2015 defined Shorya as the coming-of-age artist. Masterful strokes, multiple layers, deliberate color composition and amazing control on the symmetry were pulling people to see the work on display of this world’s signature style youngest abstract artist. One single art exhibition at Holtzman Gallery further defined Shorya as an artist to look out for upcoming years.",
      linkPath: "/holtzman-gallery"
    },
    {
      
      title: "Global Artist, Indian Celebrity",
      imgSrc: "/710.jpg",
      logoSrc: "/722.jpg",
      desc: "Sourav Ganguly, Vikram Chandra, Rajkumar Hirani, Ranveer Singh – it was a rare moment in Indian Television history that all these celebrities stopped and took notice of Shorya’s work as a live demo on NDTV as a part of ‘Support My School Telethon’. A 6-hour live televised fundraiser aired across NDTV Network on 29th November 2015.",
      linkPath: "/ndtv"
    },
    {
      year: "Year - 2016",
      title: "When doctors witnessed an artist in practice",
      imgSrc: "/711.jpg",
      logoSrc: "/723.jpg",
      desc: "In an unusual setting, sponsored and supported by Nestle, Shorya presented his art before hundreds of doctors and medical practitioners. It was a live demo again. This artist was finding his own mozo. Bengaluru (The Lalit), Mumbai (The Lalit), Kolkata (Oberoi Grand) and Delhi (Taj Palace) were places for ‘Excellentia’, a series of events of the medical fraternity and at every place, Shorya was taking abstract art on a further high ground.",
      linkPath: "/nestle"
    },
    {
      year: "Year - 2017",
      title: "The X Factor called TEDx",
      youtubeId: "16jmQN8CGZ0",
      logoSrc: "/728.jpg",
      desc: "In 2017, Shorya's art and mind got a wide reach with TEDx JSSATE. The world knew the artist Shorya and his work but not his journey and his story. He talked about his imagination, his passion and his approach towards art which was simply magical and has inspired many young artists since then. It has given him the confidence to go on the stage and talk his mind, a rare privilege to young artists.",
      linkPath: "/TEDX"
    },
    {
      
      title: "Decoding future",
      imgSrc: "/712.jpg",
      logoSrc: "/724.jpg",
      desc: "Future Decoded 2017 was an event by Microsoft which was graced by more than 1700 global thought leaders and CEOs, right from Satya Nadella (CEO, Microsoft) and Norm Judah (CTO, Microsoft) and other such eminent speakers. In the presence of such leaders, Shorya painted his first digital painting on Surface Pro 4. It was when the world of abstract art watched a beautiful transition from tradition to modernity.",
      linkPath: "/microsoft-future-decoded"
    },

    
    {
      year: "Year - 2018",
      title: "Reaching to the Land Down Under",
      audioSrc: "/audio.mp3",
      logoSrc: "/725.png",
      desc: "India's ‘Child Picasso’ found his voice on Australian Radio. On the land down under, he again underlined why he loved painting and why he would pursue it as a professional artist. Shorya is quite vocal about his dreams now. In recent collaborations, he has gone on the stage, behind the microphone and before the camera. Everywhere he has proven his popular epithet of world's youngest signature style abstract artist.",
      linkPath: "/sbs-radio"
    },
    {
      year: "Year - 2019",
      title: "Talent to watch out for: SBI YONO 20 Under Twenty",
      youtubeId: "M82JWOjGADA",
      logoSrc: "/726.jpg",
      desc: "Every recognition coming Shorya's way is defining his way better and better. In early 2019, Shorya was shortlisted in an assembled honour roll of the most impressive, young superstars and talents to watch out for – young who are transforming the society with their skills and expertise – and was aptly named as SBI YONO 20 under Twenty. Shorya Mahanot is redefining the art world as we see it.",
      
    },
    {
      
      title: "Holtzman Gallery (New)",
      youtubeId: "53SrXl92020",
      logoSrc: "/727.png",
      desc: "Holtzman Gallery was celebrating its new location and home for contemporary art at Ocean Casino Resort. No doubt, Shorya has always been a part of this exciting journey, the mentorship he has got Mr David Holtzman himself has shaped his thoughts and inspired him to create more and more. We shall see more of Shorya in 2020.",
      
    }
  ];

  return (
    <div className="shorya-events-view-root">
      
      {/* HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')" }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Events</h1>
        </div>
      </div>

      {/* TIMELINE LIST CASCADE CONTAINER */}
      <div className="shorya-events-timeline-container">
        {eventTimelineData.map((event, index) => (
          
          <div key={index} className="shorya-event-timeline-card">
            
            {/* Year Header */}
            <h2 className="shorya-event-year-header">
              {event.year}
            </h2>
            
            {/* CONDITIONAL COMPONENT RENDER BLOCK FOR IFRAMES vs IMAGES vs AUDIO NODES */}
            {event.youtubeId ? (
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: '16px', border: '1px solid #e8e8e8' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${event.youtubeId}`}
                  title={event.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ display: 'block' }}
                />
              </div>
            ) : event.audioSrc ? (
              <div style={{ width: '100%', marginBottom: '16px', background: '#fafafa', padding: '15px', border: '1px solid #e8e8e8', borderRadius: '4px', boxSizing: 'border-box' }}>
                <audio controls style={{ width: '100%' }}>
                  <source src={event.audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ) : (
              <div className="shorya-event-main-image-frame" onClick={() => setModalImage(event.imgSrc)}>
                <img src={event.imgSrc} alt={event.title} className="shorya-event-display-photo" />
              </div>
            )}

            {/* Title */}
            <h3 className="shorya-event-content-title">
              {event.title}
            </h3>

            {/* Split Info Row -> SIDE-BY-SIDE (Logo Left, Text Right) */}
            <div className="shorya-event-split-info-row">
              
              {/* Brand Logo Box */}
              <div className="shorya-event-brand-logo-box">
                <img src={event.logoSrc} alt="Event Identity Logo" className="shorya-event-brand-logo-asset" />
              </div>

              {/* Description Text */}
              <div className="shorya-event-description-text-block">
                <p className="shorya-event-body-paragraph-text">
                  {event.desc}
                </p>
                {/* UPDATED LINK: 
                  Instead of e.preventDefault(), this now directly links to the 'linkPath' defined in the array above!
                */}
                <a href={event.linkPath} className="shorya-event-readmore-link-action">
                  Read More...
                </a>
              </div>

            </div>

            {/* Partition Line after EACH content block */}
            {index < eventTimelineData.length - 1 && (
              <hr style={{ width: '100%', border: 'none', borderBottom: '1px dashed #dddddd', margin: '40px 0 0 0' }} />
            )}

          </div>
        ))}
      </div>

      {/* POPUP LIGHTBOX ENGINE */}
      {modalImage && (
        <div style={{
          position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99999, cursor: "zoom-out"
        }} onClick={() => setModalImage(null)}>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Enlarged view" style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", border: "3px solid #fff", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }} />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="shorya-view-footer-signature-line">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>
    </div>
  );
}