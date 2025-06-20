export const handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: 'Contact test function is working!',
        environment: {
          hasSmtpHost: !!process.env.SMTP_HOST,
          hasSmtpUser: !!process.env.SMTP_USER,
          hasSmtpPass: !!process.env.SMTP_PASS,
          hasEmailFrom: !!process.env.EMAIL_FROM,
          hasEmailTo: !!process.env.EMAIL_TO,
          hasRecaptchaSecret: !!process.env.RECAPTCHA_SECRET_KEY,
        }
      }),
    };
  }

  if (event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body);
      
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          success: true,
          message: 'Test contact form received!',
          receivedData: body,
          environment: {
            hasSmtpHost: !!process.env.SMTP_HOST,
            hasSmtpUser: !!process.env.SMTP_USER,
            hasSmtpPass: !!process.env.SMTP_PASS,
            hasEmailFrom: !!process.env.EMAIL_FROM,
            hasEmailTo: !!process.env.EMAIL_TO,
          }
        }),
      };
    } catch (error) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          success: false,
          message: 'Invalid JSON in request body',
          error: error.message
        }),
      };
    }
  }

  return {
    statusCode: 405,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Method not allowed' }),
  };
}; 