import React from 'react';
import '../styles/ProductFeatures.css';

const ProductFeatures = () => {
  return (
    <section className="features-grid" role="region" aria-label="Product Features">
      
      <article className="feature-item">
        <img src="/assets/productDetails/zipper.png" alt="Custom zipper garage for safety" />
        <div className="feature-text">
          <h4>Park it right here</h4>
          <p>
            Every piece comes with a custom zipper garage — keeps little fingers safe and your walls scuff-free.
          </p>
        </div>
      </article>

      <article className="feature-item">
        <div className="feature-text">
          <h4>Zips that don’t mess with the vibe</h4>
          <p>
            Designed to feel good and look better. Rounded, textured, and built for smooth glides and comfy grips.
          </p>
        </div>
        <img src="/assets/productDetails/zipperplus.png" alt="Textured rounded zipper for easy grip" />
      </article>

      <article className="feature-item">
        <img src="/assets/productDetails/stylish.png" alt="Flat woven handles on cushions" />
        <div className="feature-text">
          <h4>Handles that don’t scream "handle"</h4>
          <p>
            Soft, strong, and stays flat when not in use. Makes moving, stacking, and building feel like a breeze — without messing up the look.
          </p>
        </div>
      </article>
      
    </section>
  );
};

export default ProductFeatures;
