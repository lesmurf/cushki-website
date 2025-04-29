import React from 'react';
import '../styles/ContactPage.css'; // ✅ New CSS for contact page

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>We're Here to Help</h1>
      <p className="intro-text">
        Have questions about your order, our products, or anything else? Reach out — we'll get back to you within 1–2 working days.
      </p>

      <div className="contact-options">
        <div className="contact-card">
          <h2>📦 Order Support</h2>
          <p>Need help with your order or tracking?</p>
          <a href="mailto:support@cushkisg.com">support@cushkisg.com</a>
        </div>

        <div className="contact-card">
          <h2>🤝 Collaborations</h2>
          <p>Want to work with Cushki or become a stockist?</p>
          <a href="mailto:hello@cushkisg.com">hello@cushkisg.com</a>
        </div>

        <div className="contact-card">
          <h2>💬 Chat with Us</h2>
          <p>Fastest way — DM us on TikTok or Instagram!</p>
          <a href="https://www.tiktok.com/@yourtiktok" target="_blank" rel="noopener noreferrer">TikTok @yourtiktok</a>
        </div>
      </div>

      <div className="faq-section">
        <h2>Looking for an answer quickly?</h2>
        <a className="faq-button" href="/faq?tab=care">Visit Our FAQs</a>
      </div>
    </div>
  );
};

export default ContactPage;
