'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle, Check, X } from 'lucide-react'
import { trackEvent } from '@/components/analytics/GoogleAnalytics'

interface FormState {
  password: string
  confirmPassword: string
  showPassword: boolean
  showConfirmPassword: boolean
  isSubmitting: boolean
  isSubmitted: boolean
  error: string | null
}

interface PasswordRequirement {
  label: string
  test: (password: string) => boolean
}

const passwordRequirements: PasswordRequirement[] = [
  { label: 'At least 8 characters', test: (p) => p.length >= 8 },
  { label: 'Contains uppercase letter', test: (p) => /[A-Z]/.test(p) },
  { label: 'Contains lowercase letter', test: (p) => /[a-z]/.test(p) },
  { label: 'Contains number', test: (p) => /\d/.test(p) },
  { label: 'Contains special character', test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
]

export default function ResetPasswordConfirmForm() {
  const [formState, setFormState] = useState<FormState>({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  })

  const validatePassword = (password: string): boolean => {
    return passwordRequirements.every(req => req.test(password))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset error state
    setFormState(prev => ({ ...prev, error: null }))

    // Validate password
    if (!formState.password) {
      setFormState(prev => ({ ...prev, error: 'Password is required' }))
      return
    }

    if (!validatePassword(formState.password)) {
      setFormState(prev => ({ ...prev, error: 'Password does not meet requirements' }))
      return
    }

    if (formState.password !== formState.confirmPassword) {
      setFormState(prev => ({ ...prev, error: 'Passwords do not match' }))
      return
    }

    // Track the password reset completion attempt
    trackEvent('password_reset_complete', 'auth', 'reset_password_confirm_page')

    setFormState(prev => ({ ...prev, isSubmitting: true }))

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demo purposes, always succeed
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        isSubmitted: true 
      }))

      // Track successful password reset
      trackEvent('password_reset_success', 'auth', 'reset_password_confirm_page')
      
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        error: 'Something went wrong. Please try again.' 
      }))
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ 
      ...prev, 
      password: e.target.value,
      error: null
    }))
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ 
      ...prev, 
      confirmPassword: e.target.value,
      error: null
    }))
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
            Password updated successfully
          </h2>
          <p className="text-gray-300 mb-8">
            Your password has been updated. You can now sign in with your new password.
          </p>
          
          <a
            href="#"
            className="block w-full px-4 py-3 bg-[#4ADE80] text-black font-semibold rounded-xl hover:bg-[#4ADE80]/90 transition-all duration-200 text-center"
          >
            Continue to sign in
          </a>
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
        {/* New Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            New password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              name="password"
              type={formState.showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              required
              value={formState.password}
              onChange={handlePasswordChange}
              className="block w-full pl-10 pr-12 py-3 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent transition-all duration-200"
              placeholder="Enter new password"
              disabled={formState.isSubmitting}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setFormState(prev => ({ ...prev, showPassword: !prev.showPassword }))}
            >
              {formState.showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Password Requirements */}
        {formState.password && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-300">Password requirements:</p>
            <div className="space-y-1">
              {passwordRequirements.map((req, index) => {
                const isValid = req.test(formState.password)
                return (
                  <div key={index} className="flex items-center gap-2">
                    {isValid ? (
                      <Check className="h-4 w-4 text-[#4ADE80]" />
                    ) : (
                      <X className="h-4 w-4 text-gray-400" />
                    )}
                    <span className={`text-xs ${isValid ? 'text-[#4ADE80]' : 'text-gray-400'}`}>
                      {req.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Confirm Password Input */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
            Confirm new password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={formState.showConfirmPassword ? 'text' : 'password'}
              autoComplete="new-password"
              required
              value={formState.confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="block w-full pl-10 pr-12 py-3 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent transition-all duration-200"
              placeholder="Confirm new password"
              disabled={formState.isSubmitting}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setFormState(prev => ({ ...prev, showConfirmPassword: !prev.showConfirmPassword }))}
            >
              {formState.showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
              )}
            </button>
          </div>
          {formState.confirmPassword && formState.password !== formState.confirmPassword && (
            <p className="mt-1 text-xs text-red-400">Passwords do not match</p>
          )}
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
          disabled={
            formState.isSubmitting || 
            !formState.password || 
            !formState.confirmPassword ||
            !validatePassword(formState.password) ||
            formState.password !== formState.confirmPassword
          }
          className="w-full flex items-center justify-center px-4 py-3 bg-[#4ADE80] text-black font-semibold rounded-xl hover:bg-[#4ADE80]/90 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {formState.isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent mr-2"></div>
              Updating password...
            </>
          ) : (
            'Update password'
          )}
        </button>

        {/* Security Notice */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Make sure you're on a secure network and device when setting your new password.
          </p>
        </div>
      </form>
    </motion.div>
  )
}
