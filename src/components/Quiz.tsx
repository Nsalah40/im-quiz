'use client'

import { useState } from 'react'

const questions = [
  {
    question: "What is the primary benefit of using AI in content marketing?",
    options: [
      "Completely replacing human creativity",
      "Scaling personalized content creation",
      "Eliminating the need for strategy",
      "Making content creation free"
    ],
    correct: 1
  },
  {
    question: "Which AI application is most effective for improving email marketing?",
    options: [
      "Writing all emails automatically",
      "Personalizing subject lines and send times",
      "Replacing email with chatbots",
      "Eliminating segmentation"
    ],
    correct: 1
  },
  {
    question: "How can AI improve customer segmentation?",
    options: [
      "By creating fewer, broader segments",
      "By analyzing behavioral patterns and preferences",
      "By eliminating the need for demographics",
      "By focusing only on purchase history"
    ],
    correct: 1
  },
  {
    question: "What's the biggest challenge when implementing AI in marketing?",
    options: [
      "AI tools are too expensive",
      "Data quality and integration",
      "AI is too complicated to use",
      "There are no good AI tools available"
    ],
    correct: 1
  },
  {
    question: "Which metric is most important when measuring AI marketing success?",
    options: [
      "Number of AI tools used",
      "Cost savings from automation",
      "ROI and conversion improvements",
      "Time spent using AI"
    ],
    correct: 2
  },
  {
    question: "How should marketers approach AI adoption?",
    options: [
      "Replace all human processes immediately",
      "Start with one use case and scale gradually",
      "Wait until AI is perfect",
      "Only use free AI tools"
    ],
    correct: 1
  },
  {
    question: "What role does human oversight play in AI marketing?",
    options: [
      "It's unnecessary once AI is implemented",
      "Only needed for legal compliance",
      "Critical for strategy, creativity, and ethics",
      "Should be minimized to save costs"
    ],
    correct: 2
  },
  {
    question: "Which AI capability is most valuable for social media marketing?",
    options: [
      "Posting content automatically without review",
      "Analyzing sentiment and engagement patterns",
      "Creating viral content guaranteed",
      "Eliminating the need for community management"
    ],
    correct: 1
  }
]

interface QuizProps {
  onComplete: (score: number, answers: number[]) => void
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex)
  }

  const handleNext = () => {
    if (selectedOption === null) return

    const newAnswers = [...selectedAnswers, selectedOption]
    setSelectedAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
    } else {
      const score = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0)
      }, 0)
      onComplete(score, newAnswers)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 font-sans">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <div className="text-teal-600 font-medium">
              {Math.round(progress)}% Complete
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-teal-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
            {questions[currentQuestion].question}
          </h3>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full text-left p-4 rounded-md transition-all duration-200 border ${
                  selectedOption === index
                    ? 'bg-teal-50 border-teal-300 text-gray-900'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                    selectedOption === index 
                      ? 'border-teal-600 bg-teal-600' 
                      : 'border-gray-300'
                  }`}>
                    {selectedOption === index && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-sm font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`px-6 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
              selectedOption !== null
                ? 'bg-teal-600 hover:bg-teal-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Assessment'}
          </button>
        </div>
      </div>
    </div>
  )
}