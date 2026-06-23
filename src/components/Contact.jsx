import React, { useState } from 'react';
import PageBanner from './PageBanner';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Pulling keys securely directly from your .env file
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
    const adminTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; 
    const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID; 
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; 

    // Safety check to ensure .env variables are loaded
    if (!serviceID || !adminTemplateID || !publicKey) {
      console.error("Missing EmailJS environment variables! Check your .env file.");
      alert("System configuration error. Please contact the administrator.");
      setIsSending(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      // 1. Send Notification Email to Admin and await the server response
      const response = await emailjs.send(serviceID, adminTemplateID, templateParams, publicKey);

      // STRICT CHECK: Only show success screen if the server explicitly returns a 200 OK status
      if (response.status === 200) {
        
        // 2. Send Auto-Reply Receipt Email to Customer (only if the variable exists in .env)
        if (autoReplyTemplateID) {
          try {
            await emailjs.send(serviceID, autoReplyTemplateID, templateParams, publicKey);
          } catch (autoReplyErr) {
            console.warn('Auto-reply email failed to send:', autoReplyErr);
          }
        }

        console.log('EmailJS submission confirmed by server');
        setIsSending(false);
        setIsSubmitted(true);
      } else {
        throw new Error('Server returned an unexpected status code.');
      }
      
    } catch (err) {
      console.error('EmailJS submission error:', err);
      alert('Failed to send message. Please check your internet connection and try again.');
      setIsSending(false);
      setIsSubmitted(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
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
            </div>
          </form>
        )}

      </div>
    </div>
  );
}