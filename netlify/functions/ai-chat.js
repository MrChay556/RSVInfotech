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

    // Handle regular AI chat
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

    // Call OpenAI API with updated system prompt
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are RSV Infotech's AI assistant. You can ONLY provide information that is available on the RSV Infotech website. 

COMPANY INFORMATION:
- Company Name: RSV Infotech
- Website: myrsv.com
- Contact Email: connectme@myrsv.com (from the website)
- Experience: 20+ years of delivering exceptional IT solutions
- Clients: 100+ happy clients across Singapore and beyond
- Support: 24/7 round-the-clock technical support and monitoring

SERVICES OFFERED (from the website):
1. Managed IT Services - 24/7 monitoring, proactive maintenance, help desk
2. Cloud Computing & Hosting - Public/private/hybrid cloud, IaaS/PaaS/SaaS, migration
3. VoIP / IP Telephony - Business phone systems, video conferencing, unified communications
4. IT Security - Network security, endpoint protection, security audits
5. Data Backup & Recovery - Automated backup, business continuity, disaster recovery
6. Custom Software Development - Web/mobile apps, Windows desktop, SaaS platforms
7. AI-powered Business Automation - Workflow automation, machine learning, predictive analytics
8. Firewall & VPN Solutions - Next-gen firewall, secure remote access, network monitoring

IMPORTANT RULES:
- When customers want to contact you, provide the contact email: connectme@myrsv.com
- DO NOT make up phone numbers, addresses, or other contact details
- DO NOT provide pricing information - direct customers to contact the team
- ONLY reference services that are actually listed on the website
- Be professional, helpful, and concise
- Be friendly and welcoming in your responses
- If asked about anything not on the website, suggest contacting the team directly`
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