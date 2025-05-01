import React, { useState } from 'react';
import '../styles/ProductPage.css';
import ClassicFabricAccordions from '../components/ClassicFabricAccordions';

const colors = {
  Grey: {
    hex: '#A8A8A8',
    image: '/assets/fabric/beige1.png',
    name: 'Stonecloud',
    description: 'A versatile, modern grey in double-brushed microsuede that pairs effortlessly with any mood or style.',
    variantId: '50576933060928',
  },
  Pink: {
    hex: '#FFC5D3',
    image: '/assets/fabric/blush1.png',
    name: 'Blushbeam',
    description: 'A soft, warm blush pink in double-brushed microsuede made for sweet moments and cozy corners.',
    variantId: '50582850535744',
  },
  Blue: {
    hex: '#5CADFF',
    image: '/assets/fabric/sky1.png',
    name: 'Skywhisper',
    description: 'A serene, dreamy blue in double-brushed microsuede that brings calm and joy to any space.',
    variantId: '50582850502976',
  },
};

const price = 98;

const ClassicFabricPage = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Grey');

  const handleAddToCart = () => {
    const variant = colors[selectedColor];
    addToCart({
      title: 'Cushki Classic Cover Set',
      price,
      quantity: 1,
      image: variant.image,
      variantId: variant.variantId,
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
          <h1>The Cushki™ Classic Cover Set</h1>
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

      <ClassicFabricAccordions />
    </div>
  );
};

export default ClassicFabricPage;
