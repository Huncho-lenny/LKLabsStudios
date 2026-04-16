# Vercel Deployment Setup Guide

## ✅ Prerequisites
You've already connected your GitHub repository to Vercel. Great! Now let's complete the setup.

## Step 1: Add Environment Variables to Vercel

1. **Go to your Vercel Project Dashboard:**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Select your **LKLabsStudios** project

2. **Navigate to Settings:**
   - Click on **Settings** tab
   - Select **Environment Variables** from the left sidebar

3. **Add the Following Variables:**

   **Variable 1:**
   - Name: `VITE_SUPABASE_URL`
   - Value: `https://qpxinzgpaqoxetrhcxgv.supabase.co`
   - Environments: Select **Production**, **Preview**, and **Development**
   - Click **Save**

   **Variable 2:**
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: `sb_publishable_AjHuCUzMprZMNVdQ63X1Jw_IqLEsXQv`
   - Environments: Select **Production**, **Preview**, and **Development**
   - Click **Save**

## Step 2: Trigger a Deployment

Once environment variables are saved:

1. **Option A: Automatic Deployment**
   - Any push to your `main` branch will automatically trigger a deployment
   - Go to the **Deployments** tab to monitor progress

2. **Option B: Manual Redeploy**
   - Click the **Redeploy** button on your latest deployment
   - This will rebuild with the new environment variables

## Step 3: Verify Your Live Site

1. **Find Your Deployment URL:**
   - In the Vercel dashboard, look for the **Domains** section
   - Your site will be at: `https://lklabsstudios.vercel.app` (or your custom domain)

2. **Test the Contact Form:**
   - Scroll to the contact section
   - Fill out and submit the form
   - Check your Supabase dashboard to confirm the submission was saved

3. **Check Performance:**
   - Click on your deployment
   - View the **Analytics** tab for performance metrics

## Step 4: Set Up Custom Domain (Optional)

If you have a custom domain:

1. **In Vercel Dashboard:**
   - Go to **Settings** → **Domains**
   - Click **Add Domain**
   - Enter your domain name (e.g., `lklabs.studio`)

2. **Update DNS Records:**
   - Follow Vercel's instructions to update your domain registrar's DNS
   - Typically, you'll add a CNAME record pointing to Vercel

3. **SSL Certificate:**
   - Vercel automatically provisions an SSL certificate
   - Your site will be secure with HTTPS

## Step 5: Supabase Database Setup (Critical!)

For the contact form to work, you **must** create the `contact_submissions` table:

1. **Go to your Supabase Dashboard:**
   - Visit [supabase.com/dashboard](https://supabase.com/dashboard)
   - Select your project: `qpxinzgpaqoxetrhcxgv`

2. **Open SQL Editor:**
   - Click on **SQL Editor** in the left sidebar
   - Click **New Query**

3. **Run This SQL:**

```sql
-- Create the contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for your contact form)
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view all submissions
CREATE POLICY "Allow authenticated select" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
```

4. **Click "Run"** and confirm the table was created

## Monitoring & Maintenance

### Check Deployment Status
- Visit your Vercel project dashboard
- The **Deployments** tab shows all builds and their status
- Green checkmark = successful deployment

### View Logs
- Click on any deployment
- View **Build Logs** to see the build process
- View **Runtime Logs** to see errors (if any)

### Monitor Performance
- Go to **Analytics** tab
- Track Core Web Vitals, response times, and traffic

## Troubleshooting

### Contact Form Not Working
**Problem:** Form submits but no data appears in Supabase

**Solutions:**
1. Verify the `contact_submissions` table exists in Supabase
2. Check that Row Level Security policies are set correctly
3. Confirm environment variables are saved in Vercel
4. Redeploy the project after adding environment variables
5. Check browser console (F12) for error messages

### Build Fails on Vercel
**Problem:** Deployment shows a red X

**Solutions:**
1. Check the **Build Logs** for specific errors
2. Ensure all environment variables are set
3. Verify `package.json` has all required dependencies
4. Try pushing a new commit to trigger a rebuild

### Site Shows Old Version
**Problem:** Changes don't appear after pushing to GitHub

**Solutions:**
1. Wait a few seconds for Vercel to detect the push
2. Check the **Deployments** tab to see if a new build is running
3. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Clear browser cache if needed

## Performance Tips

### Already Optimized
- ✅ Code splitting with lazy loading
- ✅ Image optimization
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Gzip compression
- ✅ Cache headers configured

### Additional Optimization
- Consider adding a CDN (Vercel includes Cloudflare)
- Monitor Core Web Vitals in Analytics
- Use Vercel's Image Optimization for any new images

## Security Checklist

- ✅ Environment variables are not in `.env` file (only on Vercel)
- ✅ Supabase anon key is public-safe
- ✅ Row Level Security is configured
- ✅ HTTPS is enabled by default
- ✅ No sensitive data in frontend code

## Your Permanent URLs

**Production Site:**
- `https://lklabsstudios.vercel.app` (or your custom domain)

**GitHub Repository:**
- `https://github.com/Huncho-lenny/LKLabsStudios`

**Supabase Project:**
- `https://supabase.com/dashboard/project/qpxinzgpaqoxetrhcxgv`

## Next Steps

1. ✅ Add environment variables to Vercel
2. ✅ Create the `contact_submissions` table in Supabase
3. ✅ Trigger a deployment (push to main or manual redeploy)
4. ✅ Test the contact form
5. ✅ Set up custom domain (optional)
6. ✅ Monitor analytics and performance

---

**Status:** Ready for Production ✅  
**Last Updated:** April 16, 2026
