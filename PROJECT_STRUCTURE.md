# Docomo Technologies Ltd - Project Structure

## Overview

This document outlines the complete file structure and component architecture for the Docomo Technologies Ltd website.

## Complete File Tree

```
docomo-site/
├─ .github/
│  └─ workflows/
│     └─ ci.yml
├─ public/
│  ├─ assets/
│  │  ├─ logos/
│  │  │  ├─ docomo-logo-full.svg
│  │  │  ├─ docomo-mark.svg
│  │  │  └─ favicon.svg
│  │  ├─ illustrations/
│  │  └─ og/
│  │     └─ og-default.png
│  ├─ robots.txt
│  ├─ sitemap.xml (generated)
│  └─ manifest.webmanifest
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ globals.css
│  │  ├─ page.tsx                // Home
│  │  ├─ about/
│  │  │  └─ page.tsx
│  │  ├─ services/
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]/page.tsx
│  │  ├─ projects/
│  │  │  ├─ page.tsx
│  │  │  └─ [id]/page.tsx
│  │  ├─ blog/
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]/page.tsx
│  │  ├─ careers/
│  │  │  ├─ page.tsx
│  │  │  └─ [id]/page.tsx
│  │  ├─ contact/
│  │  │  └─ page.tsx
│  │  ├─ dashboard/               // Admin (basic)
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx              // Overview
│  │  │  ├─ projects/
│  │  │  │  └─ page.tsx
│  │  │  ├─ clients/
│  │  │  │  └─ page.tsx
│  │  │  ├─ invoices/
│  │  │  │  └─ page.tsx
│  │  │  └─ settings/
│  │  │     └─ page.tsx
│  │  └─ (components)/            // colocated UI components for app router
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Input.tsx
│  │  │  ├─ Textarea.tsx
│  │  │  ├─ Modal.tsx
│  │  │  └─ Tooltip.tsx
│  │  ├─ layout/
│  │  │  ├─ Header.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ MobileNav.tsx
│  │  │  └─ SkipToContent.tsx
│  │  ├─ sections/
│  │  │  ├─ Hero.tsx
│  │  │  ├─ ServicesGrid.tsx
│  │  │  ├─ ServiceCard.tsx
│  │  │  ├─ CaseStudyCard.tsx
│  │  │  ├─ Testimonials.tsx
│  │  │  ├─ CTA.tsx
│  │  │  └─ TeamGrid.tsx
│  │  ├─ seo/
│  │  │  ├─ Meta.tsx
│  │  │  ├─ OGImage.tsx
│  │  │  └─ JsonLd.tsx
│  │  ├─ blog/
│  │  │  ├─ PostCard.tsx
│  │  │  └─ AuthorProfile.tsx
│  │  └─ forms/
│  │     ├─ ContactForm.tsx
│  │     ├─ NewsletterForm.tsx
│  │     └─ JobApplicationForm.tsx
│  ├─ lib/
│  │  ├─ api/
│  │  │  ├─ sendContact.ts
│  │  │  └─ cmsClient.ts
│  │  ├─ cms/
│  │  │  └─ client.ts
│  │  ├─ validators.ts
│  │  ├─ fetcher.ts
│  │  └─ schema.ts (types/interfaces)
│  ├─ hooks/
│  │  ├─ useDebounce.ts
│  │  ├─ useMediaQuery.ts
│  │  ├─ useScrollProgress.ts
│  │  └─ useForm.ts
│  ├─ server/
│  │  └─ actions/
│  │     ├─ contactAction.ts
│  │     ├─ jobApplicationAction.ts
│  │     └─ newsletterAction.ts
│  ├─ styles/
│  │  ├─ tailwind.css
│  │  └─ tokens.css           // CSS variables for colors/space
│  ├─ types/
│  │  └─ index.d.ts
│  └─ pages/                   // for legacy or API routes (if needed)
├─ api/                        // API directory for legacy API routes
│  ├─ contact.ts
│  ├─ newsletter.ts
│  └─ rss.xml.ts
├─ scripts/
│  ├─ generate-og.js
│  └─ generate-sitemap.js
├─ tests/                      // Test files
├─ .env.local.example
├─ next.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig.json
├─ package.json
├─ README.md
└─ LICENSE
```

