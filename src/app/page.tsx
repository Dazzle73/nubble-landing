'use client'

import { useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import WithAppScreenshotOnDark from "@/components/blocks/heros/with-app-screenshot-on-dark";
import NubbleFinalCTA from "@/components/blocks/ctas/nubble-final-cta";
import { LandingAnchors } from "@/components/blocks/landing/LandingAnchors";
import { StickyNavbar } from "@/components/blocks/navbars/StickyNavbar";
import { SimpleFooterWithFourGrids } from "@/components/blocks/footers/simple-footer-with-four-grids";

function HomeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if this is an email confirmation link
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type')
    
    if (token_hash && type === 'email') {
      // Redirect to email confirmation page with parameters
      const params = new URLSearchParams()
      params.set('token_hash', token_hash)
      params.set('type', type)
      
      router.replace(`/email-confirmed?${params.toString()}`)
      return
    }
  }, [router, searchParams])

  return (
    <main className="bg-gradient-to-b from-[#143638] to-black text-white antialiased">
      {/* Render StickyNavbar ONCE at root for persistent and proper sticky behavior */}
      <StickyNavbar />
      <WithAppScreenshotOnDark />
      <LandingAnchors />
      <NubbleFinalCTA />
      <SimpleFooterWithFourGrids />
    </main>
  );
}

// Loading component for Suspense fallback
function HomeLoading() {
  return (
    <main className="bg-gradient-to-b from-[#143638] to-black text-white antialiased min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white">Loading...</p>
      </div>
    </main>
  )
}

// Main export with Suspense boundary
export default function Home() {
  return (
    <Suspense fallback={<HomeLoading />}>
      <HomeContent />
    </Suspense>
  )
}