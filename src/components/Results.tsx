'use client'

import { questions } from '@/data/questions'

interface ResultsProps {
  score: number
  answers: number[]
  leadData: {name: string, email: string, company: string}
}

const getScoreMessage = (score: number, totalQuestions: number) => {
  const percentage = (score / totalQuestions) * 100

  if (percentage >= 90) {
    return {
      title: "Expert Level",
      description: "Outstanding performance. You have an excellent grasp of AI marketing strategies and best practices. You're ready to lead AI transformation in your organization.",
      color: "bg-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-800"
    }
  } else if (percentage >= 75) {
    return {
      title: "Advanced Level",
      description: "Strong performance. You understand most AI marketing concepts well. With continued learning, you'll become an AI marketing expert.",
      color: "bg-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-800"
    }
  } else if (percentage >= 60) {
    return {
      title: "Intermediate Level",
      description: "Good foundation. You have solid understanding of AI marketing basics. Continued learning will significantly improve your marketing results.",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800"
    }
  } else {
    return {
      title: "Beginner Level",
      description: "Starting point identified. You're at the beginning of your AI marketing journey. The Cut Through wit AI podcast will help accelerate your learning.",
      color: "bg-gray-500",
      bgColor: "bg-gray-50",
      textColor: "text-gray-800"
    }
  }
}

export default function Results({ score, answers, leadData }: ResultsProps) {
  const totalQuestions = 8
  const percentage = Math.round((score / totalQuestions) * 100)
  const scoreMessage = getScoreMessage(score, totalQuestions)


  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${scoreMessage.color} mb-6`}>
          <span className="text-2xl font-bold text-white">{score}/{totalQuestions}</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4 font-sans">
          {scoreMessage.title}
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          {scoreMessage.description}
        </p>

        <div className={`${scoreMessage.bgColor} rounded-lg p-6 mb-8 border border-gray-200`}>
          <div className={`text-5xl font-bold ${scoreMessage.textColor} mb-2`}>{percentage}%</div>
          <div className="text-sm font-medium text-gray-600">Assessment Score</div>
        </div>

        <div className="bg-black rounded-lg p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
            <h3 className="text-xl font-semibold text-white">
              Thank you, {leadData.name}!
            </h3>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Your personalized AI marketing insights have been sent to <strong>{leadData.email}</strong>
            {leadData.company && ` for ${leadData.company}`}.
          </p>
          <p className="text-sm text-gray-400">
            Check your inbox for exclusive content and podcast recommendations tailored to your results.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-sans">
          Your Quiz Summary
        </h2>
        
        <div className="space-y-6">
          {questions.map((question, index) => {
            const userAnswer = answers[index]
            const isCorrect = userAnswer === question.correct
            
            return (
              <div key={index} className={`p-6 rounded-lg border-2 ${
                isCorrect 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    isCorrect 
                      ? 'bg-green-600 text-white' 
                      : 'bg-red-600 text-white'
                  }`}>
                    {isCorrect ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Question {index + 1}: {question.question}
                    </h3>
                    
                    <div className="mb-4">
                      <p className={`font-medium ${
                        isCorrect ? 'text-green-800' : 'text-red-800'
                      }`}>
                        Your answer: {question.options[userAnswer]}
                        {isCorrect ? ' ✓' : ' ✗'}
                      </p>
                      {!isCorrect && (
                        <p className="text-green-800 font-medium mt-1">
                          Correct answer: {question.options[question.correct]} ✓
                        </p>
                      )}
                    </div>
                    
                    <div className={`p-4 rounded-md ${
                      isCorrect ? 'bg-green-100' : 'bg-yellow-50 border border-yellow-200'
                    }`}>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {isCorrect ? 'Why this is correct:' : 'Learn more:'}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Final Score: {score} out of {totalQuestions} ({percentage}%)
          </h3>
          <p className="text-gray-600">
            {score === totalQuestions 
              ? "Perfect score! You're an AI marketing expert! 🏆"
              : score >= totalQuestions * 0.75
              ? "Great job! You have a strong understanding of AI marketing. 🎯"
              : score >= totalQuestions * 0.5
              ? "Good foundation! Keep learning to become an AI marketing pro. 📈"
              : "You're just getting started! The Cut Through wit AI podcast will help you level up quickly. 🚀"
            }
          </p>
        </div>
      </div>

      <div className="bg-black rounded-lg p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-white font-sans">
            Ready to Level Up Your AI Marketing?
          </h2>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Join ambitious founders getting weekly AI insights from Cut Through wit AI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://podcasts.apple.com/us/podcast/cut-through-with-ai/id1816728251"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 text-sm"
          >
            Listen on Apple Podcasts
          </a>
          <a
            href="https://open.spotify.com/show/0dDqmkwnkA3fGBSerXoDuC"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 text-sm"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  )
}