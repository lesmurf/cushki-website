import React from 'react';
import '../styles/ProductFeatures.css'; // new css

const ProductFeatures = () => {
  return (
    <section className="features-grid">
      <div className="feature-item">
        <img src="/assets/productDetails/zipper.png" alt="Zipper Garage" />
        <div className="feature-text">
          <h4>A place to park your zipper</h4>
          <p>Custom zipper garages on each piece make the product gentle on walls and little hands. Bonus: keep the zipper parked to prevent curious kids from accessing the foam. 🧡</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-text">
          <h4>An elevated design</h4>
          <p>Our zippers were custom-designed with aesthetics and comfort in mind — they’re sleek, rounded, with added texture for easy zipping and gripping.</p>
        </div>
        <img src="/assets/productDetails/zipperplus.png" alt="Elevated Zipper Design" />
      </div>

      <div className="feature-item">
        <img src="/assets/productDetails/stylish.png" alt="Functional Handles" />
        <div className="feature-text">
          <h4>Functional and stylish</h4>
          <p>Soft, woven handles on the cushions make building and moving a breeze. Handles are flat when not in use for durability and sleekness!</p>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
