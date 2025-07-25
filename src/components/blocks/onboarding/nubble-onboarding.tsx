'use client'

import React, { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { X, ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface OnboardingProps {
  isOpen: boolean
  onClose: () => void
}

interface QuizAnswer {
  questionId: number
  answer: number
}

const questions = [
  {
    id: 1,
    question: "When did you first start struggling with snacking?",
    options: [
      "During childhood (early emotional patterns)",
      "During adolescence (stress and identity issues)", 
      "During relationships (emotional eating patterns)",
      "After trauma or major life changes"
    ]
  },
  {
    id: 2,
    question: "How often do you typically snack throughout the day?",
    options: [
      "More than 3 times a day",
      "1-2 times a day",
      "4 times a week", 
      "Less than 3 times a week"
    ]
  },
  {
    id: 3,
    question: "Has your snacking frequency increased over time?",
    options: [
      "Yes, significantly",
      "Yes, somewhat",
      "No, it's stayed the same",
      "No, it's decreased"
    ]
  },
  {
    id: 4,
    question: "Do you find yourself craving more sugary or processed foods?",
    options: [
      "Yes, constantly",
      "Yes, often",
      "Sometimes",
      "Rarely or never"
    ]
  },
  {
    id: 5,
    question: "Do you snack when you're not actually hungry?",
    options: [
      "Always",
      "Most of the time",
      "Sometimes", 
      "Rarely or never"
    ]
  },
  {
    id: 6,
    question: "What is your gender?",
    options: [
      "Male",
      "Female", 
      "Non-binary",
      "Prefer not to say"
    ]
  },
  {
    id: 7,
    question: "Do you find it difficult to stop eating once you start snacking?",
    options: [
      "Always",
      "Most of the time",
      "Sometimes",
      "Rarely or never"
    ]
  },
  {
    id: 8,
    question: "Do you use snacking as a way to cope with stress or emotions?",
    options: [
      "Always",
      "Most of the time", 
      "Sometimes",
      "Rarely or never"
    ]
  },
  {
    id: 9,
    question: "Do you snack when feeling bored or anxious?",
    options: [
      "Always",
      "Most of the time",
      "Sometimes", 
      "Rarely or never"
    ]
  },
  {
    id: 10,
    question: "Do you eat in secret?",
    options: [
      "Everytime",
      "Often",
      "Sometimes",
      "Rarely or never"
    ]
  },
  {
    id: 11,
    question: "Have you ever spent money impulsively on food?",
    options: [
      "Yes, frequently",
      "Yes, sometimes", 
      "Yes, rarely",
      "No, never"
    ]
  }
]

const symptoms = [
  "Feeling guilty after snacking",
  "Lack of energy throughout the day",
  "Difficulty concentrating",
  "Poor self-control around food",
  "Weight gain or fluctuation",
  "Digestive issues",
  "Mood swings related to eating",
  "Social anxiety around food"
]

// Benefits slides removed as requested

const features = [
  {
    title: "AI-Powered Dish Analysis",
    description: "Get instant insights on calories, macros, satiety duration, and health scores to make informed food choices.",
    icon: "🔍"
  },
  {
    title: "Panic Button Support", 
    description: "24/7 support when cravings hit. Get immediate help and strategies to overcome snacking urges.",
    icon: "🚨"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your snacking-free streaks, weight changes, and overall progress with detailed analytics.",
    icon: "📊"
  },
  {
    title: "Ruphus AI Coach",
    description: "Your personal AI nutrition coach available 24/7 to provide guidance, motivation, and expert advice.",
    icon: "🤖"
  },
  {
    title: "Community Support",
    description: "Connect with others on the same journey. Share experiences, get support, and celebrate victories together.",
    icon: "👥"
  }
]

const testimonials = [
  {
    name: "Sarah",
    avatar: "👩",
    text: "I feel like a different person. I'm much more in control around food.",
    detail: "After only 3 weeks, I feel like a different person. I'm much more aware of my eating patterns and have better self-control around snack foods."
  },
  {
    name: "Michael", 
    avatar: "👨",
    text: "My energy levels have improved dramatically after just one month.",
    detail: "I was skeptical at first, but the results speak for themselves. My energy is more stable throughout the day, and I'm not constantly thinking about food."
  },
  {
    name: "Emma",
    avatar: "👩",
    text: "The improvements I've seen are incredible.",
    detail: "I've noticed significant changes in my relationship with food. I can now enjoy meals without the guilt and anxiety I used to feel."
  }
]

export function NubbleOnboarding({ isOpen, onClose }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [userInfo, setUserInfo] = useState({ name: '', age: '' })
  const [isCalculating, setIsCalculating] = useState(false)
  const [calculationProgress, setCalculationProgress] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [clickedAnswer, setClickedAnswer] = useState<string | null>(null)

  const steps = [
    'welcome',
    ...questions.map((_, i) => `question-${i + 1}`),
    'user-info',
    'calculating',
    'results',
    'symptoms',
    'goals',
    'plan',
    'complete'
  ]

  useEffect(() => {
    if (currentStep === steps.indexOf('calculating')) {
      setIsCalculating(true)
      const timer = setInterval(() => {
        setCalculationProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer)
            setIsCalculating(false)
            setShowResults(true)
            // Automatically proceed to results after a short delay
            setTimeout(() => {
              nextStep()
            }, 1000)
            return 100
          }
          return prev + 2
        })
      }, 50)
      return () => clearInterval(timer)
    }
  }, [currentStep, steps])

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const clickId = `q${questionIndex}-a${answerIndex}`
    setClickedAnswer(clickId)
    
    const newAnswers = [...answers]
    const existingIndex = newAnswers.findIndex(a => a.questionId === questionIndex + 1)
    
    // Invert scoring: first answer (index 0) = highest score (3), last answer = lowest score (0)
    const invertedScore = questions[questionIndex].options.length - 1 - answerIndex
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex].answer = invertedScore
    } else {
      newAnswers.push({ questionId: questionIndex + 1, answer: invertedScore })
    }
    
    setAnswers(newAnswers)
    
    // Clear the clicked state and proceed to next step
    setTimeout(() => {
      setClickedAnswer(null)
      nextStep()
    }, 500)
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const skipTest = () => {
    setCurrentStep(steps.indexOf('user-info'))
  }

  const calculateScore = () => {
    // Simple scoring algorithm based on answers
    const totalQuestions = questions.length
    const totalPoints = answers.reduce((sum, answer) => sum + answer.answer, 0)
    const maxPoints = totalQuestions * 3
    return Math.round((totalPoints / maxPoints) * 100)
  }

  const getScoreMessage = (score: number) => {
    if (score >= 70) return "Your responses indicate a significant dependence on snacking"
    if (score >= 50) return "Your responses indicate a moderate snacking habit that could benefit from intervention"
    return "Your responses indicate mild snacking patterns"
  }

  const renderStep = () => {
    const step = steps[currentStep]

    if (step === 'welcome') {
      return (
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Welcome!</h2>
          <p className="text-lg text-gray-300">
            Let's start by finding out if you have a problem with snacking
          </p>
          <div className="flex justify-center mt-8">
            <button
              onClick={nextStep}
              className="px-6 py-3 bg-[#4ADE80] text-black rounded-lg hover:bg-[#4ADE80]/90 transition-colors font-semibold"
            >
              Start Quiz
            </button>
          </div>
        </div>
      )
    }

    if (step.startsWith('question-')) {
      const questionIndex = parseInt(step.split('-')[1]) - 1
      const question = questions[questionIndex]
      
      return (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-sm text-[#4ADE80] font-semibold">Question #{questionIndex + 1}</h3>
            <h2 className="text-2xl font-bold text-white mt-2">{question.question}</h2>
          </div>
          
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const clickId = `q${questionIndex}-a${index}`
              const isClicked = clickedAnswer === clickId
              
              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(questionIndex, index)}
                  className={`w-full p-4 text-left border border-white/20 rounded-lg transition-all duration-200 text-white cursor-pointer ${
                    isClicked 
                      ? 'bg-[#4ADE80]/20 border-[#4ADE80] scale-95' 
                      : 'bg-white/5 hover:bg-white/10 hover:scale-[1.02]'
                  }`}
                  whileTap={{ scale: 0.95 }}
                  animate={isClicked ? { 
                    backgroundColor: 'rgba(74, 222, 128, 0.2)',
                    borderColor: '#4ADE80',
                    scale: 0.98
                  } : {}}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#4ADE80] font-semibold mr-3">{index + 1}</span>
                  {option}
                </motion.button>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevStep}
              disabled={currentStep === 1} // Disable on first question
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              onClick={skipTest}
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              Skip test
            </button>
            
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-[#4ADE80] text-black rounded-lg hover:bg-[#4ADE80]/90 transition-colors font-semibold"
            >
              Next
            </button>
          </div>
        </div>
      )
    }

    if (step === 'user-info') {
      return (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Finally</h2>
            <p className="text-lg text-gray-300 mt-2">A little more about you</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
              <input
                type="number"
                value={userInfo.age}
                onChange={(e) => setUserInfo({...userInfo, age: e.target.value})}
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400"
                placeholder="Enter your age"
              />
            </div>
          </div>
          
          <button
            onClick={nextStep}
            disabled={!userInfo.name || !userInfo.age}
            className="w-full py-3 bg-[#4ADE80] text-black rounded-lg hover:bg-[#4ADE80]/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Complete Quiz
          </button>
        </div>
      )
    }

    if (step === 'calculating') {
      return (
        <div className="text-center space-y-6">
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-600"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - calculationProgress / 100)}`}
                className="text-[#4ADE80] transition-all duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{calculationProgress}%</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white">Calculating</h2>
            <p className="text-gray-300 mt-2">Building custom plan...</p>
          </div>
        </div>
      )
    }

    if (step === 'results') {
      const score = calculateScore()
      const averageScore = 25
      
      return (
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Analysis Complete</h2>
          <p className="text-lg text-gray-300">We've got some news to break to you...</p>
          
          <div className="bg-white/5 border border-white/20 rounded-lg p-6">
            <p className="text-white text-lg mb-4">{getScoreMessage(score)}</p>
            
            <div className="mt-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white">You vs Average</h3>
              </div>
              
              <div className="flex justify-center items-end gap-8 h-48">
                {/* Your Score Bar */}
                <div className="flex flex-col items-center">
                  <div 
                    className="bg-red-500 rounded-t-lg flex items-end justify-center pb-2 transition-all duration-1000 ease-out"
                    style={{ 
                      width: '80px', 
                      height: `${Math.max((score / Math.max(score, averageScore)) * 160, 60)}px`
                    }}
                  >
                    <span className="text-white font-bold text-lg">{score}%</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">Your Score</div>
                </div>
                
                {/* Average Bar */}
                <div className="flex flex-col items-center">
                  <div 
                    className="bg-green-500 rounded-t-lg flex items-end justify-center pb-2 transition-all duration-1000 ease-out"
                    style={{ 
                      width: '80px', 
                      height: `${Math.max((averageScore / Math.max(score, averageScore)) * 160, 60)}px`
                    }}
                  >
                    <span className="text-white font-bold text-lg">{averageScore}%</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">Average</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <span className="text-orange-400 font-semibold">
                {score - averageScore}% higher dependence on snacking 📉
              </span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400">
            * This result is an indication only, not a medical diagnosis. For a definitive assessment, please contact your healthcare provider.
          </p>
          
          <button
            onClick={nextStep}
            className="px-6 py-3 bg-[#4ADE80] text-black rounded-lg hover:bg-[#4ADE80]/90 transition-colors font-semibold"
          >
            Continue
          </button>
        </div>
      )
    }

    if (step === 'symptoms') {
      return (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Symptoms</h2>
            <p className="text-gray-300 mt-2">Excessive snacking can have negative impacts psychologically.</p>
            <p className="text-sm text-gray-400 mt-4">Select any symptoms below:</p>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {symptoms.map((symptom, index) => (
              <button
                key={index}
                onClick={() => {
                  if (selectedSymptoms.includes(symptom)) {
                    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom))
                  } else {
                    setSelectedSymptoms([...selectedSymptoms, symptom])
                  }
                }}
                className={`p-3 text-left border rounded-lg transition-colors ${
                  selectedSymptoms.includes(symptom)
                    ? 'bg-[#4ADE80]/20 border-[#4ADE80] text-white'
                    : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                {symptom}
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={nextStep}
              className="px-6 py-3 bg-[#4ADE80] text-black rounded-lg hover:bg-[#4ADE80]/90 transition-colors font-semibold"
            >
              Reboot my relationship with food
            </button>
          </div>
        </div>
      )
    }

    // Features intro, feature slides, and testimonials removed as requested (steps 17-23)

    if (step === 'goals') {
      const goalOptions = [
        "Better relationship with food",
        "Improved self-confidence",
        "Improved mood and happiness", 
        "More energy and motivation",
        "Better weight management",
        "Improved self-control"
      ]
      
      return (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Choose your goals</h2>
            <p className="text-gray-300 mt-2">Select the goals you wish to track during your journey.</p>
          </div>
          
          <div className="space-y-3">
            {goalOptions.map((goal, index) => (
              <button
                key={index}
                onClick={() => {
                  if (selectedGoals.includes(goal)) {
                    setSelectedGoals(selectedGoals.filter(g => g !== goal))
                  } else {
                    setSelectedGoals([...selectedGoals, goal])
                  }
                }}
                className={`w-full p-3 text-left border rounded-lg transition-colors ${
                  selectedGoals.includes(goal)
                    ? 'bg-[#4ADE80]/20 border-[#4ADE80] text-white'
                    : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={nextStep}
              disabled={selectedGoals.length === 0}
              className="px-6 py-3 bg-[#4ADE80] text-black rounded-lg hover:bg-[#4ADE80]/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )
    }

    if (step === 'plan') {
      const targetDate = new Date()
      targetDate.setDate(targetDate.getDate() + 100)
      
      return (
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-white">We've made you a custom plan.</h2>
          <p className="text-lg text-gray-300">
            You will overcome snacking addiction by:
          </p>
          
          <div className="text-3xl font-bold text-[#4ADE80]">
            {targetDate.toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          
          <div className="space-y-4 mt-8">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
          
          <button
            onClick={nextStep}
            className="w-full py-3 bg-[#4ADE80] text-black rounded-lg hover:bg-[#4ADE80]/90 transition-colors font-semibold"
          >
            Continue with e-mail
          </button>
        </div>
      )
    }

    if (step === 'complete') {
      return (
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-white">Welcome to Nubble!</h2>
          <p className="text-lg text-gray-300">
            Your personalized plan is ready. Download the app to start your journey to freedom from snacking addiction.
          </p>
          
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4">
              <a href="https://apps.apple.com/app/nubble" className="transition-transform hover:scale-105" target="_blank" rel="noopener noreferrer">
                <img src="/appstore.svg" alt="Download on the App Store" className="h-12 w-auto" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nubble.app" className="transition-transform hover:scale-105" target="_blank" rel="noopener noreferrer">
                <img src="/android.svg" alt="Get it on Google Play" className="h-12 w-auto" />
              </a>
            </div>
            
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-400">
                {currentStep < 12 && `Step ${currentStep + 1} of 12`}
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
