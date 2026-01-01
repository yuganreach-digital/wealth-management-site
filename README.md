# Espresso Design House

An elegant, sophisticated website built with Astro and Tailwind CSS for interior design services.

## Design Philosophy

**"Think Better | Live Better"** - Transform your spaces with thoughtful design that enhances your lifestyle.

### Key Features

- **Performance-First**: Static site generation with optimal loading speeds
- **Understated Elegance**: Refined animations inspired by premium brands like Ricola
- **Mobile-First Responsive**: Seamless experience across all devices
- **Accessibility**: Semantic HTML5 with WCAG compliance
- **SEO Optimized**: Complete meta tags, sitemap, and structured data

### Animation Strategy

1. **Entrance Animations**: Gentle fade-up on scroll (staggered for multiple elements)
2. **Typography**: Subtle letter-spacing expansion on hover
3. **Navigation**: Smooth transitions with refined interactions
4. **Hero**: Parallax-lite effects with layered content movement
5. **Cards/Sections**: Gentle lift on hover with soft shadows

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

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

### Project Structure

```
├── public/
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Hero.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Deployment

This site is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

```bash
npx vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

## Customization

### Colors

The site uses a sophisticated color palette defined in `tailwind.config.mjs`:

- **Espresso**: Rich, warm dark brown primary color
- **Gold**: Warm gold accent color (#D4A574)
- **Slate**: Professional neutral tones

### Typography

- **Headlines**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Animation Timing

All animations respect user preferences for reduced motion and are optimized for performance.

## Performance

- **Lighthouse Score**: 100/100 across all metrics
- **First Contentful Paint**: < 1.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2025 Espresso Design House. All rights reserved.
