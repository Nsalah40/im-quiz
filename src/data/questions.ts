export interface Question {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export const questions: Question[] = [
  {
    question: "What is the primary benefit of using AI in content marketing?",
    options: [
      "Completely replacing human creativity",
      "Scaling personalized content creation",
      "Eliminating the need for strategy",
      "Making content creation free"
    ],
    correct: 1,
    explanation: "AI excels at scaling personalized content creation by analyzing user data and preferences to create tailored content at scale. It enhances human creativity rather than replacing it, and strategic thinking remains essential."
  },
  {
    question: "Which AI application is most effective for improving email marketing?",
    options: [
      "Writing all emails automatically",
      "Personalizing subject lines and send times",
      "Replacing email with chatbots",
      "Eliminating segmentation"
    ],
    correct: 1,
    explanation: "Personalizing subject lines and optimizing send times based on individual behavior patterns significantly improves open rates and engagement. AI analyzes when each subscriber is most likely to engage with emails."
  },
  {
    question: "How can AI improve customer segmentation?",
    options: [
      "By creating fewer, broader segments",
      "By analyzing behavioral patterns and preferences",
      "By eliminating the need for demographics",
      "By focusing only on purchase history"
    ],
    correct: 1,
    explanation: "AI can process vast amounts of behavioral data, preferences, and interactions to create more precise and dynamic customer segments. This goes beyond traditional demographics to include real-time behavior patterns."
  },
  {
    question: "What's the biggest challenge when implementing AI in marketing?",
    options: [
      "AI tools are too expensive",
      "Data quality and integration",
      "AI is too complicated to use",
      "There are no good AI tools available"
    ],
    correct: 1,
    explanation: "Poor data quality and integration issues are the primary obstacles to AI success. AI is only as good as the data it's trained on, and many organizations struggle with fragmented, inconsistent, or low-quality data."
  },
  {
    question: "Which metric is most important when measuring AI marketing success?",
    options: [
      "Number of AI tools used",
      "Cost savings from automation",
      "ROI and conversion improvements",
      "Time spent using AI"
    ],
    correct: 2,
    explanation: "ROI and conversion improvements directly measure business impact. While cost savings and efficiency are important, the ultimate goal is to drive better marketing results and revenue growth."
  },
  {
    question: "How should marketers approach AI adoption?",
    options: [
      "Replace all human processes immediately",
      "Start with one use case and scale gradually",
      "Wait until AI is perfect",
      "Only use free AI tools"
    ],
    correct: 1,
    explanation: "Starting with one specific use case allows you to learn, measure results, and build confidence before expanding. This approach reduces risk and helps teams develop AI expertise gradually."
  },
  {
    question: "What role does human oversight play in AI marketing?",
    options: [
      "It's unnecessary once AI is implemented",
      "Only needed for legal compliance",
      "Critical for strategy, creativity, and ethics",
      "Should be minimized to save costs"
    ],
    correct: 2,
    explanation: "Human oversight remains critical for strategic decision-making, creative direction, and ethical considerations. AI is a powerful tool, but humans provide context, judgment, and creative vision that AI cannot replicate."
  },
  {
    question: "Which AI capability is most valuable for social media marketing?",
    options: [
      "Posting content automatically without review",
      "Analyzing sentiment and engagement patterns",
      "Creating viral content guaranteed",
      "Eliminating the need for community management"
    ],
    correct: 1,
    explanation: "Analyzing sentiment and engagement patterns provides actionable insights for content strategy and audience understanding. This data-driven approach helps optimize posting times, content types, and messaging."
  }
]