# 🚀 Syntria Website - Premium Quantitative Trading Platform

## ✨ What's Been Built

A **next-level, premium website** for Syntria - an AI-forward quantitative trading firm. This is a world-class, production-ready site with:

### 🎨 Premium Design Features
- **Stunning Visual Effects**: Multi-layered animated gradient orbs, premium glassmorphism
- **Advanced Animations**: Smooth transitions, hover effects, rotating icons, gradient animations
- **Professional Color Scheme**: Cyan → Teal → Blue → Purple gradients for a financial/tech aesthetic
- **Enhanced Typography**: Premium gradient text effects throughout
- **Glow Effects**: Subtle glowing elements on hover for premium feel

### 🏗️ Architecture
- **React 18** with Vite for lightning-fast performance
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for buttery-smooth animations
- **Optimized Performance**: Reduced particle count, efficient animations

### 📄 Sections
1. **Hero**: Eye-catching intro with GLOBAL | 24/7 | MULTI-ASSET badges
2. **About**: Syntria's mission and vision
3. **Technology**: 6 core trading capabilities with animated cards
4. **Team**: CEO George Monogyios profile with professional image
5. **Contact**: Hiring-focused with talent@syntriatech.ai
6. **Footer**: Complete branding and links

### 🎯 Key Features
- ✅ Syntria logo integrated
- ✅ "QUANTITATIVE TRADING" tagline
- ✅ CEO profile with image and LinkedIn
- ✅ All CTAs point to talent@syntriatech.ai
- ✅ Premium gradient buttons with hover effects
- ✅ Fully responsive (mobile to desktop)
- ✅ Optimized for speed
- ✅ Professional trading firm aesthetic

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Opens at http://localhost:5173 (or 5174 if 5173 is busy)

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Fastest)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts, done in 2 minutes!
```

### Option 2: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select GitHub Actions
4. Use the default Vite workflow

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },  // Main color scheme
  accent: { ... },   // Accent colors
}
```

### Content
- **Hero**: `src/components/Hero.jsx`
- **About**: `src/components/About.jsx`
- **Technology**: `src/components/Services.jsx`
- **Team**: `src/components/Team.jsx`
- **Contact**: `src/components/Contact.jsx`

### Images
- Logo: `/public/images/logo.png`
- CEO: `/public/images/ceo.jpg`

## 🔥 Performance Optimizations
- Optimized particle system (60 particles max)
- Efficient animations with Framer Motion
- Lazy loading ready
- Production build minified and optimized

## 📧 Contact Integration
All contact buttons/links point to: **talent@syntriatech.ai**

## 🎓 Technical Stack
- React 18.2.0
- Vite 5.0.2
- Tailwind CSS 3.3.5
- Framer Motion 10.16.4
- Lucide React (icons)

---

**Built with ownership and passion for Syntria! 🚀**
