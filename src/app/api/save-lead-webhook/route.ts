import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, score, percentage } = await request.json()

    console.log('Save lead via webhook called with:', { name, email, company, score, percentage })

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check if webhook URL is configured
    const webhookUrl = process.env.WEBHOOK_URL

    if (!webhookUrl) {
      console.log('Webhook not configured, skipping lead save')
      return NextResponse.json({ 
        success: true, 
        message: 'Lead saved successfully (webhook not configured)',
        debug: {
          name,
          email,
          company,
          score,
          percentage,
          note: 'Add WEBHOOK_URL environment variable to send leads to Zapier/Make/etc'
        }
      })
    }

    // Prepare data for webhook
    const webhookData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      company: company || '',
      score,
      percentage,
      source: 'AI Marketing Quiz'
    }

    // Send data to webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData)
    })

    if (!webhookResponse.ok) {
      console.error('Webhook error:', webhookResponse.status, webhookResponse.statusText)
      throw new Error('Failed to send to webhook')
    }

    console.log('Lead sent to webhook successfully')

    return NextResponse.json({ 
      success: true, 
      message: 'Lead saved via webhook successfully'
    })

  } catch (error) {
    console.error('Error sending lead to webhook:', error)
    
    // Don't fail the entire flow if webhook fails
    return NextResponse.json({
      success: true,
      message: 'Lead processed (webhook send failed)',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}