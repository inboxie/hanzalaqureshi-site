# Deployment Checklist

Use this checklist to ensure a smooth deployment of your website.

## ✅ Pre-Deployment

- [ ] Test the site locally (`npm run dev`)
- [ ] Build the site successfully (`npm run build`)
- [ ] Check all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Verify dark mode works properly
- [ ] Test all navigation links
- [ ] Check all external links (Inboxie, YouTube, social media)
- [ ] Update email address in Contact page if needed
- [ ] Review all content for typos and accuracy

## 🔧 Setup GitHub Repository

- [ ] Create a new repository on GitHub
- [ ] Initialize git in your project:
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Personal website"
  ```
- [ ] Connect to GitHub:
  ```bash
  git remote add origin YOUR_GITHUB_REPO_URL
  git branch -M main
  git push -u origin main
  ```

## 🚀 Deploy to Vercel

### Option 1: Via Dashboard (Recommended)
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign in with GitHub
- [ ] Click "Add New Project"
- [ ] Import your repository
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete

### Option 2: Via CLI
- [ ] Install Vercel CLI: `npm install -g vercel`
- [ ] Login: `vercel login`
- [ ] Deploy: `vercel --prod`

## 🌐 Connect Custom Domain

### In Vercel Dashboard
- [ ] Go to your project
- [ ] Navigate to Settings → Domains
- [ ] Add "hanzalaqureshi.com"
- [ ] Add "www.hanzalaqureshi.com"
- [ ] Note the DNS configuration instructions

### In GoDaddy
- [ ] Log into GoDaddy account
- [ ] Go to DNS Management for hanzalaqureshi.com
- [ ] Delete any existing A and CNAME records for @ and www
- [ ] Add new A record:
  - Type: A
  - Name: @
  - Value: 76.76.21.21
  - TTL: 600
- [ ] Add new CNAME record:
  - Type: CNAME
  - Name: www
  - Value: cname.vercel-dns.com
  - TTL: 600
- [ ] Save changes

### Verify DNS
- [ ] Wait 5-10 minutes for DNS propagation
- [ ] Check DNS status in Vercel dashboard
- [ ] Test both domains:
  - http://hanzalaqureshi.com
  - http://www.hanzalaqureshi.com
- [ ] Verify HTTPS is working (Vercel auto-provisions SSL)

## 📊 Post-Deployment

### Testing
- [ ] Visit hanzalaqureshi.com on desktop
- [ ] Visit on mobile device
- [ ] Test all navigation links
- [ ] Verify all images load
- [ ] Check external links work
- [ ] Test contact email link
- [ ] Verify social media links
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)

### SEO & Social
- [ ] Verify meta tags are correct (view page source)
- [ ] Test site on Google Search Console
- [ ] Share site on social media to test Open Graph tags
- [ ] Submit sitemap to Google (optional)

### Optional Enhancements
- [ ] Enable Vercel Analytics
- [ ] Set up Google Analytics
- [ ] Configure custom error pages
- [ ] Add robots.txt if needed
- [ ] Create sitemap.xml

## 🔄 Future Updates

### Making Changes
1. Edit files locally
2. Test changes: `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Vercel will automatically redeploy

### Quick Deploy from Terminal
```bash
git add .
git commit -m "Update: [description]"
git push
```

## 🐛 Troubleshooting

### DNS Not Working
- [ ] Verify DNS records in GoDaddy are correct
- [ ] Wait up to 48 hours for full propagation
- [ ] Use [DNS Checker](https://dnschecker.org) to verify propagation
- [ ] Check Vercel domain status

### Build Failures
- [ ] Check Vercel deployment logs
- [ ] Verify build works locally: `npm run build`
- [ ] Check for TypeScript errors
- [ ] Verify all dependencies are in package.json

### Site Not Updating
- [ ] Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- [ ] Check Vercel deployment completed successfully
- [ ] Verify correct git branch is deployed

## 📞 Support Resources

- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs
- **GoDaddy Support**: https://www.godaddy.com/help

---

## Quick Reference Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Deploy
git add .
git commit -m "Update"
git push

# Test production build locally
npm run build && npm run start
```

---

**Last Updated**: Check this file after deployment to note any issues or additional steps needed.
