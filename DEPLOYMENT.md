# Deployment Guide - Step by Step

This guide will help you deploy your MERN portfolio website to production.

## Architecture Overview
- **Frontend**: React app → Deploy to Vercel/Netlify
- **Backend**: Express API → Deploy to Render/Railway
- **Database**: MongoDB → MongoDB Atlas (Cloud)

---

## Step 1: Set Up MongoDB Atlas (Cloud Database)

### 1.1 Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new project (e.g., "Portfolio")

### 1.2 Create a Cluster
1. Click "Build a Database"
2. Choose **FREE (M0)** tier
3. Select your preferred cloud provider and region (closest to you)
4. Name your cluster (e.g., "portfolio-cluster")
5. Click "Create"

### 1.3 Create Database User
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create username and password (SAVE THESE!)
5. Set privileges to "Read and write to any database"
6. Click "Add User"

### 1.4 Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for now, or add specific IPs later)
4. Click "Confirm"

### 1.5 Get Connection String
1. Go to "Database" → Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`)
4. Replace `<password>` with your database user password
5. Replace `<database>` with `portfolio`
6. **SAVE THIS CONNECTION STRING** - You'll need it for backend deployment

---

## Step 2: Deploy Backend (Express API)

### Option A: Using Render (Recommended - Free tier available)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Select the `Portfolio` repository
   - Configure:
     - **Name**: `portfolio-api` (or your choice)
     - **Root Directory**: `server`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   
3. **Add Environment Variables**
   - Click "Environment" tab
   - Add:
     - `PORT` = `10000` (or leave default)
     - `MONGO_URI` = Your MongoDB Atlas connection string from Step 1.5
   
4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (takes 2-3 minutes)
   - Copy your backend URL (e.g., `https://portfolio-api.onrender.com`)
   - **SAVE THIS URL** - You'll need it for frontend

### Option B: Using Railway

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables (same as Render)
6. Deploy and get your backend URL

---

## Step 3: Update Frontend API Configuration

1. The frontend will automatically detect the API URL based on environment
2. For production, we'll use environment variables

---

## Step 4: Deploy Frontend (React App)

### Option A: Using Vercel (Recommended)

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset**: Create React App
     - **Root Directory**: `client`
     - **Build Command**: `npm run build`
     - **Output Directory**: `build`

3. **Add Environment Variables**
   - Go to "Environment Variables"
   - Add:
     - `REACT_APP_API_URL` = Your backend URL from Step 2 (e.g., `https://portfolio-api.onrender.com`)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment
   - Your site will be live at `https://your-project.vercel.app`

### Option B: Using Netlify

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Configure:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `client/build`
6. Add environment variable: `REACT_APP_API_URL`
7. Deploy

---

## Step 5: Update CORS Settings (If Needed)

If you encounter CORS errors, update `server/index.js` to allow your frontend domain:

```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend-domain.vercel.app'],
  credentials: true
}));
```

---

## Step 6: Test Your Deployment

1. Visit your frontend URL
2. Test all sections (Projects, Skills, Contact form)
3. Check browser console for any errors

---

## Continuous Deployment

Both Vercel and Render automatically redeploy when you push to your main branch!

**To update your site:**
1. Make changes locally
2. Commit: `git add . && git commit -m "Update portfolio"`
3. Push: `git push origin main`
4. Wait 2-3 minutes for automatic redeployment

---

## Troubleshooting

- **Backend not connecting to MongoDB**: Check connection string and network access
- **CORS errors**: Update CORS settings in backend
- **404 errors**: Check API URL in frontend environment variables
- **Build fails**: Check build logs in deployment platform

---

## Notes

- Free tiers have limitations (e.g., Render spins down after inactivity)
- First deployment may be slow
- Always test locally before deploying

