'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { StickyNavbar } from "@/components/blocks/navbars/StickyNavbar";
import { NubbleOnboarding } from "@/components/blocks/onboarding/nubble-onboarding";
import { trackEvent, trackConversion } from "@/components/analytics/GoogleAnalytics";

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
];

export default function WithAppScreenshotOnDark() {
  const [showOnboarding, setShowOnboarding] = useState(false)

  return (
    <div className="bg-transparent font-sans">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-green-700 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl text-center leading-tight">
                <span className="block">Break Free From Snacking</span>
                <span className="block">With Nubble</span>
              </h1>
              <div className="mx-auto max-w-2xl">
                <p className="mt-8 text-lg font-medium leading-8 text-pretty text-muted-foreground">
                Join the community on a mission to overcome snacking addiction and regain control of your relationship with food.
                </p>
              </div>
              <div className="mt-10 flex flex-col items-center justify-center gap-6">
                {/* App Store Buttons */}
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://apps.apple.com/app/nubble"
                    className="transition-transform hover:scale-105"
                    aria-label="Download on the App Store"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent('app_store_click', 'download', 'ios_hero');
                      trackConversion(process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || '', 'ios_download');
                    }}
                  >
                    <img
                      src="/AppStore.svg"
                      alt="Download on the App Store"
                      className="h-12 w-auto"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nubble.app"
                    className="transition-transform hover:scale-105"
                    aria-label="Get it on Google Play"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent('app_store_click', 'download', 'android_hero');
                      trackConversion(process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || '', 'android_download');
                    }}
                  >
                    <img
                      src="/Android.svg"
                      alt="Get it on Google Play"
                      className="h-12 w-auto"
                    />
                  </a>
                </div>

                {/* Join Today Button */}
                <button
                  onClick={() => {
                    setShowOnboarding(true);
                    trackEvent('onboarding_start', 'engagement', 'hero_join_today');
                  }}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#4ADE80] px-8 py-3 text-lg font-semibold text-black shadow-sm hover:bg-[#4ADE80]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ADE80] transition-all duration-200 cursor-pointer"
                >
                  JOIN TODAY
                </button>
                
                {/* 5-Star Rating */}
                <div className="mt-6">
                  <img
                    src="/5-star-rating.png"
                    alt="5-star rating with decorative elements"
                    className="h-60 w-auto opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-green-700 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      
      {/* Onboarding Quiz Modal */}
      {showOnboarding && (
        <NubbleOnboarding 
          isOpen={showOnboarding} 
          onClose={() => setShowOnboarding(false)} 
        />
      )}
    </div>
  )
}