# Setup Instructions for SYR CUISINE Website

## Quick Start

✅ **The website is live at**: [syrcuisine.com](https://syrcuisine.com)

🌐 **Bilingual**: Fully supports English and French (EN/FR)

For local development, the site runs at <http://localhost:3000> and redirects to `/en` or `/fr`

## Next Steps

### 1. Add Your Kitchen Project Photos

The images from your screenshot (the kitchen photos) should be added to the website:

1. **Save your project photos** from your phone/computer to the `public/gallery/` folder
2. **Name them clearly**, for example:
   - `kitchen-modern-white-1.jpg`
   - `kitchen-gray-cabinets-2.jpg`
   - `kitchen-contemporary-3.jpg`

3. **Update the gallery** by editing `app/gallery/page.tsx`:
   - Find the `galleryImages` array (around line 10)
   - Change the image paths to match your files
   - Update titles and categories

Example:

```typescript
const galleryImages = [
  {
    id: 1,
    src: "/gallery/kitchen-modern-white-1.jpg",
    alt: "Modern white kitchen with aluminum cabinets",
    category: "Modern",
    title: "Contemporary White Kitchen"
  },
  // Add more of your actual project photos
];
```

### 2. Contact Form (Already Configured)

✅ **The contact form is already set up with Formspree**

- Sends emails to <info@syrcuisine.com>
- Configured via environment variable: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- Bilingual form labels and validation

**To update the endpoint**:

1. Edit `.env.local` and change `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
2. For production (Vercel), update in Project Settings → Environment Variables
3. Redeploy the site

### 3. Customize Content

**Update Company Information:**

- All contact details are already set from the screenshot
- If you need to change anything, check:
  - `components/Footer.tsx`
  - `components/Navigation.tsx`
  - `app/contact/page.tsx`

**Modify Colors:**

- The site uses blue (`blue-600`, `blue-700`)
- To change colors, search and replace in all files
- Or update Tailwind config for site-wide changes

**Add More Content:**

- Edit text in each page file (`app/*/page.tsx`)
- Add testimonials, team photos, etc.

### 4. Deployment (Already Done)

✅ **The website is deployed on Vercel**

- Live at: [syrcuisine.com](https://syrcuisine.com)
- Auto-deploys on push to main branch
- Environment variables configured

**Domain Setup**:

✅ Domain: syrcuisine.com (purchased from Namecheap)
✅ Email: <info@syrcuisine.com> (email forwarding configured)
✅ DNS: Configured to point to Vercel
✅ SSL: Automatically provisioned by Vercel

**To make changes**:

1. Edit files locally
2. Commit and push to GitHub
3. Vercel automatically rebuilds and deploys
4. Changes live in ~2 minutes

## File Structure Overview

```
syr_cuisine/
├── app/
│   └── [locale]/              → Dynamic routing for EN/FR
│       ├── page.tsx           → Homepage (hero, features, CTA)
│       ├── about/page.tsx     → About page (company story, team)
│       ├── services/page.tsx  → Services offered
│       ├── gallery/page.tsx   → Project photos gallery
│       ├── contact/page.tsx   → Contact form with Formspree
│       └── layout.tsx         → Locale layout with translations
├── components/
│   ├── Navigation.tsx         → Header with language switcher
│   ├── LanguageSwitcher.tsx   → EN/FR toggle
│   └── Footer.tsx             → Site footer
├── messages/
│   ├── en.json                → English translations
│   └── fr.json                → French translations
├── public/
│   └── gallery/              → Put your photos HERE
├── middleware.ts             → Locale detection
└── .env.local               → Environment variables (not in git)
```

## Running the Site

**Development mode** (for editing):

```bash
npm run dev
```

Visit <http://localhost:3000>

**Build for production**:

```bash
npm run build
npm start
```

## Getting Help

If you need help with:

- Adding images: Edit `app/gallery/page.tsx`
- Changing text: Edit the relevant page file
- Changing colors: Search for `blue-600` and replace
- Contact form: See "Set Up the Contact Form" above

## What's Included

✅ Modern, professional design
✅ Fully responsive (mobile, tablet, desktop)
✅ Bilingual support (English/French) with next-intl
✅ 5 pages: Home, About, Services, Gallery, Contact
✅ Working contact form with Formspree
✅ Language switcher in navigation
✅ SEO optimized with bilingual meta tags
✅ Fast loading with Next.js 15 and Turbopack
✅ Deployed on Vercel with custom domain
✅ Professional email (<info@syrcuisine.com>)

## Important Notes

1. **Add your real kitchen photos** to `public/gallery/` folder and update gallery page
2. **Contact form is configured** - emails go to <info@syrcuisine.com>
3. **Site is bilingual** - test both EN and FR versions
4. **Already deployed** - live at syrcuisine.com
5. **Auto-deployment** - push to GitHub main branch to update live site

## Current Status

✅ Deployed and live
✅ Custom domain configured
✅ Email forwarding active
✅ Contact form working
✅ Bilingual (EN/FR)
✅ Favicon and icons added
✅ All content updated

---

Need help? The code is well-commented and organized. Each page file is in `app/[page-name]/page.tsx`.
