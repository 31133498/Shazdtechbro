# The Cracked Dev Portfolio

A production-grade React portfolio application for Sanni Shazily Oladipupo, showcasing AI/ML projects and technical expertise.

## 🚀 Tech Stack

- **React 18.2** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Query** for server state management
- **React Hot Toast** for notifications
- **Zustand** for client state (ready for implementation)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── pages/
│   └── PortfolioPage.tsx          # Main portfolio page
├── components/
│   ├── ui/
│   │   ├── Button.tsx             # Reusable button component
│   │   └── ProjectCard.tsx        # Project display card
│   └── features/
│       ├── Header.tsx             # Navigation header
│       ├── HeroSection.tsx        # Hero/landing section
│       ├── ProjectsSection.tsx    # Projects showcase
│       ├── SkillsSection.tsx      # Technical skills
│       ├── TimelineSection.tsx    # Career timeline
│       └── Footer.tsx             # Site footer
├── api/
│   └── useProjects.ts             # React Query hook for projects
├── mocks/
│   └── projectsData.ts            # Mock project data
├── types/
│   └── portfolio.types.ts         # TypeScript interfaces
├── utils/
│   └── cn.ts                      # Utility functions
└── App.tsx                        # Root application component
```

## 🎨 Design System

- **Primary Color**: #13ec49 (Signature green)
- **Typography**: Inter font family
- **Spacing**: 8px base unit system
- **Animations**: Framer Motion with 150-300ms transitions
- **Responsive**: Mobile-first approach

## 🔧 Features

- ✅ Fully responsive design
- ✅ Dark mode optimized
- ✅ Smooth animations and transitions
- ✅ Accessible navigation
- ✅ Loading states with skeleton screens
- ✅ TypeScript throughout
- ✅ Production-ready build

## 🌐 Live Projects

- **DermaScan AI**: https://derma-scan-ai.vercel.app/
- **Veritas AI**: https://veritas-ai-dcfw.vercel.app/
- **Ilmeen**: https://ilmeen.vercel.app/

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The application is optimized for deployment on Vercel, Netlify, or any static hosting service.

```bash
npm run build
# Deploy the 'dist' folder
```