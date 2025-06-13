'use client'

import { useState } from 'react'

interface LeadFormProps {
  onSubmit: (data: {name: string, email: string, company: string}) => void
}

export default function LeadForm({ onSubmit }: LeadFormProps) {
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    onSubmit(formData)
    setIsSubmitting(false)
  }

  const isValid = formData.name.trim() && formData.email.trim()

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get Your Personalized Results
          </h2>
          <p className="text-xl text-gray-200">
            We&apos;ll send your AI marketing insights and exclusive podcast content straight to your inbox
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-lg font-medium text-white mb-2">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your company name"
            />
          </div>

          <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm text-orange-200">
                <p className="font-medium mb-1">What you&apos;ll get:</p>
                <ul className="space-y-1">
                  <li>• Personalized AI marketing insights based on your quiz results</li>
                  <li>• Exclusive episodes from Cut Through wit AI podcast</li>
                  <li>• Practical AI implementation guides and templates</li>
                  <li>• No spam, unsubscribe anytime</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full py-4 px-8 rounded-full text-xl font-semibold transition-all duration-200 ${
              isValid && !isSubmitting
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white transform hover:scale-105 shadow-lg'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Getting Your Results...</span>
              </div>
            ) : (
              'Get My AI Marketing Insights'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            By submitting this form, you agree to receive marketing emails from Cut Through wit AI
          </p>
        </div>
      </div>
    </div>
  )
}