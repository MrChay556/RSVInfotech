import axios from 'axios';

const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  score?: number;
  action?: string;
  'error-codes'?: string[];
}

/**
 * Verifies a reCAPTCHA v3 token
 * @param token The reCAPTCHA token to verify
 * @param expectedAction Optional expected action to verify
 * @param minScore Minimum score to consider valid (0.0 to 1.0, default 0.5)
 * @returns Success status and score (if available)
 */
export async function verifyRecaptcha(
  token: string,
  expectedAction?: string,
  minScore: number = 0.5
): Promise<{ isValid: boolean; score?: number }> {
  if (!token) {
    console.warn('No reCAPTCHA token provided');
    return { isValid: false };
  }

  try {
    // Build verification request data
    const params = new URLSearchParams({
      secret: RECAPTCHA_SECRET_KEY || '',
      response: token
    });

    // Send verification request to Google
    const response = await axios.post<RecaptchaResponse>(
      RECAPTCHA_VERIFY_URL,
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const data = response.data;
    
    // Check if verification was successful
    if (!data.success) {
      console.warn('reCAPTCHA verification failed:', data['error-codes']);
      return { isValid: false };
    }

    // Validate score if it's available
    if (typeof data.score === 'number') {
      if (data.score < minScore) {
        console.warn(`reCAPTCHA score too low: ${data.score} (threshold: ${minScore})`);
        return { isValid: false, score: data.score };
      }
    }

    // Validate action if expected action was provided
    if (expectedAction && data.action !== expectedAction) {
      console.warn(`reCAPTCHA action mismatch: expected '${expectedAction}', got '${data.action}'`);
      return { isValid: false, score: data.score };
    }

    // All checks passed
    return { 
      isValid: true, 
      score: data.score
    };
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return { isValid: false };
  }
}