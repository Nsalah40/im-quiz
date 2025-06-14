import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { questions } from '@/data/questions'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, score, answers, percentage } = await request.json()
    
    // Use variables to avoid linting errors
    const companyInfo = company ? ` at ${company}` : ''
    const scoreInfo = `${score}/${8} (${percentage}%)`

    console.log('Email API called with:', { name, email, company, score, percentage })
    console.log('Resend instance available:', !!resend)

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Email content
    const emailSubject = 'Your AI Marketing Assessment Results - Cut Through wit AI'
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #000; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .score-box { background: #0d9488; color: white; padding: 15px; text-align: center; margin: 20px 0; }
    .cta-button { background: #0d9488; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px 5px; }
    .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div style="display: flex; align-items: center; justify-content: center;">
        <div style="width: 8px; height: 8px; background: #fbbf24; border-radius: 50%; margin-right: 12px;"></div>
        <h1>Cut Through wit AI</h1>
      </div>
    </div>
    
    <div class="content">
      <h2>Hi ${name}!</h2>
      
      <p>Thank you for taking the AI Marketing Knowledge Assessment${companyInfo}. Here are your personalized results:</p>
      
      <div class="score-box">
        <h3>Your Score: ${scoreInfo}</h3>
        <p>${getScoreMessage(percentage)}</p>
      </div>
      
      <h3>Your Quiz Summary</h3>
      <div style="margin: 20px 0;">
        ${answers && Array.isArray(answers) ? answers.map((answer: number, index: number) => {
          const question = questions[index]
          const isCorrect = answer === question.correct
          return `
            <div style="margin: 15px 0; padding: 15px; background: ${isCorrect ? '#f0f9ff' : '#fef2f2'}; border-left: 4px solid ${isCorrect ? '#10b981' : '#ef4444'}; border-radius: 4px;">
              <p style="margin: 0 0 8px 0; font-weight: bold; color: #374151;">
                ${index + 1}. ${question.question}
              </p>
              <p style="margin: 0; color: ${isCorrect ? '#065f46' : '#991b1b'};">
                ${isCorrect ? '✓' : '✗'} Your answer: ${question.options[answer]}
                ${!isCorrect ? `<br><span style="color: #065f46;">✓ Correct: ${question.options[question.correct]}</span>` : ''}
              </p>
            </div>
          `
        }).join('') : ''}
      </div>
      
      <h3>🎧 Ready to Level Up Your AI Marketing?</h3>
      <p>Join ambitious founders getting weekly AI insights from Cut Through wit AI podcast. Click the links below to start listening:</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://podcasts.apple.com/us/podcast/cut-through-with-ai/id1816728251" class="cta-button" style="display: block; margin: 10px auto; max-width: 250px;">
          🎧 Listen on Apple Podcasts
        </a>
        <a href="https://open.spotify.com/show/0dDqmkwnkA3fGBSerXoDuC" class="cta-button" style="display: block; margin: 10px auto; max-width: 250px;">
          🎵 Listen on Spotify
        </a>
      </div>
      
      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h4 style="margin: 0 0 10px 0; color: #374151;">🚀 Start with these episodes:</h4>
        <ul style="margin: 0; padding-left: 20px; color: #6b7280;">
          <li>Episode 1: AI Marketing Fundamentals</li>
          <li>Latest Episode: Advanced AI Strategies</li>
          <li>Browse the full catalog for your specific needs</li>
        </ul>
      </div>
      
      <h3>What You'll Get:</h3>
      <ul>
        <li>Weekly actionable AI marketing strategies</li>
        <li>Real-world case studies and examples</li>
        <li>Expert interviews with AI marketing leaders</li>
        <li>Practical tools and frameworks you can implement immediately</li>
      </ul>
      
      <p>The podcast cuts through the noise to deliver insights that matter for your business growth.</p>
      
      <p>Thanks again for taking the assessment!</p>
      <p><strong>The Cut Through wit AI Team</strong></p>
    </div>
    
    <div class="footer">
      <p>This email was sent because you completed the AI Marketing Knowledge Assessment.</p>
      <p>If you no longer want to receive emails from us, you can unsubscribe at any time.</p>
    </div>
  </div>
</body>
</html>
    `

    // Send email using Resend
    if (resend) {
      try {
        const data = await resend.emails.send({
          from: 'Cut Through wit AI <onboarding@resend.dev>',
          to: [email],
          subject: emailSubject,
          html: emailContent,
        })

        return NextResponse.json({ 
          success: true, 
          message: 'Email sent successfully',
          emailId: data.data?.id || 'sent'
        })
      } catch (emailError) {
        console.error('Resend error details:', emailError)
        return NextResponse.json({
          success: false,
          error: 'Email service failed',
          details: emailError instanceof Error ? emailError.message : 'Unknown error'
        }, { status: 500 })
      }
    }

    // Fallback: simulate email sending for development/testing
    console.log('Email simulation - would be sent to:', email)
    console.log('Subject:', emailSubject)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully (simulated)',
      debug: {
        to: email,
        subject: emailSubject,
        note: 'Add RESEND_API_KEY environment variable to send real emails'
      }
    })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

function getScoreMessage(percentage: number): string {
  if (percentage >= 90) {
    return "Expert Level - Outstanding! You have an excellent grasp of AI marketing strategies and best practices."
  } else if (percentage >= 75) {
    return "Advanced Level - Strong performance! You understand most AI marketing concepts well."
  } else if (percentage >= 60) {
    return "Intermediate Level - Good foundation! You have solid understanding of AI marketing basics."
  } else {
    return "Beginner Level - Starting point identified! You're at the beginning of your AI marketing journey."
  }
}