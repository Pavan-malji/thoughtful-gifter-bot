import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import GiftForm from './components/GiftForm';
import PricingTiers from './components/PricingTiers';
import PaymentSimulator from './components/PaymentSimulator';
import GiftPlanDisplay from './components/GiftPlanDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState('form'); // 'form', 'pricing', 'payment', 'loading', 'result'
  const [formData, setFormData] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [giftPlan, setGiftPlan] = useState('');

  // API URL - uses environment variable with localhost fallback
const API_URL = import.meta.env.VITE_API_URL;

  const handleFormSubmit = (data) => {
    console.log('✅ Form submitted:', data);
    setFormData(data);
    setCurrentStep('pricing');
  };

  const handleTierSelect = (tier, price) => {
    console.log('✅ Tier selected:', tier, 'Price:', price);
    setSelectedTier(tier);
    setSelectedPrice(price);
    setCurrentStep('payment');
  };

  const handlePaymentComplete = async () => {
    setCurrentStep('loading');

    console.log('🚀 Starting API call...');
    console.log('📡 Backend URL:', API_URL);
    console.log('📦 Sending data:', { ...formData, selectedTier });

    try {
      const response = await axios.post(API_URL, {
        ...formData,
        selectedTier: selectedTier
      }, {
        timeout: 60000 // 60 second timeout
      });

      console.log('✅ Response received:', response.data);

      if (response.data.success) {
        setGiftPlan(response.data.giftPlan);
        setCurrentStep('result');
      } else {
        console.error('❌ API returned error:', response.data.error);
        alert(`Failed: ${response.data.error || 'Unknown error'}`);
        setCurrentStep('payment');
      }
    } catch (error) {
      console.error('❌ Error occurred:', error);
      
      let errorMessage = 'Error: ';
      
      if (error.code === 'ECONNREFUSED') {
        errorMessage = '⚠️ Cannot connect to backend!\n\nMake sure your backend server is running:\ncd server\nnpm start';
        console.error('💡 Backend not running on port 3001');
      } else if (error.response) {
        errorMessage = error.response.data?.details || error.response.data?.error || error.message;
        console.error('Server error:', error.response.data);
      } else if (error.request) {
        errorMessage = '⚠️ No response from server. Is backend running?';
        console.error('No response received');
      } else {
        errorMessage = error.message;
      }
      
      alert(errorMessage);
      setCurrentStep('payment');
    }
  };

  return (
    <div className="app">
      <Header />
      
      <main>
        {currentStep === 'form' && (
          <GiftForm onSubmit={handleFormSubmit} />
        )}

        {currentStep === 'pricing' && (
          <PricingTiers onSelectTier={handleTierSelect} />
        )}

        {currentStep === 'payment' && (
          <PaymentSimulator 
            amount={selectedPrice} 
            onPaymentComplete={handlePaymentComplete} 
          />
        )}

        {currentStep === 'loading' && (
          <LoadingSpinner />
        )}

        {currentStep === 'result' && (
          <GiftPlanDisplay 
            giftPlan={giftPlan}
            recipientName={formData?.recipientName} 
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;