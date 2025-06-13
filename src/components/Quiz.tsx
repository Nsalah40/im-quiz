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
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <div className="text-orange-300 font-semibold">
              {Math.round(progress)}% Complete
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-6">
            {questions[currentQuestion].question}
          </h3>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                  selectedOption === index
                    ? 'bg-orange-500/30 border-2 border-orange-400 text-white'
                    : 'bg-white/5 border-2 border-transparent text-gray-200 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    selectedOption === index 
                      ? 'border-orange-400 bg-orange-500' 
                      : 'border-gray-400'
                  }`}>
                    {selectedOption === index && (
                      <div className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 ${
              selectedOption !== null
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white transform hover:scale-105 shadow-lg'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
          </button>
        </div>
      </div>
    </div>
  )
}