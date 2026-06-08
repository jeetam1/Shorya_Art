import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, userAnswer: '' });
  
  // --- NEW: Tracks if the form is successfully submitted ---
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1, 
      num2: Math.floor(Math.random() * 10) + 1, 
      userAnswer: ''
    });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const correctAnswer = captcha.num1 + captcha.num2;

    if (parseInt(captcha.userAnswer) !== correctAnswer) {
      alert("Incorrect Captcha! Please try again.");
      setCaptcha((prev) => ({ ...prev, userAnswer: '' })); 
      return;
    }

    // Success! Hide the form and show the message
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    generateCaptcha();
    setIsSubmitted(false); // Brings the form back
  };

  return (
    <div className="contact-page-container">
      <div className="contact-header-section">
        <div className="contact-banner-strip" style={{ backgroundImage: "url('/6.jpg')" }}></div>
        <div className="contact-title-box">
          <h1 className="contact-main-title">Contact</h1>
        </div>
      </div>

      <div className="contact-content-wrapper">
        <div className="contact-info-block">
          <p><strong>For More Inquiries:</strong> Aditya Singh Mahanot, +917999706069</p>
          <p><strong>Email us</strong> – <a href="mailto:shorya@shoryamahanot.com">shorya@shoryamahanot.com</a></p>
        </div>

        {/* --- DYNAMIC RENDER: Shows Success Box OR The Form --- */}
        {isSubmitted ? (
          <div style={{ padding: '30px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#166534', fontFamily: 'sans-serif' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '22px', color: '#15803d' }}>Thank you, {formData.name}!</h3>
            <p style={{ margin: 0, fontSize: '15px' }}>Your message has been successfully submitted. We will get back to you shortly.</p>
            <button onClick={handleReset} className="contact-btn" style={{ marginTop: '20px' }}>Send Another Message</button>
          </div>
        ) : (
          <form className="contact-form-block" onSubmit={handleSubmit}>
            <div className="contact-form-layout">
              <div className="contact-main-inputs">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="contact-input" required />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="contact-input" required />
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" className="contact-input" required />
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" className="contact-textarea" required></textarea>
                
                <div className="contact-actions-row">
                  <button type="submit" className="contact-btn">SUBMIT</button>
                  <button type="button" className="contact-btn" onClick={handleReset}>RESET</button>
                </div>
              </div>

              <div className="contact-captcha-section">
                <label className="captcha-label">Captcha:</label>
                <div className="captcha-input-row">
                  <span>{captcha.num1} + {captcha.num2} =</span>
                  <input type="number" value={captcha.userAnswer} onChange={(e) => setCaptcha((prev) => ({ ...prev, userAnswer: e.target.value }))} className="captcha-input" required />
                </div>
              </div>
            </div>
          </form>
        )}

      </div>
      
    </div>
  );
}