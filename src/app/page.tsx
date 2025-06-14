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
    <div className="min-h-screen bg-slate-100">
      <div className="container mx-auto px-4 py-12">
        {currentStep === 'intro' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 font-sans">
                  How AI-Savvy Is Your Marketing?
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                  In 3 minutes, discover where you stand on the AI marketing spectrum. Are you a strategic AI pioneer, or still finding your footing in the AI revolution?
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <h3 className="font-semibold text-gray-900 mb-2">8 Strategic Questions</h3>
                    <p className="text-sm text-gray-600">Covering real-world AI marketing scenarios</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Insights</h3>
                    <p className="text-sm text-gray-600">Get tailored recommendations for your level</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="text-2xl mb-2">🚀</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Actionable Results</h3>
                    <p className="text-sm text-gray-600">Discover your next steps to AI mastery</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black rounded-lg p-8 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-semibold text-white">
                    Cut Through wit AI
                  </h2>
                </div>
                <p className="text-gray-300 text-center leading-relaxed text-lg">
                  The #1 podcast for ambitious founders who want to cut through the AI hype and get <strong className="text-white">actionable strategies</strong> that actually move the needle.
                </p>
                <div className="flex justify-center space-x-8 mt-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-yellow-400 rounded-full mr-2"></div>
                    Weekly episodes
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-yellow-400 rounded-full mr-2"></div>
                    Expert interviews
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-yellow-400 rounded-full mr-2"></div>
                    Real case studies
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={startQuiz}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Discover Your AI Marketing Level →
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Takes 3 minutes • Get instant results • No spam, ever
                </p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'quiz' && (
          <Quiz onComplete={handleQuizComplete} />
        )}

        {currentStep === 'leadform' && (
          <LeadForm 
            onSubmit={handleLeadSubmit} 
            quizScore={quizResults.score}
            totalQuestions={8}
          />
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
