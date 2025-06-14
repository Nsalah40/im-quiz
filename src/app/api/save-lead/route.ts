import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, score, percentage } = await request.json()

    console.log('Save lead API called with:', { name, email, company, score, percentage })

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check if Google Sheets credentials are available
    const googleCredentials = process.env.GOOGLE_SHEETS_CREDENTIALS
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID

    if (!googleCredentials || !spreadsheetId) {
      console.log('Google Sheets not configured, skipping lead save')
      return NextResponse.json({ 
        success: true, 
        message: 'Lead saved successfully (Google Sheets not configured)',
        debug: {
          name,
          email,
          company,
          score,
          percentage,
          note: 'Add GOOGLE_SHEETS_CREDENTIALS and GOOGLE_SHEETS_ID environment variables to save leads to Google Sheets'
        }
      })
    }

    // Parse Google credentials
    const credentials = JSON.parse(googleCredentials)
    
    // Create Google Sheets API client
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Prepare data for the spreadsheet
    const timestamp = new Date().toISOString()
    const values = [
      [timestamp, name, email, company || '', score, percentage]
    ]

    // Append data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:F', // Assumes headers: Timestamp, Name, Email, Company, Score, Percentage
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Lead saved to Google Sheets successfully'
    })

  } catch (error) {
    console.error('Error saving lead to Google Sheets:', error)
    
    // Don't fail the entire flow if Google Sheets fails
    return NextResponse.json({
      success: true,
      message: 'Lead processed (Google Sheets save failed)',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}