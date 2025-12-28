# Quick Start Deployment Guide

Follow these steps to deploy your portfolio:

## 📋 Pre-Deployment Checklist

- [ ] Code is ready
- [ ] GitHub repository created
- [ ] All changes committed

---

## Step 1: Initialize Git & Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/Gunnjainn/portfolio.git

# Push to GitHub
git push -u origin main
```

---

## Step 2: Set Up MongoDB Atlas (5 minutes)

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up (free account)
3. Create a FREE cluster (M0 tier)
4. Wait for cluster creation (~2 minutes)
5. Click "Connect" → "Connect your application"
6. Copy the connection string
7. Replace `<password>` with your database password
8. Replace `<database>` with `portfolio`

**Save this connection string!** You'll need it in Step 3.

Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`

---

## Step 3: Deploy Backend to Render (10 minutes)

1. Go to https://render.com
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your repository: `Gunnjainn/portfolio`
5. Configure:
   - **Name**: `portfolio-api` (or your choice)
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Click "Advanced" → Add Environment Variables:
   - `MONGO_URI` = Your MongoDB connection string from Step 2
   - `PORT` = `10000` (or leave default)
   - `FRONTEND_URL` = Leave empty for now (we'll add it later)
7. Click "Create Web Service"
8. Wait for deployment (~3 minutes)
9. Copy your backend URL (e.g., `https://portfolio-api.onrender.com`)

**Save this URL!** You'll need it in Step 4.

---

## Step 4: Deploy Frontend to Vercel (5 minutes)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import repository: `Gunnjainn/portfolio`
5. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `client`
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `build` (should auto-detect)
6. Click "Environment Variables" → Add:
   - `REACT_APP_API_URL` = Your backend URL from Step 3 (e.g., `https://portfolio-api.onrender.com`)
7. Click "Deploy"
8. Wait for deployment (~2 minutes)
9. Copy your frontend URL (e.g., `https://portfolio.vercel.app`)

**Save this URL!** This is your live portfolio.

---

## Step 5: Update Backend CORS (2 minutes)

1. Go back to Render dashboard
2. Click on your backend service
3. Go to "Environment" tab
4. Add/Update:
   - `FRONTEND_URL` = Your Vercel URL from Step 4
5. Click "Save Changes"
6. Service will automatically redeploy

---

## Step 6: Test Your Portfolio! 🎉

Visit your Vercel URL and test:
- [ ] All sections load
- [ ] Projects display
- [ ] Skills display
- [ ] Contact form works (if MongoDB is connected)

---

## ✅ Continuous Deployment Setup

**Good news!** Both Vercel and Render automatically deploy when you push to GitHub!

### To update your site:

```bash
# Make changes locally
git add .
git commit -m "Update portfolio"
git push origin main
```

Wait 2-3 minutes and your changes will be live!

---

## 🔧 Troubleshooting

### Backend not connecting to MongoDB?
- Check connection string (no spaces, correct password)
- Check MongoDB Network Access (should allow all IPs)
- Check backend logs in Render dashboard

### CORS errors?
- Make sure `FRONTEND_URL` is set in Render environment variables
- Wait for backend to redeploy after adding the variable

### Frontend can't reach backend?
- Check `REACT_APP_API_URL` in Vercel environment variables
- Make sure backend URL doesn't have trailing slash
- Check browser console for errors

### Need help?
- Check deployment logs in Render/Vercel dashboards
- Check browser console for frontend errors
- Check Network tab to see API calls

---

## 📝 Notes

- **Free tiers have limitations**: Render free tier spins down after inactivity (first request may be slow)
- **MongoDB Atlas free tier**: 512MB storage, enough for portfolio
- **Vercel free tier**: Unlimited deployments, great for portfolios

---

## 🎊 You're Done!

Your portfolio is now live! Share your Vercel URL with the world!

