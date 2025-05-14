import React, { useState } from 'react';
import '../styles/ProductPage.css';
import ClassicFabricAccordions from '../components/ClassicFabricAccordions.jsx';

const colors = {
  Grey: {
    hex: '#A8A8A8',
    image: '/assets/classicCoverImages/CCgrey-cover.png',
    name: 'Stonecloud',
    description: 'A versatile, modern grey in double-brushed microsuede that pairs effortlessly with any mood or style.',
    variantId: '50576933060928',
  },
  PastelPink: {
    hex: '#FFB7A5',
    image: '/assets/classicCoverImages/CCpastelpink-cover.png',
    name: 'Blushbeam',
    description: 'A soft, warm blush pink in double-brushed microsuede made for sweet moments and cozy corners.',
    variantId: '50582850535744',
  },
  PastelBlue: {
    hex: '#C7DDE0',
    image: '/assets/classicCoverImages/CCpastelblue-cover.png',
    name: 'Skywhisper',
    description: 'A serene, dreamy blue in double-brushed microsuede that brings calm and joy to any space.',
    variantId: '50582850502976',
  },
  DarkGrey: {
    hex: '#4A4A4A',
    image: '/assets/classicCoverImages/CCdarkgrey-cover.png',
    name: 'Slatehug',
    description: 'A rich charcoal grey that wraps your space in calm and comfort. Minimal, modern, and quietly strong — built to ground any room with effortless style.',
    variantId: '50582850502976',
  },
  Navy: {
    hex: '#4A6B8A',
    image: '/assets/classicCoverImages/CCnavy-cover.png',
    name: 'Skywhisper',
    description: 'A serene, dreamy blue in double-brushed microsuede that brings calm and joy to any space.',
    variantId: '50582850502976',
  },
  Beige: {
    hex: '#D6C5A8',
    image: '/assets/classicCoverImages/CCbeige-cover.png',
    name: 'Oat',
    description: 'A creamy oat beige that brings softness and simplicity to any space. Calm, cozy, and quietly elegant — made to blend in, but never disappear.',
    variantId: '50582850502976',
  },
  DarkGreen: {
    hex: '#344334',
    image: '/assets/classicCoverImages/CCmossgreen-cover.png',
    name: 'Mossmelt',
    description: 'A deep moss green inspired by forest trails and quiet hideouts. Earthy and elegant, Mossmelt brings the outdoors in — perfect for grounded play and peaceful lounging.',
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
      <div className="product-main">
        <div className="product-gallery">
          <img
            src={colors[selectedColor].image}
            alt={selectedColor}
            className="main-product-image"
          />
        </div>

        <div className="product-info-panel">
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
