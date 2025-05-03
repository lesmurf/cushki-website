import React from 'react';
import '../styles/InfoPages.css'; // ✅ Reusing your general info page styling

const Returns = () => {
  return (
    <div className="info-page">
      <h1>Returns & Warranty</h1>

      <h2>Returns Policy</h2>
      <p>
        At Cushki, every product is made and packed with care. Due to the nature of our items and hygiene considerations, we do not offer returns or exchanges for change of mind, sizing issues, or general dissatisfaction.
      </p>

      <ul>
        <li>All sales are final — please review product dimensions and details before purchasing.</li>
        <li>Items purchased with discount codes, gift vouchers, store credits, or during promotions are strictly non-returnable and non-refundable.</li>
        <li>We only accept returns for orders placed through cushkisg.com or our verified TikTok Shop. Third-party resellers are not eligible.</li>
        <li>Store credits (if issued) are valid for 180 days and are non-transferable and non-redeemable for cash.</li>
      </ul>

      <h2>Exchanges for Defective Items</h2>
      <p>If your item arrives defective or incorrect, we’ll make it right. To qualify for an exchange:</p>
      <ul>
        <li>Notify us within <strong>3 days of delivery</strong> with clear photos of the defect.</li>
        <li>Item must be unused, unwashed, and in original condition with tags and packaging intact.</li>
        <li>Exchanges depend on availability. If the item is out of stock, a store credit will be issued instead.</li>
      </ul>

      <p><strong>Note:</strong> Cushki reserves the right to reject any return or exchange request that doesn’t meet our policy criteria.</p>

      <h2>Warranty Coverage</h2>
      <p>All Cushki items includes a <strong>3-year limited warranty</strong> from the date of delivery.</p>
      <ul>
        <li>Covers manufacturing defects (e.g., faulty stitching, broken zippers, structural foam damage not caused by misuse).</li>
        <li>Does not cover normal wear and tear, misuse, water exposure, accidental damage, or visual issues like wrinkles or slight color variation.</li>
        <li>Claims must include proof of purchase and clear defect photos.</li>
      </ul>

      <p>
        Think your product is covered? Email <a href="mailto:support@cushkisg.com">support@cushkisg.com</a> with your order number and issue details. We'll assess and guide you on the next steps.
      </p>

      <h2>Customer Responsibility</h2>
      <p>
        By placing an order, you agree to our returns, exchanges, and warranty terms. Cushki is not responsible for damage caused by improper use, mishandling, or attempted repairs.
      </p>
    </div>
  );
};

export default Returns;
