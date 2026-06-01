import React, { useState } from 'react';

export default function ArtworkDetail({ setLatestComment }) {
  // State to track all the form inputs automatically
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveInfo: false
  });

  // Automatically updates the state whenever you type
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handles the submit button click
  const handleSubmit = (e) => {
    e.preventDefault(); // MANDATORY: This stops the page from refreshing!

    // Safety check to ensure the App.jsx bridge is connected
    if (typeof setLatestComment !== 'function') {
      alert("⚠️ Error: The sidebar connection is missing! Make sure you passed setLatestComment in App.jsx.");
      return;
    }

    // 1. Format the comment text
    const newTickerText = `"${formData.comment}" - ${formData.name}`;

    // 2. Send the comment to the App.jsx sidebar
    setLatestComment(newTickerText);

    // 3. Clear the form boxes
    setFormData({
      comment: '',
      name: '',
      email: '',
      website: '',
      saveInfo: false
    });

    // 4. Show success popup
    alert("Success! Your comment is now moving in the sidebar.");
  };

  return (
    <div className="artwork-detail-page-container">
      
      {/* ARTWORK CONTENT AREA (Your painting goes here) */}
      <div className="artwork-main-content">
        {/* Placeholder for the actual painting image */}
      </div>

      {/* COMMENT SECTION */}
      <div className="comment-section-wrapper">
        <h2 className="comment-section-title">Submit a Comment</h2>
        <p className="comment-section-subtitle">
          Your email address will not be published. Required fields are marked *
        </p>

        <form className="artwork-comment-form" onSubmit={handleSubmit}>
          
          <textarea 
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Comment" 
            className="comment-textarea"
            required
          ></textarea>

          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name *" 
            className="comment-input"
            required
          />

          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *" 
            className="comment-input"
            required
          />

          <input 
            type="text" 
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website" 
            className="comment-input"
          />

          <div className="comment-checkbox-row">
            <input 
              type="checkbox" 
              name="saveInfo"
              id="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
            />
            <label htmlFor="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>

          <button type="submit" className="comment-submit-btn">
            Submit
          </button>

        </form>
      </div>

    </div>
  );
}