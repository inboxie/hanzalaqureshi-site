# Hanz Ala Qureshi - Personal Website

A modern, professional personal website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark mode support
- **Fully Responsive**: Looks great on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Next.js App Router and Turbopack
- **Type Safe**: Written in TypeScript

## 📁 Site Structure

```
/                 - Homepage with hero, featured work, and CTA
/about           - About page with background and expertise
/blog            - Blog listing (ready for content)
/products        - Products showcase
  /inboxie       - Dedicated Inboxie product page
/work            - Professional experience and skills
/contact         - Contact information and social links
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## 💻 Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Running Locally

1. **Navigate to the project directory**:
   ```bash
   cd hanzalaqureshi-site
   ```

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - Visit http://localhost:3000
   - The site will auto-reload when you make changes

### Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to [Vercel](https://vercel.com)**:
   - Sign in with GitHub
   - Click "Add New Project"
   - Select your repository
   - Click "Deploy"

3. **Add your custom domain**:
   - Go to Project Settings → Domains
   - Add "hanzalaqureshi.com"
   - Follow the DNS instructions

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

## 🌍 Connecting Your Domain (GoDaddy)

### DNS Configuration

1. **Log into GoDaddy** and go to your domain's DNS settings

2. **Add these DNS records**:
   
   **For Vercel:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 600 seconds
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 600 seconds
   ```

3. **Remove any conflicting records**:
   - Delete any existing A records pointing to @
   - Delete any existing CNAME records for www

4. **Wait for DNS propagation** (can take up to 48 hours, usually much faster)

5. **Add domain in Vercel**:
   - Project Settings → Domains
   - Add "hanzalaqureshi.com"
   - Add "www.hanzalaqureshi.com"
   - Vercel will automatically provision SSL certificates

## 📝 Customizing Content

### Update Homepage
Edit `app/page.tsx` to change:
- Hero text
- Featured products
- Call-to-action sections

### Update About Page
Edit `app/about/page.tsx` to add:
- Your full background
- Career history
- Personal interests

### Add Blog Posts
1. Create a new directory: `app/blog/[slug]/`
2. Add `page.tsx` in that directory
3. Write your content

Example structure:
```typescript
// app/blog/my-first-post/page.tsx
export default function BlogPost() {
  return (
    <article>
      <h1>My First Post</h1>
      <p>Content here...</p>
    </article>
  );
}
```

### Update Products
Edit `app/products/page.tsx` to:
- Add new products
- Update Inboxie details
- Showcase other projects

### Update Contact Info
Edit `app/contact/page.tsx` to:
- Change email address
- Update social media links
- Modify contact methods

## 🎨 Styling Guide

### Colors
The site uses Tailwind's color system with blue as the primary accent:
- Primary: `blue-600` / `blue-400` (dark mode)
- Text: `gray-600` / `gray-300` (dark mode)
- Background: gradient from `gray-50` to `white`

### Fonts
Using Next.js Geist font family (included):
- Sans: `font-sans` for body text
- Mono: `font-mono` for code

### Dark Mode
Dark mode is automatic based on system preferences. All components support both light and dark themes.

## 📦 Adding New Pages

1. **Create a new directory** in `app/`:
   ```bash
   mkdir app/new-page
   ```

2. **Create `page.tsx`**:
   ```typescript
   export default function NewPage() {
     return <div>New Page Content</div>;
   }
   ```

3. **Add to navigation** in `app/components/Navigation.tsx`:
   ```typescript
   { href: "/new-page", label: "New Page" }
   ```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 📱 Progressive Enhancement

The site is built with progressive enhancement in mind:
- Works without JavaScript
- Responsive images
- Accessible navigation
- Semantic HTML

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Styling not updating
```bash
# Clear Tailwind cache
rm -rf .next
npm run dev
```

## 📊 Analytics (Optional)

To add analytics, you can use:
- **Vercel Analytics**: Built-in, zero config
- **Google Analytics**: Add to `app/layout.tsx`
- **Plausible**: Privacy-friendly alternative

## 🔐 Environment Variables

If you need environment variables:

1. Create `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=your_value
   ```

2. Access in code:
   ```typescript
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
   ```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Future Enhancements

Potential additions:
- [ ] Blog with MDX support
- [ ] Newsletter subscription
- [ ] Project case studies
- [ ] Testimonials section
- [ ] Analytics dashboard
- [ ] Contact form with backend
- [ ] Medium RSS feed integration

## 📄 License

This is a personal website. Feel free to use it as inspiration for your own site!

---

Built with ❤️ by Hanz Ala Qureshi
