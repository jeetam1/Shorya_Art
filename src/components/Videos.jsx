import React, { useState } from 'react';

export default function Videos() {
  const videosData = [
    {
      id: "16jmQN8CGZ0",
      embedUrl: "https://www.youtube.com/embed/16jmQN8CGZ0",
      caption: "“Shorya Mahanot, the youngest signature style abstract artist tells the world about his Abstract Art Journey.”",
      logoSrc: "/events-photos/30.jpg",
      logoAlt: "TEDx Logo"
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
      caption: "“What happened when the prince of abstract art met the king of cartoons? A magical, blissful turn of events for sure.”",
      logoSrc: "/events-photos/31.png",
      logoAlt: "Cartoonist Meeting Logo"
    },
    {
      id: "30krBlLtwqY",
      embedUrl: "https://www.youtube.com/embed/30krBlLtwqY",
      caption: "“Each child is born with some magic, we just need to encourage them…”",
      logoSrc: "/events-photos/34.png",
      logoAlt: "Art Feature Logo"
    },
    {
      id: "1OeIYzu3e_4",
      embedUrl: "https://www.youtube.com/embed/1OeIYzu3e_4",
      caption: "“He dreams of painting and he paints his dreams”",
      // logoSrc: "/events-photos/31.png",
      logoAlt: "CNN IBN Logo"
    },
    {
      id: "QfBQJvdwW08",
      embedUrl: "https://www.youtube.com/embed/QfBQJvdwW08",
      caption: "“He might be shy but he is never afraid to showcase his talent on the canvas. Watch how Pogo discovered an amazing kid in Shorya.”",
      logoSrc: "/events-photos/p.jpg",
      logoAlt: "Composition Feature"
    },
    {
      id: "0R-lT5ieXF4",
      embedUrl: "https://www.youtube.com/embed/0R-lT5ieXF4",
      caption: "“How do you visualize a special day in the life of a child? Getting applauded by veterans and finding a stage where only stalwarts have gone? Watch to find out.”",
      // logoSrc: "/events-photos/34.png",
      logoAlt: "ABP Maza Logo"
    },
    {
      id: "Mc8eoULJlyE",
      embedUrl: "https://www.youtube.com/embed/Mc8eoULJlyE",
      caption: "“Imagine a start blessed by legends. Clearly it is just the start, as rightly stated by Mr Sardesai. Watch to know more.”",
      logoSrc: "/events-photos/31.png",
      logoAlt: "Journey Feature"
    },
    {
      id: "8ju4wewKCzc",
      embedUrl: "https://www.youtube.com/embed/8ju4wewKCzc",
      caption: "“Give a child a canvas to paint and he will expand the universe with every brushstroke.”",
      // logoSrc: "/events-photos/34.png",
      logoAlt: "Expanding Universe"
    },
    {
      id: "-dG2EfbTTNI",
      embedUrl: "https://www.youtube.com/embed/-dG2EfbTTNI",
      caption: "“India's Five Year Old 'Picasso' - Shorya Mahanot”",
      // logoSrc: "/events-photos/31.png",
      logoAlt: "CNN IBN Logo"
    },
    // ---- AFTER THIS POINT, CAPTIONS ARE HIDDEN IN THE UI ----
    {
      id: "LbmrJ3wWkcs",
      embedUrl: "https://www.youtube.com/embed/LbmrJ3wWkcs",
      caption: "“TV 9 Mumbai Sweet Home - Shorya Mahanot”",
      logoAlt: "TV9 Logo"
    },
    {
      id: "WtfxS_ufaAw",
      embedUrl: "https://www.youtube.com/embed/WtfxS_ufaAw",
      caption: "“Shorya Mahanot - Youngest Abstract Artist @ Zee News”",
      logoAlt: "Zee News Logo"
    },
    {
      id: "ePetp8C7PWA",
      embedUrl: "https://www.youtube.com/embed/ePetp8C7PWA",
      caption: "“4 year old Shorya Mahanot to make abstract paintings”",
      logoAlt: "News Asset"
    },
    {
      id: "E3BSTPIC7GQ",
      embedUrl: "https://www.youtube.com/embed/E3BSTPIC7GQ",
      caption: "“Shorya Mahanot - Child Abstract Artist @ ETV Marathi”",
      logoAlt: "ETV Marathi Logo"
    },
    {
      id: "oh2wXXHmA6g",
      embedUrl: "https://www.youtube.com/embed/oh2wXXHmA6g",
      caption: "“Shorya Mahanot - Child Abstract Artist @ Zee 24 Taas”",
      logoAlt: "Zee 24 Taas Logo"
    },
    {
      id: "rIySB9-HXEQ",
      embedUrl: "https://www.youtube.com/embed/rIySB9-HXEQ",
      caption: "“Shorya Mahanot live abstract work demonstration clip”",
      logoAlt: "Live Demo"
    },
    {
      id: "NswsztQo7No",
      embedUrl: "https://www.youtube.com/embed/NswsztQo7No",
      caption: "“Capturing international perspectives and media highlights globally.”",
      logoAlt: "Global Highlights"
    },
    {
      id: "8oVCr2W6ztY",
      embedUrl: "https://www.youtube.com/embed/8oVCr2W6ztY",
      caption: "“Exhibiting an early mastery of fine lines, bold sweeps, and dripping colors.”",
      logoAlt: "Exhibition Capture"
    },
    {
      id: "sLLqr1zO1Tc",
      embedUrl: "https://www.youtube.com/embed/sLLqr1zO1Tc",
      caption: "“Behind the scenes tracking canvas work configuration settings and fluid creation layers.”",
      logoAlt: "Behind the Canvas"
    },
    {
      id: "e1NtIEf8Wro",
      embedUrl: "https://www.youtube.com/embed/e1NtIEf8Wro",
      caption: "“Exploring digital mediums and tech integration workflows with signature movements.”",
      logoAlt: "Tech Integration"
    },
    {
      id: "VFtfbLHwJVc",
      embedUrl: "https://www.youtube.com/embed/VFtfbLHwJVc",
      caption: "“A compilation of signature style movements spanning major fine art gallery events.”",
      logoAlt: "Compilation View"
    },
    {
      id: "GROptYMTrv0",
      embedUrl: "https://www.youtube.com/embed/GROptYMTrv0",
      caption: "“Live interactive showcases painting with bold strokes across grand platforms.”",
      logoAlt: "Live Showcase"
    },
    {
      id: "FgQS8MNpA-k",
      embedUrl: "https://www.youtube.com/embed/FgQS8MNpA-k",
      caption: "“Reflecting upon a decade-long journey of abstract colors and continuous growth.”",
      logoAlt: "Decade Journey"
    }
  ];

  const [activeVideos, setActiveVideos] = useState({});

  const loadVideo = (index) => {
    setActiveVideos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="shorya-videos-view-root">
      
      {/* HEADER BANNER STRIP */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/biography-photos/6.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Videos</h1>
        </div>
      </div>

      {/* CORE TIMELINE CONTAINER */}
      <div className="shorya-videos-list-container" style={{ margin: '0 auto', padding: '40px 20px 60px 20px', alignItems: 'center' }}>
        {videosData.map((video, index) => {
          // Determine if this item belongs to the upper 10 list (indices 0 to 9)
          const isUpperTen = index < 10;

          return (
            <div 
              key={index} 
              className="shorya-video-card-item" 
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                margin: '0 auto',
                // Tighter margin for lower videos to pack them tightly together
                marginBottom: isUpperTen ? '0px' : '20px' 
              }}
            >
              
              {/* Publisher Logo Identifier Box - Only rendered for Upper 10 */}
              {isUpperTen && video.logoSrc && (
                <div className="shorya-video-publisher-logo-row" style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
                  <img src={video.logoSrc} alt={video.logoAlt || "Publisher Logo"} className="shorya-video-publisher-badge-img" />
                </div>
              )}

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

              {/* Text Quote/Caption Block - ONLY RENDERED FOR UPPER 10 VIDEOS */}
              {isUpperTen && (
                <div className="shorya-video-caption-container" style={{ margin: '18px auto 0 auto', textAlign: 'center' }}>
                  <p className="shorya-video-caption-text-value">{video.caption}</p>
                </div>
              )}

              {/* DYNAMIC PARTITION LOGIC */}
              {index < videosData.length - 1 && (
                isUpperTen ? (
                  /* Generates wide vertical spacing and renders a separation line between upper 10 elements */
                  <hr className="shorya-video-dashed-divider-line" style={{ width: '100%', margin: '60px auto' }} />
                ) : null 
                  /* No spacer rendered at all after the 10th item for tight stacking */
              )}

            </div>
          );
        })}
      </div>
      
    </div>
  );
}