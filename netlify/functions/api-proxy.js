const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Get the backend URL from environment variable
  const BACKEND_URL = process.env.BACKEND_URL || 'https://your-backend-url.com';
  
  // Get the path from the event
  const path = event.path.replace('/.netlify/functions/api-proxy', '');
  
  // Construct the full URL
  const url = `${BACKEND_URL}${path}`;
  
  try {
    // Forward the request to the backend
    const response = await fetch(url, {
      method: event.httpMethod,
      headers: {
        'Content-Type': 'application/json',
        ...event.headers,
      },
      body: event.httpMethod !== 'GET' ? event.body : undefined,
    });
    
    const data = await response.text();
    
    return {
      statusCode: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      },
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
}; 