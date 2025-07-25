'use client'

import { Timer, Users, Search, Droplets, TrendingUp, Bot } from 'lucide-react'

const benefits = [
  {
    icon: Timer,
    title: "Panic Button",
    description: "An efficient, real-time panic button quickly extinguishes snacking urges, helping you regain control in moments of weakness."
  },
  {
    icon: Users,
    title: "Community",
    description: "Join our supportive Discord community where members help each other stay accountable and share their recovery journey together."
  },
  {
    icon: Search,
    title: "AI Dish Analysis",
    description: "Get instant analysis of any dish—calories, macros, satiety duration, and a health score out of 10 tailored specifically for you."
  },
  {
    icon: Bot,
    title: "Meet Ruphus!",
    description: "Our AI nutrition coach is here 24/7 to guide you through tough moments, offering personalized support for food addiction recovery."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your weight evolution with before/after photos and comprehensive stats on your eating patterns and snacking frequency."
  },
  {
    icon: Droplets,
    title: "Water Tracking",
    description: "Stay hydrated with smart water intake tracking that helps reduce cravings and supports your overall health journey."
  }
]

export default function NubbleBenefitsTable() {
  return (
    <section id="features" className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-base/7 font-semibold text-[#4ADE80] mb-4">
            Features
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Experience life changing benefits
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Unlock a healthier, more focused, and fulfilling life.
          </p>
        </div>
        
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              const isLastRow = index >= benefits.length - (benefits.length % 3 || 3)
              const isRightColumn = (index + 1) % 3 === 0
              const isMiddleColumn = (index + 1) % 3 === 2
              
              return (
                <div 
                  key={index}
                  className={`p-8 hover:bg-black/30 transition-all duration-300 ${
                    !isLastRow ? 'border-b border-white/10' : ''
                  } ${
                    !isRightColumn ? 'lg:border-r border-white/10' : ''
                  } ${
                    isMiddleColumn ? 'md:border-r border-white/10 lg:border-r' : ''
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#4ADE80]/20 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
