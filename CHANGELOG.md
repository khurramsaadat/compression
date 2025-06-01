# CHANGELOG.md

## 2024-06-01

### Major Changes
- Added dark mode toggle in Navbar (🌙/🌞) with Tailwind CSS support for dark mode.
- Ensured all text and UI elements are clear and vibrant in both light and dark modes.
- Updated Navbar: logo and Home link both navigate to homepage.
- FAQ page: Added detailed FAQ content and a Resources section with a link to [imagecompressr.com](https://imagecompressr.com/).
- Added a new FAQ article page: `/faq/how-to-compress-jpg-files` with tool comparisons and links.
- Improved SettingsPanel layout and font clarity.
- Improved post-compression messaging and call-to-action.
- All interactive components using React hooks are now marked as client components.

### Directory Structure
```
/ (root)
├── CHANGELOG.md
├── README.md
├── package.json
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── faq/
│   │       └── how-to-compress-jpg-files/
│   │           └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── FileDrop.tsx
│   │   ├── SettingsPanel.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── FAQ.tsx
│   │   └── FeedbackForm.tsx
│   └── styles/
│       └── globals.css
└── ... (config and lock files)
```

### Netlify Deployment Preparation
- All code is static and ready for Netlify deployment.
- No server-side code; all compression is client-side.
- Ensure `next.config.js` is set for static export if needed.
- Run `npm run build` and `npm run export` before deploying to Netlify.

--- 