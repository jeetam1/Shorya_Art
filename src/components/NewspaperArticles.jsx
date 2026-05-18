import React from 'react';

export default function NewspaperArticles() {
  return (
    <div className="editorial-page-canvas">
      
      {/* 1. TOP EDITORIAL BANNER HEADER (Using 801.jpg as requested) */}
      <div className="editorial-hero-banner-frame" style={{ backgroundImage: `url('/801.jpg')` }}>
        <h1 className="editorial-main-title-text">Newspapers Articles</h1>
      </div>

      {/* 2. MEDIA GRID LIST WRAPPER */}
      <div className="editorial-inner-content-scaffold media-page-scaffold">
        
        {/* ==================== ARTICLE 1: THE GUARDIAN ==================== */}
        <div className="media-article-card-block">
          <div className="media-article-split-row">
            <div className="media-agency-logo-box text-logo-style">
              {/* Uses a typographic rendering style to capture standard newspaper font tracking signatures */}
              <span className="guardian-logo-text">the<br />guardian</span>
            </div>
            <div className="media-article-text-pane">
              <p className="editorial-standard-body-paragraph">
                He swept the bristles in wide strokes over the canvas. Each movement appeared deliberate but exaggerated as if his paintings were an unruly orchestra under his conduction.
              </p>
            </div>
          </div>
          {/* Newspaper Scan Clipping Frame */}
          <div className="media-clipping-image-container">
            <img src="/801.jpg" alt="The Guardian Clipping Asset" className="media-clipping-full-img" />
          </div>
        </div>

        {/* ==================== ARTICLE 2: THE TIMES OF INDIA ==================== */}
        <div className="media-article-card-block">
          <div className="media-article-split-row">
            <div className="media-agency-logo-box text-logo-style">
              <span className="toi-logo-text">THE TIMES OF INDIA</span>
            </div>
            <div className="media-article-text-pane">
              <p className="editorial-standard-body-paragraph">
                Shorya Mahanot, an abstract artist whose paintings have been exhibited at RK Laxman’s house and at The Taj Mahal Hotel, Mumbai has become the talk of the town. In fact, Cartoonist RK Laxman welcomed Shorya to his residence and was left speechless by his works.
              </p>
            </div>
          </div>
          <div className="media-clipping-image-container">
            <img src="/802.jpg" alt="The Times of India Clipping Asset" className="media-clipping-full-img" />
          </div>
        </div>

        {/* ==================== ARTICLE 3: HT CAFE ==================== */}
        <div className="media-article-card-block">
          <div className="media-article-split-row">
            <div className="media-agency-logo-box filled-logo-style">
              <div className="ht-cafe-badge-box">
                <span className="ht-cafe-main-text">htcafé</span>
                <span className="ht-cafe-sub-text">It's all happening here</span>
              </div>
            </div>
            <div className="media-article-text-pane">
              <p className="editorial-standard-body-paragraph">
                Shorya has painted over a hundred abstracts since he first started, and he is among one of the few child artists in the world who have had their works exhibited. He is also one of the lucky few to have been allotted a privileged space, the hotel’s Chambers Terrace which hosted Obama’s speech in Mumbai and the World Cup Celebration, for his show in the city.
              </p>
            </div>
          </div>
          <div className="media-clipping-image-container">
            <img src="/803.jpg" alt="HT Cafe Clipping Asset" className="media-clipping-full-img" />
          </div>
        </div>

      </div>

      {/* 3. STICKY BRAND CORNER FOOTLINE MARKER */}
      <footer className="detail-page-footer-signature-bio">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>

    </div>
  );
}