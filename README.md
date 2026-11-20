# Md. Moktadur Rahman Porag — Developer Portfolio Website

A fast, responsive, accessible, and polished personal portfolio website designed and engineered for **Md. Moktadur Rahman Porag**, Computer Science and Engineering student at Daffodil International University.

Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Highlights & Key Features

- **Master Specification Compliant:** Built to strict factual standards. No fabricated employment history, certificates, fake percentages, or fake visitor counters.
- **Restrained Dark & Light Modes:** Default `#0D0D0D` dark aesthetic with `#FF6B35` accent orange and persistence in `localStorage`.
- **7 Detailed Project Case Studies:**
  1. *DIU Hospital Management System* (Java Swing Desktop Application)
  2. *FactCheck-AI* (FastAPI + HTTPX + Search API Prototype)
  3. *Smart RFID Attendance System* (ESP32 + RC522 RFID + I2C LCD Embedded IoT)
  4. *RetailFlow BD* (Mobile-First POS & Retail Management Concept)
  5. *Job Recruitment Portal* (Full-Stack React, TypeScript, Express, MySQL Architecture)
  6. *TaskFlow* (Hierarchical Productivity Application Concept)
  7. *Local AI Chatbot* (LM Studio + Mistral 7B + Python Middleware)
- **Interactive Portfolio CLI Terminal:** Run `help`, `about`, `skills`, `projects`, `education`, `contact`, and `clear` commands right in the browser with keyboard arrow history.
- **Categorized Technical Skills:** Clear competency labeling (`Strong foundation`, `Working knowledge`, `Currently exploring`) across 6 core categories.
- **Transparent Academic Background:** Daffodil International University BSc in CSE profile with relevant coursework and honest placeholders.
- **Direct Contact Experience:** Form validation, 1-click email copy with instant toast confirmation, and transparent `mailto:` dispatch fallback.
- **Centralized Data Layer:** Update your personal information, links, and projects in single modular data files without touching UI components.

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (tested on v24.11.1)
- npm or pnpm

### 1. Installation

```bash
cd porag-portfolio
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

This compiles TypeScript and packages the project into the optimized `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

---

## 🛠️ How to Personalize & Replace Placeholders

All personal information is isolated in the `src/data/` folder for effortless updates:

### 1. Update Profile & Social Links (`src/data/profile.ts`)

Open `src/data/profile.ts` to set your official URLs and contact email:

```typescript
export const profileData: ProfileData = {
  fullName: "Md. Moktadur Rahman Porag",
  shortName: "Porag",
  heroDisplayName: "Moktadur Rahman Porag",
  professionalTitle: "Software Developer | CSE Student | Problem Solver",
  tagline: "I don't just learn technologies. I use them to build things that solve problems.",
  location: "Dhaka, Bangladesh",
  socialLinks: {
    github: "https://github.com/your-username",      // Replace placeholder
    linkedin: "https://linkedin.com/in/your-profile", // Replace placeholder
    email: "your.real.email@gmail.com",               // Replace placeholder
    cvFile: "/resume.pdf"                            // Add resume.pdf in public/
  }
};
```

### 2. Add Your CV / Resume (`public/resume.pdf`)

1. Export your verified resume as a PDF file named `resume.pdf`.
2. Place it into the `porag-portfolio/public/` directory.
3. The "CV" and "Download CV" buttons in the navigation, hero, and modal will automatically download it.

### 3. Add Project Links & Screenshots (`src/data/projects.ts`)

- In `src/data/projects.ts`, replace empty `githubUrl` or `liveDemoUrl` fields with your actual repository links.
- Place screenshots into `public/projects/` when available.

### 4. Update Academic Timeline (`src/data/education.ts`)

Confirm your enrollment year and expected graduation year in `src/data/education.ts`:

```typescript
export const educationData: EducationItem = {
  institution: "Daffodil International University",
  degree: "Bachelor of Science in Computer Science and Engineering (BSc in CSE)",
  location: "Dhaka, Bangladesh",
  periodPlaceholder: "2022 – Present (Expected 2026)", // Replace placeholder
  cgpaPlaceholder: "Available upon request",
  ...
};
```

---

## 📂 Source Code Structure

```text
porag-portfolio/
├── public/
│   ├── favicon.svg             # Custom SVG branding icon
│   ├── images/                 # Portrait & profile image assets
│   ├── projects/               # Project screenshots & media
│   └── resume.pdf              # (Drop your CV PDF here)
├── src/
│   ├── components/
│   │   ├── About.tsx           # Bio, pillars, and factual highlights
│   │   ├── Achievements.tsx    # Transparent learning milestone card
│   │   ├── Activities.tsx      # CPC club, workshops, and lab collaborations
│   │   ├── Contact.tsx         # Contact form, 1-click copy, and channels
│   │   ├── CvModal.tsx         # CV preview and setup guidance modal
│   │   ├── Education.tsx       # DIU academic background & coursework
│   │   ├── Footer.tsx          # Dynamic copyright, links, and back-to-top
│   │   ├── Hero.tsx            # Hero section with abstract monogram card
│   │   ├── MobileMenu.tsx      # Responsive navigation drawer
│   │   ├── Navbar.tsx          # Sticky glassmorphism header with active spy
│   │   ├── PlaceholderAlertModal.tsx  # Dynamic helper modal for empty links
│   │   ├── PlaceholderGuideModal.tsx  # Owner checklist modal
│   │   ├── ProjectCard.tsx     # Reusable project card with status badge
│   │   ├── ProjectFilters.tsx  # Category pill buttons & keyword search
│   │   ├── ProjectGrid.tsx     # Responsive grid & empty state
│   │   ├── ProjectModal.tsx    # Comprehensive case-study modal with Prev/Next
│   │   ├── Skills.tsx          # Categorized skills without fake percentages
│   │   ├── Terminal.tsx        # Interactive portfolio CLI component
│   │   └── ThemeToggle.tsx     # Dark/Light theme switcher with persistence
│   ├── data/
│   │   ├── activities.ts       # Peer collaboration & practical labs data
│   │   ├── education.ts        # Academic institution & coursework data
│   │   ├── profile.ts          # Central personal identity & social links
│   │   ├── projects.ts         # All 7 documented project case studies
│   │   └── skills.ts           # Classified technical skills & competencies
│   ├── types/
│   │   └── index.ts            # Strict TypeScript interfaces
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Tailwind CSS & custom design tokens
│   └── main.tsx                # React root mount
├── index.html                  # SEO meta tags, Google Fonts & Open Graph
├── package.json
├── tailwind.config.js          # Color palettes, fonts, and animation tokens
├── tsconfig.json               # Strict TypeScript configuration
└── vite.config.ts              # Vite build setup
```

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import the repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. Your website will be live with free global CDN and HTTPS in under 1 minute!

### Deploy to Netlify

1. Build locally: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop) and drag-and-drop the generated `dist` folder, or connect your GitHub repository with Build Command `npm run build` and Publish directory `dist`.

---

## 📜 Compliance & Verification Summary

- **Name:** Md. Moktadur Rahman Porag (Hero: Moktadur Rahman Porag)
- **Title:** Software Developer | CSE Student | Problem Solver
- **Institution:** Daffodil International University, Dhaka, Bangladesh
- **Degree:** BSc in Computer Science and Engineering
- **Cybersecurity Position:** Omitted from professional focus as instructed
- **Data Integrity:** No fabricated employment, awards, user metrics, or fake skill percentages
