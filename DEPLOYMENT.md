# Deployment Guide for Hostinger

This guide will help you deploy your Next.js website to Hostinger.

## ⚠️ Important Note About API Routes

Your project includes API routes (`/api/send-email` and `/api/send-hearing-test-results`) that require server-side functionality. Since your project is configured for static export (`output: 'export'`), these API routes **will not work** in a static deployment.

### Options:

1. **Static Export (Current Setup)** - Simpler, but API routes won't work
2. **Node.js Hosting** - Requires Hostinger Node.js hosting plan and configuration changes

---

## Option 1: Static Export Deployment (Recommended for Hostinger Shared Hosting)

### Step 1: Build the Project Locally

1. Install dependencies (if not already done):
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

This will create an `out` folder containing all static files.

### Step 2: Upload to Hostinger

1. **Access Hostinger File Manager:**
   - Log in to your Hostinger control panel (hPanel)
   - Navigate to **File Manager**

2. **Navigate to public_html:**
   - Go to `public_html` folder (or your domain's root folder)

3. **Upload Files:**
   - Delete any existing files in `public_html` (backup first if needed)
   - Upload **ALL contents** from the `out` folder to `public_html`
   - Make sure to upload the `.htaccess` file as well

4. **Set Permissions:**
   - Ensure `.htaccess` has proper permissions (644 or 755)

### Step 3: Verify Deployment

- Visit your domain to check if the site loads correctly
- Test navigation between pages
- Note: Contact form and hearing test email features will not work without API routes

---

## Option 2: Node.js Deployment (For API Routes Support)

If you need the API routes to work, you'll need Hostinger's Node.js hosting.

### Step 1: Modify Configuration

1. **Update `next.config.mjs`:**
   - Remove or comment out `output: 'export'`
   - Keep `images: { unoptimized: true }` if needed

2. **Create `package.json` start script** (already exists):
   - `"start": "next start"` is already configured

### Step 2: Build and Deploy

1. **Build the project:**
```bash
npm run build
```

2. **Upload to Hostinger:**
   - Upload the entire project folder (excluding `node_modules`)
   - Or use Git deployment if available

3. **Install dependencies on server:**
   - SSH into your Hostinger account
   - Run `npm install --production`

4. **Set Environment Variables:**
   - In Hostinger hPanel, set these environment variables:
     - `RESEND_API_KEY` - Your Resend API key
     - `RESEND_RECIPIENT_EMAIL` - Email address to receive contact form submissions

5. **Start the application:**
   - Configure Node.js app in Hostinger panel
   - Set start command: `npm start`
   - Set port (usually provided by Hostinger)

---

## Environment Variables Setup

If using Node.js hosting, set these in Hostinger's environment variables section:

- `RESEND_API_KEY` - Your Resend API key from https://resend.com
- `RESEND_RECIPIENT_EMAIL` - Email where contact form submissions should be sent

---

## Troubleshooting

### 404 Errors on Routes
- Ensure `.htaccess` file is uploaded and has correct permissions
- Check that all files from `out` folder are uploaded

### Images Not Loading
- Verify image paths are correct
- Check that images in `public/images` are uploaded

### API Routes Not Working
- If using static export, API routes won't work (this is expected)
- Switch to Node.js hosting if you need API functionality

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check Node.js version compatibility (project uses Next.js 16)

---

## File Structure After Deployment

```
public_html/
├── .htaccess
├── index.html
├── _next/
│   └── static/
├── images/
└── [other static files]
```

---

## Need Help?

- Hostinger Support: Check their documentation for Node.js hosting setup
- Next.js Documentation: https://nextjs.org/docs/deployment


