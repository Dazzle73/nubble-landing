'use client'

import { Star } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const testimonials = [
  {
    name: "Sarah M.",
    quote: "Nubble helped me break a 10-year snacking habit. The panic button is a lifesaver when cravings hit.",
    rating: 5,
    timeUsing: "6 months",
    achievement: "Lost 7 kg"
  },
  {
    name: "Marcus T.",
    quote: "The AI coach Ruphus understands my struggles with food addiction. This app saved my life.",
    rating: 5,
    timeUsing: "5 months",
    achievement: "60 days snack-free"
  },
  {
    name: "Emma L.",
    quote: "I love how Nubble focuses on positive change rather than restriction. The community keeps me motivated.",
    rating: 5,
    timeUsing: "4 months",
    achievement: "Healthier habits"
  },
  {
    name: "David K.",
    quote: "The dish analysis opened my eyes to what I was eating. Completely transformed my habits.",
    rating: 5,
    timeUsing: "6 months",
    achievement: "Lost 11 kg"
  },
  {
    name: "Lisa R.",
    quote: "Nubble's compassionate approach made all the difference. The panic button stopped countless binges.",
    rating: 5,
    timeUsing: "4 months",
    achievement: "90 days binge-free"
  },
  {
    name: "James P.",
    quote: "The analytics helped me understand my eating patterns. Best investment for my health.",
    rating: 5,
    timeUsing: "5 months",
    achievement: "Consistent habits"
  },
  {
    name: "Sophie B.",
    quote: "Water tracking and progress photos keep me accountable. Finally in control of my cravings.",
    rating: 5,
    timeUsing: "3 months",
    achievement: "Lost 5 kg"
  },
  {
    name: "Alex R.",
    quote: "Ruphus is like having a therapist in my pocket. The 24/7 support is incredible.",
    rating: 5,
    timeUsing: "6 months",
    achievement: "120 days clean"
  },
  {
    name: "Maria C.",
    quote: "The community support is amazing. Everyone understands the struggle and celebrates wins.",
    rating: 5,
    timeUsing: "5 months",
    achievement: "Lost 9 kg"
  },
  {
    name: "Tom H.",
    quote: "Dish analysis changed how I see food. Now I make informed choices instead of impulse snacking.",
    rating: 5,
    timeUsing: "2 months",
    achievement: "45 days strong"
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-lg min-w-[320px] max-w-[320px] mx-3">
    {/* Rating Stars */}
    <div className="flex items-center mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-[#4ADE80] fill-current" />
      ))}
    </div>

    {/* Quote */}
    <blockquote className="text-gray-200 text-sm leading-relaxed mb-4">
      "{testimonial.quote}"
    </blockquote>

    {/* User Info */}
    <div className="border-t border-white/10 pt-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-400">Using for {testimonial.timeUsing}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-[#4ADE80]">{testimonial.achievement}</p>
        </div>
      </div>
    </div>
  </div>
)

export default function NubbleTestimonials() {
  const firstRow = testimonials.slice(0, 5)
  const secondRow = testimonials.slice(5, 10)

  return (
    <div className="bg-transparent py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-base/7 font-semibold text-[#4ADE80]">Success Stories</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            They loved it, why not you?
          </p>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Join the people who have already transformed their relationship with food thanks to Nubble.
          </p>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          {/* First Row - Left to Right */}
          <div className="flex mb-6 will-change-transform animate-marquee-left hover:pause-animation">
            {/* Two identical sets for seamless marquee loop */}
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={`first-1-${index}`} testimonial={testimonial} />
            ))}
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={`first-2-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex will-change-transform animate-marquee-right hover:pause-animation">
            {/* Two identical sets for seamless marquee loop */}
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={`second-1-${index}`} testimonial={testimonial} />
            ))}
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={`second-2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow-back-and-forth {
          0% {
            transform: translateX(20%);
          }
          50% {
            transform: translateX(-80%);
          }
          100% {
            transform: translateX(20%);
          }
        }
        
        @keyframes flow-back-and-forth-reverse {
          0% {
            transform: translateX(-80%);
          }
          50% {
            transform: translateX(20%);
          }
          100% {
            transform: translateX(-80%);
          }
        }
        
        .animate-marquee-left {
          animation: flow-back-and-forth 60s ease-in-out infinite;
        }
        
        .animate-marquee-right {
          animation: flow-back-and-forth-reverse 60s ease-in-out infinite;
        }
        
        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
