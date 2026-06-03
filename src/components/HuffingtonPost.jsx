import React, { useState } from 'react';

export default function HuffingtonPost() {
  // --- Tracks if the form is successfully submitted ---
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault(); 
    
    const commentBox = e.target.elements.commentBody.value;
    const nameBox = e.target.elements.authorName.value;
    
    // If they filled out the required fields, just show success (don't send to ticker)
    if (commentBox && nameBox) {
      setIsSubmitted(true); 
    }
  };

  return (
    <div className="artwork-detail-page custom-article-page">
      <header className="detail-page-header">
        <h1 className="artwork-main-title">The Huffington Post</h1>
        <div className="artwork-meta-subheader">Posted | <span>0 comments</span></div>
      </header>

      <div className="detail-page-content-body custom-article-flow">
        <h3 className="article-italic-subtitle">
          Artist Prodigy Shorya Mahanot May Just Be A Six-Year-Old Jackson Pollock.
        </h3>
        {/* --- TOP SECTION: Text on Left, Image 1 on Right --- */}
        <div className="article-top-split">
          <div className="split-text-left">
            <p className="article-body-text">
              Jackson Pollock devotees, meet Shorya Mahanot. Like Pollock, he creates abstract expressionist paintings that channel the expressive forces of life with color and motion.
            </p>
            <p className="article-body-text">
              Unlike Pollock, however, Mahanot is six years old. That’s right, we have another child prodigy on our hands:
            </p>
          </div>
          <div className="split-img-right">
            <img src="/4.jpg" alt="The Huffington Post Logo" className="inline-article-img" />
          </div>
        </div>

        {/* --- IMAGE 2 --- */}
        <div className="article-inline-image-container">
          <img src="/1000.jpeg" alt="Artwork Details" className="inline-article-img full-width-article-img" />
        </div>

        {/* --- PARAGRAPH --- */}
        <p className="article-body-text">
          Like the brilliant minds and eager, tiny hands of miniature artistes before him, Mahanot didn’t \nlet his young age prevent him from expressing himself in the brightest of colors. In an interview with the Huffington Post, Mahanot explained he was inspired after watching his older sisters paint, though while they worked with figurative images, he veered toward abstraction.
        </p>

        {/* --- IMAGE 3 --- */}
        <div className="article-inline-image-container">
          <img src="/1001.jpg" alt="Artwork Details" className="inline-article-img full-width-article-img" />
        </div>

        {/* --- REMAINING PARAGRAPHS --- */}
        <p className="article-body-text">
          Well, he didn’t exactly explain it like that — but he did say “my sisters.”
        </p>

        <p className="article-body-text">
          His father then clarified: “Once I was in Mumbai and my daughters left their colors in their room, and Shorya had made an abstract painting. He saw a lot of art books belonging to my daughters, but they were not making abstract art works.”
        </p>

        <p className="article-body-text">
          According to Mr. Mahanot, each of Shorya’s works takes approximately four days to make and contains up to five layers of pigment. Living in Neemuch, a small town in the middle of India, Mahanot isn’t exactly in the center of the art world, but that doesn’t have any effect on his dreams. “Artist!” he cheerfully responds when asked about his future plans.
        </p>

        <p className="article-body-text">
          And his favorite artist? Not surprisingly, Mahanot cited Pollock himself. “He also makes paintings like me,” he explained.
        </p>

        <p className="article-body-text">
          Continue reading here at the <a href="https://www.huffpost.com" target="_blank" rel="noreferrer" className="teal-link">Huffington Post...</a>
        </p>
      </div>

      {/* --- COMMENT SECTION --- */}
      <div className="comment-section-container">
        <h2 className="comment-heading">Submit a Comment</h2>
        <p className="comment-subtext">Your email address will not be published. Required fields are marked *</p>
        
        {/* --- DYNAMIC RENDER: Shows Success Box OR The Form --- */}
        {isSubmitted ? (
          <div style={{ padding: '25px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#166534', fontFamily: 'sans-serif' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#15803d' }}>Success!</h3>
            <p style={{ margin: 0, fontSize: '15px' }}>Your comment has been successfully submitted and is awaiting moderation.</p>
          </div>
        ) : (
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <div className="form-group full-width">
              <textarea name="commentBody" placeholder="Comment" className="comment-textarea" rows="8" required></textarea>
            </div>
            <div className="form-group half-width">
              <input name="authorName" type="text" placeholder="Name *" className="comment-input" required />
            </div>
            <div className="form-group half-width">
              <input type="email" placeholder="Email *" className="comment-input" required />
            </div>
            <div className="form-group half-width">
              <input type="text" placeholder="Website" className="comment-input" />
            </div>
            <div className="submit-btn-wrapper">
              <button type="submit" className="comment-submit-btn">Submit</button>
            </div>
          </form>
        )}
      </div>

      <footer className="detail-page-footer-signature">Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span></footer>
    </div>
  );
}