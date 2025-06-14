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
                <h1 className="text-4xl font-bold text-gray-900 mb-4 font-sans">
                  AI Marketing Knowledge Assessment
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Test your understanding of artificial intelligence applications in modern marketing strategy and implementation.
                </p>
              </div>
              
              <div className="bg-black rounded-lg p-8 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <h2 className="text-xl font-semibold text-white">
                    Cut Through wit AI
                  </h2>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  A podcast for ambitious founders cutting through the noise to deliver actionable AI insights.
                </p>
              </div>
              
              <div className="text-center">
                <button
                  onClick={startQuiz}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-200"
                >
                  Begin Assessment
                </button>
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
