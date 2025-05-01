import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css';
import ProductFeatures from '../components/ProductFeatures';
import ClassicAccordions from '../components/ClassicAccordions';

const colors = {
  Blue: {
    hex: '#5CADFF',
    image: '/assets/colorToImageProduct/blue1.png',
    name: 'Skywhisper',
    description: 'A serene, dreamy blue in double-brushed microsuede that brings calm and joy to any space',
    variantId: '50582549168448',
    fabric: 'Double-brushed Microsuede',
  },
  Grey: {
    hex: '#A8A8A8',
    image: '/assets/colorToImageProduct/grey1.png',
    name: 'Stonecloud',
    description: 'A versatile, modern grey in double-brushed microsuede that pairs effortlessly with any mood or style.',
    variantId: '50579798393152',
    fabric: 'Double-brushed Microsuede',
  },
  Pink: {
    hex: '#FFC5D3',
    image: '/assets/colorToImageProduct/yellow1.png',
    name: 'Blushbeam',
    description: 'A soft, warm blush pink in double-brushed microsuede made for sweet moments and cozy corners.',
    variantId: '50579798327616',
    fabric: 'Double-brushed Microsuede',
  },
};

const ProductPage = ({ addToCart }) => {
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedColor, setSelectedColor] = useState('Blue');

  const allSwatches = Object.keys(colors);

  const availableColors =
    selectedFabric === 'All'
      ? allSwatches
      : allSwatches.filter((c) => colors[c].fabric === selectedFabric);

  const handleFabricChange = (fabric) => {
    setSelectedFabric(fabric);
    const firstMatch =
      fabric === 'All'
        ? allSwatches[0]
        : allSwatches.find((c) => colors[c].fabric === fabric);
    setSelectedColor(firstMatch);
  };

  const handleAddToCart = () => {
    addToCart({
      title: 'The Cushki Classic',
      price: 489,
      quantity: 1,
      image: colors[selectedColor].image,
      variantId: colors[selectedColor].variantId,
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
          <h1>The Cushki™ Classic</h1>
          <p className="price">$489</p>

          {/* Fabric Filter */}
          <div className="fabric-filter">
            {['All', 'Double-brushed Microsuede'].map((fabric) => (
              <button
                key={fabric}
                onClick={() => handleFabricChange(fabric)}
                className={selectedFabric === fabric ? 'active' : ''}
              >
                {fabric}
              </button>
            ))}
          </div>

          {/* Selected Color Info */}
          <div className="selected-color-name">
            <strong>{colors[selectedColor].name}</strong> —{' '}
            {colors[selectedColor].description}
          </div>

          {/* Swatches */}
          <div className="color-swatches">
            {availableColors.map((color) => (
              <div
                key={color}
                className={`swatch ${selectedColor === color ? 'active' : ''}`}
                style={{ backgroundColor: colors[color].hex }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>

          {/* Add to Cart */}
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart - $489
          </button>

          {/* Upsell Box */}
          <div className="bundle-box">
            Add{' '}
            <Link to="/Pod" className="build-box-link">
              The Cushki Pod™
            </Link>{' '}
            into your cart and use code <strong>"BIGBUNDLE"</strong> for 15% off!
          </div>

          <div className="free-shipping">
            Free Shipping &{' '}
            <a href="#" className="returns-link">
              30-day Returns
            </a>
          </div>
        </div>
      </div>

      <ClassicAccordions />
      <ProductFeatures />
    </div>
  );
};

export default ProductPage;
