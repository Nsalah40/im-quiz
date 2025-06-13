'use client'

interface ResultsProps {
  score: number
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

export default function Results({ score, leadData }: ResultsProps) {
  const totalQuestions = 8
  const percentage = Math.round((score / totalQuestions) * 100)
  const scoreMessage = getScoreMessage(score, totalQuestions)

  const recommendations = [
    {
      title: "Start with Content AI",
      description: "Begin using AI tools for content creation and optimization to see immediate ROI."
    },
    {
      title: "Focus on Data Quality",
      description: "Clean and organize your customer data to unlock AI's full potential."
    },
    {
      title: "Test and Iterate",
      description: "Start small with AI experiments and scale what works for your business."
    },
    {
      title: "Listen to Cut Through wit AI",
      description: "Get weekly insights and practical tips from AI marketing experts."
    }
  ]

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
          Your Next Steps in AI Marketing
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-gray-50 rounded-md p-6 border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{rec.title}</h3>
                  <p className="text-gray-600">{rec.description}</p>
                </div>
            </div>
          ))}
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
            href="https://podcasts.apple.com/podcast/cut-through-wit-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 text-sm"
          >
            Listen on Apple Podcasts
          </a>
          <a
            href="https://open.spotify.com/show/cut-through-wit-ai"
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