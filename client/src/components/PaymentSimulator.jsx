import React, { useState } from 'react';
import '../styles/PaymentSimulator.css';

const PaymentSimulator = ({ amount, onPaymentComplete }) => {
  const [processing, setProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.length <= 19) {
      setCardNumber(formatted);
    }
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiry(e.target.value);
    if (formatted.length <= 5) {
      setExpiry(formatted);
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/gi, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handlePayment = () => {
    setProcessing(true);
    
    setTimeout(() => {
      setProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h2 className="payment-title">Complete Your Order</h2>
        <div className="payment-notice">
          <svg className="info-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p>Demo mode - No actual payment will be processed</p>
        </div>
      </div>

      <div className="payment-card">
        <div className="payment-summary">
          <div className="summary-header">
            <h3>Order Summary</h3>
          </div>
          <div className="summary-row">
            <span>Selected Plan</span>
            <span className="summary-amount">₹{amount}</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span className="summary-amount">₹0</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="summary-amount">₹{amount}</span>
          </div>
        </div>

        <div className="payment-form">
          <div className="form-group">
            <label htmlFor="cardNumber">Card number</label>
            <div className="input-with-icon">
              <input 
                type="text" 
                id="cardNumber"
                placeholder="1234 1234 1234 1234" 
                value={cardNumber}
                onChange={handleCardNumberChange}
                disabled={processing}
              />
              <div className="card-brands">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiry">Expiry date</label>
              <input 
                type="text" 
                id="expiry"
                placeholder="MM/YY" 
                value={expiry}
                onChange={handleExpiryChange}
                disabled={processing}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input 
                type="text" 
                id="cvv"
                placeholder="123" 
                value={cvv}
                onChange={handleCvvChange}
                disabled={processing}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cardholderName">Cardholder name</label>
            <input 
              type="text" 
              id="cardholderName"
              placeholder="Full name on card"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            `Pay ₹${amount}`
          )}
        </button>

        <div className="security-badge">
          <svg className="lock-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span>Secured by 256-bit SSL encryption</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSimulator;