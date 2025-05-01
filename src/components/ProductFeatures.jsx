import React from 'react';
import '../styles/ProductFeatures.css';

const ProductFeatures = () => {
  return (
    <section className="features-grid" role="region" aria-label="Product Features">
      
      <article className="feature-item">
        <img src="/assets/productDetails/zipper.png" alt="Custom zipper garage for safety" />
        <div className="feature-text">
          <h4>A place to park your zipper</h4>
          <p>
            Custom zipper garages on each piece make the product gentle on walls and little hands.
            Bonus: keep the zipper parked to prevent curious kids from accessing the foam. 🧡
          </p>
        </div>
      </article>

      <article className="feature-item">
        <div className="feature-text">
          <h4>An elevated design</h4>
          <p>
            Our zippers were custom-designed with aesthetics and comfort in mind — they’re sleek,
            rounded, with added texture for easy zipping and gripping.
          </p>
        </div>
        <img src="/assets/productDetails/zipperplus.png" alt="Textured rounded zipper for easy grip" />
      </article>

      <article className="feature-item">
        <img src="/assets/productDetails/stylish.png" alt="Flat woven handles on cushions" />
        <div className="feature-text">
          <h4>Functional and stylish</h4>
          <p>
            Soft, woven handles on the cushions make building and moving a breeze. Handles are flat
            when not in use for durability and sleekness!
          </p>
        </div>
      </article>
      
    </section>
  );
};

export default ProductFeatures;
