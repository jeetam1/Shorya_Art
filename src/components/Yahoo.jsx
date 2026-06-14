import React from 'react';
import CommentSection from './CommentSection'; 

export default function Yahoo() {
  return (
    <div className="yahoo-page-container">
      <div className="yahoo-content-wrapper">

        <h1 className="yahoo-main-title">Yahoo!</h1>
        <p className="yahoo-meta">Posted | 0 comments</p>

        <div className="yahoo-logo-container">
          <img src="/media/ab12.jpg" alt="Yahoo! News" className="yahoo-logo-img" />
        </div>

        <h2 className="yahoo-sub-title">
          A few children who took people's breath away, with their intelligence:
        </h2>

        <div className="yahoo-article-section">
          <div className="yahoo-text-column">
            <h3 className="yahoo-list-title">1. Shorya Mahanot</h3>
            <p className="yahoo-paragraph">
              You must have heard of India's 'Child Picasso'. Shorya Mahanot is the youngest genius painter from Madhya Pradesh. Aged 7, he has been painting for the last 3 years. Known for his mind-boggling abstract paintings, the little one is making waves on many art platforms and was also accepted as a disciple by the great cartoonist, RK Laxman.
            </p>
          </div>
          <div className="yahoo-image-column">
            <img src="/media/ab13.png" alt="Shorya Mahanot smiling" className="yahoo-article-img" />
          </div>
        </div>

        <div className="yahoo-read-more">
          <strong>Continue reading here at </strong> <a href="https://in.search.yahoo.com" className="yahoo-link">Yahoo!</a>
        </div>

        <CommentSection storageKey="comments-yahoo" />

      </div>
    </div>
  );
}