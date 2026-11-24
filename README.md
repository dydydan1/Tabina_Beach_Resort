# 🌿 Tabina Spring Resort — Official Landing Page

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#license)

> A modern, responsive, nature-inspired landing page for **Tabina Spring Resort** — a freshwater retreat built around crystal-clear, flowing natural spring waters, shaded cottages, and family-friendly picnic groves.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design System & UI/UX](#-design-system--uiux)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Media & Photography Credits](#-media--photography-credits)
- [License](#-license)

---

## 🌿 Overview

This website serves as the primary digital presence and booking inquiry gateway for **Tabina Spring Resort**. Engineered with React, TypeScript, and Vite, it emphasizes speed, accessibility, and an immersive editorial aesthetic matching the lush, serene ambiance of a freshwater spring destination.

---

## ✨ Key Features

- **🌊 Hero Section:** High-impact full-bleed imagery, value propositions, key facts strip, and primary calls to action.
- **🌿 About Section:** Storytelling about the natural flow of the spring water, layered imagery, and foundational resort highlights.
- **👨‍👩‍👧 Founders' Story Section:** Dedicated profiles for the founder (**Marites Razonado**) and co-founders (**Evan Razonado** and **Danilo Razonado**) featuring **interactive collapsible story cards** with smooth CSS grid transitions.
- **🏊 Facilities & Amenities:** Visual card grid showcasing spring pools, grotto, private huts, and picnic groves with an amenities checklist.
- **🛖 Cottages & Rates:** Clear pricing cards with capacities, inclusion checklists, and one-click **"Inquire Cottage"** buttons that auto-fill the contact form.
- **📸 Filtered Photo Gallery:** Dynamic category filtering (`Spring & Pools`, `Nature & Grounds`, `Cottages`) and full-screen lightbox image viewer.
- **⭐ Why Choose Us & Reviews:** Highlights resort differentiators (flowing spring water, tranquility, space) paired with guest testimonial cards.
- **📬 Contact & Booking Inquiry:** Accessible, client-side validated form connected to an interactive map card, operating hours, and social links.
- **🎥 Video Walkthrough Assets:** Pre-built 1080p full presentation (`website-walkthrough.mp4`) and 10s social teaser (`website-walkthrough-10s.mp4`) in `public/`.
- **♿ Accessibility & Smooth Motion:** Native `IntersectionObserver` scroll-reveal animations, semantic landmarks, skip links, and full keyboard navigation.

---

## 🎨 Design System & UI/UX

The site uses a bespoke CSS design system with zero heavy CSS framework bloat:

| Color Token | Hex / Value | Usage |
|---|---|---|
| `--forest` | `#174D35` | Primary brand ink, dark sections, headings |
| `--emerald` | `#236B4B` | Accent highlights, buttons, eyebrow borders |
| `--water` | `#5BAFC2` | Accent water tone, quote borders, focus rings |
| `--mist` | `#D9F0EC` | Soft badge backgrounds, icon containers |
| `--sand` | `#F3EBDD` | Warm secondary background tone |
| `--white` | `#FFFFFF` | Clean background and card surfaces |

- **Typography:** `Playfair Display` (editorial serif for headings) & `Poppins` (clean geometric sans-serif for body readability).
- **Responsive:** Mobile-first fluid layout using CSS `clamp()` scaling, flexible CSS grids, and a slide-out mobile drawer menu.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 5](https://vitejs.dev/)
- **Styling:** Vanilla CSS with custom design tokens (`src/styles/global.css`)
- **Icons:** Lightweight, hand-crafted SVG icon library (`src/components/Icons.tsx`)
- **Animation:** Custom scroll reveal component using native `IntersectionObserver`

---

## 📁 Folder Structure

```text
resort-site/
├── public/
│   ├── favicon.svg                  # Brand favicon
│   ├── images/                      # Resort photography & owner portraits
│   ├── website-walkthrough.mp4      # 24s full HD website walkthrough video
│   └── website-walkthrough-10s.mp4  # 10s social media snippet video
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx         # Story & foundational highlights
│   │   ├── ContactSection.tsx       # Inquiry form & location details
│   │   ├── CottageRatesSection.tsx  # Cottages, capacities, and pricing
│   │   ├── FacilitiesSection.tsx    # Facilities grid & amenity chips
│   │   ├── Footer.tsx               # Footer navigation & copyright
│   │   ├── GallerySection.tsx       # Filterable gallery & lightbox
│   │   ├── HeroSection.tsx          # Full-bleed hero banner & CTAs
│   │   ├── Icons.tsx                # SVG icon components
│   │   ├── Navbar.tsx               # Sticky desktop nav & mobile drawer
│   │   ├── OwnerSection.tsx         # Collapsible 3-owner story cards
│   │   ├── Reveal.tsx               # Scroll-triggered entrance animations
│   │   ├── TestimonialsSection.tsx  # Guest review cards
│   │   └── WhyChooseUsSection.tsx   # Core resort value pillars
│   ├── data/
│   │   └── resort.ts                # Centralized resort data & content
│   ├── styles/
│   │   └── global.css               # Design system, tokens, and utilities
│   ├── App.tsx                      # Main single-page application orchestrator
│   └── main.tsx                     # React application entry point
├── index.html                       # HTML shell, fonts, and OpenGraph tags
├── package.json                     # Project scripts and dependencies
├── tsconfig.json                    # TypeScript compiler configuration
└── vite.config.ts                   # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version `18.0.0` or higher recommended)
- `npm`, `yarn`, or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/resort-site.git
   cd resort-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled assets will be in the `dist/` directory.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## ⚙️ Customization Guide

### 1. Updating Resort Information
All text, contact details, cottage prices, hours, and navigation links are centralized in:
📂 **[`src/data/resort.ts`](src/data/resort.ts)**

- **Contact & Location:** Update `contactDetails` (address, phone, email, Google Maps pin).
- **Cottage Pricing & Capacity:** Edit `cottages` array with actual rates and inclusions.
- **Owners & Story:** Edit `owners` array to modify founder bios, quotes, and highlights.
- **Testimonials:** Replace sample quotes in `testimonials` with verified guest reviews.

### 2. Replacing Photography
Placeholder images are stored in `public/images/`. Replace them with your own high-resolution resort photos using the same dimensions and filenames to maintain styling fidelity. Refer to [`IMAGE-CREDITS.md`](IMAGE-CREDITS.md) for suggested aspect ratios and resolutions.

### 3. Connecting the Contact Form
The contact form in `src/components/ContactSection.tsx` currently performs client-side validation. To receive inquiries directly to your inbox, connect it to any form endpoint service:
- [Formspree](https://formspree.io/)
- [Resend](https://resend.com/)
- [EmailJS](https://www.emailjs.com/)

---

## 🌐 Deployment

This project builds to static HTML/CSS/JS and can be hosted on any static hosting platform:

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect your repository in [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to GitHub Pages
You can use GitHub Actions or the `gh-pages` package:
1. Ensure `base: './'` is set in `vite.config.ts`.
2. Configure a GitHub Action to deploy the `dist/` folder on push to `main`.

---

## 📷 Media & Photography Credits

This project includes demo photography from **Wikimedia Commons** and **Unsplash** under Creative Commons and Unsplash licenses. Full details, authors, and license links are documented in [`IMAGE-CREDITS.md`](IMAGE-CREDITS.md).

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
Feel free to use and adapt it for your own resort or hospitality projects!
