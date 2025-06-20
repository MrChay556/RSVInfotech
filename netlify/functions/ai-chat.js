const axios = require('axios');

exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const { message } = JSON.parse(event.body);
    
    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Message is required' }),
      };
    }

    // Check if OpenAI API key is available
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          success: false,
          message: "AI service is not configured. Please contact support."
        }),
      };
    }

    // Call OpenAI API
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are RSV Infotech's AI assistant. You help customers with IT services including:
- AI Solutions & Machine Learning
- Cloud Technologies & Migration  
- IT Security & Cybersecurity
- Software Development
- IT Networking
- VoIP Solutions

Be professional, helpful, and concise. If customers ask about pricing, suggest they contact the team for a consultation. If they ask about services, provide details about RSV Infotech's offerings.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    }, {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const aiResponse = response.data.choices[0].message.content;
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: true,
        message: aiResponse,
        timestamp: new Date().toISOString()
      }),
    };
  } catch (error) {
    console.error("Error in AI chat:", error);
    
    // Handle OpenAI API errors
    if (error.response) {
      console.error("OpenAI API Error:", error.response.data);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          success: false,
          message: "I'm having trouble connecting to the AI service. Please try again in a moment."
        }),
      };
    }
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: false,
        message: "Sorry, I'm having trouble processing your request. Please try again."
      }),
    };
  }
}; 