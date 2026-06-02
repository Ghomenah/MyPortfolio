# Eric Varona — Portfolio (React + Vite)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── wallpaper/
│   │   └── wallpaper.mp4        ← PUT YOUR VIDEO HERE
│   └── img/
│       └── Ako.png              ← PUT YOUR PHOTO HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── vercel.json
└── .gitignore
```

---

## ⚙️ Local Setup

### 1. Install Node.js
Download from https://nodejs.org (LTS version recommended)

### 2. Add your files
- Copy `wallpaper.mp4` → `public/wallpaper/wallpaper.mp4`
- Copy `Ako.png` → `public/img/Ako.png`

### 3. Install dependencies
```bash
npm install
```

### 4. Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

---

## 🚀 Deploy to Vercel

### Option A — Via GitHub (Recommended)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com and sign in
3. Click **"Add New Project"**
4. Import your GitHub repo
5. Vercel auto-detects Vite — just click **Deploy**
6. Your site is live! 🎉

### Option B — Via Vercel CLI

```bash
npm install -g vercel
vercel
```
Follow the prompts. Done!

---

## 🏗️ Build for Production

```bash
npm run build
```
Output goes to the `dist/` folder.

---

## 📝 Notes

- `vercel.json` handles SPA routing (all routes → index.html)
- Assets in `public/` are served as-is at the root URL
- No backend needed — this is a fully static site
