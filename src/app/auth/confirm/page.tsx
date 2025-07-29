'use client'

import { useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function AuthConfirmContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get all URL parameters
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type')
    
    // Redirect to our email-confirmed page with the same parameters
    const params = new URLSearchParams()
    if (token_hash) params.set('token_hash', token_hash)
    if (type) params.set('type', type)
    
    const redirectUrl = `/email-confirmed?${params.toString()}`
    router.replace(redirectUrl)
  }, [router, searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#143638] to-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#07393C] mx-auto mb-4"></div>
        <p className="text-white">Confirming your email...</p>
      </div>
    </div>
  )
}

// Loading component for Suspense fallback
function AuthConfirmLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#143638] to-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white">Loading...</p>
      </div>
    </div>
  )
}

// Main export with Suspense boundary
export default function AuthConfirmPage() {
  return (
    <Suspense fallback={<AuthConfirmLoading />}>
      <AuthConfirmContent />
    </Suspense>
  )
}
