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
    stock: 1, 
  },
  Grey: {
    hex: '#A8A8A8',
    image: '/assets/colorToImageProduct/grey1.png',
    name: 'Stonecloud',
    description: 'A versatile, modern grey in double-brushed microsuede that pairs effortlessly with any mood or style.',
    variantId: '50579798393152',
    fabric: 'Double-brushed Microsuede',
    stock: 2, 
  },
  Pink: {
    hex: '#FFC5D3',
    image: '/assets/colorToImageProduct/yellow1.png',
    name: 'Blushbeam',
    description: 'A soft, warm blush pink in double-brushed microsuede made for sweet moments and cozy corners.',
    variantId: '50579798327616',
    fabric: 'Double-brushed Microsuede',
    stock: 3, 
  },
    Purple: {
    hex: '#FFC5D3',
    image: '/assets/colorToImageProduct/yellow1.png',
    name: 'Purple',
    description: 'A soft, warm blush pink in double-brushed microsuede made for sweet moments and cozy corners.',
    variantId: '50579798327616',
    fabric: 'Corduroy',
    stock: 0, 
  },
    Green: {
    hex: '#FFC5D3',
    image: '/assets/colorToImageProduct/yellow1.png',
    name: 'Green',
    description: 'A soft, warm blush pink in double-brushed microsuede made for sweet moments and cozy corners.',
    variantId: '50579798327616',
    fabric: 'Corduroy',
    stock: 0, 
  },
    BabyGrey: {
    hex: '#FFC5D3',
    image: '/assets/colorToImageProduct/yellow1.png',
    name: 'BabyGrey',
    description: 'A soft, warm blush pink in double-brushed microsuede made for sweet moments and cozy corners.',
    variantId: '50579798327616',
    fabric: 'Corduroy',
    stock: 0, 
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
          <h1>The Cushki Classic</h1>
          <p className="price">$489</p>

          {/* Fabric Filter */}
          <div className="fabric-filter">
            {['All', 'Double-brushed Microsuede', 'Corduroy'].map((fabric) => (
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

          {/* Stock Status */}
          {colors[selectedColor].stock === 0 ? (
            <p className="stock-status out">Out of stock</p>
          ) : colors[selectedColor].stock <= 3 ? (
            <p className="stock-status low">Only {colors[selectedColor].stock} left in stock!</p>
          ) : null}

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
          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            disabled={colors[selectedColor].stock === 0}
          >
            {colors[selectedColor].stock === 0 ? 'Out of Stock' : 'Add to Cart - $489'}
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
            <Link to="/Pod" className="returns-link">
              30-day Returns
            </Link>{' '}
          </div>
        </div>
      </div>

      <ClassicAccordions />
      <ProductFeatures />
    </div>
  );
};

export default ProductPage;
