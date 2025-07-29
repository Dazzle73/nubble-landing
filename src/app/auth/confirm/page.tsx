'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AuthConfirmPage() {
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#07393C] mx-auto mb-4"></div>
        <p className="text-gray-600">Confirming your email...</p>
      </div>
    </div>
  )
}
