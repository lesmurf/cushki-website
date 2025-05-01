import React, { useState } from 'react';
import '../styles/ProductPage.css';
import ClassicLinerAccordions from '../components/ClassicLinerAccordions';

const colors = {
  Grey: {
    hex: '#A8A8A8',
    image: '/assets/liner/liner-grey.png',
    name: 'Greyliner',
    description: 'A modern cool-toned grey liner made for easy layering and durability.',
    variantId: '50582950209600',
  },
  Pink: {
    hex: '#FFC5D3',
    image: '/assets/liner/liner-pink.png',
    name: 'Pinkliner',
    description: 'A soft blush pink liner bringing a cozy foundation to any fort setup.',
    variantId: '50582950242368',
  },
  Blue: {
    hex: '#5CADFF',
    image: '/assets/liner/liner-blue.png',
    name: 'Blueliner',
    description: 'A dreamy blue liner built for maximum imagination and endless adventures.',
    variantId: '50582950275136',
  },
};

const price = 88;

const ClassicLinerPage = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Grey');

  const handleAddToCart = () => {
    const variant = colors[selectedColor];
    addToCart({
      title: 'Cushki Classic Liner Set',
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
          <h1>The Cushki™ Classic Liner Set</h1>
          <p className="price">${price}</p>

          <div className="selected-color-name">
            <strong>{colors[selectedColor].name}</strong> — {colors[selectedColor].description}
          </div>

          <div className="color-swatches">
            {Object.entries(colors).map(([key, data]) => (
              <div
                key={key}
                className={`swatch ${selectedColor === key ? 'active' : ''}`}
                style={{ backgroundColor: data.hex }}
                onClick={() => setSelectedColor(key)}
                aria-label={`Select ${data.name}`}
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

      <ClassicLinerAccordions />
    </div>
  );
};

export default ClassicLinerPage;
