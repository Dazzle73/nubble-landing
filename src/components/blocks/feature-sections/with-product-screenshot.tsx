import { History, Target, Trophy, TrendingUp } from 'lucide-react'
import { AnimatedWeightCurve } from './animated-weight-curve'

const features = [
  {
    name: 'Weight goal tracking',
    description: 'Set personalized targets and log entries to stay on track with your goals.',
    icon: Target,
  },
  {
    name: 'Progress visualization',
    description: 'Intuitive charts clearly visualize your weight trends over time.',
    icon: TrendingUp,
  },
  {
    name: 'Achievement milestones',
    description: 'Get recognized for hitting milestones, keeping you motivated.',
    icon: Trophy,
  },
  {
    name: 'Historical data analysis',
    description: 'Access your full weight history to understand long-term patterns.',
    icon: History,
  },
]

export default function WithProductScreenshot() {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Monitor Your Progress
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Watch your health journey unfold with comprehensive progress tracking. Set weight goals, monitor trends,
                and celebrate achievements with detailed analytics and visual feedback.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-primary" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Animated SVG weight curve replaces video */}
          <div className="flex items-center justify-center"><AnimatedWeightCurve /></div>
        </div>
      </div>
    </div>
  )
}