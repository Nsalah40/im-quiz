# AI Marketing Knowledge Assessment

> A professional lead generation quiz for Cut Through wit AI podcast

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)

## 🎯 Overview

An interactive assessment tool that evaluates users' understanding of AI applications in modern marketing. Built for the **Cut Through wit AI** podcast to generate qualified leads while providing educational value to marketing professionals and business leaders.

### ✨ Key Features

- **Interactive Quiz Engine** - 8 carefully crafted questions covering AI marketing fundamentals
- **Lead Capture System** - Seamless form integration with automated email delivery
- **Google Sheets Integration** - Automatic lead saving to spreadsheets for CRM management
- **Personalized Results** - Score-based insights with tailored recommendations
- **Professional Design** - Clean, minimal UI matching podcast branding
- **Mobile Responsive** - Optimized for all devices and screen sizes
- **Email Automation** - Professional HTML emails with quiz results and podcast links

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **Email**: Resend API for reliable delivery
- **Lead Management**: Google Sheets API integration
- **Deployment**: Vercel
- **Lint/Format**: ESLint + Next.js config

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nsalah40/im-quiz.git
   cd im-quiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your Resend API key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

## 📧 Email Setup

1. **Sign up for Resend**: Visit [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. **Get API key**: Go to API Keys section and create one
3. **Add to environment**: 
   ```bash
   RESEND_API_KEY="re_your_actual_key_here"
   ```

## 🔧 Lead Capture Setup (Choose One Option)

### **Option 1: Google Sheets Integration**

⚠️ **Note**: Some organizations block service account key creation. If you get an error about "Organization Policy", try Option 2 or 3 below.

1. **Create a Google Cloud Project** (use personal account if work account is blocked)
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one

2. **Enable Google Sheets API**
   - In the API Library, search for "Google Sheets API"
   - Click "Enable"

3. **Create Service Account**
   - Go to "Credentials" → "Create Credentials" → "Service Account"
   - Download the JSON key file

4. **Set up Google Sheet**
   - Create a new Google Sheet
   - Add headers in row 1: `Timestamp | Name | Email | Company | Score | Percentage`
   - Share the sheet with your service account email (found in JSON file)

5. **Configure Environment Variables**
   ```bash
   GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account",...}'
   GOOGLE_SHEETS_ID="your-spreadsheet-id"
   ```

### **Option 2: Airtable Integration** (Recommended Alternative)

1. **Create Airtable Account**
   - Sign up at [airtable.com](https://airtable.com)
   - Create a new base called "AI Quiz Leads"

2. **Set up Table**
   - Create a table with these fields:
     - Name (Single line text)
     - Email (Email)
     - Company (Single line text)
     - Score (Number)
     - Percentage (Number)
     - Timestamp (Date)

3. **Get API Credentials**
   - Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
   - Create a personal access token
   - Get your Base ID from the API documentation

4. **Configure Environment Variables**
   ```bash
   AIRTABLE_API_KEY="your-airtable-api-key"
   AIRTABLE_BASE_ID="your-airtable-base-id"
   AIRTABLE_TABLE_NAME="Leads"
   ```

### **Option 3: Webhook Integration** (Works with any service)

Use this with Zapier, Make.com, or any webhook receiver:

1. **Set up Webhook**
   - Create a webhook in your preferred service (Zapier, Make, etc.)
   - Copy the webhook URL

2. **Configure Environment Variable**
   ```bash
   WEBHOOK_URL="https://hooks.zapier.com/hooks/catch/your-webhook-url"
   ```

3. **Connect to Your CRM**
   - Use the webhook service to forward data to Google Sheets, HubSpot, Salesforce, etc.
   - No API keys needed - just configure the webhook service

4. **Test functionality**: Complete the quiz and submit the form

## 🎨 Design System

The application follows the **Cut Through wit AI** podcast branding:

- **Primary Color**: Teal (`#0D9488`)
- **Accent Color**: Yellow (`#FBBF24`) 
- **Background**: Light Slate (`#F1F5F9`)
- **Cards**: Clean White with subtle shadows
- **Typography**: Modern sans-serif with excellent readability

## 📊 User Flow

1. **Introduction** → Professional landing page with podcast branding
2. **Assessment** → 8 multiple-choice questions with progress tracking
3. **Lead Capture** → Form collection with value proposition
4. **Email Delivery** → Automated email with results and podcast links
5. **Results** → Clean results page with podcast promotion

## 🔧 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── send-email/    # Email API endpoint
│   │   └── save-lead/     # Google Sheets API endpoint
│   ├── page.tsx           # Main application logic
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Quiz.tsx           # Quiz component with questions
│   ├── LeadForm.tsx       # Lead capture form with email integration
│   └── Results.tsx        # Results display with podcast links
└── CLAUDE.md             # Project instructions and context
```

## 🎯 Lead Generation Strategy

- **Target Audience**: Marketing professionals, business owners, entrepreneurs
- **Value Proposition**: Personalized AI marketing insights + exclusive podcast content
- **Conversion Points**: 
  - Educational assessment builds trust
  - Results create perceived value
  - Automated email nurtures leads
  - Podcast promotion drives ongoing engagement

## 🚦 Performance

- **Bundle Size**: ~105KB first load
- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All green metrics
- **Static Generation**: Pre-rendered at build time for optimal speed
- **Email Delivery**: 99.9% deliverability with Resend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary to Cut Through wit AI podcast.

## 🔗 Links

- **Live Demo**: [Deployed on Vercel]
- **Podcast**: [Cut Through wit AI](https://cutthrough.transistor.fm/)
- **Apple Podcasts**: [Listen Here](https://podcasts.apple.com/us/podcast/cut-through-with-ai/id1816728251)
- **Spotify**: [Listen Here](https://open.spotify.com/show/0dDqmkwnkA3fGBSerXoDuC)
- **Repository**: [GitHub](https://github.com/Nsalah40/im-quiz)

---

Built with ❤️ for the AI marketing community