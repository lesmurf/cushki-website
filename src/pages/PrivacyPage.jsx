import React from 'react';
import '../styles/InfoPages.css'; // ✅ Shared styling for info/legal pages

const Privacy = () => {
  return (
    <div className="info-page">
      <h1>Privacy Policy</h1>

      <p>
        At Cushki, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit or make a purchase from cushkisg.com.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li><strong>Personal Information:</strong> Your name, email, shipping/billing address, and payment info when making purchases.</li>
        <li><strong>Device Information:</strong> IP address, browser type, time zone, and cookies.</li>
        <li><strong>Order Information:</strong> Order history, communications, and secured payment data.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To process and deliver orders.</li>
        <li>To respond to support inquiries and communicate order updates.</li>
        <li>To improve our website and marketing efforts.</li>
        <li>To detect fraud and maintain site security.</li>
        <li>To comply with local regulations and legal requirements.</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>
        We never sell your data. We may share information with third-party service providers (e.g., couriers, payment gateways, email providers) under strict confidentiality for the sole purpose of fulfilling your order or communication.
      </p>

      <h2>Cookies</h2>
      <p>
        We use cookies to personalize your experience, track usage, and optimize performance. You can manage cookies via your browser settings.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Our website may link to external websites. We are not responsible for their privacy policies and encourage you to review them independently.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain order data for business records unless you request deletion.
      </p>

      <h2>Your Rights</h2>
      <p>
        Depending on your jurisdiction (e.g., Singapore PDPA or EU GDPR), you may have rights to access, modify, or delete your data. To make such requests, email us at <a href="mailto:support@cushkisg.com" aria-label="Email support">support@cushkisg.com</a>.
      </p>

      <h2>Security</h2>
      <p>
        We implement reasonable safeguards to protect your data from unauthorized access, disclosure, or misuse.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        This policy may change periodically to reflect legal or operational updates. Any changes will be posted here with an updated "Last Updated" timestamp.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any questions regarding this policy, contact us at <a href="mailto:support@cushkisg.com">support@cushkisg.com</a>.
      </p>
    </div>
  );
};

export default Privacy;
