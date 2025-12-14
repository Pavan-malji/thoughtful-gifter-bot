import React from 'react';
import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="spinner-wrapper">
        <div className="spinner"></div>
        <div className="gift-icon">🎁</div>
      </div>
      <h3 className="loading-title">Crafting Your Perfect Gift Plan...</h3>
      <p className="loading-text">Our AI is analyzing preferences and finding the best options</p>
      <div className="loading-steps">
        <div className="step">✓ Analyzing recipient profile</div>
        <div className="step">✓ Researching gift options</div>
        <div className="step active">⟳ Personalizing recommendations</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;