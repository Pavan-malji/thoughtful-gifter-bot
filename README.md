# 🎁 Thoughtful Gifter Bot

An AI-powered gift recommendation platform that generates personalized, hyper-customized gift plans using Google's Gemini AI. Built with React, Node.js, Express, and pure CSS.

---

## 📋 Project Overview

**Thoughtful Gifter Bot** helps users find the perfect gift for their loved ones by:
- Collecting details about the gift recipient (name, age, hobbies, occasion, budget)
- Offering three pricing tiers (Basic, Premium, Concierge)
- Generating comprehensive gift plans with 5 unique gift ideas
- Providing specific purchase options from Amazon.in, Flipkart, and local stores
- Including custom card messages, DIY instructions, and presentation tips

**Tech Stack:**
- **Frontend:** React (Vite), Pure CSS
- **Backend:** Node.js, Express
- **AI:** Google Gemini API (gemini-2.5-flash)
- **Currency:** Indian Rupees (INR ₹)

---

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Google Gemini API Key** - [Get it here](https://aistudio.google.com/app/apikey)
- **Git** (optional) - For cloning the repository

---

## 📦 Installation

### Step 1: Clone or Download the Project

```bash
# If using Git
git clone <your-repository-url>
cd thoughtful-gifter-bot

# Or download and extract the ZIP file
```

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 🔑 Configuration

### Step 1: Get Your Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Select **"Create API key in new project"**
5. Copy the generated API key (starts with `AIza...`)

### Step 2: Create Environment File

Navigate to the `server` folder and create a `.env` file:

```bash
cd server
```

Create a file named `.env` (exactly this name, with the dot) and add:

```env
GEMINI_API_KEY=YOUR_API_KEY_HERE
PORT=3001
```

**Important:**
- Replace `YOUR_API_KEY_HERE` with your actual Gemini API key
- No spaces around the `=` sign
- No quotes around the values

**Example:**
```env
GEMINI_API_KEY=AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXX
PORT=3001
```

---

## ▶️ Running the Application

You need to run **TWO separate terminals** - one for the backend and one for the frontend.

### Terminal 1: Start the Backend Server

```bash
cd server
npm start
```

You should see:
```
===========================================
🚀 Server running on http://localhost:3001
🤖 Using Model: gemini-2.5-flash
📊 Health: http://localhost:3001/health
🎁 Ready to generate gift plans!
===========================================
```

### Terminal 2: Start the Frontend

Open a **new terminal** and run:

```bash
cd client
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

### Step 3: Open in Browser

Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🧪 Testing the Application

### Quick Test

1. **Fill out the form:**
   - Recipient Name: `Rahul`
   - Relationship: `Friend`
   - Age: `25`
   - Gender: `Male`
   - Hobbies: `Gaming, Cricket, Bollywood movies`
   - Occasion: `Birthday`
   - Budget: `₹1,000 - ₹2,500`

2. **Select a pricing tier** (Basic, Premium, or Concierge)

3. **Complete the simulated payment**

4. **Wait for your AI-generated gift plan!** (Takes 10-30 seconds)

### Verify Backend is Working

Test the health endpoint:
```bash
# In your browser or using curl
http://localhost:3001/health
```

Should return:
```json
{
  "status": "Server is running!",
  "model": "gemini-2.5-flash",
  "timestamp": "2025-01-XX..."
}
```

---

## 📁 Project Structure

```
thoughtful-gifter-bot/
├── client/                  # React Frontend
│   ├── src/
│   │   ├── components/      # React Components
│   │   │   ├── Header.jsx
│   │   │   ├── GiftForm.jsx
│   │   │   ├── PricingTiers.jsx
│   │   │   ├── PaymentSimulator.jsx
│   │   │   ├── GiftPlanDisplay.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── styles/          # CSS Files
│   │   │   ├── Header.css
│   │   │   ├── GiftForm.css
│   │   │   ├── PricingTiers.css
│   │   │   ├── PaymentSimulator.css
│   │   │   ├── GiftPlanDisplay.css
│   │   │   └── LoadingSpinner.css
│   │   ├── App.jsx          # Main App Component
|   |   ├── index.css
│   │   ├── App.css          # Global Styles
│   │   └── main.jsx         # Entry Point
│   └── package.json
│
├── server/                  # Node.js Backend
│   ├── server.js            # Express Server & API
│   ├── .env                 # Environment Variables (YOU CREATE THIS)
│   └── package.json
│
└── README.md                # This file
```

---


## 💰 Pricing Tiers

| Plan | Price | Features |
|------|-------|----------|
| **Basic** | ₹49 | 5 Gift Ideas, Purchase Links, 2 Card Messages |
| **Premium** | ₹99 | Everything in Basic + DIY Instructions + Budget Breakdown |
| **Concierge** | ₹149 | Everything + Full Timeline + Shopping Checklist |

---

## 🎯 Features

### Gift Planning Features
- ✅ 5 unique gift ideas per request
- ✅ Physical, experiential, DIY, budget-friendly, and premium options
- ✅ 3 specific purchase options per gift idea
- ✅ Direct links to Amazon.in, Flipkart, and other Indian retailers
- ✅ Approximate prices in Indian Rupees (₹)
- ✅ Custom card messages (formal and funny)
- ✅ Presentation tips and wrapping suggestions

### Premium Features
- ✅ Step-by-step DIY instructions
- ✅ Materials list with costs
- ✅ Itemized budget breakdown
- ✅ Money-saving tips

### Concierge Features
- ✅ Day-by-day 2-week execution timeline
- ✅ Shopping checklist
- ✅ Preparation schedule
- ✅ Backup gift options
- ✅ Presentation script

---

## 📝 Notes

- **Payment is simulated** - No real transactions occur (demo mode only)
- **API costs** - Gemini API has a free tier, check [pricing](https://ai.google.dev/pricing)
- **Rate limits** - Free tier has limits on requests per minute
- **Data storage** - No data is stored; all processing is done in real-time
- **Privacy** - No user data is saved or tracked

---

## 🔒 Security

- Never commit your `.env` file to Git
- Keep your Gemini API key private
- Add `.env` to `.gitignore`:
```bash
# In the root directory
echo "server/.env" >> .gitignore
```

---

## 🤝 Contributing

Feel free to submit issues or pull requests to improve this project!

---

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Powered by [Google Gemini AI](https://deepmind.google/technologies/gemini/)
- Icons and design inspiration from modern web practices

---

**Happy Gift Planning! 🎁**