import React from 'react';
import '../styles/ProductPage.css';
import ClassicLinerAccordions from '../components/ClassicLinerAccordions';

const liner = {
  hex: '#A8A8A8',
  image: '/assets/classicLinerImage/classicLiner.png',
  name: 'Classic Liner Set',
  description: 'Non-toxic waterproof material to provide maximum protection for each piece',
  variantId: '50582950209600',
};

const price = 88;

const ClassicLinerPage = ({ addToCart }) => {
  const handleAddToCart = () => {
    addToCart({
      title: 'Cushki Classic Liner Set',
      price,
      quantity: 1,
      image: liner.image,
      variantId: liner.variantId,
    });
  };

  return (
    <div className="product-page">
      <div className="product-main">
        <div className="product-gallery">
          <img
            src={liner.image}
            alt={liner.name}
            className="main-product-image"
          />
        </div>

        <div className="product-info-panel">
          <h1>The Cushki™ Classic Liner Set</h1>
          <p className="price">${price}</p>

          <div className="selected-color-name">
            <strong>{liner.name}</strong> — {liner.description}
          </div>

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart - ${price}
          </button>

          <div className="free-shipping">
            Free Shipping & <a href="#" className="returns-link">30-day Returns</a>
          </div>
        </div>
      </div>

      <ClassicLinerAccordions />
    </div>
  );
};

export default ClassicLinerPage;