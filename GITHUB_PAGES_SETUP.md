# GitHub Pages Deployment Setup

Your project is now configured for GitHub Pages! 🎉

## What's Been Configured

✅ **next.config.js** - Updated with static export settings  
✅ **GitHub Actions workflow** - Automatic deployment on push  
✅ **Base path** - Set to `/navigation-concept` for proper routing  

## Next Steps

### 1. Configure Git (if not already done)

```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

### 2. Commit and Push Changes

```bash
cd "/Users/anita-spa/Documents/Cursor/Navigation (Subframe)"
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository: https://github.com/anita-uxdesign/navigation-concept
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - **Source**: Select **"GitHub Actions"**
4. Click **Save**

### 4. Wait for Deployment

- GitHub Actions will automatically build and deploy your site
- Check the **Actions** tab in your repository to see the progress
- Usually takes 2-3 minutes

### 5. Access Your Site

Once deployed, your site will be available at:

🌐 **https://anita-uxdesign.github.io/navigation-concept/**

## Testing Your Deployment

After deployment, verify:
- ✅ Homepage loads correctly
- ✅ Navigation works (click different menu items)
- ✅ Sub-navigation expands/collapses
- ✅ Customize dialog opens and functions
- ✅ All routes work (e.g., /navigation-concept/members)
- ✅ Mobile responsive design

## Automatic Deployments

Every time you push to the `main` branch, GitHub Actions will:
1. Build your Next.js app
2. Export it as static files
3. Deploy to GitHub Pages automatically

## Troubleshooting

### Deployment fails in Actions tab
- Check the workflow logs in the Actions tab
- Ensure all dependencies are in `package.json`
- Verify the build runs locally: `npm run build`

### Pages shows 404
1. Make sure you selected **"GitHub Actions"** as the source (not "Deploy from a branch")
2. Check that the workflow completed successfully in the Actions tab
3. Wait a few minutes - it can take time for changes to propagate

### Links don't work
- All links in your app should use the base path `/navigation-concept`
- Next.js automatically handles this with the `basePath` setting

### Need to test locally with base path?
```bash
npm run build
npm start
# Visit http://localhost:3001/navigation-concept
```

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. In GitHub: Settings → Pages → Custom domain
3. Enter your domain and save
4. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `anita-uxdesign.github.io`

## Reverting to Vercel/Netlify

If you want to switch to Vercel/Netlify later:

1. Remove the `basePath` line from `next.config.js`
2. Remove `output: 'export'` from `next.config.js`
3. Set `images.unoptimized: false` (or remove the images config)
4. Deploy to Vercel/Netlify as normal

## Resources

- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

**Need help?** Check the workflow logs in the Actions tab of your repository.

