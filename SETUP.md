# Setup Instructions for SYR CUISINE Website

## Quick Start

The website is now running! You should see it at <http://localhost:3000>

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

### 2. Set Up the Contact Form

Currently, the contact form shows a demo message. To make it actually send emails:

**Option A: Use Formspree (Easiest - Free)**

1. Go to <https://formspree.io> and sign up (free)
2. Create a new form and get your form endpoint
3. In `app/contact/page.tsx`, update the form to use your endpoint

**Option B: Use EmailJS**

1. Sign up at <https://www.emailjs.com>
2. Follow their React setup guide
3. Update the form submission handler

**Option C: Use your email server**

- Create a Next.js API route
- Use Nodemailer or similar to send emails

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

### 4. Deploy Your Website

When ready to make the site live:

**Vercel (Recommended - Free):**

1. Create a GitHub account if you don't have one
2. Push this code to a GitHub repository
3. Go to <https://vercel.com> and sign in with GitHub
4. Click "Import Project" and select your repository
5. Vercel will automatically deploy your site
6. You'll get a free URL like `syr-cuisine.vercel.app`
7. You can add your own domain later

**Other options:**

- Netlify (also free and easy)
- Your own hosting with Node.js support

### 5. Add Your Domain (Optional)

Once deployed, you can add a custom domain like `syrcuisine.com`:

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In Vercel/Netlify settings, add your custom domain
3. Update DNS records as instructed
4. Your site will be live at your domain!

## File Structure Overview

```
syr_cuisine/
├── app/
│   ├── page.tsx           → Homepage (hero, features, CTA)
│   ├── about/page.tsx     → About page (company story, team)
│   ├── services/page.tsx  → Services offered
│   ├── gallery/page.tsx   → Project photos gallery
│   ├── contact/page.tsx   → Contact form and info
│   ├── layout.tsx         → Site layout (nav, footer)
│   └── globals.css        → Global styles
├── components/
│   ├── Navigation.tsx     → Header navigation
│   └── Footer.tsx         → Site footer
├── public/
│   └── gallery/          → Put your photos HERE
└── package.json          → Dependencies
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
✅ 5 pages: Home, About, Services, Gallery, Contact
✅ Contact form (needs email setup)
✅ SEO optimized
✅ Fast loading with Next.js
✅ Easy to customize

## Important Notes

1. **Add your real kitchen photos** to `public/gallery/` folder
2. **Set up contact form** so it actually sends emails
3. **Test on mobile** to see how it looks on phones
4. **Deploy to Vercel** when ready (it's free!)

---

Need help? The code is well-commented and organized. Each page file is in `app/[page-name]/page.tsx`.
