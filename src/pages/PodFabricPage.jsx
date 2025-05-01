import React, { useState } from 'react';
import '../styles/ProductPage.css';
import PodFabricAccordions from '../components/PodFabricAccordions';

const colors = {
  Beige: {
    hex: '#f5f5dc',
    image: '/assets/fabric/beige-fabric.png',
    name: 'Sandstone Fabric',
    description: 'A cozy beige microsuede fabric set, crafted for versatility and comfort.',
    variantId: '50582960035936',
  },
  Brown: {
    hex: '#a0522d',
    image: '/assets/fabric/brown-fabric.png',
    name: 'Cocoacalm Fabric',
    description: 'A warm brown microsuede fabric set made for stylish lounging and sturdy play.',
    variantId: '50582960068704',
  },
  Green: {
    hex: '#8FBC8F',
    image: '/assets/fabric/green-fabric.png',
    name: 'Mossmelt Fabric',
    description: 'A lush moss green microsuede fabric set for a calming, natural vibe.',
    variantId: '50582960101472',
  },
};

const price = 138;

const PodFabricPage = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Beige');

  const handleAddToCart = () => {
    const selectedVariant = colors[selectedColor];
    addToCart({
      title: 'Cushki Pod Fabric Set',
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
          <h1>The Cushki™ Pod Fabric Set</h1>
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

      <PodFabricAccordions />
    </div>
  );
};

export default PodFabricPage;
