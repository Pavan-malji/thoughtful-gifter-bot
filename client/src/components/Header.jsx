import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🎁</span>
          <span className="logo-text">Thoughtful Gifter</span>
        </div>
        <p className="tagline">AI-Powered Hyper-Personalized Gift Planning</p>
      </div>
    </header>
  );
};

export default Header;