# Michael Arthur — Portfolio Website

A custom-built portfolio website for GitHub Pages, featuring accordion-card navigation inspired by the thesis defense webpage pattern.

## Structure

```
portfolio/
├── index.html              ← Main portfolio page (all categories)
├── css/
│   ├── style.css           ← Global design system
│   └── project.css         ← Project detail page styles
├── js/
│   └── main.js             ← Accordion, scroll reveal, nav
├── projects/
│   ├── heavy-weight.html   ← Project detail (template)
│   ├── whispers-of-wellness.html   ← (create from template)
│   ├── meaningful-strides.html     ← (create from template)
│   ├── flyers-posters.html         ← (create from template)
│   ├── reports-books.html          ← (create from template)
│   ├── infographics.html           ← (create from template)
│   ├── ui-design.html              ← (create from template)
│   ├── process-flows.html          ← (create from template)
│   ├── nmep-materials.html         ← (create from template)
│   ├── clcd-communications.html    ← (create from template)
│   └── minet-system.html           ← (create from template)
├── images/                 ← Your project images go here
│   ├── portrait-1.jpg
│   ├── photo-2.jpg
│   ├── photo-3.jpg
│   ├── thumb-hwss.jpg      ← Card thumbnails (72x72)
│   ├── hwss-hero.jpg       ← Card hero images (16:9)
│   ├── hwss-hero-full.jpg  ← Detail page hero (wide)
│   └── ...etc
├── assets/
│   └── Michael_Arthur_CV.pdf  ← Your downloadable CV
└── README.md
```

## How to Deploy

1. Create a new GitHub repository (e.g., `portfolio`)
2. Push all these files to the `main` branch
3. Go to Settings → Pages → Source: Deploy from branch `main`, folder: `/ (root)`
4. Your site will be live at `https://arthurmichael72.github.io/portfolio/`

## How to Add Images

All image placeholders in the HTML are marked with comments showing exactly where to add your `<img>` tags. Search for `<!-- <img` to find them all.

### Steps:
1. Export images from Adobe Portfolio or your source files
2. Place them in the `images/` folder
3. Uncomment the `<img>` tags and remove the `<div class="placeholder">` elements
4. Recommended sizes:
   - **Hero photos:** 400×400px or larger
   - **Card thumbnails:** 144×144px (displayed at 72×72)
   - **Card hero images:** 1200×675px (16:9 ratio)
   - **Detail page heroes:** 1400×788px (16:9 ratio)
   - **Gallery images:** 800×450px (16:9 ratio)

## How to Add Project Detail Pages

`projects/heavy-weight.html` is a complete template. To create additional project pages:

1. Duplicate `heavy-weight.html`
2. Rename it (e.g., `whispers-of-wellness.html`)
3. Update the content: title, category, body text, images, metadata
4. The card in `index.html` already links to the correct filename

## Design System

- **Font:** Montserrat (loaded from Google Fonts)
- **Colors:** Navy `#394a62`, Crimson `#9f1c20`, Teal `#02605b`
- **Background:** Parchment `#faf8f4` with subtle noise texture
- **Cards:** Warm white with light borders, accordion expand/collapse
- **Interactions:** Scroll reveal, smooth scroll nav, hover states

## Categories

1. **Data Storytelling** — Heavy Weight, Whispers of Wellness, Meaningful Strides
2. **Graphic Design** — Flyers/Posters, Reports & Books
3. **Information Design** — Infographics, UI/UX, Process Flows
4. **Health Communication** — NMEP Materials, CLCD Communications
5. **Product Design** — MiNet Pharmacy System

## Customization

- Edit `css/style.css` for colors, fonts, spacing
- Edit `js/main.js` for interaction behavior
- All CSS uses variables (`:root`) for easy theme changes
- Fully responsive (mobile-first breakpoints at 768px and 480px)
