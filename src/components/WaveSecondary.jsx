import React from 'react';
import '../styles/WaveDivider.css';

const WavePrimary = () => (
  <svg className="wavy-divider" viewBox="0 0 1440 150" preserveAspectRatio="none">
    <path
      d="M0,96 C360,48 1080,144 1440,96 L1440,0 L0,0 Z"
      fill="#f2ecdb" // your primary bg color
    />
  </svg>
);

export default WavePrimary;
