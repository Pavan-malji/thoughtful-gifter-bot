import React, { useState } from 'react';
import '../styles/PaymentSimulator.css';

const PaymentSimulator = ({ amount, onPaymentComplete }) => {
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="payment-title">Checkout</h2>
        <div className="payment-notice">
          <span className="info-icon">ℹ️</span>
          <p>This is a simulated payment for demonstration purposes</p>
        </div>
        
        <div className="payment-summary">
          <div className="summary-row">
            <span>Selected Plan</span>
            <span className="summary-amount">${amount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Processing Fee</span>
            <span className="summary-amount">$0.00</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="summary-amount">${amount.toFixed(2)}</span>
          </div>
        </div>

        <div className="payment-form">
          <div className="form-group">
            <label>Card Number</label>
            <input 
              type="text" 
              placeholder="4242 4242 4242 4242" 
              maxLength="19"
              disabled={processing}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input 
                type="text" 
                placeholder="MM/YY" 
                maxLength="5"
                disabled={processing}
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input 
                type="text" 
                placeholder="123" 
                maxLength="3"
                disabled={processing}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Cardholder Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              disabled={processing}
            />
          </div>
        </div>

        <button 
          className="payment-button"
          onClick={handlePayment}
          disabled={processing}
        >
          {processing ? (
            <>
              <span className="spinner"></span>
              Processing...
            </>
          ) : (
            `Pay $${amount.toFixed(2)}`
          )}
        </button>

        <div className="security-badge">
          <span className="lock-icon">🔒</span>
          <span>Secure Payment (Demo Mode)</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSimulator;