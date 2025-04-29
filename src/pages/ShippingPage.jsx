import React from 'react';
import '../styles/ShippingPage.css'; // ✅ New CSS specific to shipping

const Shipping = () => {
  return (
    <div className="shipping-page">
      <h1>Shipping Information</h1>

      <section>
        <h2>Local Shipping (Singapore)</h2>
        <p>
          Cushki uses local courier services such as J&T Express to deliver orders. We aim to dispatch all orders within 1–3 working days after payment has been processed.
          During festive, sale, or promotional periods, please allow an additional 2–4 working days due to higher volume.
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
              <td>S$2.80</td>
              <td>1–3 working days</td>
            </tr>
          </tbody>
        </table>

        <ul>
          <li>Free local shipping for orders above S$90</li>
          <li>All courier services come with a tracking number</li>
        </ul>
      </section>

      <section>
        <h2>Self Collection</h2>
        <p>
          Self-collection is available at our workspace near Kaki Bukit MRT (Shun Li Industrial Park).
        </p>
        <ul>
          <li>Please wait for a self-collection confirmation email before coming down.</li>
          <li>The full address will be provided via email after confirmation.</li>
          <li>If you initially chose self-collection but later switch to delivery, a S$3 fee will apply regardless of eligibility for free shipping.</li>
        </ul>
      </section>

      <section>
        <h2>International Shipping</h2>
        <p>Yes! We ship worldwide. Please refer to the table below for the information.</p>

        <div className="shipping-zone-table">
          <div className="shipping-zone">
            <h4>$8–$10</h4>
            <p>West Malaysia</p>
          </div>
          <div className="shipping-zone">
            <h4>$12–$16</h4>
            <p>East Malaysia</p>
          </div>
          <div className="shipping-zone">
            <h4>$16–$22</h4>
            <p>Hong Kong, Thailand, Indonesia, Taiwan</p>
          </div>
          <div className="shipping-zone">
            <h4>$18–$35</h4>
            <p>Australia, China, New Zealand, India</p>
          </div>
          <div className="shipping-zone">
            <h4>$18–$25</h4>
            <p>Vietnam, South Korea, Brunei, Philippines</p>
          </div>
          <div className="shipping-zone">
            <h4>$30</h4>
            <p>Cambodia, Myanmar, Sri Lanka</p>
          </div>
          <div className="shipping-zone">
            <h4>$30–$45</h4>
            <p>U.S, Canada, Mexico, U.K, Germany, France</p>
          </div>
        </div>

        <ul>
          <li>Rates are based on estimate — actual rate will be calculated at checkout.</li>
          <li>Countries we ship internationally are not limited to this table.</li>
          <li>Prices listed above are in SGD.</li>
          <li><strong>Free international shipping</strong> for Malaysia orders <strong>above S$100</strong>.</li>
          <li><strong>Free international shipping</strong> for other countries for orders <strong>above S$200</strong>.</li>
          <li>All couriers come with tracking. You may track your parcel via the link provided after shipping.</li>
          <li>Parcels may exclude customs handling fees (if any).</li>
          <li>Malaysia orders typically take about 1 week to arrive.</li>
          <li>Rest of the world typically takes about 2 weeks to arrive.</li>
        </ul>
      </section>

    </div>
  );
};

export default Shipping;
