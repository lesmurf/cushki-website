import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>We're Here to Help</h1>
      <p className="intro-text">
        Have questions about your order, our products, or anything else? Reach out — we’ll get back to you within 1–2 working days.
      </p>

      <div className="contact-options">
        {[
          {
            icon: '📦',
            title: 'Order Support',
            text: 'Need help with your order or tracking?',
            link: 'mailto:support@cushkisg.com',
            label: 'support@cushkisg.com',
          },
          {
            icon: '🤝',
            title: 'Collaborations',
            text: 'Want to work with Cushki or become a stockist?',
            link: 'mailto:hello@cushkisg.com',
            label: 'hello@cushkisg.com',
          },
          {
            icon: '💬',
            title: 'Chat with Us',
            text: 'Fastest way — DM us on TikTok or Instagram!',
            link: 'https://www.tiktok.com/@yourtiktok',
            label: 'TikTok @yourtiktok',
            external: true,
          },
        ].map(({ icon, title, text, link, label, external }, i) => (
          <div key={i} className="contact-card">
            <h2>{icon} {title}</h2>
            <p>{text}</p>
            <a
              href={link}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {label}
            </a>
          </div>
        ))}
      </div>

      <div className="faq-section">
        <h2>Looking for an answer quickly?</h2>
        <a className="faq-button" href="/faq?tab=care">
          Visit Our FAQs
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
