import React, { useState } from 'react';
import '../styles/GiftForm.css';

const GiftForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    recipientName: '',
    relationship: '',
    age: '',
    gender: '',
    hobbies: '',
    occasion: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="gift-form-container">
      <h2 className="form-title">Tell Us About Your Gift Recipient</h2>
      <p className="form-subtitle">Fill in the details below to get personalized gift recommendations</p>

      <div className="form-wrapper">
        <div className="form-group">
          <label htmlFor="recipientName">Recipient's Name *</label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            placeholder="e.g., Sarah"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="relationship">Your Relationship *</label>
          <select
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            required
          >
            <option value="">Select relationship...</option>
            <option value="spouse">Spouse/Partner</option>
            <option value="parent">Parent</option>
            <option value="sibling">Sibling</option>
            <option value="friend">Friend</option>
            <option value="colleague">Colleague</option>
            <option value="child">Child</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g., 28"
              min="1"
              max="120"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="hobbies">Hobbies & Interests *</label>
          <textarea
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            placeholder="e.g., photography, hiking, cooking, reading sci-fi novels..."
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion *</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
          >
            <option value="">Select occasion...</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="wedding">Wedding</option>
            <option value="graduation">Graduation</option>
            <option value="christmas">Christmas</option>
            <option value="valentines">Valentine's Day</option>
            <option value="mothers-day">Mother's Day</option>
            <option value="fathers-day">Father's Day</option>
            <option value="thank-you">Thank You</option>
            <option value="just-because">Just Because</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget (INR ₹) *</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Select budget range...</option>
            <option value="under-500">Under ₹500</option>
            <option value="500-1000">₹500 - ₹1,000</option>
            <option value="1000-2500">₹1,000 - ₹2,500</option>
            <option value="2500-5000">₹2,500 - ₹5,000</option>
            <option value="5000-10000">₹5,000 - ₹10,000</option>
            <option value="10000+">₹10,000+</option>
          </select>
        </div>

        <button
          type="button"
          className="submit-button"
          onClick={handleSubmit}
        >
          Continue to Pricing
        </button>
      </div>
    </div>
  );
};

export default GiftForm;