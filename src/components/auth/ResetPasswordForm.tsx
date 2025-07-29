'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import { trackEvent } from '@/components/analytics/GoogleAnalytics'

interface FormState {
  email: string
  isSubmitting: boolean
  isSubmitted: boolean
  error: string | null
}

export default function ResetPasswordForm() {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  })

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset error state
    setFormState(prev => ({ ...prev, error: null }))

    // Validate email
    if (!formState.email) {
      setFormState(prev => ({ ...prev, error: 'Email address is required' }))
      return
    }

    if (!validateEmail(formState.email)) {
      setFormState(prev => ({ ...prev, error: 'Please enter a valid email address' }))
      return
    }

    // Track the password reset attempt
    trackEvent('password_reset_attempt', 'auth', 'reset_password_page')

    setFormState(prev => ({ ...prev, isSubmitting: true }))

    try {
      // Import Supabase reset function
      const { resetPassword } = await import('@/lib/supabase')
      
      // Call Supabase reset password
      const { error } = await resetPassword(formState.email)
      
      if (error) {
        setFormState(prev => ({ 
          ...prev, 
          isSubmitting: false, 
          error: error.message 
        }))
        return
      }
      
      // Success
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        isSubmitted: true 
      }))

      // Track successful submission
      trackEvent('password_reset_sent', 'auth', 'reset_password_page')
      
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        error: 'Something went wrong. Please try again.' 
      }))
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ 
      ...prev, 
      email: e.target.value,
      error: null // Clear error when user starts typing
    }))
  }

  const handleBackToForm = () => {
    setFormState({
      email: '',
      isSubmitting: false,
      isSubmitted: false,
      error: null,
    })
  }

  if (formState.isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg"
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-[#4ADE80]" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Check your email
          </h2>
          <p className="text-gray-300 mb-6">
            We've sent a password reset link to{' '}
            <span className="font-medium text-white">{formState.email}</span>
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Didn't receive the email? Check your spam folder or try again.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={handleBackToForm}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-white/20 rounded-xl text-white hover:bg-white/5 transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Try different email
            </button>
            
            <a
              href="mailto:"
              className="block w-full px-4 py-3 bg-[#4ADE80] text-black font-semibold rounded-xl hover:bg-[#4ADE80]/90 transition-all duration-200 text-center"
            >
              Open email app
            </a>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formState.email}
              onChange={handleEmailChange}
              className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent transition-all duration-200"
              placeholder="Enter your email address"
              disabled={formState.isSubmitting}
            />
          </div>
        </div>

        {/* Error Message */}
        {formState.error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
          >
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">{formState.error}</span>
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formState.isSubmitting || !formState.email}
          className="w-full flex items-center justify-center px-4 py-3 bg-[#4ADE80] text-black font-semibold rounded-xl hover:bg-[#4ADE80]/90 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {formState.isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent mr-2"></div>
              Sending reset link...
            </>
          ) : (
            'Send reset link'
          )}
        </button>

        {/* Help Text */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            We'll send you a secure link to reset your password. The link will expire in 24 hours.
          </p>
        </div>
      </form>
    </motion.div>
  )
}
