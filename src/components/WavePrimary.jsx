import React from 'react';
import '../styles/WaveDivider.css';

const WavyPrimary = () => {
  return (
    <svg
      className="wavy-divider"
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
    >
      <path
        d="M0,80 C300,0 1140,180 1440,100 L1440,150 L0,150 Z"
        fill="#e4dac5"
      />
    </svg>
  );
};

export default WavyPrimary;

