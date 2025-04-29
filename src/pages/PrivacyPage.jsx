import React from 'react';
import '../styles/InfoPages.css'; // ✅ Using the same shared styling

const Privacy = () => {
  return (
    <div className="info-page">
      <h1>Privacy Policy</h1>

      <p>At Cushki, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit or make a purchase from cushkisg.com.</p>

      <h2>Information We Collect</h2>
      <ul>
        <li><strong>Personal Information:</strong> When you make a purchase or register for an account, we collect information such as your name, email address, shipping address, billing address, and payment details.</li>
        <li><strong>Device Information:</strong> We automatically collect information about your device, including your web browser, IP address, time zone, and cookies installed on your device.</li>
        <li><strong>Order Information:</strong> We track your order history, payment details (secured), and communications related to your purchases.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To process and deliver your orders.</li>
        <li>To communicate with you about your orders, returns, or customer support requests.</li>
        <li>To improve our website, services, and marketing strategies.</li>
        <li>To detect fraud or security breaches.</li>
        <li>To comply with legal obligations and regulations.</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>We do not sell your personal data to third parties. However, we may share your information with trusted service providers who assist us with order fulfillment, payment processing, or marketing — all under strict confidentiality agreements.</p>

      <h2>Cookies</h2>
      <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can disable cookies via your browser settings, but it may affect your experience on our site.</p>

      <h2>Third-Party Services</h2>
      <p>Our website may include links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies independently.</p>

      <h2>Data Retention</h2>
      <p>We retain your order information for our records unless you request us to delete this information.</p>

      <h2>Your Rights</h2>
      <p>If you are a resident of certain jurisdictions (e.g., Singapore PDPA or GDPR for EU residents), you have the right to access, correct, update, or delete your personal information. To exercise your rights, please contact us at <a href="mailto:support@cushkisg.com">support@cushkisg.com</a>.</p>

      <h2>Security</h2>
      <p>We take reasonable steps to protect the personal information we collect from loss, misuse, unauthorized access, disclosure, alteration, or destruction.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this Privacy Policy periodically to reflect changes to our practices or for other operational, legal, or regulatory reasons. Changes will be posted on this page with an updated "Last Updated" date.</p>

      <h2>Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@cushkisg.com">support@cushkisg.com</a>.</p>
    </div>
  );
};

export default Privacy;
