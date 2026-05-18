import React from 'react';

export default function ArtistStatement() {
  return (
    <div className="editorial-page-canvas">
      {/* Dynamic top header visual ribbon banner wrapper */}
      <div className="editorial-hero-banner-frame" style={{ backgroundImage: `url('/600.jpg')` }}>
        <h1 className="editorial-main-title-text">Artist's Statement</h1>
      </div>

      <div className="editorial-inner-content-scaffold">
        <div className="editorial-portrait-wrapper-box">
          <img src="/600.jpg" alt="Shorya working on painting" className="editorial-featured-portrait-asset" />
        </div>

        <div className="editorial-text-editorial-block">
          <p className="editorial-highlight-paragraph">
            Every moment is worth living. And every moment worth liveable is worth painting. I believe this. Whenever I pick colours, I don't just want to paint; I want to play and talk with canvas in such a way that anyone can sense and read the stories hidden behind those colours and splashes.
          </p>

          <p className="editorial-standard-body-paragraph">
            I treat the painting as if I am playing. I put my canvas on the floor and drip and pour and put my brush to throw strokes that I am not aware with. There's always something new, whenever you try different things, in a different manner. Sometimes a blissful moment opens a window, showing me a world full of colours. A world bursting out with colours, a world that is beyond the thoughts of shapes and sizes, you just have to see it.
          </p>

          <h2 className="editorial-section-subheading-marker">A window to another world</h2>

          <p className="editorial-standard-body-paragraph">
            Painting for me is the excitement of seeing one colour getting mixed with another and becoming the third one. At times, it transforms into a colour that even I can't name. People tell me what I paint is simple and complex, at the same time. But I don't think so. These colours come from a world that is beyond a window where colours appear and disappear. A happy place for an artist like me maybe, but I can't get them off my mind. And when these colours get down on the canvas, the world calls that as Shorya's painting. People compare my paintings with what they know and say that I have a signature style but for me it's just a beautiful feeling.
          </p>

          <p className="editorial-signature-footer-text">-Shorya</p>
        </div>
      </div>

      <footer className="detail-page-footer-signature-bio">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>
    </div>
  );
}