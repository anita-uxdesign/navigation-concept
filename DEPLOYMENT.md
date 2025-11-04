# Deployment Guide

This guide will help you deploy your Navigation MUI App to the web.

## Option 1: Deploy to Vercel (Recommended) ⭐

Vercel is the best option for Next.js applications - it's free, fast, and requires zero configuration.

### Steps:

1. **Push your code to GitHub** (already done!)
   ```bash
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your repository: `anita-uxdesign/navigation-concept`
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** 🎉
   - Your app will be live at `https://navigation-concept.vercel.app` (or similar)
   - Every push to `main` will auto-deploy

### Custom Domain (Optional)
- In Vercel dashboard → Settings → Domains
- Add your custom domain and follow the DNS instructions

---

## Option 2: Deploy to Netlify

Alternative to Vercel, also free and easy.

### Steps:

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository: `anita-uxdesign/navigation-concept`
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy"

---

## Option 3: GitHub Pages (Static Export)

For GitHub Pages, you need to export your Next.js app as static HTML.

### Steps:

1. **Update `next.config.js`:**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     basePath: '/navigation-concept',
     images: {
       unoptimized: true,
     },
   };
   
   module.exports = nextConfig;
   ```

2. **Add deployment script to `package.json`:**
   ```json
   "scripts": {
     "deploy": "npm run build && touch out/.nojekyll && git add -f out && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"
   }
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Click Save

5. **Access your site:**
   - `https://anita-uxdesign.github.io/navigation-concept/`

**Note:** GitHub Pages doesn't support server-side rendering, so some Next.js features may be limited.

---

## Option 4: Deploy to Railway

Free tier available with automatic deployments.

### Steps:

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select `anita-uxdesign/navigation-concept`
5. Railway auto-detects Next.js
6. Click "Deploy Now"

---

## Option 5: Deploy to Render

Another good alternative with a free tier.

### Steps:

1. Go to [render.com](https://render.com)
2. Sign in with GitHub
3. Click "New" → "Web Service"
4. Connect your repository
5. Settings:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
6. Click "Create Web Service"

---

## Recommended: Vercel

For this Next.js project, **Vercel is the best choice** because:
- ✅ Zero configuration
- ✅ Automatic deployments on every push
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Preview deployments for pull requests
- ✅ Built by the creators of Next.js

---

## Environment Variables (if needed)

If you add environment variables later, set them in your deployment platform:

**Vercel:** Project Settings → Environment Variables  
**Netlify:** Site Settings → Environment Variables  
**GitHub Pages:** Not supported (use build-time env vars)

---

## Monitoring Your Deployment

After deployment, test these key features:
- ✅ Navigation rail loads correctly
- ✅ Sub-navigation panels work
- ✅ Customize dialog functions properly
- ✅ LocalStorage persistence works
- ✅ All routes are accessible
- ✅ Mobile responsive design

Visit `/qa-states` on your deployed site for a complete testing checklist.

---

## Troubleshooting

### Build fails on Vercel/Netlify
- Check the build logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Images don't load
- For static export, use `images.unoptimized: true` in `next.config.js`
- For Vercel/Netlify, Next.js Image Optimization works automatically

### Routes return 404
- For static export on GitHub Pages, ensure `basePath` is set correctly
- For Vercel/Netlify, this shouldn't be an issue

---

## Quick Deploy Command

The absolute fastest way to deploy:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from project root)
vercel
```

Follow the prompts, and you're live in under a minute! 🚀

