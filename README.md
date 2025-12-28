# Portfolio Website - MERN Stack

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) showcasing projects, skills, education, and contact information.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Full-Stack Architecture**: React frontend with Express/Node.js backend
- **MongoDB Integration**: Database for projects, skills, and contact messages
- **Interactive Sections**:
  - Hero section with animated background
  - About me with statistics
  - Skills showcase with progress bars
  - Projects gallery with detailed descriptions
  - Education timeline
  - Contact form with backend integration

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router
- Axios for API calls
- React Icons
- React Intersection Observer
- CSS3 with custom animations

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/portfolio
   ```
   
   For MongoDB Atlas, use:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

4. **Start MongoDB**
   
   If using local MongoDB:
   ```bash
   mongod
   ```

## 🚀 Running the Application

### Development Mode (Recommended)

Run both client and server concurrently:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- React app on `http://localhost:3000`

### Run Separately

**Backend only:**
```bash
cd server
npm run dev
```

**Frontend only:**
```bash
cd client
npm start
```

## 📁 Project Structure

```
Portfolio/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                # Express backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── index.js          # Server entry point
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## 🔌 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Contact
- `GET /api/contact` - Get all messages
- `POST /api/contact` - Send message
- `PUT /api/contact/:id/read` - Mark message as read

## 🎨 Customization

1. **Update Personal Information**: 
   - Edit `client/src/components/Hero.js` for name and title
   - Update `client/src/components/About.js` for bio
   - Modify `client/src/components/Contact.js` for contact details

2. **Add Projects**: 
   - Use the API endpoints to add projects, or
   - Modify the fallback data in `client/src/components/Projects.js`

3. **Update Skills**: 
   - Use the API endpoints to add skills, or
   - Modify the fallback data in `client/src/components/Skills.js`

4. **Styling**: 
   - CSS variables are defined in `client/src/index.css`
   - Each component has its own CSS file for customization

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Gun Jain**
- Email: jainygunn16@gmail.com
- GitHub: [@Gunnjainn](https://github.com/Gunnjainn)
- LinkedIn: [gunjain](https://linkedin.com/in/gunjain)

---

Made with ❤️ using MERN Stack