## Component Inventory & Responsibilities

### Layout / Global Components

#### layout.tsx (app root layout)
- Imports global metadata, Meta component, global CSS, font preloads
- Renders Header, Footer, and children inside main element
- Adds SkipToContent for keyboard users

#### Header.tsx
- Props: links: MenuItem[]
- Responsibilities: logo + main nav + CTA (Contact) + mobile menu button
- Accessibility: keyboard nav, aria-expanded on mobile menu button

#### Footer.tsx
- Responsibilities: company info, address, quick links, social icons, newsletter form, copyright

#### MobileNav.tsx
- Slide-in panel with focus trap
- Uses Framer Motion for animation

#### SkipToContent.tsx
- Skip link for keyboard users to jump to main content

### UI Primitives (Reusable Components)

#### Button.tsx
- Props: variant: 'primary'|'ghost'|'outline', size, onClick, as?: string|Link
- Includes keyboard focus styles & aria-pressed if toggle

#### Input.tsx / Textarea.tsx
- Props: type, label, name, error, aria attrs
- Connects to useForm hook

#### Modal.tsx
- Focus trap, close on Esc, click-outside close
- Accessible header/label

#### Tooltip.tsx
- Uses role="tooltip" and aria-describedby

### Section Components (Page Building Blocks)

#### Hero.tsx
- Props: title, subtitle, ctas: CTA[], optional hero image or illustration
- Includes H1 on homepage only

#### ServicesGrid.tsx & ServiceCard.tsx
- Card includes icon, title, short summary, CTA to service page

#### CaseStudyCard.tsx
- Short summary, metrics (before/after), link to full case study

#### Testimonials.tsx
- Carousel accessible to screen readers

#### TeamGrid.tsx
- Name, role, LinkedIn, micro-bio
- Provides fallback avatars

#### CTA.tsx
- Reusable full-width call-to-action strip
- Supports text + form

### Blog Components

#### PostCard.tsx
- Thumbnail, title, excerpt, tags, reading time, date

#### AuthorProfile.tsx
- Avatar, name, bio, socials

### Form Components

#### ContactForm.tsx
- Fields: name, company, email, phone (optional), subject, message, consent checkbox (GDPR-like)
- Validations: required, email format, recaptcha (optional)
- Sends to /api/contact and shows toasts

#### NewsletterForm.tsx
- Integrates with Mailchimp/ConvertKit/third-party or your db

#### JobApplicationForm.tsx
- Accepts resume upload, cover letter
- Store to S3 or email via service

### SEO Components

#### Meta.tsx (Single source of truth for title/meta tags)
- Props: title, description, image, canonical, ogType, robots, structuredData
- Automatically sets OpenGraph & Twitter cards
- Generate a titleTemplate: ${title} | Docomo Technologies Ltd

#### JsonLd.tsx
- Render Organization, LocalBusiness, BreadcrumbList, WebSite JSON-LD where appropriate

#### OGImage.tsx / generate-og.js
- Generate social preview images for blog posts (serverless job or remote service)

### Admin / Dashboard Components

#### Dashboard layout & components
- AdminHeader, AdminSidebar, ShipmentList, InvoiceGenerator, UserManagement, Settings
- Use role-based checks (SESSION + JWT)
- Keep admin under /dashboard

### Utility Components & Hooks

#### Custom Hooks
- useDebounce.ts
- useMediaQuery.ts
- useScrollProgress.ts
- useForm.ts

#### Utilities
- fetcher.ts for SWR/React query
- validators.ts (zod schemas) - strongly recommended

## Pages Implementation

