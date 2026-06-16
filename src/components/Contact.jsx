import React, { useState, useEffect } from 'react';
import PageBanner from './PageBanner';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, userAnswer: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const correctAnswer = captcha.num1 + captcha.num2;

    // Fixed: Added radix 10 to parseInt as a Javascript best practice
    if (parseInt(captcha.userAnswer, 10) !== correctAnswer) {
      alert("Incorrect Captcha! Please try again.");
      setCaptcha((prev) => ({ ...prev, userAnswer: '' }));
      return;
    }

    setIsSending(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id_here';
    const adminTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id_here';

    // Added: Second template ID for the auto-reply to the user
    const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || 'your_autoreply_template_id_here';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key_here';

    // Simulate flow if the environment variables are not configured
    if (
      serviceID === 'your_service_id_here' ||
      adminTemplateID === 'your_template_id_here' ||
      publicKey === 'your_public_key_here' ||
      !serviceID || !adminTemplateID || !publicKey
    ) {
      console.warn("EmailJS environment variables are not set or contain placeholders. Simulating submission success.");
      setTimeout(() => {
        setIsSending(false);
        setIsSubmitted(true);
      }, 1200);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      // 1. Send Notification Email to Admin
      await emailjs.send(serviceID, adminTemplateID, templateParams, publicKey);

      // 2. Send Auto-Reply Receipt Email to Customer
      await emailjs.send(serviceID, autoReplyTemplateID, templateParams, publicKey);

      console.log('EmailJS submission success');
      setIsSending(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error('EmailJS submission error:', err);
      alert(`Failed to send message: ${err.text || err.message || err || 'Unknown Error'}. Please check your credentials and try again.`);
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    generateCaptcha();
    setIsSubmitted(false);
    setIsSending(false);
  };

  return (
    <div className="contact-page-container">
      <PageBanner title="Contact" bgImage="/contact.jpg" />

      <div className="contact-content-wrapper">
        <div className="contact-info-block">
          <p><strong>For More Inquiries:</strong> Aditya Singh Mahanot, +917999706069</p>
          <p><strong>Email us</strong> – <a href="mailto:shorya@shoryamahanot.com">shorya@shoryamahanot.com</a></p>
        </div>

        {isSubmitted ? (
          <div className="contact-success-box" style={{ padding: '30px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#166534', fontFamily: 'sans-serif', boxSizing: 'border-box' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '22px', color: '#15803d' }}>Thank you, {formData.name}!</h3>
            <p style={{ margin: 0, fontSize: '15px' }}>Your message has been successfully submitted. We will get back to you shortly.</p>
            <button onClick={handleReset} className="contact-btn" style={{ marginTop: '20px' }}>Send Another Message</button>
          </div>
        ) : (
          <form className="contact-form-block" onSubmit={handleSubmit}>
            <div className="contact-form-layout">
              <div className="contact-main-inputs">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="contact-input" required disabled={isSending} />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="contact-input" required disabled={isSending} />
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" className="contact-textarea" required disabled={isSending}></textarea>

                <div className="contact-actions-row">
                  <button type="submit" className="contact-btn" disabled={isSending}>
                    {isSending ? 'SENDING...' : 'SUBMIT'}
                  </button>
                  <button type="button" className="contact-btn" onClick={handleReset} disabled={isSending}>RESET</button>
                </div>
              </div>

              <div className="contact-captcha-section">
                <label className="captcha-label">Captcha:</label>
                <div className="captcha-input-row">
                  <span>{captcha.num1} + {captcha.num2} =</span>
                  <input type="number" value={captcha.userAnswer} onChange={(e) => setCaptcha((prev) => ({ ...prev, userAnswer: e.target.value }))} className="captcha-input" required disabled={isSending} />
                </div>
              </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}