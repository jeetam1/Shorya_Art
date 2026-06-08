import React from 'react';
import CommentSection from './CommentSection'; // Adjust this path if your component is in the root directory

export default function Yahoo() {
  return (
    <div className="yahoo-page-container">
      <div className="yahoo-content-wrapper">
        
        {/* Header Section */}
        <h1 className="yahoo-main-title">Yahoo!</h1>
        <p className="yahoo-meta">Posted | 0 comments</p>

        {/* Yahoo Logo */}
        <div className="yahoo-logo-container">
          <img src="/ab12.jpg" alt="Yahoo! News" className="yahoo-logo-img" />
        </div>

        {/* Centered Sub-Headline */}
        <h2 className="yahoo-sub-title">
          A few children who took people's breath away, with their intelligence:
        </h2>

        {/* Content Section: Text Left, Image Right */}
        <div className="yahoo-article-section">
          <div className="yahoo-text-column">
            <h3 className="yahoo-list-title">1. Shorya Mahanot</h3>
            <p className="yahoo-paragraph">
              You must have heard of India's 'Child Picasso'. Shorya Mahanot is the youngest genius painter from Madhya Pradesh. Aged 7, he has been painting for the last 3 years. Known for his mind-boggling abstract paintings, the little one is making waves on many art platforms and was also accepted as a disciple by the great cartoonist, RK Laxman.
            </p>
          </div>
          <div className="yahoo-image-column">
            <img src="/ab13.png" alt="Shorya Mahanot smiling" className="yahoo-article-img" />
          </div>
        </div>

        {/* Link to article */}
        <div className="yahoo-read-more">
          <strong>Continue reading here at </strong> <a href="https://in.search.yahoo.com" className="yahoo-link">Yahoo!</a>
        </div>

        {/* --- SHARED DYNAMIC COMMENT SECTION --- */}
        <CommentSection storageKey="comments-yahoo" />

      </div>
    </div>
  );
}