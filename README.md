# SYR CUISINE - Kitchen Design Website

A modern, bilingual (EN/FR) website for SYR CUISINE, a custom architectural and commercial kitchen solutions provider in Laval, Quebec.

🌐 **Live Site**: [syrcuisine.com](https://syrcuisine.com)

## About

SYR CUISINE specializes in custom kitchen cabinets, countertops, airbrushing & painting, and architectural/commercial work. This website showcases their work and allows potential customers to learn about their services and get in touch.

## Features

- **Bilingual Support**: Full English/French translations using next-intl
- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Gallery**: Showcase of completed kitchen projects with filtering
- **Service Information**: Detailed pages about all services offered
- **Contact Form**: Formspree integration for email submissions
- **SEO Optimized**: Bilingual meta tags and structure for search engines

## Tech Stack

- **Framework**: Next.js 15 (App Router) with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl for EN/FR translations
- **Icons**: Lucide React
- **Forms**: Formspree for contact form submissions
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Milad9A/SYR-CUISINE.git
cd SYR-CUISINE
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your Formspree endpoint:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will redirect to `/en` or `/fr` based on your browser language.

## Project Structure

```
syr_cuisine/
├── app/
│   ├── [locale]/           # Dynamic locale routing (en/fr)
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page with Formspree form
│   │   ├── gallery/        # Project gallery with filtering
│   │   ├── services/       # Services page
│   │   ├── layout.tsx      # Locale layout with NextIntlProvider
│   │   └── page.tsx        # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Main navigation with language switcher
│   ├── LanguageSwitcher.tsx # EN/FR toggle
│   └── Footer.tsx          # Footer component
├── messages/
│   ├── en.json             # English translations
│   └── fr.json             # French translations
├── public/
│   ├── gallery/            # Kitchen project images
│   ├── favicon.ico         # Site favicon
│   ├── icon.png            # App icon
│   └── apple-icon.png      # Apple touch icon
├── src/
│   └── i18n/
│       └── routing.ts      # Internationalization routing config
├── i18n.ts                 # next-intl configuration
├── middleware.ts           # Locale detection middleware
├── .env.local              # Environment variables (not in git)
└── .env.example            # Environment template
```

## Adding Content

### Adding Project Photos

1. Create the gallery folder and add your kitchen project images:

```bash
mkdir -p public/gallery
```

2. Add images to `public/gallery/` folder
3. Update the image paths in `app/gallery/page.tsx`
4. The images from your screenshot can be placed here

Example:

```typescript
const galleryImages = [
  {
    id: 1,
    src: "/gallery/kitchen-1.jpg",
    alt: "Description of kitchen",
    category: "Modern",
    title: "Project Name"
  },
  // Add more images...
];
```

### Updating Contact Information

The contact information is in:

- `components/Navigation.tsx` - Phone number in header
- `components/Footer.tsx` - Full contact details
- `app/contact/page.tsx` - Contact page details

Current contact info:

- **Elia**: 514-238-8886
- **Louay**: 514-497-7190
- **Email**: <info@syrcuisine.com>
- **Location**: Laval, Quebec
- **Service Area**: Greater Montreal Area
- **Hours**: Monday-Friday 8:00 AM - 6:00 PM

### Contact Form Configuration

The contact form uses Formspree for email submissions:

1. **Get Formspree Endpoint**:
   - Sign up at [formspree.io](https://formspree.io)
   - Create a new form
   - Copy your form endpoint (e.g., `xgvraakp`)

2. **Add to Environment Variables**:
   - Add to `.env.local`: `NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_endpoint`
   - For Vercel deployment: Add in Project Settings → Environment Variables

3. **Form Features**:
   - Bilingual labels and validation messages
   - Success/error state handling
   - Email forwarding to <info@syrcuisine.com>

## Deployment

### Deployed on Vercel

The site is currently deployed at [syrcuisine.com](https://syrcuisine.com)

**Environment Variables in Vercel**:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - Your Formspree form endpoint

**Custom Domain Setup**:

1. Domain purchased from Namecheap: syrcuisine.com
2. DNS configured to point to Vercel
3. SSL automatically provisioned

### Deploy Your Own Instance

1. Fork or clone this repository
2. Import to Vercel/Netlify
3. Add environment variables
4. Deploy automatically on push to main branch

## Contact

- Email: <info@syrcuisine.com>
- Elia: 514-238-8886
- Louay: 514-497-7190

---

Built with Next.js and Tailwind CSS
