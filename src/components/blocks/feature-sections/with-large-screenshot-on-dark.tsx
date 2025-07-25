import {
  BookCopy,
  Filter,
  PieChart,
  ScanLine,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { NutritionBarChartAnimation } from "./nutrition-bar-chart-animation"

const features = [
  {
    name: 'Daily nutrition breakdowns',
    description: 'Get a detailed view of your macros and micronutrients each day.',
    icon: PieChart,
  },
  {
    name: 'Weekly trend analysis',
    description: 'See your progress over time with weekly reports and charts.',
    icon: TrendingUp,
  },
  {
    name: 'Consumption pattern tracking',
    description: 'Understand your eating habits and identify areas for improvement.',
    icon: ScanLine,
  },
  {
    name: 'Personalized recommendations',
    description: 'Receive AI-powered suggestions tailored to your goals and preferences.',
    icon: Sparkles,
  },
  {
    name: 'Recipe & Meal Planning',
    description: 'Discover new recipes and plan your meals to stay on track.',
    icon: BookCopy,
  },
  {
    name: 'Advanced Filtering',
    description:
      'Filter your data by meal, time, or specific nutrients for granular insights.',
    icon: Filter,
  },
]

export default function WithLargeScreenshotOnDark() {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Animation Left */}
          <div className="flex items-center justify-center">
            <NutritionBarChartAnimation />
          </div>

          {/* Text Right */}
          <div className="lg:pt-4 lg:pl-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">Comprehensive Analytics</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl sm:text-balance">
                Dive deep into your nutrition data
              </p>
              <p className="mt-6 text-lg/8 text-muted-foreground">
                Track daily averages, monitor consumption patterns, and get actionable insights to optimize your health journey with our advanced analytics.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-primary"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}