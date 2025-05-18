import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css';
import ProductFeatures from '../components/ProductFeatures';
import ClassicAccordions from '../components/ClassicAccordions';

const colors = {
  PastelBlue: {
    hex: '#C7DDE0',
    images: [
      '/assets/classicImages/CCpastelblue1.png',
      '/assets/classicImages/CCpastelblue2.png',
    ],
    name: 'Skywhisper',
    description: 'A serene, dreamy blue in double-brushed microsuede that brings calm and joy to any space',
    variantId: '50582549168448',
    fabric: 'Double-brushed Microsuede',
    stock: 1,
  },
  Grey: {
    hex: '#A8A8A8',
    images: [
      '/assets/classicImages/CCgrey1.png',
      '/assets/classicImages/CCgrey2.png',
    ],
    name: 'Stonecloud',
    description: 'A versatile, modern grey in double-brushed microsuede that pairs effortlessly with any mood or style.',
    variantId: '50579798393152',
    fabric: 'Double-brushed Microsuede',
    stock: 2,
  },
  PastelPink: {
    hex: '#FFB7A5',
    images: [
      '/assets/classicImages/CCpastelpink1.png',
      '/assets/classicImages/CCpastelpink2.png',
    ],
    name: 'Blushbeam',
    description: 'A soft, warm blush pink in double-brushed microsuede made for sweet moments and cozy corners.',
    variantId: '50652115960128',
    fabric: 'Double-brushed Microsuede',
    stock: 3,
  },
  Beige: {
    hex: '#D6C5A8',
    images: [
      '/assets/classicImages/CCbeige1.png',
      '/assets/classicImages/CCbeige2.png'
    ],
    name: 'Oat',
    description: 'A creamy oat beige that brings softness and simplicity to any space. Calm, cozy, and quietly elegant — made to blend in, but never disappear.',
    variantId: '50652115927360',
    fabric: 'Double-brushed Microsuede',
    stock: 0,
  },
  DarkGrey: {
    hex: '#4A4A4A',
    images: [
      '/assets/classicImages/CCdarkgrey1.png', 
      '/assets/classicImages/CCdarkgrey2.png'
    ],
    name: 'Slatehug',
    description: 'A rich charcoal grey that wraps your space in calm and comfort. Minimal, modern, and quietly strong — built to ground any room with effortless style.',
    variantId: '50652115894592',
    fabric: 'Double-brushed Microsuede',
    stock: 0,
  },
  DarkGreen: {
    hex: '#344334',
    images: [
      '/assets/classicImages/CCmoss1.png',
      '/assets/classicImages/CCmoss2.png'
    ],
    name: 'Mossmelt',
    description: 'A deep moss green inspired by forest trails and quiet hideouts. Earthy and elegant, Mossmelt brings the outdoors in — perfect for grounded play and peaceful lounging.',
    variantId: '50652115861824',
    fabric: 'Double-brushed Microsuede',
    stock: 0,
  },
  Navy: {
    hex: '#4A6B8A',
    images: [
      '/assets/classicImages/CCnavy1.png',
      '/assets/classicImages/CCnavy2.png'
    ],
    name: 'SnugMarine',
    description: 'A deep, stormy blue that evokes crashing waves and calm strength. Bold yet grounding — perfect for making a statement that still feels serene.',
    variantId: '50652115829056',
    fabric: 'Double-brushed Microsuede',
    stock: 0,
  },
};

const ProductPage = ({ addToCart }) => {
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedColor, setSelectedColor] = useState('Beige');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
    setActiveImageIndex(0);
  };

  const handleAddToCart = () => {
    addToCart({
      title: 'The Cushki Classic',
      price: 489,
      quantity: 1,
      image: colors[selectedColor].images[0],
      variantId: colors[selectedColor].variantId,
    });
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? colors[selectedColor].images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === colors[selectedColor].images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="product-page">
      <div className="product-main">
        {/* Left: Image Carousel */}
        <div className="product-gallery">
          <button className="nav-arrow left" onClick={handlePrevImage}>
            &#8249;
          </button>
          <img
            src={colors[selectedColor].images[activeImageIndex]}
            alt={selectedColor}
            className="main-product-image"
          />
          <button className="nav-arrow right" onClick={handleNextImage}>
            &#8250;
          </button>
        </div>

        {/* Right: Product Info */}
        <div className="product-info-panel">
          <h1>The Cushki Classic</h1>
          <p className="price">$489</p>

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

          <div className="selected-color-name">
            <strong>{colors[selectedColor].name}</strong> — {colors[selectedColor].description}
          </div>

          {colors[selectedColor].stock === 0 ? (
            <p className="stock-status out">Out of stock</p>
          ) : colors[selectedColor].stock <= 3 ? (
            <p className="stock-status low">Only {colors[selectedColor].stock} left in stock!</p>
          ) : null}

          <div className="color-swatches">
            {availableColors.map((color) => (
              <div
                key={color}
                className={`swatch ${selectedColor === color ? 'active' : ''}`}
                style={{ backgroundColor: colors[color].hex }}
                onClick={() => {
                  setSelectedColor(color);
                  setActiveImageIndex(0);
                }}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>

          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            disabled={colors[selectedColor].stock === 0}
          >
            {colors[selectedColor].stock === 0 ? 'Out of Stock' : 'Add to Cart - $489'}
          </button>

          <div className="bundle-box">
            Add <Link to="/Pod" className="build-box-link">The Cushki Pod™</Link> into your cart and
            use code <strong>"BIGBUNDLE"</strong> for 15% off!
          </div>

          <div className="free-shipping">
            We Ship Free — Love it or <Link to="/Pod" className="returns-link">Get Your Money Back</Link>
          </div>
        </div>
      </div>

      <ClassicAccordions />
      <ProductFeatures />
    </div>
  );
};

export default ProductPage;
