// ClassicLinerPage.jsx
import React, { useState } from 'react';
import '../styles/ProductPage.css';

const colors = {
  Grey: {
    hex: '#A8A8A8',
    image: '/assets/liner/liner-grey.png', // 🔥 update with your actual image
    name: 'Greyliner',
    description: 'A modern cool-toned grey liner made for easy layering and durability.',
    variantId: '50582950209600'
  },
  Pink: {
    hex: '#FFC5D3',
    image: '/assets/liner/liner-pink.png', // 🔥 update with your actual image
    name: 'Pinkliner',
    description: 'A soft blush pink liner bringing a cozy foundation to any fort setup.',
    variantId: '50582950242368'
  },
  Blue: {
    hex: '#5CADFF',
    image: '/assets/liner/liner-blue.png', // 🔥 update with your actual image
    name: 'Blueliner',
    description: 'A dreamy blue liner built for maximum imagination and endless adventures.',
    variantId: '50582950275136'
  },
};

const price = 88; // 🔥 Set your liner price here

const ClassicLinerPage = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Grey');

  const handleAddToCart = () => {
    const selectedVariant = colors[selectedColor];
    addToCart({
      title: 'Cushki Classic Liner Set',
      price: price,
      quantity: 1,
      image: selectedVariant.image,
      variantId: selectedVariant.variantId
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

          {/* Color Name and Description */}
          <div className="selected-color-name">
            <strong>{colors[selectedColor].name}</strong> — {colors[selectedColor].description}
          </div>

          {/* Color Swatches */}
          <div className="color-swatches">
            {Object.entries(colors).map(([colorKey, colorData]) => (
              <div
                key={colorKey}
                className={`swatch ${selectedColor === colorKey ? 'active' : ''}`}
                style={{ backgroundColor: colorData.hex }}
                onClick={() => setSelectedColor(colorKey)}
              />
            ))}
          </div>

          {/* Add to Cart */}
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart - ${price}
          </button>

          {/* Free Shipping */}
          <div className="free-shipping">
            Free Shipping & <a href="#" className="returns-link">30-day Returns</a>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <LinerAccordions />

    </div>
  );
};

export default ClassicLinerPage;

// Accordions
const LinerAccordions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const accordionData = {
    'Material': (
      <>
        Premium microsuede liners crafted for breathability, durability, and easy care.
      </>
    ),
    'Care Instructions': (
      <>
        <ul>
          <li>Machine wash cold on delicate cycle.</li>
          <li>Zip closed before washing.</li>
          <li>Hang dry only to maintain original shape.</li>
        </ul>
      </>
    ),
    'Shipping & Returns': (
      <>
        <p>Ships within 3-5 business days. Free shipping for orders above $100.</p>
        <p>30-day returns. See our return policy for full details.</p>
      </>
    ),
  };

  return (
    <div className="accordions">
      {Object.keys(accordionData).map((section) => (
        <div key={section} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(section)}>
            <span>{section}</span>
            <span className="arrow">{openAccordion === section ? '▲' : '▼'}</span>
          </div>
          {openAccordion === section && (
            <div className="accordion-content">
              {accordionData[section]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
