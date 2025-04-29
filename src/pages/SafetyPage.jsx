import React from 'react';
import '../styles/InfoPages.css'; // ✅ Reusing the same CSS

const Safety = () => {
  return (
    <div className="info-page">
      <h1>Safety Disclaimer</h1>

      <p>At Cushki, safety is our top priority. While our products are thoughtfully designed for play and relaxation, we kindly remind all customers to exercise proper care and supervision when using our furniture products.</p>

      <h2>Supervision</h2>
      <p>Children should always be supervised by an adult when using Cushki products. Improper use or lack of supervision can lead to injuries, and Cushki will not be held responsible for any accidents resulting from misuse or unsupervised use.</p>

      <h2>Intended Use</h2>
      <ul>
        <li>Cushki products are intended for indoor use only, on flat and safe surfaces.</li>
        <li>Products should not be used near sharp edges, hard flooring without padding, open flames, or outdoor areas exposed to weather.</li>
        <li>Furniture stacking, climbing, and jumping activities should be performed with caution and under adult supervision.</li>
      </ul>

      <h2>Product Care and Inspection</h2>
      <p>Please inspect your Cushki products regularly for any signs of damage, wear, or structural weakness. Discontinue use immediately if any issues are detected, and contact us for support.</p>

      <h2>Liability</h2>
      <p>Cushki disclaims any responsibility for injuries or damages arising from misuse, negligence, unauthorized modifications, or failure to follow safety guidelines provided by us.</p>

      <h2>Customer Responsibility</h2>
      <p>By purchasing and using Cushki products, you acknowledge and accept full responsibility for ensuring that products are used in a safe manner and environment suitable for play and relaxation.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or concerns regarding the safe use of Cushki products, please contact our team at <a href="mailto:support@cushkisg.com">support@cushkisg.com</a>.</p>
    </div>
  );
};

export default Safety;
