import React, { useState } from 'react';
import '../styles/ProductPage.css';
import PodLinerAccordions from '../components/PodLinerAccordions';

const colors = {
  Beige: {
    hex: '#f5f5dc',
    image: '/assets/liner/beige-liner.png',
    name: 'Sandstone Liner',
    description: 'A cozy beige microsuede liner set, crafted for durability and easy care.',
    variantId: '50582970000128',
  },
  Brown: {
    hex: '#a0522d',
    image: '/assets/liner/brown-liner.png',
    name: 'Cocoacalm Liner',
    description: 'A warm brown liner set for playful spaces and cozy moments.',
    variantId: '50582970032896',
  },
  Green: {
    hex: '#8FBC8F',
    image: '/assets/liner/green-liner.png',
    name: 'Mossmelt Liner',
    description: 'A lush green liner set made to bring nature’s calmness indoors.',
    variantId: '50582970065664',
  },
};

const price = 88;

const PodLinerPage = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Beige');

  const handleAddToCart = () => {
    const selectedVariant = colors[selectedColor];
    addToCart({
      title: 'Cushki Pod Liner Set',
      price,
      quantity: 1,
      image: selectedVariant.image,
      variantId: selectedVariant.variantId,
    });
  };

  return (
    <div className="product-page">
      <div className="product-top">
        <img
          src={colors[selectedColor].image}
          alt={selectedColor}
          className="product-image"
        />
        <div className="product-info">
          <h1>The Cushki™ Pod Liner Set</h1>
          <p className="price">${price}</p>

          <div className="selected-color-name">
            <strong>{colors[selectedColor].name}</strong> — {colors[selectedColor].description}
          </div>

          <div className="color-swatches">
            {Object.entries(colors).map(([colorKey, colorData]) => (
              <div
                key={colorKey}
                className={`swatch ${selectedColor === colorKey ? 'active' : ''}`}
                style={{ backgroundColor: colorData.hex }}
                onClick={() => setSelectedColor(colorKey)}
                aria-label={`Select ${colorData.name}`}
              />
            ))}
          </div>

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart - ${price}
          </button>

          <div className="free-shipping">
            Free Shipping & <a href="#" className="returns-link">30-day Returns</a>
          </div>
        </div>
      </div>

      <PodLinerAccordions />
    </div>
  );
};

export default PodLinerPage;
