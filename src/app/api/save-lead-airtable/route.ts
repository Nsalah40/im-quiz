import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, score, percentage } = await request.json()

    console.log('Save lead to Airtable API called with:', { name, email, company, score, percentage })

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check if Airtable credentials are available
    const airtableApiKey = process.env.AIRTABLE_API_KEY
    const airtableBaseId = process.env.AIRTABLE_BASE_ID
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME || 'Leads'

    if (!airtableApiKey || !airtableBaseId) {
      console.log('Airtable not configured, skipping lead save')
      return NextResponse.json({ 
        success: true, 
        message: 'Lead saved successfully (Airtable not configured)',
        debug: {
          name,
          email,
          company,
          score,
          percentage,
          note: 'Add AIRTABLE_API_KEY and AIRTABLE_BASE_ID environment variables to save leads to Airtable'
        }
      })
    }

    // Send data to Airtable
    const airtableResponse = await fetch(`https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${airtableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              'Name': name,
              'Email': email,
              'Company': company || '',
              'Score': score,
              'Percentage': percentage,
              'Timestamp': new Date().toISOString(),
            }
          }
        ]
      })
    })

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json()
      console.error('Airtable API error:', errorData)
      throw new Error('Failed to save to Airtable')
    }

    const result = await airtableResponse.json()
    console.log('Lead saved to Airtable successfully:', result)

    return NextResponse.json({ 
      success: true, 
      message: 'Lead saved to Airtable successfully'
    })

  } catch (error) {
    console.error('Error saving lead to Airtable:', error)
    
    // Don't fail the entire flow if Airtable fails
    return NextResponse.json({
      success: true,
      message: 'Lead processed (Airtable save failed)',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}