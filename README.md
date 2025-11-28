# Jinay Fitness - Online Coaching Platform

A modern, responsive fitness coaching website built with Next.js 16, React 19, TypeScript, and Tailwind CSS with shadcn/ui components.

## 🌟 Features

### Pages
- **Home Page**: Hero section with inspiring quote, services overview, testimonials carousel, and call-to-actions
- **About Me**: Detailed information about the coach, certifications, experience, and core values
- **Online Program**: Comprehensive overview of the coaching methodology and training philosophy
- **Contact**: Interactive contact form with messaging capability
- **Plan Details**: Dynamic pages for each pricing tier with detailed breakdowns

### Components
- **Responsive Header**: Navigation with mobile menu support
- **Hero Section**: Full-width image with overlapping quote and scroll-to-section functionality
- **Services**: Plan cards with pricing and "View Details" buttons
- **Testimonials**: Animated carousel showcasing client reviews
- **Footer**: Multi-column layout with links and social media

### Pricing Plans
1. **1 Month** - $200
2. **3 Months** - $500 (Most Popular)
3. **6 Months** - $1,000
4. **12 Months** - $2,100 (Save $300)

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jinay-fitness
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
jinay-fitness/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── online-program/
│   │   │   └── page.tsx
│   │   ├── plan/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── textarea.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
└── tsconfig.json
```

## 🎨 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 🎯 What's Included in Coaching Plans

- Building a resilient, responsive physique by mastering fundamental movement patterns
- Calisthenics for control, weight training for raw strength, and weighted calisthenics
- Transitioning from simply moving weight to executing flawless, powerful lifts
- Refining technique and ingrain efficient motor patterns
- Personalized workout plans that respect fundamentals and challenge your body
- Nutrition coaching and strategies to resist unhealthy food temptations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🛠️ Development

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 📄 License

This project is created for Jinay Fitness coaching services.

## 🤝 Contact

For inquiries about coaching services:
- Email: info@jinayfitness.com
- Phone: +1 (555) 555-1234

---

Built with ❤️ using Next.js and shadcn/ui
