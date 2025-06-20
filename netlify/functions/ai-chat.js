import axios from 'axios';

// Simple AI responses based on keywords
const aiResponses = {
  greeting: [
    "Hello! I'm RSV Infotech's AI assistant. How can I help you with your IT needs today?",
    "Hi there! Welcome to RSV Infotech. What IT services are you looking for?",
    "Greetings! I'm here to help you with IT solutions. What can I assist you with?"
  ],
  services: [
    "We offer comprehensive IT services including:\n• AI Solutions & Machine Learning\n• Cloud Technologies & Migration\n• IT Security & Cybersecurity\n• Software Development\n• IT Networking\n• VoIP Solutions\n\nWhich service interests you most?",
    "Our IT services cover everything from AI implementation to network security. We specialize in:\n• Custom software development\n• Cloud infrastructure\n• Cybersecurity protection\n• AI and automation\n\nWould you like to know more about any specific service?",
    "At RSV Infotech, we provide end-to-end IT solutions. Our key services are:\n• AI and Machine Learning\n• Cloud Computing\n• IT Security\n• Software Development\n• Network Infrastructure\n• VoIP Systems\n\nWhat's your primary IT challenge?"
  ],
  pricing: [
    "Our pricing varies based on your specific needs and project scope. We offer competitive rates and flexible payment plans. Would you like to schedule a consultation to discuss your requirements?",
    "We provide customized pricing based on your business needs. Each project is unique, so we'd love to understand your requirements better. Can we arrange a call to discuss this?",
    "Our pricing is project-based and depends on the complexity and scope of your IT needs. Let's have a conversation about your specific requirements to provide an accurate quote."
  ],
  contact: [
    "Great! You can reach us through:\n• Email: contact@myrsv.com\n• Phone: +65 XXXX XXXX\n• Contact form on our website\n\nWould you like me to help you schedule a consultation?",
    "You can contact our team via:\n• Our contact form (click the 'Contact Us' button)\n• Email: contact@myrsv.com\n• Phone: +65 XXXX XXXX\n\nWe typically respond within 24 hours!",
    "To get in touch with our team:\n• Fill out the contact form on our website\n• Email us at contact@myrsv.com\n• Call us at +65 XXXX XXXX\n\nWe're here to help with your IT needs!"
  ],
  default: [
    "That's an interesting question! I'd be happy to connect you with our expert team who can provide detailed information about this. Would you like to schedule a consultation?",
    "Great question! Our specialists would be the best people to answer this in detail. Can I help you schedule a call with our team?",
    "I'd love to help you with that! Let me connect you with our expert team who can provide comprehensive information. Would you like to arrange a consultation?"
  ]
};

// Function to analyze user message and generate response
function generateResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Check for greetings
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return getRandomResponse(aiResponses.greeting);
  }
  
  // Check for services
  if (message.includes('service') || message.includes('what do you do') || message.includes('offer') || 
      message.includes('ai') || message.includes('cloud') || message.includes('security') || 
      message.includes('software') || message.includes('network') || message.includes('voip')) {
    return getRandomResponse(aiResponses.services);
  }
  
  // Check for pricing
  if (message.includes('price') || message.includes('cost') || message.includes('how much') || 
      message.includes('quote') || message.includes('pricing')) {
    return getRandomResponse(aiResponses.pricing);
  }
  
  // Check for contact
  if (message.includes('contact') || message.includes('email') || message.includes('phone') || 
      message.includes('call') || message.includes('reach') || message.includes('get in touch')) {
    return getRandomResponse(aiResponses.contact);
  }
  
  // Default response
  return getRandomResponse(aiResponses.default);
}

function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

export const handler = async (event, context) => {
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
    
    // Generate AI response
    const aiResponse = generateResponse(message);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
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