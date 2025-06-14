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
- **Lead Capture System** - Seamless form integration for email collection
- **Personalized Results** - Score-based insights with tailored recommendations
- **Professional Design** - Clean, minimal UI matching podcast branding
- **Mobile Responsive** - Optimized for all devices and screen sizes
- **Performance Optimized** - Fast loading with Next.js 15 and static generation

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
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

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
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
4. **Results** → Personalized insights and next steps

## 🔧 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main application logic
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Quiz.tsx          # Quiz component with questions
│   ├── LeadForm.tsx      # Lead capture form
│   └── Results.tsx       # Results display with recommendations
└── CLAUDE.md            # Project instructions and context
```

## 🎯 Lead Generation Strategy

- **Target Audience**: Marketing professionals, business owners, entrepreneurs
- **Value Proposition**: Personalized AI marketing insights + exclusive podcast content
- **Conversion Points**: 
  - Educational assessment builds trust
  - Results create perceived value
  - Podcast promotion drives ongoing engagement

## 🚦 Performance

- **Bundle Size**: ~105KB first load
- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All green metrics
- **Static Generation**: Pre-rendered at build time for optimal speed

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
- **Repository**: [GitHub](https://github.com/Nsalah40/im-quiz)

---

Built with ❤️ for the AI marketing community
