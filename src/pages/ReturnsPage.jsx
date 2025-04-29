import React from 'react';
import '../styles/InfoPages.css'; // ✅ Reusing your general info page styling

const Returns = () => {
  return (
    <div className="info-page">
      <h1>Returns & Warranty</h1>

      <h2>Returns Policy</h2>
      <p>At Cushki, each item is made and packed with care. Due to the nature of our products and hygiene considerations, we do not offer returns or exchanges for change of mind, sizing errors, or general dissatisfaction.</p>

      <ul>
        <li>All sales are final — we encourage you to review product dimensions and descriptions carefully before purchasing.</li>
        <li>Items purchased using discount codes, store credits, gift vouchers, or during promotions are strictly non-returnable and non-refundable.</li>
        <li>We do not accept returns from third-party resellers or unofficial sales platforms. Only orders placed through cushkisg.com or our verified TikTok Shop are eligible.</li>
        <li>Store credits (if issued) are non-transferrable, non-exchangeable for cash, and valid for 180 days from date of issue.</li>
      </ul>

      <h2>Exchanges for Defective Items</h2>
      <p>In the rare event that you receive a defective or incorrect item, we’ll make it right. To be eligible for an exchange:</p>

      <ul>
        <li>You must notify us within <strong>3 days of delivery</strong> with clear photos of the defect.</li>
        <li>Items must be unused, unwashed, and in original condition with all tags and packaging intact.</li>
        <li>Exchange is subject to product availability — if unavailable, a store credit will be issued instead.</li>
      </ul>

      <p><strong>Important:</strong> Cushki reserves the right to reject any return or exchange request that does not meet our policy criteria.</p>

      <h2>Warranty Coverage</h2>
      <p>All Cushki foam furniture comes with a <strong>30-day limited warranty</strong> from the date of delivery.</p>
      <ul>
        <li>This warranty covers manufacturing defects such as faulty stitching, broken zippers, or significant structural foam damage (not caused by misuse).</li>
        <li>Normal wear and tear, misuse, accidental damage, water/moisture exposure, or aesthetic issues (such as wrinkles, fold marks, or color variation) are not covered.</li>
        <li>Warranty claims must include proof of purchase and clear photos of the defect.</li>
      </ul>

      <p>If you believe your product is defective under warranty, please email <a href="mailto:support@cushkisg.com">support@cushkisg.com</a> with your order number and issue details. We’ll assess and advise you on the next steps.</p>

      <h2>Customer Responsibility</h2>
      <p>By placing an order with Cushki, you agree to our returns, exchanges, and warranty terms. We are not liable for damages caused by improper use, handling, or self-repair attempts.</p>
    </div>
  );
};

export default Returns;
