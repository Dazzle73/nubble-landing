'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const features = [
  'Full access to all Nubble features',
  'AI dish analysis & coaching',
  'Progress tracking & analytics',
  'Community support & resources'
]

export default function ThreeTiersWithToggleOnDark() {
  const [isYearly, setIsYearly] = useState(true)
  
  return (
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-[#4ADE80]">Pricing</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Simple, Transparent Pricing
          </p>
        </div>
        
        {/* Toggle */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/20 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !isYearly
                  ? 'bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center ${
                isYearly
                  ? 'bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-[#4ADE80] text-black px-2 py-0.5 rounded-full font-bold">
                -33%
              </span>
            </button>
          </div>
        </div>

        {/* Single Pricing Card */}
        <div className="mx-auto mt-8 max-w-lg">
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl ring-1 ring-white/10 xl:p-10">
            <div className="flex items-center justify-between gap-x-4 min-h-[2.5rem]">
              <h3 className="text-2xl font-semibold text-white">
                Nubble Premium
              </h3>
              <div className="h-7 flex items-center">
                {isYearly && (
                  <p className="rounded-full bg-[#4ADE80] px-3 py-1 text-sm font-semibold text-black">
                    Most Popular
                  </p>
                )}
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              Complete access to all Nubble features to help you overcome snacking addiction.
            </p>
            
            <div className="mt-6">
              <div className="flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-white">
                  €{isYearly ? '8' : '12'}
                </span>
                <span className="text-lg font-semibold text-gray-300">/month</span>
              </div>
              <div className="mt-2 h-5 flex items-center">
                {isYearly && (
                  <p className="text-sm text-gray-400">
                    Billed annually (€96/year)
                  </p>
                )}
              </div>
            </div>
            
            <a
              href="#"
              className="mt-8 block rounded-xl bg-[#4ADE80] px-6 py-3 text-center text-lg font-semibold text-black shadow-sm hover:bg-[#4ADE80]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ADE80] transition-all duration-200"
            >
              Start Your Journey
            </a>
            
            <ul role="list" className="mt-8 space-y-3 text-sm text-gray-300">
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-5 w-5 flex-none text-[#4ADE80]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
