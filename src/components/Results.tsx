'use client'

interface ResultsProps {
  score: number
  leadData: {name: string, email: string, company: string}
}

const getScoreMessage = (score: number, totalQuestions: number) => {
  const percentage = (score / totalQuestions) * 100

  if (percentage >= 90) {
    return {
      title: "AI Marketing Master! 🏆",
      description: "Outstanding! You have an excellent grasp of AI marketing strategies and best practices. You're ready to lead AI transformation in your organization.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20"
    }
  } else if (percentage >= 75) {
    return {
      title: "AI Marketing Pro! 🚀",
      description: "Great job! You understand most AI marketing concepts well. With a little more learning, you'll be an AI marketing expert.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20"
    }
  } else if (percentage >= 60) {
    return {
      title: "AI Marketing Enthusiast! 📈",
      description: "Good start! You have a solid foundation in AI marketing. Keep learning and you'll see great improvements in your marketing results.",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/20"
    }
  } else {
    return {
      title: "AI Marketing Beginner! 🌱",
      description: "Everyone starts somewhere! You're at the beginning of your AI marketing journey. The Cut Through wit AI podcast will help you level up quickly.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/20"
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
      description: "Begin using AI tools for content creation and optimization to see immediate ROI.",
      icon: "✍️"
    },
    {
      title: "Focus on Data Quality",
      description: "Clean and organize your customer data to unlock AI's full potential.",
      icon: "📊"
    },
    {
      title: "Test and Iterate",
      description: "Start small with AI experiments and scale what works for your business.",
      icon: "🔬"
    },
    {
      title: "Listen to Cut Through wit AI",
      description: "Get weekly insights and practical tips from AI marketing experts.",
      icon: "🎧"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl text-center">
        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${scoreMessage.color} mb-6`}>
          <span className="text-3xl font-bold text-white">{score}/{totalQuestions}</span>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">
          {scoreMessage.title}
        </h1>
        
        <p className="text-xl text-gray-200 mb-6">
          {scoreMessage.description}
        </p>

        <div className={`${scoreMessage.bgColor} backdrop-blur-sm rounded-2xl p-6 mb-8`}>
          <div className="text-6xl font-bold text-white mb-2">{percentage}%</div>
          <div className="text-lg text-gray-200">AI Marketing Knowledge Score</div>
        </div>

        <div className="bg-orange-500/20 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-orange-300 mb-4">
            Thanks, {leadData.name}!
          </h3>
          <p className="text-gray-300 mb-4">
            Your personalized AI marketing insights have been sent to <strong>{leadData.email}</strong>
            {leadData.company && ` for ${leadData.company}`}.
          </p>
          <p className="text-sm text-gray-400">
            Check your inbox for exclusive content and podcast recommendations tailored to your results.
          </p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Your Next Steps in AI Marketing
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{rec.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{rec.title}</h3>
                  <p className="text-gray-300">{rec.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Level Up Your AI Marketing?
        </h2>
        <p className="text-xl text-gray-200 mb-6">
          Join thousands of marketers getting weekly AI insights from Cut Through wit AI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://podcasts.apple.com/podcast/cut-through-wit-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>🎧</span>
            <span>Listen on Apple Podcasts</span>
          </a>
          <a
            href="https://open.spotify.com/show/cut-through-wit-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>🎵</span>
            <span>Listen on Spotify</span>
          </a>
        </div>
      </div>
    </div>
  )
}