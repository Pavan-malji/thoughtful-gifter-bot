import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/GiftPlanDisplay.css';

const GiftPlanDisplay = ({ giftPlan, recipientName }) => {
  return (
    <div className="gift-plan-container">
      <p className="section-overline">Step 4 · Your gift plan</p>
      <div className="plan-header">
        <h2 className="plan-title">Your Personalized Gift Plan for {recipientName}</h2>
        <p className="plan-subtitle">Created with AI • Ready to Execute</p>
      </div>

      <div className="plan-content">
        <ReactMarkdown>{giftPlan}</ReactMarkdown>
      </div>

      <div className="plan-actions">
        <button className="action-button primary" onClick={() => window.print()}>
          📄 Print Gift Plan
        </button>
        <button 
          className="action-button secondary" 
          onClick={() => window.location.reload()}
        >
          🎁 Create Another Plan
        </button>
      </div>
    </div>
  );
};

export default GiftPlanDisplay;