# M Arquam Kamal - Personal Developer Portfolio

A premium, highly interactive, and responsive developer portfolio website designed for **M Arquam Kamal**. Built with React, Vite, and Vanilla CSS, it implements a sleek, dark-themed "Futuristic Developer Workspace" aesthetic.

## 🚀 Live Demo
Once deployed, the live link will be available here: [arquam-portfolio.vercel.app](https://arquam-portfolio.vercel.app/)

## 🎨 Design Concept
- **Theme**: Premium Futuristic Developer Workspace
- **Palette**: Deep Navy/Near-Black background, Electric Cyan primary accents, and Violet secondary glows.
- **Visuals**: Glassmorphic panels, glowing borders, active observer navigations, and an interactive canvas particle background.
- **Main Hero Visual**: An interactive mock editor interface complete with code tab toggling, directory trees, status bars, and a typing server log console.

---

## 🛠️ Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS (Tailored layout grid, fluid typography, and keyframe animations)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure
```text
src/
  ├── assets/          # Static media and graphics
  ├── components/      # Global layout items (Navbar, Footer, Background elements)
  │    ├── AnimatedGrid.jsx        # Subtle panning background grid
  │    ├── ParticleBackground.jsx  # Interactive canvas particle network
  │    ├── WorkspaceVisual.jsx     # Hero interactive editor mockup
  │    └── CertificateModal.jsx    # Lightbox credential preview modal
  ├── data/            # Separated content modules (easy updates)
  │    ├── profile.js        # Personal bio & contact links
  │    ├── projects.js       # Verified project details & technologies
  │    ├── certificates.js   # List of 9 certifications
  │    ├── experience.js     # Internship & Education data
  │    └── skills.js         # Technical stack lists
  ├── sections/        # Section-specific page divisions
  │    ├── Hero.jsx
  │    ├── About.jsx
  │    ├── Skills.jsx
  │    ├── Experience.jsx
  │    ├── Projects.jsx
  │    ├── Achievements.jsx
  │    ├── Certificates.jsx
  │    ├── Education.jsx
  │    ├── Github.jsx
  │    └── Contact.jsx
  ├── App.jsx          # Primary workspace assembly & scroll reveal observer
  ├── index.css        # Global CSS stylesheet & design tokens
  └── main.jsx         # App mounting index
```

---

## 💻 Installation & Local Development

### 1. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed. Run:
```bash
npm install
```

### 2. Run Local Development Server
Start the local hot-reloading development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Run Production Build
Verify files compile correctly and produce optimized bundles:
```bash
npm run build
```
Build output is saved to the `/dist` directory.

### 4. Local Build Preview
Test the production build locally:
```bash
npm run preview
```

---

## ☁️ Deployment Instructions

### Deploying to Vercel
This repository is pre-configured with `vercel.json` to handle client-side routing.
1. Sign in to your [Vercel Account](https://vercel.com).
2. Click **New Project** and import your GitHub repository.
3. Keep default build settings (Vite is auto-detected).
4. Click **Deploy**.

---

## 📄 Customization Instructions
To update the content of your portfolio in the future, you do **not** need to modify the UI components. Simply edit the javascript files under `src/data/`:
- **Bio & Links**: Edit [profile.js](src/data/profile.js)
- **Projects**: Edit [projects.js](src/data/projects.js)
- **Certificates**: Edit [certificates.js](src/data/certificates.js)
- **Internship**: Edit [experience.js](src/data/experience.js)
- **Skills**: Edit [skills.js](src/data/skills.js)
- **Resume PDF**: Replace the placeholder at `public/resume/M_Arquam_Kamal_Resume.pdf` with your actual PDF.
