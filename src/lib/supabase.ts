// Secure API proxy configuration
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

// Auth helper functions using secure API proxy
export const signUp = async (email: string, password: string) => {
  try {
    const result = await apiCall('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        redirectTo: `${window.location.origin}/email-confirmed`
      })
    })
    return { data: result.data, error: result.error }
  } catch (error) {
    return { data: null, error: { message: (error as Error).message } }
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const result = await apiCall('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    return { data: result.data, error: result.error }
  } catch (error) {
    return { data: null, error: { message: (error as Error).message } }
  }
}

export const signOut = async () => {
  try {
    const result = await apiCall('/auth/signout', {
      method: 'POST'
    })
    return { error: result.error }
  } catch (error) {
    return { error: { message: (error as Error).message } }
  }
}

export const resetPassword = async (email: string) => {
  try {
    const result = await apiCall('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({
        email,
        redirectTo: `${window.location.origin}/reset-password`
      })
    })
    return { data: result.data, error: result.error }
  } catch (error) {
    return { data: null, error: { message: (error as Error).message } }
  }
}

export const updatePassword = async (password: string) => {
  try {
    const result = await apiCall('/auth/update-password', {
      method: 'POST',
      body: JSON.stringify({ password })
    })
    return { data: result.data, error: result.error }
  } catch (error) {
    return { data: null, error: { message: (error as Error).message } }
  }
}

// Get current user
export const getCurrentUser = async () => {
  try {
    const result = await apiCall('/auth/user', {
      method: 'GET'
    })
    return { user: result.user, error: result.error }
  } catch (error) {
    return { user: null, error: { message: (error as Error).message } }
  }
}

// Session management (simplified for API proxy)
export const getSession = async () => {
  try {
    const result = await apiCall('/auth/session', {
      method: 'GET'
    })
    return { session: result.session, error: result.error }
  } catch (error) {
    return { session: null, error: { message: (error as Error).message } }
  }
}
