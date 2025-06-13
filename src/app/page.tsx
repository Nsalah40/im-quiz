'use client'

import { useState } from 'react'
import Quiz from '@/components/Quiz'
import LeadForm from '@/components/LeadForm'
import Results from '@/components/Results'

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'leadform' | 'results'>('intro')
  const [quizResults, setQuizResults] = useState<{score: number, answers: number[]}>({ score: 0, answers: [] })
  const [leadData, setLeadData] = useState<{name: string, email: string, company: string}>({ name: '', email: '', company: '' })

  const handleQuizComplete = (score: number, answers: number[]) => {
    setQuizResults({ score, answers })
    setCurrentStep('leadform')
  }

  const handleLeadSubmit = (data: {name: string, email: string, company: string}) => {
    setLeadData(data)
    setCurrentStep('results')
  }

  const startQuiz = () => {
    setCurrentStep('quiz')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {currentStep === 'intro' && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Marketing Mastery Quiz
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Discover how well you understand AI&apos;s role in modern marketing
              </p>
              <div className="bg-orange-500/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-semibold text-orange-300 mb-4">
                  Brought to you by Cut Through wit AI
                </h2>
                <p className="text-gray-300">
                  The podcast that cuts through the noise to deliver actionable AI insights for marketers and business leaders.
                </p>
              </div>
              <button
                onClick={startQuiz}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Start Quiz
              </button>
            </div>
          </div>
        )}

        {currentStep === 'quiz' && (
          <Quiz onComplete={handleQuizComplete} />
        )}

        {currentStep === 'leadform' && (
          <LeadForm onSubmit={handleLeadSubmit} />
        )}

        {currentStep === 'results' && (
          <Results 
            score={quizResults.score} 
            leadData={leadData}
          />
        )}
      </div>
    </div>
  )
}