### Public Pages
- `/` - Landing (H1, hero, services summary, trusted logos, latest blog, CTA)
- `/about` - Company story, mission, team, timeline
- `/services` - Services overview (index)
- `/services/[slug]` - Full service detail (SEO-rich)
- `/projects` - Portfolio index
- `/projects/[id]` - Case study detail (with images, metrics)
- `/blog` - Blog index + filters
- `/blog/[slug]` - Blog post with structured data
- `/careers` - Open roles, culture
- `/careers/[id]` - Job detail + apply form
- `/contact` - Contact form + map + register interest
- `/legal/privacy` - Privacy policy
- `/legal/terms` - Terms of service

### API Endpoints
- `/api/contact` - POST contact handling
- `/api/newsletter` - POST subscribe
- `/api/rss.xml` - RSS feed
- `/sitemap.xml` - Dynamic sitemap

### Admin Pages
- `/dashboard/*` - Admin UI (protected, optional)
  - `/dashboard` - Overview
  - `/dashboard/projects` - Projects management
  - `/dashboard/clients` - Clients management
  - `/dashboard/invoices` - Invoices management
  - `/dashboard/settings` - System settings

## Color Palette & Design Tokens

### Primary Brand Palette
- Primary Blue (brand): `#0B4DD8` (Main CTAs, links)
- Primary Blue - Dark: `#0837A8` (Hover/active states)
- Accent Cyan: `#00C2D9` (Highlights, badges)
- Neutral 900: `#0B1220` (Headings/text)
- Neutral 800: `#1A2636` (Body copy)
- Neutral 600: `#4B5563` (Muted text)
- Neutral 200: `#E6EEF9` (Light backgrounds)
- Neutral 100: `#F7FAFF` (Page background)
- Success: `#16A34A` (Green)
- Warning: `#F59E0B` (Amber)
- Danger: `#EF4444` (Red)

### Secondary/Supportive Palette
- Warm Accent: `#FF6B6B` (Micro-interactions)
- Gold: `#FBBF24` (Badges/metrics)
- Soft Violet: `#7C3AED` (Hero gradients)

### CSS Variables (tokens.css)
```css
:root{
  --color-brand: #0B4DD8;
  --color-brand-800: #0837A8;
  --color-accent: #00C2D9;
  --bg: #F7FAFF;
  --text: #0B1220;
  --muted: #4B5563;
  --success: #16A34A;
  --danger: #EF4444;
  --warning: #F59E0B;
  --radius: 12px;
  --container-max: 1200px;
}
```

## Typography

### Fonts
- Primary: Inter (variable) - body & UI
- Display: Poppins or Space Grotesk - hero/headings

### Sizes
- H1: 48–56px (desktop)
- H2: 36–44px
- H3: 28–32px
- Body: 16px (line-height 1.6)

### Font Weights
- Regular: 400
- Semibold: 600
- Bold: 700

## Brand Identity

### Logo System
- Primary logo: Horizontal lockup (mark + wordmark)
- Mark: Simple geometric mark (use for favicon & social icons)
- Favicon: Simplified mark
- Spacing: Maintain x clearspace where x = height of mark

### Tone of Voice
- Confident yet accessible
- Professional and helpful
- Tagline: "Reliable technology, built for African growth."
- Mission: "Empowering Nigerian businesses with secure, localised IT solutions."

### Imagery
- Clean, abstract tech illustrations (lines, nodes, maps)
- Real photos of small teams or Nigerian enterprise environments
- Bright images with brand color overlays for cohesion

### Iconography
- Single icon set (Heroicons or Lucide) for consistency
- Filled icons for CTAs, outline for content lists

## Development Standards

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Jest for unit testing

### Performance
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minification and compression
- Caching strategies

### Security
- Input validation and sanitization
- CSRF protection for forms
- Secure headers
- Environment variable management

### Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML markup
- Keyboard navigation support
- Screen reader compatibility

## Deployment & CI/CD

### Build Process
1. Generate sitemap
2. Generate OG images
3. Run tests
4. Build Next.js application
5. Deploy to Vercel

### Environment
- Development: localhost:3000
- Staging: staging.docomotech.com
- Production: docomotech.com

### Monitoring
- Performance monitoring
- Error tracking
- Uptime monitoring
- Analytics integration