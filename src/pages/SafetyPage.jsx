import React from 'react';
import '../styles/InfoPages.css'; // ✅ Reusing the same CSS

const Safety = () => {
  return (
    <div className="info-page">
      <h1>Safety Disclaimer</h1>

      <p>
        At Cushki, safety is at the heart of everything we design. While our products are made for fun, comfort, and creativity, they must be used responsibly. Please read and follow the guidelines below to ensure safe use in your home.
      </p>

      <h2>Supervision</h2>
      <p>
        Children should always be supervised by a responsible adult while using Cushki products. We do not accept liability for accidents caused by unsupervised or improper use.
      </p>

      <h2>Intended Use</h2>
      <ul>
        <li>Our products are designed for indoor use on flat, safe surfaces only.</li>
        <li>Do not place Cushki products near stairs, open flames, sharp edges, or in outdoor environments.</li>
        <li>Jumping, climbing, and stacking should always be done cautiously and under adult supervision.</li>
      </ul>

      <h2>Product Inspection & Care</h2>
      <p>
        Please inspect your Cushki pieces regularly for damage, excessive wear, or compromised stitching/foam. If any issue is found, stop use immediately and contact our support team.
      </p>

      <h2>Liability</h2>
      <p>
        Cushki is not responsible for injuries or property damage resulting from misuse, neglect, unauthorized alterations, or failure to follow these safety recommendations.
      </p>

      <h2>Your Responsibility</h2>
      <p>
        By using Cushki products, you agree to take full responsibility for ensuring safe, appropriate, and supervised usage within your household or environment.
      </p>

      <h2>Need Help?</h2>
      <p>
        If you have any concerns or safety-related questions, feel free to contact us at <a href="mailto:support@cushkisg.com">support@cushkisg.com</a>. We're always happy to help.
      </p>
    </div>
  );
};

export default Safety;
