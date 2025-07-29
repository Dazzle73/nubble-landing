'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { CheckCircle, Download, Smartphone, Star, AlertCircle, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import SEOHead from '@/components/seo/SEOHead'

type ConfirmationState = 'loading' | 'success' | 'error' | 'already_confirmed'

function EmailConfirmationContent() {
  const [showAnimation, setShowAnimation] = useState(false)
  const [confirmationState, setConfirmationState] = useState<ConfirmationState>('loading')
  const [errorMessage, setErrorMessage] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const confirmEmail = async () => {
      const token = searchParams.get('token_hash') || searchParams.get('token')
      const type = searchParams.get('type')
      
      // If no token, assume user navigated directly (already confirmed)
      if (!token || type !== 'email') {
        setConfirmationState('already_confirmed')
        setTimeout(() => setShowAnimation(true), 500)
        return
      }

      try {
        // Create a temporary Supabase client for email confirmation
        const { createClient } = await import('@supabase/supabase-js')
        const supabase = createClient(
          'https://kaverone73gmail.supabase.co',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthdmVyb25lNzNnbWFpbCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzM3NTY5MzY1LCJleHAiOjIwNTMxNDUzNjV9.wYlOUdQPKnJRTJOiVNYhQJlLxCGNWNZNMJzCiNYRkYU'
        )

        // Verify the email confirmation token
        const { data, error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: 'email'
        })

        if (error) {
          if (error.message?.includes('already confirmed')) {
            setConfirmationState('already_confirmed')
          } else {
            setConfirmationState('error')
            setErrorMessage(error.message || 'Email confirmation failed')
          }
        } else {
          setConfirmationState('success')
        }
      } catch (error) {
        setConfirmationState('error')
        setErrorMessage('Network error. Please try again.')
      }

      setTimeout(() => setShowAnimation(true), 500)
    }

    confirmEmail()
  }, [searchParams])

  return (
    <>
      <SEOHead
        title="Email Confirmed - Welcome to Nubble!"
        description="Your email has been confirmed! Welcome to Nubble. Download our AI-powered nutrition app and start your journey to overcome snacking addiction and build healthier habits."
        canonical="/email-confirmed"
        noIndex={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#143638] to-black font-sans">
      <div className="relative isolate">
        {/* Background gradient effects */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4ADE80] to-green-700 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              {/* Loading State */}
              {confirmationState === 'loading' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mx-auto mb-8"
                >
                  <Loader2 className="w-16 h-16 text-[#4ADE80] mx-auto animate-spin" />
                  <h1 className="text-3xl font-bold text-white mt-6 mb-4">
                    Confirming your email...
                  </h1>
                  <p className="text-gray-300">
                    Please wait while we verify your email address.
                  </p>
                </motion.div>
              )}

              {/* Success State */}
              {(confirmationState === 'success' || confirmationState === 'already_confirmed') && (
                <>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={showAnimation ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, bounce: 0.4 }}
                    className="mx-auto mb-8"
                  >
                    <div className="relative">
                      <CheckCircle className="w-24 h-24 text-[#4ADE80] mx-auto" />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={showAnimation ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="absolute -inset-4 bg-[#4ADE80]/20 rounded-full blur-xl"
                      />
                    </div>
                  </motion.div>

                  {/* Main Content - Only show for success states */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={showAnimation ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-6"
              >
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  {confirmationState === 'success' ? 'Email Confirmed! 🎉' : 'Welcome Back! 🎉'}
                </h1>
                
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {confirmationState === 'success' 
                    ? 'Welcome to your journey towards freedom from snacking addiction. Your personalized plan is ready and waiting for you.'
                    : 'Your email is already confirmed. Welcome back to your journey towards freedom from snacking addiction.'
                  }
                </p>

                {/* Plan Summary */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto mt-12">
                  <h2 className="text-2xl font-semibold text-white mb-6">Your Personalized Plan</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-[#4ADE80]">100</div>
                      <div className="text-sm text-gray-400">Days to Freedom</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-[#4ADE80]">24/7</div>
                      <div className="text-sm text-gray-400">AI Support</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-[#4ADE80]">∞</div>
                      <div className="text-sm text-gray-400">Dish Analysis</div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-[#4ADE80]/10 border border-[#4ADE80]/30 rounded-lg">
                    <p className="text-white text-sm">
                      <strong>Your custom plan includes:</strong> AI-powered dish analysis, 24/7 panic button support, 
                      progress tracking, personalized coaching from Ruphus AI, and a supportive community.
                    </p>
                  </div>
                </div>

                {/* Download Section */}
                <div className="mt-12 space-y-8">
                  <h3 className="text-2xl font-semibold text-white">
                    Ready to Start Your Journey?
                  </h3>
                  
                  <p className="text-gray-300">
                    Download Nubble now and begin your transformation today.
                  </p>

                  {/* App Store Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="transition-transform"
                      aria-label="Download on the App Store"
                    >
                      <img
                        src="/AppStore.svg"
                        alt="Download on the App Store"
                        className="h-14 w-auto"
                      />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="transition-transform"
                      aria-label="Get it on Google Play"
                    >
                      <img
                        src="/Android.svg"
                        alt="Get it on Google Play"
                        className="h-14 w-auto"
                      />
                    </motion.a>
                  </div>

                  {/* 5-Star Rating */}
                  <div className="mt-8">
                    <img
                      src="/5-star-rating.png"
                      alt="5-star rating with decorative elements"
                      className="h-16 w-auto mx-auto opacity-90"
                    />
                  </div>
                </div>

                {/* Additional Benefits */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={showAnimation ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-[#4ADE80]/20 rounded-full flex items-center justify-center mx-auto">
                      <Smartphone className="w-8 h-8 text-[#4ADE80]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Instant Access</h4>
                    <p className="text-gray-400 text-sm">
                      Start using your personalized plan immediately after download
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={showAnimation ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-[#4ADE80]/20 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-[#4ADE80]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Proven Results</h4>
                    <p className="text-gray-400 text-sm">
                      Join thousands who have successfully overcome snacking addiction
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={showAnimation ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-[#4ADE80]/20 rounded-full flex items-center justify-center mx-auto">
                      <Star className="w-8 h-8 text-[#4ADE80]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Premium Support</h4>
                    <p className="text-gray-400 text-sm">
                      24/7 AI coaching and community support whenever you need it
                    </p>
                  </motion.div>
                </div>

                {/* Footer Message */}
                <div className="mt-16 p-6 bg-white/5 border border-white/20 rounded-xl max-w-2xl mx-auto">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">Remember:</strong> Your journey to freedom from snacking addiction 
                    starts with a single step. Download Nubble today and take control of your relationship with food. 
                    You've got this! 💪
                  </p>
                </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom gradient effect */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4ADE80] to-green-700 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
    </>
  )
}

// Loading component for Suspense fallback
function EmailConfirmationLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#143638] to-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#07393C] mx-auto mb-4"></div>
        <p className="text-white">Loading email confirmation...</p>
      </div>
    </div>
  )
}

// Main export with Suspense boundary
export default function EmailConfirmedPage() {
  return (
    <Suspense fallback={<EmailConfirmationLoading />}>
      <EmailConfirmationContent />
    </Suspense>
  )
}
