'use client'

import { useState } from 'react'

interface LeadFormProps {
  onSubmit: (data: {name: string, email: string, company: string}) => void
  quizScore: number
  quizAnswers: number[]
  totalQuestions: number
}

export default function LeadForm({ onSubmit, quizScore, quizAnswers, totalQuestions }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

    setIsSubmitting(true)
    
    try {
      // Calculate percentage
      const percentage = Math.round((quizScore / totalQuestions) * 100)
      
      // Send email via API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          score: quizScore,
          answers: quizAnswers,
          percentage: percentage
        }),
      })

      const result = await response.json()
      
      if (!response.ok) {
        console.error('Email API error:', result)
        throw new Error(result.details || 'Failed to send email')
      }

      console.log('Email sent successfully:', result)
      // Continue with original flow
      onSubmit(formData)
    } catch (error) {
      console.error('Error sending email:', error)
      // Alert user but still continue with the flow
      alert('Note: There was an issue sending the email, but your results are ready!')
      onSubmit(formData)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isValid = formData.name.trim() && formData.email.trim()

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-sans">
            Get Your Assessment Results
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Receive your personalized AI marketing insights and exclusive content from Cut Through wit AI.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter your company name"
            />
          </div>

          <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium mb-2 text-gray-900">What you&apos;ll receive:</p>
                <ul className="space-y-1">
                  <li>• Personalized AI marketing insights based on your assessment</li>
                  <li>• Exclusive episodes from Cut Through wit AI podcast</li>
                  <li>• Practical AI implementation guides and resources</li>
                  <li>• No spam, unsubscribe anytime</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full py-3 px-6 rounded-md text-sm font-medium transition-colors duration-200 ${
              isValid && !isSubmitting
                ? 'bg-teal-600 hover:bg-teal-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : (
              'Get Assessment Results'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            By submitting this form, you agree to receive marketing emails from Cut Through wit AI
          </p>
        </div>
      </div>
    </div>
  )
}