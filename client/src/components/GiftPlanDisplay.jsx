import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/GiftPlanDisplay.css';

const GiftPlanDisplay = ({ giftPlan, recipientName }) => {
  return (
    <div className="gift-plan-container">
      <div className="plan-header">
        <div className="success-badge">
          <svg className="check-circle" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Plan Ready</span>
        </div>
        <h2 className="plan-title">Gift Plan for {recipientName}</h2>
        <p className="plan-subtitle">Your personalized gift recommendations and presentation guide</p>
      </div>

      <div className="plan-content">
        <ReactMarkdown>{giftPlan}</ReactMarkdown>
      </div>

      <div className="plan-actions">
        <button className="action-button primary" onClick={() => window.print()}>
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
          </svg>
          Print Plan
        </button>
        <button 
          className="action-button secondary" 
          onClick={() => window.location.reload()}
        >
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          Create New Plan
        </button>
      </div>
    </div>
  );
};

export default GiftPlanDisplay;