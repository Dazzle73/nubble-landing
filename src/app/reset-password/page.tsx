import type { Metadata } from 'next'
import ResetPasswordForm from '@/components/auth/ResetPasswordForm'

export const metadata: Metadata = {
  title: 'Reset Password | Nubble',
  description: 'Reset your Nubble account password. Enter your email address and we\'ll send you a link to reset your password.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#143638] to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/nubble-logo-white.png"
              alt="Nubble"
              className="h-12 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Reset your password
          </h1>
          <p className="text-gray-300">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Reset Password Form */}
        <ResetPasswordForm />

        {/* Back to App */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Remember your password?{' '}
            <a
              href="#"
              className="font-medium text-[#4ADE80] hover:text-[#4ADE80]/80 transition-colors"
            >
              Back to sign in
            </a>
          </p>
        </div>

        {/* Help */}
        <div className="text-center pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500">
            Need help? Contact our{' '}
            <a
              href="mailto:nubble.help@gmail.com"
              className="text-[#4ADE80] hover:text-[#4ADE80]/80 transition-colors"
            >
              support team
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
