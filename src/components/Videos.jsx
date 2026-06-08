import React, { useState } from 'react';

export default function Videos() {
  // Your updated dataset configuration including .png entries and custom commented configurations
  const videosData = [
    {
      id: "16jmQN8CGZ0",
      embedUrl: "https://www.youtube.com/embed/16jmQN8CGZ0",
      caption: "“Shorya Mahanot, the youngest signature style abstract artist tells the world about his Abstract Art Journey.”",
      logoSrc: "/30.jpg",
      logoAlt: "Pogo Logo"
    },
    {
      id: "_9QnU8MJo00",
      embedUrl: "https://www.youtube.com/embed/_9QnU8MJo00",
      caption: "“Give a child a canvas to paint and he will expand the universe with every brushstroke.”",
      
      logoAlt: "Pogo Logo"
    },
    {
      id: "fonfz2PUcAY",
      embedUrl: "https://www.youtube.com/embed/fonfz2PUcAY",
      caption: "“What happened when the prince of abstract art me the king of cartoons? A magical, blissful turn of events for sure.”",
      logoSrc: "/31.png",
      //logoAlt: "CNN IBN Logo"
    },
    {
      id: "1OeIYzu3e_4",
      embedUrl: "https://www.youtube.com/embed/1OeIYzu3e_4",
      caption: "“Imagine a start blessed by legends. Clearly it is just the start, as rightly stated by Mr Sardesai. Watch to know more.”",
      logoSrc: "/31.png",
      logoAlt: "CNN IBN Logo"
    },
    {
      id: "0R-lT5ieXF4",
      embedUrl: "https://www.youtube.com/embed/0R-lT5ieXF4",
      caption: "“Uncommon talent Child prodigy Shorya Mahanot from Neemuch in Madhya Pradesh receives blessings from the renowned cartoonist RK Laxman.”",
      logoSrc: "/34.png",
      logoAlt: "ABP Maza Logo"
    },
    {
      id: "Mc8eoULJlyE",
      embedUrl: "https://www.youtube.com/embed/Mc8eoULJlyE",
      caption: "“Shorya Mahanot, the youngest signature style abstract artist tells the world about his Abstract Art Journey.”",
      //logoAlt: "TEDx Logo"
    },
    {
      id: "8ju4wewKCzc",
      embedUrl: "https://www.youtube.com/embed/8ju4wewKCzc",
      caption: "“Give a child a canvas to paint and he will expand the universe with every brushstroke.”",
      logoSrc: "/34.png",
      logoAlt: "Expanding Universe"
    },
    {
      id: "-dG2EfbTTNI",
      embedUrl: "https://www.youtube.com/embed/-dG2EfbTTNI",
      caption: "“India's Five Year Old 'Picasso' - Shorya Mahanot”",
      logoSrc: "/31.png",
      logoAlt: "CNN IBN Logo"
    },
    {
      id: "LbmrJ3wWkcs",
      embedUrl: "https://www.youtube.com/embed/LbmrJ3wWkcs",
      caption: "“TV 9 Mumbai Sweet Home - Shorya Mahanot”",
      // logoSrc: "/35.jpg",
      //logoAlt: "TV9 Logo"
    },
    {
      id: "WtfxS_ufaAw",
      embedUrl: "https://www.youtube.com/embed/WtfxS_ufaAw",
      caption: "“Shorya Mahanot - Youngest Abstract Artist @ Zee News”",
      //logoSrc: "/36.jpg",
      //logoAlt: "Zee News Logo"
    },
    {
      id: "ePetp8C7PWA",
      embedUrl: "https://www.youtube.com/embed/ePetp8C7PWA",
      caption: "“4 year old Shorya Mahanot to make abstract paintings”",
      //logoSrc: "/37.jpg",
      //logoAlt: "News Asset"
    },
    {
      id: "E3BSTPIC7GQ",
      embedUrl: "https://www.youtube.com/embed/E3BSTPIC7GQ",
      caption: "“Shorya Mahanot - Child Abstract Artist @ ETV Marathi”",
      //logoSrc: "/38.jpg",
      //logoAlt: "ETV Marathi Logo"
    },
    {
      id: "oh2wXXHmA6g",
      embedUrl: "https://www.youtube.com/embed/oh2wXXHmA6g",
      caption: "“Shorya Mahanot - Child Abstract Artist @ Zee 24 Taas”",
      //logoSrc: "/39.jpg",
      //logoAlt: "Zee 24 Taas Logo"
    },
    {
      id: "rIySB9-HXEQ",
      embedUrl: "https://www.youtube.com/embed/rIySB9-HXEQ",
      caption: "“Shorya Mahanot live abstract work demonstration clip”",
      //logoSrc: "/37.jpg",
      //logoAlt: "Live Demo"
    }
  ];

  // Track rendering thresholds across local interaction nodes
  const [activeVideos, setActiveVideos] = useState({});

  const loadVideo = (index) => {
    setActiveVideos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="shorya-videos-view-root">
      
      {/* HEADER BANNER STRIP - Kept left-aligned */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Videos</h1>
        </div>
      </div>

      {/* CORE TIMELINE CONTAINER - Forced to center and overrode uneven CSS padding */}
      <div className="shorya-videos-list-container" style={{ margin: '0 auto', padding: '40px 20px 60px 20px', alignItems: 'center' }}>
        {videosData.map((video, index) => (
          <div key={index} className="shorya-video-card-item" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            
            {/* Publisher Logo Identifier Box */}
            <div className="shorya-video-publisher-logo-row" style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
              {video.logoSrc && (
                <img src={video.logoSrc} alt={video.logoAlt || "Publisher Logo"} className="shorya-video-publisher-badge-img" />
              )}
            </div>

            {/* Video Player Sandbox Frame Chassis */}
            <div className="shorya-video-player-aspect-wrapper" style={{ margin: '0 auto' }}>
              {activeVideos[index] ? (
                <iframe
                  src={`${video.embedUrl}?autoplay=1`}
                  title={`Shorya Mahanot Video Feature ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="shorya-video-iframe-element"
                ></iframe>
              ) : (
                <div className="shorya-video-placeholder-trigger-hull" onClick={() => loadVideo(index)}>
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                    alt="Video thumbnail blueprint" 
                    className="shorya-video-preview-thumbnail-asset"
                  />
                  <div className="shorya-video-custom-play-button-overlay">
                    <div className="shorya-video-play-triangle-vector"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Text Quote/Caption Block */}
            <div className="shorya-video-caption-container" style={{ margin: '18px auto 0 auto', textAlign: 'center' }}>
              <p className="shorya-video-caption-text-value">{video.caption}</p>
            </div>

            {/* Dash Partition Divider line spacer */}
            {index < videosData.length - 1 && (
              <hr className="shorya-video-dashed-divider-line" style={{ width: '100%', margin: '40px auto' }} />
            )}

          </div>
        ))}
      </div>

      
    </div>
  );
}