import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const images = [
  '/assets/heroSlideshow/2.png',
  '/assets/heroSlideshow/3.png',
  '/assets/heroSlideshow/4.png',
  '/assets/heroSlideshow/5.png',
  '/assets/heroSlideshow/6.png',
  '/assets/heroSlideshow/7.png',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Real play.<br />Real moments.<br />Real soft.</h1>
          <p>No screens. No limits. Just pure, hands-on play the way it used to be — softer, safer, and more fun.</p>
          <div className="hero-buttons">
            <a href="#classic" className="btn btn-primary">Shop Classic</a>
            <a href="#chunk" className="btn btn-secondary">Shop Chunk</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={images[currentIndex]} alt="Cushki Sofa" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
