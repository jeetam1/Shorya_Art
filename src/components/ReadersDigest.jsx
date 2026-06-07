import React, { useState } from 'react';

export default function ReadersDigest() {
  const [commentData, setCommentData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveInfo: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCommentData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your comment has been submitted.");
    // Reset form after submission
    setCommentData({ comment: '', name: '', email: '', website: '', saveInfo: false });
  };

  return (
    <div className="rd-page-container">
      <div className="rd-content-wrapper">
        
        {/* Header Section */}
        <h1 className="rd-main-title">Reader's Digest</h1>
        <p className="rd-meta">Posted | 0 comments</p>

        <h2 className="rd-sub-title">Growing Up Gifted</h2>

        {/* First Section: Text wrapping around ab1.jpg */}
        <div className="rd-text-image-block">
          <img src="/ab1.jpg" alt="Reader's Digest Logo" className="rd-inline-image-left" />
          <p className="rd-paragraph">
            There simply isn't a single way to define or gauge intelligence. Smartness in kids is a sum of different cognitive abilities not just IQ. It spans across multiple areas: kinetic, musical, spatial, linguistic, logical-mathematical, interpersonal and intrapersonal. We often forget this and tend to benchmark children based on their grades in class. This Children's Day, let's learn how to spot true potential in our kids. For this Reader's Digest met with 5 young child prodigies and tried to uncover their story, here is a snapshot.
          </p>
        </div>

        {/* Second Section: Text with ab2.jpg */}
        <div className="rd-text-image-block">
          <p className="rd-paragraph">
            His family had never seen an art like this before—there were shades of Jackson Pollock—and his father, Aditya, was beyond ecstatic. One of the world's youngest signature style abstract artist, with several solo exhibitions under his belt, he has participated at the artexpo in New York and Microsoft's Future Decoded in Mumbai, selling painting worth $40,000 in all. Now 12, Shorya also has honour to do a live demonstration for the late cartoonist R.K. Laxman at the age of five. Shorya gushed, "He blessed me and encouraged me to paint."
          </p>
          <img src="/ab2.jpg" alt="Shorya Painting" className="rd-inline-image-center" />
        </div>

        {/* Third Section: Text with ab3.jpg */}
        <div className="rd-text-image-block">
          <p className="rd-paragraph">
            When you see Shorya's work, the first thing that strikes you is the sheer maturity and confidence of his strokes. The colours are bold, the patterns are intricate, and the overall composition speaks of an artist who is completely in control of his medium. His works have been compared to those of Jackson Pollock, a testament to his innate talent and unique style. With every brushstroke, Shorya continues to push the boundaries of abstract expressionism, creating a magical world on canvas.
          </p>
          <img src="/ab3.jpg" alt="Abstract Art Feature" className="rd-inline-image-center" />
        </div>

        {/* Comment Form Section */}
        <div className="rd-comment-section">
          <h3 className="rd-reply-title">Leave a Reply</h3>
          <p className="rd-reply-note">Your email address will not be published. Required fields are marked *</p>

          <form className="rd-comment-form" onSubmit={handleCommentSubmit}>
            <div className="rd-form-group">
              <label>Comment *</label>
              <textarea 
                name="comment" 
                value={commentData.comment} 
                onChange={handleInputChange} 
                required 
                rows="6"
              ></textarea>
            </div>

            <div className="rd-form-row">
              <div className="rd-form-group">
                <label>Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={commentData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="rd-form-group">
                <label>Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={commentData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="rd-form-group">
                <label>Website</label>
                <input 
                  type="url" 
                  name="website" 
                  value={commentData.website} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            <div className="rd-checkbox-group">
              <input 
                type="checkbox" 
                name="saveInfo" 
                id="saveInfo"
                checked={commentData.saveInfo}
                onChange={handleInputChange}
              />
              <label htmlFor="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>

            <button type="submit" className="rd-submit-btn">Post Comment</button>
          </form>
        </div>

      </div>

      {/* Footer */}
      <footer className="detail-page-footer-signature">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>
    </div>
  );
}