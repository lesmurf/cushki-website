import React from 'react';
import '../styles/InfoPages.css'; // ✅ Reusing your existing CSS

const Terms = () => {
  return (
    <div className="info-page">
      <h1>Terms & Conditions</h1>

      <p>Welcome to Cushki. Throughout the site, the terms "we," "us," and "our" refer to Cushki, and “you” refers to you, the user of this site. We offer this website, including all information, tools, and services available from this site to you, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.</p>

      <p>We may correct any errors or omissions in any information on our site or communications without prior notice or liability. We also reserve the right to update, change, or discontinue any aspect of our site at any time. Your continued use of the site following changes indicates your acceptance of those changes.</p>

      <h2>General</h2>
      <p>Sale of goods through this website is carried out under Cushki, registered in Singapore.</p>

      <h2>Copyright</h2>
      <p>All content on this site — including text, graphics, logos, images, downloads, and software — is the property of Cushki and is protected by international copyright laws. The compilation of all content is the exclusive property of Cushki.</p>

      <h2>Product Information</h2>
      <ul>
        <li>All product measurements are approximate and may vary slightly (±0.5 to 1 inch) due to manufacturing processes.</li>
        <li>We make every effort to display our products accurately, but colors may vary depending on your device settings.</li>
        <li>Variations in print placement and minor fabric details (such as threads or markings on the inner lining) are not considered defects.</li>
      </ul>

      <h2>Orders</h2>
      <ul>
        <li>Once an order is placed, it cannot be cancelled, amended, or combined with another order.</li>
        <li>Please ensure all details are correct before checking out.</li>
        <li>We only recognize the original buyer (not third parties) for any order-related queries or returns.</li>
        <li>If you placed your order via TikTok, our standard website return and exchange policies still apply.</li>
      </ul>

      <h2>Payments</h2>
      <ul>
        <li>Double-check your selected items before confirming payment; no changes can be made afterward.</li>
        <li>Payment methods accepted: Mastercard, Visa, PayNow, iBanking, Atome, GrabPay, and others shown at checkout.</li>
        <li>Cushki is not responsible for delayed or rejected payments by third-party processors.</li>
        <li>If we cannot fulfil your order, a full refund will be issued via store credits.</li>
      </ul>

      <h2>Shipping</h2>
      <p>We dispatch orders within 1 to 3 working days, but slight delays may occur during peak periods. Cushki is not liable for any lost or delayed parcels once they are handed over to the courier.</p>

      <h2>Returns & Exchanges</h2>
      <ul>
        <li>Local orders: 7 days, International orders: 20 days from shipping confirmation to request an exchange.</li>
        <li>Items purchased with more than 10% discount, store credits, gift cards, or during sales are non-exchangeable and non-refundable.</li>
        <li>Returned items must be unworn, unwashed, with tags intact, and securely packed.</li>
        <li>Tracked shipping for returns is required; lost return parcels are the customer's responsibility.</li>
      </ul>

      <h2>Defective or Incorrect Items</h2>
      <p>We conduct strict quality checks before dispatching orders. If you receive a defective or incorrect item, please contact us immediately. Exchanges are subject to stock availability. Sale items are not eligible for returns or exchanges.</p>

      <h2>E-Vouchers & Gift Cards</h2>
      <p>Issued in SGD, non-redeemable for cash, and valid for one year from the date of issue. Treat vouchers and gift cards like cash.</p>

      <h2>Store Credits</h2>
      <p>Issued in SGD, non-redeemable for cash, non-transferable, and valid for 180 days from issue. Refunds for out-of-stock items paid by store credit will be reissued via store credit.</p>

      <h2>Backorders</h2>
      <p>Backorder items usually take 6 to 8 weeks to arrive, subject to delays. If an order contains both ready-stock and backorder items, shipping will occur only when the backorder item arrives. Backorder purchases are strictly non-refundable.</p>

      <h2>Accuracy of Information</h2>
      <p>We strive for accuracy, but specifications, descriptions, and pricing may occasionally be incorrect or out of date. Colors displayed on screen may slightly differ from real-life product colors.</p>

      <h2>Terms of Sale</h2>
      <p>By placing an order, you confirm that the information provided is true and that you are authorized to use the selected payment method. We reserve the right to accept, modify, or decline any order at our discretion. If a pricing error occurs, we may cancel and refund affected orders.</p>

      <h2>Privacy</h2>
      <p>We respect your privacy and do not sell your personal data to third parties. For full details, please view our <a href="/privacy">Privacy Policy</a>.</p>
    </div>
  );
};

export default Terms;
