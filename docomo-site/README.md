# Docomo Technologies Ltd Website

A modern, responsive website for Docomo Technologies Ltd built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **SEO Optimized**: Meta tags, Open Graph, JSON-LD structured data
- **Accessibility**: WCAG compliant markup and keyboard navigation
- **Performance**: Optimized for fast loading and Core Web Vitals
- **Component-Based Architecture**: Reusable UI components
- **Static Site Generation**: Fast, pre-rendered pages
- **Form Handling**: Server actions for contact and application forms
- **API Routes**: RESTful endpoints for contact and newsletter
- **CI/CD Pipeline**: GitHub Actions workflow for testing and deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd docomo-site

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Visit http://localhost:3000
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
docomo-site/
├── .github/workflows/     # CI/CD workflows
├── public/                # Static assets
│   ├── assets/            # Images, illustrations, logos
│   ├── favicon.svg        # Site favicon
│   ├── robots.txt         # Search engine instructions
│   └── sitemap.xml        # XML sitemap (generated)
├── src/
│   ├── app/               # App router pages and layouts
│   ├── components/        # Reusable UI components
│   │   ├── blog/          # Blog-specific components
│   │   ├── forms/         # Form components
│   │   ├── layout/        # Layout components
│   │   ├── sections/      # Page section components
│   │   ├── seo/           # SEO components
│   │   └── ui/            # Primitive UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and libraries
│   │   ├── api/           # API clients
│   │   ├── cms/           # CMS integrations
│   │   └── validators.ts  # Form validation schemas
│   ├── server/            # Server actions
│   ├── styles/            # Global styles and CSS variables
│   └── types/             # TypeScript type definitions
├── api/                   # Legacy API routes
├── scripts/               # Utility scripts
└── tests/                 # Test files
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run Jest tests in watch mode
- `npm run generate:sitemap` - Generate sitemap.xml
- `npm run generate:og` - Generate Open Graph images

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments on every push to the main branch.

## Environment Variables

Create a `.env.local` file based on `.env.local.example`:

```bash
cp .env.local.example .env.local
```

## Color Palette

- **Primary Blue**: `#0B4DD8` (Main CTAs, links)
- **Primary Blue Dark**: `#0837A8` (Hover states)
- **Accent Cyan**: `#00C2D9` (Highlights, badges)
- **Neutral 900**: `#0B1220` (Headings)
- **Neutral 800**: `#1A2636` (Body copy)
- **Neutral 600**: `#4B5563` (Muted text)
- **Neutral 200**: `#E6EEF9` (Light backgrounds)
- **Neutral 100**: `#F7FAFF` (Page background)
- **Success**: `#16A34A` (Success states)
- **Warning**: `#F59E0B` (Warning states)
- **Danger**: `#EF4444` (Error states)

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is proprietary to Docomo Technologies Ltd.

## Contact

For inquiries, contact us at info@docomotech.com