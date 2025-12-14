import React, { useState } from 'react';
import '../styles/PricingTiers.css';

const PricingTiers = ({ onSelectTier }) => {
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 49,  // Changed from 4.99
      description: 'Perfect for simple gift ideas',
      features: [
        '5 Personalized Gift Ideas',
        'Purchase Links & Recommendations',
        '2 Custom Card Messages',
        'Basic Presentation Tips'
      ],
      badge: null
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 99,  // Changed from 9.99
      description: 'For thoughtful, detailed planning',
      features: [
        'Everything in Basic',
        'DIY Gift Instructions',
        'Budget Breakdown & Money-Saving Tips',
        'Enhanced Presentation Ideas',
        'Priority Support'
      ],
      badge: 'POPULAR'
    },
    {
      id: 'concierge',
      name: 'Concierge Plan',
      price: 149,  // Changed from 19.99
      description: 'Complete white-glove gift service',
      features: [
        'Everything in Premium',
        'Full 2-Week Execution Timeline',
        'Day-by-Day Shopping Checklist',
        'Presentation Script & Delivery Tips',
        'Backup Gift Options',
        '24/7 Premium Support'
      ],
      badge: 'BEST VALUE'
    }
  ];

  const handleSelect = (tierId, price) => {
    setSelectedTier(tierId);
    onSelectTier(tierId, price);
  };

  return (
    <div className="pricing-container">
      <p className="section-overline">Step 2 · Choose a plan</p>
      <h2 className="pricing-title">Choose Your Gift Planning Experience</h2>
      <p className="pricing-subtitle">All plans include instant AI-generated gift recommendations</p>

      <div className="tiers-grid">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`tier-card ${selectedTier === tier.id ? 'selected' : ''}`}
          >
            {tier.badge && <div className="tier-badge">{tier.badge}</div>}

            <h3 className="tier-name">{tier.name}</h3>
            <div className="tier-price">
              <span className="price-currency">₹</span>
              <span className="price-amount">{tier.price}</span>
            </div>
            <p className="tier-description">{tier.description}</p>

            <ul className="tier-features">
              {tier.features.map((feature, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  {feature}
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