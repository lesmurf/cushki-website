import React from 'react';
import '../styles/ShippingPage.css'; // ✅ Page-specific styling

const Shipping = () => {
  return (
    <div className="shipping-page">
      <h1>Shipping Information</h1>

      {/* Local Shipping */}
      <section>
        <h2>Local Shipping (Singapore)</h2>
        <p>
          We use trusted local courier services like J&T Express. Orders are typically dispatched within <strong>1–3 working days</strong> after payment. During sales or peak periods, please allow up to <strong>2–4 additional days</strong> for processing.
        </p>

        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Cost</th>
              <th>Delivery Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard Courier</td>
              <td>S$$15.80</td>
              <td>2–4 working days</td>
            </tr>
          </tbody>
        </table>

        <ul>
          <li><strong>Free local shipping</strong> on orders above <strong>S$250</strong></li>
          <li>All deliveries come with tracking numbers</li>
        </ul>
      </section>

      <hr />

      {/* Self Collection */}
      <section>
        <h2>Self-Collection</h2>
        <p>Pick up your order from our workspace near Kaki Bukit MRT (Shun Li Industrial Park):</p>
        <ul>
          <li>Wait for a self-collection confirmation email before visiting</li>
          <li>Full address will be provided upon confirmation</li>
          <li>Changing to delivery after selecting self-collection incurs a flat <strong>S$3 fee</strong></li>
        </ul>
      </section>

      <hr />

      {/* International Shipping */}
      <section>
        <h2>International Shipping</h2>
        <p>We ship worldwide! The following table shows estimated rates by region:</p>

        <div className="shipping-zone-table">
          <div className="shipping-zone"><h4>$28–$30</h4><p>West Malaysia</p></div>
          <div className="shipping-zone"><h4>$32–$36</h4><p>East Malaysia</p></div>
          <div className="shipping-zone"><h4>$36–$52</h4><p>Hong Kong, Thailand, Indonesia, Taiwan</p></div>
          <div className="shipping-zone"><h4>$38–$55</h4><p>Australia, China, New Zealand, India</p></div>
          <div className="shipping-zone"><h4>$38–$45</h4><p>Vietnam, South Korea, Brunei, Philippines</p></div>
          <div className="shipping-zone"><h4>$30</h4><p>Cambodia, Myanmar, Sri Lanka</p></div>
          <div className="shipping-zone"><h4>$30–$55</h4><p>U.S., Canada, Mexico, U.K., Germany, France</p></div>
        </div>

        <ul>
          <li>Actual shipping rates are calculated at checkout</li>
          <li>We ship to more countries than listed above</li>
          <li>Prices shown are in SGD</li>
          <li><strong>Free international shipping</strong> to Malaysia for orders above <strong>S$500</strong></li>
          <li><strong>Free international shipping</strong> to all other regions for orders above <strong>S$500</strong></li>
          <li>All orders include parcel tracking</li>
          <li>Delivery times:
            <ul>
              <li>Malaysia: approx. 1 week</li>
              <li>Rest of world: approx. 2 weeks</li>
            </ul>
          </li>
          <li>Customs duties or import fees (if any) are not included</li>
        </ul>
      </section>
    </div>
  );
};

export default Shipping;
