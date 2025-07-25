import type { Metadata } from 'next'
import ResetPasswordConfirmForm from '@/components/auth/ResetPasswordConfirmForm'

export const metadata: Metadata = {
  title: 'Set New Password | Nubble',
  description: 'Set a new password for your Nubble account. Choose a strong password to keep your account secure.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ResetPasswordConfirmPage() {
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
            Set new password
          </h1>
          <p className="text-gray-300">
            Choose a strong password to keep your Nubble account secure.
          </p>
        </div>

        {/* Reset Password Confirm Form */}
        <ResetPasswordConfirmForm />

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
