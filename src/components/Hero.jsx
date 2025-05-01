import React from 'react';
import { Link } from 'react-router-dom';
import useImageSlideshow from '../hooks/useImageSlideshow';
import '../styles/Hero.css';

const Hero = () => {
  const images = [
    '/assets/heroSlideshow/2.png',
    '/assets/heroSlideshow/3.png',
    '/assets/heroSlideshow/4.png',
    '/assets/heroSlideshow/5.png',
    '/assets/heroSlideshow/6.png',
    '/assets/heroSlideshow/7.png',
  ];

  const currentImage = useImageSlideshow(images, 1500);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Real play.<br />
            Real moments.<br />
            Real soft.
          </h1>
          <p>
            No screens. No limits. Just pure, hands-on play the way it used to be — 
            softer, safer, and more fun.
          </p>
          <div className="hero-buttons">
            <Link to="/shop-classic" className="btn btn-primary">Shop Classic</Link>
            <Link to="/pod" className="btn btn-secondary">Shop Pod™</Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={currentImage} alt="Cushki Sofa" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
