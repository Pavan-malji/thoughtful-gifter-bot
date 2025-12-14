const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Gift Plan Generation Endpoint
app.post('/api/generate-gift-plan', async (req, res) => {
  try {
    const { recipientName, relationship, age, gender, hobbies, occasion, budget, selectedTier } = req.body;

    console.log('-------------------------------------------');
    console.log('📥 RECEIVED REQUEST:', { recipientName, relationship, age, occasion, budget, selectedTier });
    console.log('-------------------------------------------');

    // Validate required fields
    if (!recipientName || !relationship || !age || !hobbies || !occasion || !budget) {
      console.log('❌ Missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    // Build the complete prompt
    const prompt = buildCompletePrompt(recipientName, relationship, age, gender, hobbies, occasion, budget, selectedTier);
    
    console.log('📝 Prompt built successfully');
    console.log('🤖 Calling Gemini API (gemini-2.5-flash)...');

    // Use gemini-2.5-flash with simple configuration
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8192,
      }
    });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const giftPlan = response.text();
    
    console.log('✅ Gift plan generated successfully!');
    console.log('📏 Response length:', giftPlan.length, 'characters');
    console.log('-------------------------------------------');

    // Return the generated plan
    res.json({
      success: true,
      giftPlan: giftPlan
    });

  } catch (error) {
    console.error('-------------------------------------------');
    console.error('🛑 ERROR generating gift plan:');
    console.error('Error:', error.message);
    console.error('Status:', error.status);
    console.error('-------------------------------------------');
    
    res.status(500).json({
      success: false,
      error: 'Failed to generate gift plan. Please try again.',
      details: error.message
    });
  }
});

// Helper function to build complete prompt
function buildCompletePrompt(recipientName, relationship, age, gender, hobbies, occasion, budget, tier) {
  // Include system instruction at the beginning of the prompt
  let prompt = `You are a Hyper-Personalized Gift Concierge AI for Indian customers. Generate a complete, actionable gift plan with specific product recommendations available in India.

**RECIPIENT DETAILS:**
- Name: ${recipientName}
- Relationship: ${relationship}
- Age: ${age}
- Gender: ${gender || 'Not specified'}
- Hobbies/Interests: ${hobbies}
- Occasion: ${occasion}
- Budget: ${budget} (in Indian Rupees ₹)

**YOUR TASK:**
Create a comprehensive, personalized gift plan that includes:

1. **5 Distinct Gift Ideas** - Each should be unique and tailored:
   - Physical Gift (tangible product)
   - Experiential Gift (activity or experience)
   - DIY/Handmade Gift (personal touch)
   - Budget-Friendly Option (under ₹500)
   - Premium Option (top of budget range)

2. **For EACH Gift Idea, provide:**
   - Clear title and description
   - Why this gift is perfect for ${recipientName}
   - 3 specific purchase options with:
     * Product name
     * Approximate price in Indian Rupees (₹)
     * Where to buy (Amazon.in, Flipkart, local stores, or Indian websites)
     * Direct purchase link if possible (e.g., "https://www.amazon.in/dp/PRODUCTID" or "Search 'Product Name' on Amazon.in")

3. **2 Custom Card Messages:**
   - One thoughtful/formal message
   - One funny/casual message
   - Both should reference ${recipientName}'s interests

4. **Presentation Tips:**
   - How to wrap/present the gift
   - Best time/place to give it
   - Any special touches to add`;

  // Add tier-specific content
  if (tier === 'premium' || tier === 'concierge') {
    prompt += `

5. **BONUS - DIY Instructions:**
   - Step-by-step guide for the DIY gift option
   - Materials needed with costs
   - Estimated time to complete

6. **Budget Breakdown:**
   - Itemized costs for each option
   - Money-saving tips`;
  }

  if (tier === 'concierge') {
    prompt += `

7. **PREMIUM - Full Execution Timeline:**
   - Day-by-day action plan (2 weeks before occasion)
   - Shopping checklist
   - Preparation schedule
   - Backup gift options if primary choices are unavailable

8. **Presentation Script:**
   - Exact words to say when giving the gift
   - How to explain the thought behind it`;
  }

  prompt += `

**FORMATTING:**
Format your response in clean Markdown with:
- Clear headings (use ##, ###)
- Bullet points for lists
- Bold text for emphasis
- Numbered lists for steps
- Make it professional, actionable, and ready to execute immediately.

Do NOT include code blocks or JSON. Output pure Markdown text only.`;

  return prompt;
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'Server is running!',
    model: 'gemini-2.5-flash',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Thoughtful Gifter Bot API',
    model: 'gemini-2.5-flash',
    endpoints: {
      health: '/health',
      generateGiftPlan: '/api/generate-gift-plan (POST)'
    }
  });
});

app.listen(PORT, () => {
  console.log('===========================================');
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🤖 Using Model: gemini-2.5-flash`);
  console.log(`📊 Health: http://localhost:${PORT}/health`);
  console.log('🎁 Ready to generate gift plans!');
  console.log('===========================================');
});