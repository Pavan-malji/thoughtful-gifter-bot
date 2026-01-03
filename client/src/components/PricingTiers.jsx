import React, { useState } from 'react';
import '../styles/PricingTiers.css';

const PricingTiers = ({ onSelectTier }) => {
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    {
      id: 'basic',
      name: 'Basic',
      price: 49,
      description: 'Perfect for simple gift ideas',
      features: [
        '5 Personalized Gift Ideas',
        'Purchase Links & Recommendations',
        '2 Custom Card Messages',
        'Basic Presentation Tips'
      ],
      recommended: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 99,
      description: 'For thoughtful, detailed planning',
      features: [
        'Everything in Basic',
        'DIY Gift Instructions',
        'Budget Breakdown & Money-Saving Tips',
        'Enhanced Presentation Ideas',
        'Priority Support'
      ],
      recommended: true
    },
    {
      id: 'concierge',
      name: 'Concierge',
      price: 149,
      description: 'Complete white-glove gift service',
      features: [
        'Everything in Premium',
        'Full 2-Week Execution Timeline',
        'Day-by-Day Shopping Checklist',
        'Presentation Script & Delivery Tips',
        'Backup Gift Options',
        '24/7 Premium Support'
      ],
      recommended: false
    }
  ];

  const handleSelect = (tierId, price) => {
    setSelectedTier(tierId);
    onSelectTier(tierId, price);
  };

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h2 className="pricing-title">Choose Your Plan</h2>
        <p className="pricing-subtitle">All plans include instant gift recommendations tailored to your recipient</p>
      </div>

      <div className="tiers-grid">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`tier-card ${selectedTier === tier.id ? 'selected' : ''} ${tier.recommended ? 'recommended' : ''}`}
          >
            {tier.recommended && <div className="tier-badge">Most Popular</div>}

            <div className="tier-header">
              <h3 className="tier-name">{tier.name}</h3>
              <p className="tier-description">{tier.description}</p>
            </div>

            <div className="tier-price">
              <span className="price-currency">₹</span>
              <span className="price-amount">{tier.price}</span>
            </div>

            <ul className="tier-features">
              {tier.features.map((feature, index) => (
                <li key={index}>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`tier-button ${selectedTier === tier.id ? 'selected' : ''}`}
              onClick={() => handleSelect(tier.id, tier.price)}
            >
              {selectedTier === tier.id ? 'Selected' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTiers;