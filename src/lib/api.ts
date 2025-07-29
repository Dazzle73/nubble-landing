// Secure API client for Nubble API proxy
const API_PROXY_URL = 'https://nubble-api-proxy.onrender.com'

// Helper function to make secure API calls
const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_PROXY_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`)
  }
  
  return response.json()
}

// Onboarding and user data functions
export const submitOnboardingQuiz = async (quizData: {
  answers: number[]
  email: string
  totalScore: number
  planDate: string
}) => {
  try {
    const result = await apiCall('/onboarding/submit', {
      method: 'POST',
      body: JSON.stringify(quizData)
    })
    return { data: result.data, error: result.error }
  } catch (error) {
    return { data: null, error: { message: (error as Error).message } }
  }
}

// User profile functions
export const createUserProfile = async (profileData: {
  email: string
  quizScore: number
  planDate: string
  preferences?: any
}) => {
  try {
    const result = await apiCall('/users/profile', {
      method: 'POST',
      body: JSON.stringify(profileData)
    })
    return { data: result.data, error: result.error }
  } catch (error) {
    return { data: null, error: { message: (error as Error).message } }
  }
}

// Stripe/Payment functions (if needed)
export const createPaymentIntent = async (paymentData: {
  amount: number
  currency: string
  planType: 'monthly' | 'yearly'
  email: string
}) => {
  try {
    const result = await apiCall('/payments/create-intent', {
      method: 'POST',
      body: JSON.stringify(paymentData)
    })
    return { data: result.data, error: result.error }
  } catch (error) {
    return { data: null, error: { message: (error as Error).message } }
  }
}

// Email functions
export const sendWelcomeEmail = async (email: string, userData: any) => {
  try {
    const result = await apiCall('/emails/welcome', {
      method: 'POST',
      body: JSON.stringify({ email, userData })
    })
    return { data: result.data, error: result.error }
  } catch (error) {
    return { data: null, error: { message: (error as Error).message } }
  }
}

// Analytics functions
export const trackUserEvent = async (eventData: {
  event: string
  userId?: string
  email?: string
  properties?: any
}) => {
  try {
    const result = await apiCall('/analytics/track', {
      method: 'POST',
      body: JSON.stringify(eventData)
    })
    return { data: result.data, error: result.error }
  } catch (error) {
    return { data: null, error: { message: (error as Error).message } }
  }
}

export default apiCall
