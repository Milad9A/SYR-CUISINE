# SYR CUISINE - Kitchen Design Website

A modern, responsive website for SYR CUISINE, a premium aluminum kitchen solutions provider in Montreal, Quebec.

## About

SYR CUISINE specializes in custom aluminum kitchen cabinets, countertops, and complete kitchen renovations. This website showcases their work and allows potential customers to learn about their services and get in touch.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Gallery**: Showcase of completed kitchen projects
- **Service Information**: Detailed pages about all services offered
- **Contact Form**: Easy-to-use contact form for inquiries
- **SEO Optimized**: Proper meta tags and structure for search engines

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:

```bash
cd syr_cuisine
```

2. Install dependencies (already done):

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
syr_cuisine/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page with form
│   ├── gallery/        # Project gallery
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout with navigation
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Main navigation component
│   └── Footer.tsx      # Footer component
├── public/
│   └── gallery/        # Place project images here
└── README.md
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
- **Location**: Montreal, Quebec

### Setting Up Contact Form

The contact form currently shows a demo. To enable real submissions:

1. **Use Formspree** (easiest):
   - Sign up at formspree.io
   - Get your form endpoint
   - Update form action in `app/contact/page.tsx`

2. **Use EmailJS**: Sign up at emailjs.com

3. **Use Next.js API Routes** with SendGrid/Resend

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit vercel.com
3. Import your repository
4. Auto-deploy

### Deploy to Netlify

1. Push code to GitHub
2. Visit netlify.com
3. Add new site from Git
4. Build command: `npm run build`

## Contact

- Email: <info@syrcuisine.com>
- Elia: 514-238-8886
- Louay: 514-497-7190

---

Built with Next.js and Tailwind CSS
