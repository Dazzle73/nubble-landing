"use client";

import { PieChart, ScanSearch, Target, TrendingUp } from 'lucide-react'

const features = [
  {
    name: 'AI-powered food recognition',
    icon: ScanSearch,
  },
  {
    name: 'Real-time macro tracking',
    icon: PieChart,
  },
  {
    name: 'Personalized daily goals',
    icon: Target,
  },
  {
    name: 'Visual progress indicators',
    icon: TrendingUp,
  },
]

export default function WithProductScreenshotOnLeft() {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">Smart Calorie Tracking</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                AI-Powered Nutrition Insights
              </p>
              <p className="mt-6 text-lg leading-8 text-text-secondary">
                Get real-time insights into your daily nutrition with AI-powered calorie counting. Track
                macronutrients, set personalized goals, and see your progress with beautiful, intuitive
                visualizations.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-text-secondary lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-text-primary">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-primary" />
                      {feature.name}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Nubble Calorie Tracking Screenshot"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753087511866-jlxi04nlq.webp"
              width={600}
              height={350}
              className="h-72 sm:h-80 md:h-96 max-w-full object-contain rounded-xl shadow-xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}