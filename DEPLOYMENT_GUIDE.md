# Complete Deployment Guide

This guide will help you deploy your Emergent app to the internet for FREE using Vercel.

## What You'll Need
- A GitHub account (we'll create one if you don't have it)
- A Vercel account (we'll create one - it's free)
- About 10 minutes

---

## STEP 2: Create a GitHub Account

**What is GitHub?** It's like Google Drive for code. We'll store your code there so Vercel can access it.

1. **Go to** https://github.com/signup
2. **Enter your email** (use a real email - you'll need to verify it)
3. **Create a password** (make it strong!)
4. **Choose a username** (this will be in your URLs, like `github.com/yourusername`)
5. **Verify your account** - Check your email and click the verification link
6. **Choose the FREE plan** (no credit card needed)

**Already have a GitHub account?** Skip to Step 3!

---

## STEP 3: Create a New Repository on GitHub

**What is a repository?** It's a folder on GitHub where your code lives.

1. **Log in to GitHub** at https://github.com
2. **Click the "+" icon** in the top-right corner
3. **Click "New repository"**
4. **Fill in the form:**
   - Repository name: `emergent-clone` (or any name you like)
   - Description: `AI-powered app builder - Emergent.sh clone`
   - Choose **Public** (so you can deploy for free)
   - **DO NOT** check any boxes (no README, no .gitignore, nothing)
5. **Click "Create repository"**

You'll see a page with commands. **Don't close this page** - we'll use it next!

---

## STEP 4: Connect Your Code to GitHub

Now we'll upload your code to GitHub. Copy these commands **one at a time**:

### Command 1: Tell Git who you are
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```
Replace with YOUR real name and email (the same email you used for GitHub).

### Command 2: Add GitHub as the destination
Look at the GitHub page from Step 3. You'll see a command like:
```bash
git remote add origin https://github.com/YOUR-USERNAME/emergent-clone.git
```
Copy YOUR version of this command (with your username) and run it.

### Command 3: Upload your code
```bash
git branch -M main
git push -u origin main
```

**If it asks for a password:** GitHub doesn't use passwords anymore! You need a Personal Access Token:

#### Creating a GitHub Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: `emergent-deployment`
4. Check the box: `repo` (full control of private repositories)
5. Click "Generate token" at the bottom
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

---

## STEP 5: Create a Vercel Account

**What is Vercel?** It's a platform that hosts (runs) your website for free and gives you a URL.

1. **Go to** https://vercel.com/signup
2. **Click "Continue with GitHub"** (easiest way!)
3. **Authorize Vercel** to access your GitHub account
4. That's it! You're logged in.

---

## STEP 6: Deploy Your App

Now the magic happens! 🎉

1. **On the Vercel dashboard**, click **"Add New..."** → **"Project"**
2. **Import your repository:**
   - You'll see a list of your GitHub repositories
   - Find `emergent-clone` (or whatever you named it)
   - Click **"Import"**
3. **Configure your project:**
   - Project Name: `emergent-clone` (or customize it)
   - Framework Preset: Should auto-detect **"Next.js"** ✓
   - Root Directory: Leave as `./`
   - Build Command: Leave default
   - Output Directory: Leave default
   - **Environment Variables:** Skip for now (app works in demo mode!)
   - Click **"Deploy"**
4. **Wait for deployment** (about 2-3 minutes)
   - You'll see a progress screen with logs
   - Don't close the page!
5. **Success!** 🎉
   - When done, you'll see confetti and your URL
   - Something like: `emergent-clone.vercel.app`

---

## STEP 7: Visit Your Live App!

1. **Click the preview image** or the URL on the Vercel success page
2. **Your app is now LIVE on the internet!**
3. **Share the URL** with anyone - they can access it!

Your app will be at:
- `https://your-project-name.vercel.app`
- Or a custom domain if you set one up

---

## Optional: Add AI (OpenAI Integration)

To enable real AI generation instead of demo mode:

1. **Get an OpenAI API key:**
   - Go to https://platform.openai.com/signup
   - Create an account (you'll need a phone number)
   - Go to https://platform.openai.com/api-keys
   - Click "Create new secret key"
   - Copy the key (starts with `sk-...`)

2. **Add to Vercel:**
   - Go to your project on Vercel dashboard
   - Click **Settings** → **Environment Variables**
   - Add variable:
     - Name: `OPENAI_API_KEY`
     - Value: Paste your key (sk-...)
   - Click **"Save"**
   - Go to **Deployments** tab
   - Click the **"..."** on the latest deployment → **"Redeploy"**

---

## Troubleshooting

### "Permission denied" when pushing to GitHub
- You need a Personal Access Token (see Step 4)
- Or use GitHub CLI: `gh auth login`

### "Build failed" on Vercel
- Check the build logs on Vercel
- Most common: TypeScript errors
- Run `npm run build` locally first to check

### App loads but looks broken
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check Vercel deployment logs for errors

### Preview shows "Error"
- The app works in demo mode without OpenAI API key
- Check browser console for specific errors

---

## Making Changes Later

To update your deployed app:

1. **Make changes** to your code locally
2. **Save your changes:**
   ```bash
   git add -A
   git commit -m "Description of changes"
   git push
   ```
3. **Vercel automatically redeploys** (takes 2-3 minutes)
4. **Refresh your live site** to see changes!

---

## Cost

**Everything is FREE!**
- GitHub: Free (unlimited public repos)
- Vercel: Free tier includes:
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic HTTPS
  - Custom domain support

You only pay if you need more resources or premium features.

---

## Summary

✅ Your code is backed up on GitHub
✅ Your app is live on the internet
✅ Auto-deploys when you push changes
✅ Free HTTPS and fast global CDN
✅ Share your URL with anyone!

**Questions?** Check the troubleshooting section or ask for help!
