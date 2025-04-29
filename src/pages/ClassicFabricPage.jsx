// ClassicFabricPage.jsx
import React, { useState } from 'react';
import '../styles/ProductPage.css'; 

const colors = {
  Grey: {
    hex: '#A8A8A8',
    image: '/assets/fabric/beige1.png',
    name: 'Stonecloud',
    description: 'A versatile, modern grey in double-brushed microsuede that pairs effortlessly with any mood or style.',
    variantId: '50576933060928'
  },
  Pink: {
    hex: '#FFC5D3',
    image: '/assets/fabric/blush1.png',
    name: 'Blushbeam',
    description: 'A soft, warm blush pink in double-brushed microsuede made for sweet moments and cozy corners.',
    variantId: '50582850535744'
  },
  Blue: {
    hex: '#5CADFF',
    image: '/assets/fabric/sky1.png',
    name: 'Skywhisper',
    description: 'A serene, dreamy blue in double-brushed microsuede that brings calm and joy to any space',
    variantId: '50582850502976'
  },
};

const price = 98;

const ClassicFabricPage = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Grey');

  const handleAddToCart = () => {
    const selectedVariant = colors[selectedColor];
    addToCart({
      title: 'Cushki Classic Fabric Set',
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
          <h1>The Cushki™ Classic Cover Set</h1>
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
      <FabricAccordions />

    </div>
  );
};

export default ClassicFabricPage;

// Accordions
const FabricAccordions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const accordionData = {
    'Material': (
      <>
        Premium microsuede covers designed for durability, softness, and easy washing.
      </>
    ),
    'Care Instructions': (
      <>
        <ul>
          <li>Remove covers and zip closed before washing.</li>
          <li>Machine wash cold with like colors.</li>
          <li>Hang dry only to prevent shrinking.</li>
        </ul>
      </>
    ),
    'Shipping & Returns': (
      <>
        <p>Ships within 3-5 business days. Free shipping for orders above $100.</p>
        <p>30-day returns. See our full policy for details.</p>
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
