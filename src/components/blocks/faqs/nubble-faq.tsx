'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQs = [
  {
    question: "Is Nubble made for me?",
    answer: "Nubble is designed for anyone struggling with snacking addiction, emotional eating, or wanting to build a healthier relationship with food. Take our quick quiz to discover if Nubble's AI-powered approach is right for your specific challenges and goals.",
    hasQuiz: true
  },

  {
    question: "How accurate is the AI dish analysis?",
    answer: "The AI was trained on more than 7.8 million dishes. It provides comprehensive insights including calories, macronutrients, satiety duration, and a health score. It is designed to help you make more informed choices about your diet."
  },
  {
    question: "Can I use Nubble if I'm not trying to lose weight?",
    answer: "Absolutely! Nubble isn't about weight loss - it's about developing a healthier relationship with food and overcoming snacking addiction. Whether your goal is to stop binge eating, reduce emotional snacking, or simply feel more in control around food, Nubble supports your journey."
  },
  {
    question: "How long does it take to see results with Nubble?",
    answer: "Many users report feeling more in control within the first few weeks. However, building a healthier relationship with food is a journey that varies for everyone. Our users typically see significant improvements in their snacking habits and overall relationship with food within 2-3 months of consistent use."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your Nubble subscription at any time through your account settings. There are no cancellation fees or penalties. If you cancel, you'll continue to have access to Nubble until the end of your current billing period."
  }
]

export default function NubbleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-base/7 font-semibold text-[#4ADE80]">FAQ</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently asked questions
          </p>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Nubble and how it can help you overcome snacking addiction.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-[#4ADE80]" />
                    ) : (
                      <Plus className="h-6 w-6 text-[#4ADE80]" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 border-t border-white/10">
                        <p className="text-gray-300 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                        {faq.hasQuiz && (
                          <div className="mt-6">
                            <a
                              href="/quiz"
                              className="inline-flex items-center justify-center rounded-xl bg-[#4ADE80] px-6 py-3 font-semibold text-black shadow-sm hover:bg-[#4ADE80]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ADE80] transition-all duration-200"
                            >
                              Take the Quiz
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}
