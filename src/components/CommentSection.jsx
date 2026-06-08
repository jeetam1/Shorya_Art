import React, { useState } from 'react';

export default function CommentSection({ storageKey = 'shoryaComments' }) {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem(storageKey);
    return savedComments ? JSON.parse(savedComments) : [];
  });
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);

  const addNewComment = (newCommentString) => {
    setComments((prevComments) => {
      const updatedQueue = [newCommentString, ...prevComments].slice(0, 3);
      localStorage.setItem(storageKey, JSON.stringify(updatedQueue));
      return updatedQueue;
    });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentBox = e.target.elements.commentBody.value;
    const nameBox = e.target.elements.authorName.value;
    
    if (commentBox && nameBox) {
      addNewComment(`"${commentBox}" - ${nameBox}`);
      setIsCommentSubmitted(true);
    }
  };

  return (
    <div className="comment-section-container">
      <h2 className="comment-heading">Submit a Comment</h2>
      <p className="comment-subtext">Your email address will not be published. Required fields are marked *</p>
      
      {isCommentSubmitted ? (
        <div style={{ padding: '25px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#166534', fontFamily: 'sans-serif' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#15803d' }}>Success!</h3>
          <p style={{ margin: 0, fontSize: '15px' }}>Your comment has been successfully submitted.</p>
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
          <div className="form-group checkbox-group">
            <input type="checkbox" id="save-info-checkbox" className="comment-checkbox" />
            <label htmlFor="save-info-checkbox" className="comment-checkbox-label">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <div className="submit-btn-wrapper">
            <button type="submit" className="comment-submit-btn">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}